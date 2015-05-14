//ui no jQuery
var app = app || {};

app.ui = (function(w,d, el){
  // References to DOM elements
  // var el = app.el.el;
  
  // variables for storing the app's current state
  var state = {
    formFilled : false, // has the user filled out the address form?    
    currentSlide : null,
    curSlideIndex : 0,
    pageHeight : null,
  };

  // store user address 
  var parsedStreetAddress = {};

  // slide animation flag - is app animating?
  var isAnimating = false;

  // height of window
  var pageHeight = w.innerHeight;

  // key codes for up / down arrows for navigation
  var keyCodes = {
    UP : 38,
    DOWN : 40
  };

  // to store drop down menu for selecting borough
  var dd = null; 

  /*
  * Event listeners
  */

  // resize window height
  w.onresize = onResize;
  
  // use mouse wheel to scroll
  addWheelListener( w, function(e) { 
    onMouseWheel(e.deltaY); 
    e.preventDefault(); 
  });
  
  // up / down key navigation
  w.onkeydown = onKeyDown;
  
  // go back
  // addEventListenerList(el.navGoPrev, 'click', goToPrevSlide);
  
  // go forward
  addEventListenerList(el.navGoNext, 'click', goToNextSlide);

  // go to inspect rent-history
  addEventListenerList(el.navGoFour, 'click', function(e){
    e.preventDefault();
    state.formFilled = true;
    hideFormValidationErrors();
    goToSlide(el.slides[6]);
  });

  // hamburger icon
  el.burgerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    toggleClass(el.burgerIcon, 'open');
    toggleClass(el.mainNavList, 'responsive');
  });

  // drop down class
  // code reference: http://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling/
  function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.drop-down > li');
    this.val = undefined;    
    this.index = -1;
    this.initEvents();
  }

  DropDown.prototype = {
    initEvents : function() {
      var obj = this;

      // console.log('initEvents this: ', this);

      obj.dd.on('click', function(e){
        e.preventDefault();
        // $(this).toggleClass('active');
        toggleClass(this, 'active');
        return false;
      });

      obj.opts.on('click',function(e){
        e.preventDefault();
        var opt = $(this);
        obj.val = opt.text();
        // obj.data = opt.children('span').text();
        obj.index = opt.index();
        obj.placeholder.text('Borough: ' + obj.val);        
        // console.log('obj: ', obj);  
      });
    },

    getValue : function() {
      return this.val;
    },

    getIndex : function() {
      return this.index;
    }
  };

  dd = new DropDown( $('.user-data.borough-select') );

  // if dropdown is visible & user clicks outside of it collapse it
  el.slidesContainer.addEventListener('click', function(e){
    if (hasClass(el.boroSelect, 'active')) {
      removeClass(el.boroSelect, 'active');
    }    
  });

  // search button for address
  el.search.addEventListener('click', function(e){
    e.preventDefault();
    var streetAddress = el.addressInput.value,
          boro = dd.val;    
    _gaq.push(['_trackEvent', 'Address Entered', 'Search', streetAddress + ', ' + boro ]);
    checkAddressInput(streetAddress, boro);
  });

  // start over
  addEventListenerList(el.navGoFirst, 'click', goToFirstSlide);

  // hide address error message if it's displayed and user enters text
  el.addressInput.addEventListener("blur", function(e){
    if (el.addressInput.value !== "" && hasClass(el.valErrorAddress, 'vis-hidden') !== true) {
      addClass(el.valErrorAddress, 'vis-hidden');
    }
  });

  // hide boro error message if it's displayed and user clicks a button
  addEventListenerList(el.boroDropDownItems, 'click', function(e){
    if (hasClass(el.valErrorBoro, 'vis-hidden') !== true && dd.getValue !== undefined) {
      addClass(el.valErrorBoro, 'vis-hidden');
    }
  });

  el.lightBox.addEventListener('click', function(e) {
    e.preventDefault();    
    goToSlide(el.slides[6]);
    w.location.hash = '';
  });


  /*
  * Helper functions
  **/

  function addEventListenerList(list, event, fn) {
    var i=0, len=list.length;
    for (i; i< len; i++) {
        list[i].addEventListener(event, fn, false);
    }
  }

  function onKeyDown(event){
    var pressedKey = event.keyCode;
    if (pressedKey === keyCodes.UP) {
      goToPrevSlide();
      event.preventDefault();
    } 
    else if (pressedKey === keyCodes.DOWN) {
      goToNextSlide();
      event.preventDefault();
    }
  }

  function onMouseWheel(event) {
    var delta = event / 30 || -event;    
    if (delta < -1) {
      goToNextSlide();
    }
    else if (delta > 1) {
      goToPrevSlide();
    } 
  }

  function getSlideIndex(slide){
      var index;
      for (var i=0; i < el.slides.length; i++) { 
        if (el.slides[i] === slide) { 
          index = i; 
        }        
      }
      return index;
  }

  function goToSlide(slide){
    if (!isAnimating && slide) {
      isAnimating = true;
      el.currentSlide = slide;            
      var index = getSlideIndex(slide);                  
      TweenLite.to(el.slidesContainer, 1, {scrollTo: {y: pageHeight * index}, onComplete: onSlideChangeEnd});
    }
  }

  function goToPrevSlide(callback){    
    var previous = el.currentSlide.previousElementSibling;
    if (previous) {      
      goToSlide(previous);       
      if (callback && typeof callback === "function") { 
        callback();
        // console.log('goToPrevSlide callback called.');
      }
    }    
  }

  function goToNextSlide(callback) {
    var index = getSlideIndex(el.currentSlide);
    var next = el.currentSlide.nextElementSibling;
    // console.log('formFilled: ', state.formFilled, ' index: ', index);
    if (next && ( index === 0 || (index >= 1 && state.formFilled === true ) ) ) {      
      goToSlide(next);
      if (callback && typeof callback === "function") { 
        callback(); 
        // console.log('goToNextSlide callback called.');
      }  
    }      
  }

  function goToFirstSlide() {
    // reset everything to defaults
    if (el.currentSlide) {
      el.addressInput.value = '';
      resetSearchResultMsg();      
      hideFormValidationErrors();
      resetBoroValue();
      state.formFilled = false;
      app.map.resetMap();
      addClass(el.yes, 'hidden');
      removeClass(el.no, 'hidden');      
      goToSlide(el.slides[0]);
    }
  }

  function onSlideChangeEnd(){
    isAnimating = false;
    updateProgCircles(el.currentSlide);
  }

  function updateProgCircles(slide) {
    var s = getSlideIndex(slide),
          i = 0,
          l = app.ui.el.progressCircles.length;
    
    for (i; i<l; i++) {
      var circle = el.progressCircles[i];
      if (s===i) {
        circle.style.backgroundImage = 'url(assets/png/oval_25_filled.png)';
        circle.style.backgroundSize = '25px';
        circle.style.backgroundRepeat = 'no-repeat';        
      } else {
        circle.style.background = 'url(assets/png/oval_25_blank.png)';
        circle.style.backgroundSize = '25px';
        circle.style.backgroundRepeat = 'no-repeat';               
      }
    }
  }

  /*
  ** jQuery-esque helper functions
   */

   // resize window
  function onResize() {
    // console.log('onResize called');
    var newPageHeight = w.innerHeight;
    var slide = el.currentSlide;
    var index = getSlideIndex(slide);
    if (pageHeight !== newPageHeight) {
      pageHeight = newPageHeight;
      //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
      TweenLite.set([el.slidesContainer, el.slides], {height: pageHeight + "px"});
      //The current slide should be always on the top
      TweenLite.set(el.slidesContainer, {scrollTo: {y: pageHeight * index}});
    }
  }

  // iterate over node lists
  function iterateNodeList(list,fn) {
    if (list && list.length) {
      var i=0, len=list.length;
      for (i; i<len; i++) {
        return fn(list[i], i);
      }
    }
    if (list && !list.length) {
      return fn(list);
    }
  }

  function indexOf(array, item) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item)
        return i;
    }
    return -1;
  }  
  
  function hasClass(el, className) {
    return iterateNodeList(el, function(el){
      if (el.classList) {
        return el.classList.contains(className);
      } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }        
    });
  }

  function addClass(el, className) {
    iterateNodeList(el, function(el) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    });
  }

  function toggleClass(el, className) {
    iterateNodeList(el, function(el){
      if (el.classList) {
        el.classList.toggle(className);
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >=0) {
          classes.splice(existingIndex, 1);
        } else {
          classes.push(className);
          el.className = classes.join(' ');
        }
      }
    });
  }

  function removeClass(el, className) {
    iterateNodeList(el, function(el){
      if (el.classList) {
        el.classList.remove(className);
      }
      else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    });
  }

  /*
  ** User address related functions
   */

   // form validation for when user enters address and selects boro
  function checkAddressInput(address, borough) {        
    if (address !== "" && borough !== undefined) {  
      state.formFilled = true;    
      goToNextSlide();
      var parsed_address = parseAddressInput(address);      
      // delay API calls so user sees loading gif
      setTimeout(function(){        
        app.map.geoclient(parsed_address[0], parsed_address[1], borough); 
      }, 1000);              

    } else if (address === "" && borough === undefined) {      
      if (hasClass(el.valErrorAddress, 'vis-hidden')===true && hasClass(el.valErrorBoro, 'vis-hidden')===true){
        toggleClass(el.valErrorAddress, 'vis-hidden');
        toggleClass(el.valErrorBoro, 'vis-hidden');
      }

    } else if (borough === undefined) {
      // alert('Please select your borough.');
      if (hasClass(el.valErrorBoro, 'vis-hidden')===true) {
        toggleClass(el.valErrorBoro, 'vis-hidden');
      }

    } else if (address === '') {
      // alert('Please enter your house number and street.');
      if (hasClass(el.valErrorAddress, 'vis-hidden')===true) {
        toggleClass(el.valErrorAddress, 'vis-hidden');
      }

    } else {
      goToPrevSlide();
    } 
  }

  // separate the building number and street name from the address input
  function parseAddressInput(input) {
    var input_split = input.split(' '),
          len = input_split.length,
          num = input_split[0],
          input_last = input_split.splice(1, len),
          street = input_last.join(' ');
    return [num, street];
  }

  // create the mailto content for requesting rent history from dhcr
  function createMailTo() {
    var email = "rentinfo@nyshcr.org",
          subject = "request for rent history",
          body = "Hello, \n\n" +
                      "I, YOUR NAME HERE, am currently renting " + 
                      "YOUR ADDRESS, APARTMENT NUMBER, BOROUGH, ZIPCODE" +
                      " and would like to request the rent history for this apartment." +
                      " Any information you can provide me would be greatly appreciated. \n\n" +
                      "thank you,\n\n" +
                      "- YOUR NAME HERE",
          msg = 'mailto:' + encodeURIComponent(email) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body); 
    el.mailTo.setAttribute('href', msg);
  } 

  // reset the yes / no message above map on slide 4
  function resetSearchResultMsg() {
    if (el.yesNoState === true) {
      toggleClass(el.yes, 'hidden');
      toggleClass(el.no, 'hidden');
      el.yesNoState = false;
    }
  }

  // hide all validation errors
  function hideFormValidationErrors() {
    var i=0, len=el.valErrors.length;
    for (i; i<len; i++) {
      if (hasClass(el.valErrors[i], 'vis-hidden')===false){
        addClass(el.valErrors[i], 'vis-hidden');
      }   
    }    
  }

  function resetBoroValue() {
    dd.val = undefined;
    dd.placeholder.text('Select a Borough');
  }

  function addToCalendar() {
    var curDate = new Date(),
          startDate,
          endDate;
    startDate = new Date(curDate);
    startDate.setDate(startDate.getDate() + 7);
    endDate = new Date(curDate);
    endDate.setDate(startDate.getDate() + 1);
    el.addToCalendar.innerHTML = 
        '<var class="atc_event">' +
            '<var class="atc_date_start">' + startDate + '</var>' +
            '<var class="atc_date_end">' + endDate + '</var>' +
            '<var class="atc_timezone">America/New_York</var>' +
            '<var class="atc_title">Check mail for my rent history</var>' +
            '<var class="atc_description">See if your rent history arrived in the mail, then go back to http://amirentstabilzed.com!</var>' +
            '<var class="atc_location">my house</var>'+
        '</var>';   
    // init the add to calendar library
    w.addtocalendar.load();
    // change the text of the link to be more descriptive
    var atcLink = d.querySelector('#atc_text_link_link.atcb-link');
    atcLink.innerHTML = "Click here to create a calendar reminder.";
    atcLink.tabindex = "-1";
  }

  // get the whole damn thing going
  function init(){    
    el.currentSlide = el.slides[0];
    goToSlide(el.currentSlide);
    addClass(el.yes, 'hidden');
    createMailTo();
    addToCalendar();
    app.map.init();    
  }
  
  return {
    init : init,
    el : el,    
    f : {
      goToSlide: goToSlide,
      goToPrevSlide : goToPrevSlide,
      goToNextSlide : goToNextSlide,      
      toggleClass : toggleClass,
      hasClass : hasClass,
      addClass : addClass,
      resetBoroValue : resetBoroValue
    },
    state : state
  };

})(window, document, app.el.el);