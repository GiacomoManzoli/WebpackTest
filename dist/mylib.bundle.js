(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLib"] = factory();
	else
		root["MyLib"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, BIMSURFER) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log($);
console.log(BIMSURFER);

exports.default = {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./src/libs/jquery.js"), __webpack_require__(/*! bimsurfer */ "./src/libs/bimsurfer/bimsurfer.js")))

/***/ }),

/***/ "./src/libs/bimsurfer/bimsurfer.js":
/*!*****************************************!*\
  !*** ./src/libs/bimsurfer/bimsurfer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {var _BIMSURFER$Constants$;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/*! jQuery UI - v1.10.3 - 2013-10-08
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */(function($,undefined){var uuid=0,runiqueId=/^ui-id-\d+$/;// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui=$.ui||{};$.extend($.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});// plugins
$.fn.extend({focus:function(orig){return function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):orig.apply(this,arguments);};}($.fn.focus),scrollParent:function scrollParent(){var scrollParent;if($.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){scrollParent=this.parents().filter(function(){return /(relative|absolute|fixed)/.test($.css(this,"position"))&&/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}else{scrollParent=this.parents().filter(function(){return /(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}return /fixed/.test(this.css("position"))||!scrollParent.length?$(document):scrollParent;},zIndex:function zIndex(_zIndex){if(_zIndex!==undefined){return this.css("zIndex",_zIndex);}if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}elem=elem.parent();}}return 0;},uniqueId:function uniqueId(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++uuid;}});},removeUniqueId:function removeUniqueId(){return this.each(function(){if(runiqueId.test(this.id)){$(this).removeAttr("id");}});}});// selectors
function _focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&// the element and all of its ancestors must be visible
visible(element);}function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):// support: jQuery <1.8
function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function focusable(element){return _focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function tabbable(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&_focusable(element,!isTabIndexNaN);}});// support: jQuery <1.8
if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});}// support: jQuery <1.8
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key));}else{return removeData.call(this);}};}($.fn.removeData);}// deprecated
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.support.selectstart="onselectstart"in document.createElement("div");$.fn.extend({disableSelection:function disableSelection(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault();});},enableSelection:function enableSelection(){return this.unbind(".ui-disableSelection");}});$.extend($.ui,{// $.ui.plugin is deprecated. Use $.widget() extensions instead.
plugin:{add:function add(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function call(instance,name,args){var i,set=instance.plugins[name];if(!set||!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11){return;}for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},// only used by resizable
hasScroll:function hasScroll(el,a){//If overflow is hidden, the element might have extra content, but the user wants to hide it
if($(el).css("overflow")==="hidden"){return false;}var scroll=a&&a==="left"?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
el[scroll]=1;has=el[scroll]>0;el[scroll]=0;return has;}});})(jQuery);(function($,undefined){var uuid=0,slice=Array.prototype.slice,_cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){try{$(elem).triggerHandler("remove");// http://bugs.jquery.com/ticket/8235
}catch(e){}}_cleanData(elems);};$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,// proxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
proxiedPrototype={},namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}// create selector for plugin
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){// allow instantiation without "new" keyword
if(!this._createWidget){return new constructor(options,element);}// allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
if(arguments.length){this._createWidget(options,element);}};// extend with the existing constructor to carry over any static properties
$.extend(constructor,existingConstructor,{version:prototype.version,// copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:$.extend({},prototype),// track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]});basePrototype=new base();// we need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}proxiedPrototype[prop]=function(){var _super=function _super(){return base.prototype[prop].apply(this,arguments);},_superApply=function _superApply(args){return base.prototype[prop].apply(this,args);};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};}();});constructor.prototype=$.widget.extend(basePrototype,{// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix:name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;// redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});// remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}$.widget.bridge(name,constructor);};$.widget.extend=function(target){var input=slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){// Clone objects
if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):// Don't extend strings, arrays, etc. with objects
$.widget.extend({},value);// Copy everything else by reference
}else{target[key]=value;}}}}return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=slice.call(arguments,1),returnValue=this;// allow multiple hashes to be passed on init
options=!isMethodCall&&args.length?$.widget.extend.apply(null,[options].concat(args)):options;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{})._init();}else{$.data(this,fullName,new object(options,this));}});}return returnValue;};};$.Widget=function()/* options, element */{};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,// callbacks
create:null},_createWidget:function _createWidget(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function remove(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?// element within the document
element.ownerDocument:// element is window or document
element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}this._create();this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function destroy(){this._destroy();// we can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.unbind(this.eventNamespace)// 1.9 BC for #7810
// TODO remove dual storage
.removeData(this.widgetName).removeData(this.widgetFullName)// support: jquery <1.6.3
// http://bugs.jquery.com/ticket/9413
.removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");// clean up events and states
this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");},_destroy:$.noop,widget:function widget(){return this.element;},option:function option(key,value){var options=key,parts,curOption,i;if(arguments.length===0){// don't return a reference to the internal hash
return $.widget.extend({},this.options);}if(typeof key==="string"){// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}key=parts.pop();if(value===undefined){return curOption[key]===undefined?null:curOption[key];}curOption[key]=value;}else{if(value===undefined){return this.options[key]===undefined?null:this.options[key];}options[key]=value;}}this._setOptions(options);return this;},_setOptions:function _setOptions(options){var key;for(key in options){this._setOption(key,options[key]);}return this;},_setOption:function _setOption(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!value).attr("aria-disabled",value);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");}return this;},enable:function enable(){return this._setOption("disabled",false);},disable:function disable(){return this._setOption("disabled",true);},_on:function _on(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;// no suppressDisabledCheck flag, shuffle arguments
if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}// no element argument, shuffle and use this.element
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{// accept selectors, DOM elements
element=delegateElement=$(element);this.bindings=this.bindings.add(element);}$.each(handlers,function(event,handler){function handlerProxy(){// allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}// copy the guid so direct unbinding works
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}var match=event.match(/^(\w+)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy);}else{element.bind(eventName,handlerProxy);}});},_off:function _off(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName);},_delay:function _delay(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function _hoverable(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function mouseenter(event){$(event.currentTarget).addClass("ui-state-hover");},mouseleave:function mouseleave(event){$(event.currentTarget).removeClass("ui-state-hover");}});},_focusable:function _focusable(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function focusin(event){$(event.currentTarget).addClass("ui-state-focus");},focusout:function focusout(event){$(event.currentTarget).removeClass("ui-state-focus");}});},_trigger:function _trigger(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();// the original event may come from any element
// so we need to reset the target on the new event
event.target=this.element[0];// copy original event properties over to the new event
orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}var hasOptions,effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}next();});}};});})(jQuery);(function($,undefined){var mouseHandled=false;$(document).mouseup(function(){mouseHandled=false;});$.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function _mouseInit(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function _mouseDestroy(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function _mouseDown(event){// don't let more than one widget handle mouseStart
if(mouseHandled){return;}// we may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(event);this._mouseDownEvent=event;var that=this,btnIsLeft=event.which===1,// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
elIsCancel=typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false;if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(event)!==false;if(!this._mouseStarted){event.preventDefault();return true;}}// Click event may never have fired (Gecko & Opera)
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}// these delegates are required to keep context
this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function _mouseMove(event){// IE mouseup check - mouseup happened when mouse was out of window
if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,event)!==false;this._mouseStarted?this._mouseDrag(event):this._mouseUp(event);}return!this._mouseStarted;},_mouseUp:function _mouseUp(event){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}this._mouseStop(event);}return false;},_mouseDistanceMet:function _mouseDistanceMet(event){return Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance;},_mouseDelayMet:function _mouseDelayMet()/* event */{return this.mouseDelayMet;},// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function _mouseStart()/* event */{},_mouseDrag:function _mouseDrag()/* event */{},_mouseStop:function _mouseStop()/* event */{},_mouseCapture:function _mouseCapture()/* event */{return true;}});})(jQuery);(function($,undefined){$.ui=$.ui||{};var cachedScrollbarWidth,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}function parseCss(element,property){return parseInt($.css(element,property),10)||0;}function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}$.position={scrollbarWidth:function scrollbarWidth(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}var w1,w2,div=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}div.remove();return cachedScrollbarWidth=w1-w2;},getScrollInfo:function getScrollInfo(within){var overflowX=within.isWindow?"":within.element.css("overflow-x"),overflowY=within.isWindow?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||overflowX==="auto"&&within.width<within.element[0].scrollWidth,hasOverflowY=overflowY==="scroll"||overflowY==="auto"&&within.height<within.element[0].scrollHeight;return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function getWithinInfo(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]);return{element:withinElement,isWindow:isWindow,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:isWindow?withinElement.width():withinElement.outerWidth(),height:isWindow?withinElement.height():withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}// make a copy, we don't want to modify arguments
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){// force left top to allow flipping
options.at="left top";}targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;// clone to reuse original targetOffset later
basePosition=$.extend({},targetOffset);// force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";// calculate offsets
horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];// reduce to just the positions without the offsets
options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});// normalize collision option
if(collision.length===1){collision[1]=collision[0];}if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}position.left+=myOffset[0];position.top+=myOffset[1];// if the browser doesn't support fractions, then round for consistent results
if(!$.support.offsetFractions){position.left=round(position.left);position.top=round(position.top);}collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){// adds feedback as second argument to using callback, if present
using=function using(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}options.using.call(this,props,feedback);};}elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function left(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;// element is wider than within
if(data.collisionWidth>outerWidth){// element is initially over the left side of within
if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;// element is initially over right side of within
}else if(overRight>0&&overLeft<=0){position.left=withinOffset;// element is initially over both left and right sides of within
}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}// too far left -> align with left edge
}else if(overLeft>0){position.left+=overLeft;// too far right -> align with right edge
}else if(overRight>0){position.left-=overRight;// adjust based on position and margin
}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function top(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;// element is taller than within
if(data.collisionHeight>outerHeight){// element is initially over the top of within
if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;// element is initially over bottom of within
}else if(overBottom>0&&overTop<=0){position.top=withinOffset;// element is initially over both top and bottom of within
}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}// too far up -> align with top
}else if(overTop>0){position.top+=overTop;// too far down -> align with bottom edge
}else if(overBottom>0){position.top-=overBottom;// adjust based on position and margin
}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function left(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function top(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(position.top+myOffset+atOffset+offset>overTop&&(newOverBottom<0||newOverBottom<abs(overTop))){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(position.top+myOffset+atOffset+offset>overBottom&&(newOverTop>0||abs(newOverTop)<overBottom)){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function left(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function top(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};// fraction support test
(function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");//Create a "fake body" for testing based on method used in jQuery.support
testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"});}for(i in testElementStyle){testElement.style[i]=testElementStyle[i];}testElement.appendChild(div);testElementParent=body||document.documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);div.style.cssText="position: absolute; left: 10.7432222px;";offsetLeft=$(div).offset().left;$.support.offsetFractions=offsetLeft>10&&offsetLeft<11;testElement.innerHTML="";testElementParent.removeChild(testElement);})();})(jQuery);(function($,undefined){$.widget("ui.draggable",$.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,// callbacks
drag:null,start:null,stop:null},_create:function _create(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative";}if(this.options.addClasses){this.element.addClass("ui-draggable");}if(this.options.disabled){this.element.addClass("ui-draggable-disabled");}this._mouseInit();},_destroy:function _destroy(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();},_mouseCapture:function _mouseCapture(event){var o=this.options;// among others, prevent a drag on a resizable-handle
if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return false;}//Quit if we're not on a valid handle
this.handle=this._getHandle(event);if(!this.handle){return false;}$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){$("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css($(this).offset()).appendTo("body");});return true;},_mouseStart:function _mouseStart(event){var o=this.options;//Create and append the visible helper
this.helper=this._createHelper(event);this.helper.addClass("ui-draggable-dragging");//Cache the helper size
this._cacheHelperProportions();//If ddmanager is used for droppables, set the global draggable
if($.ui.ddmanager){$.ui.ddmanager.current=this;}/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 *///Cache the margins of the original element
this._cacheMargins();//Store the helper's css position
this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offsetParent=this.helper.offsetParent();this.offsetParentCssPosition=this.offsetParent.css("position");//The element's absolute position on the page minus margins
this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};//Reset scroll cache
this.offset.scroll=false;$.extend(this.offset,{click:{//Where the click happened, relative to the element
left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()//This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
});//Generate the original position
this.originalPosition=this.position=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);//Set a containment if given in the options
this._setContainment();//Trigger event + callbacks
if(this._trigger("start",event)===false){this._clear();return false;}//Recache the helper size
this._cacheHelperProportions();//Prepare the droppable offsets
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}this._mouseDrag(event,true);//Execute the drag once - this causes the helper not to be visible before getting its correct position
//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event);}return true;},_mouseDrag:function _mouseDrag(event,noPropagation){// reset any necessary cached properties (see #5009)
if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset();}//Compute the helpers position
this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");//Call plugins and callbacks and use the resulting position if something is returned
if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp({});return false;}this.position=ui.position;}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}return false;},_mouseStop:function _mouseStop(event){//If we are using droppables, inform the manager about the drop
var that=this,dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event);}//if a drop comes from outside (a sortable)
if(this.dropped){dropped=this.dropped;this.dropped=false;}//if the original element is no longer in the DOM don't bother to continue (see #8269)
if(this.options.helper==="original"&&!$.contains(this.element[0].ownerDocument,this.element[0])){return false;}if(this.options.revert==="invalid"&&!dropped||this.options.revert==="valid"&&dropped||this.options.revert===true||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped)){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==false){that._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}return false;},_mouseUp:function _mouseUp(event){//Remove frame helpers
$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this);});//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event);}return $.ui.mouse.prototype._mouseUp.call(this,event);},cancel:function cancel(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({});}else{this._clear();}return this;},_getHandle:function _getHandle(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:true;},_createHelper:function _createHelper(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):o.helper==="clone"?this.element.clone().removeAttr("id"):this.element;if(!helper.parents("body").length){helper.appendTo(o.appendTo==="parent"?this.element[0].parentNode:o.appendTo);}if(helper[0]!==this.element[0]&&!/(fixed|absolute)/.test(helper.css("position"))){helper.css("position","absolute");}return helper;},_adjustOffsetFromHelper:function _adjustOffsetFromHelper(obj){if(typeof obj==="string"){obj=obj.split(" ");}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function _getParentOffset(){//Get the offsetParent and cache its position
var po=this.offsetParent.offset();// This is a special case where we need to modify a offset calculated on start, since the following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}//This needs to be actually done for all browsers, since pageX/pageY includes this information
//Ugly IE fix
if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie){po={top:0,left:0};}return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function _getRelativeOffset(){if(this.cssPosition==="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function _cacheMargins(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0};},_cacheHelperProportions:function _cacheHelperProportions(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function _setContainment(){var over,c,ce,o=this.options;if(!o.containment){this.containment=null;return;}if(o.containment==="window"){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return;}if(o.containment==="document"){this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return;}if(o.containment.constructor===Array){this.containment=o.containment;return;}if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}c=$(o.containment);ce=c[0];if(!ce){return;}over=c.css("overflow")!=="hidden";this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=c;},_convertPositionTo:function _convertPositionTo(d,pos){if(!pos){pos=this.position;}var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;//Cache the scroll
if(!this.offset.scroll){this.offset.scroll={top:scroll.scrollTop(),left:scroll.scrollLeft()};}return{top:pos.top+// The absolute mouse position
this.offset.relative.top*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top*mod-// The offsetParent's offset without borders (offset + border)
(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*mod,left:pos.left+// The absolute mouse position
this.offset.relative.left*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left*mod-// The offsetParent's offset without borders (offset + border)
(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*mod};},_generatePosition:function _generatePosition(event){var containment,co,top,left,o=this.options,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,pageX=event.pageX,pageY=event.pageY;//Cache the scroll
if(!this.offset.scroll){this.offset.scroll={top:scroll.scrollTop(),left:scroll.scrollLeft()};}/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */// If we are not dragging yet, we won't check for options
if(this.originalPosition){if(this.containment){if(this.relative_container){co=this.relative_container.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top];}else{containment=this.containment;}if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left;}if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top;}if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left;}if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top;}}if(o.grid){//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3]?top:top-this.offset.click.top>=containment[1]?top-o.grid[1]:top+o.grid[1]:top;left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2]?left:left-this.offset.click.left>=containment[0]?left-o.grid[0]:left+o.grid[0]:left;}}return{top:pageY-// The absolute mouse position
this.offset.click.top-// Click offset (relative to the element)
this.offset.relative.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top+(// The offsetParent's offset without borders (offset + border)
this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top),left:pageX-// The absolute mouse position
this.offset.click.left-// Click offset (relative to the element)
this.offset.relative.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left+(// The offsetParent's offset without borders (offset + border)
this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)};},_clear:function _clear(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove();}this.helper=null;this.cancelHelperRemoval=false;},// From now on bulk stuff - mainly helpers
_trigger:function _trigger(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui]);//The absolute position has to be recalculated after plugins
if(type==="drag"){this.positionAbs=this._convertPositionTo("absolute");}return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function _uiHash(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.ui.plugin.add("draggable","connectToSortable",{start:function start(event,ui){var inst=$(this).data("ui-draggable"),o=inst.options,uiSortable=$.extend({},ui,{item:inst.element});inst.sortables=[];$(o.connectToSortable).each(function(){var sortable=$.data(this,"ui-sortable");if(sortable&&!sortable.options.disabled){inst.sortables.push({instance:sortable,shouldRevert:sortable.options.revert});sortable.refreshPositions();// Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
sortable._trigger("activate",event,uiSortable);}});},stop:function stop(event,ui){//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
var inst=$(this).data("ui-draggable"),uiSortable=$.extend({},ui,{item:inst.element});$.each(inst.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;inst.cancelHelperRemoval=true;//Don't remove the helper in the draggable instance
this.instance.cancelHelperRemoval=false;//Remove it in the sortable instance (so sortable plugins like revert still work)
//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: "valid/invalid"
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert;}//Trigger the stop of the sortable
this.instance._mouseStop(event);this.instance.options.helper=this.instance.options._helper;//If the helper has been the original item, restore properties in the sortable
if(inst.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"});}}else{this.instance.cancelHelperRemoval=false;//Remove the helper in the sortable instance
this.instance._trigger("deactivate",event,uiSortable);}});},drag:function drag(event,ui){var inst=$(this).data("ui-draggable"),that=this;$.each(inst.sortables,function(){var innermostIntersecting=false,thisSortable=this;//Copy over some variables to allow calling the sortable's native _intersectsWith
this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){innermostIntersecting=true;$.each(inst.sortables,function(){this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this!==thisSortable&&this.instance._intersectsWith(this.instance.containerCache)&&$.contains(thisSortable.instance.element[0],this.instance.element[0])){innermostIntersecting=false;}return innermostIntersecting;});}if(innermostIntersecting){//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
if(!this.instance.isOver){this.instance.isOver=1;//Now we fake the start of dragging for the sortable instance,
//by cloning the list group item, appending it to the sortable and using it as inst.currentItem
//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
this.instance.currentItem=$(that).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);this.instance.options._helper=this.instance.options.helper;//Store helper option to later restore it
this.instance.options.helper=function(){return ui.helper[0];};event.target=this.instance.currentItem[0];this.instance._mouseCapture(event,true);this.instance._mouseStart(event,true,true);//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
this.instance.offset.click.top=inst.offset.click.top;this.instance.offset.click.left=inst.offset.click.left;this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=inst.offset.parent.top-this.instance.offset.parent.top;inst._trigger("toSortable",event);inst.dropped=this.instance.element;//draggable revert needs that
//hack so receive/update callbacks work (mostly)
inst.currentItem=inst.element;this.instance.fromOutside=inst;}//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
if(this.instance.currentItem){this.instance._mouseDrag(event);}}else{//If it doesn't intersect with the sortable, and it intersected before,
//we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;//Prevent reverting on this forced stop
this.instance.options.revert=false;// The out event needs to be triggered independently
this.instance._trigger("out",event,this.instance._uiHash(this.instance));this.instance._mouseStop(event,true);this.instance.options.helper=this.instance.options._helper;//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove();}inst._trigger("fromSortable",event);inst.dropped=false;//draggable revert needs that
}}});}});$.ui.plugin.add("draggable","cursor",{start:function start(){var t=$("body"),o=$(this).data("ui-draggable").options;if(t.css("cursor")){o._cursor=t.css("cursor");}t.css("cursor",o.cursor);},stop:function stop(){var o=$(this).data("ui-draggable").options;if(o._cursor){$("body").css("cursor",o._cursor);}}});$.ui.plugin.add("draggable","opacity",{start:function start(event,ui){var t=$(ui.helper),o=$(this).data("ui-draggable").options;if(t.css("opacity")){o._opacity=t.css("opacity");}t.css("opacity",o.opacity);},stop:function stop(event,ui){var o=$(this).data("ui-draggable").options;if(o._opacity){$(ui.helper).css("opacity",o._opacity);}}});$.ui.plugin.add("draggable","scroll",{start:function start(){var i=$(this).data("ui-draggable");if(i.scrollParent[0]!==document&&i.scrollParent[0].tagName!=="HTML"){i.overflowOffset=i.scrollParent.offset();}},drag:function drag(event){var i=$(this).data("ui-draggable"),o=i.options,scrolled=false;if(i.scrollParent[0]!==document&&i.scrollParent[0].tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if(i.overflowOffset.top+i.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity){i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed;}}if(!o.axis||o.axis!=="y"){if(i.overflowOffset.left+i.scrollParent[0].offsetWidth-event.pageX<o.scrollSensitivity){i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed;}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}}if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event);}}});$.ui.plugin.add("draggable","snap",{start:function start(){var i=$(this).data("ui-draggable"),o=i.options;i.snapElements=[];$(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});}});},drag:function drag(event,ui){var ts,bs,ls,rs,l,r,t,b,i,first,inst=$(this).data("ui-draggable"),o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top;b=t+inst.snapElements[i].height;if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)){if(inst.snapElements[i].snapping){inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));}inst.snapElements[i].snapping=false;continue;}if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;}if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;}if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;}if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left;}}first=ts||bs||ls||rs;if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;}if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;}if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left-inst.margins.left;}if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left;}}if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));}inst.snapElements[i].snapping=ts||bs||ls||rs||first;}}});$.ui.plugin.add("draggable","stack",{start:function start(){var min,o=this.data("ui-draggable").options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i);});this.css("zIndex",min+group.length);}});$.ui.plugin.add("draggable","zIndex",{start:function start(event,ui){var t=$(ui.helper),o=$(this).data("ui-draggable").options;if(t.css("zIndex")){o._zIndex=t.css("zIndex");}t.css("zIndex",o.zIndex);},stop:function stop(event,ui){var o=$(this).data("ui-draggable").options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex);}}});})(jQuery);(function($,undefined){function isOverAxis(x,reference,size){return x>reference&&x<reference+size;}$.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",// callbacks
activate:null,deactivate:null,drop:null,out:null,over:null},_create:function _create(){var o=this.options,accept=o.accept;this.isover=false;this.isout=true;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept);};//Store the droppable's proportions
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};// Add the reference and positions to the manager
$.ui.ddmanager.droppables[o.scope]=$.ui.ddmanager.droppables[o.scope]||[];$.ui.ddmanager.droppables[o.scope].push(this);o.addClasses&&this.element.addClass("ui-droppable");},_destroy:function _destroy(){var i=0,drop=$.ui.ddmanager.droppables[this.options.scope];for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1);}}this.element.removeClass("ui-droppable ui-droppable-disabled");},_setOption:function _setOption(key,value){if(key==="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value);};}$.Widget.prototype._setOption.apply(this,arguments);},_activate:function _activate(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass);}if(draggable){this._trigger("activate",event,this.ui(draggable));}},_deactivate:function _deactivate(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}if(draggable){this._trigger("deactivate",event,this.ui(draggable));}},_over:function _over(event){var draggable=$.ui.ddmanager.current;// Bail if draggable and droppable are same element
if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass);}this._trigger("over",event,this.ui(draggable));}},_out:function _out(event){var draggable=$.ui.ddmanager.current;// Bail if draggable and droppable are same element
if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}this._trigger("out",event,this.ui(draggable));}},_drop:function _drop(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=false;// Bail if draggable and droppable are same element
if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return false;}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$.data(this,"ui-droppable");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],draggable.currentItem||draggable.element)&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance)){childrenIntersection=true;return false;}});if(childrenIntersection){return false;}if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}this._trigger("drop",event,this.ui(draggable));return this.element;}return false;},ui:function ui(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs};}});$.ui.intersect=function(draggable,droppable,toleranceMode){if(!droppable.offset){return false;}var draggableLeft,draggableTop,x1=(draggable.positionAbs||draggable.position.absolute).left,x2=x1+draggable.helperProportions.width,y1=(draggable.positionAbs||draggable.position.absolute).top,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,r=l+droppable.proportions.width,t=droppable.offset.top,b=t+droppable.proportions.height;switch(toleranceMode){case"fit":return l<=x1&&x2<=r&&t<=y1&&y2<=b;case"intersect":return l<x1+draggable.helperProportions.width/2&&// Right Half
x2-draggable.helperProportions.width/2<r&&// Left Half
t<y1+draggable.helperProportions.height/2&&// Bottom Half
y2-draggable.helperProportions.height/2<b;// Top Half
case"pointer":draggableLeft=(draggable.positionAbs||draggable.position.absolute).left+(draggable.clickOffset||draggable.offset.click).left;draggableTop=(draggable.positionAbs||draggable.position.absolute).top+(draggable.clickOffset||draggable.offset.click).top;return isOverAxis(draggableTop,t,droppable.proportions.height)&&isOverAxis(draggableLeft,l,droppable.proportions.width);case"touch":return(y1>=t&&y1<=b||// Top edge touching
y2>=t&&y2<=b||// Bottom edge touching
y1<t&&y2>b// Surrounded vertically
)&&(x1>=l&&x1<=r||// Left edge touching
x2>=l&&x2<=r||// Right edge touching
x1<l&&x2>r// Surrounded horizontally
);default:return false;}};/*
	This manager tracks offsets of draggables and droppables
*/$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function prepareOffsets(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,// workaround for #2317
list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){//No disabled and non-accepted
if(m[i].options.disabled||t&&!m[i].accept.call(m[i].element[0],t.currentItem||t.element)){continue;}// Filter out elements in the current dragged item
for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions.height=0;continue droppablesLoop;}}m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue;}//Activate the droppable if used directly from draggables
if(type==="mousedown"){m[i]._activate.call(m[i],event);}m[i].offset=m[i].element.offset();m[i].proportions={width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight};}},drop:function drop(draggable,event){var dropped=false;// Create a copy of the droppables in case the list changes during the drop (#9116)
$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return;}if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance)){dropped=this._drop.call(this,event)||dropped;}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],draggable.currentItem||draggable.element)){this.isout=true;this.isover=false;this._deactivate.call(this,event);}});return dropped;},dragStart:function dragStart(draggable,event){//Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
draggable.element.parentsUntil("body").bind("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}});},drag:function drag(draggable,event){//If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}//Run through all droppables and check their positions based on specific tolerance options
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return;}var parentInstance,scope,parent,intersects=$.ui.intersect(draggable,this,this.options.tolerance),c=!intersects&&this.isover?"isout":intersects&&!this.isover?"isover":null;if(!c){return;}if(this.options.greedy){// find droppable parents with same scope
scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $.data(this,"ui-droppable").options.scope===scope;});if(parent.length){parentInstance=$.data(parent[0],"ui-droppable");parentInstance.greedyChild=c==="isover";}}// we just moved into a greedy child
if(parentInstance&&c==="isover"){parentInstance.isover=false;parentInstance.isout=true;parentInstance._out.call(parentInstance,event);}this[c]=true;this[c==="isout"?"isover":"isout"]=false;this[c==="isover"?"_over":"_out"].call(this,event);// we just moved out of a greedy child
if(parentInstance&&c==="isout"){parentInstance.isout=false;parentInstance.isover=true;parentInstance._over.call(parentInstance,event);}});},dragStop:function dragStop(draggable,event){draggable.element.parentsUntil("body").unbind("scroll.droppable");//Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}}};})(jQuery);(function($,undefined){function num(v){return parseInt(v,10)||0;}function isNumber(value){return!isNaN(parseInt(value,10));}$.widget("ui.resizable",$.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,// See #7960
zIndex:90,// callbacks
resize:null,start:null,stop:null},_create:function _create(){var n,i,handle,axis,hname,that=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});//Wrap the element if it cannot hold child nodes
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){//Create a wrapper element and set the wrapper to the new current internal element
this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));//Overwrite the original this.element
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));this.elementIsWrapper=true;//Move margins to the wrapper
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});//Prevent Safari textarea resize
this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");//Push the actual element to our proportionallyResize internal array
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));// avoid IE jump (hard set the margin)
this.originalElement.css({margin:this.originalElement.css("margin")});// fix handlers offset
this._proportionallyResize();}this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw";}n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=$.trim(n[i]);hname="ui-resizable-"+handle;axis=$("<div class='ui-resizable-handle "+hname+"'></div>");// Apply zIndex to all handles - see #7960
axis.css({zIndex:o.zIndex});//TODO : What's going on here?
if("se"===handle){axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");}//Insert into internal handles object and append to element
this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis);}}this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=$(this.handles[i],this.element).show();}//Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){axis=$(this.handles[i],this.element);//Checking the correct pad and border
padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();//The padding type i have to apply...
padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize();}//TODO: What's that good for? There's not anything to be executed left
if(!$(this.handles[i]).length){continue;}}};//TODO: make renderAxis a prototype function
this._renderAxis(this.element);this._handles=$(".ui-resizable-handle",this.element).disableSelection();//Matching axis name
this._handles.mouseover(function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);}//Axis, default = se
that.axis=axis&&axis[1]?axis[1]:"se";}});//If we want to auto hide the elements
if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(o.disabled){return;}$(this).removeClass("ui-resizable-autohide");that._handles.show();}).mouseleave(function(){if(o.disabled){return;}if(!that.resizing){$(this).addClass("ui-resizable-autohide");that._handles.hide();}});}//Initialize the mouse interaction
this._mouseInit();},_destroy:function _destroy(){this._mouseDestroy();var wrapper,_destroy=function _destroy(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();};//TODO: Unwrap at same DOM position
if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove();}this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this;},_mouseCapture:function _mouseCapture(event){var i,handle,capture=false;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=true;}}return!this.options.disabled&&capture;},_mouseStart:function _mouseStart(event){var curleft,curtop,cursor,o=this.options,iniPos=this.element.position(),el=this.element;this.resizing=true;// bugfix for http://dev.jquery.com/ticket/1749
if(/absolute/.test(el.css("position"))){el.css({position:"absolute",top:el.css("top"),left:el.css("left")});}else if(el.is(".ui-draggable")){el.css({position:"absolute",top:iniPos.top,left:iniPos.left});}this._renderProxy();curleft=num(this.helper.css("left"));curtop=num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}//Store needed variables
this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalPosition={left:curleft,top:curtop};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalMousePosition={left:event.pageX,top:event.pageY};//Aspect Ratio
this.aspectRatio=typeof o.aspectRatio==="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1;cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function _mouseDrag(event){//Increase performance, avoid regex
var data,el=this.helper,props={},smp=this.originalMousePosition,a=this.axis,prevTop=this.position.top,prevLeft=this.position.left,prevWidth=this.size.width,prevHeight=this.size.height,dx=event.pageX-smp.left||0,dy=event.pageY-smp.top||0,trigger=this._change[a];if(!trigger){return false;}// Calculate the attrs that will be change
data=trigger.apply(this,[event,dx,dy]);// Put this in the mouseDrag handler since the user can start pressing shift while resizing
this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event);}data=this._respectSize(data,event);this._updateCache(data);// plugins callbacks need to be called first
this._propagate("resize",event);if(this.position.top!==prevTop){props.top=this.position.top+"px";}if(this.position.left!==prevLeft){props.left=this.position.left+"px";}if(this.size.width!==prevWidth){props.width=this.size.width+"px";}if(this.size.height!==prevHeight){props.height=this.size.height+"px";}el.css(props);if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize();}// Call the user callback if the element was resized
if(!$.isEmptyObject(props)){this._trigger("resize",event,this.ui());}return false;},_mouseStop:function _mouseStop(event){this.resizing=false;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&/textarea/i.test(pr[0].nodeName);soffseth=ista&&$.ui.hasScroll(pr[0],"left")/* TODO - jump height */?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:that.helper.width()-soffsetw,height:that.helper.height()-soffseth};left=parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left)||null;top=parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top)||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}));}that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize();}}$("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove();}return false;},_updateVirtualBoundaries:function _updateVirtualBoundaries(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:isNumber(o.minWidth)?o.minWidth:0,maxWidth:isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:isNumber(o.minHeight)?o.minHeight:0,maxHeight:isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){// We want to create an enclosing box whose aspect ration is the requested one
// First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth;}if(pMinHeight>b.minHeight){b.minHeight=pMinHeight;}if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth;}if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight;}}this._vBoundaries=b;},_updateCache:function _updateCache(data){this.offset=this.helper.offset();if(isNumber(data.left)){this.position.left=data.left;}if(isNumber(data.top)){this.position.top=data.top;}if(isNumber(data.height)){this.size.height=data.height;}if(isNumber(data.width)){this.size.width=data.width;}},_updateRatio:function _updateRatio(data){var cpos=this.position,csize=this.size,a=this.axis;if(isNumber(data.height)){data.width=data.height*this.aspectRatio;}else if(isNumber(data.width)){data.height=data.width/this.aspectRatio;}if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null;}if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}return data;},_respectSize:function _respectSize(data){var o=this._vBoundaries,a=this.axis,ismaxw=isNumber(data.width)&&o.maxWidth&&o.maxWidth<data.width,ismaxh=isNumber(data.height)&&o.maxHeight&&o.maxHeight<data.height,isminw=isNumber(data.width)&&o.minWidth&&o.minWidth>data.width,isminh=isNumber(data.height)&&o.minHeight&&o.minHeight>data.height,dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth;}if(isminh){data.height=o.minHeight;}if(ismaxw){data.width=o.maxWidth;}if(ismaxh){data.height=o.maxHeight;}if(isminw&&cw){data.left=dw-o.minWidth;}if(ismaxw&&cw){data.left=dw-o.maxWidth;}if(isminh&&ch){data.top=dh-o.minHeight;}if(ismaxh&&ch){data.top=dh-o.maxHeight;}// fixing jump error on top/left - bug #2330
if(!data.width&&!data.height&&!data.left&&data.top){data.top=null;}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null;}return data;},_proportionallyResize:function _proportionallyResize(){if(!this._proportionallyResizeElements.length){return;}var i,j,borders,paddings,prel,element=this.helper||this.element;for(i=0;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];if(!this.borderDif){this.borderDif=[];borders=[prel.css("borderTopWidth"),prel.css("borderRightWidth"),prel.css("borderBottomWidth"),prel.css("borderLeftWidth")];paddings=[prel.css("paddingTop"),prel.css("paddingRight"),prel.css("paddingBottom"),prel.css("paddingLeft")];for(j=0;j<borders.length;j++){this.borderDif[j]=(parseInt(borders[j],10)||0)+(parseInt(paddings[j],10)||0);}}prel.css({height:element.height()-this.borderDif[0]-this.borderDif[2]||0,width:element.width()-this.borderDif[1]-this.borderDif[3]||0});}},_renderProxy:function _renderProxy(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>");this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex//TODO: Don't modify option
});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function e(event,dx){return{width:this.originalSize.width+dx};},w:function w(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function n(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function s(event,dx,dy){return{height:this.originalSize.height+dy};},se:function se(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function sw(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function ne(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function nw(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function _propagate(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);n!=="resize"&&this._trigger(n,event,this.ui());},plugins:{},ui:function ui(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});/*
 * Resizable Extensions
 */$.ui.plugin.add("resizable","animate",{stop:function stop(event){var that=$(this).data("ui-resizable"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],"left")/* TODO - jump height */?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:that.size.width-soffsetw,height:that.size.height-soffseth},left=parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left)||null,top=parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top)||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function step(){var data={width:parseInt(that.element.css("width"),10),height:parseInt(that.element.css("height"),10),top:parseInt(that.element.css("top"),10),left:parseInt(that.element.css("left"),10)};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height});}// propagating resize, and updating values for each animation step
that._updateCache(data);that._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function start(){var element,p,co,ch,cw,width,height,that=$(this).data("ui-resizable"),o=that.options,el=that.element,oc=o.containment,ce=oc instanceof $?oc.get(0):/parent/.test(oc)?el.parent().get(0):oc;if(!ce){return;}that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}// i'm a node, so compute top, left, right, bottom
else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name));});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:element.innerHeight()-p[3],width:element.innerWidth()-p[1]};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=$.ui.hasScroll(ce,"left")?ce.scrollWidth:cw;height=$.ui.hasScroll(ce)?ce.scrollHeight:ch;that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function resize(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).data("ui-resizable"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement;if(ce[0]!==document&&/static/.test(ce.css("position"))){cop=co;}if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?that.position.left-co.left:that.position.left-cop.left);if(pRatio){that.size.height=that.size.width/that.aspectRatio;}that.position.left=o.helper?co.left:0;}if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?that.position.top-co.top:that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;}that.position.top=that._helper?co.top:0;}that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top;woset=Math.abs((that._helper?that.offset.left-cop.left:that.offset.left-cop.left)+that.sizeDiff.width);hoset=Math.abs((that._helper?that.offset.top-cop.top:that.offset.top-co.top)+that.sizeDiff.height);isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){woset-=that.parentData.left;}if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;}}if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;}}},stop:function stop(){var that=$(this).data("ui-resizable"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&/relative/.test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}if(that._helper&&!o.animate&&/static/.test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}}});$.ui.plugin.add("resizable","alsoResize",{start:function start(){var that=$(this).data("ui-resizable"),o=that.options,_store=function _store(exp){$(exp).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css("left"),10),top:parseInt(el.css("top"),10)});});};if(_typeof(o.alsoResize)==="object"&&!o.alsoResize.parentNode){if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize);}else{$.each(o.alsoResize,function(exp){_store(exp);});}}else{_store(o.alsoResize);}},resize:function resize(event,ui){var that=$(this).data("ui-resizable"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:that.size.height-os.height||0,width:that.size.width-os.width||0,top:that.position.top-op.top||0,left:that.position.left-op.left||0},_alsoResize=function _alsoResize(exp,c){$(exp).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=c&&c.length?c:el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null;}});el.css(style);});};if(_typeof(o.alsoResize)==="object"&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c);});}else{_alsoResize(o.alsoResize);}},stop:function stop(){$(this).removeData("resizable-alsoresize");}});$.ui.plugin.add("resizable","ghost",{start:function start(){var that=$(this).data("ui-resizable"),o=that.options,cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof o.ghost==="string"?o.ghost:"");that.ghost.appendTo(that.helper);},resize:function resize(){var that=$(this).data("ui-resizable");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width});}},stop:function stop(){var that=$(this).data("ui-resizable");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0));}}});$.ui.plugin.add("resizable","grid",{resize:function resize(){var that=$(this).data("ui-resizable"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=grid[0]||1,gridY=grid[1]||1,ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&o.maxWidth<newWidth,isMaxHeight=o.maxHeight&&o.maxHeight<newHeight,isMinWidth=o.minWidth&&o.minWidth>newWidth,isMinHeight=o.minHeight&&o.minHeight>newHeight;o.grid=grid;if(isMinWidth){newWidth=newWidth+gridX;}if(isMinHeight){newHeight=newHeight+gridY;}if(isMaxWidth){newWidth=newWidth-gridX;}if(isMaxHeight){newHeight=newHeight-gridY;}if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox;}else{that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;that.position.left=op.left-ox;}}});})(jQuery);(function($,undefined){$.widget("ui.selectable",$.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",// callbacks
selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function _create(){var selectees,that=this;this.element.addClass("ui-selectable");this.dragged=false;// cache selectee children based on filter
this.refresh=function(){selectees=$(that.options.filter,that.element[0]);selectees.addClass("ui-selectee");selectees.each(function(){var $this=$(this),pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")});});};this.refresh();this.selectees=selectees.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>");},_destroy:function _destroy(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy();},_mouseStart:function _mouseStart(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];if(this.options.disabled){return;}this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);// position helper (lasso)
this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey&&!event.ctrlKey){selectee.$element.removeClass("ui-selected");selectee.selected=false;selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=!event.metaKey&&!event.ctrlKey||!selectee.$element.hasClass("ui-selected");selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;// selectable (UN)SELECTING callback
if(doSelect){that._trigger("selecting",event,{selecting:selectee.element});}else{that._trigger("unselecting",event,{unselecting:selectee.element});}return false;}});},_mouseDrag:function _mouseDrag(event){this.dragged=true;if(this.options.disabled){return;}var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp;}if(y1>y2){tmp=y2;y2=y1;y1=tmp;}this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=false;//prevent helper from being selected if appendTo: selectable
if(!selectee||selectee.element===that.element[0]){return;}if(options.tolerance==="touch"){hit=!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1);}else if(options.tolerance==="fit"){hit=selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2;}if(hit){// SELECT
if(selectee.selected){selectee.$element.removeClass("ui-selected");selectee.selected=false;}if(selectee.unselecting){selectee.$element.removeClass("ui-unselecting");selectee.unselecting=false;}if(!selectee.selecting){selectee.$element.addClass("ui-selecting");selectee.selecting=true;// selectable SELECTING callback
that._trigger("selecting",event,{selecting:selectee.element});}}else{// UNSELECT
if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){selectee.$element.removeClass("ui-selecting");selectee.selecting=false;selectee.$element.addClass("ui-selected");selectee.selected=true;}else{selectee.$element.removeClass("ui-selecting");selectee.selecting=false;if(selectee.startselected){selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;}// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element});}}if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){selectee.$element.removeClass("ui-selected");selectee.selected=false;selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function _mouseStop(event){var that=this;this.dragged=false;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-unselecting");selectee.unselecting=false;selectee.startselected=false;that._trigger("unselected",event,{unselected:selectee.element});});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-selecting").addClass("ui-selected");selectee.selecting=false;selectee.selected=true;selectee.startselected=true;that._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});})(jQuery);(function($,undefined){/*jshint loopfunc: true */function isOverAxis(x,reference,size){return x>reference&&x<reference+size;}function isFloating(item){return /left|right/.test(item.css("float"))||/inline|table-cell/.test(item.css("display"));}$.widget("ui.sortable",$.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,// callbacks
activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function _create(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");//Get the items
this.refresh();//Let's determine if the items are being displayed horizontally
this.floating=this.items.length?o.axis==="x"||isFloating(this.items[0].item):false;//Let's determine the parent's offset
this.offset=this.element.offset();//Initialize mouse events for interaction
this._mouseInit();//We're ready to go
this.ready=true;},_destroy:function _destroy(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}return this;},_setOption:function _setOption(key,value){if(key==="disabled"){this.options[key]=value;this.widget().toggleClass("ui-sortable-disabled",!!value);}else{// Don't call widget base _setOption for disable as it adds ui-state-disabled class
$.Widget.prototype._setOption.apply(this,arguments);}},_mouseCapture:function _mouseCapture(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}if(this.options.disabled||this.options.type==="static"){return false;}//We have to refresh the items data once first
this._refreshItems(event);//Find out if the clicked node (or one of its parents) is a actual item in this.items
$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}if(!currentItem){return false;}if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function _mouseStart(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
this.refreshPositions();//Create and append the visible helper
this.helper=this._createHelper(event);//Cache the helper size
this._cacheHelperProportions();/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 *///Cache the margins of the original element
this._cacheMargins();//Get the next scrolling parent
this.scrollParent=this.helper.scrollParent();//The element's absolute position on the page minus margins
this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{//Where the click happened, relative to the element
left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()//This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
});// Only after we got the offset, we can change the helper's position to absolute
// TODO: Still need to figure out a way to make relative sorting possible
this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");//Generate the original position
this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);//Cache the former DOM position
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}//Create the placeholder
this._createPlaceholder();//Set a containment if given in the options
if(o.containment){this._setContainment();}if(o.cursor&&o.cursor!=="auto"){// cursor option
body=this.document.find("body");// support: IE
this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);}if(o.opacity){// opacity option
if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}this.helper.css("opacity",o.opacity);}if(o.zIndex){// zIndex option
if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}this.helper.css("zIndex",o.zIndex);}//Prepare scrolling
if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}//Call callbacks
this._trigger("start",event,this._uiHash());//Recache the helper size
if(!this._preserveHelperProportions){this._cacheHelperProportions();}//Post "activate" events to possible containers
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}//Prepare possible droppables
if($.ui.ddmanager){$.ui.ddmanager.current=this;}if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);//Execute the drag once - this causes the helper not to be visible before getting its correct position
return true;},_mouseDrag:function _mouseDrag(event){var i,item,itemElement,intersection,o=this.options,scrolled=false;//Compute the helpers position
this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}//Do scrolling
if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}//Regenerate the absolute position used for position checks
this.positionAbs=this._convertPositionTo("absolute");//Set the helper position
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}//Rearrange
for(i=this.items.length-1;i>=0;i--){//Cache variables and intersection, continue if no intersection
item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}// Only put the placeholder inside the current Container, skip all
// items form other containers. This works because when moving
// an item from one container to another the
// currentContainer is switched before the placeholder is moved.
//
// Without this moving items in "sub-sortables" can cause the placeholder to jitter
// beetween the outer and inner container.
if(item.instance!==this.currentContainer){continue;}// cannot intersect with itself
// no useless actions that have been done before
// no action if the item moved is the parent of the item checked
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}this._trigger("change",event,this._uiHash());break;}}//Post events to containers
this._contactContainers(event);//Interconnect with droppables
if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}//Call callbacks
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function _mouseStop(event,noPropagation){if(!event){return;}//If we are using droppables, inform the manager about the drop
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft);}if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop);}this.reverting=true;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}return false;},cancel:function cancel(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}//Post deactivating events to containers
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}if(this.placeholder){//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}return this;},serialize:function serialize(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||/(.+)[\-=_](.+)/);if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}return str.join("&");},toArray:function toArray(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},/* Be careful with the following core functions */_intersectsWith:function _intersectsWith(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=this.options.axis==="x"||y1+dyClick>t&&y1+dyClick<b,isOverElementWidth=this.options.axis==="y"||x1+dxClick>l&&x1+dxClick<r,isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"]){return isOverElement;}else{return l<x1+this.helperProportions.width/2&&// Right Half
x2-this.helperProportions.width/2<r&&// Left Half
t<y1+this.helperProportions.height/2&&// Bottom Half
y2-this.helperProportions.height/2<b;// Top Half
}},_intersectsWithPointer:function _intersectsWithPointer(item){var isOverElementHeight=this.options.axis==="x"||isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=this.options.axis==="y"||isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement){return false;}return this.floating?horizontalDirection&&horizontalDirection==="right"||verticalDirection==="down"?2:1:verticalDirection&&(verticalDirection==="down"?2:1);},_intersectsWithSides:function _intersectsWithSides(item){var isOverBottomHalf=isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+item.height/2,item.height),isOverRightHalf=isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+item.width/2,item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return horizontalDirection==="right"&&isOverRightHalf||horizontalDirection==="left"&&!isOverRightHalf;}else{return verticalDirection&&(verticalDirection==="down"&&isOverBottomHalf||verticalDirection==="up"&&!isOverBottomHalf);}},_getDragVerticalDirection:function _getDragVerticalDirection(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function _getDragHorizontalDirection(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function refresh(event){this._refreshItems(event);this.refreshPositions();return this;},_connectWith:function _connectWith(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function _getItemsAsjQuery(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(i=queries.length-1;i>=0;i--){queries[i][0].each(function(){items.push(this);});}return $(items);},_removeCurrentsFromItems:function _removeCurrentsFromItems(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}return true;});},_refreshItems:function _refreshItems(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){//Shouldn't be run the first time through due to massive slow-down
for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);// Data for target checking (mouse manager)
items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},refreshPositions:function refreshPositions(fast){//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];//We ignore calculating positions of all connected containers when we're not over them
if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}p=t.offset();item.left=p.left;item.top=p.top;}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}return this;},_createPlaceholder:function _createPlaceholder(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function element(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(nodeName==="tr"){that.currentItem.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(element);});}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"));}if(!className){element.css("visibility","hidden");}return element;},update:function update(container,p){// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
if(className&&!o.forcePlaceholderSize){return;}//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10));}if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10));}}};}//Create the placeholder
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));//Append it after the actual current item
that.currentItem.after(that.placeholder);//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
o.placeholder.update(that,that.placeholder);},_contactContainers:function _contactContainers(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,base,cur,nearBottom,floating,innermostContainer=null,innermostIndex=null;// get innermost container that intersects with item
for(i=this.containers.length-1;i>=0;i--){// never consider a container that's located within the item itself
if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}if(this._intersectsWith(this.containers[i].containerCache)){// if we've already found a container and it's more "inner" than this, then continue
if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}innermostContainer=this.containers[i];innermostIndex=i;}else{// container doesn't intersect. trigger "out" event if necessary
if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}// if no intersecting containers found, return
if(!innermostContainer){return;}// move the item into the container if it's not there already
if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}}else{//When entering a new container, we will find the item with the least distance and append our item near it
dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";base=this.positionAbs[posProperty]+this.offset.click[posProperty];for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}if(this.items[j].item[0]===this.currentItem[0]){continue;}if(floating&&!isOverAxis(this.positionAbs.top+this.offset.click.top,this.items[j].top,this.items[j].height)){continue;}cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(Math.abs(cur-base)>Math.abs(cur+this.items[j][sizeProperty]-base)){nearBottom=true;cur+=this.items[j][sizeProperty];}if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}//Check if dropOnEmpty is enabled
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}if(this.currentContainer===this.containers[innermostIndex]){return;}itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];//Update the placeholder
this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function _createHelper(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):o.helper==="clone"?this.currentItem.clone():this.currentItem;//Add the helper to the DOM if that didn't happen already
if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);}if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}return helper;},_adjustOffsetFromHelper:function _adjustOffsetFromHelper(obj){if(typeof obj==="string"){obj=obj.split(" ");}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function _getParentOffset(){//Get the offsetParent and cache its position
this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();// This is a special case where we need to modify a offset calculated on start, since the following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}// This needs to be actually done for all browsers, since pageX/pageY includes this information
// with an ugly IE fix
if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie){po={top:0,left:0};}return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function _getRelativeOffset(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function _cacheMargins(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0};},_cacheHelperProportions:function _cacheHelperProportions(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function _setContainment(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}if(!/^(document|window|parent)$/.test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=$(ce).css("overflow")!=="hidden";this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function _convertPositionTo(d,pos){if(!pos){pos=this.position;}var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);return{top:pos.top+// The absolute mouse position
this.offset.relative.top*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top*mod-// The offsetParent's offset without borders (offset + border)
(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop())*mod,left:pos.left+// The absolute mouse position
this.offset.relative.left*mod+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left*mod-// The offsetParent's offset without borders (offset + border)
(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod};},_generatePosition:function _generatePosition(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);// This is another very weird special case that only happens for relative elements:
// 1. If the css position is relative
// 2. and the scroll parent is the document or similar to the offset parent
// we have to refresh the relative offset during the scroll so there are no jumps
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */if(this.originalPosition){//If we are not dragging yet, we won't check for options
if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3]?top:top-this.offset.click.top>=this.containment[1]?top-o.grid[1]:top+o.grid[1]:top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2]?left:left-this.offset.click.left>=this.containment[0]?left-o.grid[0]:left+o.grid[0]:left;}}return{top:pageY-// The absolute mouse position
this.offset.click.top-// Click offset (relative to the element)
this.offset.relative.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top+(// The offsetParent's offset without borders (offset + border)
this.cssPosition==="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop()),left:pageX-// The absolute mouse position
this.offset.click.left-// Click offset (relative to the element)
this.offset.relative.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left+(// The offsetParent's offset without borders (offset + border)
this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())};},_rearrange:function _rearrange(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?i.item[0]:i.item[0].nextSibling);//Various things done here to improve the performance:
// 1. we create a setTimeout, that calls refreshPositions
// 2. on the instance, we have a counter variable, that get's higher after every append
// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
// 4. this lets only the last addition to the timeout stack through
this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh);//Precompute after each DOM insertion, NOT on mousemove
}});},_clear:function _clear(event,noPropagation){this.reverting=false;// We delay all events that have to be triggered to after the point where the placeholder has been removed and
// everything else normalized again
var i,delayedTriggers=[];// We first have to update the dom position of the actual currentItem
// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});//Trigger update callback if the DOM position has changed
}// Check if the items Container has Changed and trigger appropriate
// events.
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push(function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}.call(this,this.currentContainer));delayedTriggers.push(function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}.call(this,this.currentContainer));}}//Post events to containers
for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this));};}.call(this,this.containers[i]));}if(this.containers[i].containerCache.over){delayedTriggers.push(function(c){return function(event){c._trigger("out",event,this._uiHash(this));};}.call(this,this.containers[i]));this.containers[i].containerCache.over=0;}}//Do what was originally in plugins
if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove();}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}//Trigger all delayed events
this._trigger("stop",event,this._uiHash());}this.fromOutside=false;return false;}if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}this.helper=null;if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}//Trigger all delayed events
this._trigger("stop",event,this._uiHash());}this.fromOutside=false;return true;},_trigger:function _trigger(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function _uiHash(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});})(jQuery);(function($,undefined){var uid=0,hideProps={},showProps={};hideProps.height=hideProps.paddingTop=hideProps.paddingBottom=hideProps.borderTopWidth=hideProps.borderBottomWidth="hide";showProps.height=showProps.paddingTop=showProps.paddingBottom=showProps.borderTopWidth=showProps.borderBottomWidth="show";$.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},// callbacks
activate:null,beforeActivate:null},_create:function _create(){var options=this.options;this.prevShow=this.prevHide=$();this.element.addClass("ui-accordion ui-widget ui-helper-reset")// ARIA
.attr("role","tablist");// don't allow collapsible: false and active: false / null
if(!options.collapsible&&(options.active===false||options.active==null)){options.active=0;}this._processPanels();// handle negative values
if(options.active<0){options.active+=this.headers.length;}this._refresh();},_getCreateEventData:function _getCreateEventData(){return{header:this.active,panel:!this.active.length?$():this.active.next(),content:!this.active.length?$():this.active.next()};},_createIcons:function _createIcons(){var icons=this.options.icons;if(icons){$("<span>").addClass("ui-accordion-header-icon ui-icon "+icons.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader);this.headers.addClass("ui-accordion-icons");}},_destroyIcons:function _destroyIcons(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();},_destroy:function _destroy(){var contents;// clean up main element
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");// clean up headers
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id");}});this._destroyIcons();// clean up content panels
contents=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id");}});if(this.options.heightStyle!=="content"){contents.css("height","");}},_setOption:function _setOption(key,value){if(key==="active"){// _activate() will handle invalid values and update this.options
this._activate(value);return;}if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event);}this._setupEvents(value);}this._super(key,value);// setting collapsible: false while collapsed; open first panel
if(key==="collapsible"&&!value&&this.options.active===false){this._activate(0);}if(key==="icons"){this._destroyIcons();if(value){this._createIcons();}}// #5332 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
if(key==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!value);}},_keydown:function _keydown(event){/*jshint maxcomplexity:15*/if(event.altKey||event.ctrlKey){return;}var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break;}if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);toFocus.focus();event.preventDefault();}},_panelKeyDown:function _panelKeyDown(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().focus();}},refresh:function refresh(){var options=this.options;this._processPanels();// was collapsed or no panel
if(options.active===false&&options.collapsible===true||!this.headers.length){options.active=false;this.active=$();// active false only when collapsible is true
}else if(options.active===false){this._activate(0);// was active, but active panel is gone
}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){// all remaining panel are disabled
if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=false;this.active=$();// activate previous panel
}else{this._activate(Math.max(0,options.active-1));}// was active, active panel still exists
}else{// make sure active index is correct
options.active=this.headers.index(this.active);}this._destroyIcons();this._refresh();},_processPanels:function _processPanels(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();},_refresh:function _refresh(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent(),accordionId=this.accordionId="ui-accordion-"+(this.element.attr("id")||++uid);this.active=this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(i){var header=$(this),headerId=header.attr("id"),panel=header.next(),panelId=panel.attr("id");if(!headerId){headerId=accordionId+"-header-"+i;header.attr("id",headerId);}if(!panelId){panelId=accordionId+"-panel-"+i;panel.attr("id",panelId);}header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId);}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();// make sure at least one header is in the tab order
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"});}this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}maxHeight-=elem.outerHeight(true);});this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).css("height","").height());}).height(maxHeight);}},_activate:function _activate(index){var active=this._findActive(index)[0];// trying to activate the already active panel
if(active===this.active[0]){return;}// trying to collapse, simulate a click on the currently active header
active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop});},_findActive:function _findActive(selector){return typeof selector==="number"?this.headers.eq(selector):$();},_setupEvents:function _setupEvents(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers);},_eventHandler:function _eventHandler(event){var options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if(// click on active header, but not collapsible
clickedIsActive&&!options.collapsible||// allow canceling activation
this._trigger("beforeActivate",event,eventData)===false){return;}options.active=collapsing?false:this.headers.index(clicked);// when the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=clickedIsActive?$():clicked;this._toggle(eventData);// switch classes
// corner classes on the previously active header stay after the animation
active.removeClass("ui-accordion-header-active ui-state-active");if(options.icons){active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header);}if(!clickedIsActive){clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(options.icons){clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader);}clicked.next().addClass("ui-accordion-content-active");}},_toggle:function _toggle(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;// handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data);}else{toHide.hide();toShow.show();this._toggleComplete(data);}toHide.attr({"aria-expanded":"false","aria-hidden":"true"});toHide.prev().attr("aria-selected","false");// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
if(toShow.length&&toHide.length){toHide.prev().attr("tabIndex",-1);}else if(toShow.length){this.headers.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}toShow.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0});},_animate:function _animate(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,down=toShow.length&&(!toHide.length||toShow.index()<toHide.index()),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function complete(){that._toggleComplete(data);};if(typeof options==="number"){duration=options;}if(typeof options==="string"){easing=options;}// fall back from options to animation in case of partial down settings
easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(showProps,duration,easing,complete);}if(!toShow.length){return toHide.animate(hideProps,duration,easing,complete);}total=toShow.show().outerHeight();toHide.animate(hideProps,{duration:duration,easing:easing,step:function step(now,fx){fx.now=Math.round(now);}});toShow.hide().animate(showProps,{duration:duration,easing:easing,complete:complete,step:function step(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){adjust+=fx.now;}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0;}}});},_toggleComplete:function _toggleComplete(data){var toHide=data.oldPanel;toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");// Work around for rendering bug in IE (#5421)
if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className;}this._trigger("activate",null,data);}});})(jQuery);(function($,undefined){// used to prevent race conditions with remote data sources
var requestIndex=0;$.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,// callbacks
change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function _create(){// Some browsers only repeat keydown events, not keypress events,
// so we use the suppressKeyPress flag to determine if we've already
// handled the keydown event. #7269
// Unfortunately the code for & in keypress is the same as the up arrow,
// so we use the suppressKeyPressRepeat flag to avoid handling keypress
// events when we know the keydown event was used to modify the
// search term. #7799
var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";this.isMultiLine=// Textareas are always multi-line
isTextarea?true:// Inputs are always single-line, even if inside a contentEditable element
// IE also treats inputs as contentEditable
isInput?false:// All other element types are determined by whether or not they're contentEditable
this.element.prop("isContentEditable");this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function keydown(event){/*jshint maxcomplexity:15*/if(this.element.prop("readOnly")){suppressKeyPress=true;suppressInput=true;suppressKeyPressRepeat=true;return;}suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=true;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=true;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=true;this._keyEvent("next",event);break;case keyCode.ENTER:case keyCode.NUMPAD_ENTER:// when menu is open and has focus
if(this.menu.active){// #6055 - Opera still allows the keypress to occur
// which causes forms to submit
suppressKeyPress=true;event.preventDefault();this.menu.select(event);}break;case keyCode.TAB:if(this.menu.active){this.menu.select(event);}break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(event);// Different browsers have different default behavior for escape
// Single press can mean undo or clear
// Double press in IE means clear the whole form
event.preventDefault();}break;default:suppressKeyPressRepeat=true;// search timeout should be triggered before the input value is changed
this._searchTimeout(event);break;}},keypress:function keypress(event){if(suppressKeyPress){suppressKeyPress=false;if(!this.isMultiLine||this.menu.element.is(":visible")){event.preventDefault();}return;}if(suppressKeyPressRepeat){return;}// replicate some key handlers to allow them to repeat in Firefox and Opera
var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break;}},input:function input(event){if(suppressInput){suppressInput=false;event.preventDefault();return;}this._searchTimeout(event);},focus:function focus(){this.selectedItem=null;this.previous=this._value();},blur:function blur(event){if(this.cancelBlur){delete this.cancelBlur;return;}clearTimeout(this.searching);this.close(event);this._change(event);}});this._initSource();this.menu=$("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({// disable ARIA support, the live region takes care of that
role:null}).hide().data("ui-menu");this._on(this.menu.element,{mousedown:function mousedown(event){// prevent moving focus out of the text field
event.preventDefault();// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;});// clicking on the scrollbar causes focus to shift to the body
// but we can't detect a mouseup or a click immediately afterward
// so we have to track the next mousedown and close the menu if
// the user clicks somewhere outside of the autocomplete
var menuElement=this.menu.element[0];if(!$(event.target).closest(".ui-menu-item").length){this._delay(function(){var that=this;this.document.one("mousedown",function(event){if(event.target!==that.element[0]&&event.target!==menuElement&&!$.contains(menuElement,event.target)){that.close();}});});}},menufocus:function menufocus(event,ui){// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
if(this.isNewMenu){this.isNewMenu=false;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent);});return;}}var item=ui.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",event,{item:item})){// use value to match what will end up in the input, if it was a key event
if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value);}}else{// Normally the input is populated with the item's value as the
// menu is navigated, causing screen readers to notice a change and
// announce the item. Since the focus event was canceled, this doesn't
// happen, so we update the live region so that screen readers can
// still notice the change and announce it.
this.liveRegion.text(item.value);}},menuselect:function menuselect(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;// only trigger when focus was lost (click on menu)
if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=previous;// #6109 - IE triggers two focus events and the second
// is asynchronous, so we need to reset the previous
// term synchronously and asynchronously :-(
this._delay(function(){this.previous=previous;this.selectedItem=item;});}if(false!==this._trigger("select",event,{item:item})){this._value(item.value);}// reset the term after the select event
// this allows custom select handling to work properly
this.term=this._value();this.close(event);this.selectedItem=item;}});this.liveRegion=$("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);// turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function beforeunload(){this.element.removeAttr("autocomplete");}});},_destroy:function _destroy(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove();},_setOption:function _setOption(key,value){this._super(key,value);if(key==="source"){this._initSource();}if(key==="appendTo"){this.menu.element.appendTo(this._appendTo());}if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_appendTo:function _appendTo(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}if(!element){element=this.element.closest(".ui-front");}if(!element.length){element=this.document[0].body;}return element;},_initSource:function _initSource(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort();}that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function success(data){response(data);},error:function error(){response([]);}});};}else{this.source=this.options.source;}},_searchTimeout:function _searchTimeout(event){clearTimeout(this.searching);this.searching=this._delay(function(){// only search if the value has changed
if(this.term!==this._value()){this.selectedItem=null;this.search(null,event);}},this.options.delay);},search:function search(value,event){value=value!=null?value:this._value();// always save the actual value, not the one passed as an argument
this.term=this._value();if(value.length<this.options.minLength){return this.close(event);}if(this._trigger("search",event)===false){return;}return this._search(value);},_search:function _search(value){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:value},this._response());},_response:function _response(){var that=this,index=++requestIndex;return function(content){if(index===requestIndex){that.__response(content);}that.pending--;if(!that.pending){that.element.removeClass("ui-autocomplete-loading");}};},__response:function __response(content){if(content){content=this._normalize(content);}this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open");}else{// use ._close() instead of .close() so we don't cancel future searches
this._close();}},close:function close(event){this.cancelSearch=true;this._close(event);},_close:function _close(event){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",event);}},_change:function _change(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function _normalize(items){// assume all items have the right format when the first item is complete
if(items.length&&items[0].label&&items[0].value){return items;}return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}return $.extend({label:item.label||item.value,value:item.value||item.label},item);});},_suggest:function _suggest(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=true;this.menu.refresh();// size and position menu
ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next();}},_resizeMenu:function _resizeMenu(){var ul=this.menu.element;ul.outerWidth(Math.max(// Firefox wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping (#7513)
ul.width("").outerWidth()+1,this.element.outerWidth()));},_renderMenu:function _renderMenu(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item);});},_renderItemData:function _renderItemData(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item);},_renderItem:function _renderItem(ul,item){return $("<li>").append($("<a>").text(item.label)).appendTo(ul);},_move:function _move(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){this._value(this.term);this.menu.blur();return;}this.menu[direction](event);},widget:function widget(){return this.menu.element;},_value:function _value(){return this.valueMethod.apply(this.element,arguments);},_keyEvent:function _keyEvent(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);// prevents moving cursor to beginning/end of the text field in some browsers
event.preventDefault();}}});$.extend($.ui.autocomplete,{escapeRegex:function escapeRegex(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");},filter:function filter(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function results(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate.";}}},__response:function __response(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return;}if(content&&content.length){message=this.options.messages.results(content.length);}else{message=this.options.messages.noResults;}this.liveRegion.text(message);}});})(jQuery);(function($,undefined){var lastActive,startXPos,startYPos,clickDragged,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function formResetHandler(){var form=$(this);setTimeout(function(){form.find(":ui-button").button("refresh");},1);},radioGroup=function radioGroup(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){name=name.replace(/'/g,"\\'");if(form){radios=$(form).find("[name='"+name+"']");}else{radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form;});}}return radios;};$.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function _create(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled");}else{this.element.prop("disabled",this.options.disabled);}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var that=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",activeClass=!toggleButton?"ui-state-active":"",focusClass="ui-state-focus";if(options.label===null){options.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html();}this._hoverable(this.buttonElement);this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(options.disabled){return;}if(this===lastActive){$(this).addClass("ui-state-active");}}).bind("mouseleave"+this.eventNamespace,function(){if(options.disabled){return;}$(this).removeClass(activeClass);}).bind("click"+this.eventNamespace,function(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation();}});this.element.bind("focus"+this.eventNamespace,function(){// no need to check disabled, focus won't be triggered anyway
that.buttonElement.addClass(focusClass);}).bind("blur"+this.eventNamespace,function(){that.buttonElement.removeClass(focusClass);});if(toggleButton){this.element.bind("change"+this.eventNamespace,function(){if(clickDragged){return;}that.refresh();});// if mouse moves between mousedown and mouseup (drag) set clickDragged flag
// prevents issue where button state changes but checkbox/radio checked state
// does not in Firefox (see ticket #6970)
this.buttonElement.bind("mousedown"+this.eventNamespace,function(event){if(options.disabled){return;}clickDragged=false;startXPos=event.pageX;startYPos=event.pageY;}).bind("mouseup"+this.eventNamespace,function(event){if(options.disabled){return;}if(startXPos!==event.pageX||startYPos!==event.pageY){clickDragged=true;}});}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false;}});}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false;}$(this).addClass("ui-state-active");that.buttonElement.attr("aria-pressed","true");var radio=that.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0];}).removeClass("ui-state-active").attr("aria-pressed","false");});}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(options.disabled){return false;}$(this).addClass("ui-state-active");lastActive=this;that.document.one("mouseup",function(){lastActive=null;});}).bind("mouseup"+this.eventNamespace,function(){if(options.disabled){return false;}$(this).removeClass("ui-state-active");}).bind("keydown"+this.eventNamespace,function(event){if(options.disabled){return false;}if(event.keyCode===$.ui.keyCode.SPACE||event.keyCode===$.ui.keyCode.ENTER){$(this).addClass("ui-state-active");}})// see #8559, we bind to blur here in case the button element loses
// focus between keydown and keyup, it would be left in an "active" state
.bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){$(this).removeClass("ui-state-active");});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){// TODO pass through original event correctly (just as 2nd argument doesn't work)
$(this).click();}});}}// TODO: pull out $.Widget's handling for the disabled option into
// $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
// be overridden by individual plugins
this._setOption("disabled",options.disabled);this._resetButton();},_determineButtonType:function _determineButtonType(){var ancestor,labelSelector,checked;if(this.element.is("[type=checkbox]")){this.type="checkbox";}else if(this.element.is("[type=radio]")){this.type="radio";}else if(this.element.is("input")){this.type="input";}else{this.type="button";}if(this.type==="checkbox"||this.type==="radio"){// we don't search against the document in case the element
// is disconnected from the DOM
ancestor=this.element.parents().last();labelSelector="label[for='"+this.element.attr("id")+"']";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector);}}this.element.addClass("ui-helper-hidden-accessible");checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active");}this.buttonElement.prop("aria-pressed",checked);}else{this.buttonElement=this.element;}},widget:function widget(){return this.buttonElement;},_destroy:function _destroy(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title");}},_setOption:function _setOption(key,value){this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true);}else{this.element.prop("disabled",false);}return;}this._resetButton();},refresh:function refresh(){//See #8237 & #8828
var isDisabled=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled);}if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true");}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false");}});}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true");}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false");}}},_resetButton:function _resetButton(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label);}return;}var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":icons.primary?"-primary":"-secondary"));}if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");}if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");}if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",$.trim(buttonText));}}}else{buttonClasses.push("ui-button-text-only");}buttonElement.addClass(buttonClasses.join(" "));}});$.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function _create(){this.element.addClass("ui-buttonset");},_init:function _init(){this.refresh();},_setOption:function _setOption(key,value){if(key==="disabled"){this.buttons.button("option",key,value);}this._super(key,value);},refresh:function refresh(){var rtl=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(rtl?"ui-corner-left":"ui-corner-right").end().end();},_destroy:function _destroy(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");}});})(jQuery);(function($,undefined){$.extend($.ui,{datepicker:{version:"1.10.3"}});var PROP_NAME="datepicker",instActive;/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */function Datepicker(){this._curInst=null;// The current instance in use
this._keyEvent=false;// If the last event was a key event
this._disabledInputs=[];// List of date picker inputs that have been disabled
this._datepickerShowing=false;// True if the popup picker is showing , false if not
this._inDialog=false;// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div";// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline";// The name of the inline marker class
this._appendClass="ui-datepicker-append";// The name of the append marker class
this._triggerClass="ui-datepicker-trigger";// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog";// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled";// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable";// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day";// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over";// The name of the day hover marker class
this.regional=[];// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:false,// True if right-to-left language, false if left-to-right
showMonthAfterYear:false,// True if the year select precedes month, false for month then year
yearSuffix:""// Additional text to append to the year in the month headers
};this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:false,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:false,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:false,// True if date formatting applied to prev/today/next links
gotoCurrent:false,// True if today link goes back to current selection instead
changeMonth:false,// True if month can be selected directly, false if only prev/next
changeYear:false,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:false,// True to show dates in other months, false to leave blank
selectOtherMonths:false,// True to allow selection of dates in other months, false for unselectable
showWeek:false,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:true,// The input is constrained by the current date format
showButtonPanel:false,// True to show button panel, false to not show it
autoSize:false,// True to size the input for the date format, false to leave as is
disabled:false// The initial disabled state
};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}$.extend(Datepicker.prototype,{/* Class name added to elements to indicate already configured with a date picker. */markerClassName:"hasDatepicker",//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function _widgetDatepicker(){return this.dpDiv;},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */setDefaults:function setDefaults(settings){extendRemove(this._defaults,settings||{});return this;},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */_attachDatepicker:function _attachDatepicker(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=nodeName==="div"||nodeName==="span";if(!target.id){this.uuid+=1;target.id="dp"+this.uuid;}inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},/* Create a new instance object. */_newInst:function _newInst(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:id,input:target,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:inline,// is datepicker inline or not
dpDiv:!inline?this.dpDiv:// presentation div
bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))};},/* Attach the date picker to an input field. */_connectDatepicker:function _connectDatepicker(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(inst);$.data(target,PROP_NAME,inst);//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
if(inst.settings.disabled){this._disableDatepicker(target);}},/* Make attachments based on settings. */_attachments:function _attachments(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove();}if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append);}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove();}showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){// pop-up date picker when in the marked field
input.focus(this._showDatepicker);}if(showOn==="button"||showOn==="both"){// pop-up date picker when button clicked
buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker();}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0]);}else{$.datepicker._showDatepicker(input[0]);}return false;});}},/* Apply the maximum length for the date format. */_autoSize:function _autoSize(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),// Ensure double digits
dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function findMax(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}return maxI;};date.setMonth(findMax(this._get(inst,dateFormat.match(/MM/)?"monthNames":"monthNamesShort")));date.setDate(findMax(this._get(inst,dateFormat.match(/DD/)?"dayNames":"dayNamesShort"))+20-date.getDay());}inst.input.attr("size",this._formatDate(inst,date).length);}},/* Attach an inline date picker to a div. */_inlineDatepicker:function _inlineDatepicker(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return;}divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
if(inst.settings.disabled){this._disableDatepicker(target);}// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
inst.dpDiv.css("display","block");},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */_dialogDatepicker:function _dialogDatepicker(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;// internal instance
if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst);}extendRemove(inst.settings,settings||{});date=date&&date.constructor===Date?this._formatDate(inst,date):date;this._dialogInput.val(date);this._pos=pos?pos.length?pos:[pos.pageX,pos.pageY]:null;if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=// should use actual width/height below
[browserWidth/2-100+scrollX,browserHeight/2-150+scrollY];}// move input on screen for focus, but hidden behind dialog
this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv);}$.data(this._dialogInput[0],PROP_NAME,inst);return this;},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */_destroyDatepicker:function _destroyDatepicker(target){var nodeName,$target=$(target),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp);}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty();}},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */_enableDatepicker:function _enableDatepicker(target){var nodeName,inline,$target=$(target),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false;}).end().filter("img").css({opacity:"1.0",cursor:""});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false);}this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value;});// delete entry
},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */_disableDatepicker:function _disableDatepicker(target){var nodeName,inline,$target=$(target),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true;}).end().filter("img").css({opacity:"0.5",cursor:"default"});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true);}this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value;});// delete entry
this._disabledInputs[this._disabledInputs.length]=target;},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */_isDisabledDatepicker:function _isDisabledDatepicker(target){if(!target){return false;}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return true;}}return false;},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */_getInst:function _getInst(target){try{return $.data(target,PROP_NAME);}catch(err){throw"Missing instance data for this datepicker";}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */_optionDatepicker:function _optionDatepicker(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return name==="defaults"?$.extend({},$.datepicker._defaults):inst?name==="all"?$.extend({},inst.settings):this._get(inst,name):null;}settings=name||{};if(typeof name==="string"){settings={};settings[name]=value;}if(inst){if(this._curInst===inst){this._hideDatepicker();}date=this._getDateDatepicker(target,true);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate);}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate);}if("disabled"in settings){if(settings.disabled){this._disableDatepicker(target);}else{this._enableDatepicker(target);}}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},// change method deprecated
_changeDatepicker:function _changeDatepicker(target,name,value){this._optionDatepicker(target,name,value);},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */_refreshDatepicker:function _refreshDatepicker(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */_setDateDatepicker:function _setDateDatepicker(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */_getDateDatepicker:function _getDateDatepicker(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault);}return inst?this._getDate(inst):null;},/* Handle keystrokes. */_doKeyDown:function _doKeyDown(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=true,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;// hide on tab out
case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);}onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);// trigger custom callback
onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);}else{$.datepicker._hideDatepicker();}return false;// don't submit the form
case 27:$.datepicker._hideDatepicker();break;// hide on escape
case 33:$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target);}handled=event.ctrlKey||event.metaKey;break;// clear on ctrl or command +end
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target);}handled=event.ctrlKey||event.metaKey;break;// current on ctrl or command +home
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,isRTL?+1:-1,"D");}handled=event.ctrlKey||event.metaKey;// -1 day on ctrl or command +left
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");}// next month/year on alt +left on Mac
break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D");}handled=event.ctrlKey||event.metaKey;break;// -1 week on ctrl or command +up
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,isRTL?-1:+1,"D");}handled=event.ctrlKey||event.metaKey;// +1 day on ctrl or command +right
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");}// next month/year on alt +right
break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D");}handled=event.ctrlKey||event.metaKey;break;// +1 week on ctrl or command +down
default:handled=false;}}else if(event.keyCode===36&&event.ctrlKey){// display the date picker on ctrl+home
$.datepicker._showDatepicker(this);}else{handled=false;}if(handled){event.preventDefault();event.stopPropagation();}},/* Filter entered characters - based on date format. */_doKeyPress:function _doKeyPress(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||chr<" "||!chars||chars.indexOf(chr)>-1;}},/* Synchronise manual entry and field/alternate field. */_doKeyUp:function _doKeyUp(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),inst.input?inst.input.val():null,$.datepicker._getFormatConfig(inst));if(date){// only if valid
$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}catch(err){}}return true;},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */_showDatepicker:function _showDatepicker(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){// find from button/image trigger
input=$("input",input.parentNode)[0];}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){// already here
return;}var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);}}beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){// hide cursor
input.value="";}if(!$.datepicker._pos){// position below input
$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;// add the height
}isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed;});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;//to avoid flashes on Firefox
inst.dpDiv.empty();// determine sizing offscreen
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);// fix width for dynamic number of date pickers
// and adjust position before showing
offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":isFixed?"fixed":"absolute",display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null);}if($.datepicker._shouldFocusInput(inst)){inst.input.focus();}$.datepicker._curInst=inst;}},/* Generate the date picker content. */_updateDatepicker:function _updateDatepicker(inst){this.maxRows=4;//Reset the max number of rows being displayed (see #7043)
instActive=inst;// for delegate hover events
inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",width*cols+"em");}inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.focus();}// deffered render of the years select (to avoid flashes on Firefox)
if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){//assure that inst.yearshtml didn't change.
if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);}origyearshtml=inst.yearshtml=null;},0);}},// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function _shouldFocusInput(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");},/* Check positioning to remain on screen. */_checkOffset:function _checkOffset(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=this._get(inst,"isRTL")?dpWidth-inputWidth:0;offset.left-=isFixed&&offset.left===inst.input.offset().left?$(document).scrollLeft():0;offset.top-=isFixed&&offset.top===inst.input.offset().top+inputHeight?$(document).scrollTop():0;// now check if datepicker is showing outside window viewport - move to a better place if so.
offset.left-=Math.min(offset.left,offset.left+dpWidth>viewWidth&&viewWidth>dpWidth?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,offset.top+dpHeight>viewHeight&&viewHeight>dpHeight?Math.abs(dpHeight+inputHeight):0);return offset;},/* Find an object's position on the screen. */_findPos:function _findPos(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"];}position=$(obj).offset();return[position.left,position.top];},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */_hideDatepicker:function _hideDatepicker(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||input&&inst!==$.data(input,PROP_NAME)){return;}if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function postProcess(){$.datepicker._tidyDialog(inst);};// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);}else{inst.dpDiv[showAnim==="slideDown"?"slideUp":showAnim==="fadeIn"?"fadeOut":"hide"](showAnim?duration:null,postProcess);}if(!showAnim){postProcess();}this._datepickerShowing=false;onClose=this._get(inst,"onClose");if(onClose){onClose.apply(inst.input?inst.input[0]:null,[inst.input?inst.input.val():"",inst]);}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv);}}this._inDialog=false;}},/* Tidy up after a dialog display. */_tidyDialog:function _tidyDialog(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");},/* Close date picker if clicked elsewhere. */_checkExternalClick:function _checkExternalClick(event){if(!$.datepicker._curInst){return;}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)||$target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst){$.datepicker._hideDatepicker();}},/* Adjust one of the date sub-fields. */_adjustDate:function _adjustDate(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}this._adjustInstDate(inst,offset+(period==="M"?this._get(inst,"showCurrentAtPos"):0),// undo positioning
period);this._updateDatepicker(inst);},/* Action for current link. */_gotoToday:function _gotoToday(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}this._notifyChange(inst);this._adjustDate(target);},/* Action for selecting a new month/year. */_selectMonthYear:function _selectMonthYear(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},/* Action for selecting a day. */_selectDay:function _selectDay(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},/* Erase the input field and hide the date picker. */_clearDate:function _clearDate(id){var target=$(id);this._selectDate(target,"");},/* Update the input field with the selected date. */_selectDate:function _selectDate(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=dateStr!=null?dateStr:this._formatDate(inst);if(inst.input){inst.input.val(dateStr);}this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);// trigger custom callback
}else if(inst.input){inst.input.trigger("change");// fire the change event
}if(inst.inline){this._updateDatepicker(inst);}else{this._hideDatepicker();this._lastInput=inst.input[0];if(_typeof(inst.input[0])!=="object"){inst.input.focus();// restore focus
}this._lastInput=null;}},/* Update any alternate field to synchronise with the main field. */_updateAlternate:function _updateAlternate(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){// update alternate field too
altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr);});}},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */noWeekends:function noWeekends(date){var day=date.getDay();return[day>0&&day<6,""];},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */iso8601Week:function iso8601Week(date){var time,checkDate=new Date(date.getTime());// Find Thursday of this week starting on Monday
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);// Compare with Jan 1
checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */parseDate:function parseDate(format,value,settings){if(format==null||value==null){throw"Invalid arguments";}value=(typeof value==="undefined"?"undefined":_typeof(value))==="object"?value.toString():value+"";if(value===""){return null;}var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=false,date,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;},// Extract a number from the string value
getNumber=function getNumber(match){var isDoubled=lookAhead(match),size=match==="@"?14:match==="!"?20:match==="y"&&isDoubled?4:match==="o"?3:2,digits=new RegExp("^\\d{1,"+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue;}iValue+=num[0].length;return parseInt(num[0],10);},// Extract a name from the string value and convert to an index
getName=function getName(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!==-1){return index+1;}else{throw"Unknown name at position "+iValue;}},// Confirm that a literal character matches the string value
checkLiteral=function checkLiteral(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw"Unexpected literal at position "+iValue;}iValue++;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{checkLiteral();}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral();}else{literal=true;}break;default:checkLiteral();}}}if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra;}}if(year===-1){year=new Date().getFullYear();}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100);}if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break;}month++;day-=dim;}while(true);}date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw"Invalid date";// E.g. 31/02/00
}return date;},/* Standard date formats. */ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */formatDate:function formatDate(format,date,settings){if(!date){return"";}var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;},// Format a number, with leading zero if necessary
formatNumber=function formatNumber(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num;}}return num;},// Format a name, short or long as requested
formatName=function formatName(match,value,shortNames,longNames){return lookAhead(match)?longNames[value]:shortNames[value];},output="",literal=false;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{output+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100;break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'";}else{literal=true;}break;default:output+=format.charAt(iFormat);}}}}return output;},/* Extract all possible characters from the date format. */_possibleChars:function _possibleChars(format){var iFormat,chars="",literal=false,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{chars+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":if(lookAhead("'")){chars+="'";}else{literal=true;}break;default:chars+=format.charAt(iFormat);}}}return chars;},/* Get a setting value, defaulting if necessary. */_get:function _get(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},/* Parse existing date and initialise date picker. */_setDateFromField:function _setDateFromField(inst,noDefault){if(inst.input.val()===inst.lastVal){return;}var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){dates=noDefault?"":dates;}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=dates?date.getDate():0;inst.currentMonth=dates?date.getMonth():0;inst.currentYear=dates?date.getFullYear():0;this._adjustInstDate(inst);},/* Retrieve the default date shown on opening. */_getDefaultDate:function _getDefaultDate(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));},/* A date may be specified as an exact value or a relative one. */_determineDate:function _determineDate(inst,date,defaultDate){var offsetNumeric=function offsetNumeric(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;},offsetString=function offsetString(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst));}catch(e){// Ignore
}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}matches=pattern.exec(offset);}return new Date(year,month,day);},newDate=date==null||date===""?defaultDate:typeof date==="string"?offsetString(date):typeof date==="number"?isNaN(date)?defaultDate:offsetNumeric(date):new Date(date.getTime());newDate=newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate;if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}return this._daylightSavingAdjust(newDate);},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */_daylightSavingAdjust:function _daylightSavingAdjust(date){if(!date){return null;}date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},/* Set the date(s) directly. */_setDate:function _setDate(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst);}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst));}},/* Retrieve the date(s) directly. */_getDate:function _getDate(inst){var startDate=!inst.currentYear||inst.input&&inst.input.val()===""?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return startDate;},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */_attachHandlers:function _attachHandlers(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function prev(){$.datepicker._adjustDate(id,-stepMonths,"M");},next:function next(){$.datepicker._adjustDate(id,+stepMonths,"M");},hide:function hide(){$.datepicker._hideDatepicker();},today:function today(){$.datepicker._gotoToday(id);},selectDay:function selectDay(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false;},selectMonth:function selectMonth(){$.datepicker._selectMonthYear(id,this,"M");return false;},selectYear:function selectYear(){$.datepicker._selectMonthYear(id,this,"Y");return false;}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);});},/* Generate the HTML for the current state of the date picker. */_generateHTML:function _generateHTML(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),// clear time
isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=numMonths[0]!==1||numMonths[1]!==1,currentDate=this._daylightSavingAdjust(!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[0]*numMonths[1]+1,maxDate.getDate()));maxDraw=minDate&&maxDraw<minDate?minDate:maxDraw;while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst));prev=this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>";nextText=this._get(inst,"nextText");nextText=!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst));next=this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>";currentText=this._get(inst,"currentText");gotoDate=this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today;currentText=!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst));controls=!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>":"";buttonPanel=showButtonPanel?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=isNaN(firstDay)?0:firstDay;showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";dow;for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break;}}calender+="'>";}calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&row===0?isRTL?next:prev:"")+(/all|right/.test(cornerClass)&&row===0?isRTL?prev:next:"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"";for(dow=0;dow<7;dow++){// days of the week
day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";}calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);}leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);// calculate the number of rows to generate
numRows=isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows;//If multiple months, use the higher number of rows (see #7043)
this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){// create date picker rows
calender+="<tr>";tbody=!showWeek?"":"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>";for(dow=0;dow<7;dow++){// create date picker days
daySettings=beforeShowDay?beforeShowDay.apply(inst.input?inst.input[0]:null,[printDate]):[true,""];otherMonth=printDate.getMonth()!==drawMonth;unselectable=otherMonth&&!selectOtherMonths||!daySettings[0]||minDate&&printDate<minDate||maxDate&&printDate>maxDate;tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
otherMonth?" ui-datepicker-other-month":"")+(// highlight days from other months
printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent||// user pressed key
defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime()?// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(// highlight custom dates
printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(// highlight selected day
printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
(!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+(// cell title
unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(// actions
otherMonth&&!showOtherMonths?"&#xa0;":// display for other months
unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(// highlight selected day
otherMonth?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+printDate.getDate()+"</a>")+"</td>";// display selectable date
printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}calender+=tbody+"</tr>";}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}calender+="</tbody></table>"+(isMultiMonth?"</div>"+(numMonths[0]>0&&col===numMonths[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender;}html+=group;}html+=buttonPanel;inst._keyEvent=false;return html;},/* Generate the month and year header. */_generateMonthYearHeader:function _generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";// month selection
if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";}else{inMinYear=minDate&&minDate.getFullYear()===drawYear;inMaxYear=maxDate&&maxDate.getFullYear()===drawYear;monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>";}}monthHtml+="</select>";}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");}// year selection
if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";}else{// determine range of years to display
years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function determineYear(value){var year=value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10);return isNaN(year)?thisYear:year;};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=minDate?Math.max(year,minDate.getFullYear()):year;endYear=maxDate?Math.min(endYear,maxDate.getFullYear()):endYear;inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>";}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null;}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;}html+="</div>";// Close datepicker_header
return html;},/* Adjust one of the date sub-fields. */_adjustInstDate:function _adjustInstDate(inst,offset,period){var year=inst.drawYear+(period==="Y"?offset:0),month=inst.drawMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst);}},/* Ensure a date is within any min/max bounds. */_restrictMinMax:function _restrictMinMax(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=minDate&&date<minDate?minDate:date;return maxDate&&newDate>maxDate?maxDate:newDate;},/* Notify change of month/year. */_notifyChange:function _notifyChange(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply(inst.input?inst.input[0]:null,[inst.selectedYear,inst.selectedMonth+1,inst]);}},/* Determine the number of months to show. */_getNumberOfMonths:function _getNumberOfMonths(inst){var numMonths=this._get(inst,"numberOfMonths");return numMonths==null?[1,1]:typeof numMonths==="number"?[1,numMonths]:numMonths;},/* Determine the current maximum date - ensure no time components are set. */_getMinMaxDate:function _getMinMaxDate(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null);},/* Find the number of days in a given month. */_getDaysInMonth:function _getDaysInMonth(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},/* Find the day of the week of the first of a month. */_getFirstDayOfMonth:function _getFirstDayOfMonth(year,month){return new Date(year,month,1).getDay();},/* Determines if we should allow a "next/prev" month display change. */_canAdjustMonth:function _canAdjustMonth(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));}return this._isInRange(inst,date);},/* Is the given date in the accepted range? */_isInRange:function _isInRange(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear;}if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear;}}return(!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear);},/* Provide the configuration settings for formatting/parsing. */_getFormatConfig:function _getFormatConfig(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10);return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};},/* Format the given date for display. */_formatDate:function _formatDate(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}var date=day?(typeof day==="undefined"?"undefined":_typeof(day))==="object"?day:this._daylightSavingAdjust(new Date(year,month,day)):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));}});/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover");}}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover");}}});}/* jQuery extend now ignores nulls! */function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name];}}return target;}/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */$.fn.datepicker=function(options){/* Verify an empty collection wasn't passed - Fixes #6976 */if(!this.length){return this;}/* Initialise the date picker. */if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick);$.datepicker.initialized=true;}/* Append datepicker main container to body if not exist. */if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv);}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();// singleton instance
$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.10.3";})(jQuery);(function($,undefined){var sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};$.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",// Ensure the titlebar is always visible
using:function using(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset);}}},resizable:true,show:null,title:null,width:300,// callbacks
beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function _create(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable();}if(this.options.resizable&&$.fn.resizable){this._makeResizable();}this._isOpen=false;},_init:function _init(){if(this.options.autoOpen){this.open();}},_appendTo:function _appendTo(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element);}return this.document.find(element||"body").eq(0);},_destroy:function _destroy(){var next,originalPosition=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss)// Without detaching first, the following becomes really slow
.detach();this.uiDialog.stop(true,true).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle);}next=originalPosition.parent.children().eq(originalPosition.index);// Don't try to place the dialog next to itself (#8613)
if(next.length&&next[0]!==this.element[0]){next.before(this.element);}else{originalPosition.parent.append(this.element);}},widget:function widget(){return this.uiDialog;},disable:$.noop,enable:$.noop,close:function close(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===false){return;}this._isOpen=false;this._destroyOverlay();if(!this.opener.filter(":focusable").focus().length){// Hiding a focused element doesn't trigger blur in WebKit
// so in case we have nothing to focus on, explicitly blur the active element
// https://bugs.webkit.org/show_bug.cgi?id=47182
$(this.document[0].activeElement).blur();}this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event);});},isOpen:function isOpen(){return this._isOpen;},moveToTop:function moveToTop(){this._moveToTop();},_moveToTop:function _moveToTop(event,silent){var moved=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;if(moved&&!silent){this._trigger("focus",event);}return moved;},open:function open(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable();}return;}this._isOpen=true;this.opener=$(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,true);this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus");});this._trigger("open");},_focusTabbable:function _focusTabbable(){// Set focus to the first match:
// 1. First element inside the dialog matching [autofocus]
// 2. Tabbable element inside the content element
// 3. Tabbable element inside the buttonpane
// 4. The close button
// 5. The dialog itself
var hasFocus=this.element.find("[autofocus]");if(!hasFocus.length){hasFocus=this.element.find(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialog;}hasFocus.eq(0).focus();},_keepFocus:function _keepFocus(event){function checkFocus(){var activeElement=this.document[0].activeElement,isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable();}}event.preventDefault();checkFocus.call(this);// support: IE
// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
// so we check again later
this._delay(checkFocus);},_createWrapper:function _createWrapper(){this.uiDialog=$("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({// Setting tabIndex makes the div focusable
tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function keydown(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}// prevent tabbing out of dialogs
if(event.keyCode!==$.ui.keyCode.TAB){return;}var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){first.focus(1);event.preventDefault();}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){last.focus(1);event.preventDefault();}},mousedown:function mousedown(event){if(this._moveToTop(event)){this._focusTabbable();}}});// We assume that any existing aria-describedby attribute means
// that the dialog content is marked up properly
// otherwise we brute force the content as the description
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});}},_createTitlebar:function _createTitlebar(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function mousedown(event){// Don't prevent click on close button (#8838)
// Focusing a dialog that is partially scrolled out of view
// causes the browser to scroll it into view, preventing the click event
if(!$(event.target).closest(".ui-dialog-titlebar-close")){// Dialog isn't getting focus when dragging (#8063)
this.uiDialog.focus();}}});this.uiDialogTitlebarClose=$("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function click(event){event.preventDefault();this.close(event);}});uiDialogTitle=$("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(uiDialogTitle);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")});},_title:function _title(title){if(!this.options.title){title.html("&#160;");}title.text(this.options.title);},_createButtonPane:function _createButtonPane(){this.uiDialogButtonPane=$("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons();},_createButtons:function _createButtons(){var that=this,buttons=this.options.buttons;// if we already have a button pane, remove it
this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||$.isArray(buttons)&&!buttons.length){this.uiDialog.removeClass("ui-dialog-buttons");return;}$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;// Default to a non-submitting button
props=$.extend({type:"button"},props);// Change the context for the click callback to be the main element
click=props.click;props.click=function(){click.apply(that.element[0],arguments);};buttonOptions={icons:props.icons,text:props.showText};delete props.icons;delete props.showText;$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet);});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog);},_makeDraggable:function _makeDraggable(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function start(event,ui){$(this).addClass("ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui));},drag:function drag(event,ui){that._trigger("drag",event,filteredUi(ui));},stop:function stop(event,ui){options.position=[ui.position.left-that.document.scrollLeft(),ui.position.top-that.document.scrollTop()];$(this).removeClass("ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui));}});},_makeResizable:function _makeResizable(){var that=this,options=this.options,handles=options.resizable,// .ui-resizable has position: relative defined in the stylesheet
// but dialogs have to use absolute or fixed positioning
position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function start(event,ui){$(this).addClass("ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui));},resize:function resize(event,ui){that._trigger("resize",event,filteredUi(ui));},stop:function stop(event,ui){options.height=$(this).height();options.width=$(this).width();$(this).removeClass("ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui));}}).css("position",position);},_minHeight:function _minHeight(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height);},_position:function _position(){// Need to show the dialog to get the actual offset in the position plugin
var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide();}},_setOptions:function _setOptions(options){var that=this,resize=false,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in sizeRelatedOptions){resize=true;}if(key in resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();this._position();}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function _setOption(key,value){/*jshint maxcomplexity:15*/var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="dialogClass"){uiDialog.removeClass(this.options.dialogClass).addClass(value);}if(key==="disabled"){return;}this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo());}if(key==="buttons"){this._createButtons();}if(key==="closeText"){this.uiDialogTitlebarClose.button({// Ensure that we always pass a string
label:""+value});}if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}if(!isDraggable&&value){this._makeDraggable();}}if(key==="position"){this._position();}if(key==="resizable"){// currently resizable, becoming non-resizable
isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy");}// currently resizable, changing handles
if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value);}// currently non-resizable, becoming resizable
if(!isResizable&&value!==false){this._makeResizable();}}if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));}},_size:function _size(){// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
// divs will both have width and height set, so we need to reset them
var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;// Reset content sizing
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth;}// reset wrapper sizing
// determine the height of all the non-content elements
nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"});}else{this.element.height(Math.max(0,options.height-nonContentHeight));}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight());}},_blockFrames:function _blockFrames(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0];});},_unblockFrames:function _unblockFrames(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_allowInteraction:function _allowInteraction(event){if($(event.target).closest(".ui-dialog").length){return true;}// TODO: Remove hack when datepicker implements
// the .ui-front logic (#8989)
return!!$(event.target).closest(".ui-datepicker").length;},_createOverlay:function _createOverlay(){if(!this.options.modal){return;}var that=this,widgetFullName=this.widgetFullName;if(!$.ui.dialog.overlayInstances){// Prevent use of anchors and inputs.
// We use a delay in case the overlay is created from an
// event that we're going to be cancelling. (#2804)
this._delay(function(){// Handle .dialog().dialog("close") (#4065)
if($.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(event){if(!that._allowInteraction(event)){event.preventDefault();$(".ui-dialog:visible:last .ui-dialog-content").data(widgetFullName)._focusTabbable();}});}});}this.overlay=$("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});$.ui.dialog.overlayInstances++;},_destroyOverlay:function _destroyOverlay(){if(!this.options.modal){return;}if(this.overlay){$.ui.dialog.overlayInstances--;if(!$.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog");}this.overlay.remove();this.overlay=null;}}});$.ui.dialog.overlayInstances=0;// DEPRECATED
if($.uiBackCompat!==false){// position option with array notation
// just override with old implementation
$.widget("ui.dialog",$.ui.dialog,{_position:function _position(){var position=this.options.position,myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==="string"||(typeof position==="undefined"?"undefined":_typeof(position))==="object"&&"0"in position){myAt=position.split?position.split(" "):[position[0],position[1]];if(myAt.length===1){myAt[1]=myAt[0];}$.each(["left","top"],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition;}});position={my:myAt[0]+(offset[0]<0?offset[0]:"+"+offset[0])+" "+myAt[1]+(offset[1]<0?offset[1]:"+"+offset[1]),at:myAt.join(" ")};}position=$.extend({},$.ui.dialog.prototype.options.position,position);}else{position=$.ui.dialog.prototype.options.position;}// need to show the dialog to get the actual offset in the position plugin
isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}this.uiDialog.position(position);if(!isVisible){this.uiDialog.hide();}}});}})(jQuery);(function($,undefined){$.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",// callbacks
blur:null,focus:null,select:null},_create:function _create(){this.activeMenu=this.element;// flag used to prevent firing of the click handler
// as the event bubbles up through nested menus
this.mouseHandled=false;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0})// need to catch all clicks on disabled menu
// not possible through _on
.bind("click"+this.eventNamespace,$.proxy(function(event){if(this.options.disabled){event.preventDefault();}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true");}this._on({// Prevent focus from sticking to links inside menu after clicking
// them (focus should always stay on UL during navigation).
"mousedown .ui-menu-item > a":function mousedownUiMenuItemA(event){event.preventDefault();},"click .ui-state-disabled > a":function clickUiStateDisabledA(event){event.preventDefault();},"click .ui-menu-item:has(a)":function clickUiMenuItemHasA(event){var target=$(event.target).closest(".ui-menu-item");if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.mouseHandled=true;this.select(event);// Open submenu on click
if(target.has(".ui-menu").length){this.expand(event);}else if(!this.element.is(":focus")){// Redirect focus to the menu
this.element.trigger("focus",[true]);// If the active item is on the top level, let it stay active.
// Otherwise, blur the active item since it is no longer visible.
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer);}}}},"mouseenter .ui-menu-item":function mouseenterUiMenuItem(event){var target=$(event.currentTarget);// Remove ui-state-active class from siblings of the newly focused menu item
// to avoid a jump caused by adjacent elements both having a class with a border
target.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(event,target);},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function focus(event,keepActiveItem){// If there's already an active item, keep it active
// If not, activate the first item
var item=this.active||this.element.children(".ui-menu-item").eq(0);if(!keepActiveItem){this.focus(event,item);}},blur:function blur(event){this._delay(function(){if(!$.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(event);}});},keydown:"_keydown"});this.refresh();// Clicks outside of a menu collapse any open menus
this._on(this.document,{click:function click(event){if(!$(event.target).closest(".ui-menu").length){this.collapseAll(event);}// Reset the mouseHandled flag
this.mouseHandled=false;}});},_destroy:function _destroy(){// Destroy (sub)menus
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();// Destroy menu items
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-carat")){elem.remove();}});// Destroy menu dividers
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");},_keydown:function _keydown(event){/*jshint maxcomplexity:20*/var match,prev,character,skip,regex,preventDefault=true;function escape(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");}switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event);}break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter||"";character=String.fromCharCode(event.keyCode);skip=false;clearTimeout(this.filterTimer);if(character===prev){skip=true;}else{character=prev+character;}regex=new RegExp("^"+escape(character),"i");match=this.activeMenu.children(".ui-menu-item").filter(function(){return regex.test($(this).children("a").text());});match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;// If no matches on the current filter, reset to the last character pressed
// to move down the menu to the first item that starts with that character
if(!match.length){character=String.fromCharCode(event.keyCode);regex=new RegExp("^"+escape(character),"i");match=this.activeMenu.children(".ui-menu-item").filter(function(){return regex.test($(this).children("a").text());});}if(match.length){this.focus(event,match);if(match.length>1){this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter;},1000);}else{delete this.previousFilter;}}else{delete this.previousFilter;}}if(preventDefault){event.preventDefault();}},_activate:function _activate(event){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(event);}else{this.select(event);}}},refresh:function refresh(){var menus,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);// Initialize nested menus
submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev("a"),submenuCarat=$("<span>").addClass("ui-menu-icon ui-icon "+icon).data("ui-menu-submenu-carat",true);item.attr("aria-haspopup","true").prepend(submenuCarat);menu.attr("aria-labelledby",item.attr("id"));});menus=submenus.add(this.element);// Don't refresh list items that are already adapted
menus.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});// Initialize unlinked menu-items containing spaces and/or dashes only as dividers
menus.children(":not(.ui-menu-item)").each(function(){var item=$(this);// hyphen, em dash, en dash
if(!/[^\-\u2014\u2013\s]/.test(item.text())){item.addClass("ui-widget-content ui-menu-divider");}});// Add aria-disabled attribute to any disabled menu item
menus.children(".ui-state-disabled").attr("aria-disabled","true");// If the active item has been removed, blur the menu
if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur();}},_itemRole:function _itemRole(){return{menu:"menuitem",listbox:"option"}[this.options.role];},_setOption:function _setOption(key,value){if(key==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu);}this._super(key,value);},focus:function focus(event,item){var nested,focused;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children("a").addClass("ui-state-focus");// Only update aria-activedescendant if there's a role
// otherwise we assume focus is managed elsewhere
if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"));}// Highlight active parent menu item, if any
this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(event&&event.type==="keydown"){this._close();}else{this.timer=this._delay(function(){this._close();},this.delay);}nested=item.children(".ui-menu");if(nested.length&&/^mouse/.test(event.type)){this._startOpening(nested);}this.activeMenu=item.parent();this._trigger("focus",event,{item:item});},_scrollIntoView:function _scrollIntoView(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.height();if(offset<0){this.activeMenu.scrollTop(scroll+offset);}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight);}}},blur:function blur(event,fromFocus){if(!fromFocus){clearTimeout(this.timer);}if(!this.active){return;}this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",event,{item:this.active});},_startOpening:function _startOpening(submenu){clearTimeout(this.timer);// Don't open if already open fixes a Firefox bug that caused a .5 pixel
// shift in the submenu position when mousing over the carat icon
if(submenu.attr("aria-hidden")!=="true"){return;}this.timer=this._delay(function(){this._close();this._open(submenu);},this.delay);},_open:function _open(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position);},collapseAll:function collapseAll(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){// If we were passed an event, look for the submenu that contains the event
var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
if(!currentMenu.length){currentMenu=this.element;}this._close(currentMenu);this.blur(event);this.activeMenu=currentMenu;},this.delay);},// With no arguments, closes the currently active menu - if nothing is active
// it closes all menus.  If passed an argument, it will search for menus BELOW
_close:function _close(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element;}startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active");},collapse:function collapse(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem);}},expand:function expand(event){var newItem=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(newItem&&newItem.length){this._open(newItem.parent());// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
this._delay(function(){this.focus(event,newItem);});}},next:function next(event){this._move("next","first",event);},previous:function previous(event){this._move("prev","last",event);},isFirstItem:function isFirstItem(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},isLastItem:function isLastItem(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},_move:function _move(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1);}else{next=this.active[direction+"All"](".ui-menu-item").eq(0);}}if(!next||!next.length||!this.active){next=this.activeMenu.children(".ui-menu-item")[filter]();}this.focus(event,next);},nextPage:function nextPage(event){var item,base,height;if(!this.active){this.next(event);return;}if(this.isLastItem()){return;}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]());}},previousPage:function previousPage(event){var item,base,height;if(!this.active){this.next(event);return;}if(this.isFirstItem()){return;}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.children(".ui-menu-item").first());}},_hasScroll:function _hasScroll(){return this.element.outerHeight()<this.element.prop("scrollHeight");},select:function select(event){// TODO: It should never be possible to not have an active item at this
// point, but the tests don't trigger mouseenter before click.
this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,true);}this._trigger("select",event,ui);}});})(jQuery);(function($,undefined){$.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function _create(){// Constrain initial value
this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({// Only set static values, aria-valuenow and aria-valuemax are
// set inside _refreshValue()
role:"progressbar","aria-valuemin":this.min});this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue();},_destroy:function _destroy(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();},value:function value(newValue){if(newValue===undefined){return this.options.value;}this.options.value=this._constrainedValue(newValue);this._refreshValue();},_constrainedValue:function _constrainedValue(newValue){if(newValue===undefined){newValue=this.options.value;}this.indeterminate=newValue===false;// sanitize value
if(typeof newValue!=="number"){newValue=0;}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,newValue));},_setOptions:function _setOptions(options){// Ensure "value" option is set after other values (like max)
var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue();},_setOption:function _setOption(key,value){if(key==="max"){// Don't allow a max less than min
value=Math.max(this.min,value);}this._super(key,value);},_percentage:function _percentage(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min);},_refreshValue:function _refreshValue(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv);}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null;}}if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}if(value===this.options.max){this._trigger("complete");}}});})(jQuery);(function($,undefined){// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
var numPages=5;$.widget("ui.slider",$.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,// callbacks
change:null,slide:null,start:null,stop:null},_create:function _create(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false;},_refresh:function _refresh(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue();},_createHandles:function _createHandles(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",handles=[];handleCount=options.values&&options.values.length||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount);}for(i=existingHandles.length;i<handleCount;i++){handles.push(handle);}this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i);});},_createRange:function _createRange(){var options=this.options,classes="";if(options.range){if(options.range===true){if(!options.values){options.values=[this._valueMin(),this._valueMin()];}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]];}else if($.isArray(options.values)){options.values=options.values.slice(0);}}if(!this.range||!this.range.length){this.range=$("<div></div>").appendTo(this.element);classes="ui-slider-range"+// note: this isn't the most fittingly semantic framework class for this element,
// but worked best visually with a variety of themes
" ui-widget-header ui-corner-all";}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max")// Handle range switching from true to min/max
.css({"left":"","bottom":""});}this.range.addClass(classes+(options.range==="min"||options.range==="max"?" ui-slider-range-"+options.range:""));}else{this.range=$([]);}},_setupEvents:function _setupEvents(){var elements=this.handles.add(this.range).filter("a");this._off(elements);this._on(elements,this._handleEvents);this._hoverable(elements);this._focusable(elements);},_destroy:function _destroy(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._mouseDestroy();},_mouseCapture:function _mouseCapture(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false;}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if(distance>thisDistance||distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min)){distance=thisDistance;closestHandle=$(this);index=i;}});allowed=this._start(event,index);if(allowed===false){return false;}this._mouseSliding=true;this._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-closestHandle.width()/2,top:event.pageY-offset.top-closestHandle.height()/2-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}this._animateOff=true;return true;},_mouseStart:function _mouseStart(){return true;},_mouseDrag:function _mouseDrag(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function _mouseStop(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function _detectOrientation(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal";},_normValueFromMouse:function _normValueFromMouse(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}percentMouse=pixelMouse/pixelTotal;if(percentMouse>1){percentMouse=1;}if(percentMouse<0){percentMouse=0;}if(this.orientation==="vertical"){percentMouse=1-percentMouse;}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_start:function _start(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}return this._trigger("start",event,uiHash);},_slide:function _slide(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if(this.options.values.length===2&&this.options.range===true&&(index===0&&newVal>otherVal||index===1&&newVal<otherVal)){newVal=otherVal;}if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;// A slide can be canceled by returning false from the slide callback
allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,true);}}}else{if(newVal!==this.value()){// A slide can be canceled by returning false from the slide callback
allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal);}}}},_stop:function _stop(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}this._trigger("stop",event,uiHash);},_change:function _change(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}//store the last changed value index for reference when handles overlap
this._lastChangedValue=index;this._trigger("change",event,uiHash);}},value:function value(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}return this._value();},values:function values(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}this._refreshValue();}else{if(this.options.values&&this.options.values.length){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function _setOption(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===true){if(value==="min"){this.options.value=this._values(0);this.options.values=null;}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null;}}if($.isArray(this.options.values)){valsLength=this.options.values.length;}$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i);}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break;}},//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function _value(){var val=this.options.value;val=this._trimAlignValue(val);return val;},//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function _values(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else if(this.options.values&&this.options.values.length){// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}return vals;}else{return[];}},// returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function _trimAlignValue(val){if(val<=this._valueMin()){return this._valueMin();}if(val>=this._valueMax()){return this._valueMax();}var step=this.options.step>0?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=valModStep>0?step:-step;}// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return parseFloat(alignValue.toFixed(5));},_valueMin:function _valueMin(){return this.options.min;},_valueMax:function _valueMax(){return this.options.max;},_refreshValue:function _refreshValue(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=!this._animateOff?o.animate:false,_set={};if(this.options.values&&this.options.values.length){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({width:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate});}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({height:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate});}}}lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=valueMax!==valueMin?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:100-valPercent+"%"},{queue:false,duration:o.animate});}if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:100-valPercent+"%"},{queue:false,duration:o.animate});}}},_handleEvents:{keydown:function keydown(event){/*jshint maxcomplexity:25*/var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;$(event.target).addClass("ui-state-active");allowed=this._start(event,index);if(allowed===false){return;}}break;}step=this.options.step;if(this.options.values&&this.options.values.length){curVal=newVal=this.values(index);}else{curVal=newVal=this.value();}switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+(this._valueMax()-this._valueMin())/numPages);break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-(this._valueMax()-this._valueMin())/numPages);break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return;}newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return;}newVal=this._trimAlignValue(curVal-step);break;}this._slide(event,index,newVal);},click:function click(event){event.preventDefault();},keyup:function keyup(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);$(event.target).removeClass("ui-state-active");}}}});})(jQuery);(function($){function modifier(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change");}};}$.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function _create(){// handle string values that need to be parsed
this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);// format the value, but don't constrain
this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();// turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function beforeunload(){this.element.removeAttr("autocomplete");}});},_getCreateOptions:function _getCreateOptions(){var options={},element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!==undefined&&value.length){options[option]=value;}});return options;},_events:{keydown:function keydown(event){if(this._start(event)&&this._keydown(event)){event.preventDefault();}},keyup:"_stop",focus:function focus(){this.previous=this.element.val();},blur:function blur(event){if(this.cancelBlur){delete this.cancelBlur;return;}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event);}},mousewheel:function mousewheel(event,delta){if(!delta){return;}if(!this.spinning&&!this._start(event)){return false;}this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event);}},100);event.preventDefault();},"mousedown .ui-spinner-button":function mousedownUiSpinnerButton(event){var previous;// We never want the buttons to have focus; whenever the user is
// interacting with the spinner, the focus should be on the input.
// If the input is focused then this.previous is properly set from
// when the input first received focus. If the input is not focused
// then we need to set this.previous based on the value before spinning.
previous=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===this.document[0].activeElement;if(!isActive){this.element.focus();this.previous=previous;// support: IE
// IE sets focus asynchronously, so we need to check if focus
// moved off of the input because the user clicked on the button.
this._delay(function(){this.previous=previous;});}}// ensure focus is on (or stays on) the text field
event.preventDefault();checkFocus.call(this);// support: IE
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
// and check (again) if focus moved off of the input.
this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;checkFocus.call(this);});if(this._start(event)===false){return;}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function mouseenterUiSpinnerButton(event){// button will add ui-state-active if mouse was down while mouseleave and kept down
if(!$(event.currentTarget).hasClass("ui-state-active")){return;}if(this._start(event)===false){return false;}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},// TODO: do we really want to consider this a stop?
// shouldn't we just stop the repeater and wait until mouseup before
// we trigger the stop event?
"mouseleave .ui-spinner-button":"_stop"},_draw:function _draw(){var uiSpinner=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent()// add buttons
.append(this._buttonHtml());this.element.attr("role","spinbutton");// button bindings
this.buttons=uiSpinner.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");// IE 6 doesn't understand height: 50% for the buttons
// unless the wrapper has an explicit height
if(this.buttons.height()>Math.ceil(uiSpinner.height()*0.5)&&uiSpinner.height()>0){uiSpinner.height(uiSpinner.height());}// disable spinner if element was already disabled
if(this.options.disabled){this.disable();}},_keydown:function _keydown(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return true;case keyCode.DOWN:this._repeat(null,-1,event);return true;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return true;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return true;}return false;},_uiSpinnerHtml:function _uiSpinnerHtml(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";},_buttonHtml:function _buttonHtml(){return""+"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>"+"<span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>";},_start:function _start(event){if(!this.spinning&&this._trigger("start",event)===false){return false;}if(!this.counter){this.counter=1;}this.spinning=true;return true;},_repeat:function _repeat(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event);},i);this._spin(steps*this.options.step,event);},_spin:function _spin(step,event){var value=this.value()||0;if(!this.counter){this.counter=1;}value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==false){this._value(value);this.counter++;}},_increment:function _increment(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1);}return 1;},_precision:function _precision(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}return precision;},_precisionOf:function _precisionOf(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_adjustValue:function _adjustValue(value){var base,aboveMin,options=this.options;// make sure we're at a valid step
// - find out where we are relative to the base (min or 0)
base=options.min!==null?options.min:0;aboveMin=value-base;// - round to the nearest step
aboveMin=Math.round(aboveMin/options.step)*options.step;// - rounding is based on 0, so adjust back to our base
value=base+aboveMin;// fix precision from bad JS floating point math
value=parseFloat(value.toFixed(this._precision()));// clamp the value
if(options.max!==null&&value>options.max){return options.max;}if(options.min!==null&&value<options.min){return options.min;}return value;},_stop:function _stop(event){if(!this.spinning){return;}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",event);},_setOption:function _setOption(key,value){if(key==="culture"||key==="numberFormat"){var prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return;}if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value);}}if(key==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(value.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(value.down);}this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true);this.buttons.button("disable");}else{this.element.prop("disabled",false);this.buttons.button("enable");}}},_setOptions:modifier(function(options){this._super(options);this._value(this.element.val());}),_parse:function _parse(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val;}return val===""||isNaN(val)?null:val;},_format:function _format(value){if(value===""){return"";}return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value;},_refresh:function _refresh(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,// TODO: what should we do with values that can't be parsed?
"aria-valuenow":this._parse(this.element.val())});},// update the value without triggering change
_value:function _value(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed);}value=this._format(parsed);}}this.element.val(value);this._refresh();},_destroy:function _destroy(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element);},stepUp:modifier(function(steps){this._stepUp(steps);}),_stepUp:function _stepUp(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop();}},stepDown:modifier(function(steps){this._stepDown(steps);}),_stepDown:function _stepDown(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop();}},pageUp:modifier(function(pages){this._stepUp((pages||1)*this.options.page);}),pageDown:modifier(function(pages){this._stepDown((pages||1)*this.options.page);}),value:function value(newVal){if(!arguments.length){return this._parse(this.element.val());}modifier(this._value).call(this,newVal);},widget:function widget(){return this.uiSpinner;}});})(jQuery);(function($,undefined){var tabId=0,rhash=/#.*$/;function getNextTabId(){return++tabId;}function isLocal(anchor){return anchor.hash.length>1&&decodeURIComponent(anchor.href.replace(rhash,""))===decodeURIComponent(location.href.replace(rhash,""));}$.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,// callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function _create(){var that=this,options=this.options;this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",options.collapsible)// Prevent users from focusing disabled tabs via click
.delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(event){if($(this).is(".ui-state-disabled")){event.preventDefault();}})// support: IE <9
// Preventing the default action in mousedown doesn't prevent IE
// from focusing the element, so if the anchor gets focused, blur.
// We don't have to worry about focusing the previously focused
// element since clicking on a non-focusable element should focus
// the body anyway.
.delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur();}});this._processTabs();options.active=this._initialActive();// Take disabling tabs via class attribute from HTML
// into account and update option properly.
if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li);}))).sort();}// check for length avoids error when initializing empty list
if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(options.active);}else{this.active=$();}this._refresh();if(this.active.length){this.load(options.active);}},_initialActive:function _initialActive(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){// check the fragment identifier in the URL
if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return false;}});}// check for a tab marked active via a class
if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));}// no active tab, set to false
if(active===null||active===-1){active=this.tabs.length?0:false;}}// handle numbers: negative, out of range
if(active!==false){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?false:0;}}// don't allow collapsible: false and active: false
if(!collapsible&&active===false&&this.anchors.length){active=0;}return active;},_getCreateEventData:function _getCreateEventData(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)};},_tabKeydown:function _tabKeydown(event){/*jshint maxcomplexity:15*/var focusedTab=$(this.document[0].activeElement).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;if(this._handlePageNav(event)){return;}switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:// Activate only, no collapsing
event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:// Toggle (cancel delayed activation, allow collapsing)
event.preventDefault();clearTimeout(this.activating);// Determine if we should collapse or activate
this._activate(selectedIndex===this.options.active?false:selectedIndex);return;default:return;}// Focus the appropriate tab, based on which key was pressed
event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);// Navigating with control key will prevent automatic activation
if(!event.ctrlKey){// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex);},this.delay);}},_panelKeydown:function _panelKeydown(event){if(this._handlePageNav(event)){return;}// Ctrl+up moves focus to the current tab
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.focus();}},// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function _handlePageNav(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true;}if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true;}},_findNextTab:function _findNextTab(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0;}if(index<0){index=lastTabIndex;}return index;}while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1;}return index;},_focusNextTab:function _focusNextTab(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).focus();return index;},_setOption:function _setOption(key,value){if(key==="active"){// _activate() will handle invalid values and update this.options
this._activate(value);return;}if(key==="disabled"){// don't use the widget factory's disabled handling
this._setupDisabled(value);return;}this._super(key,value);if(key==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",value);// Setting collapsible: false while collapsed; open first panel
if(!value&&this.options.active===false){this._activate(0);}}if(key==="event"){this._setupEvents(value);}if(key==="heightStyle"){this._setupHeightStyle(value);}},_tabId:function _tabId(tab){return tab.attr("aria-controls")||"ui-tabs-"+getNextTabId();},_sanitizeSelector:function _sanitizeSelector(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function refresh(){var options=this.options,lis=this.tablist.children(":has(a[href])");// get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab);});this._processTabs();// was collapsed or no tabs
if(options.active===false||!this.anchors.length){options.active=false;this.active=$();// was active, but active tab is gone
}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){// all remaining tabs are disabled
if(this.tabs.length===options.disabled.length){options.active=false;this.active=$();// activate previous tab
}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false));}// was active, active tab still exists
}else{// make sure active index is correct
options.active=this.tabs.index(this.active);}this._refresh();},_refresh:function _refresh(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});// Make sure one tab is in the tab order
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0);}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"});}},_processTabs:function _processTabs(){var that=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return $("a",this)[0];}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");// inline tab
if(isLocal(anchor)){selector=anchor.hash;panel=that.element.find(that._sanitizeSelector(selector));// remote tab
}else{panelId=that._tabId(tab);selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist);}panel.attr("aria-live","polite");}if(panel.length){that.panels=that.panels.add(panel);}if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls);}tab.attr({"aria-controls":selector.substring(1),"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId);});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel");},// allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function _getList(){return this.element.find("ol,ul").eq(0);},_createPanel:function _createPanel(id){return $("<div>").attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true);},_setupDisabled:function _setupDisabled(disabled){if($.isArray(disabled)){if(!disabled.length){disabled=false;}else if(disabled.length===this.anchors.length){disabled=true;}}// disable tabs
for(var i=0,li;li=this.tabs[i];i++){if(disabled===true||$.inArray(i,disabled)!==-1){$(li).addClass("ui-state-disabled").attr("aria-disabled","true");}else{$(li).removeClass("ui-state-disabled").removeAttr("aria-disabled");}}this.options.disabled=disabled;},_setupEvents:function _setupEvents(event){var events={click:function click(event){event.preventDefault();}};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs);},_setupHeightStyle:function _setupHeightStyle(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}maxHeight-=elem.outerHeight(true);});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true);});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}},_eventHandler:function _eventHandler(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||// tab is already loading
tab.hasClass("ui-tabs-loading")||// can't switch durning an animation
this.running||// click on active header, but not collapsible
clickedIsActive&&!options.collapsible||// allow canceling activation
this._trigger("beforeActivate",event,eventData)===false){return;}options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort();}if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.");}if(toShow.length){this.load(this.tabs.index(tab),event);}this._toggle(event,eventData);},// handles show/hide for selecting tabs
_toggle:function _toggle(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData);}function show(){eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete);}else{toShow.show();complete();}}// start out by hiding, then showing, then completing
if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");show();});}else{eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");toHide.hide();show();}toHide.attr({"aria-expanded":"false","aria-hidden":"true"});eventData.oldTab.attr("aria-selected","false");// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1);}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}toShow.attr({"aria-expanded":"true","aria-hidden":"false"});eventData.newTab.attr({"aria-selected":"true",tabIndex:0});},_activate:function _activate(index){var anchor,active=this._findActive(index);// trying to activate the already active panel
if(active[0]===this.active[0]){return;}// trying to collapse, simulate a click on the current active header
if(!active.length){active=this.active;}anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop});},_findActive:function _findActive(index){return index===false?$():this.tabs.eq(index);},_getIndex:function _getIndex(index){// meta-function to give users option to provide a href string instead of a numerical index.
if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+index+"']"));}return index;},_destroy:function _destroy(){if(this.xhr){this.xhr.abort();}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove();}else{$(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls");}else{li.removeAttr("aria-controls");}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","");}},enable:function enable(index){var disabled=this.options.disabled;if(disabled===false){return;}if(index===undefined){disabled=false;}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null;});}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null;});}}this._setupDisabled(disabled);},disable:function disable(index){var disabled=this.options.disabled;if(disabled===true){return;}if(index===undefined){disabled=true;}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return;}if($.isArray(disabled)){disabled=$.merge([index],disabled).sort();}else{disabled=[index];}}this._setupDisabled(disabled);},load:function load(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel};// not remote
if(isLocal(anchor[0])){return;}this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));// support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
if(this.xhr&&this.xhr.statusText!=="canceled"){tab.addClass("ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.success(function(response){// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);},1);}).complete(function(jqXHR,status){// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){if(status==="abort"){that.panels.stop(false,true);}tab.removeClass("ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr;}},1);});}},_ajaxSettings:function _ajaxSettings(anchor,event,eventData){var that=this;return{url:anchor.attr("href"),beforeSend:function beforeSend(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));}};},_getPanelForTab:function _getPanelForTab(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id));}});})(jQuery);(function($){var increments=0;function addDescribedBy(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")));}function removeDescribedBy(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1);}elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby);}else{elem.removeAttr("aria-describedby");}}$.widget("ui.tooltip",{version:"1.10.3",options:{content:function content(){// support: IE<9, Opera in jQuery <1.7
// .text() can't accept undefined, so coerce to a string
var title=$(this).attr("title")||"";// Escape title, since we're going from an attribute to raw HTML
return $("<a>").text(title).html();},hide:true,// Disabled elements have inconsistent behavior across browsers (#8661)
items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,// callbacks
close:null,open:null},_create:function _create(){this._on({mouseover:"open",focusin:"open"});// IDs of generated tooltips, needed for destroy
this.tooltips={};// IDs of parent tooltips where we removed the title attribute
this.parents={};if(this.options.disabled){this._disable();}},_setOption:function _setOption(key,value){var that=this;if(key==="disabled"){this[value?"_disable":"_enable"]();this.options[key]=value;// disable element style changes
return;}this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,element){that._updateContent(element);});}},_disable:function _disable(){var that=this;// close open tooltips
$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);});// remove title attributes to prevent native tooltips
this.element.find(this.options.items).addBack().each(function(){var element=$(this);if(element.is("[title]")){element.data("ui-tooltip-title",element.attr("title")).attr("title","");}});},_enable:function _enable(){// restore title attributes
this.element.find(this.options.items).addBack().each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));}});},open:function open(event){var that=this,target=$(event?event.target:this.element)// we need closest here due to mouseover bubbling,
// but always pointing at the same event target
.closest(this.options.items);// No element to show a tooltip for or the tooltip is already open
if(!target.length||target.data("ui-tooltip-id")){return;}if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"));}target.data("ui-tooltip-open",true);// kill parent tooltips, custom or native, for hover
if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true);}if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","");}});}this._updateContent(target,event);},_updateContent:function _updateContent(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"){return this._open(event,target,contentOption);}content=contentOption.call(target[0],function(response){// ignore async response if tooltip was closed already
if(!target.data("ui-tooltip-open")){return;}// IE may instantly serve a cached response for ajax requests
// delay this call to _open so the other call to _open runs first
that._delay(function(){// jQuery creates a special event for focusin when it doesn't
// exist natively. To improve performance, the native event
// object is reused and the type is changed. Therefore, we can't
// rely on the type being correct after the event finished
// bubbling, so we set it back to the previous value. (#8740)
if(event){event.type=eventType;}this._open(event,target,response);});});if(content){this._open(event,target,content);}},_open:function _open(event,target,content){var tooltip,events,delayedShow,positionOption=$.extend({},this.options.position);if(!content){return;}// Content can be updated multiple times. If the tooltip already
// exists, then just update the content and bail.
tooltip=this._find(target);if(tooltip.length){tooltip.find(".ui-tooltip-content").html(content);return;}// if we have a title, clear it to prevent the native tooltip
// we have to check first to avoid defining a title if none exists
// (we don't want to cause an element to start matching [title])
//
// We use removeAttr only for key events, to allow IE to export the correct
// accessible attributes. For mouse events, set to empty string to avoid
// native tooltip showing up (happens only when removing inside mouseover).
if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","");}else{target.removeAttr("title");}}tooltip=this._tooltip(target);addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return;}tooltip.position(positionOption);}if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});// trigger once to override element-relative positioning
position(event);}else{tooltip.position($.extend({of:target},this.options.position));}tooltip.hide();this._show(tooltip,this.options.show);// Handle tracking tooltips that are shown with a delay (#8644). As soon
// as the tooltip is visible, position the tooltip using the most recent
// event.
if(this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow);}},$.fx.interval);}this._trigger("open",event,{tooltip:tooltip});events={keyup:function keyup(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true);}},remove:function remove(){this._removeTooltip(tooltip);}};if(!event||event.type==="mouseover"){events.mouseleave="close";}if(!event||event.type==="focusin"){events.focusout="close";}this._on(true,target,events);},close:function close(event){var that=this,target=$(event?event.currentTarget:this.element),tooltip=this._find(target);// disabling closes the tooltip, so we need to track when we're closing
// to avoid an infinite loop in case the tooltip becomes disabled on close
if(this.closing){return;}// Clear the interval for delayed tracking tooltips
clearInterval(this.delayedShow);// only set title if we had one before (see comment in _open())
if(target.data("ui-tooltip-title")){target.attr("title",target.data("ui-tooltip-title"));}removeDescribedBy(target);tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this));});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");// Remove 'remove' binding only on delegated targets
if(target[0]!==this.element[0]){this._off(target,"remove");}this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id];});}this.closing=true;this._trigger("close",event,{tooltip:tooltip});this.closing=false;},_tooltip:function _tooltip(element){var id="ui-tooltip-"+increments++,tooltip=$("<div>").attr({id:id,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));$("<div>").addClass("ui-tooltip-content").appendTo(tooltip);tooltip.appendTo(this.document[0].body);this.tooltips[id]=element;return tooltip;},_find:function _find(target){var id=target.data("ui-tooltip-id");return id?$("#"+id):$();},_removeTooltip:function _removeTooltip(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")];},_destroy:function _destroy(){var that=this;// close open tooltips
$.each(this.tooltips,function(id,element){// Delegate to close method to handle common cleanup
var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);// Remove immediately; destroying an open tooltip doesn't use the
// hide animation
$("#"+id).remove();// Restore the title
if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));element.removeData("ui-tooltip-title");}});}});})(jQuery);(function($,undefined){var dataSpace="ui-effects-";$.effects={effect:{}};/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",// plusequals test for += 100 -= 100
rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,// a set of RE's that can match strings and generate color tuples.
stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function parse(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function parse(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]];}},{// this regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function parse(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)];}},{// this regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function parse(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function parse(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]];}}],// jQuery.Color( )
color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha);},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,floor:true}},support=color.support={},// element for support tests
supportElem=jQuery("<p>")[0],// colors = jQuery.Color.names
colors,// local aliases of functions called often
each=jQuery.each;// determine rgba support immediately
supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;// define cache name and alpha properties
// for rgba and hsla spaces
each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1};});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return allowEmpty||!prop.def?null:prop.def;}// ~~ is an short way of doing floor for positive numbers
value=type.floor?~~value:parseFloat(value);// IE will pass in empty strings as value for alpha,
// which will hit this case
if(isNaN(value)){return prop.def;}if(type.mod){// we add mod before modding to make sure that negatives values
// get converted properly: -10 -> 350
return(value+type.mod)%type.mod;}// for now all property types without mod have min and max
return 0>value?0:type.max<value?type.max:value;}function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);// if this was an rgba parse the assignment might happen twice
// oh well....
inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;// exit each( stringParsers ) here because we matched
return false;}});// Found a stringParser that handled it
if(rgba.length){// if this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent);}return inst;}// named colors
return colors[string];}color.fn=jQuery.extend(color.prototype,{parse:function parse(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this;}if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined;}var inst=this,type=jQuery.type(red),rgba=this._rgba=[];// more than 1 argument specified - assume ( red, green, blue, alpha )
if(green!==undefined){red=[red,green,blue,alpha];type="array";}if(type==="string"){return this.parse(stringParse(red)||colors._default);}if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop);});return this;}if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice();}});}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){// if the cache doesn't exist, and we know how to convert
if(!inst[cache]&&space.to){// if the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if(key==="alpha"||red[key]==null){return;}inst[cache]=space.to(inst._rgba);}// this is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
inst[cache][prop.idx]=clamp(red[key],prop,true);});// everything defined but alpha?
if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){// use the default of 1
inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache]);}}});}return this;}},is:function is(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=isCache[prop.idx]===localCache[prop.idx];return same;}});}return same;});return same;},_space:function _space(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName);}});return used.pop();},transition:function transition(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};// if null, don't override start value
if(endValue===null){return;}// if null - use end
if(startValue===null){result[index]=endValue;}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod;}else if(startValue-endValue>type.mod/2){startValue-=type.mod;}}result[index]=clamp((endValue-startValue)*distance+startValue,prop);}});return this[spaceName](result);},blend:function blend(opaque){// if we are already opaque - return ourself
if(this._rgba[3]===1){return this;}var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v;}));},toRgbaString:function toRgbaString(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?i>2?1:0:v;});if(rgba[3]===1){rgba.pop();prefix="rgb(";}return prefix+rgba.join()+")";},toHslaString:function toHslaString(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0;}// catch 1 and 2
if(i&&i<3){v=Math.round(v*100)+"%";}return v;});if(hsla[3]===1){hsla.pop();prefix="hsl(";}return prefix+hsla.join()+")";},toHexString:function toHexString(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255));}return"#"+jQuery.map(rgba,function(v){// default to 0 when nulls exist
v=(v||0).toString(16);return v.length===1?"0"+v:v;}).join("");},toString:function toString(){return this._rgba[3]===0?"transparent":this.toRgbaString();}});color.fn.parse.prototype=color.fn;// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6;}if(h*2<1){return q;}if(h*3<2){return p+(q-p)*(2/3-h)*6;}return p;}spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]];}var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0;}else if(r===max){h=60*(g-b)/diff+360;}else if(g===max){h=60*(b-r)/diff+120;}else{h=60*(r-g)/diff+240;}// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
if(diff===0){s=0;}else if(l<=0.5){s=diff/add;}else{s=diff/(2-add);}return[Math.round(h)%360,s,l,a==null?1:a];};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]];}var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+1/3)*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-1/3)*255),a];};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;// makes rgba() and hsla()
color.fn[spaceName]=function(value){// generate a cache for this space if it doesn't exist
if(to&&!this[cache]){this[cache]=to(this._rgba);}if(value===undefined){return this[cache].slice();}var ret,type=jQuery.type(value),arr=type==="array"||type==="object"?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx];}local[prop.idx]=clamp(val,prop);});if(from){ret=color(from(local));ret[cache]=local;return ret;}else{return color(local);}};// makes red() green() blue() alpha() hue() saturation() lightness()
each(props,function(key,prop){// alpha is included in more than one space
if(color.fn[key]){return;}color.fn[key]=function(value){var vtype=jQuery.type(value),fn=key==="alpha"?this._hsla?"hsla":"rgba":spaceName,local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur;}if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value);}if(value==null&&prop.empty){return this;}if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);}}local[prop.idx]=value;return this[fn](local);};});});// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function set(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode;}catch(e){}}value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default");}value=value.toRgbaString();}try{elem.style[hook]=value;}catch(e){// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true;}jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));};});};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function expand(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value;});return expanded;}};// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors=jQuery.Color.names={// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"};})(jQuery);/******************************************************************************//****************************** CLASS ANIMATIONS ******************************//******************************************************************************/(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true;}};});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key];}}// support: Opera, IE <9
}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key];}}}return styles;}function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value;}}}}return diff;}// support: jQuery <1.8
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;// map the animated objects to store the original styles.
allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)};});// apply class change
applyClassChange=function applyClassChange(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action]);}});};applyClassChange();// map all animated objects again - calculate new styles and diff
allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this;});// apply original class
animated.attr("class",baseClass);// map all animated objects again - this time collecting a promise
allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function complete(){dfd.resolve(styleInfo);}});this.el.animate(this.diff,opts);return dfd.promise();});// once all animations have completed:
$.when.apply($,allAnimations.get()).done(function(){// set the final class
applyClassChange();// for each animated element,
// clear all css properties that were animated
$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"");});});// this is guarnteed to be there if you use jQuery.speed()
// it also handles dequeuing the next anim...
o.complete.call(animated[0]);});});};$.fn.extend({addClass:function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments);};}($.fn.addClass),removeClass:function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments);};}($.fn.removeClass),toggleClass:function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){// without speed parameter
return orig.apply(this,arguments);}else{return $.effects.animateClass.call(this,force?{add:classNames}:{remove:classNames},speed,easing,callback);}}else{// without force parameter
return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing);}};}($.fn.toggleClass),switchClass:function switchClass(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback);}});})();/******************************************************************************//*********************************** EFFECTS **********************************//******************************************************************************/(function(){$.extend($.effects,{version:"1.10.3",// Saves a set of properties in a data storage
save:function save(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},// Restores a set of previously saved properties from a data storage
restore:function restore(element,set){var val,i;for(i=0;i<set.length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);// support: jQuery 1.6.2
// http://bugs.jquery.com/ticket/9917
// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
// We can't differentiate between "" and 0 here, so we just assume
// empty string since it's likely to be a more common value...
if(val===undefined){val="";}element.css(set[i],val);}}},setMode:function setMode(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}return mode;},// Translates a [top,left] array into a baseline value
// this should be a little more flexible in the future to handle a string & hash
getBaseline:function getBaseline(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=0.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height;}switch(origin[1]){case"left":x=0;break;case"center":x=0.5;break;case"right":x=1;break;default:x=origin[1]/original.width;}return{x:x,y:y};},// Wraps the element around a wrapper that copies position properties
createWrapper:function createWrapper(element){// if the element is already wrapped, return it
if(element.parent().is(".ui-effects-wrapper")){return element.parent();}// wrap the element
var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),// Store the size in case width/height are defined in % - Fixes #5245
size={width:element.width(),height:element.height()},active=document.activeElement;// support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{active.id;}catch(e){active=document.body;}element.wrap(wrapper);// Fixes #7595 - Elements lose focus when wrapped.
if(element[0]===active||$.contains(element[0],active)){$(active).focus();}wrapper=element.parent();//Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element
// transfer positioning properties to the wrapper
if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}element.css(size);return wrapper.css(props).show();},removeWrapper:function removeWrapper(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);// Fixes #7595 - Elements lose focus when wrapped.
if(element[0]===active||$.contains(element[0],active)){$(active).focus();}}return element;},setTransition:function setTransition(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1];}});return value;}});// return an effect options object for the given parameters:
function _normalizeArguments(effect,options,speed,callback){// allow passing all options as the first parameter
if($.isPlainObject(effect)){options=effect;effect=effect.effect;}// convert to an object
effect={effect:effect};// catch (effect, null, ...)
if(options==null){options={};}// catch (effect, callback)
if($.isFunction(options)){callback=options;speed=null;options={};}// catch (effect, speed, ?)
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}// catch (effect, options, callback)
if($.isFunction(speed)){callback=speed;speed=null;}// add options to effect
if(options){$.extend(effect,options);}speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}function standardAnimationOption(option){// Valid standard speeds (nothing, number, named speed)
if(!option||typeof option==="number"||$.fx.speeds[option]){return true;}// Invalid strings - treat as "normal" speed
if(typeof option==="string"&&!$.effects.effect[option]){return true;}// Complete callback
if($.isFunction(option)){return true;}// Options hash (but not naming an effect)
if((typeof option==="undefined"?"undefined":_typeof(option))==="object"&&!option.effect){return true;}// Didn't match any standard API
return false;}$.fn.extend({effect:function effect()/* effect, options, speed, callback */{var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect];if($.fx.off||!effectMethod){// delegate to the original method (e.g., .show()) if possible
if(mode){return this[mode](args.duration,args.complete);}else{return this.each(function(){if(args.complete){args.complete.call(this);}});}}function run(next){var elem=$(this),complete=args.complete,mode=args.mode;function done(){if($.isFunction(complete)){complete.call(elem[0]);}if($.isFunction(next)){next();}}// If the element already has the correct final state, delegate to
// the core methods so the internal tracking of "olddisplay" works.
if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done();}else{effectMethod.call(elem[0],args,done);}}return queue===false?this.each(run):this.queue(queue||"fx",run);},show:function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args);}};}($.fn.show),hide:function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args);}};}($.fn.hide),toggle:function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args);}};}($.fn.toggle),// helper functions
cssUnit:function cssUnit(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit];}});return val;}});})();/******************************************************************************//*********************************** EASING ***********************************//******************************************************************************/(function(){// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function Sine(p){return 1-Math.cos(p*Math.PI/2);},Circ:function Circ(p){return 1-Math.sqrt(1-p*p);},Elastic:function Elastic(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);},Back:function Back(p){return p*p*(3*p-2);},Bounce:function Bounce(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2;};});})();})(jQuery);(function($,undefined){var rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/;$.effects.effect.blind=function(o,done){// Create element
var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),direction=o.direction||"up",vertical=rvertical.test(direction),ref=vertical?"height":"width",ref2=vertical?"top":"left",motion=rpositivemotion.test(direction),animation={},show=mode==="show",wrapper,distance,margin;// if already wrapped, the wrapper's properties are my property. #6245
if(el.parent().is(".ui-effects-wrapper")){$.effects.save(el.parent(),props);}else{$.effects.save(el,props);}el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=wrapper[ref]();margin=parseFloat(wrapper.css(ref2))||0;animation[ref]=show?distance:0;if(!motion){el.css(vertical?"bottom":"right",0).css(vertical?"top":"left","auto").css({position:"absolute"});animation[ref2]=show?margin:distance+margin;}// start at 0 if we are showing
if(show){wrapper.css(ref,0);if(!motion){wrapper.css(ref2,margin+distance);}}// Animate
wrapper.animate(animation,{duration:o.duration,easing:o.easing,queue:false,complete:function complete(){if(mode==="hide"){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.bounce=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],// defaults:
mode=$.effects.setMode(el,o.mode||"effect"),hide=mode==="hide",show=mode==="show",direction=o.direction||"up",distance=o.distance,times=o.times||5,// number of internal animations
anims=times*2+(show||hide?1:0),speed=o.duration/anims,easing=o.easing,// utility:
ref=direction==="up"||direction==="down"?"top":"left",motion=direction==="up"||direction==="left",i,upAnim,downAnim,// we will need to re-assemble the queue to stack our animations in place
queue=el.queue(),queuelen=queue.length;// Avoid touching opacity to prevent clearType and PNG issues in IE
if(show||hide){props.push("opacity");}$.effects.save(el,props);el.show();$.effects.createWrapper(el);// Create Wrapper
// default distance for the BIGGEST bounce is the outer Distance / 3
if(!distance){distance=el[ref==="top"?"outerHeight":"outerWidth"]()/3;}if(show){downAnim={opacity:1};downAnim[ref]=0;// if we are showing, force opacity 0 and set the initial position
// then do the "first" animation
el.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}// start at the smallest distance if we are hiding
if(hide){distance=distance/Math.pow(2,times-1);}downAnim={};downAnim[ref]=0;// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
for(i=0;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2;}// Last Bounce when Hiding
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing);}el.queue(function(){if(hide){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();});// inject all the animations we just queued to be first in line (after "inprogress")
if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}el.dequeue();};})(jQuery);(function($,undefined){$.effects.effect.clip=function(o,done){// Create element
var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"vertical",vert=direction==="vertical",size=vert?"height":"width",position=vert?"top":"left",animation={},wrapper,animate,distance;// Save & Show
$.effects.save(el,props);el.show();// Create Wrapper
wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});animate=el[0].tagName==="IMG"?wrapper:el;distance=animate[size]();// Shift
if(show){animate.css(size,0);animate.css(position,distance/2);}// Create Animation Object:
animation[size]=show?distance:0;animation[position]=show?0:distance/2;// Animate
animate.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function complete(){if(!show){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.drop=function(o,done){var el=$(this),props=["position","top","bottom","left","right","opacity","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"left",ref=direction==="up"||direction==="down"?"top":"left",motion=direction==="up"||direction==="left"?"pos":"neg",animation={opacity:show?1:0},distance;// Adjust
$.effects.save(el,props);el.show();$.effects.createWrapper(el);distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](true)/2;if(show){el.css("opacity",0).css(ref,motion==="pos"?-distance:distance);}// Animation
animation[ref]=(show?motion==="pos"?"+=":"-=":motion==="pos"?"-=":"+=")+distance;// Animate
el.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function complete(){if(mode==="hide"){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.explode=function(o,done){var rows=o.pieces?Math.round(Math.sqrt(o.pieces)):3,cells=rows,el=$(this),mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",// show and then visibility:hidden the element before calculating offset
offset=el.show().css("visibility","hidden").offset(),// width and height of a piece
width=Math.ceil(el.outerWidth()/cells),height=Math.ceil(el.outerHeight()/rows),pieces=[],// loop
i,j,left,top,mx,my;// children animate complete:
function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}// clone the element for each row and cell.
for(i=0;i<rows;i++){// ===>
top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){// |||
left=offset.left+j*width;mx=j-(cells-1)/2;// Create a clone of the now hidden main element that will be absolute positioned
// within a wrapper div off the -left and -top equal to size of our pieces
el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height})// select the wrapper - make it overflow: hidden and absolute positioned based on
// where the original was located +left and +top equal to the size of pieces
.parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},o.duration||500,o.easing,childComplete);}}function animComplete(){el.css({visibility:"visible"});$(pieces).remove();if(!show){el.hide();}done();}};})(jQuery);(function($,undefined){$.effects.effect.fade=function(o,done){var el=$(this),mode=$.effects.setMode(el,o.mode||"toggle");el.animate({opacity:mode},{queue:false,duration:o.duration,easing:o.easing,complete:done});};})(jQuery);(function($,undefined){$.effects.effect.fold=function(o,done){// Create element
var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",hide=mode==="hide",size=o.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!o.horizFirst,widthFirst=show!==horizFirst,ref=widthFirst?["width","height"]:["height","width"],duration=o.duration/2,wrapper,distance,animation1={},animation2={};$.effects.save(el,props);el.show();// Create Wrapper
wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1];}if(show){wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0});}// Animation
animation1[ref[0]]=show?distance[0]:size;animation2[ref[1]]=show?distance[1]:0;// Animate
wrapper.animate(animation1,duration,o.easing).animate(animation2,duration,o.easing,function(){if(hide){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();});};})(jQuery);(function($,undefined){$.effects.effect.highlight=function(o,done){var elem=$(this),props=["backgroundImage","backgroundColor","opacity"],mode=$.effects.setMode(elem,o.mode||"show"),animation={backgroundColor:elem.css("backgroundColor")};if(mode==="hide"){animation.opacity=0;}$.effects.save(elem,props);elem.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function complete(){if(mode==="hide"){elem.hide();}$.effects.restore(elem,props);done();}});};})(jQuery);(function($,undefined){$.effects.effect.pulsate=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"show"),show=mode==="show",hide=mode==="hide",showhide=show||mode==="hide",// showing or hiding leaves of the "last" animation
anims=(o.times||5)*2+(showhide?1:0),duration=o.duration/anims,animateTo=0,queue=elem.queue(),queuelen=queue.length,i;if(show||!elem.is(":visible")){elem.css("opacity",0).show();animateTo=1;}// anims - 1 opacity "toggles"
for(i=1;i<anims;i++){elem.animate({opacity:animateTo},duration,o.easing);animateTo=1-animateTo;}elem.animate({opacity:animateTo},duration,o.easing);elem.queue(function(){if(hide){elem.hide();}done();});// We just queued up "anims" animations, we need to put them next in the queue
if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}elem.dequeue();};})(jQuery);(function($,undefined){$.effects.effect.puff=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"hide"),hide=mode==="hide",percent=parseInt(o.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width(),outerHeight:elem.outerHeight(),outerWidth:elem.outerWidth()};$.extend(o,{effect:"scale",queue:false,fade:true,mode:mode,complete:done,percent:hide?percent:100,from:hide?original:{height:original.height*factor,width:original.width*factor,outerHeight:original.outerHeight*factor,outerWidth:original.outerWidth*factor}});elem.effect(o);};$.effects.effect.scale=function(o,done){// Create element
var el=$(this),options=$.extend(true,{},o),mode=$.effects.setMode(el,o.mode||"effect"),percent=parseInt(o.percent,10)||(parseInt(o.percent,10)===0?0:mode==="hide"?0:100),direction=o.direction||"both",origin=o.origin,original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()},factor={y:direction!=="horizontal"?percent/100:1,x:direction!=="vertical"?percent/100:1};// We are going to pass this effect to the size effect:
options.effect="size";options.queue=false;options.complete=done;// Set default origin and restore for show/hide
if(mode!=="effect"){options.origin=origin||["middle","center"];options.restore=true;}options.from=o.from||(mode==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:original);options.to={height:original.height*factor.y,width:original.width*factor.x,outerHeight:original.outerHeight*factor.y,outerWidth:original.outerWidth*factor.x};// Fade option to support puff
if(options.fade){if(mode==="show"){options.from.opacity=0;options.to.opacity=1;}if(mode==="hide"){options.from.opacity=1;options.to.opacity=0;}}// Animate
el.effect(options);};$.effects.effect.size=function(o,done){// Create element
var original,baseline,factor,el=$(this),props0=["position","top","bottom","left","right","width","height","overflow","opacity"],// Always restore
props1=["position","top","bottom","left","right","overflow","opacity"],// Copy for children
props2=["width","height","overflow"],cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],// Set options
mode=$.effects.setMode(el,o.mode||"effect"),restore=o.restore||mode!=="effect",scale=o.scale||"both",origin=o.origin||["middle","center"],position=el.css("position"),props=restore?props0:props1,zero={height:0,width:0,outerHeight:0,outerWidth:0};if(mode==="show"){el.show();}original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()};if(o.mode==="toggle"&&mode==="show"){el.from=o.to||zero;el.to=o.from||original;}else{el.from=o.from||(mode==="show"?zero:original);el.to=o.to||(mode==="hide"?zero:original);}// Set scaling factor
factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}};// Scale the css box
if(scale==="box"||scale==="both"){// Vertical props scaling
if(factor.from.y!==factor.to.y){props=props.concat(vProps);el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to);}// Horizontal props scaling
if(factor.from.x!==factor.to.x){props=props.concat(hProps);el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to);}}// Scale the content
if(scale==="content"||scale==="both"){// Vertical props scaling
if(factor.from.y!==factor.to.y){props=props.concat(cProps).concat(props2);el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to);}}$.effects.save(el,props);el.show();$.effects.createWrapper(el);el.css("overflow","hidden").css(el.from);// Adjust
if(origin){// Calculate baseline shifts
baseline=$.effects.getBaseline(origin,original);el.from.top=(original.outerHeight-el.outerHeight())*baseline.y;el.from.left=(original.outerWidth-el.outerWidth())*baseline.x;el.to.top=(original.outerHeight-el.to.outerHeight)*baseline.y;el.to.left=(original.outerWidth-el.to.outerWidth)*baseline.x;}el.css(el.from);// set top & left
// Animate
if(scale==="content"||scale==="both"){// Scale the children
// Add margins/font-size
vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);props2=props0.concat(vProps).concat(hProps);el.find("*[width]").each(function(){var child=$(this),c_original={height:child.height(),width:child.width(),outerHeight:child.outerHeight(),outerWidth:child.outerWidth()};if(restore){$.effects.save(child,props2);}child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x,outerHeight:c_original.outerHeight*factor.from.y,outerWidth:c_original.outerWidth*factor.from.x};child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x,outerHeight:c_original.height*factor.to.y,outerWidth:c_original.width*factor.to.x};// Vertical props scaling
if(factor.from.y!==factor.to.y){child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to);}// Horizontal props scaling
if(factor.from.x!==factor.to.x){child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to);}// Animate children
child.css(child.from);child.animate(child.to,o.duration,o.easing,function(){// Restore children
if(restore){$.effects.restore(child,props2);}});});}// Animate
el.animate(el.to,{queue:false,duration:o.duration,easing:o.easing,complete:function complete(){if(el.to.opacity===0){el.css("opacity",el.from.opacity);}if(mode==="hide"){el.hide();}$.effects.restore(el,props);if(!restore){// we need to calculate our new positioning based on the scaling
if(position==="static"){el.css({position:"relative",top:el.to.top,left:el.to.left});}else{$.each(["top","left"],function(idx,pos){el.css(pos,function(_,str){var val=parseInt(str,10),toRef=idx?el.to.left:el.to.top;// if original was "auto", recalculate the new value from wrapper
if(str==="auto"){return toRef+"px";}return val+toRef+"px";});});}}$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.shake=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),direction=o.direction||"left",distance=o.distance||20,times=o.times||3,anims=times*2+1,speed=Math.round(o.duration/anims),ref=direction==="up"||direction==="down"?"top":"left",positiveMotion=direction==="up"||direction==="left",animation={},animation1={},animation2={},i,// we will need to re-assemble the queue to stack our animations in place
queue=el.queue(),queuelen=queue.length;$.effects.save(el,props);el.show();$.effects.createWrapper(el);// Animation
animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;// Animate
el.animate(animation,speed,o.easing);// Shakes
for(i=1;i<times;i++){el.animate(animation1,speed,o.easing).animate(animation2,speed,o.easing);}el.animate(animation1,speed,o.easing).animate(animation,speed/2,o.easing).queue(function(){if(mode==="hide"){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();});// inject all the animations we just queued to be first in line (after "inprogress")
if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}el.dequeue();};})(jQuery);(function($,undefined){$.effects.effect.slide=function(o,done){// Create element
var el=$(this),props=["position","top","bottom","left","right","width","height"],mode=$.effects.setMode(el,o.mode||"show"),show=mode==="show",direction=o.direction||"left",ref=direction==="up"||direction==="down"?"top":"left",positiveMotion=direction==="up"||direction==="left",distance,animation={};// Adjust
$.effects.save(el,props);el.show();distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](true);$.effects.createWrapper(el).css({overflow:"hidden"});if(show){el.css(ref,positiveMotion?isNaN(distance)?"-"+distance:-distance:distance);}// Animation
animation[ref]=(show?positiveMotion?"+=":"-=":positiveMotion?"-=":"+=")+distance;// Animate
el.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function complete(){if(mode==="hide"){el.hide();}$.effects.restore(el,props);$.effects.removeWrapper(el);done();}});};})(jQuery);(function($,undefined){$.effects.effect.transfer=function(o,done){var elem=$(this),target=$(o.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(o.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:elem.innerHeight(),width:elem.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,o.duration,o.easing,function(){transfer.remove();done();});};})(jQuery);/*
 * SceneJS WebGL Scene Graph Library for JavaScript
 * http://scenejs.org/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://scenejs.org/license
 * Copyright 2010, Lindsay Kay
 *
 *
 */// Only define RequireJS if not already present
if(undefined===_require){/*
 RequireJS 2.1.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */var requirejs,_require,define;(function(ba){function J(b){return"[object Function]"===N.call(b);}function K(b){return"[object Array]"===N.call(b);}function z(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1){}}}function O(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1){}}}function t(b,c){return ha.call(b,c);}function m(b,c){return t(b,c)&&b[c];}function H(b,c){for(var d in b){if(t(b,d)&&c(b[d],d))break;}}function S(b,c,d,m){c&&H(c,function(c,l){if(d||!t(b,l))m&&"string"!==typeof c?(b[l]||(b[l]={}),S(b[l],c,d,m)):b[l]=c;});return b;}function v(b,c){return function(){return c.apply(b,arguments);};}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;z(b.split("."),function(b){c=c[b];});return c;}function B(b,c,d,m){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=m;d&&(c.originalError=d);return c;}function ia(b){function c(a,f,C){var e,n,b,c,d,T,k,g=f&&f.split("/");e=g;var l=j.map,h=l&&l["*"];if(a&&"."===a.charAt(0))if(f){e=m(j.pkgs,f)?g=[f]:g.slice(0,g.length-1);f=a=e.concat(a.split("/"));for(e=0;f[e];e+=1){if(n=f[e],"."===n)f.splice(e,1),e-=1;else if(".."===n)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);}e=m(j.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f);}else 0===a.indexOf("./")&&(a=a.substring(2));if(C&&l&&(g||h)){f=a.split("/");for(e=f.length;0<e;e-=1){b=f.slice(0,e).join("/");if(g)for(n=g.length;0<n;n-=1){if(C=m(l,g.slice(0,n).join("/")))if(C=m(C,b)){c=C;d=e;break;}}if(c)break;!T&&h&&m(h,b)&&(T=m(h,b),k=e);}!c&&T&&(c=T,d=k);c&&(f.splice(0,d,c),a=f.join("/"));}return a;}function d(a){A&&z(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===k.contextName)return f.parentNode.removeChild(f),!0;});}function p(a){var f=m(j.paths,a);if(f&&K(f)&&1<f.length)return d(a),f.shift(),k.require.undef(a),k.require([a]),!0;}function g(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a];}function l(a,f,b,e){var n,D,i=null,d=f?f.name:null,l=a,h=!0,j="";a||(h=!1,a="_@r"+(N+=1));a=g(a);i=a[0];a=a[1];i&&(i=c(i,d,e),D=m(r,i));a&&(i?j=D&&D.normalize?D.normalize(a,function(a){return c(a,d,e);}):c(a,d,e):(j=c(a,d,e),a=g(j),i=a[0],j=a[1],b=!0,n=k.nameToUrl(j)));b=i&&!D&&!b?"_unnormalized"+(O+=1):"";return{prefix:i,name:j,parentMap:f,unnormalized:!!b,url:n,originalName:l,isDefine:h,id:(i?i+"!"+j:j)+b};}function s(a){var f=a.id,b=m(q,f);b||(b=q[f]=new k.Module(a));return b;}function u(a,f,b){var e=a.id,n=m(q,e);if(t(r,e)&&(!n||n.defineEmitComplete))"defined"===f&&b(r[e]);else if(n=s(a),n.error&&"error"===f)b(n.error);else n.on(f,b);}function w(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(z(b,function(f){if(f=m(q,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a));}),!e)h.onError(a);}function x(){U.length&&(ja.apply(I,[I.length-1,0].concat(U)),U=[]);}function y(a){delete q[a];delete W[a];}function G(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,z(a.depMaps,function(e,c){var d=e.id,g=m(q,d);g&&!a.depMatched[c]&&!b[d]&&(m(f,d)?(a.defineDep(c,r[d]),a.check()):G(g,f,b));}),b[e]=!0);}function E(){var a,f,b,e,n=(b=1E3*j.waitSeconds)&&k.startTime+b<new Date().getTime(),c=[],i=[],g=!1,l=!0;if(!X){X=!0;H(W,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||i.push(b),!b.error))if(!b.inited&&n)p(f)?g=e=!0:(c.push(f),d(f));else if(!b.inited&&b.fetched&&a.isDefine&&(g=!0,!a.prefix))return l=!1;});if(n&&c.length)return b=B("timeout","Load timeout for modules: "+c,null,c),b.contextName=k.contextName,w(b);l&&z(i,function(a){G(a,{},{});});if((!n||e)&&g)if((A||ea)&&!Y)Y=setTimeout(function(){Y=0;E();},50);X=!1;}}function F(a){t(r,a[0])||s(l(a[0],null,!0)).init(a[1],a[2]);}function L(a){var a=a.currentTarget||a.srcElement,b=k.onScriptLoad;a.detachEvent&&!Z?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=k.onScriptError;(!a.detachEvent||Z)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")};}function M(){var a;for(x();I.length;){a=I.shift();if(null===a[0])return w(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));F(a);}}var X,$,k,P,Y,j={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},q={},W={},aa={},I=[],r={},V={},N=1,O=1;P={require:function require(a){return a.require?a.require:a.require=k.makeRequire(a.map);},exports:function exports(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=r[a.map.id]={};},module:function module(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function config(){var b=m(j.pkgs,a.map.id);return(b?m(j.config,a.map.id+"/"+b.main):m(j.config,a.map.id))||{};},exports:r[a.map.id]};}};$=function $(a){this.events=m(aa,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0;};$.prototype={init:function init(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=v(this,function(a){this.emit("error",a);}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check();}},defineDep:function defineDep(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b);},fetch:function fetch(){if(!this.fetched){this.fetched=!0;k.startTime=new Date().getTime();var a=this.map;if(this.shim)k.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],v(this,function(){return a.prefix?this.callPlugin():this.load();}));else return a.prefix?this.callPlugin():this.load();}},load:function load(){var a=this.map.url;V[a]||(V[a]=!0,k.load(this.map.id,a));},check:function check(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var e=this.exports,n=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(J(n)){if(this.events.error&&this.map.isDefine||h.onError!==ca)try{e=k.execCb(c,n,b,e);}catch(d){a=d;}else e=k.execCb(c,n,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a);}else e=n;this.exports=e;if(this.map.isDefine&&!this.ignore&&(r[c]=e,h.onResourceLoad))h.onResourceLoad(k,this.map,this.depMaps);y(c);this.defined=!0;}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0);}}}else this.fetch();}},callPlugin:function callPlugin(){var a=this.map,b=a.id,d=l(a.prefix);this.depMaps.push(d);u(d,"defined",v(this,function(e){var n,d;d=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,C=k.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,g,!0);})||""),e=l(a.prefix+"!"+d,this.map.parentMap),u(e,"defined",v(this,function(a){this.init([],function(){return a;},null,{enabled:!0,ignore:!0});})),d=m(q,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",v(this,function(a){this.emit("error",a);}));d.enable();}}else n=v(this,function(a){this.init([],function(){return a;},null,{enabled:!0});}),n.error=v(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];H(q,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id);});w(a);}),n.fromText=v(this,function(e,c){var d=a.name,g=l(d),i=Q;c&&(e=c);i&&(Q=!1);s(g);t(j.config,b)&&(j.config[d]=j.config[b]);try{h.exec(e);}catch(D){return w(B("fromtexteval","fromText eval for "+b+" failed: "+D,D,[b]));}i&&(Q=!0);this.depMaps.push(g);k.completeLoad(d);C([d],n);}),e.load(a.name,C,n,j);}));k.enable(d,this);this.pluginMaps[d.id]=d;},enable:function enable(){W[this.map.id]=this;this.enabling=this.enabled=!0;z(this.depMaps,v(this,function(a,b){var c,e;if("string"===typeof a){a=l(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(P,a.id)){this.depExports[b]=c(this);return;}this.depCount+=1;u(a,"defined",v(this,function(a){this.defineDep(b,a);this.check();}));this.errback&&u(a,"error",v(this,this.errback));}c=a.id;e=q[c];!t(P,c)&&e&&!e.enabled&&k.enable(a,this);}));H(this.pluginMaps,v(this,function(a){var b=m(q,a.id);b&&!b.enabled&&k.enable(a,this);}));this.enabling=!1;this.check();},on:function on(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b);},emit:function emit(a,b){z(this.events[a],function(a){a(b);});"error"===a&&delete this.events[a];}};k={config:j,contextName:b,registry:q,defined:r,urlFetched:V,defQueue:I,Module:$,makeModuleMap:l,nextTick:h.nextTick,onError:w,configure:function configure(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.pkgs,c=j.shim,e={paths:!0,config:!0,map:!0};H(a,function(a,b){e[b]?"map"===b?(j.map||(j.map={}),S(j[b],a,!0,!0)):S(j[b],a,!0):j[b]=a;});a.shim&&(H(a.shim,function(a,b){K(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=k.makeShimExports(a);c[b]=a;}),j.shim=c);a.packages&&(z(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ka,"").replace(fa,"")};}),j.pkgs=b);H(q,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=l(b));});if(a.deps||a.callback)k.require(a.deps||[],a.callback);},makeShimExports:function makeShimExports(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports);};},makeRequire:function makeRequire(a,f){function d(e,c,g){var i,j;f.enableBuildCallback&&c&&J(c)&&(c.__requireJsBuild=!0);if("string"===typeof e){if(J(c))return w(B("requireargs","Invalid require call"),g);if(a&&t(P,e))return P[e](q[a.id]);if(h.get)return h.get(k,e,a,d);i=l(e,a,!1,!0);i=i.id;return!t(r,i)?w(B("notloaded",'Module name "'+i+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[i];}M();k.nextTick(function(){M();j=s(l(null,a));j.skipMap=f.skipMap;j.init(e,c,g,{enabled:!0});E();});return d;}f=f||{};S(d,{isBrowser:A,toUrl:function toUrl(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==f&&(!("."===g||".."===g)||1<f))d=b.substring(f,b.length),b=b.substring(0,f);return k.nameToUrl(c(b,a&&a.id,!0),d,!0);},defined:function defined(b){return t(r,l(b,a,!1,!0).id);},specified:function specified(b){b=l(b,a,!1,!0).id;return t(r,b)||t(q,b);}});a||(d.undef=function(b){x();var c=l(b,a,!0),d=m(q,b);delete r[b];delete V[c.url];delete aa[b];d&&(d.events.defined&&(aa[b]=d.events),y(b));});return d;},enable:function enable(a){m(q,a.id)&&s(a).enable();},completeLoad:function completeLoad(a){var b,c,e=m(j.shim,a)||{},d=e.exports;for(x();I.length;){c=I.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0;}else c[0]===a&&(b=!0);F(c);}c=m(q,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!d||!da(d)))return p(a)?void 0:w(B("nodefine","No define call for "+a,null,[a]));F([a,e.deps||[],e.exportsFn]);}E();},nameToUrl:function nameToUrl(a,b,c){var d,g,l,i,k,p;if(h.jsExtRegExp.test(a))i=a+(b||"");else{d=j.paths;g=j.pkgs;i=a.split("/");for(k=i.length;0<k;k-=1){if(p=i.slice(0,k).join("/"),l=m(g,p),p=m(d,p)){K(p)&&(p=p[0]);i.splice(0,k,p);break;}else if(l){a=a===l.name?l.location+"/"+l.main:l.location;i.splice(0,k,a);break;}}i=i.join("/");i+=b||(/\?/.test(i)||c?"":".js");i=("/"===i.charAt(0)||i.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+i;}return j.urlArgs?i+((-1===i.indexOf("?")?"?":"&")+j.urlArgs):i;},load:function load(a,b){h.load(k,a,b);},execCb:function execCb(a,b,c,d){return b.apply(d,c);},onScriptLoad:function onScriptLoad(a){if("load"===a.type||la.test((a.currentTarget||a.srcElement).readyState))R=null,a=L(a),k.completeLoad(a.id);},onScriptError:function onScriptError(a){var b=L(a);if(!p(b.id))return w(B("scripterror","Script error for: "+b.id,a,[b.id]));}};k.require=k.makeRequire();return k;}var h,x,y,E,L,F,R,M,s,ga,ma=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,na=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,fa=/\.js$/,ka=/^\.\//;x=Object.prototype;var N=x.toString,ha=x.hasOwnProperty,ja=Array.prototype.splice,A=!!("undefined"!==typeof window&&navigator&&window.document),ea=!A&&"undefined"!==typeof importScripts,la=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Z="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),G={},u={},U=[],Q=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(J(requirejs))return;u=requirejs;requirejs=void 0;}"undefined"!==typeof _require&&!J(_require)&&(u=_require,_require=void 0);h=requirejs=function requirejs(b,c,d,p){var g,l="_";!K(b)&&"string"!==typeof b&&(g=b,K(c)?(b=c,c=d,d=p):b=[]);g&&g.context&&(l=g.context);(p=m(G,l))||(p=G[l]=h.s.newContext(l));g&&p.configure(g);return p.require(b,c,d);};h.config=function(b){return h(b);};h.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4);}:function(b){b();};_require||(_require=h);h.version="2.1.6";h.jsExtRegExp=/^\/|:|\?|\.js$/;h.isBrowser=A;x=h.s={contexts:G,newContext:ia};h({});z(["toUrl","undef","defined","specified"],function(b){h[b]=function(){var c=G._;return c.require[b].apply(c,arguments);};});if(A&&(y=x.head=document.getElementsByTagName("head")[0],E=document.getElementsByTagName("base")[0]))y=x.head=E.parentNode;h.onError=ca;h.load=function(b,c,d){var h=b&&b.config||{},g;if(A)return g=h.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),g.type=h.scriptType||"text/javascript",g.charset="utf-8",g.async=!0,g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Z?(Q=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1)),g.src=d,M=g,E?y.insertBefore(g,E):y.appendChild(g),M=null,g;if(ea)try{importScripts(d),b.completeLoad(c);}catch(l){b.onError(B("importscripts","importScripts failed for "+c+" at "+d,l,[c]));}};A&&O(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(L=b.getAttribute("data-main"))return s=L,u.baseUrl||(F=s.split("/"),s=F.pop(),ga=F.length?F.join("/")+"/":"./",u.baseUrl=ga),s=s.replace(fa,""),h.jsExtRegExp.test(s)&&(s=L),u.deps=u.deps?u.deps.concat(s):[s],!0;});define=function define(b,c,d){var h,g;"string"!==typeof b&&(d=c,c=b,b=null);K(c)||(d=c,c=null);!c&&J(d)&&(c=[],d.length&&(d.toString().replace(ma,"").replace(na,function(b,d){c.push(d);}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(Q){if(!(h=M))R&&"interactive"===R.readyState||O(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return R=b;}),h=R;h&&(b||(b=h.getAttribute("data-requiremodule")),g=G[h.getAttribute("data-requirecontext")]);}(g?g.defQueue:U).push([b,c,d]);};define.amd={jQuery:!0};h.exec=function(b){return eval(b);};h(u);}})(undefined);}WebGLDebugUtils=function(){/**
 * Wrapped logging function.
 * @param {string} msg Message to log.
 */var log=function log(msg){if(window.console&&window.console.log){window.console.log(msg);}};/**
 * Which arguements are enums.
 * @type {!Object.<number, string>}
 */var glValidEnumContexts={// Generic setters and getters
'enable':{0:true},'disable':{0:true},'getParameter':{0:true},// Rendering
'drawArrays':{0:true},'drawElements':{0:true,2:true},// Shaders
'createShader':{0:true},'getShaderParameter':{1:true},'getProgramParameter':{1:true},// Vertex attributes
'getVertexAttrib':{1:true},'vertexAttribPointer':{2:true},// Textures
'bindTexture':{0:true},'activeTexture':{0:true},'getTexParameter':{0:true,1:true},'texParameterf':{0:true,1:true},'texParameteri':{0:true,1:true,2:true},'texImage2D':{0:true,2:true,6:true,7:true},'texSubImage2D':{0:true,6:true,7:true},'copyTexImage2D':{0:true,2:true},'copyTexSubImage2D':{0:true},'generateMipmap':{0:true},// Buffer objects
'bindBuffer':{0:true},'bufferData':{0:true,2:true},'bufferSubData':{0:true},'getBufferParameter':{0:true,1:true},// Renderbuffers and framebuffers
'pixelStorei':{0:true,1:true},'readPixels':{4:true,5:true},'bindRenderbuffer':{0:true},'bindFramebuffer':{0:true},'checkFramebufferStatus':{0:true},'framebufferRenderbuffer':{0:true,1:true,2:true},'framebufferTexture2D':{0:true,1:true,2:true},'getFramebufferAttachmentParameter':{0:true,1:true,2:true},'getRenderbufferParameter':{0:true,1:true},'renderbufferStorage':{0:true,1:true},// Frame buffer operations (clear, blend, depth test, stencil)
'clear':{0:true},'depthFunc':{0:true},'blendFunc':{0:true,1:true},'blendFuncSeparate':{0:true,1:true,2:true,3:true},'blendEquation':{0:true},'blendEquationSeparate':{0:true,1:true},'stencilFunc':{0:true},'stencilFuncSeparate':{0:true,1:true},'stencilMaskSeparate':{0:true},'stencilOp':{0:true,1:true,2:true},'stencilOpSeparate':{0:true,1:true,2:true,3:true},// Culling
'cullFace':{0:true},'frontFace':{0:true}};/**
 * Map of numbers to names.
 * @type {Object}
 */var glEnums=null;/**
 * Initializes this module. Safe to call more than once.
 * @param {!WebGLRenderingContext} ctx A WebGL context. If
 *    you have more than one context it doesn't matter which one
 *    you pass in, it is only used to pull out constants.
 */function init(ctx){if(glEnums==null){glEnums={};for(var propertyName in ctx){if(typeof ctx[propertyName]=='number'){glEnums[ctx[propertyName]]=propertyName;}}}}/**
 * Checks the utils have been initialized.
 */function checkInit(){if(glEnums==null){throw'WebGLDebugUtils.init(ctx) not called';}}/**
 * Returns true or false if value matches any WebGL enum
 * @param {*} value Value to check if it might be an enum.
 * @return {boolean} True if value matches one of the WebGL defined enums
 */function mightBeEnum(value){checkInit();return glEnums[value]!==undefined;}/**
 * Gets an string version of an WebGL enum.
 *
 * Example:
 *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
 *
 * @param {number} value Value to return an enum for
 * @return {string} The string version of the enum.
 */function glEnumToString(value){checkInit();var name=glEnums[value];return name!==undefined?name:"*UNKNOWN WebGL ENUM (0x"+value.toString(16)+")";}/**
 * Returns the string version of a WebGL argument.
 * Attempts to convert enum arguments to strings.
 * @param {string} functionName the name of the WebGL function.
 * @param {number} argumentIndx the index of the argument.
 * @param {*} value The value of the argument.
 * @return {string} The value as a string.
 */function glFunctionArgToString(functionName,argumentIndex,value){var funcInfo=glValidEnumContexts[functionName];if(funcInfo!==undefined){if(funcInfo[argumentIndex]){return glEnumToString(value);}}if(value===null){return"null";}else if(value===undefined){return"undefined";}else{return value.toString();}}/**
 * Converts the arguments of a WebGL function to a string.
 * Attempts to convert enum arguments to strings.
 *
 * @param {string} functionName the name of the WebGL function.
 * @param {number} args The arguments.
 * @return {string} The arguments as a string.
 */function glFunctionArgsToString(functionName,args){// apparently we can't do args.join(",");
var argStr="";for(var ii=0;ii<args.length;++ii){argStr+=(ii==0?'':', ')+glFunctionArgToString(functionName,ii,args[ii]);}return argStr;};function makePropertyWrapper(wrapper,original,propertyName){//log("wrap prop: " + propertyName);
wrapper.__defineGetter__(propertyName,function(){return original[propertyName];});// TODO(gmane): this needs to handle properties that take more than
// one value?
wrapper.__defineSetter__(propertyName,function(value){//log("set: " + propertyName);
original[propertyName]=value;});}// Makes a function that calls a function on another object.
function makeFunctionWrapper(original,functionName){//log("wrap fn: " + functionName);
var f=original[functionName];return function(){//log("call: " + functionName);
var result=f.apply(original,arguments);return result;};}/**
 * Given a WebGL context returns a wrapped context that calls
 * gl.getError after every command and calls a function if the
 * result is not gl.NO_ERROR.
 *
 * @param {!WebGLRenderingContext} ctx The webgl context to
 *        wrap.
 * @param {!function(err, funcName, args): void} opt_onErrorFunc
 *        The function to call when gl.getError returns an
 *        error. If not specified the default function calls
 *        console.log with a message.
 * @param {!function(funcName, args): void} opt_onFunc The
 *        function to call when each webgl function is called.
 *        You can use this to log all calls for example.
 */function makeDebugContext(ctx,opt_onErrorFunc,opt_onFunc){init(ctx);opt_onErrorFunc=opt_onErrorFunc||function(err,functionName,args){// apparently we can't do args.join(",");
var argStr="";for(var ii=0;ii<args.length;++ii){argStr+=(ii==0?'':', ')+glFunctionArgToString(functionName,ii,args[ii]);}log("WebGL error "+glEnumToString(err)+" in "+functionName+"("+argStr+")");};// Holds booleans for each GL error so after we get the error ourselves
// we can still return it to the client app.
var glErrorShadow={};// Makes a function that calls a WebGL function and then calls getError.
function makeErrorWrapper(ctx,functionName){return function(){if(opt_onFunc){opt_onFunc(functionName,arguments);}var result=ctx[functionName].apply(ctx,arguments);var err=ctx.getError();if(err!=0){glErrorShadow[err]=true;opt_onErrorFunc(err,functionName,arguments);}return result;};}// Make a an object that has a copy of every property of the WebGL context
// but wraps all functions.
var wrapper={};for(var propertyName in ctx){if(typeof ctx[propertyName]=='function'){wrapper[propertyName]=makeErrorWrapper(ctx,propertyName);}else{makePropertyWrapper(wrapper,ctx,propertyName);}}// Override the getError function with one that returns our saved results.
wrapper.getError=function(){for(var err in glErrorShadow){if(glErrorShadow.hasOwnProperty(err)){if(glErrorShadow[err]){glErrorShadow[err]=false;return err;}}}return ctx.NO_ERROR;};return wrapper;}function resetToInitialState(ctx){var numAttribs=ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS);var tmp=ctx.createBuffer();ctx.bindBuffer(ctx.ARRAY_BUFFER,tmp);for(var ii=0;ii<numAttribs;++ii){ctx.disableVertexAttribArray(ii);ctx.vertexAttribPointer(ii,4,ctx.FLOAT,false,0,0);ctx.vertexAttrib1f(ii,0);}ctx.deleteBuffer(tmp);var numTextureUnits=ctx.getParameter(ctx.MAX_TEXTURE_IMAGE_UNITS);for(var ii=0;ii<numTextureUnits;++ii){ctx.activeTexture(ctx.TEXTURE0+ii);ctx.bindTexture(ctx.TEXTURE_CUBE_MAP,null);ctx.bindTexture(ctx.TEXTURE_2D,null);}ctx.activeTexture(ctx.TEXTURE0);ctx.useProgram(null);ctx.bindBuffer(ctx.ARRAY_BUFFER,null);ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER,null);ctx.bindFramebuffer(ctx.FRAMEBUFFER,null);ctx.bindRenderbuffer(ctx.RENDERBUFFER,null);ctx.disable(ctx.BLEND);ctx.disable(ctx.CULL_FACE);ctx.disable(ctx.DEPTH_TEST);ctx.disable(ctx.DITHER);ctx.disable(ctx.SCISSOR_TEST);ctx.blendColor(0,0,0,0);ctx.blendEquation(ctx.FUNC_ADD);ctx.blendFunc(ctx.ONE,ctx.ZERO);ctx.clearColor(0,0,0,0);ctx.clearDepth(1);ctx.clearStencil(-1);ctx.colorMask(true,true,true,true);ctx.cullFace(ctx.BACK);ctx.depthFunc(ctx.LESS);ctx.depthMask(true);ctx.depthRange(0,1);ctx.frontFace(ctx.CCW);ctx.hint(ctx.GENERATE_MIPMAP_HINT,ctx.DONT_CARE);ctx.lineWidth(1);ctx.pixelStorei(ctx.PACK_ALIGNMENT,4);ctx.pixelStorei(ctx.UNPACK_ALIGNMENT,4);ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL,false);ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);// TODO: Delete this IF.
if(ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL){ctx.pixelStorei(ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL,ctx.BROWSER_DEFAULT_WEBGL);}ctx.polygonOffset(0,0);ctx.sampleCoverage(1,false);ctx.scissor(0,0,ctx.canvas.width,ctx.canvas.height);ctx.stencilFunc(ctx.ALWAYS,0,0xFFFFFFFF);ctx.stencilMask(0xFFFFFFFF);ctx.stencilOp(ctx.KEEP,ctx.KEEP,ctx.KEEP);ctx.viewport(0,0,ctx.canvas.width,ctx.canvas.height);ctx.clear(ctx.COLOR_BUFFER_BIT|ctx.DEPTH_BUFFER_BIT|ctx.STENCIL_BUFFER_BIT);// TODO: This should NOT be needed but Firefox fails with 'hint'
while(ctx.getError()){}}function makeLostContextSimulatingCanvas(canvas){var unwrappedContext_;var wrappedContext_;var onLost_=[];var onRestored_=[];var wrappedContext_={};var contextId_=1;var contextLost_=false;var resourceId_=0;var resourceDb_=[];var numCallsToLoseContext_=0;var numCalls_=0;var canRestore_=false;var restoreTimeout_=0;// Holds booleans for each GL error so can simulate errors.
var glErrorShadow_={};canvas.getContext=function(f){return function(){var ctx=f.apply(canvas,arguments);// Did we get a context and is it a WebGL context?
if(ctx instanceof WebGLRenderingContext){if(ctx!=unwrappedContext_){if(unwrappedContext_){throw"got different context";}unwrappedContext_=ctx;wrappedContext_=makeLostContextSimulatingContext(unwrappedContext_);}return wrappedContext_;}return ctx;};}(canvas.getContext);function wrapEvent(listener){if(typeof listener=="function"){return listener;}else{return function(info){listener.handleEvent(info);};}}var addOnContextLostListener=function addOnContextLostListener(listener){onLost_.push(wrapEvent(listener));};var addOnContextRestoredListener=function addOnContextRestoredListener(listener){onRestored_.push(wrapEvent(listener));};function wrapAddEventListener(canvas){var f=canvas.addEventListener;canvas.addEventListener=function(type,listener,bubble){switch(type){case'webglcontextlost':addOnContextLostListener(listener);break;case'webglcontextrestored':addOnContextRestoredListener(listener);break;default:f.apply(canvas,arguments);}};}wrapAddEventListener(canvas);canvas.loseContext=function(){if(!contextLost_){contextLost_=true;numCallsToLoseContext_=0;++contextId_;while(unwrappedContext_.getError()){}clearErrors();glErrorShadow_[unwrappedContext_.CONTEXT_LOST_WEBGL]=true;var event=makeWebGLContextEvent("context lost");var callbacks=onLost_.slice();setTimeout(function(){//log("numCallbacks:" + callbacks.length);
for(var ii=0;ii<callbacks.length;++ii){//log("calling callback:" + ii);
callbacks[ii](event);}if(restoreTimeout_>=0){setTimeout(function(){canvas.restoreContext();},restoreTimeout_);}},0);}};canvas.restoreContext=function(){if(contextLost_){if(onRestored_.length){setTimeout(function(){if(!canRestore_){throw"can not restore. webglcontestlost listener did not call event.preventDefault";}freeResources();resetToInitialState(unwrappedContext_);contextLost_=false;numCalls_=0;canRestore_=false;var callbacks=onRestored_.slice();var event=makeWebGLContextEvent("context restored");for(var ii=0;ii<callbacks.length;++ii){callbacks[ii](event);}},0);}}};canvas.loseContextInNCalls=function(numCalls){if(contextLost_){throw"You can not ask a lost contet to be lost";}numCallsToLoseContext_=numCalls_+numCalls;};canvas.getNumCalls=function(){return numCalls_;};canvas.setRestoreTimeout=function(timeout){restoreTimeout_=timeout;};function isWebGLObject(obj){//return false;
return obj instanceof WebGLBuffer||obj instanceof WebGLFramebuffer||obj instanceof WebGLProgram||obj instanceof WebGLRenderbuffer||obj instanceof WebGLShader||obj instanceof WebGLTexture;}function checkResources(args){for(var ii=0;ii<args.length;++ii){var arg=args[ii];if(isWebGLObject(arg)){return arg.__webglDebugContextLostId__==contextId_;}}return true;}function clearErrors(){var k=Object.keys(glErrorShadow_);for(var ii=0;ii<k.length;++ii){delete glErrorShadow_[k];}}function loseContextIfTime(){++numCalls_;if(!contextLost_){if(numCallsToLoseContext_==numCalls_){canvas.loseContext();}}}// Makes a function that simulates WebGL when out of context.
function makeLostContextFunctionWrapper(ctx,functionName){var f=ctx[functionName];return function(){// log("calling:" + functionName);
// Only call the functions if the context is not lost.
loseContextIfTime();if(!contextLost_){//if (!checkResources(arguments)) {
//  glErrorShadow_[wrappedContext_.INVALID_OPERATION] = true;
//  return;
//}
var result=f.apply(ctx,arguments);return result;}};}function freeResources(){for(var ii=0;ii<resourceDb_.length;++ii){var resource=resourceDb_[ii];if(resource instanceof WebGLBuffer){unwrappedContext_.deleteBuffer(resource);}else if(resource instanceof WebGLFramebuffer){unwrappedContext_.deleteFramebuffer(resource);}else if(resource instanceof WebGLProgram){unwrappedContext_.deleteProgram(resource);}else if(resource instanceof WebGLRenderbuffer){unwrappedContext_.deleteRenderbuffer(resource);}else if(resource instanceof WebGLShader){unwrappedContext_.deleteShader(resource);}else if(resource instanceof WebGLTexture){unwrappedContext_.deleteTexture(resource);}}}function makeWebGLContextEvent(statusMessage){return{statusMessage:statusMessage,preventDefault:function preventDefault(){canRestore_=true;}};}return canvas;function makeLostContextSimulatingContext(ctx){// copy all functions and properties to wrapper
for(var propertyName in ctx){if(typeof ctx[propertyName]=='function'){wrappedContext_[propertyName]=makeLostContextFunctionWrapper(ctx,propertyName);}else{makePropertyWrapper(wrappedContext_,ctx,propertyName);}}// Wrap a few functions specially.
wrappedContext_.getError=function(){loseContextIfTime();if(!contextLost_){var err;while(err=unwrappedContext_.getError()){glErrorShadow_[err]=true;}}for(var err in glErrorShadow_){if(glErrorShadow_[err]){delete glErrorShadow_[err];return err;}}return wrappedContext_.NO_ERROR;};var creationFunctions=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"];for(var ii=0;ii<creationFunctions.length;++ii){var functionName=creationFunctions[ii];wrappedContext_[functionName]=function(f){return function(){loseContextIfTime();if(contextLost_){return null;}var obj=f.apply(ctx,arguments);obj.__webglDebugContextLostId__=contextId_;resourceDb_.push(obj);return obj;};}(ctx[functionName]);}var functionsThatShouldReturnNull=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(var ii=0;ii<functionsThatShouldReturnNull.length;++ii){var functionName=functionsThatShouldReturnNull[ii];wrappedContext_[functionName]=function(f){return function(){loseContextIfTime();if(contextLost_){return null;}return f.apply(ctx,arguments);};}(wrappedContext_[functionName]);}var isFunctions=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(var ii=0;ii<isFunctions.length;++ii){var functionName=isFunctions[ii];wrappedContext_[functionName]=function(f){return function(){loseContextIfTime();if(contextLost_){return false;}return f.apply(ctx,arguments);};}(wrappedContext_[functionName]);}wrappedContext_.checkFramebufferStatus=function(f){return function(){loseContextIfTime();if(contextLost_){return wrappedContext_.FRAMEBUFFER_UNSUPPORTED;}return f.apply(ctx,arguments);};}(wrappedContext_.checkFramebufferStatus);wrappedContext_.getAttribLocation=function(f){return function(){loseContextIfTime();if(contextLost_){return-1;}return f.apply(ctx,arguments);};}(wrappedContext_.getAttribLocation);wrappedContext_.getVertexAttribOffset=function(f){return function(){loseContextIfTime();if(contextLost_){return 0;}return f.apply(ctx,arguments);};}(wrappedContext_.getVertexAttribOffset);wrappedContext_.isContextLost=function(){return contextLost_;};return wrappedContext_;}}return{/**
     * Initializes this module. Safe to call more than once.
     * @param {!WebGLRenderingContext} ctx A WebGL context. If
    }
   *    you have more than one context it doesn't matter which one
   *    you pass in, it is only used to pull out constants.
   */'init':init,/**
   * Returns true or false if value matches any WebGL enum
   * @param {*} value Value to check if it might be an enum.
   * @return {boolean} True if value matches one of the WebGL defined enums
   */'mightBeEnum':mightBeEnum,/**
   * Gets an string version of an WebGL enum.
   *
   * Example:
   *   WebGLDebugUtil.init(ctx);
   *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
   *
   * @param {number} value Value to return an enum for
   * @return {string} The string version of the enum.
   */'glEnumToString':glEnumToString,/**
   * Converts the argument of a WebGL function to a string.
   * Attempts to convert enum arguments to strings.
   *
   * Example:
   *   WebGLDebugUtil.init(ctx);
   *   var str = WebGLDebugUtil.glFunctionArgToString('bindTexture', 0, gl.TEXTURE_2D);
   *
   * would return 'TEXTURE_2D'
   *
   * @param {string} functionName the name of the WebGL function.
   * @param {number} argumentIndx the index of the argument.
   * @param {*} value The value of the argument.
   * @return {string} The value as a string.
   */'glFunctionArgToString':glFunctionArgToString,/**
   * Converts the arguments of a WebGL function to a string.
   * Attempts to convert enum arguments to strings.
   *
   * @param {string} functionName the name of the WebGL function.
   * @param {number} args The arguments.
   * @return {string} The arguments as a string.
   */'glFunctionArgsToString':glFunctionArgsToString,/**
   * Given a WebGL context returns a wrapped context that calls
   * gl.getError after every command and calls a function if the
   * result is not NO_ERROR.
   *
   * You can supply your own function if you want. For example, if you'd like
   * an exception thrown on any GL error you could do this
   *
   *    function throwOnGLError(err, funcName, args) {
   *      throw WebGLDebugUtils.glEnumToString(err) +
   *            " was caused by call to " + funcName;
   *    };
   *
   *    ctx = WebGLDebugUtils.makeDebugContext(
   *        canvas.getContext("webgl"), throwOnGLError);
   *
   * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
   * @param {!function(err, funcName, args): void} opt_onErrorFunc The function
   *     to call when gl.getError returns an error. If not specified the default
   *     function calls console.log with a message.
   * @param {!function(funcName, args): void} opt_onFunc The
   *     function to call when each webgl function is called. You
   *     can use this to log all calls for example.
   */'makeDebugContext':makeDebugContext,/**
   * Given a canvas element returns a wrapped canvas element that will
   * simulate lost context. The canvas returned adds the following functions.
   *
   * loseContext:
   *   simulates a lost context event.
   *
   * restoreContext:
   *   simulates the context being restored.
   *
   * lostContextInNCalls:
   *   loses the context after N gl calls.
   *
   * getNumCalls:
   *   tells you how many gl calls there have been so far.
   *
   * setRestoreTimeout:
   *   sets the number of milliseconds until the context is restored
   *   after it has been lost. Defaults to 0. Pass -1 to prevent
   *   automatic restoring.
   *
   * @param {!Canvas} canvas The canvas element to wrap.
   */'makeLostContextSimulatingCanvas':makeLostContextSimulatingCanvas,/**
   * Resets a context to the initial state.
   * @param {!WebGLRenderingContext} ctx The webgl context to
   *     reset.
   */'resetToInitialState':resetToInitialState};}();/**
 * @class Generic map of IDs to items - can generate own IDs or accept given IDs. IDs should be strings in order to not
 * clash with internally generated IDs, which are numbers.
 * @private
 */var SceneJS_Map=function SceneJS_Map(items,_baseId){/**
     * @property Items in this map
     */this.items=items||[];var baseId=_baseId||0;var lastUniqueId=baseId+1;/**
     * Adds an item to the map and returns the ID of the item in the map. If an ID is given, the item is
     * mapped to that ID. Otherwise, the map automatically generates the ID and maps to that.
     *
     * id = myMap.addItem("foo") // ID internally generated
     *
     * id = myMap.addItem("foo", "bar") // ID is "foo"
     *
     */this.addItem=function(){var item;if(arguments.length==2){var id=arguments[0];item=arguments[1];if(this.items[id]){// Won't happen if given ID is string
throw SceneJS_error.fatalError(SceneJS.errors.ID_CLASH,"ID clash: '"+id+"'");}this.items[id]=item;return id;}else{while(true){item=arguments[0];var findId=lastUniqueId++;if(!this.items[findId]){this.items[findId]=item;return findId;}}}};/**
     * Removes the item of the given ID from the map
     */this.removeItem=function(id){delete this.items[id];};};/**
 * The SceneJS object.
 */var SceneJS=new function(){/**
     * This SceneJS version
     */this.VERSION='3.2';this._baseStateId=0;// Pub/sub support
this._handleMap=new SceneJS_Map();// Subscription handle pool
this._topicSubs={};// A [handle -> callback] map for each topic name
this._handleTopics={};// Maps handles to topic names
this._topicPubs={};// Maps topics to publications
/**
     * @property {SceneJS_Engine} Engines currently in existance
     */this._engines={};this._engineIds=new SceneJS_Map();/**
     * Publishes to a topic.
     *
     * Immediately notifies existing subscriptions to that topic, retains the publication to give to
     * any subsequent notifications on that topic as they are made.
     *
     * @param {String} topic Publication topic
     * @param {Object} pub The publication
     * @param {Boolean} [forget] When true, the publication will be sent to subscribers then forgotten, so that any
     * subsequent subscribers will not receive it
     * @private
     */this.publish=function(topic,pub,forget){if(!forget){this._topicPubs[topic]=pub;// Save notification
}var subsForTopic=this._topicSubs[topic];if(subsForTopic){// Notify subscriptions
for(var handle in subsForTopic){if(subsForTopic.hasOwnProperty(handle)){subsForTopic[handle].call(this,pub);}}}};/**
     * Removes a topic publication
     *
     * Immediately notifies existing subscriptions to that topic, sending them each a null publication.
     *
     * @param topic Publication topic
     * @private
     */this.unpublish=function(topic){var subsForTopic=this._topicSubs[topic];if(subsForTopic){// Notify subscriptions
for(var handle in subsForTopic){if(subsForTopic.hasOwnProperty(handle)){subsForTopic[handle].call(this,null);}}}delete this._topicPubs[topic];};/**
     * Listen for data changes at a particular location
     *
     * <p>Your callback will be triggered for
     * the initial data and again whenever the data changes. Use {@link #off} to stop receiving updates.</p>
     *
     * <p>The callback is be called with SceneJS as scope.</p>
     *
     * @param {String} location Publication location
     * @param {Function(data)} callback Called when fresh data is available at the location
     * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
     */this.on=function(topic,callback){var subsForTopic=this._topicSubs[topic];if(!subsForTopic){subsForTopic={};this._topicSubs[topic]=subsForTopic;}var handle=this._handleMap.addItem();// Create unique handle
subsForTopic[handle]=callback;this._handleTopics[handle]=topic;var pub=this._topicPubs[topic];if(pub){// A publication exists, notify callback immediately
callback.call(this,pub);}return handle;};/**
     * Unsubscribes from a publication that was previously made with {@link #on}.
     * @param handle Publication handle
     */this.off=function(handle){var topic=this._handleTopics[handle];if(topic){delete this._handleTopics[handle];var topicSubs=this._topicSubs[topic];if(topicSubs){delete topicSubs[handle];}this._handleMap.removeItem(handle);// Release handle
if(topic=="rendered"){this._engine.branchDirty(this);}}};/**
     * Listens for exactly one data update at the specified location, and then stops listening.
     * <p>This is equivalent to calling {@link #on}, and then calling {@link #off} inside the callback function.</p>
     * @param {String} location Data location to listen to
     * @param {Function(data)} callback Called when fresh data is available at the location
     */this.once=function(topic,callback){var self=this;var sub=this.on(topic,function(pub){self.off(sub);callback(pub);});};/**
     * Creates a new scene from the given JSON description and begins rendering it
     *
     * @param {String} json JSON scene description
     * @param {*} options Optional options
     * @param {Boolean} options.simulateWebGLContextLost Set true to enable simulation of lost WebGL context (has performance impact)
     * @returns {SceneJS.Scene} New scene
     */this.createScene=function(json,options){json=json||{};if(json.id){if(this._engines[json.id]){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Scene already exists with this ID: '"+json.id+"'");}this._engineIds.addItem(json.id,{});}else{json.id=this._engineIds.addItem({});}var engine=new SceneJS_Engine(json,options);this._engines[json.id]=engine;SceneJS_events.fireEvent(SceneJS_events.SCENE_CREATED,{// Notify modules that need to know about new scene
engine:engine});engine.scene.start(options);return engine.scene;};/**
     * Gets an existing scene
     *
     * @param {String} sceneId ID of target scene
     * @deprecated
     * @returns {SceneJS.Scene} The selected scene
     */this.scene=function(sceneId){var engine=this._engines[sceneId];return engine?engine.scene:null;};/**
     * Gets an existing scene.
     *
     * When no scene ID is given, the first scene found is returned. This is a shorthand convenience for
     * easy scripting when only one scene is defined.
     *
     * @param {String} [sceneId] ID of target scene
     * @returns {SceneJS.Scene} The selected scene
     */this.getScene=function(sceneId){if(!sceneId){for(var sceneId in this._engines){if(this._engines.hasOwnProperty(sceneId)){return this._engines[sceneId].scene;}}}var engine=this._engines[sceneId];return engine?engine.scene:null;};/**
     * Gets existing scenes
     *
     * @returns  Existing scenes, mapped to their IDs
     */this.getScenes=function(){var scenes={};for(var sceneId in this._engines){if(this._engines.hasOwnProperty(sceneId)){scenes[sceneId]=this._engines[sceneId].scene;}}return scenes;};/**
     * Tests if the given object is an array
     * @private
     */this._isArray=function(testObject){return testObject&&!testObject.propertyIsEnumerable('length')&&(typeof testObject==="undefined"?"undefined":_typeof(testObject))==='object'&&typeof testObject.length==='number';};/**
     *
     */this._shallowClone=function(o){var o2={};for(var name in o){if(o.hasOwnProperty(name)){o2[name]=o[name];}}return o2;};/**
     * Add properties of o to o2 where undefined or null on o2
     * @private
     */this._applyIf=function(o,o2){for(var name in o){if(o.hasOwnProperty(name)){if(o2[name]==undefined||o2[name]==null){o2[name]=o[name];}}}return o2;};/**
     * Add properties of o to o2, overwriting them on o2 if already there.
     * The optional clear flag causes properties on o2 to be cleared first
     * @private
     */this._apply=function(o,o2,clear){var name;if(clear){for(name in o2){if(o2.hasOwnProperty(name)){delete o2[name];}}}for(name in o){if(o.hasOwnProperty(name)&&o[name]!=undefined){o2[name]=o[name];}}return o2;};var hasOwnProperty=Object.prototype.hasOwnProperty;/**
     * Tests is an object is empty
     * @param obj
     * @returns {boolean}
     * @private
     */this._isEmpty=function(obj){// null and undefined are "empty"
if(obj==null)return true;// Assume if it has a length property with a non-zero value
// that that property is correct.
if(obj.length>0)return false;if(obj.length===0)return true;// Otherwise, does it have any properties of its own?
// Note that this doesn't handle
// toString and valueOf enumeration bugs in IE < 9
for(var key in obj){if(hasOwnProperty.call(obj,key))return false;}return true;};/**
     * Resets SceneJS, destroying all existing scenes
     */this.reset=function(){var temp=[];for(var id in this._engines){// Collect engines to destroy
if(this._engines.hasOwnProperty(id)){temp.push(this._engines[id]);delete this._engines[id];this._engineIds.removeItem(id);}}while(temp.length>0){// Destroy the engines
temp.pop().destroy();}SceneJS_events.fireEvent(SceneJS_events.RESET);};}();// Configure RequireJS to find plugins relative to plugins location
(function(){var pluginPath;SceneJS.on("configs",function(configs){if(configs.pluginPath!=pluginPath){pluginPath=configs.pluginPath;var libPath=pluginPath+"/lib";_require.config({paths:{"scenejsPluginDeps":libPath}});}});})();/**
 *  @private
 */var SceneJS_eventManager=function SceneJS_eventManager(){this._handlerIds=new SceneJS_Map();this.typeHandlers={};};/**
 *
 */SceneJS_eventManager.prototype.createEvent=function(type){if(this.typeHandlers[type]){return;}this.typeHandlers[type]={handlers:{},numSubs:0};};/**
 * Subscribes to an event defined on this event manager
 *
 * @param {String} type Event type one of the values in SceneJS_events
 * @param {Function} callback Handler function that will accept whatever parameter object accompanies the event
 * @return {String} handle Handle to the event binding
 */SceneJS_eventManager.prototype.onEvent=function(type,callback){var handlersForType=this.typeHandlers[type]||(this.typeHandlers[type]={handlers:{},numSubs:0});var handlerId=this._handlerIds.addItem(type);var handlers=handlersForType.handlers;handlers[handlerId]=callback;handlersForType.numSubs++;return handlerId;};/**
 *
 */SceneJS_eventManager.prototype.fireEvent=function(type,params){var handlersForType=this.typeHandlers[type]||(this.typeHandlers[type]={handlers:{},numSubs:0});if(handlersForType.numSubs>0){var handlers=handlersForType.handlers;for(var handlerId in handlers){if(handlers.hasOwnProperty(handlerId)){handlers[handlerId](params);}}}};/**
 * Unsubscribes to an event previously subscribed to on this manager
 *
 * @param {String} handlerId Subscription handle
 */SceneJS_eventManager.prototype.unEvent=function(handlerId){var type=this._handlerIds.items[handlerId];if(!type){return;}this._handlerIds.removeItem(handlerId);var handlers=this.typeHandlers[type];if(!handlers){return;}delete handlers[handlerId];this.typeHandlers[type].numSubs--;};/**
 * SceneJS plugin registry
 */SceneJS.Plugins=new function(){// Plugin map for each node type
var nodePlugins={};// Subscribers to plugins
var pluginSubs={};/**
     * Installs a plugin into SceneJS
     * @param {String} nodeType Node type name
     * @param {String} pluginType Plugin type name
     * @param [{String}] deps List of URLs of JavaScript files that the plugin depends on
     * @param {Function} plugin Plugin constructor
     */this.addPlugin=function(){var nodeType=arguments[0];var pluginType=arguments[1];var deps;var plugin;if(arguments.length==4){deps=arguments[2];plugin=arguments[3];}else{plugin=arguments[2];}addPlugin(nodeType,pluginType,deps,plugin);};function addPlugin(nodeType,pluginType,deps,plugin){var plugins=nodePlugins[nodeType]||(nodePlugins[nodeType]={});plugins[pluginType]=plugin;// Load dependencies, if any
loadDeps(deps,0,function(){// Notify and unsubscribe subscribers
var subId=nodeType+pluginType;var subs=pluginSubs[subId]||(pluginSubs[subId]=[]);while(subs.length>0){subs.pop()(plugin);}delete pluginSubs[subId];});}// Loads list of dependencies, synchronously and in order
function loadDeps(deps,i,ok){if(!deps||i>=deps.length){ok();return;}var src=deps[i];var pluginPath=SceneJS_configsModule.configs.pluginPath;if(!pluginPath){throw"no pluginPath config";// Build script error - should create this config
}src=pluginPath+"/"+src;loadScript(src,function(){loadDeps(deps,i+1,ok);});}/**
     * Tests if given plugin is installed
     */this.hasPlugin=function(nodeType,pluginType){var plugins=nodePlugins[nodeType];return plugins&&!!plugins[pluginType];};/**
     * Returns installed plugin of given type and ID
     */this.getPlugin=function(nodeType,pluginType,ok){var plugins=nodePlugins[nodeType];if(plugins){var plugin=plugins[pluginType];if(plugin){ok(plugin);return;}}var subId=nodeType+pluginType;var subs=pluginSubs[subId]||(pluginSubs[subId]=[]);subs.push(ok);if(subs.length>1){// Not first sub
return;}var self=this;var pluginPath=SceneJS_configsModule.configs.pluginPath;if(!pluginPath){throw"no pluginPath config";// Build script error - should create this config
}var pluginFilePath=pluginPath+"/"+nodeType+"/"+pluginType+".js";loadScript(pluginFilePath);};function loadScript(src,ok){var script=document.createElement("script");script.type="text/javascript";if(script.readyState){//IE
script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;if(ok){ok();}}};}else{//Others
script.onload=function(){if(ok){ok();}};}script.src=src;document.getElementsByTagName("head")[0].appendChild(script);}}();/**
 *  @private
 */var SceneJS_events=new function(){this.ERROR=0;this.RESET=1;// SceneJS framework reset
this.NODE_CREATED=2;// Scene has just been created
this.SCENE_CREATED=3;// Scene has just been created
this.SCENE_COMPILING=4;// Scene about to be compiled and drawn
this.SCENE_DESTROYED=5;// Scene just been destroyed
this.OBJECT_COMPILING=6;this.WEBGL_CONTEXT_LOST=7;this.WEBGL_CONTEXT_RESTORED=8;/* Priority queue for each type of event
     */var events=[];/**
     * Registers a handler for the given event and returns a subscription handle
     *
     * The handler can be registered with an optional priority number which specifies the order it is
     * called among the other handler already registered for the event.
     *
     * So, with n being the number of commands registered for the given event:
     *
     * (priority <= 0)      - command will be the first called
     * (priority >= n)      - command will be the last called
     * (0 < priority < n)   - command will be called at the order given by the priority
     * @private
     * @param type Event type - one of the values in SceneJS_events
     * @param command - Handler function that will accept whatever parameter object accompanies the event
     * @param priority - Optional priority number (see above)
     * @return {String} - Subscription handle
     */this.addListener=function(type,command,priority){var list=events[type];if(!list){list=[];events[type]=list;}var handler={command:command,priority:priority==undefined?list.length:priority};var index=-1;for(var i=0,len=list.length;i<len;i++){if(!list[i]){index=i;break;}}if(index<0){list.push(handler);index=list.length-1;}//
//        for (var i = 0; i < list.length; i++) {
//            if (list[i].priority > handler.priority) {
//                list.splice(i, 0, handler);
//                return i;
//            }
//        }
var handle=type+"."+index;return handle;};/**
     * Removes a listener
     * @param handle Subscription handle
     */this.removeListener=function(handle){var lastIdx=handle.lastIndexOf(".");var type=parseInt(handle.substr(0,lastIdx));var index=parseInt(handle.substr(lastIdx+1));var list=events[type];if(!list){return;}delete list[index];};/**
     * @private
     */this.fireEvent=function(type,params){var list=events[type];if(list){params=params||{};for(var i=0;i<list.length;i++){if(list[i]){list[i].command(params);}}}};}();/**
 * Subscribe to SceneJS events
 * @deprecated
 */SceneJS.bind=function(name,func){switch(name){case"error":return SceneJS_events.addListener(SceneJS_events.ERROR,func);break;case"reset":return SceneJS_events.addListener(SceneJS_events.RESET,function(){func();});break;case"webglcontextlost":return SceneJS_events.addListener(SceneJS_events.WEBGL_CONTEXT_LOST,function(params){func(params);});break;case"webglcontextrestored":return SceneJS_events.addListener(SceneJS_events.WEBGL_CONTEXT_RESTORED,function(params){func(params);});break;default:throw SceneJS_error.fatalError("SceneJS.bind - this event type not supported: '"+name+"'");}};/* Subscribe to SceneJS events
 * @deprecated
 */SceneJS.onEvent=SceneJS.bind;/* Unsubscribe from event
 */SceneJS.unEvent=function(handle){return SceneJS_events.removeListener(handle);};SceneJS.subscribe=SceneJS.addListener=SceneJS.onEvent=SceneJS.bind;SceneJS.unsubscribe=SceneJS.unEvent;SceneJS.on=SceneJS.onEvent;SceneJS.off=SceneJS.unEvent;/**
 *
 */var SceneJS_Canvas=function SceneJS_Canvas(id,canvasId,contextAttr,options){/**
     * ID of this canvas
     */this.canvasId;if(!canvasId){// Automatic default canvas
canvasId="canvas-"+id;var body=document.getElementsByTagName("body")[0];var div=document.createElement('div');var style=div.style;style.height="100%";style.width="100%";style.padding="0";style.margin="0";style.left="0";style.top="0";style.position="absolute";// style["z-index"] = "10000";
div.innerHTML+='<canvas id="'+canvasId+'" style="width: 100%; height: 100%; margin: 0; padding: 0;"></canvas>';body.appendChild(div);}// Bind to canvas
var canvas=document.getElementById(canvasId);if(!canvas){throw SceneJS_error.fatalError(SceneJS.errors.CANVAS_NOT_FOUND,"SceneJS.Scene attribute 'canvasId' does not match any elements in the page");}this.canvasId=canvasId;/**
     * WebGL context options
     */this.options=options||{};this.canvas=this.options.simulateWebGLContextLost?WebGLDebugUtils.makeLostContextSimulatingCanvas(canvas):canvas;// If the canvas uses css styles to specify the sizes make sure the basic
// width and height attributes match or the WebGL context will use 300 x 150
this.canvas.width=this.canvas.clientWidth;this.canvas.height=this.canvas.clientHeight;/**
     * Attributes given when initialising the WebGL context
     */this.contextAttr=contextAttr;/**
     * The WebGL context
     */this.gl=null;this.initWebGL();};/**
 * Names of recognised WebGL contexts
 */SceneJS_Canvas.prototype._WEBGL_CONTEXT_NAMES=["webgl","experimental-webgl","webkit-3d","moz-webgl","moz-glweb20"];/**
 * Initialise the WebGL context

 */SceneJS_Canvas.prototype.initWebGL=function(){for(var i=0;!this.gl&&i<this._WEBGL_CONTEXT_NAMES.length;i++){try{this.gl=this.canvas.getContext(this._WEBGL_CONTEXT_NAMES[i],this.contextAttr);}catch(e){// Try with next context name
}}if(!this.gl){throw SceneJS_error.fatalError(SceneJS.errors.WEBGL_NOT_SUPPORTED,'Failed to get a WebGL context');}// this.gl.enable(this.gl.SCISSOR_TEST);
//    this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
//    this.gl.clearDepth(1.0);
//    this.gl.enable(this.gl.DEPTH_TEST);
//    this.gl.disable(this.gl.CULL_FACE);
//    this.gl.depthRange(0, 1);
//    this.gl.disable(this.gl.SCISSOR_TEST);
//    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
};/**
 * Simulate a lost WebGL context.
 * Only works if the simulateWebGLContextLost was given as an option to the canvas' constructor.
 */SceneJS_Canvas.prototype.loseWebGLContext=function(){if(this.options.simulateWebGLContextLost){this.canvas.loseContext();}};/**
 * @class A container for a scene graph and its display
 *
 *
 * @private
 */var SceneJS_Engine=function SceneJS_Engine(json,options){json.type="scene";// The type property supplied by user on the root JSON node is ignored - would always be 'scene'
/**
     * ID of this engine, also the ID of this engine's {@link SceneJS.Scene}
     * @type String
     */this.id=json.id;/**
     * Number of times the scene is drawn each time it's rendered.
     * <p>This is useful for when we need to do things like render for left and right eyes.
     * @type {*|number}
     */this._numPasses=json.numPasses||1;/**
     * Canvas and GL context for this engine
     */this.canvas=new SceneJS_Canvas(this.id,json.canvasId,json.contextAttr,options);/**
     * Manages firing of and subscription to events
     */this.events=new SceneJS_eventManager();/**
     * State core factory - creates, stores, shares and destroys cores
     */this._coreFactory=new SceneJS_CoreFactory();/**
     * Manages creation, recycle and destruction of {@link SceneJS.Node} instances for this engine's scene graph
     */this._nodeFactory=new SceneJS_NodeFactory();/**
     * The engine's scene renderer
     * @type SceneJS_Display
     */this.display=new SceneJS_Display({canvas:this.canvas,transparent:json.transparent,dof:json.dof});/**
     * Flags the entirety of the scene graph as needing to be (re)compiled into the display
     */this.sceneDirty=false;/**
     * Flag set when at least one branch of the scene graph needs recompilation
     */this._sceneBranchesDirty=false;/**
     * List of nodes scheduled for destruction by #destroyNode
     * Destructions are done in a batch at the end of each render so as not to disrupt the render.
     */this._nodesToDestroy=[];/**
     * Number of nodes in destruction list
     */this._numNodesToDestroy=0;/**
     * Flag which is set while this engine is running - set after call to #start, unset after #stop or #pause
     */this.running=false;/**
     * Flag which is set while this engine is paused - set after call to #pause, unset after #stop or #start
     */this.paused=false;/**
     * Flag set once this engine has been destroyed
     */this.destroyed=false;/**
     * The current scene graph status
     */this.sceneStatus={nodes:{},// Status for each node
numTasks:0// Number of loads currently in progress
};var self=this;// Create scene root first, then create its subnodes
// This way nodes can access the scene in their constructors
var nodes=json.nodes;json.nodes=null;this.scene=this.createNode(json);// Create scene root
if(nodes){json.nodes=nodes;this.scene.addNodes(nodes);// then create sub-nodes
}this.canvas.canvas.addEventListener(// WebGL context lost
"webglcontextlost",function(event){event.preventDefault();self.stop();SceneJS_events.fireEvent(SceneJS_events.WEBGL_CONTEXT_LOST,{scene:self.scene});},false);this.canvas.canvas.addEventListener(// WebGL context recovered
"webglcontextrestored",function(event){self.canvas.initWebGL();self._coreFactory.webglRestored();// Reallocate WebGL resources for node state cores
self.display.webglRestored();// Reallocate shaders and re-cache shader var locations for display state chunks
SceneJS_events.fireEvent(SceneJS_events.WEBGL_CONTEXT_RESTORED,{scene:self.scene});self.start();},false);};/**
 * Sets the number of times the scene is drawn on each render.
 * <p>This is useful for when we need to do things like render for left and right eyes.
 * @param {Number} numPasses The number of times the scene is drawn on each frame.
 * @see #getTagMask
 * @see SceneJS.Tag
 */SceneJS_Engine.prototype.setNumPasses=function(numPasses){this._numPasses=numPasses;};/**
 * Simulate a lost WebGL context.
 * Only works if the simulateWebGLContextLost was given as an option to the engine's constructor.
 */SceneJS_Engine.prototype.loseWebGLContext=function(){this.canvas.loseWebGLContext();};/**
 * Gets/loads the given node type
 *
 * @param {String} type Node type name
 * @param {Function(Function)} ok Callback fired when type loaded, returns the type constructor
 */SceneJS_Engine.prototype.getNodeType=function(type,ok){SceneJS_NodeFactory.getNodeType(type,ok);};/**
 * Returns true if the given node type is currently loaded (ie. load not required)
 * @param type
 */SceneJS_Engine.prototype.hasNodeType=function(type){return!!SceneJS_NodeFactory.nodeTypes[type];};/**
 * Recursively parse the given JSON scene graph representation and return a scene (sub)graph.
 *
 * @param {Object} json JSON definition of a scene graph or subgraph
 * @param {Function} ok Callback fired when node created, with the node as argument
 */SceneJS_Engine.prototype.createNode=function(json,ok){// Do buffered node destroys - don't want olds nodes
// hanging around whose IDs may clash with the new node
this._doDestroyNodes();json.type=json.type||"node";// Nodes are SceneJS.Node type by default
var core=this._coreFactory.getCore(json.type,json.coreId);// Create or share a core
var self=this;return this._nodeFactory.getNode(this,json,core,function(node){// Create child nodes
if(!node._fromPlugin&&json.nodes){var numNodes=0;for(var i=0,len=json.nodes.length;i<len;i++){self.createNode(json.nodes[i],function(childNode){node.addNode(childNode);if(++numNodes==len){if(ok){ok(node);}self.scene.publish("nodes/"+node.id,node);}});}}else{if(ok){ok(node);self.scene.publish("nodes/"+node.id,node);}}});};/**
 * Performs pending node destructions. When destroyed, each node and its core is released back to the
 * node and core pools for reuse, respectively.
 */SceneJS_Engine.prototype._doDestroyNodes=function(){var node;while(this._numNodesToDestroy>0){node=this._nodesToDestroy[--this._numNodesToDestroy];node._doDestroy();this._coreFactory.putCore(node._core);// Release state core for reuse
this._nodeFactory.putNode(node);// Release node for reuse
}};/**
 * Finds the node with the given ID in this engine's scene graph
 * @return {SceneJS.Node} The node if found, else null
 */SceneJS_Engine.prototype.findNode=function(nodeId){return this._nodeFactory.nodes.items[nodeId];};/** Finds nodes in this engine's scene graph that have nodes IDs matching the given regular expression
 * @param {String} nodeIdRegex Regular expression to match on node IDs
 * @return {[SceneJS.Node]} Array of nodes whose IDs match the given regex
 */SceneJS_Engine.prototype.findNodes=function(nodeIdRegex){var regex=new RegExp(nodeIdRegex);var nodes=[];var nodeMap=this._nodeFactory.nodes.items;for(var nodeId in nodeMap){if(nodeMap.hasOwnProperty(nodeId)){if(regex.test(nodeId)){nodes.push(nodeMap[nodeId]);}}}return nodes;};/**
 * Tests whether a core of the given ID exists for the given node type
 * @param {String} type Node type
 * @param {String} coreId
 * @returns Boolean
 */SceneJS_Engine.prototype.hasCore=function(type,coreId){return this._coreFactory.hasCore(type,coreId);};/**
 * Schedules the given subtree of this engine's {@link SceneJS.Scene} for recompilation
 *
 * @param {SceneJS.Node} node Root node of the subtree to recompile
 */SceneJS_Engine.prototype.branchDirty=function(node){if(this.sceneDirty){return;// Whole scene will recompile anyway
}/* Dealing with some weirdness with the embedded window and iframe / window fascism.
     */if(node==window){return;}node.branchDirty=true;node.dirty=true;for(var n=node.parent;n&&!(n.dirty||n.branchDirty);n=n.parent){// Flag path down to this node
n.dirty=true;}this._sceneBranchesDirty=true;};/**
 * Renders a single frame. Does any pending scene compilations or draw graph updates first.
 * Ordinarily the frame is rendered only if compilations or draw graph updates were performed,
 * but may be forced to render the frame regardless.
 *
 * @param {*} params Rendering parameters
 * @param {Boolean} params.clear True to clear the display first (default)
 */SceneJS_Engine.prototype.renderFrame=function(params){var rendered=false;if(this._needCompile()||params&&params.force){//        // Render display graph
//        this.display.render(params);
var time=new Date().getTime();// Render the scene once for each pass
for(var i=0;i<this._numPasses;i++){// Notify that render is upcoming
this.scene.publish("rendering",{pass:i});// Compile scene graph to display graph, if necessary
this._doCompile();// Render display graph
// Clear buffers only on first frame
this.display.render({clear:i==0});// Notify that render completed
this.scene.publish("rendered",{sceneId:this.id,time:time,pass:i});rendered=true;}}return rendered;};/**
 * Starts the render loop on this engine.
 */SceneJS_Engine.prototype.start=function(){if(!this.running){// Do nothing if already started
this.running=true;this.paused=false;this.sceneDirty=true;var self=this;var fnName="__scenejs_sceneLoop"+this.id;var sleeping=false;var time=new Date().getTime();var prevTime=time;var startTime=time;var scene=this.scene;var rendered=false;// Notify started
this.events.fireEvent("started",{sceneId:self.id,startTime:startTime});// Animation frame callback
window[fnName]=function(){if(self.running&&!self.paused){time=new Date().getTime();scene.publish("tick",{sceneId:self.id,startTime:startTime,prevTime:prevTime,time:time});prevTime=time;if(!self.running){// "tick" handler have destroyed scene
return;}rendered=false;// Render the scene once for each pass
for(var i=0;i<self._numPasses;i++){if(self._needCompile()||rendered){sleeping=false;// Notify we're about to do a render
scene.publish("rendering",{pass:i});// Compile scene graph to display graph, if necessary
self._doCompile();// Render display graph
// Clear buffers only on first frame
self.display.render({clear:i==0});// Notify that we've just done a render
scene.publish("rendered",{sceneId:self.id,time:time,pass:i});rendered=true;}}// If any of the passes did not render anything, then put the render loop to sleep again
if(!rendered){if(!sleeping){scene.publish("sleep",{sceneId:self.id,startTime:startTime,prevTime:time,time:time});}sleeping=true;}}if(self.running){window.requestAnimationFrame(window[fnName]);}};window.requestAnimationFrame(window[fnName]);}};/**
 * Performs a pick on this engine and returns a hit record containing at least the name of the picked
 * scene object (as configured by SceneJS.Name nodes) and the canvas pick coordinates. Ordinarily, picking
 * is the simple GPU color-name mapped method, but this method can instead perform a ray-intersect pick
 * when the 'rayPick' flag is set on the options parameter for this method. For that mode, this method will
 * also find the intersection point on the picked object's near surface with a ray cast from the eye that passes
 * through the mouse position on the projection plane.
 *
 * @param {Number} canvasX X-axis canvas pick coordinate
 * @param {Number} canvasY Y-axis canvas pick coordinate
 * @param options Pick options
 * @param options.rayPick Performs additional ray-intersect pick when true
 * @returns The pick record
 */SceneJS_Engine.prototype.pick=function(canvasX,canvasY,options){// Do any pending scene compilations
if(this._needCompile()){this._doCompile();}var hit=this.display.pick({canvasX:canvasX,canvasY:canvasY,rayPick:options?options.rayPick:false});return hit;};/**
 * Returns true if view needs refreshing from scene
 * @returns {Boolean}
 * @private
 */SceneJS_Engine.prototype._needCompile=function(){return this.display.imageDirty// Frame buffer needs redraw
||this.display.drawListDirty// Draw list needs rebuild
||this.display.stateSortDirty// Draw list needs to redetermine state order
||this.display.stateOrderDirty// Draw list needs state sort
||this.display.objectListDirty// Draw list needs to be rebuilt
||this._sceneBranchesDirty// One or more branches in scene graph need (re)compilation
||this.sceneDirty;// Whole scene needs recompilation
};/**
 * Performs any pending scene compilations or display rebuilds
 */SceneJS_Engine.prototype._doCompile=function(){if(this._sceneBranchesDirty||this.sceneDirty){// Need scene graph compilation
this._sceneBranchesDirty=false;SceneJS_events.fireEvent(SceneJS_events.SCENE_COMPILING,{// Notify compilation support start
engine:this// Compilation support modules get ready
});this.pubSubProxy=new SceneJS_PubSubProxy(this.scene,null);var ctx={pubSubProxy:this.pubSubProxy};this.scene._compileNodes(ctx);// Begin depth-first compilation descent into scene sub-nodes
this.sceneDirty=false;}this._doDestroyNodes();// Garbage collect destroyed nodes - node destructions set imageDirty true
};/**
 * Pauses/unpauses the render loop
 * @param {Boolean} doPause Pauses or unpauses the render loop
 */SceneJS_Engine.prototype.pause=function(doPause){this.paused=doPause;};/**
 * Stops the render loop
 */SceneJS_Engine.prototype.stop=function(){if(this.running){this.running=false;this.paused=false;window["__scenejs_sceneLoop"+this.id]=null;//   this.events.fireEvent("stopped", { sceneId: this.id });
}};/**
 * Destroys a node within this engine's {@link SceneJS.Scene}
 *
 * @param {SceneJS.Node} node Node to destroy
 */SceneJS_Engine.prototype.destroyNode=function(node){/* The node is actually scheduled for lazy destruction within the next invocation of #_tryCompile
     */this._nodesToDestroy[this._numNodesToDestroy++]=node;/* Stop tracking node's status
     */var nodeStatus=this.sceneStatus.nodes[node.id];if(nodeStatus){this.sceneStatus.numTasks-=nodeStatus.numTasks;delete this.sceneStatus.nodes[node.id];}};/**
 * Destroys this engine
 */SceneJS_Engine.prototype.destroy=function(){this.destroyed=true;// this.events.fireEvent("destroyed", { sceneId: this.id });
};/*---------------------------------------------------------------------------------------------------------------------
 * JavaScript augmentations to support render loop
 *--------------------------------------------------------------------------------------------------------------------*/if(!self.Int32Array){self.Int32Array=Array;self.Float32Array=Array;}// Ripped off from THREE.js - https://github.com/mrdoob/three.js/blob/master/src/Three.js
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'RequestCancelAnimationFrame'];}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id);};})();/**
 * Backend module that provides single point through which exceptions may be raised
 *
 * @class SceneJS_error
 * @private
 */var SceneJS_error=new function(){var activeSceneId;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,// Set default logging for scene root
function(params){activeSceneId=params.engine.id;});SceneJS_events.addListener(SceneJS_events.RESET,function(){activeSceneId=null;},100000);// Really low priority - must be reset last
this.fatalError=function(code,message){if(typeof code=="string"){message=code;code=SceneJS.errors.ERROR;}var error={errorName:SceneJS.errors._getErrorName(code)||"ERROR",code:code,exception:message,fatal:true};if(activeSceneId){error.sceneId=activeSceneId;}SceneJS_events.fireEvent(SceneJS_events.ERROR,error);return message;};this.error=function(code,message){var error={errorName:SceneJS.errors._getErrorName(code)||"ERROR",code:code,exception:message,fatal:false};if(activeSceneId){error.sceneId=activeSceneId;}SceneJS_events.fireEvent(SceneJS_events.ERROR,error);};}();(function(){SceneJS.errors={};var n=0;SceneJS.errors.ERROR=n++;SceneJS.errors.WEBGL_NOT_SUPPORTED=n++;SceneJS.errors.WEBGL_CONTEXT_LOST=n++;SceneJS.errors.NODE_CONFIG_EXPECTED=n++;SceneJS.errors.ILLEGAL_NODE_CONFIG=n++;SceneJS.errors.SHADER_COMPILATION_FAILURE=n++;SceneJS.errors.SHADER_LINK_FAILURE=n++;SceneJS.errors.CANVAS_NOT_FOUND=n++;SceneJS.errors.OUT_OF_VRAM=n++;SceneJS.errors.WEBGL_UNSUPPORTED_NODE_CONFIG=n++;SceneJS.errors.NODE_NOT_FOUND=n++;SceneJS.errors.NODE_ILLEGAL_STATE=n++;SceneJS.errors.ID_CLASH=n++;SceneJS.errors.PLUGIN_INVALID=n++;})();SceneJS.errors._getErrorName=function(code){for(var key in SceneJS.errors){if(SceneJS.errors.hasOwnProperty(key)&&SceneJS.errors[key]==code){return key;}}return null;};/**
 * Backend that manages configurations.
 *
 * @class SceneJS_configsModule
 * @private
 */var SceneJS_configsModule=new function(){this.configs={};var subs={};/**
     * Set a config
     * @param path
     * @param data
     */this.setConfigs=function(path,data){// Update configs
if(!path){this.configs=data;}else{var parts=path.split(".");var cfg=this.configs;var subCfg;var name;for(var i=0;i<parts.length-1;i++){name=parts[i];subCfg=cfg[name];if(!subCfg){subCfg=cfg[name]={};}cfg=subCfg;}cfg[parts.length-1]=data;}// Notify subscribers
var list=subs[path||"_all"];if(list){for(var i=0,len=list.length;i<len;i++){list[i](cfg);}}SceneJS.publish("configs",this.configs);};/**
     * Get a config
     * @param path
     * @return {*}
     */this.getConfigs=function(path){if(!path){return this.configs;}else{var cfg=this.configs;var parts=path.split(".");for(var i=0;cfg&&i<parts.length;i++){cfg=cfg[parts[i]];}return cfg!=undefined?cfg:{};}};/**
     * Subscribe to updates to a config
     * @param path
     * @param ok
     */this.on=function(path,ok){path=path||"_all";(subs[path]||(subs[path]=[])).push(ok);ok(this.getConfigs(path));};}();/** Sets configurations.
 */SceneJS.configure=SceneJS.setConfigs=SceneJS.setDebugConfigs=function(){if(arguments.length==1){SceneJS_configsModule.setConfigs(null,arguments[0]);}else if(arguments.length==2){SceneJS_configsModule.setConfigs(arguments[0],arguments[1]);}else{throw SceneJS_error.fatalError("Illegal arguments given to SceneJS.setDebugs - should be either ({String}:name, {Object}:cfg) or ({Object}:cfg)");}};/** Gets configurations
 */SceneJS.getConfigs=SceneJS.getDebugConfigs=function(path){return SceneJS_configsModule.getConfigs(path);};/**
 * @class Manages logging
 *  @private
 */SceneJS.log=new function(){var activeSceneId;var funcs=null;var queues={};var indent=0;var indentStr="";SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,// Set default logging for scene root
function(params){activeSceneId=params.engine.id;});SceneJS_events.addListener(SceneJS_events.RESET,function(){queues={};funcs=null;activeSceneId=null;},100000);// Really low priority - must be reset last
this._setIndent=function(_indent){indent=_indent;var indentArray=[];for(var i=0;i<indent;i++){indentArray.push("----");}indentStr=indentArray.join("");};this.error=function(msg){this._log("error",msg);};this.warn=function(msg){this._log("warn",msg);};this.info=function(msg){this._log("info",msg);};this.debug=function(msg){this._log("debug",msg);};this.setFuncs=function(l){if(l){funcs=l;for(var channel in queues){this._flush(channel);}}};this._flush=function(channel){var queue=queues[channel];if(queue){var func=funcs?funcs[channel]:null;if(func){for(var i=0;i<queue.length;i++){func(queue[i]);}queues[channel]=[];}}};this._log=function(channel,message){if(SceneJS._isArray(message)){for(var i=0;i<message.length;i++){this.__log(channel,message[i]);}}else{this.__log(channel,message);}};this.__log=function(channel,message){message=activeSceneId?indentStr+activeSceneId+": "+message:indentStr+message;if(funcs&&funcs[channel]){funcs[channel](message);}else if(console&&console[channel]){console[channel](message);}};this.getFuncs=function(){return funcs;};}();/* 
 * Optimizations made based on glMatrix by Brandon Jones
 *//*
 * Copyright (c) 2010 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 *//**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, u otherwise
 * @private
 */var SceneJS_math_divVec3=function SceneJS_math_divVec3(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]/v[0];dest[1]=u[1]/v[1];dest[2]=u[2]/v[2];return dest;};/**
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_negateVector4=function SceneJS_math_negateVector4(v,dest){if(!dest){dest=v;}dest[0]=-v[0];dest[1]=-v[1];dest[2]=-v[2];dest[3]=-v[3];return dest;};/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */var SceneJS_math_addVec4=function SceneJS_math_addVec4(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]+v[0];dest[1]=u[1]+v[1];dest[2]=u[2]+v[2];dest[3]=u[3]+v[3];return dest;};/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_addVec4s=function SceneJS_math_addVec4s(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]+s;dest[1]=v[1]+s;dest[2]=v[2]+s;dest[3]=v[3]+s;return dest;};/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, u otherwise
 * @private
 */var SceneJS_math_addVec3=function SceneJS_math_addVec3(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]+v[0];dest[1]=u[1]+v[1];dest[2]=u[2]+v[2];return dest;};/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */var SceneJS_math_addVec3s=function SceneJS_math_addVec3s(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]+s;dest[1]=v[1]+s;dest[2]=v[2]+s;return dest;};/** @private */var SceneJS_math_addScalarVec4=function SceneJS_math_addScalarVec4(s,v,dest){return SceneJS_math_addVec4s(v,s,dest);};/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */var SceneJS_math_subVec4=function SceneJS_math_subVec4(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]-v[0];dest[1]=u[1]-v[1];dest[2]=u[2]-v[2];dest[3]=u[3]-v[3];return dest;};/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */var SceneJS_math_subVec3=function SceneJS_math_subVec3(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]-v[0];dest[1]=u[1]-v[1];dest[2]=u[2]-v[2];return dest;};var SceneJS_math_lerpVec3=function SceneJS_math_lerpVec3(t,t1,t2,p1,p2){var f2=(t-t1)/(t2-t1);var f1=1.0-f2;return{x:p1.x*f1+p2.x*f2,y:p1.y*f1+p2.y*f2,z:p1.z*f1+p2.z*f2};};/**
 * @param u vec2
 * @param v vec2
 * @param dest vec2 - optional destination
 * @return {vec2} dest if specified, u otherwise
 * @private
 */var SceneJS_math_subVec2=function SceneJS_math_subVec2(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]-v[0];dest[1]=u[1]-v[1];return dest;};/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_subVec4Scalar=function SceneJS_math_subVec4Scalar(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]-s;dest[1]=v[1]-s;dest[2]=v[2]-s;dest[3]=v[3]-s;return dest;};/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_subScalarVec4=function SceneJS_math_subScalarVec4(v,s,dest){if(!dest){dest=v;}dest[0]=s-v[0];dest[1]=s-v[1];dest[2]=s-v[2];dest[3]=s-v[3];return dest;};/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */var SceneJS_math_mulVec4=function SceneJS_math_mulVec4(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]*v[0];dest[1]=u[1]*v[1];dest[2]=u[2]*v[2];dest[3]=u[3]*v[3];return dest;};/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_mulVec4Scalar=function SceneJS_math_mulVec4Scalar(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]*s;dest[1]=v[1]*s;dest[2]=v[2]*s;dest[3]=v[3]*s;return dest;};/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */var SceneJS_math_mulVec3Scalar=function SceneJS_math_mulVec3Scalar(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]*s;dest[1]=v[1]*s;dest[2]=v[2]*s;return dest;};/**
 * @param v vec2
 * @param s scalar
 * @param dest vec2 - optional destination
 * @return {vec2} dest if specified, v otherwise
 * @private
 */var SceneJS_math_mulVec2Scalar=function SceneJS_math_mulVec2Scalar(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]*s;dest[1]=v[1]*s;return dest;};/**
 * @param u vec4
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, u otherwise
 * @private
 */var SceneJS_math_divVec4=function SceneJS_math_divVec4(u,v,dest){if(!dest){dest=u;}dest[0]=u[0]/v[0];dest[1]=u[1]/v[1];dest[2]=u[2]/v[2];dest[3]=u[3]/v[3];return dest;};/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */var SceneJS_math_divScalarVec3=function SceneJS_math_divScalarVec3(s,v,dest){if(!dest){dest=v;}dest[0]=s/v[0];dest[1]=s/v[1];dest[2]=s/v[2];return dest;};/**
 * @param v vec3
 * @param s scalar
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */var SceneJS_math_divVec3s=function SceneJS_math_divVec3s(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]/s;dest[1]=v[1]/s;dest[2]=v[2]/s;return dest;};/**
 * @param v vec4
 * @param s scalar
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_divVec4s=function SceneJS_math_divVec4s(v,s,dest){if(!dest){dest=v;}dest[0]=v[0]/s;dest[1]=v[1]/s;dest[2]=v[2]/s;dest[3]=v[3]/s;return dest;};/**
 * @param s scalar
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_divScalarVec4=function SceneJS_math_divScalarVec4(s,v,dest){if(!dest){dest=v;}dest[0]=s/v[0];dest[1]=s/v[1];dest[2]=s/v[2];dest[3]=s/v[3];return dest;};/** @private */var SceneJS_math_dotVector4=function SceneJS_math_dotVector4(u,v){return u[0]*v[0]+u[1]*v[1]+u[2]*v[2]+u[3]*v[3];};/** @private */var SceneJS_math_cross3Vec4=function SceneJS_math_cross3Vec4(u,v){var u0=u[0],u1=u[1],u2=u[2];var v0=v[0],v1=v[1],v2=v[2];return[u1*v2-u2*v1,u2*v0-u0*v2,u0*v1-u1*v0,0.0];};/**
 * @param u vec3
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, u otherwise
 * @private
 */var SceneJS_math_cross3Vec3=function SceneJS_math_cross3Vec3(u,v,dest){if(!dest){dest=u;}var x=u[0],y=u[1],z=u[2];var x2=v[0],y2=v[1],z2=v[2];dest[0]=y*z2-z*y2;dest[1]=z*x2-x*z2;dest[2]=x*y2-y*x2;return dest;};/** @private */var SceneJS_math_sqLenVec4=function SceneJS_math_sqLenVec4(v){return SceneJS_math_dotVector4(v,v);};/** @private */var SceneJS_math_lenVec4=function SceneJS_math_lenVec4(v){return Math.sqrt(SceneJS_math_sqLenVec4(v));};/** @private */var SceneJS_math_dotVector3=function SceneJS_math_dotVector3(u,v){return u[0]*v[0]+u[1]*v[1]+u[2]*v[2];};/** @private */var SceneJS_math_dotVector2=function SceneJS_math_dotVector2(u,v){return u[0]*v[0]+u[1]*v[1];};/** @private */var SceneJS_math_sqLenVec3=function SceneJS_math_sqLenVec3(v){return SceneJS_math_dotVector3(v,v);};/** @private */var SceneJS_math_sqLenVec2=function SceneJS_math_sqLenVec2(v){return SceneJS_math_dotVector2(v,v);};/** @private */var SceneJS_math_lenVec3=function SceneJS_math_lenVec3(v){return Math.sqrt(SceneJS_math_sqLenVec3(v));};/** @private */var SceneJS_math_lenVec2=function SceneJS_math_lenVec2(v){return Math.sqrt(SceneJS_math_sqLenVec2(v));};/**
 * @param v vec3
 * @param dest vec3 - optional destination
 * @return {vec3} dest if specified, v otherwise
 * @private
 */var SceneJS_math_rcpVec3=function SceneJS_math_rcpVec3(v,dest){return SceneJS_math_divScalarVec3(1.0,v,dest);};/**
 * @param v vec4
 * @param dest vec4 - optional destination
 * @return {vec4} dest if specified, v otherwise
 * @private
 */var SceneJS_math_normalizeVec4=function SceneJS_math_normalizeVec4(v,dest){var f=1.0/SceneJS_math_lenVec4(v);return SceneJS_math_mulVec4Scalar(v,f,dest);};/** @private */var SceneJS_math_normalizeVec3=function SceneJS_math_normalizeVec3(v,dest){var f=1.0/SceneJS_math_lenVec3(v);return SceneJS_math_mulVec3Scalar(v,f,dest);};// @private
var SceneJS_math_normalizeVec2=function SceneJS_math_normalizeVec2(v,dest){var f=1.0/SceneJS_math_lenVec2(v);return SceneJS_math_mulVec2Scalar(v,f,dest);};/** @private */var SceneJS_math_mat4=function SceneJS_math_mat4(){return new Array(16);};/** @private */var SceneJS_math_dupMat4=function SceneJS_math_dupMat4(m){return m.slice(0,16);};/** @private */var SceneJS_math_getCellMat4=function SceneJS_math_getCellMat4(m,row,col){return m[row+col*4];};/** @private */var SceneJS_math_setCellMat4=function SceneJS_math_setCellMat4(m,row,col,s){m[row+col*4]=s;};/** @private */var SceneJS_math_getRowMat4=function SceneJS_math_getRowMat4(m,r){return[m[r],m[r+4],m[r+8],m[r+12]];};/** @private */var SceneJS_math_setRowMat4=function SceneJS_math_setRowMat4(m,r,v){m[r]=v[0];m[r+4]=v[1];m[r+8]=v[2];m[r+12]=v[3];};/** @private */var SceneJS_math_setRowMat4c=function SceneJS_math_setRowMat4c(m,r,x,y,z,w){SceneJS_math_setRowMat4(m,r,[x,y,z,w]);};/** @private */var SceneJS_math_setRowMat4s=function SceneJS_math_setRowMat4s(m,r,s){SceneJS_math_setRowMat4c(m,r,s,s,s,s);};/** @private */var SceneJS_math_getColMat4=function SceneJS_math_getColMat4(m,c){var i=c*4;return[m[i],m[i+1],m[i+2],m[i+3]];};/** @private */var SceneJS_math_setColMat4v=function SceneJS_math_setColMat4v(m,c,v){var i=c*4;m[i]=v[0];m[i+1]=v[1];m[i+2]=v[2];m[i+3]=v[3];};/** @private */var SceneJS_math_setColMat4c=function SceneJS_math_setColMat4c(m,c,x,y,z,w){SceneJS_math_setColMat4v(m,c,[x,y,z,w]);};/** @private */var SceneJS_math_setColMat4Scalar=function SceneJS_math_setColMat4Scalar(m,c,s){SceneJS_math_setColMat4c(m,c,s,s,s,s);};/** @private */var SceneJS_math_mat4To3=function SceneJS_math_mat4To3(m){return[m[0],m[1],m[2],m[4],m[5],m[6],m[8],m[9],m[10]];};/** @private */var SceneJS_math_m4s=function SceneJS_math_m4s(s){return[s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s];};/** @private */var SceneJS_math_setMat4ToZeroes=function SceneJS_math_setMat4ToZeroes(){return SceneJS_math_m4s(0.0);};/** @private */var SceneJS_math_setMat4ToOnes=function SceneJS_math_setMat4ToOnes(){return SceneJS_math_m4s(1.0);};/** @private */var SceneJS_math_diagonalMat4v=function SceneJS_math_diagonalMat4v(v){return[v[0],0.0,0.0,0.0,0.0,v[1],0.0,0.0,0.0,0.0,v[2],0.0,0.0,0.0,0.0,v[3]];};/** @private */var SceneJS_math_diagonalMat4c=function SceneJS_math_diagonalMat4c(x,y,z,w){return SceneJS_math_diagonalMat4v([x,y,z,w]);};/** @private */var SceneJS_math_diagonalMat4s=function SceneJS_math_diagonalMat4s(s){return SceneJS_math_diagonalMat4c(s,s,s,s);};/** @private */var SceneJS_math_identityMat4=function SceneJS_math_identityMat4(){return SceneJS_math_diagonalMat4v([1.0,1.0,1.0,1.0]);};/** @private */var SceneJS_math_isIdentityMat4=function SceneJS_math_isIdentityMat4(m){if(m[0]!==1.0||m[1]!==0.0||m[2]!==0.0||m[3]!==0.0||m[4]!==0.0||m[5]!==1.0||m[6]!==0.0||m[7]!==0.0||m[8]!==0.0||m[9]!==0.0||m[10]!==1.0||m[11]!==0.0||m[12]!==0.0||m[13]!==0.0||m[14]!==0.0||m[15]!==1.0){return false;}return true;};/**
 * @param m mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */var SceneJS_math_negateMat4=function SceneJS_math_negateMat4(m,dest){if(!dest){dest=m;}dest[0]=-m[0];dest[1]=-m[1];dest[2]=-m[2];dest[3]=-m[3];dest[4]=-m[4];dest[5]=-m[5];dest[6]=-m[6];dest[7]=-m[7];dest[8]=-m[8];dest[9]=-m[9];dest[10]=-m[10];dest[11]=-m[11];dest[12]=-m[12];dest[13]=-m[13];dest[14]=-m[14];dest[15]=-m[15];return dest;};/**
 * @param a mat4
 * @param b mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, a otherwise
 * @private
 */var SceneJS_math_addMat4=function SceneJS_math_addMat4(a,b,dest){if(!dest){dest=a;}dest[0]=a[0]+b[0];dest[1]=a[1]+b[1];dest[2]=a[2]+b[2];dest[3]=a[3]+b[3];dest[4]=a[4]+b[4];dest[5]=a[5]+b[5];dest[6]=a[6]+b[6];dest[7]=a[7]+b[7];dest[8]=a[8]+b[8];dest[9]=a[9]+b[9];dest[10]=a[10]+b[10];dest[11]=a[11]+b[11];dest[12]=a[12]+b[12];dest[13]=a[13]+b[13];dest[14]=a[14]+b[14];dest[15]=a[15]+b[15];return dest;};/**
 * @param m mat4
 * @param s scalar
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */var SceneJS_math_addMat4Scalar=function SceneJS_math_addMat4Scalar(m,s,dest){if(!dest){dest=m;}dest[0]=m[0]+s;dest[1]=m[1]+s;dest[2]=m[2]+s;dest[3]=m[3]+s;dest[4]=m[4]+s;dest[5]=m[5]+s;dest[6]=m[6]+s;dest[7]=m[7]+s;dest[8]=m[8]+s;dest[9]=m[9]+s;dest[10]=m[10]+s;dest[11]=m[11]+s;dest[12]=m[12]+s;dest[13]=m[13]+s;dest[14]=m[14]+s;dest[15]=m[15]+s;return dest;};/** @private */var SceneJS_math_addScalarMat4=function SceneJS_math_addScalarMat4(s,m,dest){return SceneJS_math_addMat4Scalar(m,s,dest);};/**
 * @param a mat4
 * @param b mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, a otherwise
 * @private
 */var SceneJS_math_subMat4=function SceneJS_math_subMat4(a,b,dest){if(!dest){dest=a;}dest[0]=a[0]-b[0];dest[1]=a[1]-b[1];dest[2]=a[2]-b[2];dest[3]=a[3]-b[3];dest[4]=a[4]-b[4];dest[5]=a[5]-b[5];dest[6]=a[6]-b[6];dest[7]=a[7]-b[7];dest[8]=a[8]-b[8];dest[9]=a[9]-b[9];dest[10]=a[10]-b[10];dest[11]=a[11]-b[11];dest[12]=a[12]-b[12];dest[13]=a[13]-b[13];dest[14]=a[14]-b[14];dest[15]=a[15]-b[15];return dest;};/**
 * @param m mat4
 * @param s scalar
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */var SceneJS_math_subMat4Scalar=function SceneJS_math_subMat4Scalar(m,s,dest){if(!dest){dest=m;}dest[0]=m[0]-s;dest[1]=m[1]-s;dest[2]=m[2]-s;dest[3]=m[3]-s;dest[4]=m[4]-s;dest[5]=m[5]-s;dest[6]=m[6]-s;dest[7]=m[7]-s;dest[8]=m[8]-s;dest[9]=m[9]-s;dest[10]=m[10]-s;dest[11]=m[11]-s;dest[12]=m[12]-s;dest[13]=m[13]-s;dest[14]=m[14]-s;dest[15]=m[15]-s;return dest;};/**
 * @param s scalar
 * @param m mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */var SceneJS_math_subScalarMat4=function SceneJS_math_subScalarMat4(s,m,dest){if(!dest){dest=m;}dest[0]=s-m[0];dest[1]=s-m[1];dest[2]=s-m[2];dest[3]=s-m[3];dest[4]=s-m[4];dest[5]=s-m[5];dest[6]=s-m[6];dest[7]=s-m[7];dest[8]=s-m[8];dest[9]=s-m[9];dest[10]=s-m[10];dest[11]=s-m[11];dest[12]=s-m[12];dest[13]=s-m[13];dest[14]=s-m[14];dest[15]=s-m[15];return dest;};/**
 * @param a mat4
 * @param b mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, a otherwise
 * @private
 */var SceneJS_math_mulMat4=function SceneJS_math_mulMat4(a,b,dest){if(!dest){dest=a;}// Cache the matrix values (makes for huge speed increases!)
var a00=a[0],a01=a[1],a02=a[2],a03=a[3];var a10=a[4],a11=a[5],a12=a[6],a13=a[7];var a20=a[8],a21=a[9],a22=a[10],a23=a[11];var a30=a[12],a31=a[13],a32=a[14],a33=a[15];var b00=b[0],b01=b[1],b02=b[2],b03=b[3];var b10=b[4],b11=b[5],b12=b[6],b13=b[7];var b20=b[8],b21=b[9],b22=b[10],b23=b[11];var b30=b[12],b31=b[13],b32=b[14],b33=b[15];dest[0]=b00*a00+b01*a10+b02*a20+b03*a30;dest[1]=b00*a01+b01*a11+b02*a21+b03*a31;dest[2]=b00*a02+b01*a12+b02*a22+b03*a32;dest[3]=b00*a03+b01*a13+b02*a23+b03*a33;dest[4]=b10*a00+b11*a10+b12*a20+b13*a30;dest[5]=b10*a01+b11*a11+b12*a21+b13*a31;dest[6]=b10*a02+b11*a12+b12*a22+b13*a32;dest[7]=b10*a03+b11*a13+b12*a23+b13*a33;dest[8]=b20*a00+b21*a10+b22*a20+b23*a30;dest[9]=b20*a01+b21*a11+b22*a21+b23*a31;dest[10]=b20*a02+b21*a12+b22*a22+b23*a32;dest[11]=b20*a03+b21*a13+b22*a23+b23*a33;dest[12]=b30*a00+b31*a10+b32*a20+b33*a30;dest[13]=b30*a01+b31*a11+b32*a21+b33*a31;dest[14]=b30*a02+b31*a12+b32*a22+b33*a32;dest[15]=b30*a03+b31*a13+b32*a23+b33*a33;return dest;};/**
 * @param m mat4
 * @param s scalar
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, m otherwise
 * @private
 */var SceneJS_math_mulMat4s=function SceneJS_math_mulMat4s(m,s,dest){if(!dest){dest=m;}dest[0]=m[0]*s;dest[1]=m[1]*s;dest[2]=m[2]*s;dest[3]=m[3]*s;dest[4]=m[4]*s;dest[5]=m[5]*s;dest[6]=m[6]*s;dest[7]=m[7]*s;dest[8]=m[8]*s;dest[9]=m[9]*s;dest[10]=m[10]*s;dest[11]=m[11]*s;dest[12]=m[12]*s;dest[13]=m[13]*s;dest[14]=m[14]*s;dest[15]=m[15]*s;return dest;};/**
 * @param m mat4
 * @param v vec4
 * @return {vec4}
 * @private
 */var SceneJS_math_mulMat4v4=function SceneJS_math_mulMat4v4(m,v){var v0=v[0],v1=v[1],v2=v[2],v3=v[3];return[m[0]*v0+m[4]*v1+m[8]*v2+m[12]*v3,m[1]*v0+m[5]*v1+m[9]*v2+m[13]*v3,m[2]*v0+m[6]*v1+m[10]*v2+m[14]*v3,m[3]*v0+m[7]*v1+m[11]*v2+m[15]*v3];};/**
 * @param mat mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, mat otherwise
 * @private
 */var SceneJS_math_transposeMat4=function SceneJS_math_transposeMat4(mat,dest){// If we are transposing ourselves we can skip a few steps but have to cache some values
var m4=mat[4],m14=mat[14],m8=mat[8];var m13=mat[13],m12=mat[12],m9=mat[9];if(!dest||mat==dest){var a01=mat[1],a02=mat[2],a03=mat[3];var a12=mat[6],a13=mat[7];var a23=mat[11];mat[1]=m4;mat[2]=m8;mat[3]=m12;mat[4]=a01;mat[6]=m9;mat[7]=m13;mat[8]=a02;mat[9]=a12;mat[11]=m14;mat[12]=a03;mat[13]=a13;mat[14]=a23;return mat;}dest[0]=mat[0];dest[1]=m4;dest[2]=m8;dest[3]=m12;dest[4]=mat[1];dest[5]=mat[5];dest[6]=m9;dest[7]=m13;dest[8]=mat[2];dest[9]=mat[6];dest[10]=mat[10];dest[11]=m14;dest[12]=mat[3];dest[13]=mat[7];dest[14]=mat[11];dest[15]=mat[15];return dest;};/** @private */var SceneJS_math_determinantMat4=function SceneJS_math_determinantMat4(mat){// Cache the matrix values (makes for huge speed increases!)
var a00=mat[0],a01=mat[1],a02=mat[2],a03=mat[3];var a10=mat[4],a11=mat[5],a12=mat[6],a13=mat[7];var a20=mat[8],a21=mat[9],a22=mat[10],a23=mat[11];var a30=mat[12],a31=mat[13],a32=mat[14],a33=mat[15];return a30*a21*a12*a03-a20*a31*a12*a03-a30*a11*a22*a03+a10*a31*a22*a03+a20*a11*a32*a03-a10*a21*a32*a03-a30*a21*a02*a13+a20*a31*a02*a13+a30*a01*a22*a13-a00*a31*a22*a13-a20*a01*a32*a13+a00*a21*a32*a13+a30*a11*a02*a23-a10*a31*a02*a23-a30*a01*a12*a23+a00*a31*a12*a23+a10*a01*a32*a23-a00*a11*a32*a23-a20*a11*a02*a33+a10*a21*a02*a33+a20*a01*a12*a33-a00*a21*a12*a33-a10*a01*a22*a33+a00*a11*a22*a33;};/**
 * @param mat mat4
 * @param dest mat4 - optional destination
 * @return {mat4} dest if specified, mat otherwise
 * @private
 */var SceneJS_math_inverseMat4=function SceneJS_math_inverseMat4(mat,dest){if(!dest){dest=mat;}// Cache the matrix values (makes for huge speed increases!)
var a00=mat[0],a01=mat[1],a02=mat[2],a03=mat[3];var a10=mat[4],a11=mat[5],a12=mat[6],a13=mat[7];var a20=mat[8],a21=mat[9],a22=mat[10],a23=mat[11];var a30=mat[12],a31=mat[13],a32=mat[14],a33=mat[15];var b00=a00*a11-a01*a10;var b01=a00*a12-a02*a10;var b02=a00*a13-a03*a10;var b03=a01*a12-a02*a11;var b04=a01*a13-a03*a11;var b05=a02*a13-a03*a12;var b06=a20*a31-a21*a30;var b07=a20*a32-a22*a30;var b08=a20*a33-a23*a30;var b09=a21*a32-a22*a31;var b10=a21*a33-a23*a31;var b11=a22*a33-a23*a32;// Calculate the determinant (inlined to avoid double-caching)
var invDet=1/(b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06);dest[0]=(a11*b11-a12*b10+a13*b09)*invDet;dest[1]=(-a01*b11+a02*b10-a03*b09)*invDet;dest[2]=(a31*b05-a32*b04+a33*b03)*invDet;dest[3]=(-a21*b05+a22*b04-a23*b03)*invDet;dest[4]=(-a10*b11+a12*b08-a13*b07)*invDet;dest[5]=(a00*b11-a02*b08+a03*b07)*invDet;dest[6]=(-a30*b05+a32*b02-a33*b01)*invDet;dest[7]=(a20*b05-a22*b02+a23*b01)*invDet;dest[8]=(a10*b10-a11*b08+a13*b06)*invDet;dest[9]=(-a00*b10+a01*b08-a03*b06)*invDet;dest[10]=(a30*b04-a31*b02+a33*b00)*invDet;dest[11]=(-a20*b04+a21*b02-a23*b00)*invDet;dest[12]=(-a10*b09+a11*b07-a12*b06)*invDet;dest[13]=(a00*b09-a01*b07+a02*b06)*invDet;dest[14]=(-a30*b03+a31*b01-a32*b00)*invDet;dest[15]=(a20*b03-a21*b01+a22*b00)*invDet;return dest;};/** @private */var SceneJS_math_traceMat4=function SceneJS_math_traceMat4(m){return m[0]+m[5]+m[10]+m[15];};/** @private */var SceneJS_math_translationMat4v=function SceneJS_math_translationMat4v(v){var m=SceneJS_math_identityMat4();m[12]=v[0];m[13]=v[1];m[14]=v[2];return m;};/** @private */var SceneJS_math_translationMat4c=function SceneJS_math_translationMat4c(x,y,z){return SceneJS_math_translationMat4v([x,y,z]);};/** @private */var SceneJS_math_translationMat4s=function SceneJS_math_translationMat4s(s){return SceneJS_math_translationMat4c(s,s,s);};/** @private */var SceneJS_math_rotationMat4v=function SceneJS_math_rotationMat4v(anglerad,axis){var ax=SceneJS_math_normalizeVec4([axis[0],axis[1],axis[2],0.0]);var s=Math.sin(anglerad);var c=Math.cos(anglerad);var q=1.0-c;var x=ax[0];var y=ax[1];var z=ax[2];var xy,yz,zx,xs,ys,zs;//xx = x * x; used once
//yy = y * y; used once
//zz = z * z; used once
xy=x*y;yz=y*z;zx=z*x;xs=x*s;ys=y*s;zs=z*s;var m=SceneJS_math_mat4();m[0]=q*x*x+c;m[1]=q*xy+zs;m[2]=q*zx-ys;m[3]=0.0;m[4]=q*xy-zs;m[5]=q*y*y+c;m[6]=q*yz+xs;m[7]=0.0;m[8]=q*zx+ys;m[9]=q*yz-xs;m[10]=q*z*z+c;m[11]=0.0;m[12]=0.0;m[13]=0.0;m[14]=0.0;m[15]=1.0;return m;};/** @private */var SceneJS_math_rotationMat4c=function SceneJS_math_rotationMat4c(anglerad,x,y,z){return SceneJS_math_rotationMat4v(anglerad,[x,y,z]);};/** @private */var SceneJS_math_scalingMat4v=function SceneJS_math_scalingMat4v(v){var m=SceneJS_math_identityMat4();m[0]=v[0];m[5]=v[1];m[10]=v[2];return m;};/** @private */var SceneJS_math_scalingMat4c=function SceneJS_math_scalingMat4c(x,y,z){return SceneJS_math_scalingMat4v([x,y,z]);};/** @private */var SceneJS_math_scalingMat4s=function SceneJS_math_scalingMat4s(s){return SceneJS_math_scalingMat4c(s,s,s);};/**
 * Default lookat properties - eye at 0,0,1, looking at 0,0,0, up vector pointing up Y-axis
 */var SceneJS_math_LOOKAT_OBJ={eye:{x:0,y:0,z:10.0},look:{x:0,y:0,z:0.0},up:{x:0,y:1,z:0.0}};/**
 * Default lookat properties in array form - eye at 0,0,1, looking at 0,0,0, up vector pointing up Y-axis
 */var SceneJS_math_LOOKAT_ARRAYS={eye:[0,0,10.0],look:[0,0,0.0],up:[0,1,0.0]};/**
 * Default orthographic projection properties
 */var SceneJS_math_ORTHO_OBJ={left:-1.0,right:1.0,bottom:-1.0,near:0.1,top:1.0,far:5000.0};/**
 * @param pos vec3 position of the viewer
 * @param target vec3 point the viewer is looking at
 * @param up vec3 pointing "up"
 * @param dest mat4 Optional, mat4 frustum matrix will be written into
 *
 * @return {mat4} dest if specified, a new mat4 otherwise
 */var SceneJS_math_lookAtMat4v=function SceneJS_math_lookAtMat4v(pos,target,up,dest){if(!dest){dest=SceneJS_math_mat4();}var posx=pos[0],posy=pos[1],posz=pos[2],upx=up[0],upy=up[1],upz=up[2],targetx=target[0],targety=target[1],targetz=target[2];if(posx==targetx&&posy==targety&&posz==targetz){return SceneJS_math_identityMat4();}var z0,z1,z2,x0,x1,x2,y0,y1,y2,len;//vec3.direction(eye, center, z);
z0=posx-targetx;z1=posy-targety;z2=posz-targetz;// normalize (no check needed for 0 because of early return)
len=1/Math.sqrt(z0*z0+z1*z1+z2*z2);z0*=len;z1*=len;z2*=len;//vec3.normalize(vec3.cross(up, z, x));
x0=upy*z2-upz*z1;x1=upz*z0-upx*z2;x2=upx*z1-upy*z0;len=Math.sqrt(x0*x0+x1*x1+x2*x2);if(!len){x0=0;x1=0;x2=0;}else{len=1/len;x0*=len;x1*=len;x2*=len;}//vec3.normalize(vec3.cross(z, x, y));
y0=z1*x2-z2*x1;y1=z2*x0-z0*x2;y2=z0*x1-z1*x0;len=Math.sqrt(y0*y0+y1*y1+y2*y2);if(!len){y0=0;y1=0;y2=0;}else{len=1/len;y0*=len;y1*=len;y2*=len;}dest[0]=x0;dest[1]=y0;dest[2]=z0;dest[3]=0;dest[4]=x1;dest[5]=y1;dest[6]=z1;dest[7]=0;dest[8]=x2;dest[9]=y2;dest[10]=z2;dest[11]=0;dest[12]=-(x0*posx+x1*posy+x2*posz);dest[13]=-(y0*posx+y1*posy+y2*posz);dest[14]=-(z0*posx+z1*posy+z2*posz);dest[15]=1;return dest;};/** @private */var SceneJS_math_lookAtMat4c=function SceneJS_math_lookAtMat4c(posx,posy,posz,targetx,targety,targetz,upx,upy,upz){return SceneJS_math_lookAtMat4v([posx,posy,posz],[targetx,targety,targetz],[upx,upy,upz]);};/** @private */var SceneJS_math_orthoMat4c=function SceneJS_math_orthoMat4c(left,right,bottom,top,near,far,dest){if(!dest){dest=SceneJS_math_mat4();}var rl=right-left;var tb=top-bottom;var fn=far-near;dest[0]=2.0/rl;dest[1]=0.0;dest[2]=0.0;dest[3]=0.0;dest[4]=0.0;dest[5]=2.0/tb;dest[6]=0.0;dest[7]=0.0;dest[8]=0.0;dest[9]=0.0;dest[10]=-2.0/fn;dest[11]=0.0;dest[12]=-(left+right)/rl;dest[13]=-(top+bottom)/tb;dest[14]=-(far+near)/fn;dest[15]=1.0;return dest;};/** @private */var SceneJS_math_frustumMat4v=function SceneJS_math_frustumMat4v(fmin,fmax){var fmin4=[fmin[0],fmin[1],fmin[2],0.0];var fmax4=[fmax[0],fmax[1],fmax[2],0.0];var vsum=SceneJS_math_mat4();SceneJS_math_addVec4(fmax4,fmin4,vsum);var vdif=SceneJS_math_mat4();SceneJS_math_subVec4(fmax4,fmin4,vdif);var t=2.0*fmin4[2];var m=SceneJS_math_mat4();var vdif0=vdif[0],vdif1=vdif[1],vdif2=vdif[2];m[0]=t/vdif0;m[1]=0.0;m[2]=0.0;m[3]=0.0;m[4]=0.0;m[5]=t/vdif1;m[6]=0.0;m[7]=0.0;m[8]=vsum[0]/vdif0;m[9]=vsum[1]/vdif1;m[10]=-vsum[2]/vdif2;m[11]=-1.0;m[12]=0.0;m[13]=0.0;m[14]=-t*fmax4[2]/vdif2;m[15]=0.0;return m;};/** @private */var SceneJS_math_frustumMatrix4=function SceneJS_math_frustumMatrix4(left,right,bottom,top,near,far,dest){if(!dest){dest=SceneJS_math_mat4();}var rl=right-left;var tb=top-bottom;var fn=far-near;dest[0]=near*2/rl;dest[1]=0;dest[2]=0;dest[3]=0;dest[4]=0;dest[5]=near*2/tb;dest[6]=0;dest[7]=0;dest[8]=(right+left)/rl;dest[9]=(top+bottom)/tb;dest[10]=-(far+near)/fn;dest[11]=-1;dest[12]=0;dest[13]=0;dest[14]=-(far*near*2)/fn;dest[15]=0;return dest;};/** @private */var SceneJS_math_perspectiveMatrix4=function SceneJS_math_perspectiveMatrix4(fovyrad,aspectratio,znear,zfar){var pmin=[];var pmax=[];pmin[2]=znear;pmax[2]=zfar;pmax[1]=pmin[2]*Math.tan(fovyrad/2.0);pmin[1]=-pmax[1];pmax[0]=pmax[1]*aspectratio;pmin[0]=-pmax[0];return SceneJS_math_frustumMat4v(pmin,pmax);};/** @private */var SceneJS_math_transformPoint3=function SceneJS_math_transformPoint3(m,p){var p0=p[0],p1=p[1],p2=p[2];return[m[0]*p0+m[4]*p1+m[8]*p2+m[12],m[1]*p0+m[5]*p1+m[9]*p2+m[13],m[2]*p0+m[6]*p1+m[10]*p2+m[14],m[3]*p0+m[7]*p1+m[11]*p2+m[15]];};/** @private */var SceneJS_math_transformPoints3=function SceneJS_math_transformPoints3(m,points){var result=new Array(points.length);var len=points.length;var p0,p1,p2;var pi;// cache values
var m0=m[0],m1=m[1],m2=m[2],m3=m[3];var m4=m[4],m5=m[5],m6=m[6],m7=m[7];var m8=m[8],m9=m[9],m10=m[10],m11=m[11];var m12=m[12],m13=m[13],m14=m[14],m15=m[15];for(var i=0;i<len;++i){// cache values
pi=points[i];p0=pi[0];p1=pi[1];p2=pi[2];result[i]=[m0*p0+m4*p1+m8*p2+m12,m1*p0+m5*p1+m9*p2+m13,m2*p0+m6*p1+m10*p2+m14,m3*p0+m7*p1+m11*p2+m15];}return result;};/** @private */var SceneJS_math_transformVector3=function SceneJS_math_transformVector3(m,v){var v0=v[0],v1=v[1],v2=v[2];return[m[0]*v0+m[4]*v1+m[8]*v2,m[1]*v0+m[5]*v1+m[9]*v2,m[2]*v0+m[6]*v1+m[10]*v2];};var SceneJS_math_transformVector4=function SceneJS_math_transformVector4(m,v){var v0=v[0],v1=v[1],v2=v[2],v3=v[3];return[m[0]*v0+m[4]*v1+m[8]*v2+m[12]*v3,m[1]*v0+m[5]*v1+m[9]*v2+m[13]*v3,m[2]*v0+m[6]*v1+m[10]*v2+m[14]*v3,m[3]*v0+m[7]*v1+m[11]*v2+m[15]*v3];};/** @private */var SceneJS_math_projectVec4=function SceneJS_math_projectVec4(v){var f=1.0/v[3];return[v[0]*f,v[1]*f,v[2]*f,1.0];};/** @private */var SceneJS_math_Plane3=function SceneJS_math_Plane3(normal,offset,normalize){this.normal=[0.0,0.0,1.0];this.offset=0.0;if(normal&&offset){var normal0=normal[0],normal1=normal[1],normal2=normal[2];this.offset=offset;if(normalize){var s=Math.sqrt(normal0*normal0+normal1*normal1+normal2*normal2);if(s>0.0){s=1.0/s;this.normal[0]=normal0*s;this.normal[1]=normal1*s;this.normal[2]=normal2*s;this.offset*=s;}}}};/** @private */var SceneJS_math_MAX_DOUBLE=Number.POSITIVE_INFINITY;/** @private */var SceneJS_math_MIN_DOUBLE=Number.NEGATIVE_INFINITY;/** @private
 *
 */var SceneJS_math_Box3=function SceneJS_math_Box3(min,max){this.min=min||[SceneJS_math_MAX_DOUBLE,SceneJS_math_MAX_DOUBLE,SceneJS_math_MAX_DOUBLE];this.max=max||[SceneJS_math_MIN_DOUBLE,SceneJS_math_MIN_DOUBLE,SceneJS_math_MIN_DOUBLE];/** @private */this.init=function(min,max){this.min[0]=min[0];this.min[1]=min[1];this.min[2]=min[2];this.max[0]=max[0];this.max[1]=max[1];this.max[2]=max[2];return this;};/** @private */this.fromPoints=function(points){var pointsLength=points.length;for(var i=0;i<pointsLength;++i){var points_i3=points[i][3];var pDiv0=points[i][0]/points_i3;var pDiv1=points[i][1]/points_i3;var pDiv2=points[i][2]/points_i3;if(pDiv0<this.min[0]){this.min[0]=pDiv0;}if(pDiv1<this.min[1]){this.min[1]=pDiv1;}if(pDiv2<this.min[2]){this.min[2]=pDiv2;}if(pDiv0>this.max[0]){this.max[0]=pDiv0;}if(pDiv1>this.max[1]){this.max[1]=pDiv1;}if(pDiv2>this.max[2]){this.max[2]=pDiv2;}}return this;};/** @private */this.isEmpty=function(){return this.min[0]>=this.max[0]&&this.min[1]>=this.max[1]&&this.min[2]>=this.max[2];};/** @private */this.getCenter=function(){return[(this.max[0]+this.min[0])/2.0,(this.max[1]+this.min[1])/2.0,(this.max[2]+this.min[2])/2.0];};/** @private */this.getSize=function(){return[this.max[0]-this.min[0],this.max[1]-this.min[1],this.max[2]-this.min[2]];};/** @private */this.getFacesAreas=function(){var s=this.size;return[s[1]*s[2],s[0]*s[2],s[0]*s[1]];};/** @private */this.getSurfaceArea=function(){var a=this.getFacesAreas();return(a[0]+a[1]+a[2])*2.0;};/** @private */this.getVolume=function(){var s=this.size;return s[0]*s[1]*s[2];};/** @private */this.getOffset=function(half_delta){this.min[0]-=half_delta;this.min[1]-=half_delta;this.min[2]-=half_delta;this.max[0]+=half_delta;this.max[1]+=half_delta;this.max[2]+=half_delta;return this;};};/** @private
 *
 * @param min
 * @param max
 */var SceneJS_math_AxisBox3=function SceneJS_math_AxisBox3(min,max){var min0=min[0],min1=min[1],min2=min[2];var max0=max[0],max1=max[1],max2=max[2];this.verts=[[min0,min1,min2],[max0,min1,min2],[max0,max1,min2],[min0,max1,min2],[min0,min1,max2],[max0,min1,max2],[max0,max1,max2],[min0,max1,max2]];/** @private */this.toBox3=function(){var box=new SceneJS_math_Box3();for(var i=0;i<8;++i){var v=this.verts[i];for(var j=0;j<3;++j){if(v[j]<box.min[j]){box.min[j]=v[j];}if(v[j]>box.max[j]){box.max[j]=v[j];}}}};};/** @private
 *
 * @param center
 * @param radius
 */var SceneJS_math_Sphere3=function SceneJS_math_Sphere3(center,radius){this.center=[center[0],center[1],center[2]];this.radius=radius;/** @private */this.isEmpty=function(){return this.radius===0.0;};/** @private */this.surfaceArea=function(){return 4.0*Math.PI*this.radius*this.radius;};/** @private */this.getVolume=function(){var thisRadius=this.radius;return 4.0/3.0*Math.PI*thisRadius*thisRadius*thisRadius;};};/** Creates billboard matrix from given view matrix
 * @private
 */var SceneJS_math_billboardMat=function SceneJS_math_billboardMat(viewMatrix){var rotVec=[SceneJS_math_getColMat4(viewMatrix,0),SceneJS_math_getColMat4(viewMatrix,1),SceneJS_math_getColMat4(viewMatrix,2)];var scaleVec=[SceneJS_math_lenVec4(rotVec[0]),SceneJS_math_lenVec4(rotVec[1]),SceneJS_math_lenVec4(rotVec[2])];var scaleVecRcp=SceneJS_math_mat4();SceneJS_math_rcpVec3(scaleVec,scaleVecRcp);var sMat=SceneJS_math_scalingMat4v(scaleVec);//var sMatInv = SceneJS_math_scalingMat4v(scaleVecRcp);
SceneJS_math_mulVec4Scalar(rotVec[0],scaleVecRcp[0]);SceneJS_math_mulVec4Scalar(rotVec[1],scaleVecRcp[1]);SceneJS_math_mulVec4Scalar(rotVec[2],scaleVecRcp[2]);var rotMatInverse=SceneJS_math_identityMat4();SceneJS_math_setRowMat4(rotMatInverse,0,rotVec[0]);SceneJS_math_setRowMat4(rotMatInverse,1,rotVec[1]);SceneJS_math_setRowMat4(rotMatInverse,2,rotVec[2]);//return rotMatInverse;
//return SceneJS_math_mulMat4(sMatInv, SceneJS_math_mulMat4(rotMatInverse, sMat));
return SceneJS_math_mulMat4(rotMatInverse,sMat);// return SceneJS_math_mulMat4(sMat, SceneJS_math_mulMat4(rotMatInverse, sMat));
//return SceneJS_math_mulMat4(sMatInv, SceneJS_math_mulMat4(rotMatInverse, sMat));
};/** @private */var SceneJS_math_FrustumPlane=function SceneJS_math_FrustumPlane(nx,ny,nz,offset){var s=1.0/Math.sqrt(nx*nx+ny*ny+nz*nz);this.normal=[nx*s,ny*s,nz*s];this.offset=offset*s;this.testVertex=[this.normal[0]>=0.0?1:0,this.normal[1]>=0.0?1:0,this.normal[2]>=0.0?1:0];};/** @private */var SceneJS_math_OUTSIDE_FRUSTUM=3;/** @private */var SceneJS_math_INTERSECT_FRUSTUM=4;/** @private */var SceneJS_math_INSIDE_FRUSTUM=5;/** @private */var SceneJS_math_Frustum=function SceneJS_math_Frustum(viewMatrix,projectionMatrix,viewport){var m=SceneJS_math_mat4();SceneJS_math_mulMat4(projectionMatrix,viewMatrix,m);// cache m indexes
var m0=m[0],m1=m[1],m2=m[2],m3=m[3];var m4=m[4],m5=m[5],m6=m[6],m7=m[7];var m8=m[8],m9=m[9],m10=m[10],m11=m[11];var m12=m[12],m13=m[13],m14=m[14],m15=m[15];//var q = [ m[3], m[7], m[11] ]; just reuse m indexes instead of making new var
var planes=[new SceneJS_math_FrustumPlane(m3-m0,m7-m4,m11-m8,m15-m12),new SceneJS_math_FrustumPlane(m3+m0,m7+m4,m11+m8,m15+m12),new SceneJS_math_FrustumPlane(m3-m1,m7-m5,m11-m9,m15-m13),new SceneJS_math_FrustumPlane(m3+m1,m7+m5,m11+m9,m15+m13),new SceneJS_math_FrustumPlane(m3-m2,m7-m6,m11-m10,m15-m14),new SceneJS_math_FrustumPlane(m3+m2,m7+m6,m11+m10,m15+m14)];/* Resources for LOD
     */var rotVec=[SceneJS_math_getColMat4(viewMatrix,0),SceneJS_math_getColMat4(viewMatrix,1),SceneJS_math_getColMat4(viewMatrix,2)];var scaleVec=[SceneJS_math_lenVec4(rotVec[0]),SceneJS_math_lenVec4(rotVec[1]),SceneJS_math_lenVec4(rotVec[2])];var scaleVecRcp=SceneJS_math_rcpVec3(scaleVec);var sMat=SceneJS_math_scalingMat4v(scaleVec);var sMatInv=SceneJS_math_scalingMat4v(scaleVecRcp);SceneJS_math_mulVec4Scalar(rotVec[0],scaleVecRcp[0]);SceneJS_math_mulVec4Scalar(rotVec[1],scaleVecRcp[1]);SceneJS_math_mulVec4Scalar(rotVec[2],scaleVecRcp[2]);var rotMatInverse=SceneJS_math_identityMat4();SceneJS_math_setRowMat4(rotMatInverse,0,rotVec[0]);SceneJS_math_setRowMat4(rotMatInverse,1,rotVec[1]);SceneJS_math_setRowMat4(rotMatInverse,2,rotVec[2]);if(!this.matrix){this.matrix=SceneJS_math_mat4();}SceneJS_math_mulMat4(projectionMatrix,viewMatrix,this.matrix);if(!this.billboardMatrix){this.billboardMatrix=SceneJS_math_mat4();}SceneJS_math_mulMat4(sMatInv,SceneJS_math_mulMat4(rotMatInverse,sMat),this.billboardMatrix);this.viewport=viewport.slice(0,4);/** @private */this.textAxisBoxIntersection=function(box){var ret=SceneJS_math_INSIDE_FRUSTUM;var bminmax=[box.min,box.max];var plane=null;for(var i=0;i<6;++i){plane=planes[i];if(plane.normal[0]*bminmax[plane.testVertex[0]][0]+plane.normal[1]*bminmax[plane.testVertex[1]][1]+plane.normal[2]*bminmax[plane.testVertex[2]][2]+plane.offset<0.0){return SceneJS_math_OUTSIDE_FRUSTUM;}if(plane.normal[0]*bminmax[1-plane.testVertex[0]][0]+plane.normal[1]*bminmax[1-plane.testVertex[1]][1]+plane.normal[2]*bminmax[1-plane.testVertex[2]][2]+plane.offset<0.0){ret=SceneJS_math_INTERSECT_FRUSTUM;}}return ret;};/** @private */this.getProjectedSize=function(box){var diagVec=SceneJS_math_mat4();SceneJS_math_subVec3(box.max,box.min,diagVec);var diagSize=SceneJS_math_lenVec3(diagVec);var size=Math.abs(diagSize);var p0=[(box.min[0]+box.max[0])*0.5,(box.min[1]+box.max[1])*0.5,(box.min[2]+box.max[2])*0.5,0.0];var halfSize=size*0.5;var p1=[-halfSize,0.0,0.0,1.0];var p2=[halfSize,0.0,0.0,1.0];p1=SceneJS_math_mulMat4v4(this.billboardMatrix,p1);p1=SceneJS_math_addVec4(p1,p0);p1=SceneJS_math_projectVec4(SceneJS_math_mulMat4v4(this.matrix,p1));p2=SceneJS_math_mulMat4v4(this.billboardMatrix,p2);p2=SceneJS_math_addVec4(p2,p0);p2=SceneJS_math_projectVec4(SceneJS_math_mulMat4v4(this.matrix,p2));return viewport[2]*Math.abs(p2[0]-p1[0]);};this.getProjectedState=function(modelCoords){var viewCoords=SceneJS_math_transformPoints3(this.matrix,modelCoords);//var canvasBox = {
//    min: [10000000, 10000000 ],
//    max: [-10000000, -10000000]
//};
// separate variables instead of indexing an array
var canvasBoxMin0=10000000,canvasBoxMin1=10000000;var canvasBoxMax0=-10000000,canvasBoxMax1=-10000000;var v,x,y;var arrLen=viewCoords.length;for(var i=0;i<arrLen;++i){v=SceneJS_math_projectVec4(viewCoords[i]);x=v[0];y=v[1];if(x<-0.5){x=-0.5;}if(y<-0.5){y=-0.5;}if(x>0.5){x=0.5;}if(y>0.5){y=0.5;}if(x<canvasBoxMin0){canvasBoxMin0=x;}if(y<canvasBoxMin1){canvasBoxMin1=y;}if(x>canvasBoxMax0){canvasBoxMax0=x;}if(y>canvasBoxMax1){canvasBoxMax1=y;}}canvasBoxMin0+=0.5;canvasBoxMin1+=0.5;canvasBoxMax0+=0.5;canvasBoxMax1+=0.5;// cache viewport indexes
var viewport2=viewport[2],viewport3=viewport[3];canvasBoxMin0=canvasBoxMin0*(viewport2+15);canvasBoxMin1=canvasBoxMin1*(viewport3+15);canvasBoxMax0=canvasBoxMax0*(viewport2+15);canvasBoxMax1=canvasBoxMax1*(viewport3+15);var diagCanvasBoxVec=SceneJS_math_mat4();SceneJS_math_subVec2([canvasBoxMax0,canvasBoxMax1],[canvasBoxMin0,canvasBoxMin1],diagCanvasBoxVec);var diagCanvasBoxSize=SceneJS_math_lenVec2(diagCanvasBoxVec);if(canvasBoxMin0<0){canvasBoxMin0=0;}if(canvasBoxMax0>viewport2){canvasBoxMax0=viewport2;}if(canvasBoxMin1<0){canvasBoxMin1=0;}if(canvasBoxMax1>viewport3){canvasBoxMax1=viewport3;}return{canvasBox:{min:[canvasBoxMin0,canvasBoxMin1],max:[canvasBoxMax0,canvasBoxMax1]},canvasSize:diagCanvasBoxSize};};};var SceneJS_math_identityQuaternion=function SceneJS_math_identityQuaternion(){return[0.0,0.0,0.0,1.0];};var SceneJS_math_angleAxisQuaternion=function SceneJS_math_angleAxisQuaternion(x,y,z,degrees){var angleRad=degrees/180.0*Math.PI;var halfAngle=angleRad/2.0;var fsin=Math.sin(halfAngle);return[fsin*x,fsin*y,fsin*z,Math.cos(halfAngle)];};var SceneJS_math_mulQuaternions=function SceneJS_math_mulQuaternions(p,q){var p0=p[0],p1=p[1],p2=p[2],p3=p[3];var q0=q[0],q1=q[1],q2=q[2],q3=q[3];return[p3*q0+p0*q3+p1*q2-p2*q1,p3*q1+p1*q3+p2*q0-p0*q2,p3*q2+p2*q3+p0*q1-p1*q0,p3*q3-p0*q0-p1*q1-p2*q2];};var SceneJS_math_newMat4FromQuaternion=function SceneJS_math_newMat4FromQuaternion(q){var q0=q[0],q1=q[1],q2=q[2],q3=q[3];var tx=2.0*q0;var ty=2.0*q1;var tz=2.0*q2;var twx=tx*q3;var twy=ty*q3;var twz=tz*q3;var txx=tx*q0;var txy=ty*q0;var txz=tz*q0;var tyy=ty*q1;var tyz=tz*q1;var tzz=tz*q2;var m=SceneJS_math_identityMat4();SceneJS_math_setCellMat4(m,0,0,1.0-(tyy+tzz));SceneJS_math_setCellMat4(m,0,1,txy-twz);SceneJS_math_setCellMat4(m,0,2,txz+twy);SceneJS_math_setCellMat4(m,1,0,txy+twz);SceneJS_math_setCellMat4(m,1,1,1.0-(txx+tzz));SceneJS_math_setCellMat4(m,1,2,tyz-twx);SceneJS_math_setCellMat4(m,2,0,txz-twy);SceneJS_math_setCellMat4(m,2,1,tyz+twx);SceneJS_math_setCellMat4(m,2,2,1.0-(txx+tyy));return m;};//var SceneJS_math_slerp(t, q1, q2) {
//    var result = SceneJS_math_identityQuaternion();
//    var cosHalfAngle = q1[3] * q2[3] + q1[0] * q2[0] + q1[1] * q2[1] + q1[2] * q2[2];
//    if (Math.abs(cosHalfAngle) >= 1) {
//        return [ q1[0],q1[1], q1[2], q1[3] ];
//    } else {
//        var halfAngle = Math.acos(cosHalfAngle);
//        var sinHalfAngle = Math.sqrt(1 - cosHalfAngle * cosHalfAngle);
//        if (Math.abs(sinHalfAngle) < 0.001) {
//            return [
//                q1[0] * 0.5 + q2[0] * 0.5,
//                q1[1] * 0.5 + q2[1] * 0.5,
//                q1[2] * 0.5 + q2[2] * 0.5,
//                q1[3] * 0.5 + q2[3] * 0.5
//            ];
//        } else {
//            var a = Math.sin((1 - t) * halfAngle) / sinHalfAngle;
//            var b = Math.sin(t * halfAngle) / sinHalfAngle;
//            return [
//                q1[0] * a + q2[0] * b,
//                q1[1] * a + q2[1] * b,
//                q1[2] * a + q2[2] * b,
//                q1[3] * a + q2[3] * b
//            ];
//        }
//    }
//}
var SceneJS_math_slerp=function SceneJS_math_slerp(t,q1,q2){//var result = SceneJS_math_identityQuaternion();
var q13=q1[3]*0.0174532925;var q23=q2[3]*0.0174532925;var cosHalfAngle=q13*q23+q1[0]*q2[0]+q1[1]*q2[1]+q1[2]*q2[2];if(Math.abs(cosHalfAngle)>=1){return[q1[0],q1[1],q1[2],q1[3]];}else{var halfAngle=Math.acos(cosHalfAngle);var sinHalfAngle=Math.sqrt(1-cosHalfAngle*cosHalfAngle);if(Math.abs(sinHalfAngle)<0.001){return[q1[0]*0.5+q2[0]*0.5,q1[1]*0.5+q2[1]*0.5,q1[2]*0.5+q2[2]*0.5,q1[3]*0.5+q2[3]*0.5];}else{var a=Math.sin((1-t)*halfAngle)/sinHalfAngle;var b=Math.sin(t*halfAngle)/sinHalfAngle;return[q1[0]*a+q2[0]*b,q1[1]*a+q2[1]*b,q1[2]*a+q2[2]*b,(q13*a+q23*b)*57.295779579];}}};var SceneJS_math_normalizeQuaternion=function SceneJS_math_normalizeQuaternion(q){var len=SceneJS_math_lenVec4([q[0],q[1],q[2],q[3]]);return[q[0]/len,q[1]/len,q[2]/len,q[3]/len];};var SceneJS_math_conjugateQuaternion=function SceneJS_math_conjugateQuaternion(q){return[-q[0],-q[1],-q[2],q[3]];};var SceneJS_math_angleAxisFromQuaternion=function SceneJS_math_angleAxisFromQuaternion(q){q=SceneJS_math_normalizeQuaternion(q);var q3=q[3];var angle=2*Math.acos(q3);var s=Math.sqrt(1-q3*q3);if(s<0.001){// test to avoid divide by zero, s is always positive due to sqrt
return{x:q[0],y:q[1],z:q[2],angle:angle*57.295779579};}else{return{x:q[0]/s,y:q[1]/s,z:q[2]/s,angle:angle*57.295779579};}};/**
 * Backend that tracks statistics on loading states of nodes during scene traversal.
 *
 * This supports the "loading-status" events that we can listen for on scene nodes.
 *
 * When a node with that listener is pre-visited, it will call getStatus on this module to
 * save a copy of the status. Then when it is post-visited, it will call diffStatus on this
 * module to find the status for its sub-nodes, which it then reports through the "loading-status" event.
 *
 * @private
 */var SceneJS_sceneStatusModule=new function(){// Public activity summary
this.sceneStatus={};// IDs of all tasks
var taskIds=new SceneJS_Map();var tasks={};var sceneStates={};var self=this;SceneJS_events.addListener(SceneJS_events.SCENE_DESTROYED,function(params){var sceneId=params.engine.id;delete self.sceneStatus[sceneId];delete sceneStates[sceneId];});/** Notifies that a node has begun loading some data
     */this.taskStarted=function(node,description){var popups=SceneJS_configsModule.configs.statusPopups!==false;var scene=node.getScene();var sceneId=scene.getId();var nodeId=node.getId();var canvas=scene.getCanvas();var taskId=taskIds.addItem();// Update public info
var status=this.sceneStatus[sceneId];if(!status){status=this.sceneStatus[sceneId]={numTasks:0};}status.numTasks++;// Track node
var sceneState=sceneStates[sceneId];if(!sceneState){sceneState=sceneStates[sceneId]={sceneId:sceneId,nodeStates:{},scene:scene,popupContainer:popups?createPopupContainer(canvas):null,descCounts:{}};}var descCount=sceneState.descCounts[description];if(descCount==undefined){descCount=sceneState.descCounts[description]=0;}sceneState.descCounts[description]++;var nodeState=sceneState.nodeStates[nodeId];if(!nodeState){nodeState=sceneState.nodeStates[nodeId]={nodeId:nodeId,numTasks:0,tasks:{}};}description=description+" "+sceneState.descCounts[description]+"...";nodeState.numTasks++;var task={sceneState:sceneState,nodeState:nodeState,description:description,element:popups?createPopup(sceneState.popupContainer,description):null};nodeState.tasks[taskId]=task;tasks[taskId]=task;return taskId;};function createPopupContainer(canvas){var body=document.getElementsByTagName("body")[0];var div=document.createElement('div');var style=div.style;style.position="absolute";style.width="200px";style.right="10px";style.top="0";style.padding="10px";style["z-index"]="10000";body.appendChild(div);return div;}function createPopup(popupContainer,description){var div=document.createElement('div');var style=div.style;style["font-family"]="Helvetica";style["font-size"]="14px";style.padding="5px";style.margin="4px";style["padding-left"]="12px";style["border"]="1px solid #000055";style.color="black";style.background="#AAAAAA";style.opacity="0.8";style["border-radius"]="3px";style["-moz-border-radius"]="3px";style["box-shadow"]="3px 3px 3px #444444";div.innerHTML=description;popupContainer.appendChild(div);return div;}/** Notifies that a load has finished loading some data
     */this.taskFinished=function(taskId){if(taskId==-1||taskId==null){return null;}var task=tasks[taskId];if(!task){return null;}var sceneState=task.sceneState;this.sceneStatus[sceneState.sceneId].numTasks--;if(task.element){dismissPopup(task.element);}var nodeState=task.nodeState;if(--nodeState.numTasks<0){nodeState.numTasks=0;}delete nodeState.tasks[taskId];if(nodeState.numTasks==0){delete sceneState.nodeStates[nodeState.nodeId];}return null;};function dismissPopup(element){element.style.background="#AAFFAA";var opacity=0.8;var interval=setInterval(function(){if(opacity<=0){element.parentNode.removeChild(element);clearInterval(interval);}else{element.style.opacity=opacity;opacity-=0.1;}},100);}/** Notifies that a task has failed
     */this.taskFailed=function(taskId){if(taskId==-1||taskId==null){return null;}var task=tasks[taskId];if(!task){return null;}var popups=!!SceneJS_configsModule.configs.statusPopups;var sceneState=task.sceneState;this.sceneStatus[sceneState.sceneId].numTasks--;if(popups){failPopup(task.element);}var nodeState=task.nodeState;nodeState.numTasks--;delete nodeState.tasks[taskId];if(nodeState.numTasks==0){delete task.sceneState.nodeStates[nodeState.nodeId];}return null;};function failPopup(element){element.style.background="#FFAAAA";}}();SceneJS._webgl={};/** Buffer for vertices and indices
 *
 * @private
 * @param gl  WebGL gl
 * @param type     Eg. ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
 * @param values   WebGL array wrapper
 * @param numItems Count of items in array wrapper
 * @param itemSize Size of each item
 * @param usage    Eg. STATIC_DRAW
 */SceneJS._webgl.ArrayBuffer=function(gl,type,values,numItems,itemSize,usage){this.gl=gl;this.type=type;this.itemSize=itemSize;this._allocate=function(values,numItems){this.handle=gl.createBuffer();this.handle.numItems=numItems;this.handle.itemSize=itemSize;gl.bindBuffer(type,this.handle);gl.bufferData(type,values,usage);this.handle.numItems=numItems;gl.bindBuffer(type,null);this.numItems=numItems;this.length=values.length;};this._allocate(values,numItems);this.setData=function(data,offset){if(data.length>this.length){this.destroy();this._allocate(data,data.length);}else{if(offset||offset===0){gl.bufferSubData(type,offset,data);}else{gl.bufferData(type,data);}}};this.unbind=function(){gl.bindBuffer(type,null);};this.destroy=function(){gl.deleteBuffer(this.handle);};};SceneJS._webgl.ArrayBuffer.prototype.bind=function(){this.gl.bindBuffer(this.type,this.handle);};/** An attribute within a shader
 */SceneJS._webgl.Attribute=function(gl,program,name,type,size,location){this.gl=gl;this.location=location;this.bindFloatArrayBuffer=function(buffer){if(buffer){buffer.bind();gl.enableVertexAttribArray(location);gl.vertexAttribPointer(location,buffer.itemSize,gl.FLOAT,false,0,0);// Vertices are not homogeneous - no w-element
}};};SceneJS._webgl.Attribute.prototype.bindInterleavedFloatArrayBuffer=function(components,stride,byteOffset){this.gl.enableVertexAttribArray(this.location);this.gl.vertexAttribPointer(this.location,components,this.gl.FLOAT,false,stride,byteOffset);// Vertices are not homogeneous - no w-element
};/** Maps SceneJS node parameter names to WebGL enum names
 * @private
 */SceneJS._webgl.enumMap={funcAdd:"FUNC_ADD",funcSubtract:"FUNC_SUBTRACT",funcReverseSubtract:"FUNC_REVERSE_SUBTRACT",zero:"ZERO",one:"ONE",srcColor:"SRC_COLOR",oneMinusSrcColor:"ONE_MINUS_SRC_COLOR",dstColor:"DST_COLOR",oneMinusDstColor:"ONE_MINUS_DST_COLOR",srcAlpha:"SRC_ALPHA",oneMinusSrcAlpha:"ONE_MINUS_SRC_ALPHA",dstAlpha:"DST_ALPHA",oneMinusDstAlpha:"ONE_MINUS_DST_ALPHA",contantColor:"CONSTANT_COLOR",oneMinusConstantColor:"ONE_MINUS_CONSTANT_COLOR",constantAlpha:"CONSTANT_ALPHA",oneMinusConstantAlpha:"ONE_MINUS_CONSTANT_ALPHA",srcAlphaSaturate:"SRC_ALPHA_SATURATE",front:"FRONT",back:"BACK",frontAndBack:"FRONT_AND_BACK",never:"NEVER",less:"LESS",equal:"EQUAL",lequal:"LEQUAL",greater:"GREATER",notequal:"NOTEQUAL",gequal:"GEQUAL",always:"ALWAYS",cw:"CW",ccw:"CCW",linear:"LINEAR",nearest:"NEAREST",linearMipMapNearest:"LINEAR_MIPMAP_NEAREST",nearestMipMapNearest:"NEAREST_MIPMAP_NEAREST",nearestMipMapLinear:"NEAREST_MIPMAP_LINEAR",linearMipMapLinear:"LINEAR_MIPMAP_LINEAR",repeat:"REPEAT",clampToEdge:"CLAMP_TO_EDGE",mirroredRepeat:"MIRRORED_REPEAT",alpha:"ALPHA",rgb:"RGB",rgba:"RGBA",luminance:"LUMINANCE",luminanceAlpha:"LUMINANCE_ALPHA",textureBinding2D:"TEXTURE_BINDING_2D",textureBindingCubeMap:"TEXTURE_BINDING_CUBE_MAP",compareRToTexture:"COMPARE_R_TO_TEXTURE",// Hardware Shadowing Z-depth,
unsignedByte:"UNSIGNED_BYTE"};SceneJS._webgl.RenderBuffer=function(cfg){var canvas=cfg.canvas;var gl=canvas.gl;var buf;var bound=false;/**
     * Called after WebGL context is restored.
     */this.webglRestored=function(_gl){gl=_gl;buf=null;};/** Binds this renderbuffer
     */this.bind=function(){this._touch();if(bound){return;}gl.bindFramebuffer(gl.FRAMEBUFFER,buf.framebuf);bound=true;};this._touch=function(){var width=canvas.canvas.width;var height=canvas.canvas.height;if(buf){// Currently have a buffer
if(buf.width==width&&buf.height==height){// Canvas size unchanged, buffer still good
return;}else{// Buffer needs reallocation for new canvas size
gl.deleteTexture(buf.texture);gl.deleteFramebuffer(buf.framebuf);gl.deleteRenderbuffer(buf.renderbuf);}}buf={framebuf:gl.createFramebuffer(),renderbuf:gl.createRenderbuffer(),texture:gl.createTexture(),width:width,height:height};gl.bindFramebuffer(gl.FRAMEBUFFER,buf.framebuf);gl.bindTexture(gl.TEXTURE_2D,buf.texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);try{// Do it the way the spec requires
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,width,height,0,gl.RGBA,gl.UNSIGNED_BYTE,null);}catch(exception){// Workaround for what appears to be a Minefield bug.
var textureStorage=new WebGLUnsignedByteArray(width*height*3);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,width,height,0,gl.RGBA,gl.UNSIGNED_BYTE,textureStorage);}gl.bindRenderbuffer(gl.RENDERBUFFER,buf.renderbuf);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,width,height);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,buf.texture,0);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,buf.renderbuf);gl.bindTexture(gl.TEXTURE_2D,null);gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,null);// Verify framebuffer is OK
gl.bindFramebuffer(gl.FRAMEBUFFER,buf.framebuf);if(!gl.isFramebuffer(buf.framebuf)){throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Invalid framebuffer");}var status=gl.checkFramebufferStatus(gl.FRAMEBUFFER);switch(status){case gl.FRAMEBUFFER_COMPLETE:break;case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");case gl.FRAMEBUFFER_UNSUPPORTED:throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");default:throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Incomplete framebuffer: "+status);}bound=false;};/** Clears this renderbuffer
     */this.clear=function(){if(!bound){throw"Render buffer not bound";}gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.disable(gl.BLEND);};/** Reads buffer pixel at given coordinates
     */this.read=function(pickX,pickY){var x=pickX;var y=canvas.canvas.height-pickY;var pix=new Uint8Array(4);gl.readPixels(x,y,1,1,gl.RGBA,gl.UNSIGNED_BYTE,pix);return pix;};/** Unbinds this renderbuffer
     */this.unbind=function(){gl.bindFramebuffer(gl.FRAMEBUFFER,null);bound=false;};/** Returns the texture
     */this.getTexture=function(){return{bind:function bind(unit){if(buf&&buf.texture){gl.activeTexture(gl["TEXTURE"+unit]);gl.bindTexture(gl.TEXTURE_2D,buf.texture);return true;}return false;},unbind:function unbind(unit){if(buf&&buf.texture){gl.activeTexture(gl["TEXTURE"+unit]);gl.bindTexture(gl.TEXTURE_2D,null);}}};};};/**
 * @class Wrapper for a WebGL program
 *
 * @param hash SceneJS-managed ID for program
 * @param gl WebGL gl
 * @param vertexSources Source codes for vertex shaders
 * @param fragmentSources Source codes for fragment shaders
 * @param logging Program and shaders will write to logging's debug channel as they compile and link
 */SceneJS._webgl.Program=function(gl,vertexSources,fragmentSources){var a,i,u,u_name,location,shader;this._uniforms={};this._samplers={};this._attributes={};this.materialSettings={specularColor:[0,0,0],specular:0,shine:0,emit:0,alpha:0};/* Create shaders from sources
     */this._shaders=[];for(i=0;i<vertexSources.length;i++){this._shaders.push(new SceneJS._webgl.Shader(gl,gl.VERTEX_SHADER,vertexSources[i]));}for(i=0;i<fragmentSources.length;i++){this._shaders.push(new SceneJS._webgl.Shader(gl,gl.FRAGMENT_SHADER,fragmentSources[i]));}/* Create program, attach shaders, link and validate program
     */var handle=gl.createProgram();for(i=0;i<this._shaders.length;i++){shader=this._shaders[i];if(shader.valid){gl.attachShader(handle,shader.handle);}}gl.linkProgram(handle);//this.valid = (gl.getProgramParameter(handle, gl.LINK_STATUS) != 0);
var debugCfg=SceneJS_configsModule.getConfigs("shading");//    if (debugCfg.validate !== false) {
//        gl.validateProgram(handle);
//        this.valid = this.valid && (gl.getProgramParameter(handle, gl.VALIDATE_STATUS) != 0);
//    }
if(false){ var j, lines; }/* Discover active uniforms and samplers
     */var numUniforms=gl.getProgramParameter(handle,gl.ACTIVE_UNIFORMS);this.uniformValues=[];var valueIndex=0;for(i=0;i<numUniforms;++i){u=gl.getActiveUniform(handle,i);if(u){u_name=u.name;if(u_name[u_name.length-1]=="\0"){u_name=u_name.substr(0,u_name.length-1);}location=gl.getUniformLocation(handle,u_name);if(u.type==gl.SAMPLER_2D||u.type==gl.SAMPLER_CUBE||u.type==35682){this._samplers[u_name]=new SceneJS._webgl.Sampler(gl,handle,u_name,u.type,u.size,location);}else{this._uniforms[u_name]=new SceneJS._webgl.Uniform(gl,handle,u_name,u.type,u.size,location,valueIndex);this.uniformValues[valueIndex]=null;++valueIndex;}}}/* Discover attributes
     */var numAttribs=gl.getProgramParameter(handle,gl.ACTIVE_ATTRIBUTES);for(i=0;i<numAttribs;i++){a=gl.getActiveAttrib(handle,i);if(a){location=gl.getAttribLocation(handle,a.name);this._attributes[a.name]=new SceneJS._webgl.Attribute(gl,handle,a.name,a.type,a.size,location);}}this.setProfile=function(profile){this._profile=profile;};this.bind=function(){gl.useProgram(handle);if(this._profile){this._profile.program++;}};this.getUniformLocation=function(name){var u=this._uniforms[name];if(u){return u.getLocation();}else{// SceneJS.log.warn("Uniform not found in shader : " + name);
}};this.getUniform=function(name){var u=this._uniforms[name];if(u){return u;}else{//      SceneJS.log.warn("Shader uniform load failed - uniform not found in shader : " + name);
}};this.getAttribute=function(name){var attr=this._attributes[name];if(attr){return attr;}else{//  logging.warn("Shader attribute bind failed - attribute not found in shader : " + name);
}};this.bindFloatArrayBuffer=function(name,buffer){var attr=this._attributes[name];if(attr){attr.bindFloatArrayBuffer(buffer);if(this._profile){this._profile.varying++;}}else{//  logging.warn("Shader attribute bind failed - attribute not found in shader : " + name);
}};this.bindTexture=function(name,texture,unit){var sampler=this._samplers[name];if(sampler){if(this._profile){this._profile.texture++;}return sampler.bindTexture(texture,unit);}else{return false;}};this.destroy=function(){if(this.valid){//   SceneJS.log.debug("Destroying shader program: '" + hash + "'");
gl.deleteProgram(handle);for(var s in this._shaders){gl.deleteShader(this._shaders[s].handle);}this._attributes=null;this._uniforms=null;this._samplers=null;this.valid=false;}};};SceneJS._webgl.Program.prototype.setUniform=function(name,value){var u=this._uniforms[name];if(u){if(this.uniformValues[u.index]!==value||!u.numberValue){u.setValue(value);if(this._profile){this._profile.uniform++;}this.uniformValues[u.index]=value;}}else{//      SceneJS.log.warn("Shader uniform load failed - uniform not found in shader : " + name);
}};SceneJS._webgl.Sampler=function(gl,program,name,type,size,location){this.bindTexture=function(texture,unit){if(texture.bind(unit)){gl.uniform1i(location,unit);return true;}return false;};};/**
 * A vertex/fragment shader in a program
 *
 * @private
 * @param gl WebGL gl
 * @param gl.VERTEX_SHADER | gl.FRAGMENT_SHADER
 * @param source Source code for shader
 * @param logging Shader will write logging's debug channel as it compiles
 */SceneJS._webgl.Shader=function(gl,type,source){this.handle=gl.createShader(type);gl.shaderSource(this.handle,source);gl.compileShader(this.handle);this.valid=gl.getShaderParameter(this.handle,gl.COMPILE_STATUS)!=0;if(!this.valid){if(!gl.isContextLost()){// Handled explicitely elsewhere, so wont rehandle here
SceneJS.log.error("Shader program failed to compile: "+gl.getShaderInfoLog(this.handle));SceneJS.log.error("Shader source:");var lines=source.split('\n');for(var j=0;j<lines.length;j++){SceneJS.log.error(lines[j]);}throw SceneJS_error.fatalError(SceneJS.errors.SHADER_COMPILATION_FAILURE,"Shader program failed to compile");}}};SceneJS._webgl.Texture2D=function(gl,cfg){this.target=cfg.target||gl.TEXTURE_2D;this.minFilter=cfg.minFilter;this.magFilter=cfg.magFilter;this.wrapS=cfg.wrapS;this.wrapT=cfg.wrapT;this.update=cfg.update;// For dynamically-sourcing textures (ie movies etc)
this.texture=cfg.texture;this.format=gl.RGBA;this.isDepth=false;this.depthMode=0;this.depthCompareMode=0;this.depthCompareFunc=0;try{gl.bindTexture(this.target,this.texture);if(cfg.minFilter){gl.texParameteri(this.target,gl.TEXTURE_MIN_FILTER,cfg.minFilter);}if(cfg.magFilter){gl.texParameteri(this.target,gl.TEXTURE_MAG_FILTER,cfg.magFilter);}if(cfg.wrapS){gl.texParameteri(this.target,gl.TEXTURE_WRAP_S,cfg.wrapS);}if(cfg.wrapT){gl.texParameteri(this.target,gl.TEXTURE_WRAP_T,cfg.wrapT);}if(cfg.minFilter==gl.NEAREST_MIPMAP_NEAREST||cfg.minFilter==gl.LINEAR_MIPMAP_NEAREST||cfg.minFilter==gl.NEAREST_MIPMAP_LINEAR||cfg.minFilter==gl.LINEAR_MIPMAP_LINEAR){gl.generateMipmap(this.target);}gl.bindTexture(this.target,null);}catch(e){throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Failed to create texture: "+e.message||e);}this.bind=function(unit){if(this.texture){gl.activeTexture(gl["TEXTURE"+unit]);gl.bindTexture(this.target,this.texture);if(this.update){this.update(gl);}return true;}return false;};this.unbind=function(unit){if(this.texture){gl.activeTexture(gl["TEXTURE"+unit]);gl.bindTexture(this.target,null);}};this.destroy=function(){if(this.texture){gl.deleteTexture(this.texture);this.texture=null;}};};SceneJS._webgl.ensureImageSizePowerOfTwo=function(image){if(!SceneJS._webgl.isPowerOfTwo(image.width)||!SceneJS._webgl.isPowerOfTwo(image.height)){var canvas=document.createElement("canvas");canvas.width=SceneJS._webgl.nextHighestPowerOfTwo(image.width);canvas.height=SceneJS._webgl.nextHighestPowerOfTwo(image.height);var ctx=canvas.getContext("2d");ctx.drawImage(image,0,0,image.width,image.height,0,0,canvas.width,canvas.height);image=canvas;}return image;};SceneJS._webgl.isPowerOfTwo=function(x){return(x&x-1)==0;};SceneJS._webgl.nextHighestPowerOfTwo=function(x){--x;for(var i=1;i<32;i<<=1){x=x|x>>i;}return x+1;};SceneJS._webgl.Uniform=function(gl,program,name,type,size,location,index,logging){var func=null;this.numberValue=false;if(type==gl.BOOL){this.numberValue=true;func=function func(v){gl.uniform1i(location,v);};}else if(type==gl.BOOL_VEC2){func=function func(v){gl.uniform2iv(location,v);};}else if(type==gl.BOOL_VEC3){func=function func(v){gl.uniform3iv(location,v);};}else if(type==gl.BOOL_VEC4){func=function func(v){gl.uniform4iv(location,v);};}else if(type==gl.INT){this.numberValue=true;func=function func(v){gl.uniform1iv(location,v);};}else if(type==gl.INT_VEC2){func=function func(v){gl.uniform2iv(location,v);};}else if(type==gl.INT_VEC3){func=function func(v){gl.uniform3iv(location,v);};}else if(type==gl.INT_VEC4){func=function func(v){gl.uniform4iv(location,v);};}else if(type==gl.FLOAT){this.numberValue=true;func=function func(v){gl.uniform1f(location,v);};}else if(type==gl.FLOAT_VEC2){func=function func(v){gl.uniform2fv(location,v);};}else if(type==gl.FLOAT_VEC3){func=function func(v){gl.uniform3fv(location,v);};}else if(type==gl.FLOAT_VEC4){func=function func(v){gl.uniform4fv(location,v);};}else if(type==gl.FLOAT_MAT2){func=function func(v){gl.uniformMatrix2fv(location,gl.FALSE,v);};}else if(type==gl.FLOAT_MAT3){func=function func(v){gl.uniformMatrix3fv(location,gl.FALSE,v);};}else if(type==gl.FLOAT_MAT4){func=function func(v){gl.uniformMatrix4fv(location,gl.FALSE,v);};}else{throw"Unsupported shader uniform type: "+type;}this.setValue=func;this.getValue=function(){return gl.getUniform(program,location);};this.getLocation=function(){return location;};// This is just an integer key for caching the uniform's value, more efficient than caching by name.
this.index=index;};/**
 * Manages scene node event listeners
 * @private
 */var SceneJS_nodeEventsModule=new function(){var idStack=[];var listenerStack=[];var stackLen=0;var dirty;var defaultCore={type:"listeners",stateId:SceneJS._baseStateId++,empty:true,listeners:[]};SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(){stackLen=0;dirty=true;});SceneJS_events.addListener(SceneJS_events.OBJECT_COMPILING,function(params){if(dirty){if(stackLen>0){var core={type:"listeners",stateId:idStack[stackLen-1],listeners:listenerStack.slice(0,stackLen)};params.display.renderListeners=core;}else{params.display.renderListeners=defaultCore;}dirty=false;}});this.preVisitNode=function(node){var renderedSubs=node._topicSubs["rendered"];// DEPRECATED in V3.2
var worldPosSubs=node._topicSubs["worldPos"];var viewPosSubs=node._topicSubs["viewPos"];var cameraPosSubs=node._topicSubs["cameraPos"];var projPosSubs=node._topicSubs["projPos"];var canvasPosSubs=node._topicSubs["canvasPos"];if(renderedSubs||worldPosSubs||viewPosSubs||cameraPosSubs||projPosSubs||canvasPosSubs){idStack[stackLen]=node.id;listenerStack[stackLen]=function(event){// Don't retain - callback must get positions for
// required coordinate via methods on the event object.
// That's dirty, therefore deprecated.
if(renderedSubs){node.publish("rendered",event,true);// DEPRECATED in V3.2
}// Publish retained positions for coordinate systems where subscribed
if(worldPosSubs){node.publish("worldPos",event.getWorldPos());}if(viewPosSubs){node.publish("viewPos",event.getViewPos());}if(cameraPosSubs){node.publish("cameraPos",event.getCameraPos());}if(projPosSubs){node.publish("projPos",event.getProjPos());}if(canvasPosSubs){node.publish("canvasPos",event.getCanvasPos());}};stackLen++;dirty=true;}};this.postVisitNode=function(node){if(node.id==idStack[stackLen-1]){stackLen--;dirty=true;}};}();/**
 * @class Holds state for one or more {@link SceneJS.Node}s.
 *
 * <p>Each {@link SceneJS.Node} has a state core to hold its state, and the core may be shared by other
 * {@link SceneJS.Nodes}s of the same type.</p>
 *
 * <p>The state held by core is rendered by a {@link SceneJS_Chunk}  
 *
 * @private
 */var SceneJS_Core=function SceneJS_Core(type){/**
     * The state core type, which will be the same value as the type property on the {@link SceneJS.Node}s that use the core
     * @type String
     * @see SceneJS.Node#type
     */this.type=type;/**
     * The state core ID, unique within the scene. This ID may be either a string assigned by the application layer via
     * scene node configs, or a number that is automatically generated by the {@link SceneJS_CoreFactory} managing
     * this core instance.
     * @type String|Number
     */this.coreId=null;/**
     * Uniquely identifies this state core within a {@link SceneJS_Display}.
     *
     * This ID is used by a {@link SceneJS_Display} to reduce redundant state changes when rendering a sequence of cores, 
     * where as a {@link SceneJS_Display} renders a frame it avoids applying consecutive cores that have the
     * same value for this ID.
     *
     * @type Number
     */this.stateId=null;/**
     * Count of {@link SceneJS.Node} instances this core holds state for
     */this.useCount=0;};/**
 * @class Manages creation, recycle and destruction of {@link SceneJS_Core} instances
 * @private
 */var SceneJS_CoreFactory=function SceneJS_CoreFactory(){this._stateMap=new SceneJS_Map(null,SceneJS._baseStateId);// For creating unique state IDs for cores
this._cores={};// Map of cores for each type
};/**
 * State core classes provided by this factory
 * @type {SceneJS.Core}
 */SceneJS_CoreFactory.coreTypes={};// Supported core classes, installed by #createCoreType
/**
 * Creates a core class for instantiation by this factory
 * @param {String} type Name of type, eg. "camera"
 * @param {Node} [superType] Class of super type - SceneJS.Node by default
 * @returns The new node class
 */SceneJS_CoreFactory.createCoreType=function(type,superType){//
//    var supa = SceneJS_CoreFactory.coreTypes[superType];
//
//    if (!supa) {
//        supa = SceneJS.Core; // Super class is Core by default
//    }
//
//    var nodeType = function() { // Create the class
//        supa.apply(this, arguments);
//        this.type = type;
//    };
//
//    nodeType.prototype = new supa();            // Inherit from base class
//    nodeType.prototype.constructor = nodeType;
//
//    SceneJS_CoreFactory.nodeTypes[type] = nodeType;
//
//    return nodeType;
};SceneJS_CoreFactory.addCoreBuilder=function(type,factory){};/* HACK - allows different types of node to have same type of core, eg. "rotate" and "translate" nodes can both have an "xform" core    
 */SceneJS_CoreFactory.coreAliases={"rotate":"xform","translate":"xform","scale":"xform","matrix":"xform","xform":"xform"};/**
 * Gets a core of the given type from this factory. Reuses any existing existing core of the same type and ID.
 *
 * The caller (a scene node) will then augment the core with type-specific attributes and methods.
 *
 * @param {String} type Type name of core, e.g. "material", "texture"
 * @param {String} coreId ID for the core, unique among all cores of the given type within this factory
 * @returns {Core} The core
 */SceneJS_CoreFactory.prototype.getCore=function(type,coreId){/* HACK - allows different types of node to have same type of core, eg. "rotate" and "translate" nodes can both have an "xform" core    
     */var alias=SceneJS_CoreFactory.coreAliases[type];if(alias){type=alias;}var cores=this._cores[type];if(!cores){cores=this._cores[type]={};}var core;if(coreId){// Attempt to reuse a core
core=cores[coreId];if(core){core.useCount++;return core;}}core=new SceneJS_Core(type);core.useCount=1;// One user so far
core.stateId=this._stateMap.addItem(core);core.coreId=coreId!=undefined&&coreId!=null?coreId:core.stateId;// Use state ID as core ID by default
cores[core.coreId]=core;return core;};/**
 * Tests if a core of the given type and ID currently exists within this factory.
 *
 * @param {String} type Type name of core, e.g. "material", "texture"
 * @param {String} coreId ID for the core, unique among all cores of the given type within this factory
 * @returns {Boolean} True if the core exists
 */SceneJS_CoreFactory.prototype.hasCore=function(type,coreId){// HACK - allows different types of node to have same type of core, eg. "rotate" and "translate" nodes can both have an "xform" core
var alias=SceneJS_CoreFactory.coreAliases[type];if(alias){type=alias;}var cores=this._cores[type];return cores&&cores[coreId];};/**
 * Releases a state core back to this factory, destroying it if the core's use count is then zero.
 * @param {Core} core Core to release
 */SceneJS_CoreFactory.prototype.putCore=function(core){if(core.useCount==0){return;// In case of excess puts
}if(--core.useCount<=0){// Release shared core if use count now zero
var cores=this._cores[core.type];cores[core.coreId]=null;this._stateMap.removeItem(core.stateId);// Release state ID for reuse
}};/**
 * Reallocates WebGL resources for cores within this factory
 */SceneJS_CoreFactory.prototype.webglRestored=function(){var cores;var core;for(var type in this._cores){if(this._cores.hasOwnProperty(type)){cores=this._cores[type];if(cores){for(var coreId in cores){if(cores.hasOwnProperty(coreId)){core=cores[coreId];if(core.webglRestored){// Method augmented on core by user
core.webglRestored();}}}}}}};/**
 * @class The basic scene graph node type
 */SceneJS.Node=function(){};/**
 * @class Basic scene graph node
 */SceneJS.Node.prototype.constructor=SceneJS.Node;/**
 * Called by SceneJS_Engine after it has instantiated the node
 *
 * @param {SceneJS_Engine} engine The engine which will manage this node
 * @param {SceneJS_Core} core The core which will hold state for this node, may be shared with other nodes of the same type
 * @param cfg Configuration for this node
 * @param {String} cfg.id ID for the node, unique among all nodes in the scene
 * @param {String} cfg.type type Type of this node (eg. "material", "texture" etc)
 * @param {Object} cfg.data Optional arbitrary JSON object to attach to node
 * @param {String} nodeId Optional ID for node
 */SceneJS.Node.prototype._construct=function(engine,core,cfg,nodeId){/**
     * Engine that manages this node
     * @type SceneJS_Engine
     */this._engine=engine;/**
     * The core which holds state for this node, may be shared with other nodes of the same type
     * @type SceneJS_Core
     */this._core=core;/**
     * The core ID
     * @type {String|Number}
     */this.coreId=core.coreId;/**
     * ID of this node, unique within its scene. The ID is a string if it was defined by the application
     * via the node's JSON configuration, otherwise it is a number if it was left to SceneJS to automatically create.
     * @type String|Number
     */this.id=cfg.id||cfg.nodeId||nodeId;/**
     * Type of this node (eg. "material", "texture" etc)
     * @type String
     */this.type=cfg.type||"node";/**
     * Optional arbitrary JSON object attached to this node
     * @type JSON
     */this.data=cfg.data;/**
     * Parent node
     * @type SceneJS.Node
     */this.parent=null;/**
     * Child nodes
     * @type SceneJS.Node[]
     */this.nodes=[];// Pub/sub support
this._handleMap=new SceneJS_Map();// Subscription handle pool
this._topicSubs={};// A [handle -> callback] map for each topic name
this._handleTopics={};// Maps handles to topic names
this._topicPubs={};// Maps topics to publications
/**
     *
     */this._listeners={};/**
     *
     */this._numListeners=0;// Useful for quick check whether node observes any events
/**
     *
     */this.dirty=false;/**
     *
     */this.branchDirty=false;if(this._init){this._init(cfg);}};/**
 * Notifies that an asynchronous task has started on this node
 * @param {String} [description] Description - will be "Task" by default
 * @return {String} Unique ID for the task, which may be given to {@link #taskFinished} or {@link #taskFailed}
 */SceneJS.Node.prototype.taskStarted=function(description){return SceneJS_sceneStatusModule.taskStarted(this,description||"Task");};/**
 * Notifies that a task, whose initiation was previously notified with {@link #taskStarted},
 * has now completed successfully.
 * @param {String} taskId Unique ID for the task, which was got with {@link #taskStarted}
 * @return null
 */SceneJS.Node.prototype.taskFinished=function(taskId){return SceneJS_sceneStatusModule.taskFinished(taskId);};/**
 * Notifies that a task, whose initiation was previously notified with {@link #taskStarted},
 * has failed.
 * @param {String} taskId Unique ID for the task, which was got with {@link #taskStarted}
 * @return null
 */SceneJS.Node.prototype.taskFailed=function(taskId){return SceneJS_sceneStatusModule.taskFailed(taskId);};/**
 * Logs a message in the context of this node
 * @param {String} [channel] Logging channel - "error", "warn" or "info" (default)
 * @param {String} msg Message to log
 */SceneJS.Node.prototype.log=function(){var channel;var msg;if(arguments.length==1){channel="info";msg=arguments[0];}else if(arguments.length==2){channel=arguments[0];msg=arguments[1];}switch(channel){case"warn":msg="WARN;  [SceneJS.Node type="+this.type+", id="+this.id+"] : "+msg;break;case"error":msg="ERROR; [SceneJS.Node type="+this.type+", id="+this.id+"] : "+msg;break;default:msg="INFO;  [SceneJS.Node type="+this.type+", id="+this.id+"] : "+msg;break;}if(console[channel]){console[channel](msg);}else{console.log(msg);}};/**
 * Publishes to a topic on this node.
 *
 * Immediately notifies existing subscriptions to that topic, and unless the "forget' parameter is
 * true, retains the publication to give to any subsequent notifications on that topic as they are made.
 *
 * @param {String} topic Publication topic
 * @param {Object} pub The publication
 * @param {Boolean} [forget] When true, the publication will be sent to subscribers then forgotten, so that any
 * subsequent subscribers will not receive it
 */SceneJS.Node.prototype.publish=function(topic,pub,forget){if(!forget){this._topicPubs[topic]=pub;// Save notification
}if(this._topicSubs[topic]){// Notify subscriptions
var subsForTopic=this._topicSubs[topic];for(var handle in subsForTopic){if(subsForTopic.hasOwnProperty(handle)){subsForTopic[handle].call(this,pub);}}}};/**
 * Removes a topic publication
 *
 * Immediately notifies existing subscriptions to that topic, sending them each a null publication.
 *
 * @param topic Publication topic
 * @private
 */SceneJS.Node.prototype.unpublish=function(topic){var subsForTopic=this._topicSubs[topic];if(subsForTopic){// Notify subscriptions
for(var handle in subsForTopic){if(subsForTopic.hasOwnProperty(handle)){subsForTopic[handle].call(this,null);}}}delete this._topicPubs[topic];};/**
 * Listen for data changes at a particular location on this node
 *
 * <p>Your callback will be triggered for
 * the initial data and again whenever the data changes. Use {@link #off} to stop receiving updates.</p>
 *
 * <p>The callback is be called with this node as scope.</p>
 *
 * @param {String} location Publication location
 * @param {Function(data)} callback Called when fresh data is available at the location
 * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
 */SceneJS.Node.prototype.on=function(topic,callback){var subsForTopic=this._topicSubs[topic];if(!subsForTopic){subsForTopic={};this._topicSubs[topic]=subsForTopic;}var handle=this._handleMap.addItem();// Create unique handle
subsForTopic[handle]=callback;this._handleTopics[handle]=topic;var pub=this._topicPubs[topic];if(pub){// A publication exists, notify callback immediately
callback.call(this,pub);}//else {
if(topic=="rendered"){this._engine.branchDirty(this);}//    if (topic == "tick") {
//        this._engine.scene.on("tick",callback);
//    }
// }
return handle;};/**
 * Unsubscribes from a publication on this node that was previously made with {@link #on}.
 * @param handle Publication handle
 */SceneJS.Node.prototype.off=function(handle){var topic=this._handleTopics[handle];if(topic){delete this._handleTopics[handle];var topicSubs=this._topicSubs[topic];if(topicSubs){delete topicSubs[handle];}this._handleMap.removeItem(handle);// Release handle
if(topic=="rendered"){this._engine.branchDirty(this);}}//    else {
//        this._engine.scene.off(handle);
//    }
};/**
 * Listens for exactly one data update at the specified location on this node, and then stops listening.
 * <p>This is equivalent to calling {@link #on}, and then calling {@link #off} inside the callback function.</p>
 * @param {String} location Data location to listen to
 * @param {Function(data)} callback Called when fresh data is available at the location
 */SceneJS.Node.prototype.once=function(topic,callback){var self=this;var sub=this.on(topic,function(pub){self.off(sub);callback(pub);});};/**
 * Returns this node's {@link SceneJS.Scene}
 */SceneJS.Node.prototype.getScene=function(){return this._engine.scene;};/**
 * Returns the ID of this node's core
 */SceneJS.Node.prototype.getCoreId=function(){return this._core.coreId;};/**
 * Get the node's ID
 *
 */SceneJS.Node.prototype.getID=function(){return this.id;};/**
 * Alias for getID
 *  @function
 */SceneJS.Node.prototype.getId=function(){return this.id;};/**
 * Alias for getID
 *  @function
 */SceneJS.Node.prototype.getNodeId=function(){return this.id;};/**
 * Returns the node's type. For the Node base class, it is "node", overridden in sub-classes.
 */SceneJS.Node.prototype.getType=function(){return this.type;};/**
 * Returns the data object attached to this node.
 */SceneJS.Node.prototype.getData=function(){return this.data;};/**
 * Sets a data object on this node.
 */SceneJS.Node.prototype.setData=function(data){this.data=data;return this;};/**
 * Returns the number of child nodes
 */SceneJS.Node.prototype.getNumNodes=function(){return this.nodes.length;};/** Returns child nodes
 * @returns {Array} Child nodes
 */SceneJS.Node.prototype.getNodes=function(){return this.nodes.slice(0);};/** Returns child node at given index. Returns null if no node at that index.
 * @param {Number} index The child index
 * @returns {Node} Child node, or null if not found
 */SceneJS.Node.prototype.getNodeAt=function(index){if(index<0||index>=this.nodes.length){return null;}return this.nodes[index];};/** Returns first child node. Returns null if no child nodes.
 * @returns {Node} First child node, or null if not found
 */SceneJS.Node.prototype.getFirstNode=function(){if(this.nodes.length==0){return null;}return this.nodes[0];};/** Returns last child node. Returns null if no child nodes.
 * @returns {Node} Last child node, or null if not found
 */SceneJS.Node.prototype.getLastNode=function(){if(this.nodes.length==0){return null;}return this.nodes[this.nodes.length-1];};/** Returns child node with the given ID.
 * Returns null if no such child node found.
 */SceneJS.Node.prototype.getNode=function(id){for(var i=0;i<this.nodes.length;i++){if(this.nodes[i].id==id){return this.nodes[i];}}return null;};/** Disconnects the child node at the given index from its parent node
 * @param {int} index Child node index
 * @returns {Node} The disconnected child node if located, else null
 */SceneJS.Node.prototype.disconnectNodeAt=function(index){var r=this.nodes.splice(index,1);if(r.length>0){r[0].parent=null;this._engine.display.objectListDirty=true;return r[0];}else{return null;}};/** Disconnects the child node from its parent, given as a node object
 * @param {String | Node} id The target child node, or its ID
 * @returns {Node} The removed child node if located
 */SceneJS.Node.prototype.disconnect=function(){if(this.parent){for(var i=0;i<this.parent.nodes.length;i++){if(this.parent.nodes[i]===this){var node=this.parent.disconnectNodeAt(i);this.parent=null;return node;}}this.parent=null;}return null;};/** Removes the child node at the given index
 * @param {int} index Child node index
 */SceneJS.Node.prototype.removeNodeAt=function(index){var child=this.disconnectNodeAt(index);if(child){child.destroy();this._engine.display.objectListDirty=true;}};/** Removes the child node, given as either a node object or an ID string.
 * @param {String | Node} id The target child node, or its ID
 * @returns {Node} The removed child node if located
 */SceneJS.Node.prototype.removeNode=function(node){if(!node){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Node#removeNode - node argument undefined");}if(!node._compile){if(typeof node=="string"){var gotNode=this._engine.findNode(node);if(!gotNode){throw SceneJS_error.fatalError(SceneJS.errors.NODE_NOT_FOUND,"Node#removeNode - node not found anywhere: '"+node+"'");}node=gotNode;}}if(node._compile){//  instance of node
for(var i=0;i<this.nodes.length;i++){if(this.nodes[i]===node){var removedNode=this.removeNodeAt(i);this._engine.display.objectListDirty=true;return removedNode;}}}throw SceneJS_error.fatalError(SceneJS.errors.NODE_NOT_FOUND,"Node#removeNode - child node not found: "+(node._compile?": "+node.id:node));};/** Disconnects all child nodes from their parent node and returns them in an array.
 */SceneJS.Node.prototype.disconnectNodes=function(){var len=this.nodes.length;for(var i=0;i<len;i++){// Unlink nodes from this
this.nodes[i].parent=null;}var nodes=this.nodes;this.nodes=[];this._engine.display.objectListDirty=true;return nodes;};/** Removes all child nodes and returns them in an array.
 */SceneJS.Node.prototype.removeNodes=function(){var nodes=this.disconnectNodes();for(var i=0;i<nodes.length;i++){nodes[i].destroy();this._engine.display.objectListDirty=true;}};/** Destroys this node and moves children up to parent, inserting them where this node resided.
 */SceneJS.Node.prototype.splice=function(){var i,len;if(this.parent==null){return null;}var parent=this.parent;var nodes=this.disconnectNodes();for(i=0,len=nodes.length;i<len;i++){// Link this node's nodes to new parent
nodes[i].parent=this.parent;}for(i=0,len=parent.nodes.length;i<len;i++){// Replace node on parent's nodes with this node's nodes
if(parent.nodes[i]===this){parent.nodes.splice.apply(parent.nodes,[i,1].concat(nodes));this.nodes=[];this.parent=null;this.destroy();this._engine.branchDirty(parent);return parent;}}};/** Appends multiple child nodes
 */SceneJS.Node.prototype.addNodes=function(nodes,ok){if(!nodes){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Node#addNodes - nodes argument is undefined");}var node;var result=[];var numNodes=nodes.length;for(var i=nodes.length-1;i>=0;i--){var nodeAttr=nodes[i];if(nodeAttr.type=="node"||this._engine.hasNodeType(nodeAttr.type)){// Add loaded node type synchronously
node=this.addNode(nodeAttr);result[i]=node;if(--numNodes==0){if(ok){ok(nodes);}return nodes;}}else{// Load node type and instantiate it asynchronously
var self=this;(function(){var nodei=i;self.addNode(nodeAttr,function(node){result[nodei]=node;if(--numNodes==0){if(ok){ok(nodes);}}});})();}}return null;};/** Appends a child node
 */SceneJS.Node.prototype.addNode=function(node,ok){node=node||{};// Graft node object
if(node._compile){if(node.parent!=null){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Node#addNode - node argument is still attached to another parent");}this.nodes.push(node);node.parent=this;this._engine.branchDirty(node);if(ok){ok(node);}return node;}// Graft node object by ID reference
if(typeof node=="string"){var gotNode=this._engine.findNode(node);if(!gotNode){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Node#addNode - node not found: '"+node+"'");}node=gotNode;if(node.parent!=null){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Node#addNode - node argument is still attached to another parent");}this.nodes.push(node);node.parent=this;this._engine.branchDirty(node);if(ok){ok(node);}return node;}// Create node
node.type=node.type||"node";if(node.type=="node"||this._engine.hasNodeType(node.type)){// Root node's type is already loaded, so we are able
// to create the root synchronously. When the caller
// is creating a core node type, then by this contract
// it can rely on the return value
node=this._engine.createNode(node);this.nodes.push(node);node.parent=this;this._engine.branchDirty(node);if(ok){ok(node);}return node;}else{// Otherwise the root node's type needs to be loaded,
// so we need to create it asynchronously. By this contract,
// the Caller would not rely on synchronous creation of
// non-core types.
var self=this;this._engine.createNode(node,function(node){self.nodes.push(node);node.parent=self;self._engine.branchDirty(node);if(ok){ok(node);}});return null;}};/** Inserts a subgraph into child nodes
 * @param {Node} node Child node
 * @param {int} i Index for new child node
 * @return {Node} The child node
 */SceneJS.Node.prototype.insertNode=function(node,i){if(!node){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Node#insertNode - node argument is undefined");}if(!node._compile){// JSON node definition
node=this._engine.createNode(node);// Create node
}if(!node._compile){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Node#insertNode - node argument is not a SceneJS.Node");}if(node.parent!=null){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Node#insertNode - node argument is still attached to another parent");}if(i===undefined||i===null){node.addNodes(this.disconnectNodes());this.addNode(node);}else if(i<0){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Node#insertNode - node index out of range: -1");}else if(i>=this.nodes.length){this.nodes.push(node);}else{this.nodes.splice(i,0,node);}node.parent=this;return node;};/** Calls the given function on each node in the subgraph rooted by this node, including this node.
 * The callback takes each node as it's sole argument and traversal stops as soon as the function returns
 * true and returns the node.
 * @param {function(Node)} func The function
 */SceneJS.Node.prototype.mapNodes=function(func){if(func(this)){return this;}var result;for(var i=0;i<this.nodes.length;i++){result=this.nodes[i].mapNodes(func);if(result){return result;}}return null;};/**
 * Registers a listener for a given event on this node. If the event type
 * is not supported by this node type, then the listener will never be called.
 * <p><b>Example:</b>
 * <pre><code>
 * var node = new Node();
 *
 * node.addListener(
 *
 *              // eventName
 *              "some-event",
 *
 *              // handler
 *              function(node,      // Node we are listening to
 *                       params) {  // Whatever params accompany the event type
 *
 *                     // ...
 *              }
 * );
 *
 *
 * </code></pre>
 *
 * @param {String} eventName One of the event types supported by this node
 * @param {Function} fn - Handler function that be called as specified
 * @param options - Optional options for the handler as specified
 * @return {Node} this
 */SceneJS.Node.prototype.addListener=function(eventName,fn,options){var list=this._listeners[eventName];if(!list){list=[];this._listeners[eventName]=list;}list.push({eventName:eventName,fn:fn,options:options||{}});this._numListeners++;return this;};/**
 * Fires an event at this node, immediately calling listeners registered for the event
 */SceneJS.Node.prototype._fireEvent=function(eventName,params,options){var list=this._listeners[eventName];if(list){if(!params){params={};}var event={name:eventName,params:params,options:options||{}};var listener;for(var i=0,len=list.length;i<len;i++){listener=list[i];if(listener.options.scope){listener.fn.call(listener.options.scope,event);}else{listener.fn.call(this,event);}}}};/**
 * Removes a handler that is registered for the given event on this node.
 * Does nothing if no such handler registered.
 */SceneJS.Node.prototype.removeListener=function(eventName,fn){var list=this._listeners[eventName];if(!list){return null;}for(var i=0;i<list.length;i++){if(list[i].fn==fn){list.splice(i,1);return fn;}}this._numListeners--;return null;};/**
 * Returns true if this node has any listeners for the given event
 */SceneJS.Node.prototype.hasListener=function(eventName){return this._listeners[eventName];};/**
 * Returns true if this node has any listeners at all.
 */SceneJS.Node.prototype.hasListeners=function(){return this._numListeners>0;};/** Removes all listeners registered on this node.
 */SceneJS.Node.prototype.removeListeners=function(){this._listeners={};this._numListeners=0;return this;};/**
 * Returns the parent node
 * @return {SceneJS.Node}
 */SceneJS.Node.prototype.getParent=function(type){return this.parent;};/**
 * Finds the first node of given type on path to root.
 * @param {String} type Parent type to find on path to root
 * @return {SceneJS.Node}
 */SceneJS.Node.prototype.getParentOfType=function(type){var parent=this.parent;while(parent&&parent.type!=type){parent=parent.parent;}return parent;};/**
 * Iterates over parent nodes on the path from the selected node to the root, executing a function
 * for each.
 * If the function returns true at any node, then traversal stops and a selector is
 * returned for that node.
 * @param {Function(node, index)} fn Function to execute on each instance node
 * @return {Object} Selector for selected node, if any
 */SceneJS.Node.prototype.eachParent=function(fn){if(!fn){throw"SceneJS.Node.eachParent param 'fn' is null or undefined";}var count=0;var node=this;while(node.parent){if(fn.call(node.parent,count++)===true){return node.parent;}node=node.parent;}return null;};/** Returns true if a child node matching given ID or index exists on this node
 * @param {Number|String} node Child node index or ID
 */SceneJS.Node.prototype.hasNode=function(node){if(node===null||node===undefined){throw"SceneJS.Node.hasNode param 'node' is null or undefined";}var type=typeof node==="undefined"?"undefined":_typeof(node);var nodeGot;if(type=="number"){nodeGot=this.getNodeAt(node);}else if(type=="string"){nodeGot=this.getNode(node);}else{throw"SceneJS.Node.hasNode param 'node' should be either an index number or an ID string";}return nodeGot!=undefined&&nodeGot!=null;};/** Selects a child node matching given ID or index
 * @param {Number|String} node Child node index or ID
 */SceneJS.Node.prototype.node=function(node){if(node===null||node===undefined){throw"SceneJS.Node.node param 'node' is null or undefined";}var type=typeof node==="undefined"?"undefined":_typeof(node);var nodeGot;if(type=="number"){nodeGot=this.getNodeAt(node);}else if(type=="string"){nodeGot=this.getNode(node);}else{throw"SceneJS.Node.node param 'node' should be either an index number or an ID string";}if(!nodeGot){throw"SceneJS.Node.node - node not found: '"+node+"'";}return nodeGot;};/**
 * Iterates over sub-nodes of the selected node, executing a function
 * for each. With the optional options object we can configure is depth-first or breadth-first order.
 * If neither, then only the child nodes are iterated.
 * If the function returns true at any node, then traversal stops and a selector is
 * returned for that node.
 * @param {Function(index, node)} fn Function to execute on each child node
 * @return {Object} Selector for selected node, if any
 */SceneJS.Node.prototype.eachNode=function(fn,options){if(!fn){throw"SceneJS.Node.eachNode param 'fn' is null or undefined";}if(typeof fn!="function"){throw"SceneJS.Node.eachNode param 'fn' should be a function";}var stoppedNode;options=options||{};var count=0;if(options.andSelf){if(fn.call(this,count++)===true){return this;}}if(!options.depthFirst&&!options.breadthFirst){stoppedNode=this._iterateEachNode(fn,this,count);}else if(options.depthFirst){stoppedNode=this._iterateEachNodeDepthFirst(fn,this,count,false);// Not below root yet
}else{// TODO: breadth-first
}if(stoppedNode){return stoppedNode;}return undefined;// IDE happy now
};SceneJS.Node.prototype.numNodes=function(){return this.nodes.length;};SceneJS.Node.prototype._iterateEachNode=function(fn,node,count){var len=node.nodes.length;var child;for(var i=0;i<len;i++){child=node.nodes[i];if(fn.call(child,count++)===true){return child;}}return null;};SceneJS.Node.prototype._iterateEachNodeDepthFirst=function(fn,node,count,belowRoot){if(belowRoot){/* Visit this node - if we are below root, because entry point visits the root
         */if(fn.call(node,count++)===true){return node;}}belowRoot=true;/* Iterate nodes
     */var len=node.nodes.length;var child;for(var i=0;i<len;i++){child=this._iterateEachNodeDepthFirst(fn,node.nodes[i],count,belowRoot);if(child){return child;}}return null;};/** Returns either all child or all sub-nodes of the given type, depending on whether search is recursive or not.
 */SceneJS.Node.prototype.findNodesByType=function(type,recursive){return this._findNodesByType(type,[],recursive);};SceneJS.Node.prototype._findNodesByType=function(type,list,recursive){var i;for(i=0;i<this.nodes;i++){var node=this.nodes[i];if(node.type==type){list.add(node);}}if(recursive){for(i=0;i<this.nodes;i++){this.nodes[i]._findNodesByType(type,list,recursive);}}return list;};/** Finds the first node on path up to root whose type equals that given
 */SceneJS.Node.prototype.findParentByType=function(type){var parent=this.parent;while(parent&&parent.type!=type){parent=parent.parent;}return parent;};/**
 * Given a map of name-value pairs, calls a getter method for each name,
 * feeding into it the corresponding value.
 *
 * @param attr
 * @param value
 * @return {*}
 */SceneJS.Node.prototype.set=function(attr,value){if((typeof attr==="undefined"?"undefined":_typeof(attr))=="object"){// Attribute map - recurse for each attribute
for(var subAttr in attr){if(attr.hasOwnProperty(subAttr)){this.set(subAttr,attr[subAttr]);}}return;}if(this._set){var method=this._set[attr];if(method){return method.call(this,value);}}return this._createAccessor("set",attr,value);};SceneJS.Node.prototype.get=function(attr){if(this._get){var method=this._get[attr];if(method){return method.call(this);}}return this._createAccessor("get",attr);};SceneJS.Node.prototype.add=function(attr,value){if((typeof attr==="undefined"?"undefined":_typeof(attr))=="object"){// Attribute map - recurse for each attribute
for(var subAttr in attr){if(attr.hasOwnProperty(subAttr)){this.add(subAttr,attr[subAttr]);}}return;}if(this._add){var method=this._add[attr];if(method){return method.call(this,value);}}return this._createAccessor("add",attr,value);};SceneJS.Node.prototype.inc=function(attr,value){if((typeof attr==="undefined"?"undefined":_typeof(attr))=="object"){// Attribute map - recurse for each attribute
for(var subAttr in attr){if(attr.hasOwnProperty(subAttr)){this.inc(subAttr,attr[subAttr]);}}return;}if(this._inc){var method=this._inc[attr];if(method){return method.call(this,value);}}return this._createAccessor("inc",attr,value);};SceneJS.Node.prototype.insert=function(attr,value){if((typeof attr==="undefined"?"undefined":_typeof(attr))=="object"){// Attribute map - recurse for each attribute
for(var subAttr in attr){if(attr.hasOwnProperty(subAttr)){this.insert(subAttr,attr[subAttr]);}}return;}if(this._set){var method=this._set[attr];if(method){return method.call(this,value);}}return this._createAccessor("insert",attr,value);};SceneJS.Node.prototype.remove=function(attr,value){if((typeof attr==="undefined"?"undefined":_typeof(attr))=="object"){// Attribute map - recurse for each attribute
for(var subAttr in attr){if(attr.hasOwnProperty(subAttr)){this.remove(subAttr,attr[subAttr]);}}return;}if(this._remove){var method=this._remove[attr];if(method){return method.call(this,value);}}return this._createAccessor("remove",attr,value);};SceneJS.Node.prototype._createAccessor=function(op,attr,value){var methodName=op+attr.substr(0,1).toUpperCase()+attr.substr(1);var method=this[methodName];if(!method){throw"Method not found on node: '"+methodName+"'";}//var proto = (this.type == "node") ? SceneJS.Node.prototype : this._engine.nodeTypes[this.type].prototype;
var proto=this.__proto__;var accessors;switch(op){case"set":accessors=proto._set||(proto._set={});break;case"get":accessors=proto._get||(proto._get={});break;case"inc":accessors=proto._inc||(proto._inc={});break;case"add":accessors=proto._add||(proto._add={});break;case"insert":accessors=proto._insert||(proto._insert={});break;case"remove":accessors=proto._remove||(proto._remove={});break;}accessors[attr]=method;return method.call(this,value);// value can be undefined
};/** Binds a listener to an event on the selected node
 *
 * @param {String} name Event name
 * @param {Function} handler Event handler
 */SceneJS.Node.prototype.bind=function(name,handler){if(!name){throw"SceneJS.Node.bind param 'name' null or undefined";}if(typeof name!="string"){throw"SceneJS.Node.bind param 'name' should be a string";}if(!handler){throw"SceneJS.Node.bind param 'handler' null or undefined";}if(typeof handler!="function"){throw"SceneJS.Node.bind param 'handler' should be a function";}this.addListener(name,handler,{scope:this});this._engine.branchDirty(this);return handler;};/**
 * Returns an object containing the attributes that were given when creating the node. Obviously, the map will have
 * the current values, plus any attributes that were later added through set/add methods on the node
 *
 */SceneJS.Node.prototype.getJSON=function(){return this;};SceneJS.Node.prototype._compile=function(ctx){if(this.preCompile){this.preCompile();}this._compileNodes(ctx);if(this.postCompile){this.postCompile();}};SceneJS.Node.prototype._compileNodes=function(ctx){var renderSubs=this._topicSubs["rendered"];if(renderSubs){SceneJS_nodeEventsModule.preVisitNode(this);}//    var tickSubs = this._topicSubs["tick"];
//
//    if (tickSubs) {
//        ctx.pubSubProxy.on("tick", function(event) {
//            this.publish("tick", event);
//        });
//    }
var child;for(var i=0,len=this.nodes.length;i<len;i++){child=this.nodes[i];child.branchDirty=child.branchDirty||this.branchDirty;// Compile subnodes if scene branch dirty
if(child.dirty||child.branchDirty||this._engine.sceneDirty){// Compile nodes that are flagged dirty
child._compile(ctx);child.dirty=false;child.branchDirty=false;}}if(renderSubs){SceneJS_nodeEventsModule.postVisitNode(this);}};/**
 * Destroys this node. It is marked for destruction; when the next scene traversal begins (or the current one ends)
 * it will be destroyed and removed from it's parent.
 */SceneJS.Node.prototype.destroy=function(){if(!this.destroyed){if(this.parent){/* Remove from parent's child node list
             */for(var i=0;i<this.nodes.length;i++){if(this.parent.nodes[i].id===this.id){this.parent.nodes.splice(i,1);break;}}}// Remove publication
this._engine.scene.unpublish("nodes/"+this.id);/* Recusrsively destroy child nodes without
         * bothering to remove them from their parents
         */this._destroyTree();/* Need object list recompilation on display
         */this._engine.display.objectListDirty=true;}return this;};SceneJS.Node.prototype._destroyTree=function(){this.destroyed=true;this._engine.destroyNode(this);// Release node object
for(var i=0,len=this.nodes.length;i<len;i++){this.nodes[i]._destroyTree();}};/**
 * Performs the actual destruction of this node, calling the node's optional template destroy method
 */SceneJS.Node.prototype._doDestroy=function(){if(this._destroy){// Call destruction handler for each node subclass
this._destroy();}return this;};SceneJS_PubSubProxy=function SceneJS_PubSubProxy(scene,proxy){this.scene=scene;this.proxy=proxy;};/**
 * @class Manages creation, recycle and destruction of {@link SceneJS.Node} instances
 * @private
 */var SceneJS_NodeFactory=function SceneJS_NodeFactory(){/** Nodes created by this factory
     * @type {SceneJS_Map}
     */this.nodes=new SceneJS_Map({});};/**
 * Scene graph node classes provided by the SceneJS_NodeFactory class
 *
 * @type {[SceneJS.Node]}
 */SceneJS_NodeFactory.nodeTypes={};/**
 * Subscribers waiting for node types
 * @type {Object}
 * @private
 */SceneJS_NodeFactory._subs={};/**
 * Creates a node class for instantiation by this factory
 *
 * @param {String} typeName Name of type, eg. "rotate"
 * @param {String} coreTypeName Optional name of core type for the node, eg. "xform" - defaults to type name of node
 * @param {Function} [augment] Augments the basic node type with our custom node methods
 * @returns The new node class
 */SceneJS_NodeFactory.createNodeType=function(typeName,coreTypeName,augment){if(SceneJS_NodeFactory.nodeTypes[typeName]){throw"Node type already defined: "+typeName;}var nodeType=function nodeType(){// Create the class
SceneJS.Node.apply(this,arguments);this.type=typeName;};nodeType.prototype=new SceneJS.Node();// Inherit from base class
nodeType.prototype.constructor=nodeType;SceneJS_NodeFactory.nodeTypes[typeName]=nodeType;var type=SceneJS_NodeFactory.nodeTypes[typeName];// Type has installed itself
if(!type){throw"Node type plugin did not install itself correctly";}// Augment the basic node type
if(augment){augment(nodeType);}// Notify subscribers waiting for the type
var subs=SceneJS_NodeFactory._subs[typeName];if(subs){while(subs.length>0){subs.pop()(type);}delete subs[typeName];}return nodeType;};/**
 *
 */SceneJS_NodeFactory.prototype.getNode=function(engine,json,core,ok){json.type=json.type||"node";// Nodes are SceneJS.Node type by default
var nodeType;if(json.type=="node"){nodeType=SceneJS.Node;}else{nodeType=SceneJS_NodeFactory.nodeTypes[json.type];}if(nodeType){return this._createNode(nodeType,engine,json,core,ok);}else{var self=this;this._getType(engine,json.type,function(nodeType){self._createNode(nodeType,engine,json,core,ok);});}};SceneJS_NodeFactory.prototype._createNode=function(nodeType,engine,json,core,ok){var node=new nodeType();var id=json.id||json.nodeId;// 'id' and 'nodeId' are aliases
if(id){this.nodes.addItem(id,node);}else{id=this.nodes.addItem(node);}node._construct(engine,core,json,id);// Instantiate node
if(ok){ok(node);}return node;};/**
 * Returns installed type of given type and ID
 */SceneJS_NodeFactory.prototype._getType=function(engine,typeName,ok){var type=SceneJS_NodeFactory.nodeTypes[typeName];if(type){ok(type);return;}var subs=SceneJS_NodeFactory._subs[typeName]||(SceneJS_NodeFactory._subs[typeName]=[]);subs.push(ok);if(subs.length>1){// Not first sub
return;}var taskId=SceneJS_sceneStatusModule.taskStarted(engine.scene,"Loading plugin");subs.push(function(){SceneJS_sceneStatusModule.taskFinished(taskId);});var self=this;var typePath=SceneJS_configsModule.configs.pluginPath;if(!typePath){throw"no typePath config";// Build script error - should create this config
}this._loadScript(typePath+"/node/"+typeName+".js",function(){SceneJS_sceneStatusModule.taskFailed(taskId);});};SceneJS_NodeFactory.prototype._loadScript=function(url,error){var script=document.createElement("script");script.type="text/javascript";script.src=url;script.onerror=error;document.getElementsByTagName("head")[0].appendChild(script);};/**
 * Releases a node back to this factory
 */SceneJS_NodeFactory.prototype.putNode=function(node){this.nodes.removeItem(node.id);};(function(){var defaultMatrix=SceneJS_math_perspectiveMatrix4(45,// fovy
1,// aspect
0.1,// near
10000);// far
var defaultMat=new Float32Array(defaultMatrix);// The default state core singleton for {@link SceneJS.Camera} nodes
var defaultCore={type:"camera",stateId:SceneJS._baseStateId++,matrix:defaultMatrix,mat:defaultMat,optics:{type:"perspective",fovy:45.0,aspect:1.0,near:0.1,far:10000.0}};var coreStack=[];var stackLen=0;// Set default core on the display at the start of each new scene compilation
SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.projTransform=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines the projection transform to apply to the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */SceneJS.Camera=SceneJS_NodeFactory.createNodeType("camera");SceneJS.Camera.prototype._init=function(params){if(this._core.useCount==1){this.setOptics(params.optics);// Can be undefined
//            // Rebuild on every scene tick
//            // https://github.com/xeolabs/scenejs/issues/277
//            var self = this;
//            this._tick = this.getScene().on("tick", function () {
//                if (self._core.dirty) {
//                    self._core.rebuild();
//                }
//            });
}};/**
     * Returns the default camera projection matrix
     * @return {Float32Array}
     */SceneJS.Camera.getDefaultMatrix=function(){return defaultMat;};SceneJS.Camera.prototype.setOptics=function(optics){var core=this._core;if(!optics){core.optics={type:"perspective",fovy:60.0,aspect:1.0,near:0.1,far:10000.0};}else{var type=optics.type||core.optics.type;if(type=="ortho"){core.optics=SceneJS._applyIf(SceneJS_math_ORTHO_OBJ,{type:type,left:optics.left,bottom:optics.bottom,near:optics.near,right:optics.right,top:optics.top,far:optics.far});}else if(type=="frustum"){core.optics={type:type,left:optics.left||-1.0,bottom:optics.bottom||-1.0,near:optics.near||0.1,right:optics.right||1.00,top:optics.top||1.0,far:optics.far||10000.0};}else if(type=="perspective"){core.optics={type:type,fovy:optics.fovy||60.0,aspect:optics.aspect==undefined?1.0:optics.aspect,near:optics.near||0.1,far:optics.far||10000.0};}else if(!optics.type){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Camera configuration invalid: optics type not specified - "+"supported types are 'perspective', 'frustum' and 'ortho'");}else{throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Camera configuration invalid: optics type not supported - "+"supported types are 'perspective', 'frustum' and 'ortho'");}}this._rebuild();this._engine.display.imageDirty=true;};SceneJS.Camera.prototype._rebuild=function(){var optics=this._core.optics;if(optics.type=="ortho"){this._core.matrix=SceneJS_math_orthoMat4c(optics.left,optics.right,optics.bottom,optics.top,optics.near,optics.far);}else if(optics.type=="frustum"){this._core.matrix=SceneJS_math_frustumMatrix4(optics.left,optics.right,optics.bottom,optics.top,optics.near,optics.far);}else if(optics.type=="perspective"){this._core.matrix=SceneJS_math_perspectiveMatrix4(optics.fovy*Math.PI/180.0,optics.aspect,optics.near,optics.far);}if(!this._core.mat){this._core.mat=new Float32Array(this._core.matrix);}else{this._core.mat.set(this._core.matrix);}this.publish("matrix",this._core.matrix);};SceneJS.Camera.prototype.getOptics=function(){var optics={};for(var key in this._core.optics){if(this._core.optics.hasOwnProperty(key)){optics[key]=this._core.optics[key];}}return optics;};SceneJS.Camera.prototype.getMatrix=function(){return this._core.matrix.slice(0);};/**
     * Compiles this camera node, setting this node's state core on the display, compiling sub-nodes,
     * then restoring the previous camera state core back onto the display on exit.
     */SceneJS.Camera.prototype._compile=function(ctx){this._engine.display.projTransform=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.projTransform=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.Camera.prototype._destroy=function(){// Stop publishing matrix on each tick
this.getScene().off(this._tick);};})();(function(){/**
     * The default state core singleton for {@link SceneJS.Clips} nodes
     */var defaultCore={type:"clips",stateId:SceneJS._baseStateId++,empty:true,hash:"",clips:[]};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.clips=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines one or more arbitrarily-aligned clip planes to clip the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */SceneJS.Clips=SceneJS_NodeFactory.createNodeType("clips");SceneJS.Clips.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
var clips=params.clips;if(!clips){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"clips node attribute missing : 'clips'");}this._core.clips=this._core.clips||[];for(var i=0,len=clips.length;i<len;i++){this._setClip(i,clips[i]);}}};SceneJS.Clips.prototype.setClips=function(clips){var indexNum;for(var index in clips){if(clips.hasOwnProperty(index)){if(index!=undefined||index!=null){indexNum=parseInt(index);if(indexNum<0||indexNum>=this._core.clips.length){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Invalid argument to set 'clips': index out of range ("+this._core.clips.length+" clips defined)");}this._setClip(indexNum,clips[index]||{});}}}this._engine.display.imageDirty=true;};SceneJS.Clips.prototype._setClip=function(index,cfg){var clip=this._core.clips[index]||(this._core.clips[index]={});clip.normalAndDist=[cfg.x||0,cfg.y||0,cfg.z||0,cfg.dist||0];var mode=cfg.mode||clip.mode||"disabled";if(mode!="inside"&&mode!="outside"&&mode!="disabled"){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"clips node invalid value for property 'mode': should be 'inside' or 'outside' or 'disabled'");}clip.mode=mode;this._core.hash=null;};SceneJS.Clips.prototype._compile=function(ctx){if(!this._core.hash){this._core.hash=this._core.clips.length;}this._engine.display.clips=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.clips=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();(function(){// The default state core singleton for {@link SceneJS.Enable} nodes
var defaultCore={stateId:SceneJS._baseStateId++,type:"enable",enabled:true};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.enable=defaultCore;stackLen=0;});/**
     * @class Scene graph node which enables or disables rendering for its subgraph
     * @extends SceneJS.Node
     */SceneJS.Enable=SceneJS_NodeFactory.createNodeType("enable");SceneJS.Enable.prototype._init=function(params){if(this._core.useCount==1){// This node is first to reference the state core, so sets it up
this._core.enabled=true;if(params.enabled!=undefined){this.setEnabled(params.enabled);}}};SceneJS.Enable.prototype.setEnabled=function(enabled){if(enabled!==this._core.enabled){this._core.enabled=enabled;this._engine.display.drawListDirty=true;this.publish("enabled",enabled);}return this;};SceneJS.Enable.prototype.getEnabled=function(){return this._core.enabled;};SceneJS.Enable.prototype._compile=function(ctx){this._engine.display.enable=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.enable=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();(function(){/**
     * The default state core singleton for {@link SceneJS.Flags} nodes
     */var defaultCore={stateId:SceneJS._baseStateId++,type:"flags",picking:true,// Picking enabled
clipping:true,// User-defined clipping enabled
enabled:true,// Node not culled from traversal
transparent:false,// Node transparent - works in conjunction with matarial alpha properties
backfaces:true,// Show backfaces
frontface:"ccw",// Default vertex winding for front face
backfaceLighting:true,// Shading enabled for backfaces
backfaceTexturing:true,// Texturing enabled for backfaces
diffuse:true,// Diffuse lighting enabled
specular:true,// Specular lighting enabled
ambient:true,// Ambient lighting enabled
reflection:true// Reflection enabled by default
};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.flags=defaultCore;stackLen=0;});/**
     * @class Scene graph node which sets rendering mode flags for its subgraph
     * @extends SceneJS.Node
     */SceneJS.Flags=SceneJS_NodeFactory.createNodeType("flags");SceneJS.Flags.prototype._init=function(params){if(this._core.useCount==1){// This node is first to reference the state core, so sets it up
this._core.picking=true;// Picking enabled
this._core.clipping=true;// User-defined clipping enabled
this._core.enabled=true;// Node not culled from traversal
this._core.transparent=false;// Node transparent - works in conjunction with matarial alpha properties
this._core.backfaces=true;// Show backfaces
this._core.frontface="ccw";// Default vertex winding for front face
this._core.backfaceLighting=true;// Shading enabled for backfaces
this._core.backfaceTexturing=true;// Texturing enabled for backfaces
this._core.diffuse=true;// Diffuse lighting enabled by default
this._core.specular=true;// Specular lighting enabled by default
this._core.ambient=true;// Ambient lighting enabled by default
this._core.reflection=true;// Reflection enabled by default
if(params.flags){// 'flags' property is actually optional in the node definition
this.setFlags(params.flags);}}};SceneJS.Flags.prototype.setFlags=function(flags){var core=this._core;if(flags.picking!=undefined){core.picking=!!flags.picking;this._engine.display.drawListDirty=true;}if(flags.clipping!=undefined){core.clipping=!!flags.clipping;this._engine.display.imageDirty=true;}if(flags.enabled!=undefined){core.enabled=!!flags.enabled;this._engine.display.drawListDirty=true;}if(flags.transparent!=undefined){core.transparent=!!flags.transparent;this._engine.display.stateSortDirty=true;}if(flags.backfaces!=undefined){core.backfaces=!!flags.backfaces;this._engine.display.imageDirty=true;}if(flags.frontface!=undefined){core.frontface=flags.frontface;this._engine.display.imageDirty=true;}if(flags.backfaceLighting!=undefined){core.backfaceLighting=!!flags.backfaceLighting;this._engine.display.imageDirty=true;}if(flags.backfaceTexturing!=undefined){core.backfaceTexturing=!!flags.backfaceTexturing;this._engine.display.imageDirty=true;}if(flags.diffuse!=undefined){core.diffuse=!!flags.diffuse;this._engine.display.imageDirty=true;}if(flags.specular!=undefined){core.specular=!!flags.specular;this._engine.display.imageDirty=true;}if(flags.ambient!=undefined){core.ambient=!!flags.ambient;this._engine.display.imageDirty=true;}if(flags.reflection!=undefined){core.reflection=!!flags.reflection;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.addFlags=function(flags){return this.setFlags(flags);//        var core = this._core;
//        if (flags.picking != undefined) core.picking = flags.picking;
//        if (flags.clipping != undefined) core.clipping = flags.clipping;
//        if (flags.enabled != undefined) core.enabled = flags.enabled;
//        if (flags.transparent != undefined) core.transparent = flags.transparent;
//        if (flags.backfaces != undefined) core.backfaces = flags.backfaces;
//        if (flags.frontface != undefined) core.frontface = flags.frontface;
//        if (flags.backfaceLighting != undefined) core.backfaceLighting = flags.backfaceLighting;
//        if (flags.backfaceTexturing != undefined) core.backfaceTexturing = flags.backfaceTexturing;
//        return this;
};SceneJS.Flags.prototype.getFlags=function(){var core=this._core;return{picking:core.picking,clipping:core.clipping,enabled:core.enabled,transparent:core.transparent,backfaces:core.backfaces,frontface:core.frontface,diffuse:core.diffuse,specular:core.specular,ambient:core.ambient,backfaceLighting:core.backfaceLighting,backfaceTexturing:core.backfaceTexturing,reflection:core.reflection};};SceneJS.Flags.prototype.setPicking=function(picking){picking=!!picking;if(this._core.picking!=picking){this._core.picking=picking;this._engine.display.drawListDirty=true;}return this;};SceneJS.Flags.prototype.getPicking=function(){return this._core.picking;};SceneJS.Flags.prototype.setClipping=function(clipping){clipping=!!clipping;if(this._core.clipping!=clipping){this._core.clipping=clipping;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getClipping=function(){return this._core.clipping;};SceneJS.Flags.prototype.setEnabled=function(enabled){enabled=!!enabled;if(this._core.enabled!=enabled){this._core.enabled=enabled;this._engine.display.drawListDirty=true;}return this;};SceneJS.Flags.prototype.getEnabled=function(){return this._core.enabled;};SceneJS.Flags.prototype.setTransparent=function(transparent){transparent=!!transparent;if(this._core.transparent!=transparent){this._core.transparent=transparent;this._engine.display.stateOrderDirty=true;}return this;};SceneJS.Flags.prototype.getTransparent=function(){return this._core.transparent;};SceneJS.Flags.prototype.setBackfaces=function(backfaces){backfaces=!!backfaces;if(this._core.backfaces!=backfaces){this._core.backfaces=backfaces;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getBackfaces=function(){return this._core.backfaces;};SceneJS.Flags.prototype.setFrontface=function(frontface){if(this._core.frontface!=frontface){this._core.frontface=frontface;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getFrontface=function(){return this._core.frontface;};SceneJS.Flags.prototype.setBackfaceLighting=function(backfaceLighting){backfaceLighting=!!backfaceLighting;if(this._core.backfaceLighting!=backfaceLighting){this._core.backfaceLighting=backfaceLighting;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getBackfaceLighting=function(){return this._core.backfaceLighting;};SceneJS.Flags.prototype.setBackfaceTexturing=function(backfaceTexturing){backfaceTexturing=!!backfaceTexturing;if(this._core.backfaceTexturing!=backfaceTexturing){this._core.backfaceTexturing=backfaceTexturing;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getBackfaceTexturing=function(){return this._core.backfaceTexturing;};SceneJS.Flags.prototype.setDiffuse=function(diffuse){diffuse=!!diffuse;if(this._core.diffuse!=diffuse){this._core.diffuse=diffuse;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getDiffuse=function(){return this._core.diffuse;};SceneJS.Flags.prototype.setSpecular=function(specular){specular=!!specular;if(this._core.specular!=specular){this._core.specular=specular;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getSpecular=function(){return this._core.specular;};SceneJS.Flags.prototype.setAmbient=function(ambient){ambient=!!ambient;if(this._core.ambient!=ambient){this._core.ambient=ambient;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getAmbient=function(){return this._core.ambient;};SceneJS.Flags.prototype.setReflection=function(reflection){reflection=!!reflection;if(this._core.reflection!=reflection){this._core.reflection=reflection;this._engine.display.imageDirty=true;}return this;};SceneJS.Flags.prototype.getReflection=function(){return this._core.reflection;};SceneJS.Flags.prototype._compile=function(ctx){this._engine.display.flags=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.flags=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();new function(){var defaultCore={type:"renderTarget",stateId:SceneJS._baseStateId++,targets:null};// Map of  nodes to cores, for reallocation on WebGL context restore
var nodeCoreMap={};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.renderTarget=defaultCore;stackLen=0;});// Reallocate VBOs when context restored after loss
SceneJS_events.addListener(SceneJS_events.WEBGL_CONTEXT_RESTORED,function(){for(var nodeId in nodeCoreMap){if(nodeCoreMap.hasOwnProperty(nodeId)){nodeCoreMap[nodeId]._buildNodeCore();}}});SceneJS.ColorTarget=SceneJS_NodeFactory.createNodeType("colorTarget");SceneJS.ColorTarget.prototype._init=function(params){nodeCoreMap[this._core.coreId]=this;this._core.bufType="color";this._core.renderBuf=new SceneJS._webgl.RenderBuffer({canvas:this._engine.canvas});};SceneJS.ColorTarget.prototype._compile=function(ctx){if(!this.__core){this.__core=this._engine._coreFactory.getCore("renderTarget");}var parentCore=this._engine.display.renderTarget;if(!this._core.empty){this.__core.targets=parentCore&&parentCore.targets?parentCore.targets.concat([this._core]):[this._core];}coreStack[stackLen++]=this.__core;this._engine.display.renderTarget=this.__core;this._compileNodes(ctx);this._engine.display.renderTarget=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.ColorTarget.prototype._destroy=function(){if(this._core){delete nodeCoreMap[this._core.coreId];}};}();new function(){var defaultCore={type:"renderTarget",stateId:SceneJS._baseStateId++,targets:null};// Map of  nodes to cores, for reallocation on WebGL context restore
var nodeCoreMap={};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.renderTarget=defaultCore;stackLen=0;});// Reallocate VBOs when context restored after loss
SceneJS_events.addListener(SceneJS_events.WEBGL_CONTEXT_RESTORED,function(){for(var nodeId in nodeCoreMap){if(nodeCoreMap.hasOwnProperty(nodeId)){nodeCoreMap[nodeId]._buildNodeCore();}}});SceneJS.DepthTarget=SceneJS_NodeFactory.createNodeType("depthTarget");SceneJS.DepthTarget.prototype._init=function(params){nodeCoreMap[this._core.coreId]=this;this._core.bufType="depth";this._core.renderBuf=new SceneJS._webgl.RenderBuffer({canvas:this._engine.canvas});};SceneJS.DepthTarget.prototype._compile=function(ctx){if(!this.__core){this.__core=this._engine._coreFactory.getCore("renderTarget");}var parentCore=this._engine.display.renderTarget;if(!this._core.empty){this.__core.targets=parentCore&&parentCore.targets?parentCore.targets.concat([this._core]):[this._core];}coreStack[stackLen++]=this.__core;this._engine.display.renderTarget=this.__core;this._compileNodes(ctx);this._engine.display.renderTarget=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.DepthTarget.prototype._destroy=function(){if(this._core){delete nodeCoreMap[this._core.coreId];}};}();new function(){var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(){stackLen=0;});/**
     * @class Scene graph node that defines geometry.
     * @extends SceneJS.Node
     * When this node is at a leaf, it defines a scene object which inherits the state set up by all the nodes above it
     * on the path up to the root. These nodes can be nested, so that child geometries inherit arrays
     * defined by parent geometries.
     */SceneJS.Geometry=SceneJS_NodeFactory.createNodeType("geometry");SceneJS.Geometry.prototype._init=function(params){if(this._core.useCount==1){// This node defines the core
this._initNodeCore(params,{origin:params.origin,scale:params.scale,autoNormals:params.normals=="auto"});this._buildNodeCore(this._engine.canvas.gl,this._core);var self=this;this._core.webglRestored=function(){self._buildNodeCore(self._engine.canvas.gl,self._core);};}};/**
     * Convert JSON arrays into typed arrays,
     * apply optional baked Model-space transforms to positions
     */SceneJS.Geometry.prototype._initNodeCore=function(data,options){options=options||{};var primitive=data.primitive||"triangles";this._core.primitive=this._getPrimitiveType(primitive);var normals;if(data.normals){if(data.normals=="auto"&&primitive=="triangles"){if(data.positions&&data.indices){// Auto normal generation
normals=this._buildNormals(data.positions,data.indices);}else{// TODO: log warning?
}}else{normals=data.normals;}}this._core.arrays={positions:data.positions?new Float32Array(options.scale||options.origin?this._applyOptions(data.positions,options):data.positions):undefined,normals:normals?new Float32Array(normals):undefined,uv:data.uv?new Float32Array(data.uv):undefined,uv2:data.uv2?new Float32Array(data.uv2):undefined,colors:data.colors?new Float32Array(data.colors):undefined,indices:data.indices?new Uint16Array(data.indices):undefined};};/**
     * Returns WebGL constant for primitive name
     */SceneJS.Geometry.prototype._getPrimitiveType=function(primitive){var gl=this._engine.canvas.gl;switch(primitive){case"points":return gl.POINTS;case"lines":return gl.LINES;case"line-loop":return gl.LINE_LOOP;case"line-strip":return gl.LINE_STRIP;case"triangles":return gl.TRIANGLES;case"triangle-strip":return gl.TRIANGLE_STRIP;case"triangle-fan":return gl.TRIANGLE_FAN;default:throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"geometry primitive unsupported: '"+primitive+"' - supported types are: 'points', 'lines', 'line-loop', "+"'line-strip', 'triangles', 'triangle-strip' and 'triangle-fan'");}};/**
     * Apply baked Model-space transformations to give position array
     */SceneJS.Geometry.prototype._applyOptions=function(positions,options){var positions2=positions.slice?positions.slice(0):new Float32Array(positions);// HACK
if(options.scale){var scaleX=options.scale.x!=undefined?options.scale.x:1.0;var scaleY=options.scale.y!=undefined?options.scale.y:1.0;var scaleZ=options.scale.z!=undefined?options.scale.z:1.0;for(var i=0,len=positions2.length;i<len;i+=3){positions2[i]*=scaleX;positions2[i+1]*=scaleY;positions2[i+2]*=scaleZ;}}if(options.origin){var originX=options.origin.x!=undefined?options.origin.x:0.0;var originY=options.origin.y!=undefined?options.origin.y:0.0;var originZ=options.origin.z!=undefined?options.origin.z:0.0;for(var i=0,len=positions2.length;i<len;i+=3){positions2[i]-=originX;positions2[i+1]-=originY;positions2[i+2]-=originZ;}}return positions2;};/**
     * Destroy vertex buffers associated with given core
     */var destroyBuffers=function destroyBuffers(core){if(core.vertexBuf){core.vertexBuf.destroy();core.vertexBuf=null;}if(core.normalBuf){core.normalBuf.destroy();core.normalBuf=null;}if(core.uvBuf){core.uvBuf.destroy();core.uvBuf=null;}if(core.uvBuf2){core.uvBuf2.destroy();core.uvBuf2=null;}if(core.colorBuf){core.colorBuf.destroy();core.colorBuf=null;}if(core.indexBuf){core.indexBuf.destroy();core.indexBuf=null;}if(core.interleavedBuf){core.interleavedBuf.destroy();core.interleavedBuf=null;}};/**
     * Allocates WebGL buffers for geometry arrays
     *
     * In addition to initially allocating those, this is called to reallocate them after
     * WebGL context is regained after being lost.
     */SceneJS.Geometry.prototype._buildNodeCore=function(gl,core){var usage=gl.STATIC_DRAW;//var usage = (!arrays.fixed) ? gl.STREAM_DRAW : gl.STATIC_DRAW;
try{// TODO: Modify usage flags in accordance with how often geometry is evicted
var arrays=core.arrays;var canInterleave=SceneJS.getConfigs("enableInterleaving")!==false;var dataLength=0;var interleavedValues=0;var interleavedArrays=[];var interleavedArrayStrides=[];var prepareInterleaveBuffer=function prepareInterleaveBuffer(array,strideInElements){if(dataLength==0){dataLength=array.length/strideInElements;}else if(array.length/strideInElements!=dataLength){canInterleave=false;}interleavedArrays.push(array);interleavedArrayStrides.push(strideInElements);interleavedValues+=strideInElements;return(interleavedValues-strideInElements)*4;};if(arrays.positions){if(canInterleave){core.interleavedPositionOffset=prepareInterleaveBuffer(arrays.positions,3);}core.vertexBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,arrays.positions,arrays.positions.length,3,usage);}if(arrays.normals){if(canInterleave){core.interleavedNormalOffset=prepareInterleaveBuffer(arrays.normals,3);}core.normalBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,arrays.normals,arrays.normals.length,3,usage);}if(arrays.uv){if(canInterleave){core.interleavedUVOffset=prepareInterleaveBuffer(arrays.uv,2);}core.uvBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,arrays.uv,arrays.uv.length,2,usage);}if(arrays.uv2){if(canInterleave){core.interleavedUV2Offset=prepareInterleaveBuffer(arrays.uv2,2);}core.uvBuf2=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,arrays.uv2,arrays.uv2.length,2,usage);}if(arrays.colors){if(canInterleave){core.interleavedColorOffset=prepareInterleaveBuffer(arrays.colors,4);}core.colorBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,arrays.colors,arrays.colors.length,4,usage);}if(arrays.indices){core.indexBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ELEMENT_ARRAY_BUFFER,arrays.indices,arrays.indices.length,1,usage);}if(interleavedValues>0&&canInterleave){// We'll place the vertex attribute data interleaved in this array.
// This will enable us to use less bindBuffer calls and make the data
// efficient to address on the GPU.
var interleaved=[];var arrayCount=interleavedArrays.length;for(var i=0;i<dataLength;++i){for(var j=0;j<arrayCount;++j){var stride=interleavedArrayStrides[j];for(var k=0;k<stride;++k){interleaved.push(interleavedArrays[j][i*stride+k]);}}}core.interleavedStride=interleavedValues*4;// in bytes
core.interleavedBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,new Float32Array(interleaved),interleaved.length,interleavedValues,usage);core.interleavedBuf.dirty=false;}}catch(e){// Allocation failure - delete whatever buffers got allocated
destroyBuffers(core);throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Failed to allocate geometry: "+e);}};SceneJS.Geometry.prototype._updateArray=function(array,items,offset){var arrayLen=array.length;var itemsLen=items.length;if(itemsLen+offset>arrayLen){itemsLen-=itemsLen+offset-arrayLen;}for(var i=offset,j=0;j<itemsLen;i++,j++){array[i]=items[j];}};/** (re)builds normal vectors from vertices
     * @private
     */SceneJS.Geometry.prototype._buildNormals=function(positions,indices){var nvecs=new Array(positions.length/3);var j0;var j1;var j2;var v1;var v2;var v3;for(var i=0,len=indices.length-3;i<len;i+=3){j0=indices[i+0];j1=indices[i+1];j2=indices[i+2];v1=[positions[j0*3+0],positions[j0*3+1],positions[j0*3+2]];v2=[positions[j1*3+0],positions[j1*3+1],positions[j1*3+2]];v3=[positions[j2*3+0],positions[j2*3+1],positions[j2*3+2]];v2=SceneJS_math_subVec4(v2,v1,[0,0,0,0]);v3=SceneJS_math_subVec4(v3,v1,[0,0,0,0]);var n=SceneJS_math_normalizeVec4(SceneJS_math_cross3Vec4(v2,v3,[0,0,0,0]),[0,0,0,0]);if(!nvecs[j0])nvecs[j0]=[];if(!nvecs[j1])nvecs[j1]=[];if(!nvecs[j2])nvecs[j2]=[];nvecs[j0].push(n);nvecs[j1].push(n);nvecs[j2].push(n);}var normals=new Array(positions.length);// now go through and average out everything
for(var i=0,len=nvecs.length;i<len;i++){var count=nvecs[i].length;var x=0;var y=0;var z=0;for(var j=0;j<count;j++){x+=nvecs[i][j][0];y+=nvecs[i][j][1];z+=nvecs[i][j][2];}normals[i*3+0]=x/count;normals[i*3+1]=y/count;normals[i*3+2]=z/count;}return normals;};SceneJS.Geometry.prototype.setSource=function(sourceConfigs){this._sourceConfigs=sourceConfigs;var source=this._source;if(source&&source.configure){source.configure(sourceConfigs);}};SceneJS.Geometry.prototype.getSource=function(){return this._sourceConfigs||{};};SceneJS.Geometry.prototype.setPositions=function(data){if(data.positions&&this._core.vertexBuf){this._boundary=null;var core=this._core;core.vertexBuf.bind();core.vertexBuf.setData(new Float32Array(data.positions),data.positionsOffset||0);core.arrays.positions.set(data.positions,data.positionsOffset||0);this._engine.display.imageDirty=true;if(core.interleavedBuf){core.interleavedBuf.dirty=true;}}};SceneJS.Geometry.prototype.getPositions=function(){return this._core.arrays?this._core.arrays.positions:null;};SceneJS.Geometry.prototype.setNormals=function(data){if(data.normals&&this._core.normalBuf){var core=this._core;core.normalBuf.bind();core.normalBuf.setData(new Float32Array(data.normals),data.normalsOffset||0);core.arrays.normals.set(data.normals,data.normalsOffset||0);this._engine.display.imageDirty=true;if(core.interleavedBuf){core.interleavedBuf.dirty=true;}}};SceneJS.Geometry.prototype.getNormals=function(){return this._core.arrays?this._core.arrays.normals:null;};SceneJS.Geometry.prototype.setColors=function(data){if(data.colors&&this._core.colorBuf){var core=this._core;core.colorBuf.bind();core.colorBuf.setData(new Float32Array(data.colors),data.colorsOffset||0);core.arrays.colors.set(data.colors,data.colorsOffset||0);this._engine.display.imageDirty=true;if(core.interleavedBuf){core.interleavedBuf.dirty=true;}}};SceneJS.Geometry.prototype.getColors=function(){return this._core.arrays?this._core.arrays.colors:null;};SceneJS.Geometry.prototype.getIndices=function(){return this._core.arrays?this._core.arrays.indices:null;};SceneJS.Geometry.prototype.setUV=function(data){if(data.uv&&this._core.uvBuf){var core=this._core;core.uvBuf.bind();core.uvBuf.setData(new Float32Array(data.uv),data.uvOffset||0);core.arrays.uv.set(data.uv,data.uvOffset||0);this._engine.display.imageDirty=true;if(core.interleavedBuf){core.interleavedBuf.dirty=true;}}};SceneJS.Geometry.prototype.getUV=function(){return this._core.arrays?this._core.arrays.uv:null;};SceneJS.Geometry.prototype.setUV2=function(data){if(data.uv2&&this._core.uv2Buf){var core=this._core;core.uv2Buf.bind();core.uv2Buf.setData(new Float32Array(data.uv2),data.uv2Offset||0);core.arrays.uv2.set(data.uv2,data.uv2Offset||0);this._engine.display.imageDirty=true;if(core.interleavedBuf){core.interleavedBuf.dirty=true;}}};SceneJS.Geometry.prototype.getUV2=function(){return this._core.arrays?this._core.arrays.uv2:null;};SceneJS.Geometry.prototype.getPrimitive=function(){return this.primitive;};/** Returns the Model-space boundary of this geometry
     *
      * @returns {*}
     */SceneJS.Geometry.prototype.getBoundary=function(){if(this._boundary){return this._boundary;}var arrays=this._core.arrays;if(!arrays){return null;}var positions=arrays.positions;if(!positions){return null;}this._boundary={xmin:SceneJS_math_MAX_DOUBLE,ymin:SceneJS_math_MAX_DOUBLE,zmin:SceneJS_math_MAX_DOUBLE,xmax:SceneJS_math_MIN_DOUBLE,ymax:SceneJS_math_MIN_DOUBLE,zmax:SceneJS_math_MIN_DOUBLE};var x,y,z;for(var i=0,len=positions.length-2;i<len;i+=3){x=positions[i];y=positions[i+1];z=positions[i+2];if(x<this._boundary.xmin){this._boundary.xmin=x;}if(y<this._boundary.ymin){this._boundary.ymin=y;}if(z<this._boundary.zmin){this._boundary.zmin=z;}if(x>this._boundary.xmax){this._boundary.xmax=x;}if(y>this._boundary.ymax){this._boundary.ymax=y;}if(z>this._boundary.zmax){this._boundary.zmax=z;}}return this._boundary;};SceneJS.Geometry.prototype._compile=function(ctx){if(this._core._loading){// TODO: Breaks with asynch loaded cores - this node needs to recompile when target core is loaded
this._compileNodes(ctx);return;}var core=this._core;if(!core.vertexBuf){/* SceneJS.Geometry has no vertex buffer - it must be therefore be indexing a vertex/uv buffers defined
             * by a higher Geometry, as part of a composite geometry:
             *
             * It must therefore inherit the vertex buffer, along with UV coord buffers.
             *
             * We'll leave it to the render state graph traversal to ensure that the
             * vertex and UV buffers are not needlessly rebound for this geometry.
             */core=this._inheritVBOs(core);}if(core.indexBuf){// Can only render when we have indices
core.hash=[// Safe to build geometry hash here - geometry is immutable
core.normalBuf?"t":"f",core.uvBuf?"t":"f",core.uvBuf2?"t":"f",core.colorBuf?"t":"f",core.primitive].join("");core.stateId=this._core.stateId;core.type="geometry";this._engine.display.geometry=coreStack[stackLen++]=core;SceneJS_events.fireEvent(SceneJS_events.OBJECT_COMPILING,{// Pull in state updates from scenes nodes
display:this._engine.display});this._engine.display.buildObject(this.id);// Use node ID since we may inherit from many cores
}else{coreStack[stackLen++]=this._core;}this._compileNodes(ctx);stackLen--;};SceneJS.Geometry.prototype._inheritVBOs=function(core){var core2={primitive:core.primitive,boundary:core.boundary,normalBuf:core.normalBuf,uvBuf:core.uvBuf,uvBuf2:core.uvBuf2,colorBuf:core.colorBuf,interleavedBuf:core.interleavedBuf,indexBuf:core.indexBuf,interleavedStride:core.interleavedStride,interleavedPositionOffset:core.interleavedPositionOffset,interleavedNormalOffset:core.interleavedNormalOffset,interleavedUVOffset:core.interleavedUVOffset,interleavedUV2Offset:core.interleavedUV2Offset,interleavedColorOffset:core.interleavedColorOffset};for(var i=stackLen-1;i>=0;i--){if(coreStack[i].vertexBuf){core2.vertexBuf=coreStack[i].vertexBuf;core2.boundary=coreStack[i].boundary;core2.normalBuf=coreStack[i].normalBuf;core2.uvBuf=coreStack[i].uvBuf;// Vertex and UVs are a package
core2.uvBuf2=coreStack[i].uvBuf2;core2.colorBuf=coreStack[i].colorBuf;core2.interleavedBuf=coreStack[i].interleavedBuf;core2.interleavedStride=coreStack[i].interleavedStride;core2.interleavedPositionOffset=coreStack[i].interleavedPositionOffset;core2.interleavedNormalOffset=coreStack[i].interleavedNormalOffset;core2.interleavedUVOffset=coreStack[i].interleavedUVOffset;core2.interleavedUV2Offset=coreStack[i].interleavedUV2Offset;core2.interleavedColorOffset=coreStack[i].interleavedColorOffset;return core2;}}return core2;};SceneJS.Geometry.prototype._destroy=function(){this._engine.display.removeObject(this.id);/* Destroy core if no other references
         */if(this._core.useCount==1){this._destroyNodeCore();if(this._source&&this._source.destroy){this._source.destroy();}}};SceneJS.Geometry.prototype._destroyNodeCore=function(){if(document.getElementById(this._engine.canvas.canvasId)){// Context won't exist if canvas has disappeared
destroyBuffers(this._core);}};}();(function(){/**
     * The default state core singleton for {@link SceneJS.Stage} nodes
     */var defaultCore={type:"stage",stateId:SceneJS._baseStateId++,priority:0,pickable:true,enabled:true};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.stage=defaultCore;stackLen=0;});/**
     * @class Scene graph node which assigns the {@link SceneJS.Geometry}s within its subgraph to a prioritised render bin
     * @extends SceneJS.Node
     */SceneJS.Stage=SceneJS_NodeFactory.createNodeType("stage");SceneJS.Stage.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
this._core.priority=params.priority||0;this._core.enabled=params.enabled!==false;this._core.pickable=!!params.pickable;}};SceneJS.Stage.prototype.setPriority=function(priority){priority=priority||0;if(this._core.priority!=priority){this._core.priority=priority;this._engine.display.stateOrderDirty=true;}};SceneJS.Stage.prototype.getPriority=function(){return this._core.priority;};SceneJS.Stage.prototype.setEnabled=function(enabled){enabled=!!enabled;if(this._core.enabled!=enabled){this._core.enabled=enabled;this._engine.display.drawListDirty=true;}};SceneJS.Stage.prototype.getEnabled=function(){return this._core.enabled;};SceneJS.Stage.prototype.getEnabled=function(){return this._core.enabled;};SceneJS.Stage.prototype._compile=function(ctx){this._engine.display.stage=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.stage=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();(function(){/**
     * The default state core singleton for {@link SceneJS.Layer} nodes
     */var defaultCore={type:"layer",stateId:SceneJS._baseStateId++,priority:0,enabled:true};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.layer=defaultCore;stackLen=0;});/**
     * @class Scene graph node which assigns the {@link SceneJS.Geometry}s within its subgraph to a prioritised render bin
     * @extends SceneJS.Node
     */SceneJS.Layer=SceneJS_NodeFactory.createNodeType("layer");SceneJS.Layer.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
this._core.priority=params.priority||0;this._core.enabled=params.enabled!==false;}};SceneJS.Layer.prototype.setPriority=function(priority){priority=priority||0;if(this._core.priority!=priority){this._core.priority=priority;this._engine.display.stateOrderDirty=true;}};SceneJS.Layer.prototype.getPriority=function(){return this._core.priority;};SceneJS.Layer.prototype.setEnabled=function(enabled){enabled=!!enabled;if(this._core.enabled!=enabled){this._core.enabled=enabled;this._engine.display.drawListDirty=true;}};SceneJS.Layer.prototype.getEnabled=function(){return this._core.enabled;};SceneJS.Layer.prototype.getEnabled=function(){return this._core.enabled;};SceneJS.Layer.prototype.setClearDepth=function(clearDepth){clearDepth=clearDepth||0;if(this._core.clearDepth!=clearDepth){this._core.clearDepth=clearDepth;this._engine.display.drawListDirty=true;}};SceneJS.Layer.prototype.getClearDepth=function(){return this._core.clearDepth;};SceneJS.Layer.prototype._compile=function(ctx){this._engine.display.layer=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.layer=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();/**
 * @class Scene graph node which assigns nodes in its subgraph to a library
 * @extends SceneJS.Node
 */SceneJS.Library=SceneJS_NodeFactory.createNodeType("library");SceneJS.Library.prototype._compile=function(ctx){// Bypass child nodes
};(function(){/**
     * The default state core singleton for {@link SceneJS.Lights} nodes
     */var defaultCore={type:"lights",stateId:SceneJS._baseStateId++,hash:null,empty:false,lights:[{mode:"ambient",color:[0.7,0.7,0.8],diffuse:true,specular:false},{mode:"dir",color:[1.0,1.0,1.0],diffuse:true,specular:true,dir:[-0.5,-0.5,-1.0],space:"view"},{mode:"dir",color:[1.0,1.0,1.0],diffuse:false,specular:true,dir:[1.0,-0.9,-0.7],space:"view"}]};makeHash(defaultCore);function makeHash(core){if(core.lights&&core.lights.length>0){var lights=core.lights;var parts=[];var light;for(var i=0,len=lights.length;i<len;i++){light=lights[i];parts.push(light.mode);if(light.specular){parts.push("s");}if(light.diffuse){parts.push("d");}parts.push(light.space=="world"?"w":"v");}core.hash=parts.join("");}else{core.hash="";}}var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.lights=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines light sources to illuminate the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */SceneJS.Lights=SceneJS_NodeFactory.createNodeType("lights");SceneJS.Lights.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
var lights=params.lights;if(!lights){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"lights node attribute missing : 'lights'");}this._core.lights=this._core.lights||[];for(var i=0,len=lights.length;i<len;i++){this._initLight(i,lights[i]);}}};SceneJS.Lights.prototype._initLight=function(index,cfg){var light=[];this._core.lights[index]=light;var mode=cfg.mode||"dir";if(mode!="dir"&&mode!="point"&&mode!="ambient"){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Light mode not supported - should be 'dir' or 'point' or 'ambient'");}var pos=cfg.pos;var dir=cfg.dir;var color=cfg.color;light.color=[color.r!=undefined?color.r:1.0,color.g!=undefined?color.g:1.0,color.b!=undefined?color.b:1.0];// Ambient lights hardwired to contribute to diffuse lighting
light.mode=mode;light.diffuse=mode=="ambient"?true:cfg.diffuse!=undefined?cfg.diffuse:true;light.specular=mode=="ambient"?false:cfg.specular!=undefined?cfg.specular:true;light.pos=cfg.pos?[pos.x||0,pos.y||0,pos.z||0]:undefined;light.dir=cfg.dir?[dir.x||0,dir.y||0,dir.z||0]:undefined;light.attenuation=[cfg.constantAttenuation!=undefined?cfg.constantAttenuation:0.0,cfg.linearAttenuation||0.0,cfg.quadraticAttenuation||0.0];var space=cfg.space;if(!space){space="world";}else if(space!="view"&&space!="world"){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"lights node invalid value for property 'space': '"+space+"' - should be 'view' or 'world'");}light.space=space;this._core.hash=null;};SceneJS.Lights.prototype.setLights=function(lights){var indexNum;for(var index in lights){if(lights.hasOwnProperty(index)){if(index!=undefined||index!=null){indexNum=parseInt(index);if(indexNum<0||indexNum>=this._core.lights.length){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Invalid argument to set 'lights': index out of range ("+this._core.lights.length+" lights defined)");}this._setLight(indexNum,lights[index]||{});}}}this._engine.branchDirty(this);// Schedule recompilation of this subgraph
};SceneJS.Lights.prototype._setLight=function(index,cfg){var light=this._core.lights[index];// Impact of light update
var imageDirty=false;// Redraw display list?
var branchDirty=false;// Recompile scene branch?
if(cfg.mode&&cfg.mode!=light.mode){var mode=cfg.mode;if(mode!="dir"&&mode!="point"&&mode!="ambient"){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Light mode not supported - should be 'dir' or 'point' or 'ambient'");}light.mode=mode;light.diffuse=mode=="ambient"?true:cfg.diffuse!=undefined?cfg.diffuse:true;light.specular=mode=="ambient"?false:cfg.specular!=undefined?cfg.specular:true;branchDirty=true;}if(cfg.color){var color=cfg.color;light.color=[color.r!=undefined?color.r:1.0,color.g!=undefined?color.g:1.0,color.b!=undefined?color.b:1.0];imageDirty=true;}var pos=cfg.pos;if(pos){light.pos=[pos.x||0,pos.y||0,pos.z||0];imageDirty=true;}var dir=cfg.dir;if(dir){light.dir=[dir.x||0,dir.y||0,dir.z||0];imageDirty=true;}if(cfg.constantAttenuation!=undefined){light.attenuation[0]=cfg.constantAttenuation;imageDirty=true;}if(cfg.linearAttenuation!=undefined){light.attenuation[1]=cfg.linearAttenuation;imageDirty=true;}if(cfg.quadraticAttenuation!=undefined){light.attenuation[2]=cfg.quadraticAttenuation;imageDirty=true;}if(cfg.space&&cfg.space!=light.space){var space=cfg.space;if(space!="view"&&space!="world"){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"lights node invalid value for property 'space': '"+space+"' - should be 'view' or 'world'");}light.space=space;this._core.hash=null;branchDirty=true;}if(cfg.specular!=undefined&&cfg.specular!=light.specular){light.specular=cfg.specular;branchDirty=true;}if(cfg.diffuse!=undefined&&cfg.diffuse!=light.diffuse){light.diffuse=cfg.diffuse;branchDirty=true;}if(branchDirty){this._engine.branchDirty(this);// Schedule recompilation of this subgraph
}else if(imageDirty){this._engine.display.imageDirty=true;}this._core.hash=null;};SceneJS.Lights.prototype._compile=function(ctx){if(!this._core.hash){makeHash(this._core);}this._engine.display.lights=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.lights=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();(function(){var defaultMatrix=SceneJS_math_lookAtMat4c(0,0,10,0,0,0,0,1,0);var defaultMat=new Float32Array(defaultMatrix);var normalMat=SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(defaultMat,SceneJS_math_mat4()));var defaultNormalMat=new Float32Array(normalMat);/**
     * The default state core singleton for {@link SceneJS.Lookat} nodes
     */var defaultCore={type:"lookAt",stateId:SceneJS._baseStateId++,matrix:defaultMatrix,mat:defaultMat,normalMatrix:normalMat,normalMat:defaultNormalMat,lookAt:SceneJS_math_LOOKAT_ARRAYS};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.viewTransform=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines the viewing transform for the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */SceneJS.Lookat=SceneJS_NodeFactory.createNodeType("lookAt");SceneJS.Lookat.prototype._init=function(params){this._mat=null;this._xf={type:"lookat"};if(this._core.useCount==1){// This node is the resource definer
this._core.eyeX=0;this._core.eyeY=0;this._core.eyeZ=10.0;this._core.lookX=0;this._core.lookY=0;this._core.lookZ=0;this._core.upX=0;this._core.upY=1;this._core.upZ=0;if(!params.eye&&!params.look&&!params.up){this.setEye({x:0,y:0,z:10.0});this.setLook({x:0,y:0,z:0});this.setUp({x:0,y:1.0,z:0});}else{this.setEye(params.eye);this.setLook(params.look);this.setUp(params.up);}var core=this._core;var self=this;this._core.rebuild=function(){core.matrix=SceneJS_math_lookAtMat4c(core.eyeX,core.eyeY,core.eyeZ,core.lookX,core.lookY,core.lookZ,core.upX,core.upY,core.upZ);core.lookAt={eye:[core.eyeX,core.eyeY,core.eyeZ],look:[core.lookX,core.lookY,core.lookZ],up:[core.upX,core.upY,core.upZ]};if(!core.mat){// Lazy-create arrays
core.mat=new Float32Array(core.matrix);core.normalMat=new Float32Array(SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(core.matrix,SceneJS_math_mat4())));}else{// Insert into arrays
core.mat.set(core.matrix);core.normalMat.set(SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(core.matrix,SceneJS_math_mat4())));}self.publish("matrix",core.matrix);core.dirty=false;};this._core.dirty=true;// Rebuild on every scene tick
// https://github.com/xeolabs/scenejs/issues/277
this._tick=this.getScene().on("tick",function(){if(self._core.dirty){self._core.rebuild();}});}};/**
     * Returns the default view transformation matrix
     * @return {Float32Array}
     */SceneJS.Lookat.getDefaultMatrix=function(){return defaultMat;};SceneJS.Lookat.prototype.setEye=function(eye){eye=eye||{};if(eye.x!=undefined&&eye.x!=null){this._core.eyeX=eye.x;}if(eye.y!=undefined&&eye.y!=null){this._core.eyeY=eye.y;}if(eye.z!=undefined&&eye.z!=null){this._core.eyeZ=eye.z;}this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incEye=function(eye){eye=eye||{};this._core.eyeX+=eye.x!=undefined&&eye.x!=null?eye.x:0;this._core.eyeY+=eye.y!=undefined&&eye.y!=null?eye.y:0;this._core.eyeZ+=eye.z!=undefined&&eye.z!=null?eye.z:0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setEyeX=function(x){this._core.eyeX=x||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setEyeY=function(y){this._core.eyeY=y||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setEyeZ=function(z){this._core.eyeZ=z||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incEyeX=function(x){this._core.eyeX+=x;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incEyeY=function(y){this._core.eyeY+=y;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incEyeZ=function(z){this._core.eyeZ+=z;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.getEye=function(){return{x:this._core.eyeX,y:this._core.eyeY,z:this._core.eyeZ};};SceneJS.Lookat.prototype.setLook=function(look){look=look||{};if(look.x!=undefined&&look.x!=null){this._core.lookX=look.x;}if(look.y!=undefined&&look.y!=null){this._core.lookY=look.y;}if(look.z!=undefined&&look.z!=null){this._core.lookZ=look.z;}this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incLook=function(look){look=look||{};this._core.lookX+=look.x!=undefined&&look.x!=null?look.x:0;this._core.lookY+=look.y!=undefined&&look.y!=null?look.y:0;this._core.lookZ+=look.z!=undefined&&look.z!=null?look.z:0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setLookX=function(x){this._core.lookX=x||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setLookY=function(y){this._core.lookY=y||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setLookZ=function(z){this._core.lookZ=z||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incLookX=function(x){this._core.lookX+=x;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incLookY=function(y){this._core.lookY+=y;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incLookZ=function(z){this._core.lookZ+=z;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.getLook=function(){return{x:this._core.lookX,y:this._core.lookY,z:this._core.lookZ};};SceneJS.Lookat.prototype.setUp=function(up){up=up||{};if(up.x!=undefined&&up.x!=null){this._core.upX=up.x;}if(up.y!=undefined&&up.y!=null){this._core.upY=up.y;}if(up.z!=undefined&&up.z!=null){this._core.upZ=up.z;}this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incUp=function(up){up=up||{};this._core.upX+=up.x!=undefined&&up.x!=null?up.x:0;this._core.upY+=up.y!=undefined&&up.y!=null?up.y:0;this._core.upZ+=up.z!=undefined&&up.z!=null?up.z:0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setUpX=function(x){this._core.upX=x||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setUpY=function(y){this._core.upY=y||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.setUpZ=function(z){this._core.upZ=z||0;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incUpX=function(x){this._core.upX+=x;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incUpY=function(y){this._core.upY+=y;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.incUpZ=function(z){this._core.upZ+=z;this._core.dirty=true;this._engine.display.imageDirty=true;return this;};SceneJS.Lookat.prototype.getUp=function(){return{x:this._core.upX,y:this._core.upY,z:this._core.upZ};};/**
     * Returns a copy of the matrix as a 1D array of 16 elements
     * @returns {Number[16]}
     */SceneJS.Lookat.prototype.getMatrix=function(){if(this._core.dirty){this._core.rebuild();}return this._core.matrix.slice(0);};SceneJS.Lookat.prototype.getAttributes=function(){return{look:{x:this._core.lookX,y:this._core.lookY,z:this._core.lookZ},eye:{x:this._core.eyeX,y:this._core.eyeY,z:this._core.eyeZ},up:{x:this._core.upX,y:this._core.upY,z:this._core.upZ}};};SceneJS.Lookat.prototype._compile=function(ctx){this._engine.display.viewTransform=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.viewTransform=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.Lookat.prototype._destroy=function(){// Stop publishing matrix on each tick
this.getScene().off(this._tick);};})();/*

 TODO: material system from virtualworldframework:

 "color":
 "ambient":
 "specColor":
 "shininess":
 "reflect":
 "specular":
 "emit":
 "alpha":
 "binaryAlpha":
 */new function(){/**
     * The default state core singleton for {@link SceneJS.Material} nodes
     */var defaultCore={type:"material",stateId:SceneJS._baseStateId++,baseColor:[1.0,1.0,1.0],specularColor:[1.0,1.0,1.0],specular:1.0,shine:70.0,alpha:1.0,emit:0.0};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.material=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines surface material properties for the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */SceneJS.Material=SceneJS_NodeFactory.createNodeType("material");SceneJS.Material.prototype._init=function(params){if(this._core.useCount==1){this.setBaseColor(params.color||params.baseColor);this.setSpecularColor(params.specularColor);this.setSpecular(params.specular);this.setShine(params.shine);this.setEmit(params.emit);this.setAlpha(params.alpha);}};/**
     * @deprecated
     * @param color
     * @return {*}
     */SceneJS.Material.prototype.setBaseColor=function(color){var defaultBaseColor=defaultCore.baseColor;this._core.baseColor=color?[color.r!=undefined&&color.r!=null?color.r:defaultBaseColor[0],color.g!=undefined&&color.g!=null?color.g:defaultBaseColor[1],color.b!=undefined&&color.b!=null?color.b:defaultBaseColor[2]]:defaultCore.baseColor;this._engine.display.imageDirty=true;return this;};SceneJS.Material.prototype.setColor=SceneJS.Material.prototype.setBaseColor;/**
     * @deprecated
     * @return {Object}
     */SceneJS.Material.prototype.getBaseColor=function(){return{r:this._core.baseColor[0],g:this._core.baseColor[1],b:this._core.baseColor[2]};};SceneJS.Material.prototype.getColor=SceneJS.Material.prototype.getBaseColor;SceneJS.Material.prototype.setSpecularColor=function(color){var defaultSpecularColor=defaultCore.specularColor;this._core.specularColor=color?[color.r!=undefined&&color.r!=null?color.r:defaultSpecularColor[0],color.g!=undefined&&color.g!=null?color.g:defaultSpecularColor[1],color.b!=undefined&&color.b!=null?color.b:defaultSpecularColor[2]]:defaultCore.specularColor;this._engine.display.imageDirty=true;return this;};SceneJS.Material.prototype.getSpecularColor=function(){return{r:this._core.specularColor[0],g:this._core.specularColor[1],b:this._core.specularColor[2]};};SceneJS.Material.prototype.setSpecular=function(specular){this._core.specular=specular!=undefined&&specular!=null?specular:defaultCore.specular;this._engine.display.imageDirty=true;return this;};SceneJS.Material.prototype.getSpecular=function(){return this._core.specular;};SceneJS.Material.prototype.setShine=function(shine){this._core.shine=shine!=undefined&&shine!=null?shine:defaultCore.shine;this._engine.display.imageDirty=true;return this;};SceneJS.Material.prototype.getShine=function(){return this._core.shine;};SceneJS.Material.prototype.setEmit=function(emit){this._core.emit=emit!=undefined&&emit!=null?emit:defaultCore.emit;this._engine.display.imageDirty=true;return this;};SceneJS.Material.prototype.getEmit=function(){return this._core.emit;};SceneJS.Material.prototype.setAlpha=function(alpha){this._core.alpha=alpha!=undefined&&alpha!=null?alpha:defaultCore.alpha;this._engine.display.imageDirty=true;return this;};SceneJS.Material.prototype.getAlpha=function(){return this._core.alpha;};SceneJS.Material.prototype._compile=function(ctx){this._engine.display.material=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.material=--stackLen>0?coreStack[stackLen-1]:defaultCore;};}();new function(){/**
     * The default state core singleton for {@link SceneJS.MorphGeometry} nodes
     */var defaultCore={type:"morphGeometry",stateId:SceneJS._baseStateId++,hash:"",//         empty: true,
morph:null};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.morphGeometry=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines morphing behaviour for the {@link SceneJS.Geometry}s within its subgraph
     * @extends SceneJS.Node
     */SceneJS.MorphGeometry=SceneJS_NodeFactory.createNodeType("morphGeometry");SceneJS.MorphGeometry.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
this._sourceConfigs=params.source;this._source=null;if(params.source){/*---------------------------------------------------------------------------------------------------
                 * Build node core (possibly asynchronously) using a factory object
                 *--------------------------------------------------------------------------------------------------*/if(!params.source.type){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"morphGeometry config expected: source.type");}var self=this;SceneJS.Plugins.getPlugin("morphGeometry",this._sourceConfigs.type,function(sourceService){if(!sourceService){throw SceneJS_error.fatalError(SceneJS.errors.PLUGIN_INVALID,"morphGeometry: no support for source type '"+self._sourceConfigs.type+"' - need to include plugin for self source type, "+"or install a custom source service with SceneJS.Plugins.addPlugin(SceneJS.Plugins.MORPH_GEO_SOURCE_PLUGIN, '"+self._sourceConfigs.type+"', <your service>).");}if(!sourceService.getSource){throw SceneJS_error.fatalError(SceneJS.errors.PLUGIN_INVALID,"morphGeometry: 'getSource' method not found on MorphGeoFactoryService (SceneJS.Plugins.MORPH_GEO_SOURCE_PLUGIN)");}self._source=sourceService.getSource();if(!self._source.subscribe){throw SceneJS_error.fatalError(SceneJS.errors.PLUGIN_INVALID,"morphGeometry: 'subscribe' method not found on source provided by plugin type '"+params.source.type+"'");}var created=false;self._source.subscribe(// Get notification when factory creates the morph
function(data){if(!created){self._buildNodeCore(data);self._core._loading=false;self._fireEvent("loaded");self._engine.branchDirty(self);// TODO
created=true;}else{if(data.targets){var dataTargets=data.targets;var dataTarget;var index;var morphTargets=self._core.targets;var morphTarget;for(var i=0,len=dataTargets.length;i<len;i++){dataTarget=dataTargets[i];index=dataTarget.targetIndex;morphTarget=morphTargets[index];if(dataTarget.positions&&morphTarget.vertexBuf){morphTarget.vertexBuf.bind();morphTarget.vertexBuf.setData(dataTarget.positions,0);}}}// TODO: factory can update factor?
// self.setFactor(params.factor);
self._display.imageDirty=true;}});self._core._loading=true;self._fireEvent("loading");self._source.configure(self._sourceConfigs);});}else if(params.create instanceof Function){/*---------------------------------------------------------------------------------------------------
                 * Build node core from JSON arrays and primitive name returned by factory function
                 *--------------------------------------------------------------------------------------------------*/this._buildNodeCore(params.create());}else{/*---------------------------------------------------------------------------------------------------
                 * Build node core from JSON arrays and primitive name given in node properties
                 *--------------------------------------------------------------------------------------------------*/this._buildNodeCore(params);}this._core.webglRestored=function(){//self._buildNodeCore(self._engine.canvas.gl, self._core);
};this.setFactor(params.factor);}// TODO: factor shared on cores?
this._core.factor=params.factor||0;this._core.clamp=!!params.clamp;};SceneJS.MorphGeometry.prototype._buildNodeCore=function(data){var targetsData=data.targets||[];if(targetsData.length<2){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"morphGeometry node should have at least two targets");}var keysData=data.keys||[];if(keysData.length!=targetsData.length){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"morphGeometry node mismatch in number of keys and targets");}var core=this._core;var gl=this._engine.canvas.gl;var usage=gl.STATIC_DRAW;//var usage = (!arrays.fixed) ? gl.STREAM_DRAW : gl.STATIC_DRAW;
core.keys=keysData;core.targets=[];core.key1=0;core.key2=1;/* First target's arrays are defaults for where not given on previous and subsequent targets.
         * When target does have array, subsequent targets without array inherit it.
         */var positions;var normals;var uv;var uv2;var targetData;for(var i=0,len=targetsData.length;i<len;i++){targetData=targetsData[i];if(!positions&&targetData.positions){positions=targetData.positions;}if(!normals&&targetData.normals){normals=targetData.normals;}if(!uv&&targetData.uv){uv=targetData.uv;}if(!uv2&&targetData.uv2){uv2=targetData.uv2;}}try{var target;var arry;for(var i=0,len=targetsData.length;i<len;i++){targetData=targetsData[i];target={};arry=targetData.positions||positions;if(arry){target.positions=typeof arry=="Float32Array"?arry:new Float32Array(arry);target.vertexBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,target.positions,arry.length,3,usage);positions=arry;}arry=targetData.normals||normals;if(arry){target.normals=typeof arry=="Float32Array"?arry:new Float32Array(arry);target.normalBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,target.normals,arry.length,3,usage);normals=arry;}arry=targetData.uv||uv;if(arry){target.uv=typeof arry=="Float32Array"?arry:new Float32Array(arry);target.uvBuf=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,target.uv,arry.length,2,usage);uv=arry;}arry=targetData.uv2||uv2;if(arry){target.uv2=typeof arry=="Float32Array"?arry:new Float32Array(arry);target.uvBuf2=new SceneJS._webgl.ArrayBuffer(gl,gl.ARRAY_BUFFER,target.uv2,arry.length,2,usage);uv2=arry;}core.targets.push(target);// We'll iterate this to destroy targets when we recover from error
}}catch(e){/* Allocation failure - deallocate target VBOs
             */for(var i=0,len=core.targets.length;i<len;i++){target=core.targets[i];if(target.vertexBuf){target.vertexBuf.destroy();}if(target.normalBuf){target.normalBuf.destroy();}if(target.uvBuf){target.uvBuf.destroy();}if(target.uvBuf2){target.uvBuf2.destroy();}}throw SceneJS_error.fatalError(SceneJS.errors.ERROR,"Failed to allocate VBO(s) for morphGeometry: "+e);}};SceneJS.MorphGeometry.prototype.setSource=function(sourceConfigs){this._sourceConfigs=sourceConfigs;var source=this._source;if(source){source.configure(sourceConfigs);}};SceneJS.MorphGeometry.prototype.getSource=function(){return this._sourceConfigs;};SceneJS.MorphGeometry.prototype.setFactor=function(factor){factor=factor||0.0;var core=this._core;var keys=core.keys;var key1=core.key1;var key2=core.key2;if(factor<keys[0]){key1=0;key2=1;}else if(factor>keys[keys.length-1]){key1=keys.length-2;key2=key1+1;}else{while(keys[key1]>factor){key1--;key2--;}while(keys[key2]<factor){key1++;key2++;}}/* Normalise factor to range [0.0..1.0] for the target frame
         */core.factor=(factor-keys[key1])/(keys[key2]-keys[key1]);core.key1=key1;core.key2=key2;this._engine.display.imageDirty=true;};SceneJS.MorphGeometry.prototype.getFactor=function(){return this._core.factor;};SceneJS.MorphGeometry.prototype.getKeys=function(){return this._core.keys;};SceneJS.MorphGeometry.prototype.getTargets=function(){return this._core.targets;};SceneJS.MorphGeometry.prototype._compile=function(ctx){if(!this._core.hash){this._makeHash();}this._engine.display.morphGeometry=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.morphGeometry=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.MorphGeometry.prototype._makeHash=function(){var core=this._core;if(core.targets.length>0){var target0=core.targets[0];// All targets have same arrays
var t="t";var f="f";core.hash=[target0.vertexBuf?t:f,target0.normalBuf?t:f,target0.uvBuf?t:f,target0.uvBuf2?t:f].join("");}else{core.hash="";}};SceneJS.MorphGeometry.prototype._destroy=function(){if(this._core.useCount==1){// Destroy core if no other references
if(document.getElementById(this._engine.canvas.canvasId)){// Context won't exist if canvas has disappeared
var core=this._core;var target;for(var i=0,len=core.targets.length;i<len;i++){target=core.targets[i];if(target.vertexBuf){target.vertexBuf.destroy();}if(target.normalBuf){target.normalBuf.destroy();}if(target.uvBuf){target.uvBuf.destroy();}if(target.uvBuf2){target.uvBuf2.destroy();}}}if(this._source&&this._source.destroy){this._source.destroy();}}};}();(function(){/**
     * The default state core singleton for {@link SceneJS.Name} nodes
     */var defaultCore={type:"name",stateId:SceneJS._baseStateId++,name:null};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.name=defaultCore;stackLen=0;});/**
     * @class Scene graph node which assigns a pick name to the {@link SceneJS.Geometry} nodes in its subgraph.
     * @extends SceneJS.Node
     */SceneJS.Name=SceneJS_NodeFactory.createNodeType("name");SceneJS.Name.prototype._init=function(params){this.setName(params.name);this._core.nodeId=this.id;};SceneJS.Name.prototype.setName=function(name){this._core.name=name||"unnamed";this._engine.branchDirty(this);// Need to recompile name path
};SceneJS.Name.prototype.getName=function(){return this._core.name;};SceneJS.Name.prototype._compile=function(ctx){this._engine.display.name=coreStack[stackLen++]=this._core;// (Re)build name path
var path=[];var name;for(var i=0;i<stackLen;i++){name=coreStack[i].name;if(name){path.push(name);}}this._core.path=path.join(".");this._compileNodes(ctx);this._engine.display.name=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();new function(){/**
     * The default state core singleton for {@link SceneJS.Renderer} nodes
     */var defaultCore={type:"renderer",stateId:SceneJS._baseStateId++,props:null};var canvas;// Currently active canvas
var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){canvas=params.engine.canvas;//                // TODO: Below is a HACK
//
//                defaultCore.props = createProps({  // Dont set props - just define for restoring to on props pop
//                    clear: {
//                        depth : true,
//                        color : true
//                    },
//                    // clearColor: {r: 0, g : 0, b : 0 },
//                    clearDepth: 1.0,
//                    enableDepthTest:true,
//                    enableCullFace: false,
//                    frontFace: "ccw",
//                    cullFace: "back",
//                    depthFunc: "less",
//                    depthRange: {
//                        zNear: 0,
//                        zFar: 1
//                    },
//                    enableScissorTest: false,
//                    viewport:{
//                        x : 1,
//                        y : 1,
//                        width: canvas.canvas.width,
//                        height: canvas.canvas.height
//                    },
//                    enableClip: undefined,
//                    enableBlend: false,
//                    blendFunc: {
//                        sfactor: "srcAlpha",
//                        dfactor: "one"
//                    }
//                });
stackLen=0;params.engine.display.renderer=coreStack[stackLen++]=defaultCore;});function createProps(props){var restore;if(stackLen>0){// can't restore when no previous props set
restore={};for(var name in props){if(props.hasOwnProperty(name)){if(!(props[name]==undefined)){restore[name]=getSuperProperty(name);}}}}processProps(props.props);return{props:props,setProps:function setProps(gl){setProperties(gl,props);},restoreProps:function restoreProps(gl){if(restore){restoreProperties(gl,restore);}}};}var getSuperProperty=function getSuperProperty(name){var props;var prop;for(var i=stackLen-1;i>=0;i--){props=coreStack[i].props;if(props){prop=props[name];if(prop!=undefined&&prop!=null){return props[name];}}}return null;// Cause default to be set
};function processProps(props){var prop;for(var name in props){if(props.hasOwnProperty(name)){prop=props[name];if(prop!=undefined&&prop!=null){if(glModeSetters[name]){props[name]=glModeSetters[name](null,prop);}else if(glStateSetters[name]){props[name]=glStateSetters[name](null,prop);}}}}}var setProperties=function setProperties(gl,props){for(var key in props){// Set order-insensitive properties (modes)
if(props.hasOwnProperty(key)){var setter=glModeSetters[key];if(setter){setter(gl,props[key]);}}}if(props.viewport){// Set order-sensitive properties (states)
glStateSetters.viewport(gl,props.viewport);}if(props.scissor){glStateSetters.clear(gl,props.scissor);}if(props.clear){glStateSetters.clear(gl,props.clear);}};/**
     * Restores previous renderer properties, except for clear - that's the reason we
     * have a seperate set and restore semantic - we don't want to keep clearing the buffer.
     */var restoreProperties=function restoreProperties(gl,props){var value;for(var key in props){// Set order-insensitive properties (modes)
if(props.hasOwnProperty(key)){value=props[key];if(value!=undefined&&value!=null){var setter=glModeSetters[key];if(setter){setter(gl,value);}}}}if(props.viewport){//  Set order-sensitive properties (states)
glStateSetters.viewport(gl,props.viewport);}if(props.scissor){glStateSetters.clear(gl,props.scissor);}};/**
     * Maps renderer node properties to WebGL gl enums
     * @private
     */var glEnum=function glEnum(gl,name){if(!name){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Null SceneJS.State node config: \""+name+"\"");}var result=SceneJS._webgl.enumMap[name];if(!result){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Unrecognised SceneJS.State node config value: \""+name+"\"");}var value=gl[result];if(!value){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"This browser's WebGL does not support renderer node config value: \""+name+"\"");}return value;};/**
     * Order-insensitive functions that set WebGL modes ie. not actually causing an
     * immediate change.
     *
     * These map to renderer properties and are called in whatever order their
     * property is found on the renderer config.
     *
     * Each of these wrap a state-setter function on the WebGL gl. Each function
     * also uses the glEnum map to convert its renderer node property argument to the
     * WebGL enum constant required by its wrapped function.
     *
     * When called with undefined/null gl, will condition and return the value given
     * ie. set it to default if value is undefined. When called with a gl, will
     * set the value on the gl using the wrapped function.
     *
     * @private
     */var glModeSetters={enableBlend:function enableBlend(gl,flag){if(!gl){if(flag==null||flag==undefined){flag=false;}return flag;}if(flag){gl.enable(gl.BLEND);}else{gl.disable(gl.BLEND);}},blendColor:function blendColor(gl,color){if(!gl){color=color||{};return{r:color.r||0,g:color.g||0,b:color.b||0,a:color.a==undefined||color.a==null?1:color.a};}gl.blendColor(color.r,color.g,color.b,color.a);},blendEquation:function blendEquation(gl,eqn){if(!gl){return eqn||"funcAdd";}gl.blendEquation(gl,glEnum(gl,eqn));},/** Sets the RGB blend equation and the alpha blend equation separately
         */blendEquationSeparate:function blendEquationSeparate(gl,eqn){if(!gl){eqn=eqn||{};return{rgb:eqn.rgb||"funcAdd",alpha:eqn.alpha||"funcAdd"};}gl.blendEquation(glEnum(gl,eqn.rgb),glEnum(gl,eqn.alpha));},blendFunc:function blendFunc(gl,funcs){if(!gl){funcs=funcs||{};return{sfactor:funcs.sfactor||"srcAlpha",dfactor:funcs.dfactor||"oneMinusSrcAlpha"};}gl.blendFunc(glEnum(gl,funcs.sfactor||"srcAlpha"),glEnum(gl,funcs.dfactor||"oneMinusSrcAlpha"));},blendFuncSeparate:function blendFuncSeparate(gl,func){if(!gl){func=func||{};return{srcRGB:func.srcRGB||"zero",dstRGB:func.dstRGB||"zero",srcAlpha:func.srcAlpha||"zero",dstAlpha:func.dstAlpha||"zero"};}gl.blendFuncSeparate(glEnum(gl,func.srcRGB||"zero"),glEnum(gl,func.dstRGB||"zero"),glEnum(gl,func.srcAlpha||"zero"),glEnum(gl,func.dstAlpha||"zero"));},clearColor:function clearColor(gl,color){if(!gl){color=color||{};return{r:color.r||0,g:color.g||0,b:color.b||0,a:color.a==undefined||color.a==null?1:color.a};}gl.clearColor(color.r,color.g,color.b,color.a);},clearDepth:function clearDepth(gl,depth){if(!gl){return depth==null||depth==undefined?1:depth;}gl.clearDepth(depth);},clearStencil:function clearStencil(gl,clearValue){if(!gl){return clearValue||0;}gl.clearStencil(clearValue);},colorMask:function colorMask(gl,color){if(!gl){color=color||{};return{r:color.r||0,g:color.g||0,b:color.b||0,a:color.a==undefined||color.a==null?1:color.a};}gl.colorMask(color.r,color.g,color.b,color.a);},enableCullFace:function enableCullFace(gl,flag){if(!gl){return flag;}if(flag){gl.enable(gl.CULL_FACE);}else{gl.disable(gl.CULL_FACE);}},cullFace:function cullFace(gl,mode){if(!gl){return mode||"back";}gl.cullFace(glEnum(gl,mode));},enableDepthTest:function enableDepthTest(gl,flag){if(!gl){if(flag==null||flag==undefined){flag=true;}return flag;}if(flag){gl.enable(gl.DEPTH_TEST);}else{gl.disable(gl.DEPTH_TEST);}},depthFunc:function depthFunc(gl,func){if(!gl){return func||"less";}gl.depthFunc(glEnum(gl,func));},enableDepthMask:function enableDepthMask(gl,flag){if(!gl){if(flag==null||flag==undefined){flag=true;}return flag;}gl.depthMask(flag);},depthRange:function depthRange(gl,range){if(!gl){range=range||{};return{zNear:range.zNear==undefined||range.zNear==null?0:range.zNear,zFar:range.zFar==undefined||range.zFar==null?1:range.zFar};}gl.depthRange(range.zNear,range.zFar);},frontFace:function frontFace(gl,mode){if(!gl){return mode||"ccw";}gl.frontFace(glEnum(gl,mode));},lineWidth:function lineWidth(gl,width){if(!gl){return width||1;}gl.lineWidth(width);},enableScissorTest:function enableScissorTest(gl,flag){if(!gl){return flag;}if(flag){gl.enable(gl.SCISSOR_TEST);}else{flag=false;gl.disable(gl.SCISSOR_TEST);}}};/**
     * Order-sensitive functions that immediately effect WebGL state change.
     *
     * These map to renderer properties and are called in a particular order since they
     * affect one another.
     *
     * Each of these wrap a state-setter function on the WebGL gl. Each function
     * also uses the glEnum map to convert its renderer node property argument to the
     * WebGL enum constant required by its wrapped function.
     *
     * @private
     */var glStateSetters={/** Set viewport on the given gl
         */viewport:function viewport(gl,v){if(!gl){v=v||{};return{x:v.x||1,y:v.y||1,width:v.width||canvas.canvas.width,height:v.height||canvas.canvas.height};}gl.viewport(v.x,v.y,v.width,v.height);},/** Sets scissor region on the given gl
         */scissor:function scissor(gl,s){if(!gl){s=s||{};return{x:s.x||0,y:s.y||0,width:s.width||1.0,height:s.height||1.0};}gl.scissor(s.x,s.y,s.width,s.height);},/** Clears buffers on the given gl as specified in mask
         */clear:function clear(gl,mask){if(!gl){mask=mask||{};return mask;}var m;if(mask.color){m=gl.COLOR_BUFFER_BIT;}if(mask.depth){m=m|gl.DEPTH_BUFFER_BIT;}if(mask.stencil){m=m|gl.STENCIL_BUFFER_BIT;}if(m){//     gl.clear(m);
}}};SceneJS.Renderer=SceneJS_NodeFactory.createNodeType("renderer");SceneJS.Renderer.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
for(var key in params){if(params.hasOwnProperty(key)){this._core[key]=params[key];}}this._core.dirty=true;}};SceneJS.Renderer.prototype.setViewport=function(viewport){this._core.viewport=viewport?{x:viewport.x||1,y:viewport.y||1,width:viewport.width||1000,height:viewport.height||1000}:undefined;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getViewport=function(){return this._core.viewport?{x:this._core.viewport.x,y:this._core.viewport.y,width:this._core.viewport.width,height:this._core.viewport.height}:undefined;};SceneJS.Renderer.prototype.setScissor=function(scissor){this._core.scissor=scissor?{x:scissor.x||1,y:scissor.y||1,width:scissor.width||1000,height:scissor.height||1000}:undefined;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getScissor=function(){return this._core.scissor?{x:this._core.scissor.x,y:this._core.scissor.y,width:this._core.scissor.width,height:this._core.scissor.height}:undefined;};SceneJS.Renderer.prototype.setClear=function(clear){this._core.clear=clear?{r:clear.r||0,g:clear.g||0,b:clear.b||0}:undefined;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getClear=function(){return this._core.clear?{r:this._core.clear.r,g:this._core.clear.g,b:this._core.clear.b}:null;};SceneJS.Renderer.prototype.setEnableBlend=function(enableBlend){this._core.enableBlend=enableBlend;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getEnableBlend=function(){return this._core.enableBlend;};SceneJS.Renderer.prototype.setBlendColor=function(color){this._core.blendColor=color?{r:color.r||0,g:color.g||0,b:color.b||0,a:color.a==undefined||color.a==null?1:color.a}:undefined;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getBlendColor=function(){return this._core.blendColor?{r:this._core.blendColor.r,g:this._core.blendColor.g,b:this._core.blendColor.b,a:this._core.blendColor.a}:undefined;};SceneJS.Renderer.prototype.setBlendEquation=function(eqn){this._core.blendEquation=eqn;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getBlendEquation=function(){return this._core.blendEquation;};SceneJS.Renderer.prototype.setBlendEquationSeparate=function(eqn){this._core.blendEquationSeparate=eqn?{rgb:eqn.rgb||"funcAdd",alpha:eqn.alpha||"funcAdd"}:undefined;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getBlendEquationSeparate=function(){return this._core.blendEquationSeparate?{rgb:this._core.rgb,alpha:this._core.alpha}:undefined;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.setBlendFunc=function(funcs){this._core.blendFunc=funcs?{sfactor:funcs.sfactor||"srcAlpha",dfactor:funcs.dfactor||"one"}:undefined;this._core.dirty=true;this._engine.display.imageDirty=true;};SceneJS.Renderer.prototype.getBlendFunc=function(){return this._core.blendFunc?{sfactor:this._core.sfactor,dfactor:this._core.dfactor}:undefined;};SceneJS.Renderer.prototype.setBlendFuncSeparate=function(eqn){this._core.blendFuncSeparate=eqn?{srcRGB:eqn.srcRGB||"zero",dstRGB:eqn.dstRGB||"zero",srcAlpha:eqn.srcAlpha||"zero",dstAlpha:eqn.dstAlpha||"zero"}:undefined;this._core.dirty=true;};SceneJS.Renderer.prototype.getBlendFuncSeparate=function(){return this._core.blendFuncSeparate?{srcRGB:this._core.blendFuncSeparate.srcRGB,dstRGB:this._core.blendFuncSeparate.dstRGB,srcAlpha:this._core.blendFuncSeparate.srcAlpha,dstAlpha:this._core.blendFuncSeparate.dstAlpha}:undefined;};SceneJS.Renderer.prototype.setEnableCullFace=function(enableCullFace){this._core.enableCullFace=enableCullFace;this._core.dirty=true;};SceneJS.Renderer.prototype.getEnableCullFace=function(){return this._core.enableCullFace;};SceneJS.Renderer.prototype.setCullFace=function(cullFace){this._core.cullFace=cullFace;this._core.dirty=true;};SceneJS.Renderer.prototype.getCullFace=function(){return this._core.cullFace;};SceneJS.Renderer.prototype.setEnableDepthTest=function(enableDepthTest){this._core.enableDepthTest=enableDepthTest;this._core.dirty=true;};SceneJS.Renderer.prototype.getEnableDepthTest=function(){return this._core.enableDepthTest;};SceneJS.Renderer.prototype.setDepthFunc=function(depthFunc){this._core.depthFunc=depthFunc;this._core.dirty=true;};SceneJS.Renderer.prototype.getDepthFunc=function(){return this._core.depthFunc;};SceneJS.Renderer.prototype.setEnableDepthMask=function(enableDepthMask){this._core.enableDepthMask=enableDepthMask;this._core.dirty=true;};SceneJS.Renderer.prototype.getEnableDepthMask=function(){return this._core.enableDepthMask;};SceneJS.Renderer.prototype.setClearDepth=function(clearDepth){this._core.clearDepth=clearDepth;this._core.dirty=true;};SceneJS.Renderer.prototype.getClearDepth=function(){return this._core.clearDepth;};SceneJS.Renderer.prototype.setDepthRange=function(range){this._core.depthRange=range?{zNear:range.zNear==undefined||range.zNear==null?0:range.zNear,zFar:range.zFar==undefined||range.zFar==null?1:range.zFar}:undefined;this._core.dirty=true;};SceneJS.Renderer.prototype.getDepthRange=function(){return this._core.depthRange?{zNear:this._core.depthRange.zNear,zFar:this._core.depthRange.zFar}:undefined;};SceneJS.Renderer.prototype.setFrontFace=function(frontFace){this._core.frontFace=frontFace;this._core.dirty=true;};SceneJS.Renderer.prototype.getFrontFace=function(){return this._core.frontFace;};SceneJS.Renderer.prototype.setLineWidth=function(lineWidth){this._core.lineWidth=lineWidth;this._core.dirty=true;};SceneJS.Renderer.prototype.getLineWidth=function(){return this._core.lineWidth;};SceneJS.Renderer.prototype.setEnableScissorTest=function(enableScissorTest){this._core.enableScissorTest=enableScissorTest;this._core.dirty=true;};SceneJS.Renderer.prototype.getEnableScissorTest=function(){return this._core.enableScissorTest;};SceneJS.Renderer.prototype.setClearStencil=function(clearStencil){this._core.clearStencil=clearStencil;this._core.dirty=true;};SceneJS.Renderer.prototype.getClearStencil=function(){return this._core.clearStencil;};SceneJS.Renderer.prototype.setColorMask=function(color){this._core.colorMask=color?{r:color.r||0,g:color.g||0,b:color.b||0,a:color.a==undefined||color.a==null?1:color.a}:undefined;this._core.dirty=true;};SceneJS.Renderer.prototype.getColorMask=function(){return this._core.colorMask?{r:this._core.colorMask.r,g:this._core.colorMask.g,b:this._core.colorMask.b,a:this._core.colorMask.a}:undefined;};SceneJS.Renderer.prototype._compile=function(ctx){if(this._core.dirty){this._core.props=createProps(this._core);this._core.dirty=false;}this._engine.display.renderer=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.renderer=--stackLen>0?coreStack[stackLen-1]:defaultCore;};}();(function(){var lookup={less:"LESS",equal:"EQUAL",lequal:"LEQUAL",greater:"GREATER",notequal:"NOTEQUAL",gequal:"GEQUAL"};// The default state core singleton for {@link SceneJS.DepthBuf} nodes
var defaultCore={type:"depthBuffer",stateId:SceneJS._baseStateId++,enabled:true,clearDepth:1,depthFunc:null,// Lazy init depthFunc when we can get a context
_depthFuncName:"less"};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){if(defaultCore.depthFunc===null){// Lazy-init depthFunc now we can get a context
defaultCore.depthFunc=params.engine.canvas.gl.LESS;}params.engine.display.depthBuffer=defaultCore;stackLen=0;});/**
     * @class Scene graph node which configures the depth buffer for its subgraph
     * @extends SceneJS.Node
     */SceneJS.DepthBuf=SceneJS_NodeFactory.createNodeType("depthBuffer");SceneJS.DepthBuf.prototype._init=function(params){if(params.enabled!=undefined){this.setEnabled(params.enabled);}else if(this._core.useCount==1){// This node defines the core
this.setEnabled(true);}if(params.clearDepth!=undefined){this.setClearDepth(params.clearDepth);}else if(this._core.useCount==1){this.setClearDepth(1);}if(params.depthFunc!=undefined){this.setDepthFunc(params.depthFunc);}else if(this._core.useCount==1){this.setDepthFunc("less");}if(params.clear!=undefined){this.setClear(params.clear);}else if(this._core.useCount==1){this.setClear(true);}};/**
     * Enable or disable the depth buffer
     *
     * @param enabled Specifies whether depth buffer is enabled or not
     * @return {*}
     */SceneJS.DepthBuf.prototype.setEnabled=function(enabled){if(this._core.enabled!=enabled){this._core.enabled=enabled;this._engine.display.imageDirty=true;}return this;};/**
     * Get whether or not the depth buffer is enabled
     *
     * @return Boolean
     */SceneJS.DepthBuf.prototype.getEnabled=function(){return this._core.enabled;};/**
     * Sets whether or not to clear the depth buffer before each render
     *
     * @param clear
     * @return {*}
     */SceneJS.DepthBuf.prototype.setClear=function(clear){if(this._core.clear!=clear){this._core.clear=clear;this._engine.display.imageDirty=true;}return this;};/**
     * Get whether or not the depth buffer is cleared before each render
     *
     * @return Boolean
     */SceneJS.DepthBuf.prototype.getClear=function(){return this._core.clear;};/**
     * Specify the clear value for the depth buffer.
     * Initial value is 1, and the given value will be clamped to [0..1].
     * @param clearDepth
     * @return {*}
     */SceneJS.DepthBuf.prototype.setClearDepth=function(clearDepth){if(this._core.clearDepth!=clearDepth){this._core.clearDepth=clearDepth;this._engine.display.imageDirty=true;}return this;};/**
     * Get the clear value for the depth buffer
     *
     * @return Number
     */SceneJS.DepthBuf.prototype.getClearDepth=function(){return this._core.clearDepth;};/**
     * Sets the depth comparison function.
     * Supported values are 'less', 'equal', 'lequal', 'greater', 'notequal' and 'gequal'
     * @param {String} depthFunc The depth comparison function
     * @return {*}
     */SceneJS.DepthBuf.prototype.setDepthFunc=function(depthFunc){if(this._core._depthFuncName!=depthFunc){var enumName=lookup[depthFunc];if(enumName==undefined){throw"unsupported value for 'clearFunc' attribute on depthBuffer node: '"+depthFunc+"' - supported values are 'less', 'equal', 'lequal', 'greater', 'notequal' and 'gequal'";}this._core.depthFunc=this._engine.canvas.gl[enumName];this._core._depthFuncName=depthFunc;this._engine.display.imageDirty=true;}return this;};/**
     * Returns the depth comparison function
     * @return {*}
     */SceneJS.DepthBuf.prototype.getDepthFunc=function(){return this._core._depthFuncName;};SceneJS.DepthBuf.prototype._compile=function(ctx){this._engine.display.depthBuffer=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.depthBuffer=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();(function(){// The default state core singleton for {@link SceneJS.ColorBuffer} nodes
var defaultCore={type:"colorBuffer",stateId:SceneJS._baseStateId++,blendEnabled:false,colorMask:{r:true,g:true,b:true,a:true}};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.colorBuffer=defaultCore;stackLen=0;});/**
     * @class Scene graph node which configures the color buffer for its subgraph
     * @extends SceneJS.Node
     */SceneJS.ColorBuffer=SceneJS_NodeFactory.createNodeType("colorBuffer");SceneJS.ColorBuffer.prototype._init=function(params){if(params.blendEnabled!=undefined){this.setBlendEnabled(params.blendEnabled);}else if(this._core.useCount==1){// This node defines the core
this.setBlendEnabled(false);}this.setColorMask(params);};/**
     * Enable or disable blending
     *
     * @param blendEnabled Specifies whether depth buffer is blendEnabled or not
     */SceneJS.ColorBuffer.prototype.setBlendEnabled=function(blendEnabled){if(this._core.blendEnabled!=blendEnabled){this._core.blendEnabled=blendEnabled;this._engine.display.imageDirty=true;}this._engine.display.imageDirty=true;};/**
     * Get whether or not blending is enabled
     * @return Boolean
     */SceneJS.ColorBuffer.prototype.getBlendEnabled=function(){return this._core.blendEnabled;};/**
     * Enable and disable writing of buffer's color components.
     * Components default to true where not given.
     * @param mask The mask
     */SceneJS.ColorBuffer.prototype.setColorMask=function(mask){this._core.colorMask={r:mask.r!=undefined&&mask.r!=null?mask.r:true,g:mask.g!=undefined&&mask.g!=null?mask.g:true,b:mask.b!=undefined&&mask.b!=null?mask.b:true,a:mask.a!=undefined&&mask.a!=null?mask.a:true};this._engine.display.imageDirty=true;};/**
     * Gets the color mask
     * @return {{}}
     */SceneJS.ColorBuffer.prototype.getColorMask=function(){return this._core.colorMask;};SceneJS.ColorBuffer.prototype._compile=function(ctx){this._engine.display.colorBuffer=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.colorBuffer=--stackLen>0?coreStack[stackLen-1]:defaultCore;this._engine.display.imageDirty=true;};})();(function(){// The default state core singleton for {@link SceneJS.View} nodes
var defaultCore={type:"view",stateId:SceneJS._baseStateId++,scissorTestEnabled:false};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.view=defaultCore;stackLen=0;});/**
     * @class Scene graph node which configures view parameters such as depth range, scissor test and viewport
     * @extends SceneJS.Node
     * void depthRange(floatzNear, floatzFar)
     zNear: Clamped to the range 0 to 1 Must be <= zFar
     zFar: Clamped to the range 0 to 1.
     void scissor(int x, int y, long width, long height)
     void viewport(int x, int y, long width, long height)
     */SceneJS.View=SceneJS_NodeFactory.createNodeType("view");SceneJS.View.prototype._init=function(params){if(params.scissorTestEnabled!=undefined){this.setScissorTestEnabled(params.scissorTestEnabled);}else if(this._core.useCount==1){// This node defines the core
this.setScissorTestEnabled(false);}};/**
     * Enable or disables scissor test.
     *
     * When enabled, the scissor test will discards fragments that are outside the scissor box.
     *
     * Scissor test is initially disabled.
     *
     * @param scissorTestEnabled Specifies whether scissor test is enabled or not
     * @return {*}
     */SceneJS.View.prototype.setScissorTestEnabled=function(scissorTestEnabled){if(this._core.scissorTestEnabled!=scissorTestEnabled){this._core.scissorTestEnabled=scissorTestEnabled;this._engine.display.imageDirty=true;}return this;};/**
     * Get whether or not scissor test is enabled.
     * Initial value will be false.
     *
     * @return Boolean
     */SceneJS.View.prototype.getScissorTestEnabled=function(){return this._core.scissorTestEnabled;};SceneJS.View.prototype._compile=function(ctx){this._engine.display.view=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.view=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();/**
 * @class The root node of a scenegraph
 * @extends SceneJS.Node
 *
 */SceneJS.Scene=SceneJS_NodeFactory.createNodeType("scene");SceneJS.Scene.prototype._init=function(params){if(params.tagMask){this.setTagMask(params.tagMask);}this._tagSelector=null;/**
     * Set false when canvas is to be transparent.
     * @type {boolean}
     */this.transparent=params.transparent===true;};/**
 * Simulate a lost WebGL context for testing purposes.
 * Only works if the simulateWebGLLost was given as an option to {@link SceneJS.createScene}.
 */SceneJS.Scene.prototype.loseWebGLContext=function(){this._engine.loseWebGLContext();};/**
 * Returns the HTML canvas for this scene
 * @return {HTMLCanvas} The canvas
 */SceneJS.Scene.prototype.getCanvas=function(){return this._engine.canvas.canvas;};/**
 * Returns the WebGL context for this scene
 */SceneJS.Scene.prototype.getGL=function(){return this._engine.canvas.gl;};/** Returns the Z-buffer depth in bits of the webgl context that this scene is to bound to.
 */SceneJS.Scene.prototype.getZBufferDepth=function(){var gl=this._engine.canvas.gl;return gl.getParameter(gl.DEPTH_BITS);};/**
 * Sets a regular expression to select which of the scene subgraphs that are rooted by {@link SceneJS.Tag} nodes are included in scene renders
 * @param {String} [tagMask] Regular expression string to match on the tag attributes of {@link SceneJS.Tag} nodes. Nothing is selected when this is omitted.
 * @see #getTagMask
 * @see SceneJS.Tag
 */SceneJS.Scene.prototype.setTagMask=function(tagMask){tagMask=tagMask||"XXXXXXXXXXXXXXXXXXXXXXXXXX";// HACK to select nothing by default
if(!this._tagSelector){this._tagSelector={};}this._tagSelector.mask=tagMask;this._tagSelector.regex=tagMask?new RegExp(tagMask):null;this._engine.display.selectTags(this._tagSelector);};/**
 * Gets the regular expression which will select which of the scene subgraphs that are rooted by {@link SceneJS.Tag} nodes are included in scene renders
 * @see #setTagMask
 * @see SceneJS.Tag
 * @returns {String} Regular expression string that will be matched on the tag attributes of {@link SceneJS.Tag} nodes
 */SceneJS.Scene.prototype.getTagMask=function(){return this._tagSelector?this._tagSelector.mask:null;};/**
 * Sets the number of times this scene is drawn on each render.
 * <p>This is useful for when we need to do things like render for left and right eyes.
 * @param {Number} numPasses The number of times the scene is drawn on each frame.
 * @see #getTagMask
 * @see SceneJS.Tag
 */SceneJS.Scene.prototype.setNumPasses=function(numPasses){this._engine.setNumPasses(numPasses);};/**
 * Render a single frame if new frame pending, or force a new frame
 * Returns true if frame rendered
 */SceneJS.Scene.prototype.renderFrame=function(params){return this._engine.renderFrame(params);};/**
 * Signals that a new frame will be needed
 * @param params
 */SceneJS.Scene.prototype.needFrame=function(){this._engine.display.imageDirty=true;};/**
 * Starts the render loop for this scene
 */SceneJS.Scene.prototype.start=function(params){this._engine.start(params);};/**
 * Pauses/unpauses current render loop that was started with {@link #start}. After this, {@link #isRunning} will return false.
 * @param {Boolean} doPause Indicates whether to pause or unpause the render loop
 */SceneJS.Scene.prototype.pause=function(doPause){this._engine.pause(doPause);};/**
 * Returns true if the scene's render loop is currently running.
 * @returns {Boolean} True when scene render loop is running
 */SceneJS.Scene.prototype.isRunning=function(){return this._engine.running;};/**
 * Picks whatever geometry will be rendered at the given canvas coordinates.
 */SceneJS.Scene.prototype.pick=function(canvasX,canvasY,options){var result=this._engine.pick(canvasX,canvasY,options);this.renderFrame({force:true});// HACK: canvas blanks after picking
if(result){this.publish("pick",result);return result;}else{this.publish("nopick");}};/**
 * Scene node's destroy handler, called by {@link SceneJS_node#destroy}
 * @private
 */SceneJS.Scene.prototype._destroy=function(){if(!this.destroyed){delete SceneJS._engines[this.id];// HACK: circular dependency
SceneJS._engineIds.removeItem(this.id);// HACK: circular dependency
this.destroyed=true;}};/**
 * Returns true if scene active, ie. not destroyed. A destroyed scene becomes active again
 * when you render it.
 */SceneJS.Scene.prototype.isActive=function(){return!this._engine.destroyed;};/**
 * Stops current render loop that was started with {@link #start}. After this, {@link #isRunning} will return false.
 */SceneJS.Scene.prototype.stop=function(){this._engine.stop();};/** Determines if node exists in this scene
 * @deprecated
 */SceneJS.Scene.prototype.containsNode=function(nodeId){return!!this._engine.findNode(nodeId);};/**
 * Finds nodes in this scene that have nodes IDs matching the given regular expression
 *
 * @param {String} nodeIdRegex Regular expression to match on node IDs
 * @return {[SceneJS.Node]} Array of nodes whose IDs match the given regex
 */SceneJS.Scene.prototype.findNodes=function(nodeIdRegex){return this._engine.findNodes(nodeIdRegex);};/**
 * Finds the node with the given ID in this scene
 * @deprecated
 * @param {String} nodeId Node ID
 * @param {Function} callback Callback through which we'll get the node asynchronously if it's being instantiated on-demand from a node type plugin
 * @return {SceneJS.Node} The node if found, else null
 */SceneJS.Scene.prototype.findNode=function(nodeId,callback){return this.getNode(nodeId,callback);};/**
 * @function Finds the node with the given ID in this scene
 * @param {String} nodeId Node ID
 * @param {Function} callback Callback through which we'll get the node asynchronously if it's being instantiated on-demand from a node type plugin
 * @return {SceneJS.Node} The node if found, else null
 */SceneJS.Scene.prototype.getNode=function(nodeId,callback){var node=this._engine.findNode(nodeId);if(node){if(callback){callback(node);}return node;}else{if(!callback){return null;}// Subscribe to instantiation of node from plugin
this.once("nodes/"+nodeId,callback);}};/**
 * Tests whether a node core of the given ID exists for the given node type
 * @param {String} type Node type
 * @param {String} coreId
 * @returns Boolean
 */SceneJS.Scene.prototype.hasCore=function(type,coreId){return this._engine.hasCore(type,coreId);};/**
 * Returns the current status of this scene.
 *
 * When the scene has been destroyed, the returned status will be a map like this:
 *
 * {
 *      destroyed: true
 * }
 *
 * Otherwise, the status will be:
 *
 * {
 *      numTasks: Total number of asset loads (eg. texture, geometry stream etc.) currently in progress for this scene
 * }
 *
 */SceneJS.Scene.prototype.getStatus=function(){var sceneStatus=SceneJS_sceneStatusModule.sceneStatus[this.id];if(!sceneStatus){return{destroyed:true};}return SceneJS._shallowClone(sceneStatus);};new function(){/**
     * The default state core singleton for {@link SceneJS.Shader} nodes
     */var defaultCore={type:"shader",stateId:SceneJS._baseStateId++,hash:"",empty:true,shader:{}};var idStack=[];var shaderVertexCodeStack=[];var shaderVertexHooksStack=[];var shaderFragmentCodeStack=[];var shaderFragmentHooksStack=[];var shaderParamsStack=[];var stackLen=0;var dirty=true;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.shader=defaultCore;stackLen=0;dirty=true;});SceneJS_events.addListener(SceneJS_events.OBJECT_COMPILING,function(params){if(dirty){if(stackLen>0){var core={type:"shader",stateId:idStack[stackLen-1],hash:idStack.slice(0,stackLen).join("."),shaders:{fragment:{code:shaderFragmentCodeStack.slice(0,stackLen).join(""),hooks:combineMapStack(shaderFragmentHooksStack)},vertex:{code:shaderVertexCodeStack.slice(0,stackLen).join(""),hooks:combineMapStack(shaderVertexHooksStack)}},paramsStack:shaderParamsStack.slice(0,stackLen)};params.display.shader=core;}else{params.display.shader=defaultCore;}dirty=false;}});function combineMapStack(maps){var map1;var map2={};var name;for(var i=0;i<stackLen;i++){map1=maps[i];for(name in map1){if(map1.hasOwnProperty(name)){map2[name]=map1[name];}}}return map2;}function pushHooks(hooks,hookStacks){var stack;for(var key in hooks){if(hooks.hasOwnProperty(key)){stack=hookStacks[key];if(!stack){stack=hookStacks[key]=[];}stack.push(hooks[key]);}}}SceneJS.Shader=SceneJS_NodeFactory.createNodeType("shader");SceneJS.Shader.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
this._setShaders(params.shaders);this.setParams(params.params);}};SceneJS.Shader.prototype._setShaders=function(shaders){shaders=shaders||[];this._core.shaders={};var shader;for(var i=0,len=shaders.length;i<len;i++){shader=shaders[i];if(!shader.stage){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"shader 'stage' attribute expected");}var code;if(shader.code){if(SceneJS._isArray(shader.code)){code=shader.code.join("");}else{code=shader.code;}}this._core.shaders[shader.stage]={code:code,hooks:shader.hooks};}};SceneJS.Shader.prototype.setParams=function(params){params=params||{};var coreParams=this._core.params;if(!coreParams){coreParams=this._core.params={};}for(var name in params){if(params.hasOwnProperty(name)){coreParams[name]=params[name];}}this._engine.display.imageDirty=true;};SceneJS.Shader.prototype.getParams=function(){var coreParams=this._core.params;if(!coreParams){return{};}var params={};for(var name in coreParams){if(coreParams.hasOwnProperty(name)){params[name]=coreParams[name];}}return params;};SceneJS.Shader.prototype._compile=function(ctx){idStack[stackLen]=this._core.coreId;// Draw list node tied to core, not node
var shaders=this._core.shaders;var fragment=shaders.fragment||{};var vertex=shaders.vertex||{};shaderFragmentCodeStack[stackLen]=fragment.code||"";shaderFragmentHooksStack[stackLen]=fragment.hooks||{};shaderVertexCodeStack[stackLen]=vertex.code||"";shaderVertexHooksStack[stackLen]=vertex.hooks||{};shaderParamsStack[stackLen]=this._core.params||{};stackLen++;dirty=true;this._compileNodes(ctx);stackLen--;dirty=true;};}();new function(){/**
     * The default state core singleton for {@link SceneJS.ShaderParams} nodes
     */var defaultCore={type:"shaderParams",stateId:SceneJS._baseStateId++,empty:true};var idStack=[];var shaderParamsStack=[];var stackLen=0;var dirty;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.shaderParams=defaultCore;stackLen=0;dirty=true;});SceneJS_events.addListener(SceneJS_events.OBJECT_COMPILING,function(params){if(dirty){if(stackLen>0){var core={type:"shaderParams",stateId:idStack[stackLen-1],paramsStack:shaderParamsStack.slice(0,stackLen)};params.display.shaderParams=core;}else{params.display.shaderParams=defaultCore;}dirty=false;}});SceneJS.ShaderParams=SceneJS_NodeFactory.createNodeType("shaderParams");SceneJS.ShaderParams.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
this.setParams(params.params);}};SceneJS.ShaderParams.prototype.setParams=function(params){params=params||{};var core=this._core;if(!core.params){core.params={};}for(var name in params){if(params.hasOwnProperty(name)){core.params[name]=params[name];}}this._engine.display.imageDirty=true;};SceneJS.ShaderParams.prototype.getParams=function(){var coreParams=this._core.params;if(!coreParams){return{};}var params={};for(var name in coreParams){if(coreParams.hasOwnProperty(name)){params[name]=coreParams[name];}}return params;};SceneJS.ShaderParams.prototype._compile=function(ctx){idStack[stackLen]=this._core.coreId;// Tie draw list state to core, not to scene node
shaderParamsStack[stackLen]=this._core.params;stackLen++;dirty=true;this._compileNodes(ctx);stackLen--;dirty=true;};}();(function(){// The default state core singleton for {@link SceneJS.Line} nodes
var defaultCore={type:"style",stateId:SceneJS._baseStateId++,lineWidth:1.0};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.style=defaultCore;stackLen=0;});/**
     * @class Scene graph node which configures style parameters such as line width for subnodes
     * @extends SceneJS.Node
     */SceneJS.Style=SceneJS_NodeFactory.createNodeType("style");SceneJS.Style.prototype._init=function(params){if(params.lineWidth!=undefined){this.setLineWidth(params.lineWidth);}};/**
     * Sets the line width
     *
     * Line width is initially 1.
     *
     * @param lineWidth The line width
     * @return {*}
     */SceneJS.Style.prototype.setLineWidth=function(lineWidth){if(this._core.lineWidth!=lineWidth){this._core.lineWidth=lineWidth;this._engine.display.imageDirty=true;}return this;};/**
     * Gets the line width
     * Initial value will be 1.
     *
     * @return Boolean
     */SceneJS.Style.prototype.getLineWidth=function(){return this._core.lineWidth;};SceneJS.Style.prototype._compile=function(ctx){this._engine.display.style=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.style=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();(function(){/**
     * The default state core singleton for {@link SceneJS.Tag} nodes
     */var defaultCore={type:"tag",stateId:SceneJS._baseStateId++,tag:null};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.tag=defaultCore;stackLen=0;});/**
     * @class Scene graph node which assigns a symbolic tag name to the {@link SceneJS.Geometry} nodes in its subgraph.
     * The subgraph can then be included or excluded from scene rendering using {@link SceneJS.Scene#setTagMask}.
     * @extends SceneJS.Node
     */SceneJS.Tag=SceneJS_NodeFactory.createNodeType("tag");SceneJS.Tag.prototype._init=function(params){if(this._core.useCount==1){// This node defines the resource
if(!params.tag){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"tag node attribute missing : 'tag'");}this.setTag(params.tag);}};SceneJS.Tag.prototype.setTag=function(tag){var core=this._core;core.tag=tag;core.pattern=null;// To be recomputed
core.matched=false;// To be rematched
this._engine.display.drawListDirty=true;};SceneJS.Tag.prototype.getTag=function(){return this._core.tag;};SceneJS.Tag.prototype._compile=function(ctx){this._engine.display.tag=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.tag=--stackLen>0?coreStack[stackLen-1]:defaultCore;};})();/**
 * @class Scene graph node which defines textures to apply to the objects in its subgraph
 * <p>This is the deprecated node type from SceneJS v3.2, which has been replaced by the "texture" node in ./texture.js</p>
 * @extends SceneJS.Node
 */new function(){// The default state core singleton for {@link SceneJS.Texture} nodes
var defaultCore={type:"texture",stateId:SceneJS._baseStateId++,empty:true,hash:""};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.texture=defaultCore;stackLen=0;});/**
     * @class Scene graph node which defines one or more textures to apply to the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */SceneJS.Texture=SceneJS_NodeFactory.createNodeType("_texture");SceneJS.Texture.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
this._core.layers=[];this._core.params={};// By default, wait for texture to load before building subgraph
var waitForLoad=params.waitForLoad==undefined?true:params.waitForLoad;if(!params.layers){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layers missing");}if(!SceneJS._isArray(params.layers)){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layers should be an array");}var layerParams;var gl=this._engine.canvas.gl;for(var i=0;i<params.layers.length;i++){layerParams=params.layers[i];if(!layerParams.source&&!layerParams.uri&&!layerParams.src&&!layerParams.colorTarget&&!layerParams.video){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layer "+i+"  has no uri, src, source, colorTarget, video or canvasId specified");}if(layerParams.applyFrom){if(layerParams.applyFrom!="uv"&&layerParams.applyFrom!="uv2"&&layerParams.applyFrom!="normal"&&layerParams.applyFrom!="geometry"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layer "+i+"  applyFrom value is unsupported - "+"should be either 'uv', 'uv2', 'normal' or 'geometry'");}}if(layerParams.applyTo){if(layerParams.applyTo!="baseColor"&&// Colour map (deprecated)
layerParams.applyTo!="color"&&// Colour map
layerParams.applyTo!="specular"&&// Specular map
layerParams.applyTo!="emit"&&// Emission map
layerParams.applyTo!="alpha"&&// Alpha map
layerParams.applyTo!="normals"&&// Normal map
layerParams.applyTo!="shine"){// Shininess map
throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layer "+i+" applyTo value is unsupported - "+"should be either 'color', 'baseColor', 'specular' or 'normals'");}}if(layerParams.blendMode){if(layerParams.blendMode!="add"&&layerParams.blendMode!="multiply"&&layerParams.blendMode!="mix"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layer "+i+" blendMode value is unsupported - "+"should be either 'add', 'multiply' or 'mix'");}}if(layerParams.applyTo=="color"){layerParams.applyTo="baseColor";}var layer=SceneJS._apply(layerParams,{waitForLoad:waitForLoad,texture:null,applyFrom:layerParams.applyFrom||"uv",applyTo:layerParams.applyTo||"baseColor",blendMode:layerParams.blendMode||"multiply",blendFactor:layerParams.blendFactor!=undefined&&layerParams.blendFactor!=null?layerParams.blendFactor:1.0,translate:{x:0,y:0},scale:{x:1,y:1},rotate:{z:0.0}});this._core.layers.push(layer);this._setLayerTransform(layerParams,layer);if(layer.colorTarget){// Create from a colorTarget node preceeding this texture in the scene graph
var targetNode=this._engine.findNode(layer.colorTarget);if(targetNode&&targetNode.type=="colorTarget"){layer.texture=targetNode._core.colorTarget.getTexture();// TODO: what happens when the colorTarget is destroyed?
}}else{// Create from texture node's layer configs
this._loadLayerTexture(gl,layer);}}var self=this;// WebGL restored handler - rebuilds the texture layers
this._core.webglRestored=function(){var layers=self._core.layers;var gl=self._engine.canvas.gl;for(var i=0,len=layers.length;i<len;i++){self._loadLayerTexture(gl,layers[i]);}};}};SceneJS.Texture.prototype._loadLayerTexture=function(gl,layer){var self=this;var sourceConfigs=layer.source;if(sourceConfigs){if(!sourceConfigs.type){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"texture layer config expected: source.type");}SceneJS.Plugins.getPlugin("texture",sourceConfigs.type,function(plugin){if(!plugin.getSource){throw SceneJS_error.fatalError(SceneJS.errors.PLUGIN_INVALID,"texture: 'getSource' method missing on plugin for texture source type '"+sourceConfigs.type+"'.");}var source=plugin.getSource({gl:gl});if(!source.subscribe){throw SceneJS_error.fatalError(SceneJS.errors.PLUGIN_INVALID,"texture: 'subscribe' method missing on plugin for texture source type '"+sourceConfigs.type+"'");}var taskId=SceneJS_sceneStatusModule.taskStarted(self,"Loading texture");source.subscribe(// Get notification whenever source updates the texture
function(){var loaded=false;return function(texture){if(!loaded){// Texture first initialised - create layer
loaded=true;self._setLayerTexture(gl,layer,texture);SceneJS_sceneStatusModule.taskFinished(taskId);}else{// Texture updated - layer already has the handle to it, so just signal a redraw
self._engine.display.imageDirty=true;}};}());if(source.configure){source.configure(sourceConfigs);// Configure the source, which may cause it to update the texture
}layer._source=source;});}else{/* Load from URL
             */var src=layer.uri||layer.src;var taskId=SceneJS_sceneStatusModule.taskStarted(this,"Loading texture");var image=new Image();image.onload=function(){var texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,self._ensureImageSizePowerOfTwo(image));self._setLayerTexture(gl,layer,texture);SceneJS_sceneStatusModule.taskFinished(taskId);self._engine.display.imageDirty=true;};image.onerror=function(){SceneJS_sceneStatusModule.taskFailed(taskId);};if(src.indexOf("data")==0){// Image data
image.src=src;}else{// Image file
image.crossOrigin="Anonymous";image.src=src;}}};SceneJS.Texture.prototype._ensureImageSizePowerOfTwo=function(image){if(!this._isPowerOfTwo(image.width)||!this._isPowerOfTwo(image.height)){var canvas=document.createElement("canvas");canvas.width=this._nextHighestPowerOfTwo(image.width);canvas.height=this._nextHighestPowerOfTwo(image.height);var ctx=canvas.getContext("2d");ctx.drawImage(image,0,0,image.width,image.height,0,0,canvas.width,canvas.height);image=canvas;image.crossOrigin="";}return image;};SceneJS.Texture.prototype._isPowerOfTwo=function(x){return(x&x-1)==0;};SceneJS.Texture.prototype._nextHighestPowerOfTwo=function(x){--x;for(var i=1;i<32;i<<=1){x=x|x>>i;}return x+1;};SceneJS.Texture.prototype._setLayerTexture=function(gl,layer,texture){layer.texture=new SceneJS._webgl.Texture2D(gl,{texture:texture,// WebGL texture object
minFilter:this._getGLOption("minFilter",gl,layer,gl.LINEAR_MIPMAP_NEAREST),magFilter:this._getGLOption("magFilter",gl,layer,gl.LINEAR),wrapS:this._getGLOption("wrapS",gl,layer,gl.REPEAT),wrapT:this._getGLOption("wrapT",gl,layer,gl.REPEAT),isDepth:this._getOption(layer.isDepth,false),depthMode:this._getGLOption("depthMode",gl,layer,gl.LUMINANCE),depthCompareMode:this._getGLOption("depthCompareMode",gl,layer,gl.COMPARE_R_TO_TEXTURE),depthCompareFunc:this._getGLOption("depthCompareFunc",gl,layer,gl.LEQUAL),flipY:this._getOption(layer.flipY,true),width:this._getOption(layer.width,1),height:this._getOption(layer.height,1),internalFormat:this._getGLOption("internalFormat",gl,layer,gl.LEQUAL),sourceFormat:this._getGLOption("sourceType",gl,layer,gl.ALPHA),sourceType:this._getGLOption("sourceType",gl,layer,gl.UNSIGNED_BYTE),update:null});if(this.destroyed){// Node was destroyed while loading
layer.texture.destroy();}this._engine.display.imageDirty=true;};SceneJS.Texture.prototype._getGLOption=function(name,gl,layer,defaultVal){var value=layer[name];if(value==undefined){return defaultVal;}var glName=SceneJS._webgl.enumMap[value];if(glName==undefined){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Unrecognised value for texture node property '"+name+"' value: '"+value+"'");}var glValue=gl[glName];//                if (!glValue) {
//                    throw new SceneJS.errors.WebGLUnsupportedNodeConfigException(
//                            "This browser's WebGL does not support value of SceneJS.texture node property '" + name + "' value: '" + value + "'");
//                }
return glValue;};SceneJS.Texture.prototype._getOption=function(value,defaultVal){return value==undefined?defaultVal:value;};/**
     * Set some writeable properties on a layer
     */SceneJS.Texture.prototype.setLayer=function(cfg){if(cfg.index==undefined||cfg.index==null){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Invalid texture set layer argument: index null or undefined");}if(cfg.index<0||cfg.index>=this._core.layers.length){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Invalid texture set layer argument: index out of range ("+this._core.layers.length+" layers defined)");}this._setLayer(parseInt(cfg.index),cfg);this._engine.display.imageDirty=true;};/**
     * Set some writeable properties on multiple layers
     */SceneJS.Texture.prototype.setLayers=function(layers){var indexNum;for(var index in layers){if(layers.hasOwnProperty(index)){if(index!=undefined||index!=null){indexNum=parseInt(index);if(indexNum<0||indexNum>=this._core.layers.length){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Invalid texture set layer argument: index out of range ("+this._core.layers.length+" layers defined)");}this._setLayer(indexNum,layers[index]||{});}}}this._engine.display.imageDirty=true;};SceneJS.Texture.prototype._setLayer=function(index,cfg){cfg=cfg||{};var layer=this._core.layers[index];if(cfg.blendFactor!=undefined&&cfg.blendFactor!=null){layer.blendFactor=cfg.blendFactor;}if(cfg.source){var source=layer._source;if(source&&source.configure){source.configure(cfg.source);}}if(cfg.translate||cfg.rotate||cfg.scale){this._setLayerTransform(cfg,layer);}};SceneJS.Texture.prototype._setLayerTransform=function(cfg,layer){var matrix;var t;if(cfg.translate){var translate=cfg.translate;if(translate.x!=undefined){layer.translate.x=translate.x;}if(translate.y!=undefined){layer.translate.y=translate.y;}matrix=SceneJS_math_translationMat4v([translate.x||0,translate.y||0,0]);}if(cfg.scale){var scale=cfg.scale;if(scale.x!=undefined){layer.scale.x=scale.x;}if(scale.y!=undefined){layer.scale.y=scale.y;}t=SceneJS_math_scalingMat4v([scale.x||1,scale.y||1,1]);matrix=matrix?SceneJS_math_mulMat4(matrix,t):t;}if(cfg.rotate){var rotate=cfg.rotate;if(rotate.z!=undefined){layer.rotate.z=rotate.z||0;}t=SceneJS_math_rotationMat4v(rotate.z*0.0174532925,[0,0,1]);matrix=matrix?SceneJS_math_mulMat4(matrix,t):t;}if(matrix){layer.matrix=matrix;if(!layer.matrixAsArray){layer.matrixAsArray=new Float32Array(layer.matrix);}else{layer.matrixAsArray.set(layer.matrix);}layer.matrixAsArray=new Float32Array(layer.matrix);// TODO - reinsert into array
}};SceneJS.Texture.prototype._compile=function(ctx){if(!this._core.hash){this._makeHash();}this._engine.display.texture=coreStack[stackLen++]=this._core;this._compileNodes(ctx);this._engine.display.texture=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.Texture.prototype._makeHash=function(){var core=this._core;var hash;if(core.layers&&core.layers.length>0){var layers=core.layers;var hashParts=[];var texLayer;for(var i=0,len=layers.length;i<len;i++){texLayer=layers[i];hashParts.push("/");hashParts.push(texLayer.applyFrom);hashParts.push("/");hashParts.push(texLayer.applyTo);hashParts.push("/");hashParts.push(texLayer.blendMode);if(texLayer.matrix){hashParts.push("/anim");}}hash=hashParts.join("");}else{hash="";}if(core.hash!=hash){core.hash=hash;}};SceneJS.Texture.prototype._destroy=function(){if(this._core.useCount==1){// Last resource user
var layers=this._core.layers;var layer;var source;for(var i=0,len=layers.length;i<len;i++){layer=layers[i];if(layer.texture){layer.texture.destroy();}source=layer._source;if(source&&source.destroy){source.destroy();}}}};}();/**
 * @class Scene graph node which defines textures to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */new function(){// The default state core singleton for {@link SceneJS.Texture} nodes
var defaultCore={type:"texture",stateId:SceneJS._baseStateId++,empty:true,hash:""};SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.texture=defaultCore;stackLen=0;});var coreStack=[];var stackLen=0;/**
     * @class Scene graph node which defines one or more textures to apply to the {@link SceneJS.Geometry} nodes in its subgraph
     * @extends SceneJS.Node
     */SceneJS.TextureMap=SceneJS_NodeFactory.createNodeType("texture");SceneJS.TextureMap.prototype._init=function(params){var self=this;if(this._core.useCount==1){// This node is the resource definer
if(params.applyFrom){if(params.applyFrom!="uv"&&params.applyFrom!="uv2"&&params.applyFrom!="normal"&&params.applyFrom!="geometry"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture applyFrom value is unsupported - "+"should be either 'uv', 'uv2', 'normal' or 'geometry'");}}if(params.applyTo){if(params.applyTo!="baseColor"&&// Colour map (deprecated)
params.applyTo!="color"&&// Colour map
params.applyTo!="specular"&&// Specular map
params.applyTo!="emit"&&// Emission map
params.applyTo!="alpha"&&// Alpha map
params.applyTo!="normals"&&// Normal map
params.applyTo!="shine"){// Shininess map
throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture applyTo value is unsupported - "+"should be either 'color', 'baseColor', 'specular' or 'normals'");}}if(params.blendMode){if(params.blendMode!="add"&&params.blendMode!="multiply"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"texture layer blendMode value is unsupported - "+"should be either 'add' or 'multiply'");}}if(params.applyTo=="color"){params.applyTo="baseColor";}this._core=SceneJS._apply(params,{waitForLoad:params.waitForLoad==undefined?true:params.waitForLoad,texture:null,applyFrom:!!params.applyFrom?params.applyFrom:"uv",applyTo:!!params.applyTo?params.applyTo:"baseColor",blendMode:!!params.blendMode?params.blendMode:"multiply",blendFactor:params.blendFactor!=undefined&&params.blendFactor!=null?params.blendFactor:1.0,translate:params.translate?SceneJS._apply(params.translate,{x:0,y:0}):{x:0,y:0},scale:params.scale?SceneJS._apply(params.scale,{x:1,y:1}):{x:1,y:1},rotate:params.rotate||0,matrix:null,_matrixDirty:true,buildMatrix:buildMatrix});this._core.buildMatrix.call(this._core);if(params.src){// Load from URL
this._core.src=params.src;this._loadTexture(params.src);}else if(params.image){// Create from image
this._core.image=params.image;this._initTexture(params.image);}else if(params.target){// Render to this texture
this.getScene().getNode(params.target,function(target){self.setTarget(target);});}this._core.webglRestored=function(){if(self._core.src){self._loadTexture(self._core.src);}else if(self._core.image){self._initTexture(self._core.image);}else if(self._core.target){//                    self.getScene().getNode(params.target,
//                        function (target) {
//                            self.setTarget(self._core.target);
//                        });
}};}};function buildMatrix(){var matrix;var t;if(this.translate.x!=0||this.translate.y!=0){matrix=SceneJS_math_translationMat4v([this.translate.x||0,this.translate.y||0,0]);}if(this.scale.x!=1||this.scale.y!=1){t=SceneJS_math_scalingMat4v([this.scale.x||1,this.scale.y||1,1]);matrix=matrix?SceneJS_math_mulMat4(matrix,t):t;}if(this.rotate!=0){t=SceneJS_math_rotationMat4v(this.rotate*0.0174532925,[0,0,1]);matrix=matrix?SceneJS_math_mulMat4(matrix,t):t;}if(matrix){this.matrix=matrix;if(!this.matrixAsArray){this.matrixAsArray=new Float32Array(this.matrix);}else{this.matrixAsArray.set(this.matrix);}}this._matrixDirty=false;}SceneJS.TextureMap.prototype._loadTexture=function(src){var self=this;var taskId=SceneJS_sceneStatusModule.taskStarted(this,"Loading texture");var image=new Image();image.onload=function(){self._initTexture(image);SceneJS_sceneStatusModule.taskFinished(taskId);self._engine.display.imageDirty=true;};image.onerror=function(){SceneJS_sceneStatusModule.taskFailed(taskId);};if(src.indexOf("data")==0){// Image data
image.src=src;}else{// Image file
image.crossOrigin="Anonymous";image.src=src;}};SceneJS.TextureMap.prototype._initTexture=function(image){var exists=!!this._core.texture;var gl=this._engine.canvas.gl;var texture=exists?this._core.texture.texture:gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this._ensureImageSizePowerOfTwo(image));if(!exists){this._core.texture=new SceneJS._webgl.Texture2D(gl,{texture:texture,// WebGL texture object
minFilter:this._getGLOption("minFilter",gl.LINEAR_MIPMAP_NEAREST),magFilter:this._getGLOption("magFilter",gl.LINEAR),wrapS:this._getGLOption("wrapS",gl.REPEAT),wrapT:this._getGLOption("wrapT",gl.REPEAT),isDepth:this._getOption(this._core.isDepth,false),depthMode:this._getGLOption("depthMode",gl.LUMINANCE),depthCompareMode:this._getGLOption("depthCompareMode",gl.COMPARE_R_TO_TEXTURE),depthCompareFunc:this._getGLOption("depthCompareFunc",gl.LEQUAL),flipY:this._getOption(this._core.flipY,true),width:this._getOption(this._core.width,1),height:this._getOption(this._core.height,1),internalFormat:this._getGLOption("internalFormat",gl.LEQUAL),sourceFormat:this._getGLOption("sourceType",gl.ALPHA),sourceType:this._getGLOption("sourceType",gl.UNSIGNED_BYTE),update:null});if(this.destroyed){// Node was destroyed while loading
this._core.texture.destroy();}}this._engine.display.imageDirty=true;};SceneJS.TextureMap.prototype._ensureImageSizePowerOfTwo=function(image){if(!this._isPowerOfTwo(image.width)||!this._isPowerOfTwo(image.height)){var canvas=document.createElement("canvas");canvas.width=this._nextHighestPowerOfTwo(image.width);canvas.height=this._nextHighestPowerOfTwo(image.height);var ctx=canvas.getContext("2d");ctx.drawImage(image,0,0,image.width,image.height,0,0,canvas.width,canvas.height);image=canvas;image.crossOrigin="";}return image;};SceneJS.TextureMap.prototype._isPowerOfTwo=function(x){return(x&x-1)==0;};SceneJS.TextureMap.prototype._nextHighestPowerOfTwo=function(x){--x;for(var i=1;i<32;i<<=1){x=x|x>>i;}return x+1;};SceneJS.TextureMap.prototype._getGLOption=function(name,defaultVal){var gl=this._engine.canvas.gl;var value=this._core[name];if(value==undefined){return defaultVal;}var glName=SceneJS._webgl.enumMap[value];if(glName==undefined){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"Unrecognised value for texture node property '"+name+"' value: '"+value+"'");}return gl[glName];};SceneJS.TextureMap.prototype._getOption=function(value,defaultVal){return value==undefined?defaultVal:value;};SceneJS.TextureMap.prototype.setSrc=function(src){this._core.image=null;this._core.src=src;this._core.target=null;this._loadTexture(src);};SceneJS.TextureMap.prototype.setImage=function(image){this._core.image=image;this._core.src=null;this._core.target=null;this._initTexture(image);};SceneJS.TextureMap.prototype.setTarget=function(target){if(target.type!="colorTarget"&&target.type!="depthTarget"){console.log("Target node type not compatible: "+target.type);return;}delete this._core.src;this._core.target=target;this._core.src=null;this._core.image=null;this._core.texture=target._core.renderBuf.getTexture();// TODO: what happens when the target is destroyed?
this._core.texture.bufType=target._core.bufType;this._engine.display.imageDirty=true;};/**
     * Sets the texture's blend factor with respect to other active textures.
     * @param {number} blendFactor The blend factor, in range [0..1]
     */SceneJS.TextureMap.prototype.setBlendFactor=function(blendFactor){this._core.blendFactor=blendFactor;this._engine.display.imageDirty=true;};SceneJS.TextureMap.prototype.getBlendFactor=function(){return this._core.blendFactor;};SceneJS.TextureMap.prototype.setTranslate=function(t){if(!this._core.translate){this._core.translate={x:0,y:0};}this._core.translate.x=t.x;this._core.translate.y=t.y;this._core._matrixDirty=true;this._engine.display.imageDirty=true;};SceneJS.TextureMap.prototype.getTranslate=function(){return this._core.translate;};SceneJS.TextureMap.prototype.setScale=function(s){if(!this._core.scale){this._core.scale={x:0,y:0};}this._core.scale.x=s.x;this._core.scale.y=s.y;this._core._matrixDirty=true;this._engine.display.imageDirty=true;};SceneJS.TextureMap.prototype.getScale=function(){return this._core.scale;};SceneJS.TextureMap.prototype.setRotate=function(angle){this._core.rotate=angle;this._core._matrixDirty=true;this._engine.display.imageDirty=true;};SceneJS.TextureMap.prototype.getRotate=function(){return this._core.rotate;};SceneJS.TextureMap.prototype.getMatrix=function(){if(this._core._matrixDirty){this._core.buildMatrix.call(this.core)();}return this.core.matrix;};SceneJS.TextureMap.prototype._compile=function(ctx){if(!this.__core){this.__core=this._engine._coreFactory.getCore("texture");}var parentCore=this._engine.display.texture;if(!this._core.empty){this.__core.layers=parentCore&&parentCore.layers?parentCore.layers.concat([this._core]):[this._core];}this._makeHash(this.__core);coreStack[stackLen++]=this.__core;this._engine.display.texture=this.__core;this._compileNodes(ctx);this._engine.display.texture=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.TextureMap.prototype._makeHash=function(core){var hash;if(core.layers&&core.layers.length>0){var layers=core.layers;var hashParts=[];var texLayer;for(var i=0,len=layers.length;i<len;i++){texLayer=layers[i];hashParts.push("/");hashParts.push(texLayer.applyFrom);hashParts.push("/");hashParts.push(texLayer.applyTo);hashParts.push("/");hashParts.push(texLayer.blendMode);if(texLayer.matrix){hashParts.push("/anim");}}hash=hashParts.join("");}else{hash="";}if(core.hash!=hash){core.hash=hash;}};SceneJS.TextureMap.prototype._destroy=function(){if(this._core.useCount==1){// Last core user
if(this._core.texture&&!this._core.target){// Don't wipe out target texture
this._core.texture.destroy();this._core.texture=null;}}if(this._core){this._engine._coreFactory.putCore(this._core);}};}();(function(){// The default state core singleton for {@link SceneJS.ColorBuf} nodes
var defaultCore={type:"cubemap",stateId:SceneJS._baseStateId++,empty:true,texture:null,hash:""};var coreStack=[];var stackLen=0;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(params){params.engine.display.cubemap=defaultCore;stackLen=0;});/**
     * @class Scene graph node which configures the color buffer for its subgraph
     * @extends SceneJS.Node
     */SceneJS.Reflect=SceneJS_NodeFactory.createNodeType("reflect");SceneJS.Reflect.prototype._init=function(params){if(this._core.useCount==1){// This node is first to reference the state core, so sets it up
this._core.hash="y";if(params.blendMode){if(params.blendMode!="add"&&params.blendMode!="multiply"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"reflection blendMode value is unsupported - "+"should be either 'add' or 'multiply'");}}this._core.blendMode=params.blendMode||"multiply";this._core.intensity=params.intensity!=undefined&&params.intensity!=null?params.intensity:1.0;this._core.applyTo="reflect";var self=this;var gl=this._engine.canvas.gl;var texture=gl.createTexture();var faces=[gl.TEXTURE_CUBE_MAP_POSITIVE_X,gl.TEXTURE_CUBE_MAP_NEGATIVE_X,gl.TEXTURE_CUBE_MAP_POSITIVE_Y,gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,gl.TEXTURE_CUBE_MAP_POSITIVE_Z,gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];var taskId=SceneJS_sceneStatusModule.taskStarted(this,"Loading reflection texture");var numImagesLoaded=0;var loadFailed=false;for(var i=0;i<faces.length;i++){var face=faces[i];var image=new Image();image.onload=function(face,image){return function(){if(loadFailed){return;}gl.bindTexture(gl.TEXTURE_CUBE_MAP,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(face,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,ensureImageSizePowerOfTwo(image));if(++numImagesLoaded==faces.length){self._core.texture=new SceneJS._webgl.Texture2D(gl,{texture:texture,target:gl.TEXTURE_CUBE_MAP,minFilter:gl.LINEAR,magFilter:gl.LINEAR,wrapS:gl.CLAMP_TO_EDGE,wrapT:gl.CLAMP_TO_EDGE});SceneJS_sceneStatusModule.taskFinished(taskId);self._engine.display.imageDirty=true;}};}(face,image);image.onerror=function(){loadFailed=true;SceneJS_sceneStatusModule.taskFailed(taskId);};image.src=params.src[i];}}};function ensureImageSizePowerOfTwo(image){if(!isPowerOfTwo(image.width)||!isPowerOfTwo(image.height)){var canvas=document.createElement("canvas");canvas.width=nextHighestPowerOfTwo(image.width);canvas.height=nextHighestPowerOfTwo(image.height);var ctx=canvas.getContext("2d");ctx.drawImage(image,0,0,image.width,image.height,0,0,canvas.width,canvas.height);image=canvas;image.crossOrigin="";}return image;}function isPowerOfTwo(x){return(x&x-1)==0;}function nextHighestPowerOfTwo(x){--x;for(var i=1;i<32;i<<=1){x=x|x>>i;}return x+1;}SceneJS.Reflect.prototype._compile=function(ctx){if(!this.__core){this.__core=this._engine._coreFactory.getCore("cubemap");}var parentCore=this._engine.display.cubemap;if(!this._core.empty){this.__core.layers=parentCore&&parentCore.layers?parentCore.layers.concat([this._core]):[this._core];}this._makeHash(this.__core);coreStack[stackLen++]=this.__core;this._engine.display.cubemap=this.__core;this._compileNodes(ctx);this._engine.display.cubemap=--stackLen>0?coreStack[stackLen-1]:defaultCore;};SceneJS.Reflect.prototype._makeHash=function(core){var hash;if(core.layers&&core.layers.length>0){var layers=core.layers;var hashParts=[];var texLayer;for(var i=0,len=layers.length;i<len;i++){texLayer=layers[i];hashParts.push("/");hashParts.push(texLayer.applyTo);hashParts.push("/");hashParts.push(texLayer.blendMode);}hash=hashParts.join("");}else{hash="";}if(core.hash!=hash){core.hash=hash;}};SceneJS.Reflect.prototype._destroy=function(){if(this._core.useCount==1){// Last resource user
if(this._core.texture){this._core.texture.destroy();this._core.texture=null;}}if(this._core){this._coreFactory.putCore(this._core);}};})();/**
 * @class Scene graph node which defines the modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */SceneJS.XForm=SceneJS_NodeFactory.createNodeType("xform");SceneJS.XForm.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
SceneJS_modelXFormStack.buildCore(this._core);this.setElements(params.elements);}};/**
 * Get Model matrix
 * @return {*}
 */SceneJS.XForm.prototype.getModelMatrix=function(){if(this._core.dirty){this._core.build();}return this._core.matrix;};/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, XForm, translate etc) node on the path to the scene root.
 * @return {*}
 */SceneJS.XForm.prototype.getWorldMatrix=function(){if(this._core.dirty){this._core.build();}return Array.apply([],this._core.mat);};SceneJS.XForm.prototype.setElements=function(elements){elements=elements||SceneJS_math_identityMat4();if(elements.length!=16){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.XForm elements should number 16");}var core=this._core;if(!core.matrix){core.matrix=elements;}else{for(var i=0;i<16;i++){core.matrix[i]=elements[i];}}//    core.mat.set(core.matrix);
//    core.normalMat.set(
//        SceneJS_math_transposeMat4(
//            SceneJS_math_inverseMat4(core.matrix, SceneJS_math_mat4())));
core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.XForm.prototype._compile=function(ctx){SceneJS_modelXFormStack.push(this._core);this._compileNodes(ctx);SceneJS_modelXFormStack.pop();};/**
 * @class Scene graph node which defines a modelling transform matrix to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */SceneJS.Matrix=SceneJS_NodeFactory.createNodeType("matrix");SceneJS.Matrix.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
SceneJS_modelXFormStack.buildCore(this._core);this.setElements(params.elements);}};/**
 * Get Model matrix
 * @return {*}
 */SceneJS.Matrix.prototype.getModelMatrix=function(){if(this._core.dirty){this._core.build();}return this._core.matrix;};/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, matrix, translate etc) node on the path to the scene root.
 * @return {*}
 */SceneJS.Matrix.prototype.getWorldMatrix=function(){if(this._core.dirty){this._core.build();}return Array.apply([],this._core.mat);};/**
 * Sets the matrix elements
 * @type {Function}
 */SceneJS.Matrix.prototype.setMatrix=function(elements){elements=elements||SceneJS_math_identityMat4();if(elements.length!=16){throw SceneJS_error.fatalError(SceneJS.errors.ILLEGAL_NODE_CONFIG,"SceneJS.Matrix elements should number 16");}var core=this._core;if(!core.matrix){core.matrix=elements;}else{for(var i=0;i<16;i++){core.matrix[i]=elements[i];}}core.setDirty();this._engine.display.imageDirty=true;return this;};/**
 * Sets the matrix elements
 * @deprecated
 * @type {Function}
 */SceneJS.Matrix.prototype.setElements=SceneJS.Matrix.prototype.setMatrix;SceneJS.Matrix.prototype._compile=function(ctx){SceneJS_modelXFormStack.push(this._core);this._compileNodes(ctx);SceneJS_modelXFormStack.pop();};/**
 * @class Scene graph node which defines a rotation modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */SceneJS.Rotate=SceneJS_NodeFactory.createNodeType("rotate");SceneJS.Rotate.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
SceneJS_modelXFormStack.buildCore(this._core);this.setMultOrder(params.multOrder);this.setAngle(params.angle);this.setXYZ({x:params.x,y:params.y,z:params.z});var core=this._core;this._core.buildMatrix=function(){core.matrix=SceneJS_math_rotationMat4v(core.angle*Math.PI/180.0,[core.x,core.y,core.z]);};}};/**
 * Get Model matrix
 * @return {*}
 */SceneJS.Rotate.prototype.getModelMatrix=function(){if(this._core.dirty){this._core.build();}return this._core.matrix;};/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, rotate, translate etc) node on the path to the scene root.
 * @return {*}
 */SceneJS.Rotate.prototype.getWorldMatrix=function(){if(this._core.dirty){this._core.build();}return Array.apply([],this._core.mat);};/**
 * Sets the multiplication order of this node's transform matrix with respect to the parent modeling transform
 * in the scene graph.
 *
 * @param {String} multOrder Mulplication order - "post" and "pre"
 */SceneJS.Rotate.prototype.setMultOrder=function(multOrder){multOrder=multOrder||"post";if(multOrder!="post"&&multOrder!="pre"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"Illegal multOrder for rotate node - '"+multOrder+"' should be 'pre' or 'post'");}this._core.multOrder=multOrder;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype.setAngle=function(angle){this._core.angle=angle||0;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype.getAngle=function(){return this._core.angle;};SceneJS.Rotate.prototype.setXYZ=function(xyz){xyz=xyz||{};this._core.x=xyz.x||0;this._core.y=xyz.y||0;this._core.z=xyz.z||0;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype.getXYZ=function(){return{x:this._core.x,y:this._core.y,z:this._core.z};};SceneJS.Rotate.prototype.setX=function(x){this._core.x=x;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype.getX=function(){return this._core.x;};SceneJS.Rotate.prototype.setY=function(y){this._core.y=y;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype.getY=function(){return this._core.y;};SceneJS.Rotate.prototype.setZ=function(z){this._core.z=z;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype.getZ=function(){return this._core.z;};SceneJS.Rotate.prototype.incAngle=function(angle){this._core.angle+=angle;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Rotate.prototype._compile=function(ctx){SceneJS_modelXFormStack.push(this._core);this._compileNodes(ctx);SceneJS_modelXFormStack.pop();};/**
 * @class Scene graph node which defines a translation modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */SceneJS.Translate=SceneJS_NodeFactory.createNodeType("translate");SceneJS.Translate.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
SceneJS_modelXFormStack.buildCore(this._core);this.setMultOrder(params.multOrder);this.setXYZ({x:params.x,y:params.y,z:params.z});var core=this._core;this._core.buildMatrix=function(){core.matrix=SceneJS_math_translationMat4v([core.x,core.y,core.z],core.matrix);};}};/**
 * Get Model matrix
 * @return {*}
 */SceneJS.Translate.prototype.getModelMatrix=function(){if(this._core.dirty){this._core.build();}return this._core.matrix;};/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, translate, translate etc) node on the path to the scene root.
 * @return {*}
 */SceneJS.Translate.prototype.getWorldMatrix=function(){if(this._core.dirty){this._core.build();}return Array.apply([],this._core.mat);};/**
 * Sets the multiplication order of this node's transform matrix with respect to the parent modeling transform
 * in the scene graph.
 *
 * @param {String} multOrder Mulplication order - "post" and "pre"
 */SceneJS.Translate.prototype.setMultOrder=function(multOrder){multOrder=multOrder||"post";if(multOrder!="post"&&multOrder!="pre"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"Illegal multOrder for translate node - '"+multOrder+"' should be 'pre' or 'post'");}this._core.multOrder=multOrder;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Translate.prototype.setXYZ=function(xyz){xyz=xyz||{};this._core.x=xyz.x||0;this._core.y=xyz.y||0;this._core.z=xyz.z||0;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.getXYZ=function(){return{x:this._core.x,y:this._core.y,z:this._core.z};};SceneJS.Translate.prototype.setX=function(x){this._core.x=x;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.setY=function(y){this._core.y=y;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.setZ=function(z){this._core.z=z;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.incX=function(x){this._core.x+=x;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.incY=function(y){this._core.y+=y;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.incZ=function(z){this._core.z+=z;this._core.setDirty();this._engine.display.imageDirty=true;return this;};SceneJS.Translate.prototype.getX=function(){return this._core.x;};SceneJS.Translate.prototype.getY=function(){return this._core.y;};SceneJS.Translate.prototype.getZ=function(){return this._core.z;};SceneJS.Translate.prototype._compile=function(ctx){SceneJS_modelXFormStack.push(this._core);this._compileNodes(ctx);SceneJS_modelXFormStack.pop();};/**
 * @class Scene graph node which defines a rotation modelling transform to apply to the objects in its subgraph
 * @extends SceneJS.Node
 */SceneJS.Scale=SceneJS_NodeFactory.createNodeType("scale");SceneJS.Scale.prototype._init=function(params){if(this._core.useCount==1){// This node is the resource definer
SceneJS_modelXFormStack.buildCore(this._core);this.setMultOrder(params.multOrder);this.setXYZ({x:params.x,y:params.y,z:params.z});var core=this._core;this._core.buildMatrix=function(){core.matrix=SceneJS_math_scalingMat4v([core.x,core.y,core.z]);};}};/**
 * Get Model matrix
 * @return {*}
 */SceneJS.Scale.prototype.getModelMatrix=function(){if(this._core.dirty){this._core.build();}return this._core.matrix;};/**
 * Get World matrix. That's the multiplication of this node's Model matrix by the World matrix of the the next
 * tranform (scale, scale, translate etc) node on the path to the scene root.
 * @return {*}
 */SceneJS.Scale.prototype.getWorldMatrix=function(){if(this._core.dirty){this._core.build();}return Array.apply([],this._core.mat);};/**
 * Sets the multiplication order of this node's transform matrix with respect to the parent modeling transform
 * in the scene graph.
 *
 * @param {String} multOrder Mulplication order - "post" and "pre"
 */SceneJS.Scale.prototype.setMultOrder=function(multOrder){multOrder=multOrder||"post";if(multOrder!="post"&&multOrder!="pre"){throw SceneJS_error.fatalError(SceneJS.errors.NODE_CONFIG_EXPECTED,"Illegal multOrder for scale node - '"+multOrder+"' should be 'pre' or 'post'");}this._core.multOrder=multOrder;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype.setXYZ=function(xyz){xyz=xyz||{};this._core.x=xyz.x==undefined?1:xyz.x;this._core.y=xyz.y==undefined?1:xyz.y;this._core.z=xyz.z==undefined?1:xyz.z;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype.getXYZ=function(){return{x:this._core.x,y:this._core.y,z:this._core.z};};SceneJS.Scale.prototype.setX=function(x){this._core.x=x;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype.setY=function(y){this._core.y=y;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype.setZ=function(z){this._core.z=z;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype.getX=function(){return this._core.x;};SceneJS.Scale.prototype.getY=function(){return this._core.y;};SceneJS.Scale.prototype.getZ=function(){return this._core.z;};SceneJS.Scale.prototype.incX=function(x){this._core.x+=x;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype.incY=function(y){this._core.y+=y;this._core.matrixDirty=true;};SceneJS.Scale.prototype.incZ=function(z){this._core.z+=z;this._core.setDirty();this._engine.display.imageDirty=true;};SceneJS.Scale.prototype._compile=function(ctx){SceneJS_modelXFormStack.push(this._core);this._compileNodes(ctx);SceneJS_modelXFormStack.pop();};/**
 * Provides a model transform stack in front of the renderer.
 * Nodes peek push and pop to the stack, while the renderer peeks at
 * the transform on the top of the stack whenever it builds a renderer node.
 *
 */var SceneJS_modelXFormStack=new function(){var defaultMatrix=SceneJS_math_identityMat4();var defaultMat=new Float32Array(defaultMatrix);var defaultNormalMatrix=SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(SceneJS_math_identityMat4(),SceneJS_math_mat4()));var defaultNormalMat=new Float32Array(defaultNormalMatrix);var defaultCore={type:"xform",stateId:SceneJS._baseStateId++,matrix:defaultMatrix,mat:defaultMat,normalMatrix:defaultNormalMatrix,normalMat:defaultNormalMat,parent:null,// Parent transform core
cores:[],// Child transform cores
numCores:0,// Number of child transform cores
dirty:false,// Does this subtree need matrices rebuilt
matrixDirty:false};var transformStack=[];var stackLen=0;this.top=defaultCore;var dirty;var self=this;SceneJS_events.addListener(SceneJS_events.SCENE_COMPILING,function(){stackLen=0;self.top=defaultCore;dirty=true;});SceneJS_events.addListener(SceneJS_events.OBJECT_COMPILING,function(params){if(dirty){if(stackLen>0){params.display.modelTransform=transformStack[stackLen-1];}else{params.display.modelTransform=defaultCore;}dirty=false;}});/**
     * Creates a fresh transformation core
     * @param core
     */this.buildCore=function(core){/*
         * Transform tree node properties
         */core.parent=null;// Parent transform core
core.cores=[];// Child transform cores
core.numCores=0;// Number of child transform cores
core.matrixDirty=false;core.matrix=SceneJS_math_identityMat4();core.mat=new Float32Array(core.matrix);core.normalMat=new Float32Array(SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(core.matrix,SceneJS_math_mat4())));core.dirty=false;// Does this subtree need matrices rebuilt
core.setDirty=function(){core.matrixDirty=true;if(core.dirty){// return;
}setDirty(core);};/**
         * Recursively flag this subtree of transforms cores as dirty,
         * ie. needing their matrices rebuilt.
         */function setDirty(core){core.dirty=true;core.matrixDirty=true;for(var i=0,len=core.numCores;i<len;i++){setDirty(core.cores[i]);}}/**
         * Pre-multiply matrices at cores on path up to root into matrix at this core
         */core.build=function(){if(core.matrixDirty){if(core.buildMatrix){// Matrix might be explicit property on some transform node types
core.buildMatrix();}core.matrixDirty=false;}var parent=core.parent;var matrix;if(parent){matrix=core.matrix.slice(0);while(parent){if(parent.matrixDirty){if(parent.buildMatrix){// Matrix might be explicit property on some transform node types
parent.buildMatrix();}parent.mat.set(parent.matrix);parent.normalMat.set(SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(parent.matrix,SceneJS_math_mat4())));parent.matrixDirty=false;}SceneJS_math_mulMat4(parent.matrix,matrix,matrix);if(!parent.dirty){}//   break;
//  parent.dirty = false;
parent=parent.parent;}}else{matrix=core.matrix;}//            if (!core.mat) {
//
//                core.mat = new Float32Array(matrix);
//
//                core.normalMat = new Float32Array(
//                        SceneJS_math_transposeMat4(
//                                SceneJS_math_inverseMat4(matrix, SceneJS_math_mat4())));
//            } else {
core.mat.set(matrix);core.normalMat.set(SceneJS_math_transposeMat4(SceneJS_math_inverseMat4(matrix,SceneJS_math_mat4())));//}
core.dirty=false;};};this.push=function(core){transformStack[stackLen++]=core;core.parent=this.top;core.dirty=true;if(this.top){this.top.cores[this.top.numCores++]=core;}core.numCores=0;this.top=core;dirty=true;};this.pop=function(){this.top=--stackLen>0?transformStack[stackLen-1]:defaultCore;dirty=true;};}();/**
 * Container for custom node types
 */SceneJS.Types=new function(){/**
     * Installs a node type
     * @param typeName
     * @param methods
     */this.addType=function(typeName,methods){SceneJS_NodeFactory.createNodeType(typeName,methods,// Augments the basic node type with our custom type's methods
function(type){var method;for(var methodName in methods){if(methods.hasOwnProperty(methodName)){method=methods[methodName];switch(methodName){case"init":// Deprecated
case"construct":(function(){var _method=methods[methodName];type.prototype._init=function(params){_method.call(this,params);};// Mark node type as a plugin
type.prototype._fromPlugin=true;})();break;case"destroy":// Deprecated
case"destruct":type.prototype._destroy=method;break;default:type.prototype[methodName]=method;}}}});};/**
     * Tests if given node type is installed
     * @param typeName
     * @param methods
     */this.hasType=function(typeName){return!!SceneJS_NodeFactory.nodeTypes[typeName];};}();/**
 * @class Display compiled from a {@link SceneJS.Scene}, providing methods to render and pick.
 * @private
 *
 * <p>A Display is a container of {@link SceneJS_Object}s which are created (or updated) by a depth-first
 * <b>compilation traversal</b> of a {@link SceneJS.Scene}.</b>
 *
 * <h2>Rendering Pipeline</h2>
 *
 * <p>Conceptually, a Display implements a pipeline with the following stages:</p>
 *
 * <ol>
 * <li>Create or update {@link SceneJS_Object}s during scene compilation</li>
 * <li>Organise the {@link SceneJS_Object} into an <b>object list</b></li>
 * <li>Determine the GL state sort order for the object list</li>
 * <li>State sort the object list</li>
 * <li>Create a <b>draw list</b> containing {@link SceneJS_Chunk}s belonging to the {@link SceneJS_Object}s in the object list</li>
 * <li>Render the draw list to draw the image</li>
 * </ol>
 *
 * <p>An update to the scene causes the pipeline to be re-executed from one of these stages, and SceneJS is designed
 * so that the pipeline is always re-executed from the latest stage possible to avoid redoing work.</p>
 *
 * <p>For example:</p>
 *
 * <ul>
 * <li>when an object is created or updated, we need to (re)do stages 2, 3, 4, 5 and 6</li>
 * <li>when an object is made invisible, we need to redo stages 5 and 6</li>
 * <li>when an object is assigned to a different scene render layer (works like a render bin), we need to redo
 *   stages 3, 4, 5, and 6</li>
 *<li>when the colour of an object changes, or maybe when the viewpoint changes, we simplt redo stage 6</li>
 * </ul>
 *
 * <h2>Object Creation</h2>
 * <p>The object soup (stage 1) is constructed by a depth-first traversal of the scene graph, which we think of as
 * "compiling" the scene graph into the Display. As traversal visits each scene node, the node's state core is
 * set on the Display (such as {@link #flags}, {@link #layer}, {@link #renderer} etc), which we think of as the
 * cores that are active at that instant during compilation. Each of the scene's leaf nodes is always
 * a {@link SceneJS.Geometry}, and when traversal visits one of those it calls {@link #buildObject} to create an
 * object in the soup. For each of the currently active cores, the object is given a {@link SceneJS_Chunk}
 * containing the WebGL calls for rendering it.</p>
 *
 * <p>The object also gets a shader (implemented by {@link SceneJS_Program}), taylored to render those state cores.</p>
 *
 * <p>Limited re-compilation may also be done on portions of a scene that have been added or sufficiently modified. When
 * traversal visits a {@link SceneJS.Geometry} for which an object already exists in the display, {@link #buildObject}
 * may update the {@link SceneJS_Chunk}s on the object as required for any changes in the core soup since the
 * last time the object was built. If differences among the cores require it, then {@link #buildObject} may also replace
 * the object's {@link SceneJS_Program} in order to render the new core soup configuration.</p>
 *
 * <p>So in summary, to each {@link SceneJS_Object} it builds, {@link #buildObject} creates a list of
 * {@link SceneJS_Chunk}s to render the set of node state cores that are currently set on the {@link SceneJS_Display}.
 * When {@link #buildObject} is re-building an existing object, it may replace one or more {@link SceneJS_Chunk}s
 * for state cores that have changed from the last time the object was built or re-built.</p>

 * <h2>Object Destruction</h2>
 * <p>Destruction of a scene graph branch simply involves a call to {@link #removeObject} for each {@link SceneJS.Geometry}
 * in the branch.</p>
 *
 * <h2>Draw List</h2>
 * <p>The draw list is actually comprised of two lists of state chunks: a "pick" list to render a pick buffer
 * for colour-indexed GPU picking, along with a "draw" list for normal image rendering. The chunks in these lists
 * are held in the state-sorted order of their objects in #_objectList, with runs of duplicate states removed.</p>
 *
 * <p>After a scene update, we set a flag on the display to indicate the stage we will need to redo from. The pipeline is
 * then lazy-redone on the next call to #render or #pick.</p>
 */var SceneJS_Display=function SceneJS_Display(cfg){// Display is bound to the lifetime of an HTML5 canvas
this._canvas=cfg.canvas;// Factory which creates and recycles {@link SceneJS_Program} instances
this._programFactory=new SceneJS_ProgramFactory({canvas:cfg.canvas});// Factory which creates and recycles {@link SceneJS.Chunk} instances
this._chunkFactory=new SceneJS_ChunkFactory();/**
     * True when the background is to be transparent
     * @type {boolean}
     */this.transparent=cfg.transparent===true;/**
     * Node state core for the last {@link SceneJS.Enable} visited during scene graph compilation traversal
     * @type Object
     */this.enable=null;/**
     * Node state core for the last {@link SceneJS.Flags} visited during scene graph compilation traversal
     * @type Object
     */this.flags=null;/**
     * Node state core for the last {@link SceneJS.Layer} visited during scene graph compilation traversal
     * @type Object
     */this.layer=null;/**
     * Node state core for the last {@link SceneJS.Stage} visited during scene graph compilation traversal
     * @type Object
     */this.stage=null;/**
     * Node state core for the last {@link SceneJS.Renderer} visited during scene graph compilation traversal
     * @type Object
     */this.renderer=null;/**
     * Node state core for the last {@link SceneJS.DepthBuf} visited during scene graph compilation traversal
     * @type Object
     */this.depthBuffer=null;/**
     * Node state core for the last {@link SceneJS.ColorBuf} visited during scene graph compilation traversal
     * @type Object
     */this.colorBuffer=null;/**
     * Node state core for the last {@link SceneJS.View} visited during scene graph compilation traversal
     * @type Object
     */this.view=null;/**
     * Node state core for the last {@link SceneJS.Lights} visited during scene graph compilation traversal
     * @type Object
     */this.lights=null;/**
     * Node state core for the last {@link SceneJS.Material} visited during scene graph compilation traversal
     * @type Object
     */this.material=null;/**
     * Node state core for the last {@link SceneJS.Texture} visited during scene graph compilation traversal
     * @type Object
     */this.texture=null;/**
     * Node state core for the last {@link SceneJS.Reflect} visited during scene graph compilation traversal
     * @type Object
     */this.cubemap=null;/**
     * Node state core for the last {@link SceneJS.XForm} visited during scene graph compilation traversal
     * @type Object
     */this.modelTransform=null;/**
     * Node state core for the last {@link SceneJS.LookAt} visited during scene graph compilation traversal
     * @type Object
     */this.viewTransform=null;/**
     * Node state core for the last {@link SceneJS.Camera} visited during scene graph compilation traversal
     * @type Object
     */this.projTransform=null;/**
     * Node state core for the last {@link SceneJS.ColorTarget} visited during scene graph compilation traversal
     * @type Object
     */this.renderTarget=null;/**
     * Node state core for the last {@link SceneJS.Clips} visited during scene graph compilation traversal
     * @type Object
     */this.clips=null;/**
     * Node state core for the last {@link SceneJS.MorphGeometry} visited during scene graph compilation traversal
     * @type Object
     */this.morphGeometry=null;/**
     * Node state core for the last {@link SceneJS.Name} visited during scene graph compilation traversal
     * @type Object
     */this.name=null;/**
     * Node state core for the last {@link SceneJS.Tag} visited during scene graph compilation traversal
     * @type Object
     */this.tag=null;/**
     * Node state core for the last render {@link SceneJS.Node} listener encountered during scene graph compilation traversal
     * @type Object
     */this.renderListeners=null;/**
     * Node state core for the last {@link SceneJS.Shader} visited during scene graph compilation traversal
     * @type Object
     */this.shader=null;/**
     * Node state core for the last {@link SceneJS.ShaderParams} visited during scene graph compilation traversal
     * @type Object
     */this.shaderParams=null;/**
     * Node state core for the last {@link SceneJS.Style} visited during scene graph compilation traversal
     * @type Object
     */this.style=null;/**
     * Node state core for the last {@link SceneJS.Geometry} visited during scene graph compilation traversal
     * @type Object
     */this.geometry=null;/* Factory which creates and recycles {@link SceneJS_Object} instances
     */this._objectFactory=new SceneJS_ObjectFactory();/**
     * The objects in the display
     */this._objects={};/**
     * Ambient color, which must be given to gl.clearColor before draw list iteration
     */this._ambientColor=[0,0,0,1.0];/**
     * The object list, containing all elements of #_objects, kept in GL state-sorted order
     */this._objectList=[];this._objectListLen=0;/* The "draw list", comprised collectively of three lists of state chunks belong to visible objects
     * within #_objectList: a "pick" list to render a pick buffer for colour-indexed GPU picking, along with an
     * "draw" list for normal image rendering.  The chunks in these lists are held in the state-sorted order of
     * their objects in #_objectList, with runs of duplicate states removed.
     */this._drawList=[];// State chunk list to render all objects
this._drawListLen=0;this._pickDrawList=[];// State chunk list to render scene to pick buffer
this._pickDrawListLen=0;this._targetList=[];this._targetListLen=0;/* The frame context holds state shared across a single render of the draw list, along with any results of
     * the render, such as pick hits
     */this._frameCtx={pickNames:[],// Pick names of objects hit during pick render
canvas:this._canvas,// The canvas
VAO:null// Vertex array object extension
};/* The frame context has this facade which is given to scene node "rendered" listeners
     * to allow application code to access things like transform matrices from within those listeners.
     */this._frameCtx.renderListenerCtx=new SceneJS.RenderContext(this._frameCtx);/*-------------------------------------------------------------------------------------
     * Flags which schedule what the display is to do when #render is next called.
     *------------------------------------------------------------------------------------*//**
     * Flags the object list as needing to be rebuilt from existing objects on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #2 (see class comment),
     * causing object list rebuild, state order determination, state sort, draw list construction and image render.
     * @type Boolean
     */this.objectListDirty=true;/**
     * Flags the object list as needing state orders to be computed on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #3 (see class comment),
     * causing state order determination, state sort, draw list construction and image render.
     * @type Boolean
     */this.stateOrderDirty=true;/**
     * Flags the object list as needing to be state sorted on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #4 (see class comment),
     * causing state sort, draw list construction and image render.
     * @type Boolean
     */this.stateSortDirty=true;/**
     * Flags the draw list as needing to be rebuilt from the object list on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #5 (see class comment),
     * causing draw list construction and image render.
     * @type Boolean
     */this.drawListDirty=true;/**
     * Flags the image as needing to be redrawn from the draw list on the next call to {@link #render} or {@link #pick}.
     * Setting this will cause the rendering pipeline to be executed from stage #6 (see class comment),
     * causing the image render.
     * @type Boolean
     */this.imageDirty=true;/**
     * Flags the neccessity for the image buffer to be re-rendered from the draw list.
     * @type Boolean
     */this.pickBufDirty=true;// Redraw pick buffer
this.rayPickBufDirty=true;// Redraw raypick buffer
};/**
 * Reallocates WebGL resources for objects within this display
 */SceneJS_Display.prototype.webglRestored=function(){this._programFactory.webglRestored();// Reallocate programs
this._chunkFactory.webglRestored();// Recache shader var locations
var gl=this._canvas.gl;if(this.pickBuf){this.pickBuf.webglRestored(gl);// Rebuild pick buffers
}if(this.rayPickBuf){this.rayPickBuf.webglRestored(gl);}this.imageDirty=true;// Need redraw
};/**
 * Internally creates (or updates) a {@link SceneJS_Object} of the given ID from whatever node state cores are currently set
 * on this {@link SceneJS_Display}. The object is created if it does not already exist in the display, otherwise it is
 * updated with the current state cores, possibly replacing cores already referenced by the object.
 *
 * @param {String} objectId ID of object to create or update
 */SceneJS_Display.prototype.buildObject=function(objectId){var object=this._objects[objectId];if(!object){// Create object
object=this._objects[objectId]=this._objectFactory.getObject(objectId);this.objectListDirty=true;}object.stage=this.stage;object.layer=this.layer;object.renderTarget=this.renderTarget;object.texture=this.texture;object.cubemap=this.cubemap;object.geometry=this.geometry;object.enable=this.enable;object.flags=this.flags;object.tag=this.tag;//if (!object.hash) {
var hash=[// Build current state hash
this.geometry.hash,this.shader.hash,this.clips.hash,this.morphGeometry.hash,this.texture.hash,this.cubemap.hash,this.lights.hash].join(";");if(!object.program||hash!=object.hash){// Get new program for object if no program or hash mismatch
if(object.program){this._programFactory.putProgram(object.program);}object.program=this._programFactory.getProgram(hash,this);object.hash=hash;}//}
// Build draw chunks for object
this._setChunk(object,0,"program");// Must be first
this._setChunk(object,1,"xform",this.modelTransform);this._setChunk(object,2,"lookAt",this.viewTransform);this._setChunk(object,3,"camera",this.projTransform);this._setChunk(object,4,"flags",this.flags);this._setChunk(object,5,"shader",this.shader);this._setChunk(object,6,"shaderParams",this.shaderParams);this._setChunk(object,7,"style",this.style);this._setChunk(object,8,"depthBuffer",this.depthBuffer);this._setChunk(object,9,"colorBuffer",this.colorBuffer);this._setChunk(object,10,"view",this.view);this._setChunk(object,11,"name",this.name);this._setChunk(object,12,"lights",this.lights);this._setChunk(object,13,"material",this.material);this._setChunk(object,14,"texture",this.texture);this._setChunk(object,15,"cubemap",this.cubemap);this._setChunk(object,16,"clips",this.clips);this._setChunk(object,17,"renderer",this.renderer);this._setChunk(object,18,"geometry",this.morphGeometry,this.geometry);this._setChunk(object,19,"listeners",this.renderListeners);// Must be after the above chunks
this._setChunk(object,20,"draw",this.geometry);// Must be last
};SceneJS_Display.prototype._setChunk=function(object,order,chunkType,core,core2){var chunkId;var chunkClass=this._chunkFactory.chunkTypes[chunkType];if(core){// Core supplied
if(core.empty){// Only set default cores for state types that have them
var oldChunk=object.chunks[order];if(oldChunk){this._chunkFactory.putChunk(oldChunk);// Release previous chunk to pool
}object.chunks[order]=null;return;}// Note that core.stateId can be either a number or a string, that's why we make
// chunkId a string here.
// TODO: Would it be better if all were numbers?
chunkId=chunkClass.prototype.programGlobal?'_'+core.stateId:'p'+object.program.id+'_'+core.stateId;if(core2){chunkId+='__'+core2.stateId;}}else{// No core supplied, probably a program.
// Only one chunk of this type per program.
chunkId='p'+object.program.id;}// This is needed so that chunkFactory can distinguish between draw and geometry
// chunks with the same core.
chunkId=order+'__'+chunkId;var oldChunk=object.chunks[order];if(oldChunk){if(oldChunk.id==chunkId){// Avoid needless chunk reattachment
return;}this._chunkFactory.putChunk(oldChunk);// Release previous chunk to pool
}object.chunks[order]=this._chunkFactory.getChunk(chunkId,chunkType,object.program,core,core2);// Attach new chunk
// Ambient light is global across everything in display, and
// can never be disabled, so grab it now because we want to
// feed it to gl.clearColor before each display list render
if(chunkType=="lights"){this._setAmbient(core);}};SceneJS_Display.prototype._setAmbient=function(core){var lights=core.lights;var light;for(var i=0,len=lights.length;i<len;i++){light=lights[i];if(light.mode=="ambient"){this._ambientColor[0]=light.color[0];this._ambientColor[1]=light.color[1];this._ambientColor[2]=light.color[2];}}};/**
 * Removes an object from this display
 *
 * @param {String} objectId ID of object to remove
 */SceneJS_Display.prototype.removeObject=function(objectId){var object=this._objects[objectId];if(!object){return;}this._programFactory.putProgram(object.program);object.program=null;object.hash=null;this._objectFactory.putObject(object);delete this._objects[objectId];this.objectListDirty=true;};/**
 * Set a tag selector to selectively activate objects that have matching SceneJS.Tag nodes
 */SceneJS_Display.prototype.selectTags=function(tagSelector){this._tagSelector=tagSelector;this.drawListDirty=true;};/**
 * Render this display. What actually happens in the method depends on what flags are set.
 *
 */SceneJS_Display.prototype.render=function(params){params=params||{};if(this.objectListDirty){this._buildObjectList();// Build object render bin
this.objectListDirty=false;this.stateOrderDirty=true;// Now needs state ordering
}if(this.stateOrderDirty){this._makeStateSortKeys();// Compute state sort order
this.stateOrderDirty=false;this.stateSortDirty=true;// Now needs state sorting
}if(this.stateSortDirty){this._stateSort();// State sort the object render bin
this.stateSortDirty=false;this.drawListDirty=true;// Now needs new visible object bin
//this._logObjectList();
}if(this.drawListDirty){// Render visible list while building transparent list
this._buildDrawList();this.imageDirty=true;//this._logDrawList();
//this._logPickList();
}if(this.imageDirty||params.force){this._doDrawList({// Render, no pick
clear:params.clear!==false// Clear buffers by default
});this.imageDirty=false;this.pickBufDirty=true;// Pick buff will now need rendering on next pick
}};SceneJS_Display.prototype._buildObjectList=function(){this._objectListLen=0;for(var objectId in this._objects){if(this._objects.hasOwnProperty(objectId)){this._objectList[this._objectListLen++]=this._objects[objectId];}}};SceneJS_Display.prototype._makeStateSortKeys=function(){//  console.log("--------------------------------------------------------------------------------------------------");
// console.log("SceneJS_Display_makeSortKeys");
var object;for(var i=0,len=this._objectListLen;i<len;i++){object=this._objectList[i];if(!object.program){// Non-visual object (eg. sound)
object.sortKey=-1;}else{//            console.log("object.stage.priority = " + ((object.stage.priority + 1) * 1000000000000));
//            console.log("object.flags.transparent = " + ((object.flags.transparent ? 2 : 1) * 1000000000));
//            console.log("object.layer.priority = " +  ((object.layer.priority + 1) * 1000000));
//            console.log("object.program.id = " +  ((object.program.id + 1) * 1000));
//            console.log("object.texture.stateId = " +  object.texture.stateId);
object.sortKey=(object.stage.priority+1)*1000000000000+(object.flags.transparent?2:1)*1000000000+(object.layer.priority+1)*1000000+(object.program.id+1)*1000+object.texture.stateId;//console.log("object.sortKey = " +  object.sortKey);
//  console.log("");
}}//  console.log("--------------------------------------------------------------------------------------------------");
};SceneJS_Display.prototype._stateSort=function(){this._objectList.length=this._objectListLen;this._objectList.sort(this._stateSortObjects);};SceneJS_Display.prototype._stateSortObjects=function(a,b){return a.sortKey-b.sortKey;};SceneJS_Display.prototype._logObjectList=function(){console.log("--------------------------------------------------------------------------------------------------");console.log(this._objectListLen+" objects");for(var i=0,len=this._objectListLen;i<len;i++){var object=this._objectList[i];console.log("SceneJS_Display : object["+i+"] sortKey = "+object.sortKey);}console.log("--------------------------------------------------------------------------------------------------");};SceneJS_Display.prototype._buildDrawList=function(){this._lastStateId=this._lastStateId||[];this._lastPickStateId=this._lastPickStateId||[];for(var i=0;i<23;i++){this._lastStateId[i]=null;this._lastPickStateId[i]=null;}this._drawListLen=0;this._pickDrawListLen=0;// For each render target, a list of objects to render to that target
var targetObjectLists={};// A list of all the render target object lists
var targetListList=[];// List of all targets
var targetList=[];var object;var tagMask;var tagRegex;var tagCore;var flags;if(this._tagSelector){tagMask=this._tagSelector.mask;tagRegex=this._tagSelector.regex;}this._objectDrawList=this._objectDrawList||[];this._objectDrawListLen=0;for(var i=0,len=this._objectListLen;i<len;i++){object=this._objectList[i];// Cull invisible objects
if(object.enable.enabled===false){continue;}flags=object.flags;// Cull invisible objects
if(flags.enabled===false){continue;}// Cull objects in disabled layers
if(!object.layer.enabled){continue;}// Cull objects with unmatched tags
if(tagMask){tagCore=object.tag;if(tagCore.tag){if(tagCore.mask!=tagMask){// Scene tag mask was updated since last render
tagCore.mask=tagMask;tagCore.matches=tagRegex.test(tagCore.tag);}if(!tagCore.matches){continue;}}}// Put objects with render targets into a bin for each target
if(object.renderTarget.targets){var targets=object.renderTarget.targets;var target;var coreId;var list;for(var j=0,lenj=targets.length;j<lenj;j++){target=targets[j];coreId=target.coreId;list=targetObjectLists[coreId];if(!list){list=[];targetObjectLists[coreId]=list;targetListList.push(list);targetList.push(this._chunkFactory.getChunk(target.stateId,"renderTarget",object.program,target));}list.push(object);}}else{//
this._objectDrawList[this._objectDrawListLen++]=object;}}// Append chunks for objects within render targets first
var list;var target;var object;var pickable;for(var i=0,len=targetListList.length;i<len;i++){list=targetListList[i];target=targetList[i];this._appendRenderTargetChunk(target);for(var j=0,lenj=list.length;j<lenj;j++){object=list[j];pickable=object.stage&&object.stage.pickable;// We'll only pick objects in pickable stages
this._appendObjectToDrawLists(object,pickable);}}if(object){// Unbinds any render target bound previously
this._appendRenderTargetChunk(this._chunkFactory.getChunk(-1,"renderTarget",object.program,{}));}// Append chunks for objects not in render targets
for(var i=0,len=this._objectDrawListLen;i<len;i++){object=this._objectDrawList[i];pickable=!object.stage||object.stage&&object.stage.pickable;// We'll only pick objects in pickable stages
this._appendObjectToDrawLists(object,pickable);}this.drawListDirty=false;};SceneJS_Display.prototype._appendRenderTargetChunk=function(chunk){this._drawList[this._drawListLen++]=chunk;};/**
 * Appends an object to the draw and pick lists.
 * @param object
 * @param pickable
 * @private
 */SceneJS_Display.prototype._appendObjectToDrawLists=function(object,pickable){var chunks=object.chunks;var picking=object.flags.picking;var chunk;for(var i=0,len=chunks.length;i<len;i++){chunk=chunks[i];if(chunk){// As we apply the state chunk lists we track the ID of most types of chunk in order
// to cull redundant re-applications of runs of the same chunk - except for those chunks with a
// 'unique' flag, because we don't want to cull runs of draw chunks because they contain the GL
// drawElements calls which render the objects.
if(chunk.draw){if(chunk.unique||this._lastStateId[i]!=chunk.id){// Don't reapply repeated states
this._drawList[this._drawListLen++]=chunk;this._lastStateId[i]=chunk.id;}}if(chunk.pick){if(pickable!==false){// Don't pick objects in unpickable stages
if(picking){// Don't pick unpickable objects
if(chunk.unique||this._lastPickStateId[i]!=chunk.id){// Don't reapply repeated states
this._pickDrawList[this._pickDrawListLen++]=chunk;this._lastPickStateId[i]=chunk.id;}}}}}}};/**
 * Logs the contents of the draw list to the console.
 * @private
 */SceneJS_Display.prototype._logDrawList=function(){console.log("--------------------------------------------------------------------------------------------------");console.log(this._drawListLen+" draw list chunks");for(var i=0,len=this._drawListLen;i<len;i++){var chunk=this._drawList[i];console.log("[chunk "+i+"] type = "+chunk.type);switch(chunk.type){case"draw":console.log("\n");break;case"renderTarget":console.log(" bufType = "+chunk.core.bufType);break;}}console.log("--------------------------------------------------------------------------------------------------");};/**
 * Logs the contents of the pick list to the console.
 * @private
 */SceneJS_Display.prototype._logPickList=function(){console.log("--------------------------------------------------------------------------------------------------");console.log(this._pickDrawListLen+" pick list chunks");for(var i=0,len=this._pickDrawListLen;i<len;i++){var chunk=this._pickDrawList[i];console.log("[chunk "+i+"] type = "+chunk.type);switch(chunk.type){case"draw":console.log("\n");break;case"renderTarget":console.log(" bufType = "+chunk.core.bufType);break;}}console.log("--------------------------------------------------------------------------------------------------");};/**
 * Performs a pick on the display graph and returns info on the result.
 * @param {*} params
 * @returns {*}
 */SceneJS_Display.prototype.pick=function(params){var canvas=this._canvas.canvas;var hit=null;var canvasX=params.canvasX;var canvasY=params.canvasY;var pickBuf=this.pickBuf;// Lazy-create pick buffer
if(!pickBuf){pickBuf=this.pickBuf=new SceneJS._webgl.RenderBuffer({canvas:this._canvas});this.pickBufDirty=true;// Freshly-created pick buffer is dirty
}this.render();// Do any pending visible render
pickBuf.bind();// Bind pick buffer
if(this.pickBufDirty){// Render pick buffer
pickBuf.clear();this._doDrawList({pick:true,clear:true});this._canvas.gl.finish();this.pickBufDirty=false;// Pick buffer up to date
this.rayPickBufDirty=true;// Ray pick buffer now dirty
}var pix=pickBuf.read(canvasX,canvasY);// Read pick buffer
var pickedObjectIndex=pix[0]+pix[1]*256+pix[2]*65536;var pickIndex=pickedObjectIndex>=1?pickedObjectIndex-1:-1;pickBuf.unbind();// Unbind pick buffer
var pickName=this._frameCtx.pickNames[pickIndex];// Map pixel to name
if(pickName){hit={name:pickName.name,path:pickName.path,nodeId:pickName.nodeId,canvasPos:[canvasX,canvasY]};if(params.rayPick){// Ray pick to find position
var rayPickBuf=this.rayPickBuf;// Lazy-create Z-pick buffer
if(!rayPickBuf){rayPickBuf=this.rayPickBuf=new SceneJS._webgl.RenderBuffer({canvas:this._canvas});}rayPickBuf.bind();if(this.rayPickBufDirty){rayPickBuf.clear();this._doDrawList({pick:true,rayPick:true,clear:true});this.rayPickBufDirty=false;}pix=rayPickBuf.read(canvasX,canvasY);rayPickBuf.unbind();// Read normalised device Z coordinate, which will be
// in range of [0..1] with z=0 at front
var screenZ=this._unpackDepth(pix);var w=canvas.width;var h=canvas.height;// Calculate clip space coordinates, which will be in range
// of x=[-1..1] and y=[-1..1], with y=(+1) at top
var x=(canvasX-w/2)/(w/2);// Calculate clip space coordinates
var y=-(canvasY-h/2)/(h/2);var projMat=this._frameCtx.cameraMat;var viewMat=this._frameCtx.viewMat;var pvMat=SceneJS_math_mulMat4(projMat,viewMat,[]);var pvMatInverse=SceneJS_math_inverseMat4(pvMat,[]);var world1=SceneJS_math_transformVector4(pvMatInverse,[x,y,-1,1]);world1=SceneJS_math_mulVec4Scalar(world1,1/world1[3]);var world2=SceneJS_math_transformVector4(pvMatInverse,[x,y,1,1]);world2=SceneJS_math_mulVec4Scalar(world2,1/world2[3]);var dir=SceneJS_math_subVec3(world2,world1,[]);var vWorld=SceneJS_math_addVec3(world1,SceneJS_math_mulVec4Scalar(dir,screenZ,[]),[]);hit.worldPos=vWorld;}}return hit;};/**
 * Unpacks a color-encoded depth
 * @param {Array(Number)} depthZ Depth encoded as an RGBA color value
 * @returns {Number}
 * @private
 */SceneJS_Display.prototype._unpackDepth=function(depthZ){var vec=[depthZ[0]/256.0,depthZ[1]/256.0,depthZ[2]/256.0,depthZ[3]/256.0];var bitShift=[1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0];return SceneJS_math_dotVector4(vec,bitShift);};/** Renders either the draw or pick list.
 *
 * @param {*} params
 * @param {Boolean} params.clear Set true to clear the color, depth and stencil buffers first
 * @param {Boolean} params.pick Set true to render for picking
 * @param {Boolean} params.rayPick Set true to render for ray-picking
 * @private
 */SceneJS_Display.prototype._doDrawList=function(params){var gl=this._canvas.gl;// Reset frame context
var frameCtx=this._frameCtx;frameCtx.renderTarget=null;frameCtx.targetIndex=0;frameCtx.renderBuf=null;frameCtx.viewMat=null;frameCtx.modelMat=null;frameCtx.cameraMat=null;frameCtx.renderer=null;frameCtx.depthbufEnabled=null;frameCtx.clearDepth=null;frameCtx.depthFunc=gl.LESS;frameCtx.scissorTestEnabled=false;frameCtx.blendEnabled=false;frameCtx.backfaces=true;frameCtx.frontface="ccw";frameCtx.pick=!!params.pick;frameCtx.rayPick=!!params.rayPick;frameCtx.pickIndex=0;frameCtx.textureUnit=0;frameCtx.lineWidth=1;frameCtx.transparent=false;frameCtx.ambientColor=this._ambientColor;// The extension needs to be re-queried in case the context was lost and has been recreated.
var VAO=gl.getExtension("OES_vertex_array_object");frameCtx.VAO=VAO?VAO:null;gl.viewport(0,0,this._canvas.canvas.width,this._canvas.canvas.height);if(this.transparent){gl.clearColor(0,0,0,0);}else{gl.clearColor(this._ambientColor[0],this._ambientColor[1],this._ambientColor[2],0.0);}if(params.clear){gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT|gl.STENCIL_BUFFER_BIT);}gl.frontFace(gl.CCW);gl.disable(gl.CULL_FACE);gl.disable(gl.BLEND);if(params.pick){// Render for pick
for(var i=0,len=this._pickDrawListLen;i<len;i++){this._pickDrawList[i].pick(frameCtx);}}else{// Render for draw
for(var i=0,len=this._drawListLen;i<len;i++){// Push opaque rendering chunks
this._drawList[i].draw(frameCtx);}}gl.flush();if(frameCtx.renderBuf){gl.finish();frameCtx.renderBuf.unbind();}if(frameCtx.VAO){frameCtx.VAO.bindVertexArrayOES(null);for(var i=0;i<10;i++){gl.disableVertexAttribArray(i);}}//
//    var numTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
//    for (var ii = 0; ii < numTextureUnits; ++ii) {
//        gl.activeTexture(gl.TEXTURE0 + ii);
//        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
//        gl.bindTexture(gl.TEXTURE_2D, null);
//    }
};SceneJS_Display.prototype.destroy=function(){this._programFactory.destroy();};/**
 * @class Manages creation, sharing and recycle of {@link SceneJS_ProgramSource} instances
 * @private
 */var SceneJS_ProgramSourceFactory=new function(){this._sourceCache={};// Source codes are shared across all scenes
/**
     * Get sourcecode for a program to render the given states
     */this.getSource=function(hash,states){var source=this._sourceCache[hash];if(source){source.useCount++;return source;}return this._sourceCache[hash]=new SceneJS_ProgramSource(hash,this._composePickingVertexShader(states),// pickVertexSrc
this._composePickingFragmentShader(states),// pickFragmentSrc
this._composeRenderingVertexShader(states),// drawVertexSrc
this._composeRenderingFragmentShader(states)// drawfragmentSrc
);};/**
     * Releases program source code
     */this.putSource=function(hash){var source=this._sourceCache[hash];if(source){if(--source.useCount==0){this._sourceCache[source.hash]=null;}}};this._composePickingVertexShader=function(states){var customShaders=states.shader.shaders||{};var customVertexShader=customShaders.vertex||{};var vertexHooks=customVertexShader.hooks||{};var customFragmentShader=customShaders.fragment||{};var fragmentHooks=customFragmentShader.hooks||{};// Do a full custom shader replacement if code supplied without hooks
if(customShaders.vertex&&customShaders.vertex.code&&customShaders.vertex.code!=""&&SceneJS._isEmpty(customShaders.vertex.hooks)){return[customShaders.vertex.code];}var clipping=states.clips.clips.length>0;var morphing=!!states.morphGeometry.targets;var normals=this._hasNormals(states);var src=["precision mediump float;","attribute vec3 SCENEJS_aVertex;","uniform mat4 SCENEJS_uMMatrix;","uniform mat4 SCENEJS_uMNMatrix;","uniform mat4 SCENEJS_uVMatrix;","uniform mat4 SCENEJS_uVNMatrix;","uniform mat4 SCENEJS_uPMatrix;"];if(normals){src.push("attribute vec3 SCENEJS_aNormal;");}if(normals&&(fragmentHooks.worldNormal||fragmentHooks.viewNormal)){src.push("varying vec3 SCENEJS_vWorldNormal;");// Output world-space vertex normal
src.push("varying vec3 SCENEJS_vViewNormal;");// Output view-space vertex normal
}src.push("varying vec4 SCENEJS_vWorldVertex;");src.push("varying vec4 SCENEJS_vViewVertex;");src.push("varying vec4 SCENEJS_vProjVertex;");src.push("uniform vec3 SCENEJS_uWorldEye;");// World-space eye position
src.push("varying vec3 SCENEJS_vWorldEyeVec;");if(customVertexShader.code){src.push("\n"+customVertexShader.code+"\n");}if(morphing){src.push("uniform float SCENEJS_uMorphFactor;");// LERP factor for morph
if(states.morphGeometry.targets[0].vertexBuf){// target2 has these arrays also
src.push("attribute vec3 SCENEJS_aMorphVertex;");}}src.push("void main(void) {");src.push("   vec4 tmpVertex=vec4(SCENEJS_aVertex, 1.0); ");if(normals){src.push("  vec4 modelNormal = vec4(SCENEJS_aNormal, 0.0); ");}if(vertexHooks.modelPos){src.push("tmpVertex="+vertexHooks.modelPos+"(tmpVertex);");}if(morphing){if(states.morphGeometry.targets[0].vertexBuf){src.push("  vec4 vMorphVertex = vec4(SCENEJS_aMorphVertex, 1.0); ");if(vertexHooks.modelPos){src.push("vMorphVertex="+vertexHooks.modelPos+"(vMorphVertex);");}src.push("  tmpVertex = vec4(mix(tmpVertex.xyz, vMorphVertex.xyz, SCENEJS_uMorphFactor), 1.0); ");}}src.push("  tmpVertex = SCENEJS_uMMatrix * tmpVertex; ");if(vertexHooks.worldPos){src.push("tmpVertex="+vertexHooks.worldPos+"(tmpVertex);");}// if (clipping || fragmentHooks.worldPosClip) {
src.push("  SCENEJS_vWorldVertex = tmpVertex; ");//    }
src.push("SCENEJS_vWorldEyeVec = normalize(SCENEJS_uWorldEye - tmpVertex.xyz);");src.push("  tmpVertex = SCENEJS_uVMatrix * tmpVertex; ");if(vertexHooks.viewPos){src.push("tmpVertex="+vertexHooks.viewPos+"(tmpVertex);");}src.push("  SCENEJS_vViewVertex = tmpVertex;");if(normals&&(fragmentHooks.worldNormal||fragmentHooks.viewNormal)){src.push("  vec3 worldNormal = normalize((SCENEJS_uMNMatrix * modelNormal).xyz); ");src.push("  SCENEJS_vWorldNormal = worldNormal;");src.push("  SCENEJS_vViewNormal = (SCENEJS_uVNMatrix * vec4(worldNormal, 1.0)).xyz;");}src.push("  SCENEJS_vProjVertex = SCENEJS_uPMatrix * tmpVertex;");src.push("  gl_Position = SCENEJS_vProjVertex;");src.push("}");if(false){}return src;};/**
     * Composes a fragment shader script for rendering mode in current scene state
     * @private
     */this._composePickingFragmentShader=function(states){var customShaders=states.shader.shaders||{};var customFragmentShader=customShaders.fragment||{};var fragmentHooks=customFragmentShader.hooks||{};// Do a full custom shader replacement if code supplied without hooks
if(customShaders.fragment&&customShaders.fragment.code&&customShaders.fragment.code!=""&&SceneJS._isEmpty(customShaders.fragment.hooks)){return[customShaders.fragment.code];}var clipping=states.clips.clips.length>0;var normals=this._hasNormals(states);var src=["precision mediump float;"];src.push("vec4 packDepth(const in float depth) {");src.push("  const vec4 bitShift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);");src.push("  const vec4 bitMask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);");src.push("  vec4 res = fract(depth * bitShift);");src.push("  res -= res.xxyz * bitMask;");src.push("  return res;");src.push("}");src.push("varying vec4 SCENEJS_vWorldVertex;");src.push("varying vec4 SCENEJS_vViewVertex;");// View-space vertex
src.push("varying vec4 SCENEJS_vProjVertex;");src.push("uniform bool SCENEJS_uRayPickMode;");// Z-pick mode when true else colour-pick
src.push("uniform vec3 SCENEJS_uPickColor;");// Used in colour-pick mode
src.push("uniform float SCENEJS_uZNear;");// Used in Z-pick mode
src.push("uniform float SCENEJS_uZFar;");// Used in Z-pick mode
src.push("varying vec3 SCENEJS_vWorldEyeVec;");// Direction of view-space vertex from eye
src.push("uniform bool  SCENEJS_uClipping;");if(normals&&(fragmentHooks.worldNormal||fragmentHooks.viewNormal)){src.push("varying vec3 SCENEJS_vWorldNormal;");// World-space normal
src.push("varying vec3 SCENEJS_vViewNormal;");// View-space normal
}/*-----------------------------------------------------------------------------------
         * Variables - Clipping
         *----------------------------------------------------------------------------------*/if(clipping){for(var i=0;i<states.clips.clips.length;i++){src.push("uniform float SCENEJS_uClipMode"+i+";");src.push("uniform vec4  SCENEJS_uClipNormalAndDist"+i+";");}}/*-----------------------------------------------------------------------------------
         * Custom GLSL
         *----------------------------------------------------------------------------------*/if(customFragmentShader.code){src.push("\n"+customFragmentShader.code+"\n");}src.push("void main(void) {");if(fragmentHooks.worldPosClip){src.push("if ("+fragmentHooks.worldPosClip+"(SCENEJS_vWorldVertex) == false) { discard; };");}if(fragmentHooks.viewPosClip){src.push("if (!"+fragmentHooks.viewPosClip+"(SCENEJS_vViewVertex) == false) { discard; };");}if(clipping){src.push("if (SCENEJS_uClipping) {");src.push("  float   dist;");for(var i=0;i<states.clips.clips.length;i++){src.push("    if (SCENEJS_uClipMode"+i+" != 0.0) {");src.push("        dist = dot(SCENEJS_vWorldVertex.xyz, SCENEJS_uClipNormalAndDist"+i+".xyz) - SCENEJS_uClipNormalAndDist"+i+".w;");src.push("        if (SCENEJS_uClipMode"+i+" == 1.0) {");src.push("            if (dist > 0.0) { discard; }");src.push("        }");src.push("        if (SCENEJS_uClipMode"+i+" == 2.0) {");src.push("            if (dist > 0.0) { discard; }");src.push("        }");src.push("    }");}src.push("}");}if(fragmentHooks.worldPos){src.push(fragmentHooks.worldPos+"(SCENEJS_vWorldVertex);");}if(fragmentHooks.viewPos){src.push(fragmentHooks.viewPos+"(SCENEJS_vViewVertex);");}if(fragmentHooks.worldEyeVec){src.push(fragmentHooks.worldEyeVec+"(SCENEJS_vWorldEyeVec);");}if(normals&&fragmentHooks.worldNormal){src.push(fragmentHooks.worldNormal+"(SCENEJS_vWorldNormal);");}if(normals&&fragmentHooks.viewNormal){src.push(fragmentHooks.viewNormal+"(SCENEJS_vViewNormal);");}src.push("    if (SCENEJS_uRayPickMode) {");src.push("          float zNormalizedDepth = abs((SCENEJS_uZNear + SCENEJS_vViewVertex.z) / (SCENEJS_uZFar - SCENEJS_uZNear));");src.push("          gl_FragColor = packDepth(zNormalizedDepth); ");src.push("    } else {");src.push("          gl_FragColor = vec4(SCENEJS_uPickColor.rgb, 1.0);  ");src.push("    }");src.push("}");if(false){}return src;};this._isTexturing=function(states){if(states.texture.layers&&states.texture.layers.length>0){if(states.geometry.uvBuf||states.geometry.uvBuf2){return true;}if(states.morphGeometry.targets&&(states.morphGeometry.targets[0].uvBuf||states.morphGeometry.targets[0].uvBuf2)){return true;}}return false;};this._isCubeMapping=function(states){return states.cubemap.layers&&states.cubemap.layers.length>0&&states.geometry.normalBuf;};this._hasNormals=function(states){if(states.geometry.normalBuf){return true;}if(states.morphGeometry.targets&&states.morphGeometry.targets[0].normalBuf){return true;}return false;};this._composeRenderingVertexShader=function(states){var customShaders=states.shader.shaders||{};// Do a full custom shader replacement if code supplied without hooks
if(customShaders.vertex&&customShaders.vertex.code&&customShaders.vertex.code!=""&&SceneJS._isEmpty(customShaders.vertex.hooks)){return[customShaders.vertex.code];}var customVertexShader=customShaders.vertex||{};var vertexHooks=customVertexShader.hooks||{};var customFragmentShader=customShaders.fragment||{};var fragmentHooks=customFragmentShader.hooks||{};var texturing=this._isTexturing(states);var normals=this._hasNormals(states);var clipping=states.clips.clips.length>0;var morphing=!!states.morphGeometry.targets;var src=["precision mediump float;"];src.push("attribute vec3 SCENEJS_aVertex;");// Model coordinates
src.push("uniform vec3 SCENEJS_uWorldEye;");// World-space eye position
src.push("varying vec3 SCENEJS_vWorldEyeVec;");// Output world-space eye vector
/*-----------------------------------------------------------------------------------
         * Variables - normals
         *----------------------------------------------------------------------------------*/if(normals){src.push("attribute vec3 SCENEJS_aNormal;");// Normal vectors
src.push("uniform   mat4 SCENEJS_uMNMatrix;");// Model normal matrix
src.push("uniform   mat4 SCENEJS_uVNMatrix;");// View normal matrix
src.push("varying   vec3 SCENEJS_vWorldNormal;");// Output world-space vertex normal
src.push("varying   vec3 SCENEJS_vViewNormal;");// Output view-space vertex normal
for(var i=0;i<states.lights.lights.length;i++){var light=states.lights.lights[i];if(light.mode=="ambient"){continue;}if(light.mode=="dir"){src.push("uniform vec3 SCENEJS_uLightDir"+i+";");}if(light.mode=="point"){src.push("uniform vec3 SCENEJS_uLightPos"+i+";");}if(light.mode=="spot"){src.push("uniform vec3 SCENEJS_uLightPos"+i+";");}/* Vector from vertex to light, packaged with the pre-computed length of that vector
                 */src.push("varying vec4 SCENEJS_vViewLightVecAndDist"+i+";");// varying for fragment lighting
}}if(texturing){if(states.geometry.uvBuf){src.push("attribute vec2 SCENEJS_aUVCoord;");// UV coords
}if(states.geometry.uvBuf2){src.push("attribute vec2 SCENEJS_aUVCoord2;");// UV2 coords
}}/* Vertex color variables
         */if(states.geometry.colorBuf){src.push("attribute vec4 SCENEJS_aVertexColor;");// UV2 coords
src.push("varying vec4 SCENEJS_vColor;");// Varying for fragment texturing
}src.push("uniform mat4 SCENEJS_uMMatrix;");// Model matrix
src.push("uniform mat4 SCENEJS_uVMatrix;");// View matrix
src.push("uniform mat4 SCENEJS_uPMatrix;");// Projection matrix
if(clipping||fragmentHooks.worldPos){src.push("varying vec4 SCENEJS_vWorldVertex;");// Varying for fragment clip or world pos hook
}//    if (fragmentHooks.viewPos) {
src.push("varying vec4 SCENEJS_vViewVertex;");// Varying for fragment view clip hook
//  }
if(texturing){// Varyings for fragment texturing
if(states.geometry.uvBuf){src.push("varying vec2 SCENEJS_vUVCoord;");}if(states.geometry.uvBuf2){src.push("varying vec2 SCENEJS_vUVCoord2;");}}/*-----------------------------------------------------------------------------------
         * Variables - Morphing
         *----------------------------------------------------------------------------------*/if(morphing){src.push("uniform float SCENEJS_uMorphFactor;");// LERP factor for morph
if(states.morphGeometry.targets[0].vertexBuf){// target2 has these arrays also
src.push("attribute vec3 SCENEJS_aMorphVertex;");}if(normals){if(states.morphGeometry.targets[0].normalBuf){src.push("attribute vec3 SCENEJS_aMorphNormal;");}}}if(customVertexShader.code){src.push("\n"+customVertexShader.code+"\n");}src.push("void main(void) {");src.push("vec4 tmpVertex=vec4(SCENEJS_aVertex, 1.0); ");if(vertexHooks.modelPos){src.push("tmpVertex="+vertexHooks.modelPos+"(tmpVertex);");}src.push("  vec4 modelVertex = tmpVertex; ");if(normals){src.push("  vec4 modelNormal = vec4(SCENEJS_aNormal, 0.0); ");}/*
         * Morphing - morph targets are in same model space as the geometry
         */if(morphing){if(states.morphGeometry.targets[0].vertexBuf){src.push("  vec4 vMorphVertex = vec4(SCENEJS_aMorphVertex, 1.0); ");src.push("  modelVertex = vec4(mix(modelVertex.xyz, vMorphVertex.xyz, SCENEJS_uMorphFactor), 1.0); ");}if(normals){if(states.morphGeometry.targets[0].normalBuf){src.push("  vec4 vMorphNormal = vec4(SCENEJS_aMorphNormal, 1.0); ");src.push("  modelNormal = vec4( mix(modelNormal.xyz, vMorphNormal.xyz, SCENEJS_uMorphFactor), 1.0); ");}}}src.push("  vec4 worldVertex = SCENEJS_uMMatrix * modelVertex; ");if(vertexHooks.worldPos){src.push("worldVertex="+vertexHooks.worldPos+"(worldVertex);");}if(vertexHooks.viewMatrix){src.push("vec4 viewVertex = "+vertexHooks.viewMatrix+"(SCENEJS_uVMatrix) * worldVertex;");}else{src.push("vec4 viewVertex  = SCENEJS_uVMatrix * worldVertex; ");}if(vertexHooks.viewPos){src.push("viewVertex="+vertexHooks.viewPos+"(viewVertex);");// Vertex hook function
}if(normals){src.push("  vec3 worldNormal = normalize((SCENEJS_uMNMatrix * modelNormal).xyz); ");src.push("  SCENEJS_vWorldNormal = worldNormal;");src.push("  SCENEJS_vViewNormal = (SCENEJS_uVNMatrix * vec4(worldNormal, 1.0)).xyz;");}if(clipping||fragmentHooks.worldPos){src.push("  SCENEJS_vWorldVertex = worldVertex;");// Varying for fragment world clip or hooks
}// if (fragmentHooks.viewPos) {
src.push("  SCENEJS_vViewVertex = viewVertex;");// Varying for fragment hooks
//  }
if(vertexHooks.projMatrix){src.push("gl_Position = "+vertexHooks.projMatrix+"(SCENEJS_uPMatrix) * viewVertex;");}else{src.push("  gl_Position = SCENEJS_uPMatrix * viewVertex;");}/*-----------------------------------------------------------------------------------
         * Logic - normals
         *
         * Transform the world-space lights into view space
         *----------------------------------------------------------------------------------*/src.push("  vec3 tmpVec3;");if(normals){for(var i=0;i<states.lights.lights.length;i++){light=states.lights.lights[i];if(light.mode=="ambient"){continue;}if(light.mode=="dir"){/* Directional light
                     */if(light.space=="world"){/* World space light - transform vector to View space
                         */src.push("SCENEJS_vViewLightVecAndDist"+i+" = vec4(-normalize((SCENEJS_uVMatrix * vec4(SCENEJS_uLightDir"+i+", 0.0)).xyz), 0.0);");}else{/* View space light
                         */src.push("SCENEJS_vViewLightVecAndDist"+i+" = vec4(-normalize(SCENEJS_uLightDir"+i+"), 0.0);");}}if(light.mode=="point"){/* Positional light
                     */if(light.space=="world"){/* World space light - transform position to View space
                         */src.push("tmpVec3 = ((SCENEJS_uVMatrix * vec4(SCENEJS_uLightPos"+i+", 1.0)).xyz - worldVertex.xyz);");src.push("SCENEJS_vViewLightVecAndDist"+i+" = vec4(normalize(tmpVec3), length(tmpVec3));");}else{/* View space light
                         */src.push("tmpVec3 = (SCENEJS_uLightPos"+i+".xyz - worldVertex.xyz);");src.push("SCENEJS_vViewLightVecAndDist"+i+" = vec4(normalize(tmpVec3), length(tmpVec3));");}}}}src.push("SCENEJS_vWorldEyeVec = normalize(SCENEJS_uWorldEye - worldVertex.xyz);");if(texturing){// varyings for fragment texturing
if(states.geometry.uvBuf){src.push("SCENEJS_vUVCoord = SCENEJS_aUVCoord;");}if(states.geometry.uvBuf2){src.push("SCENEJS_vUVCoord2 = SCENEJS_aUVCoord2;");}}if(states.geometry.colorBuf){src.push("SCENEJS_vColor = SCENEJS_aVertexColor;");// Varyings for fragment interpolated vertex coloring
}src.push("}");if(false){}return src;};/*-----------------------------------------------------------------------------------------------------------------
     * Rendering Fragment shader
     *---------------------------------------------------------------------------------------------------------------*/this._composeRenderingFragmentShader=function(states){var customShaders=states.shader.shaders||{};// Do a full custom shader replacement if code supplied without hooks
if(customShaders.fragment&&customShaders.fragment.code&&customShaders.fragment.code!=""&&SceneJS._isEmpty(customShaders.fragment.hooks)){return[customShaders.fragment.code];}var customFragmentShader=customShaders.fragment||{};var fragmentHooks=customFragmentShader.hooks||{};var texturing=this._isTexturing(states);var cubeMapping=this._isCubeMapping(states);var normals=this._hasNormals(states);var clipping=states.clips.clips.length>0;var src=["\n"];src.push("precision mediump float;");if(clipping||fragmentHooks.worldPos){src.push("varying vec4 SCENEJS_vWorldVertex;");// World-space vertex
}//  if (fragmentHooks.viewPos) {
src.push("varying vec4 SCENEJS_vViewVertex;");// View-space vertex
//  }
src.push("uniform float SCENEJS_uZNear;");// Used in Z-pick mode
src.push("uniform float SCENEJS_uZFar;");// Used in Z-pick mode
/*-----------------------------------------------------------------------------------
         * Variables
         *----------------------------------------------------------------------------------*/if(clipping){for(var i=0;i<states.clips.clips.length;i++){src.push("uniform float SCENEJS_uClipMode"+i+";");src.push("uniform vec4  SCENEJS_uClipNormalAndDist"+i+";");}}if(texturing){if(states.geometry.uvBuf){src.push("varying vec2 SCENEJS_vUVCoord;");}if(states.geometry.uvBuf2){src.push("varying vec2 SCENEJS_vUVCoord2;");}var layer;for(var i=0,len=states.texture.layers.length;i<len;i++){layer=states.texture.layers[i];src.push("uniform sampler2D SCENEJS_uSampler"+i+";");if(layer.matrix){src.push("uniform mat4 SCENEJS_uLayer"+i+"Matrix;");}src.push("uniform float SCENEJS_uLayer"+i+"BlendFactor;");}}if(normals&&cubeMapping){var layer;for(var i=0,len=states.cubemap.layers.length;i<len;i++){layer=states.cubemap.layers[i];src.push("uniform samplerCube SCENEJS_uCubeMapSampler"+i+";");src.push("uniform float SCENEJS_uCubeMapIntensity"+i+";");}}/* True when lighting
         */src.push("uniform bool  SCENEJS_uBackfaceTexturing;");src.push("uniform bool  SCENEJS_uBackfaceLighting;");src.push("uniform bool  SCENEJS_uSpecularLighting;");src.push("uniform bool  SCENEJS_uClipping;");src.push("uniform bool  SCENEJS_uAmbient;");src.push("uniform bool  SCENEJS_uDiffuse;");src.push("uniform bool  SCENEJS_uReflection;");// Added in v4.0 to support depth targets
src.push("uniform bool  SCENEJS_uDepthMode;");/* True when rendering transparency
         */src.push("uniform bool  SCENEJS_uTransparent;");/* Vertex color variable
         */if(states.geometry.colorBuf){src.push("varying vec4 SCENEJS_vColor;");}src.push("uniform vec3  SCENEJS_uAmbientColor;");// Scene ambient colour - taken from clear colour
src.push("uniform vec3  SCENEJS_uMaterialColor;");src.push("uniform float SCENEJS_uMaterialAlpha;");src.push("uniform float SCENEJS_uMaterialEmit;");src.push("uniform vec3  SCENEJS_uMaterialSpecularColor;");src.push("uniform float SCENEJS_uMaterialSpecular;");src.push("uniform float SCENEJS_uMaterialShine;");src.push("varying vec3 SCENEJS_vWorldEyeVec;");// Direction of world-space vertex from eye
if(normals){src.push("varying vec3 SCENEJS_vWorldNormal;");// World-space normal
src.push("varying vec3 SCENEJS_vViewNormal;");// View-space normal
var light;for(var i=0;i<states.lights.lights.length;i++){light=states.lights.lights[i];if(light.mode=="ambient"){continue;}src.push("uniform vec3  SCENEJS_uLightColor"+i+";");if(light.mode=="point"){src.push("uniform vec3  SCENEJS_uLightAttenuation"+i+";");}src.push("varying vec4  SCENEJS_vViewLightVecAndDist"+i+";");// Vector from light to vertex
}}if(customFragmentShader.code){src.push("\n"+customFragmentShader.code+"\n");}src.push("void main(void) {");src.push("  vec3    ambient= SCENEJS_uAmbient ? SCENEJS_uAmbientColor : vec3(0.0, 0.0, 0.0);");/*-----------------------------------------------------------------------------------
         * Logic - Clipping
         *----------------------------------------------------------------------------------*/if(clipping){src.push("if (SCENEJS_uClipping) {");src.push("  float   dist;");for(var i=0;i<states.clips.clips.length;i++){src.push("    if (SCENEJS_uClipMode"+i+" != 0.0) {");src.push("        dist = dot(SCENEJS_vWorldVertex.xyz, SCENEJS_uClipNormalAndDist"+i+".xyz) - SCENEJS_uClipNormalAndDist"+i+".w;");src.push("        if (SCENEJS_uClipMode"+i+" == 1.0) {");src.push("            if (dist > 0.0) { discard; }");src.push("        }");src.push("        if (SCENEJS_uClipMode"+i+" == 2.0) {");src.push("            if (dist > 0.0) { discard; }");src.push("        }");src.push("    }");}src.push("}");}if(texturing&&states.geometry.uvBuf&&fragmentHooks.texturePos){src.push(fragmentHooks.texturePos+"(SCENEJS_vUVCoord);");}if(fragmentHooks.worldPos){src.push(fragmentHooks.worldPos+"(SCENEJS_vWorldVertex);");}if(fragmentHooks.viewPos){src.push(fragmentHooks.viewPos+"(SCENEJS_vViewVertex);");}if(fragmentHooks.worldEyeVec){src.push(fragmentHooks.worldEyeVec+"(SCENEJS_vWorldEyeVec);");}if(normals&&fragmentHooks.worldNormal){src.push(fragmentHooks.worldNormal+"(SCENEJS_vWorldNormal);");}if(normals&&fragmentHooks.viewNormal){src.push(fragmentHooks.viewNormal+"(SCENEJS_vViewNormal);");}if(states.geometry.colorBuf){src.push("  vec3    color   = SCENEJS_vColor.rgb;");}else{src.push("  vec3    color   = SCENEJS_uMaterialColor;");}src.push("  float alpha         = SCENEJS_uMaterialAlpha;");src.push("  float emit          = SCENEJS_uMaterialEmit;");src.push("  float specular      = SCENEJS_uMaterialSpecular;");src.push("  vec3  specularColor = SCENEJS_uMaterialSpecularColor;");src.push("  float shine         = SCENEJS_uMaterialShine;");if(fragmentHooks.materialBaseColor){src.push("color="+fragmentHooks.materialBaseColor+"(color);");}if(fragmentHooks.materialAlpha){src.push("alpha="+fragmentHooks.materialAlpha+"(alpha);");}if(fragmentHooks.materialEmit){src.push("emit="+fragmentHooks.materialEmit+"(emit);");}if(fragmentHooks.materialSpecular){src.push("specular="+fragmentHooks.materialSpecular+"(specular);");}if(fragmentHooks.materialSpecularColor){src.push("specularColor="+fragmentHooks.materialSpecularColor+"(specularColor);");}if(fragmentHooks.materialShine){src.push("shine="+fragmentHooks.materialShine+"(shine);");}if(normals){src.push("  float   attenuation = 1.0;");src.push("  vec3    viewNormalVec = SCENEJS_vViewNormal;");src.push("  vec3    worldNormalVec = SCENEJS_vWorldNormal;");}var layer;if(texturing){if(normals){src.push("if (SCENEJS_uBackfaceTexturing || dot(SCENEJS_vWorldNormal, SCENEJS_vWorldEyeVec) > 0.0) {");}src.push("  vec4    texturePos;");src.push("  vec2    textureCoord=vec2(0.0,0.0);");for(var i=0,len=states.texture.layers.length;i<len;i++){layer=states.texture.layers[i];/* Texture input
                 */if(layer.applyFrom=="normal"&&normals){if(states.geometry.normalBuf){src.push("texturePos=vec4(viewNormalVec.xyz, 1.0);");}else{SceneJS.log.warn("Texture layer applyFrom='normal' but geo has no normal vectors");continue;}}if(layer.applyFrom=="uv"){if(states.geometry.uvBuf){src.push("texturePos = vec4(SCENEJS_vUVCoord.s, SCENEJS_vUVCoord.t, 1.0, 1.0);");}else{SceneJS.log.warn("Texture layer applyTo='uv' but geometry has no UV coordinates");continue;}}if(layer.applyFrom=="uv2"){if(states.geometry.uvBuf2){src.push("texturePos = vec4(SCENEJS_vUVCoord2.s, SCENEJS_vUVCoord2.t, 1.0, 1.0);");}else{SceneJS.log.warn("Texture layer applyTo='uv2' but geometry has no UV2 coordinates");continue;}}/* Texture matrix
                 */if(layer.matrix){src.push("textureCoord=(SCENEJS_uLayer"+i+"Matrix * texturePos).xy;");}else{src.push("textureCoord=texturePos.xy;");}/* Alpha from Texture
                 */if(layer.applyTo=="alpha"){if(layer.blendMode=="multiply"){src.push("alpha = alpha * (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).b);");}else if(layer.blendMode=="add"){src.push("alpha = ((1.0 - SCENEJS_uLayer"+i+"BlendFactor) * alpha) + (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).b);");}//=====================================================================
// TODO: "mix" blendMode
//=====================================================================
}/* Texture output
                 */if(layer.applyTo=="baseColor"){if(layer.blendMode=="multiply"){src.push("color = color * (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).rgb);");}else{src.push("color = ((1.0 - SCENEJS_uLayer"+i+"BlendFactor) * color) + (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).rgb);");}}if(layer.applyTo=="emit"){if(layer.blendMode=="multiply"){src.push("emit  = emit * (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");}else{src.push("emit = ((1.0 - SCENEJS_uLayer"+i+"BlendFactor) * emit) + (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");}}if(layer.applyTo=="specular"&&normals){if(layer.blendMode=="multiply"){src.push("specular  = specular * (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");}else{src.push("specular = ((1.0 - SCENEJS_uLayer"+i+"BlendFactor) * specular) + (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");}}if(layer.applyTo=="shine"){if(layer.blendMode=="multiply"){src.push("shine  = shine * (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");}else{src.push("shine = ((1.0 - SCENEJS_uLayer"+i+"BlendFactor) * shine) + (SCENEJS_uLayer"+i+"BlendFactor * texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, 1.0 - textureCoord.y)).r);");}}if(layer.applyTo=="normals"&&normals){src.push("vec3 bump = normalize(texture2D(SCENEJS_uSampler"+i+", vec2(textureCoord.x, -textureCoord.y)).xyz * 2.0 - 1.0);");src.push("worldNormalVec = bump;");}}if(normals){src.push("}");}}if(normals&&cubeMapping){src.push("if (SCENEJS_uReflection) {");// Flag which can enable/disable reflection
src.push("vec3 envLookup = reflect(normalize(SCENEJS_vWorldEyeVec), normalize(worldNormalVec));");src.push("envLookup.y = envLookup.y * -1.0;");// Need to flip textures on Y-axis for some reason
src.push("vec4 envColor;");for(var i=0,len=states.cubemap.layers.length;i<len;i++){layer=states.cubemap.layers[i];src.push("envColor = textureCube(SCENEJS_uCubeMapSampler"+i+", envLookup);");src.push("color = mix(color, envColor.rgb, specular * SCENEJS_uCubeMapIntensity"+i+");");}src.push("}");// if (SCENEJS_uReflection)
}src.push("  vec4    fragColor;");if(normals){src.push("if (SCENEJS_uBackfaceLighting || dot(SCENEJS_vWorldNormal, SCENEJS_vWorldEyeVec) > 0.0) {");src.push("  vec3    lightValue      = vec3(0.0, 0.0, 0.0);");src.push("  vec3    specularValue   = vec3(0.0, 0.0, 0.0);");src.push("  vec3    viewLightVec;");src.push("  float   dotN;");src.push("  float   lightDist;");var light;for(var i=0,len=states.lights.lights.length;i<len;i++){light=states.lights.lights[i];if(light.mode=="ambient"){continue;}src.push("viewLightVec = SCENEJS_vViewLightVecAndDist"+i+".xyz;");if(light.mode=="point"){src.push("dotN = max(dot(viewNormalVec, viewLightVec), 0.0);");//src.push("if (dotN > 0.0) {");
src.push("lightDist = SCENEJS_vViewLightVecAndDist"+i+".w;");src.push("attenuation = 1.0 - ("+"  SCENEJS_uLightAttenuation"+i+"[0] + "+"  SCENEJS_uLightAttenuation"+i+"[1] * lightDist + "+"  SCENEJS_uLightAttenuation"+i+"[2] * lightDist * lightDist);");if(light.diffuse){src.push("if (SCENEJS_uDiffuse) {");src.push("      lightValue += dotN * SCENEJS_uLightColor"+i+" * attenuation;");src.push("}");}if(light.specular){src.push("if (SCENEJS_uSpecularLighting) {");src.push("    specularValue += specularColor * SCENEJS_uLightColor"+i+" * specular * pow(max(dot(reflect(-viewLightVec, -viewNormalVec), vec3(0.0,0.0,1.0)), 0.0), shine) * attenuation;");src.push("}");}//src.push("}");
}if(light.mode=="dir"){src.push("dotN = max(dot(viewNormalVec, viewLightVec), 0.0);");//src.push("if (dotN > 0.0) {");
if(light.diffuse){src.push("if (SCENEJS_uDiffuse) {");src.push("      lightValue += dotN * SCENEJS_uLightColor"+i+";");src.push("}");}if(light.specular){src.push("if (SCENEJS_uSpecularLighting) {");src.push("    specularValue += specularColor * SCENEJS_uLightColor"+i+" * specular * pow(max(dot(reflect(-viewLightVec, -viewNormalVec), vec3(0.0,0.0,1.0)), 0.0), shine);");src.push("}");}// src.push("}");
}}src.push("      fragColor = vec4((specularValue.rgb + color.rgb * (lightValue.rgb + ambient.rgb)) + (emit * color.rgb), alpha);");src.push("   } else {");src.push("      fragColor = vec4((color.rgb + (emit * color.rgb)) *  (vec3(1.0, 1.0, 1.0) + ambient.rgb), alpha);");src.push("   }");}else{// No normals
src.push("fragColor = vec4((color.rgb + (emit * color.rgb)) *  (vec3(1.0, 1.0, 1.0) + ambient.rgb), alpha);");}if(fragmentHooks.pixelColor){src.push("fragColor="+fragmentHooks.pixelColor+"(fragColor);");}if(false){}else{src.push("    if (SCENEJS_uDepthMode) {");src.push("          float depth = length(SCENEJS_vViewVertex) / (SCENEJS_uZFar - SCENEJS_uZNear);");src.push("          const vec4 bias = vec4(1.0 / 255.0,");src.push("          1.0 / 255.0,");src.push("          1.0 / 255.0,");src.push("          0.0);");src.push("          float r = depth;");src.push("          float g = fract(r * 255.0);");src.push("          float b = fract(g * 255.0);");src.push("          float a = fract(b * 255.0);");src.push("          vec4 colour = vec4(r, g, b, a);");src.push("          gl_FragColor = colour - (colour.yzww * bias);");src.push("    } else {");src.push("          gl_FragColor = fragColor;");src.push("    };");}src.push("}");return src;};}();/**
 * @class Source code for pick and draw shader programs, to be compiled into one or more {@link SceneJS_Program}s
 * @private
 * 
 * @param {String} hash Hash code identifying the rendering capabilities of the programs
 * @param {String} pickVertexSrc Source code of the pick vertex shader
 * @param {String} pickFragmentSrc Source code of the pick fragment shader
 * @param {String} drawVertexSrc Source code of the draw vertex shader
 * @param {String} drawFragmentSrc Source code of the draw fragment shader
 */var SceneJS_ProgramSource=function SceneJS_ProgramSource(hash,pickVertexSrc,pickFragmentSrc,drawVertexSrc,drawFragmentSrc){/**
     * Hash code identifying the capabilities of the {@link SceneJS_Program} that is compiled from this source
     * @type String
     */this.hash=hash;/**
     * Source code for pick vertex shader
     * @type String
     */this.pickVertexSrc=pickVertexSrc;/**
     * Source code for pick fragment shader
     * @type String
     */this.pickFragmentSrc=pickFragmentSrc;/**
     * Source code for draw vertex shader
     * @type String
     */this.drawVertexSrc=drawVertexSrc;/**
     * Source code for draw fragment shader
     * @type String
     */this.drawFragmentSrc=drawFragmentSrc;/**
     * Count of {@link SceneJS_Program}s compiled from this program source code
     * @type Number
     */this.useCount=0;};/**  
 * @class Manages creation, sharing and recycle of {@link SceneJS_Program} instances
 * @private
 */var SceneJS_ProgramFactory=function SceneJS_ProgramFactory(cfg){this._canvas=cfg.canvas;this._programs={};this._nextProgramId=0;};/**
 * Gets a program to render the given states
 */SceneJS_ProgramFactory.prototype.getProgram=function(hash,states){var program=this._programs[hash];if(!program){var source=SceneJS_ProgramSourceFactory.getSource(hash,states);program=new SceneJS_Program(this._nextProgramId++,hash,source,this._canvas.gl);this._programs[hash]=program;}program.useCount++;return program;};/**
 * Releases a program back to the shader factory
 */SceneJS_ProgramFactory.prototype.putProgram=function(program){if(--program.useCount<=0){program.draw.destroy();program.pick.destroy();SceneJS_ProgramSourceFactory.putSource(program.hash);this._programs[program.hash]=null;}};/**
 * Notifies this shader factory that the WebGL context has been restored after previously being lost
 */SceneJS_ProgramFactory.prototype.webglRestored=function(){var gl=this._canvas.gl;for(var id in this._programs){if(this._programs.hasOwnProperty(id)){this._programs[id].build(gl);}}};/**
 * Destroys this shader factory
 */SceneJS_ProgramFactory.prototype.destroy=function(){};/**
 * @class Vertex and fragment shaders for pick and draw
 * @private
 *
 * @param {Number} id ID unique among all programs in the owner {@link SceneJS_ProgramFactory}
 * @param {String} hash Hash code which uniquely identifies the capabilities of the program, computed from hashes on the {@link Scene_Core}s that the {@link SceneJS_ProgramSource} composed to render
 * @param {SceneJS_ProgramSource} source Sourcecode from which the the program is compiled in {@link #build}
 * @param {WebGLRenderingContext} gl WebGL context 
 */var SceneJS_Program=function SceneJS_Program(id,hash,source,gl){/**
     * ID for this program, unique among all programs in the display
     * @type Number
     */this.id=id;/**
     * Hash code for this program's capabilities, same as the hash on {@link #source}
     * @type String
     */this.hash=source.hash;/**
     * Source code for this program's shaders
     * @type SceneJS_ProgramSource
     */this.source=source;/**
     * WebGL context on which this program's shaders are allocated
     * @type WebGLRenderingContext
     */this.gl=gl;/**
     * The drawing program
     * @type SceneJS._webgl.Program
     */this.draw=null;/**
     * The picking program
     * @type SceneJS._webgl.Program
     */this.pick=null;/**
     * The count of display objects using this program
     * @type Number
     */this.useCount=0;this.build(gl);};/**
 *  Creates the render and pick programs.
 * This is also re-called to re-create them after WebGL context loss.
 */SceneJS_Program.prototype.build=function(gl){/**
     * Current draw uniform state cached as a bitfield to avoid costly extra uniform1i calls
     * @type Number
     */this.drawUniformFlags=0;this.gl=gl;this.draw=new SceneJS._webgl.Program(gl,[this.source.drawVertexSrc.join("\n")],[this.source.drawFragmentSrc.join("\n")]);this.pick=new SceneJS._webgl.Program(gl,[this.source.pickVertexSrc.join("\n")],[this.source.pickFragmentSrc.join("\n")]);};/**
 * @class Manages creation and recycle of {@link SceneJS_Object} instances
 * @private
 */var SceneJS_ObjectFactory=function SceneJS_ObjectFactory(){};/**
 * @property {[SceneJS_Object]} _freeObjects Pool of free display objects, shared by all object factories
 */SceneJS_ObjectFactory.prototype._freeObjects=[];/**
 * @property {Number} _numFreeObjects Number of free objects
 */SceneJS_ObjectFactory.prototype._numFreeObjects=0;/**
 * Gets a display object from this factory
 *
 * @param {String} id ID to assign to the object
 * @returns {SceneJS_Object} The object
 */SceneJS_ObjectFactory.prototype.getObject=function(id){var object;if(this._numFreeObjects>0){object=this._freeObjects[--this._numFreeObjects];object.id=id;return object;}return new SceneJS_Object(id);};/**
 * Releases a display object back to this factory
 * @param {SceneJS_Object} object Object to release
 */SceneJS_ObjectFactory.prototype.putObject=function(object){this._freeObjects[this._numFreeObjects++]=object;};/**
 * @class An object within a {@link SceneJS_Display}
 * @private
 */var SceneJS_Object=function SceneJS_Object(id){/**
     * ID for this objects, unique among all objects in the display
     * @type Number
     */this.id=id;/**
     * Hash code for this object, unique among all objects in the display
     * @type String
     */this.hash=null;/**
     * State sort key, computed from {@link #layer}, {@link #program} and {@link #texture}
     * @type Number
     */this.sortKey=null;/**
     * Sequence of state chunks applied to render this object
     * @type {[SceneJS_Chunk]} chunks
     */this.chunks=[];/**
     * Number of state chunks applied to render this object
     * @type Number
     */this.chunksLen=0;/**
     * Shader programs that render this object, also used for (re)computing {@link #sortKey}
     * @type SceneJS_Program
     */this.program=null;/**
     * State core for the {@link SceneJS.Layer} that this object was compiled from, used for (re)computing {@link #sortKey} and visibility cull
     */this.layer=null;/**
     * State core for the {@link SceneJS.Texture} that this object was compiled from, used for (re)computing {@link #sortKey}
     */this.texture=null;/**
     * State core for the {@link SceneJS.Flags} that this object was compiled from, used for visibility cull
     */this.flags=null;/**
     * State core for the {@link SceneJS.Tag} that this object was compiled from, used for visibility cull
     */this.tag=null;};/**
 * @class A facade which exposes internal scene rendering state to "rendered" event listeners bound to scene graph nodes with {@link SceneJS.Node#bind}.
 *
 * <p>The listener is fired for each {@link SceneJS.Geometry} that is rendered within the subgraph of the bound node.
 * An instance of this facade is passed into the listener's handler, enabling the listener to obtain the various transform
 * matrices that are active at that {@link SceneJS.Geometry}.</p>
 *
 * <p>The facade instance is only valid within the callback's execution; internally, SceneJS reuses the same instance of the
 * facade with each scene.</p>
 */SceneJS.RenderContext=function(frameCtx){this._frameCtx=frameCtx;};/**
 * Get the projection matrix, as defined by the active {@link SceneJS.Camera} node.
 */SceneJS.RenderContext.prototype.getCameraMatrix=function(){return this._frameCtx.cameraMat;};/**
 * Get the view matrix, as defined by the active {@link SceneJS.LookAt} node.
 */SceneJS.RenderContext.prototype.getViewMatrix=function(){return this._frameCtx.viewMat;};/**
 * Get the model matrix, as defined by the active {@link SceneJS.XForm} node.
 */SceneJS.RenderContext.prototype.getModelMatrix=function(){return this._frameCtx.modelMat;};/**
 * Transforms the given world coordinate by the model, view and projection matrices defined by the active {@link SceneJS.XForm}, {@link SceneJS.LookAt} and {@link SceneJS.Camera} nodes.
 * @returns [Number] The 2D Canvas-space coordinate
 */SceneJS.RenderContext.prototype.getCanvasPos=function(offset){this.getProjPos(offset);var canvas=this._frameCtx.canvas.canvas;var canvasWidth=canvas.width;var canvasHeight=canvas.height;/* Projection division and map to canvas
     */var pc=this._pc;var x=pc[0]/pc[3]*canvasWidth*0.5;var y=pc[1]/pc[3]*canvasHeight*0.5;return{x:x+canvasWidth*0.5,y:canvasHeight-y-canvasHeight*0.5};};/**
 * Transforms the given world coordinate by the model and view matrices defined by the active {@link SceneJS.XForm} and {@link SceneJS.LookAt} nodes.
 * @returns [Number] The 3D Projection-space coordinate
 */SceneJS.RenderContext.prototype.getCameraPos=function(offset){this.getProjPos(offset);this._camPos=SceneJS_math_normalizeVec3(this._pc,[0,0,0]);return{x:this._camPos[0],y:this._camPos[1],z:this._camPos[2]};// TODO: return _camPos and lose the temp object
};SceneJS.RenderContext.prototype.getProjPos=function(offset){this.getViewPos(offset);this._pc=SceneJS_math_transformPoint3(this._frameCtx.cameraMat,this._vc);return{x:this._pc[0],y:this._pc[1],z:this._pc[2],w:this._pc[3]};};SceneJS.RenderContext.prototype.getViewPos=function(offset){this.getWorldPos(offset);this._vc=SceneJS_math_transformPoint3(this._frameCtx.viewMat,this._wc);return{x:this._vc[0],y:this._vc[1],z:this._vc[2],w:this._vc[3]};};SceneJS.RenderContext.prototype.getWorldPos=function(offset){this._wc=SceneJS_math_transformPoint3(this._frameCtx.modelMat,offset||[0,0,0]);return{x:this._wc[0],y:this._wc[1],z:this._wc[2],w:this._wc[3]};};/**
 * @class A chunk of WebGL state changes to render a {@link SceneJS_Core} for drawing and picking (if applicable to the core type).
 *
 * <p>Instances of this class are created and recycled by a {@link SceneJS_ChunkFactory}.</p>
 *
 * <p>Each {@link SceneJS_Object} has a list of chunks to render it's {@link SceneJS_Core}s</p>
 *
 * @private
 */var SceneJS_Chunk=function SceneJS_Chunk(){};/**
 * Initialises the chunk. This is called within the constructor, and also to by the owner {@link SceneJS_ChunkFactory}
 * when recycling a chunk from its free chunk pool. This method sets the given properties on the chunk, then calls the
 * chunk instance's <b>build</b> method if the chunk has been augmented with one.
 *
 * @param {String} id Chunk ID
 * @param {SceneJS_Program} program Program to render the chunk
 * @param {SceneJS_Core} core The state core rendered by this chunk
 * @param {SceneJS_Core} core2 Another state core rendered by this chunk, only used for geometry
 */SceneJS_Chunk.prototype.init=function(id,program,core,core2){this.id=id;this.program=program;this.core=core;this.core2=core2;if(this.build){this.build();}};/**
 * @class Manages creation, reuse and destruction of {@link SceneJS_Chunk}s for the nodes within a single {@link SceneJS_Display}.
 * @private
 */var SceneJS_ChunkFactory=function SceneJS_ChunkFactory(){this._chunks={};this.chunkTypes=SceneJS_ChunkFactory.chunkTypes;};/**
 * Sub-classes of {@link SceneJS_Chunk} provided by this factory
 */SceneJS_ChunkFactory.chunkTypes={};// Supported chunk classes, installed by #createChunkType
/**
 * Free pool of unused {@link SceneJS_Chunk} instances
 */SceneJS_ChunkFactory._freeChunks={};// Free chunk pool for each type
/**
 * Creates a chunk class for instantiation by this factory
 *
 * @param params Members to augment the chunk class prototype with
 * @param params.type Type name for the new chunk class
 * @param params.draw Method to render the chunk in draw render
 * @param params.pick Method to render the chunk in pick render
 * @param params.drawAndPick Method to render the chunk in both draw and pick renders
 */SceneJS_ChunkFactory.createChunkType=function(params){if(!params.type){throw"'type' expected in params";}var supa=SceneJS_Chunk;var chunkClass=function chunkClass(){// Create the class
this.useCount=0;this.init.apply(this,arguments);};chunkClass.prototype=new supa();// Inherit from base class
chunkClass.prototype.constructor=chunkClass;if(params.drawAndPick){// Common method for draw and pick render
params.draw=params.pick=params.drawAndPick;}SceneJS_ChunkFactory.chunkTypes[params.type]=chunkClass;SceneJS._apply(params,chunkClass.prototype);// Augment subclass
SceneJS_ChunkFactory._freeChunks[params.type]={// Set up free chunk pool for this type
chunks:[],chunksLen:0};return chunkClass;};/**
 *
 */SceneJS_ChunkFactory.prototype.getChunk=function(chunkId,type,program,core,core2){var chunkClass=SceneJS_ChunkFactory.chunkTypes[type];// Check type supported
if(!chunkClass){throw"chunk type not supported: '"+type+"'";}var chunk=this._chunks[chunkId];// Try to reference an existing chunk
if(chunk){chunk.useCount++;return chunk;}var freeChunks=SceneJS_ChunkFactory._freeChunks[type];// Try to recycle a free chunk
if(freeChunks.chunksLen>0){chunk=freeChunks.chunks[--freeChunks.chunksLen];}if(chunk){// Reinitialise the recycled chunk
chunk.init(chunkId,program,core,core2);}else{// Instantiate a fresh chunk
chunk=new chunkClass(chunkId,program,core,core2);// Create new chunk
}chunk.type=type;chunk.useCount=1;this._chunks[chunkId]=chunk;return chunk;};/**
 * Releases a display state chunk back to this factory, destroying it if the chunk's use count is then zero.
 *
 * @param {SceneJS_Chunk} chunk Chunk to release
 */SceneJS_ChunkFactory.prototype.putChunk=function(chunk){if(chunk.useCount==0){return;// In case of excess puts
}if(--chunk.useCount<=0){// Release shared core if use count now zero
if(chunk.recycle){chunk.recycle();}this._chunks[chunk.id]=null;var freeChunks=SceneJS_ChunkFactory._freeChunks[chunk.type];freeChunks.chunks[freeChunks.chunksLen++]=chunk;}};/**
 * Re-cache shader variable locations for each active chunk and reset VAOs if any
 */SceneJS_ChunkFactory.prototype.webglRestored=function(){var chunk;for(var chunkId in this._chunks){if(this._chunks.hasOwnProperty(chunkId)){chunk=this._chunks[chunkId];// Re-cache chunk's shader variable locations
if(chunk.build){chunk.build();}}}};SceneJS_ChunkFactory.createChunkType({type:"camera",build:function build(){this._uPMatrixDraw=this.program.draw.getUniformLocation("SCENEJS_uPMatrix");this._uZNearDraw=this.program.draw.getUniformLocation("SCENEJS_uZNear");this._uZFarDraw=this.program.draw.getUniformLocation("SCENEJS_uZFar");this._uPMatrixPick=this.program.pick.getUniformLocation("SCENEJS_uPMatrix");this._uZNearPick=this.program.pick.getUniformLocation("SCENEJS_uZNear");this._uZFarPick=this.program.pick.getUniformLocation("SCENEJS_uZFar");},draw:function draw(frameCtx){if(this.core.dirty){this.core.rebuild();}var gl=this.program.gl;if(this._uPMatrixDraw){gl.uniformMatrix4fv(this._uPMatrixDraw,gl.FALSE,this.core.mat);}if(this._uZNearDraw){gl.uniform1f(this._uZNearDraw,this.core.optics.near);}if(this._uZFarDraw){gl.uniform1f(this._uZFarDraw,this.core.optics.far);}frameCtx.cameraMat=this.core.mat;// Query only in draw pass
},pick:function pick(frameCtx){var gl=this.program.gl;if(this._uPMatrixPick){gl.uniformMatrix4fv(this._uPMatrixPick,gl.FALSE,this.core.mat);}if(frameCtx.rayPick){// Z-pick pass: feed near and far clip planes into shader
if(this._uZNearPick){gl.uniform1f(this._uZNearPick,this.core.optics.near);}if(this._uZFarPick){gl.uniform1f(this._uZFarPick,this.core.optics.far);}}frameCtx.cameraMat=this.core.mat;// Query only in draw pass
}});/**
 * Create display state chunk type for draw and pick render of user clipping planes
 */SceneJS_ChunkFactory.createChunkType({type:"clips",build:function build(){this._draw=this._draw||[];var draw=this.program.draw;for(var i=0,len=this.core.clips.length;i<len;i++){this._draw[i]={uClipMode:draw.getUniformLocation("SCENEJS_uClipMode"+i),uClipNormalAndDist:draw.getUniformLocation("SCENEJS_uClipNormalAndDist"+i)};}this._pick=this._pick||[];var pick=this.program.pick;for(var i=0,len=this.core.clips.length;i<len;i++){this._pick[i]={uClipMode:pick.getUniformLocation("SCENEJS_uClipMode"+i),uClipNormalAndDist:pick.getUniformLocation("SCENEJS_uClipNormalAndDist"+i)};}},drawAndPick:function drawAndPick(frameCtx){var vars=frameCtx.pick?this._pick:this._draw;var mode;var normalAndDist;var clips=this.core.clips;var clip;var gl=this.program.gl;for(var i=0,len=clips.length;i<len;i++){if(frameCtx.pick){mode=vars[i].uClipMode;normalAndDist=vars[i].uClipNormalAndDist;}else{mode=vars[i].uClipMode;normalAndDist=vars[i].uClipNormalAndDist;}if(mode&&normalAndDist){clip=clips[i];if(clip.mode=="inside"){gl.uniform1f(mode,2);gl.uniform4fv(normalAndDist,clip.normalAndDist);}else if(clip.mode=="outside"){gl.uniform1f(mode,1);gl.uniform4fv(normalAndDist,clip.normalAndDist);}else{// disabled
gl.uniform1f(mode,0);}}}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"draw",/**
     * As we apply a list of state chunks in a {@link SceneJS_Display}, we track the ID of each chunk
     * in order to avoid redundantly re-applying the same chunk.
     *
     * We don't want that for draw chunks however, because they contain GL drawElements calls,
     * which we need to do for each object.
     */unique:true,build:function build(){this._depthModeDraw=this.program.draw.getUniformLocation("SCENEJS_uDepthMode");this._depthModePick=this.program.pick.getUniformLocation("SCENEJS_uDepthMode");},drawAndPick:function drawAndPick(frameCtx){var gl=this.program.gl;gl.uniform1i(frameCtx.pick?this._depthModePick:this._depthModeDraw,frameCtx.depthMode);gl.drawElements(this.core.primitive,this.core.indexBuf.numItems,gl.UNSIGNED_SHORT,0);//frameCtx.textureUnit = 0;
}});/**
 *  Create display state chunk type for draw and pick render of flags
 */SceneJS_ChunkFactory.createChunkType({type:"flags",build:function build(){var draw=this.program.draw;this._uBackfaceTexturingDraw=draw.getUniformLocation("SCENEJS_uBackfaceTexturing");this._uBackfaceLightingDraw=draw.getUniformLocation("SCENEJS_uBackfaceLighting");this._uSpecularLightingDraw=draw.getUniformLocation("SCENEJS_uSpecularLighting");this._uClippingDraw=draw.getUniformLocation("SCENEJS_uClipping");this._uAmbientDraw=draw.getUniformLocation("SCENEJS_uAmbient");this._uDiffuseDraw=draw.getUniformLocation("SCENEJS_uDiffuse");this._uReflectionDraw=draw.getUniformLocation("SCENEJS_uReflection");var pick=this.program.pick;this._uClippingPick=pick.getUniformLocation("SCENEJS_uClipping");},drawAndPick:function drawAndPick(frameCtx){var gl=this.program.gl;var backfaces=this.core.backfaces;if(frameCtx.backfaces!=backfaces){if(backfaces){gl.disable(gl.CULL_FACE);}else{gl.enable(gl.CULL_FACE);}frameCtx.backfaces=backfaces;}var frontface=this.core.frontface;if(frameCtx.frontface!=frontface){if(frontface=="ccw"){gl.frontFace(gl.CCW);}else{gl.frontFace(gl.CW);}frameCtx.frontface=frontface;}var transparent=this.core.transparent;if(frameCtx.transparent!=transparent){if(transparent){// Entering a transparency bin
gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);frameCtx.blendEnabled=true;}else{// Leaving a transparency bin
gl.disable(gl.BLEND);frameCtx.blendEnabled=false;}frameCtx.transparent=transparent;}if(frameCtx.pick){gl.uniform1i(this._uClippingPick,this.core.clipping);}else{var drawUniforms=(this.core.backfaceTexturing?1:0)+(this.core.backfaceLighting?2:0)+(this.core.specular?4:0)+(this.core.clipping?8:0)+(this.core.ambient?16:0)+(this.core.diffuse?32:0)+(this.core.reflection?64:0);if(this.program.drawUniformFlags!=drawUniforms){gl.uniform1i(this._uBackfaceTexturingDraw,this.core.backfaceTexturing);gl.uniform1i(this._uBackfaceLightingDraw,this.core.backfaceLighting);gl.uniform1i(this._uSpecularLightingDraw,this.core.specular);gl.uniform1i(this._uClippingDraw,this.core.clipping);gl.uniform1i(this._uAmbientDraw,this.core.ambient);gl.uniform1i(this._uDiffuseDraw,this.core.diffuse);gl.uniform1i(this._uReflectionDraw,this.core.reflection);this.program.drawUniformFlags=drawUniforms;}}}});/**
 *   Create display state chunk type for draw and pick render of renderTarget
 */SceneJS_ChunkFactory.createChunkType({type:"renderTarget",// Avoid reapplication of this chunk type after a program switch.
programGlobal:true,draw:function draw(frameCtx){var gl=this.program.gl;// Flush and unbind any render buffer already bound
if(frameCtx.renderBuf){gl.finish();frameCtx.renderBuf.unbind();frameCtx.renderBuf=null;}// Set depthMode false and bail if no render buffer for this chunk
var renderBuf=this.core.renderBuf;if(!renderBuf){frameCtx.depthMode=false;return;}// Bind this chunk's render buffer, set depthMode, enable blend if depthMode false, clear buffer
renderBuf.bind();frameCtx.depthMode=this.core.bufType==="depth";if(!frameCtx.depthMode){//  Enable blending for non-depth targets
if(frameCtx.blendEnabled){gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);}}var canvas=frameCtx.canvas.canvas;gl.viewport(0,0,canvas.width,canvas.height);gl.clearColor(frameCtx.ambientColor[0],frameCtx.ambientColor[1],frameCtx.ambientColor[2],1.0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT|gl.STENCIL_BUFFER_BIT);//  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
frameCtx.renderBuf=renderBuf;}});/**
 *  Create display state chunk type for draw and pick render of geometry
 */SceneJS_ChunkFactory.createChunkType({type:"geometry",build:function build(){var draw=this.program.draw;this._aVertexDraw=draw.getAttribute("SCENEJS_aVertex");this._aNormalDraw=draw.getAttribute("SCENEJS_aNormal");this._aUVDraw=draw.getAttribute("SCENEJS_aUVCoord");this._aUV2Draw=draw.getAttribute("SCENEJS_aUVCoord2");this._aColorDraw=draw.getAttribute("SCENEJS_aVertexColor");this._aMorphVertexDraw=draw.getAttribute("SCENEJS_aMorphVertex");this._aMorphNormalDraw=draw.getAttribute("SCENEJS_aMorphNormal");this._uMorphFactorDraw=draw.getUniformLocation("SCENEJS_uMorphFactor");var pick=this.program.pick;this._aVertexPick=pick.getAttribute("SCENEJS_aVertex");this._aNormalPick=pick.getAttribute("SCENEJS_aNormal");this._aUVPick=pick.getAttribute("SCENEJS_aUVCoord");this._aUV2Pick=pick.getAttribute("SCENEJS_aUVCoord2");this._aMorphVertexPick=pick.getAttribute("SCENEJS_aMorphVertex");this._aMorphNormalPick=pick.getAttribute("SCENEJS_aMorphNormal");this._uMorphFactorPick=pick.getUniformLocation("SCENEJS_uMorphFactor");this.VAO=null;this.VAOMorphKey1=0;this.VAOMorphKey2=0;this.VAOHasInterleavedBuf=false;},recycle:function recycle(){if(this.VAO){// Guarantee that the old VAO is deleted immediately when recycling the object.
var VAOExt=this.program.gl.getExtension("OES_vertex_array_object");VAOExt.deleteVertexArrayOES(this.VAO);this.VAO=null;}},morphDraw:function morphDraw(){this.VAOMorphKey1=this.core.key1;this.VAOMorphKey2=this.core.key2;var target1=this.core.targets[this.core.key1];// Keys will update
var target2=this.core.targets[this.core.key2];if(this._aMorphVertexDraw){this._aVertexDraw.bindFloatArrayBuffer(target1.vertexBuf);this._aMorphVertexDraw.bindFloatArrayBuffer(target2.vertexBuf);}else if(this._aVertexDraw){this._aVertexDraw.bindFloatArrayBuffer(this.core2.vertexBuf);}if(this._aMorphNormalDraw){this._aNormalDraw.bindFloatArrayBuffer(target1.normalBuf);this._aMorphNormalDraw.bindFloatArrayBuffer(target2.normalBuf);}else if(this._aNormalDraw){this._aNormalDraw.bindFloatArrayBuffer(this.core2.normalBuf);}if(this._aUVDraw){this._aUVDraw.bindFloatArrayBuffer(this.core2.uvBuf);}if(this._aUV2Draw){this._aUV2Draw.bindFloatArrayBuffer(this.core2.uvBuf2);}if(this._aColorDraw){this._aColorDraw.bindFloatArrayBuffer(this.core2.colorBuf);}this.setDrawMorphFactor();},setDrawMorphFactor:function setDrawMorphFactor(){if(this._uMorphFactorDraw){this.program.gl.uniform1f(this._uMorphFactorDraw,this.core.factor);// Bind LERP factor
}},draw:function draw(frameCtx){var doMorph=this.core.targets&&this.core.targets.length;var cleanInterleavedBuf=this.core2.interleavedBuf&&!this.core2.interleavedBuf.dirty;if(this.VAO){frameCtx.VAO.bindVertexArrayOES(this.VAO);if(doMorph){if(this.VAOMorphKey1==this.core.key1&&this.VAOMorphKey2==this.core.key2){this.setDrawMorphFactor();return;}}else if(cleanInterleavedBuf||!this.VAOHasInterleavedBuf){return;}}else if(frameCtx.VAO){// Start creating a new VAO by switching to the default VAO, which doesn't have attribs enabled.
frameCtx.VAO.bindVertexArrayOES(null);this.VAO=frameCtx.VAO.createVertexArrayOES();frameCtx.VAO.bindVertexArrayOES(this.VAO);var gl=this.program.gl;}if(doMorph){this.morphDraw();}else{if(cleanInterleavedBuf){this.VAOHasInterleavedBuf=true;this.core2.interleavedBuf.bind();if(this._aVertexDraw){this._aVertexDraw.bindInterleavedFloatArrayBuffer(3,this.core2.interleavedStride,this.core2.interleavedPositionOffset);}if(this._aNormalDraw){this._aNormalDraw.bindInterleavedFloatArrayBuffer(3,this.core2.interleavedStride,this.core2.interleavedNormalOffset);}if(this._aUVDraw){this._aUVDraw.bindInterleavedFloatArrayBuffer(2,this.core2.interleavedStride,this.core2.interleavedUVOffset);}if(this._aUV2Draw){this._aUV2Draw.bindInterleavedFloatArrayBuffer(2,this.core2.interleavedStride,this.core2.interleavedUV2Offset);}if(this._aColorDraw){this._aColorDraw.bindInterleavedFloatArrayBuffer(4,this.core2.interleavedStride,this.core2.interleavedColorOffset);}}else{this.VAOHasInterleavedBuf=false;if(this._aVertexDraw){this._aVertexDraw.bindFloatArrayBuffer(this.core2.vertexBuf);}if(this._aNormalDraw){this._aNormalDraw.bindFloatArrayBuffer(this.core2.normalBuf);}if(this._aUVDraw){this._aUVDraw.bindFloatArrayBuffer(this.core2.uvBuf);}if(this._aUV2Draw){this._aUV2Draw.bindFloatArrayBuffer(this.core2.uvBuf2);}if(this._aColorDraw){this._aColorDraw.bindFloatArrayBuffer(this.core2.colorBuf);}}}this.core2.indexBuf.bind();},morphPick:function morphPick(){var target1=this.core.targets[this.core.key1];// Keys will update
var target2=this.core.targets[this.core.key2];if(this._aMorphVertexPick){this._aVertexPick.bindFloatArrayBuffer(target1.vertexBuf);this._aMorphVertexPick.bindFloatArrayBuffer(target2.vertexBuf);}else if(this._aVertexPick){this._aVertexPick.bindFloatArrayBuffer(this.core2.vertexBuf);}if(this._aMorphNormalPick){this._aNormalPick.bindFloatArrayBuffer(target1.normalBuf);this._aMorphNormalPick.bindFloatArrayBuffer(target2.normalBuf);}else if(this._aNormalPick){this._aNormalPick.bindFloatArrayBuffer(this.core2.normalBuf);}if(this._aUVPick){this._aUVPick.bindFloatArrayBuffer(this.core2.uvBuf);}if(this._aUV2Pick){this._aUV2Pick.bindFloatArrayBuffer(this.core2.uvBuf2);}if(this._uMorphFactorPick){this.program.gl.uniform1f(this._uMorphFactorPick,this.core.factor);// Bind LERP factor
}},pick:function pick(frameCtx){if(this.core.targets&&this.core.targets.length){this.morphPick();}else{if(this._aVertexPick){this._aVertexPick.bindFloatArrayBuffer(this.core2.vertexBuf);}if(this._aNormalPick){this._aNormalPick.bindFloatArrayBuffer(this.core2.normalBuf);}if(this._aUVPick){this._aUVPick.bindFloatArrayBuffer(this.core2.uvBuf);}if(this._aUV2Pick){this._aUV2Pick.bindFloatArrayBuffer(this.core2.uvBuf2);}}this.core2.indexBuf.bind();}});/**
 *  Create display state chunk type for draw render of lights projection
 */SceneJS_ChunkFactory.createChunkType({type:"lights",build:function build(){this._uAmbientColor=this._uAmbientColor||[];this._uLightColor=this._uLightColor||[];this._uLightDir=this._uLightDir||[];this._uLightPos=this._uLightPos||[];this._uLightCutOff=this._uLightCutOff||[];this._uLightSpotExp=this._uLightSpotExp||[];this._uLightAttenuation=this._uLightAttenuation||[];var lights=this.core.lights;var program=this.program;for(var i=0,len=lights.length;i<len;i++){switch(lights[i].mode){case"ambient":this._uAmbientColor[i]=program.draw.getUniformLocation("SCENEJS_uAmbientColor");break;case"dir":this._uLightColor[i]=program.draw.getUniformLocation("SCENEJS_uLightColor"+i);this._uLightPos[i]=null;this._uLightDir[i]=program.draw.getUniformLocation("SCENEJS_uLightDir"+i);break;case"point":this._uLightColor[i]=program.draw.getUniformLocation("SCENEJS_uLightColor"+i);this._uLightPos[i]=program.draw.getUniformLocation("SCENEJS_uLightPos"+i);this._uLightDir[i]=null;this._uLightAttenuation[i]=program.draw.getUniformLocation("SCENEJS_uLightAttenuation"+i);break;}}},draw:function draw(frameCtx){if(frameCtx.dirty){this.build();}var lights=this.core.lights;var light;var gl=this.program.gl;for(var i=0,len=lights.length;i<len;i++){light=lights[i];if(this._uAmbientColor[i]){gl.uniform3fv(this._uAmbientColor[i],light.color);}else{if(this._uLightColor[i]){gl.uniform3fv(this._uLightColor[i],light.color);}if(this._uLightPos[i]){gl.uniform3fv(this._uLightPos[i],light.pos);if(this._uLightAttenuation[i]){gl.uniform3fv(this._uLightAttenuation[i],light.attenuation);}}if(this._uLightDir[i]){gl.uniform3fv(this._uLightDir[i],light.dir);}}}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"listeners",// Avoid reapplication of a chunk after a program switch.
programGlobal:true,build:function build(){},draw:function draw(frameCtx){var listeners=this.core.listeners;var renderListenerCtx=frameCtx.renderListenerCtx;for(var i=listeners.length-1;i>=0;i--){// Child listeners first
if(listeners[i](renderListenerCtx)===true){// Call listener with query facade object as scope
return true;}}}});/**
 * Create display state chunk type for draw and pick render of lookAt transform
 */SceneJS_ChunkFactory.createChunkType({type:"lookAt",build:function build(){this._uvMatrixDraw=this.program.draw.getUniformLocation("SCENEJS_uVMatrix");this._uVNMatrixDraw=this.program.draw.getUniformLocation("SCENEJS_uVNMatrix");this._uWorldEyeDraw=this.program.draw.getUniformLocation("SCENEJS_uWorldEye");this._uvMatrixPick=this.program.pick.getUniformLocation("SCENEJS_uVMatrix");},draw:function draw(frameCtx){if(this.core.dirty){this.core.rebuild();}var gl=this.program.gl;if(this._uvMatrixDraw){gl.uniformMatrix4fv(this._uvMatrixDraw,gl.FALSE,this.core.mat);}if(this._uVNMatrixDraw){gl.uniformMatrix4fv(this._uVNMatrixDraw,gl.FALSE,this.core.normalMat);}if(this._uWorldEyeDraw){gl.uniform3fv(this._uWorldEyeDraw,this.core.lookAt.eye);}frameCtx.viewMat=this.core.mat;},pick:function pick(frameCtx){var gl=this.program.gl;if(this._uvMatrixPick){gl.uniformMatrix4fv(this._uvMatrixPick,gl.FALSE,this.core.mat);}frameCtx.viewMat=this.core.mat;}});/**
 * Create display state chunk type for draw render of material transform
 */SceneJS_ChunkFactory.createChunkType({type:"material",build:function build(){var draw=this.program.draw;this._uMaterialBaseColor=draw.getUniformLocation("SCENEJS_uMaterialColor");this._uMaterialSpecularColor=draw.getUniformLocation("SCENEJS_uMaterialSpecularColor");this._uMaterialSpecular=draw.getUniformLocation("SCENEJS_uMaterialSpecular");this._uMaterialShine=draw.getUniformLocation("SCENEJS_uMaterialShine");this._uMaterialEmit=draw.getUniformLocation("SCENEJS_uMaterialEmit");this._uMaterialAlpha=draw.getUniformLocation("SCENEJS_uMaterialAlpha");},draw:function draw(){var gl=this.program.gl;var materialSettings=this.program.draw.materialSettings;if(this._uMaterialBaseColor){gl.uniform3fv(this._uMaterialBaseColor,this.core.baseColor);}if(this._uMaterialSpecularColor&&(materialSettings.specularColor[0]!=this.core.specularColor[0]||materialSettings.specularColor[1]!=this.core.specularColor[1]||materialSettings.specularColor[2]!=this.core.specularColor[2])){gl.uniform3fv(this._uMaterialSpecularColor,this.core.specularColor);materialSettings.specularColor[0]=this.core.specularColor[0];materialSettings.specularColor[1]=this.core.specularColor[1];materialSettings.specularColor[2]=this.core.specularColor[2];}if(this._uMaterialSpecular&&materialSettings.specular!=this.core.specular){gl.uniform1f(this._uMaterialSpecular,this.core.specular);materialSettings.specular=this.core.specular;}if(this._uMaterialShine&&materialSettings.shine!=this.core.shine){gl.uniform1f(this._uMaterialShine,this.core.shine);materialSettings.shine=this.core.shine;}if(this._uMaterialEmit&&materialSettings.emit!=this.core.emit){gl.uniform1f(this._uMaterialEmit,this.core.emit);materialSettings.emit=this.core.emit;}if(this._uMaterialAlpha&&materialSettings.alpha!=this.core.alpha){gl.uniform1f(this._uMaterialAlpha,this.core.alpha);materialSettings.alpha=this.core.alpha;}}});/**
 * Create display state chunk type for draw render of material transform
 */SceneJS_ChunkFactory.createChunkType({type:"name",build:function build(){this._uPickColor=this.program.pick.getUniformLocation("SCENEJS_uPickColor");},pick:function pick(frameCtx){if(this._uPickColor&&this.core.name){frameCtx.pickNames[frameCtx.pickIndex++]=this.core;var b=frameCtx.pickIndex>>16&0xFF;var g=frameCtx.pickIndex>>8&0xFF;var r=frameCtx.pickIndex&0xFF;this.program.gl.uniform3fv(this._uPickColor,[r/255,g/255,b/255]);}}});SceneJS_ChunkFactory.createChunkType({type:"program",build:function build(){// Note that "program" chunks are always after "renderTarget" chunks
this._depthModeDraw=this.program.draw.getUniformLocation("SCENEJS_uDepthMode");this._depthModePick=this.program.pick.getUniformLocation("SCENEJS_uDepthMode");this._rayPickMode=this.program.pick.getUniformLocation("SCENEJS_uRayPickMode");},draw:function draw(frameCtx){var drawProgram=this.program.draw;drawProgram.bind();frameCtx.textureUnit=0;var gl=this.program.gl;gl.uniform1i(this._depthModeDraw,frameCtx.depthMode);if(!frameCtx.VAO){for(var i=0;i<10;i++){gl.disableVertexAttribArray(i);}}frameCtx.drawProgram=this.program.draw;},pick:function pick(frameCtx){var pickProgram=this.program.pick;pickProgram.bind();var gl=this.program.gl;gl.uniform1i(this._rayPickMode,frameCtx.rayPick);gl.uniform1i(this._depthModePick,frameCtx.depthMode);frameCtx.textureUnit=0;for(var i=0;i<10;i++){gl.disableVertexAttribArray(i);}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"renderer",build:function build(){},drawAndPick:function drawAndPick(frameCtx){if(this.core.props){var gl=this.program.gl;if(frameCtx.renderer){frameCtx.renderer.props.restoreProps(gl);frameCtx.renderer=this.core;}this.core.props.setProps(gl);}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"depthBuffer",// Avoid reapplication of a chunk after a program switch.
programGlobal:true,drawAndPick:function drawAndPick(frameCtx){var enabled=this.core.enabled;if(frameCtx.depthbufEnabled!=enabled){var gl=this.program.gl;if(enabled){gl.enable(gl.DEPTH_TEST);}else{gl.disable(gl.DEPTH_TEST);}frameCtx.depthbufEnabled=enabled;}var clearDepth=this.core.clearDepth;if(frameCtx.clearDepth!=clearDepth){gl.clearDepth(clearDepth);frameCtx.clearDepth=clearDepth;}var depthFunc=this.core.depthFunc;if(frameCtx.depthFunc!=depthFunc){gl.depthFunc(depthFunc);frameCtx.depthFunc=depthFunc;}if(this.core.clear){gl.clear(gl.DEPTH_BUFFER_BIT);}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"colorBuffer",// Avoid reapplication of a chunk after a program switch.
programGlobal:true,build:function build(){},drawAndPick:function drawAndPick(frameCtx){if(!frameCtx.transparent){// Blending forced when rendering transparent bin
var blendEnabled=this.core.blendEnabled;var gl=this.program.gl;if(frameCtx.blendEnabled!=blendEnabled){if(blendEnabled){gl.enable(gl.BLEND);}else{gl.disable(gl.BLEND);}frameCtx.blendEnabled=blendEnabled;}var colorMask=this.core.colorMask;gl.colorMask(colorMask.r,colorMask.g,colorMask.b,colorMask.a);}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"view",// Avoid reapplication of a chunk after a program switch.
programGlobal:true,build:function build(){},drawAndPick:function drawAndPick(frameCtx){var scissorTestEnabled=this.core.scissorTestEnabled;if(frameCtx.scissorTestEnabled!=scissorTestEnabled){var gl=this.program.gl;if(scissorTestEnabled){gl.enable(gl.SCISSOR_TEST);}else{gl.disable(gl.SCISSOR_TEST);}frameCtx.scissorTestEnabled=scissorTestEnabled;}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"shader",build:function build(){},drawAndPick:function drawAndPick(frameCtx){var paramsStack=this.core.paramsStack;if(paramsStack){var program=frameCtx.pick?this.program.pick:this.program.draw;var params;var name;for(var i=0,len=paramsStack.length;i<len;i++){params=paramsStack[i];for(name in params){if(params.hasOwnProperty(name)){program.setUniform(name,params[name]);// TODO: cache locations
}}}}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"shaderParams",build:function build(){},drawAndPick:function drawAndPick(frameCtx){var paramsStack=this.core.paramsStack;if(paramsStack){var program=frameCtx.pick?this.program.pick:this.program.draw;var params;var name;for(var i=0,len=paramsStack.length;i<len;i++){params=paramsStack[i];for(name in params){if(params.hasOwnProperty(name)){program.setUniform(name,params[name]);// TODO: cache locations
}}}}}});/**
 *
 */SceneJS_ChunkFactory.createChunkType({type:"style",// Avoid reapplication of a chunk after a program switch.
programGlobal:true,drawAndPick:function drawAndPick(frameCtx){var lineWidth=this.core.lineWidth;if(frameCtx.lineWidth!=lineWidth){var gl=this.program.gl;gl.lineWidth(lineWidth);frameCtx.lineWidth=lineWidth;}}});SceneJS_ChunkFactory.createChunkType({type:"texture",build:function build(){this._uTexSampler=this._uTexSampler||[];this._uTexMatrix=this._uTexMatrix||[];this._uTexBlendFactor=this._uTexBlendFactor||[];var layers=this.core.layers;if(layers){var layer;var draw=this.program.draw;for(var i=0,len=layers.length;i<len;i++){layer=layers[i];this._uTexSampler[i]="SCENEJS_uSampler"+i;//                this._uTexMatrix[i] = layer.matrixAsArray
//                        ? draw.getUniform("SCENEJS_uLayer" + i + "Matrix")
//                        : null;
this._uTexMatrix[i]=draw.getUniform("SCENEJS_uLayer"+i+"Matrix");this._uTexBlendFactor[i]=draw.getUniform("SCENEJS_uLayer"+i+"BlendFactor");}}},draw:function draw(frameCtx){frameCtx.textureUnit=0;var layers=this.core.layers;if(layers){var draw=this.program.draw;var layer;for(var i=0,len=layers.length;i<len;i++){layer=layers[i];if(this._uTexSampler[i]&&layer.texture){// Lazy-loads
draw.bindTexture(this._uTexSampler[i],layer.texture,frameCtx.textureUnit++);if(layer._matrixDirty&&layer.buildMatrix){layer.buildMatrix.call(layer);}if(this._uTexMatrix[i]){this._uTexMatrix[i].setValue(layer.matrixAsArray);}if(this._uTexBlendFactor[i]){this._uTexBlendFactor[i].setValue(layer.blendFactor);}}else{// draw.bindTexture(this._uTexSampler[i], null, i); // Unbind
}}}if(frameCtx.textureUnit>10){// TODO: Find how many textures allowed
frameCtx.textureUnit=0;}}});SceneJS_ChunkFactory.createChunkType({type:"cubemap",build:function build(){this._uCubeMapSampler=this._uCubeMapSampler||[];this._uCubeMapIntensity=this._uCubeMapIntensity||[];var layers=this.core.layers;if(layers){var layer;var draw=this.program.draw;for(var i=0,len=layers.length;i<len;i++){layer=layers[i];this._uCubeMapSampler[i]="SCENEJS_uCubeMapSampler"+i;this._uCubeMapIntensity[i]=draw.getUniform("SCENEJS_uCubeMapIntensity"+i);}}},draw:function draw(frameCtx){var layers=this.core.layers;if(layers){var layer;var draw=this.program.draw;for(var i=0,len=layers.length;i<len;i++){layer=layers[i];if(this._uCubeMapSampler[i]&&layer.texture){draw.bindTexture(this._uCubeMapSampler[i],layer.texture,frameCtx.textureUnit++);if(this._uCubeMapIntensity[i]){this._uCubeMapIntensity[i].setValue(layer.intensity);}}}}if(frameCtx.textureUnit>10){// TODO: Find how many textures allowed
frameCtx.textureUnit=0;}}});SceneJS_ChunkFactory.createChunkType({type:"xform",build:function build(){var draw=this.program.draw;this._uMatLocationDraw=draw.getUniformLocation("SCENEJS_uMMatrix");this._uNormalMatLocationDraw=draw.getUniformLocation("SCENEJS_uMNMatrix");var pick=this.program.pick;this._uMatLocationPick=pick.getUniformLocation("SCENEJS_uMMatrix");this._uNormalMatLocationPick=pick.getUniformLocation("SCENEJS_uMNMatrix");},draw:function draw(frameCtx){/* Rebuild core's matrix from matrices at cores on path up to root
         */if(SceneJS_configsModule.configs.forceXFormCoreRebuild===true||this.core.dirty&&this.core.build){this.core.build();}var gl=this.program.gl;if(this._uMatLocationDraw){gl.uniformMatrix4fv(this._uMatLocationDraw,gl.FALSE,this.core.mat);}if(this._uNormalMatLocationDraw){gl.uniformMatrix4fv(this._uNormalMatLocationDraw,gl.FALSE,this.core.normalMat);}frameCtx.modelMat=this.core.mat;},pick:function pick(frameCtx){/* Rebuild core's matrix from matrices at cores on path up to root
         */if(this.core.dirty){this.core.build();}var gl=this.program.gl;if(this._uMatLocationPick){gl.uniformMatrix4fv(this._uMatLocationPick,gl.FALSE,this.core.mat);}if(this._uNormalMatLocationPick){gl.uniformMatrix4fv(this._uNormalMatLocationPick,gl.FALSE,this.core.normalMat);}frameCtx.modelMat=this.core.mat;}});SceneJS.configure({pluginPath:"http://xeolabs.github.com/scenejs/api/latest/plugins"});function ReadUTF8(asyncStream,callback){this.state=0;this.length=-1;this.process=function(){if(this.state==0){if(asyncStream.available()>=2){length=asyncStream.dataView.getInt16(asyncStream.pos);asyncStream.pos+=2;this.state=1;}}if(this.state==1){if(asyncStream.available()>=length){var view=asyncStream.arrayBuffer.slice(asyncStream.pos,asyncStream.pos+length);var result=new StringView(view).toString();asyncStream.pos+=length;asyncStream.pop();if(callback(result)==false){console.log("error");}return true;}}};}function ReadByte(asyncStream,callback){this.process=function(){if(asyncStream.available()>0){var value=asyncStream.dataView.getInt8(asyncStream.pos);asyncStream.pos+=1;asyncStream.pop();if(callback(value)==false){console.log("error");}return true;}};}function ReadFloatArray(asyncStream,length,callback){this.process=function(){asyncStream.align4();if(asyncStream.available()>=4*length){var result=new Float32Array(asyncStream.arrayBuffer,asyncStream.pos,length);asyncStream.pos+=length*4;asyncStream.pop();if(callback(result)==false){console.log("error");}return true;}};}function ReadIntArray(asyncStream,length,callback){this.process=function(){asyncStream.align4();if(asyncStream.available()>=4*length){var result=new Int32Array(asyncStream.arrayBuffer,asyncStream.pos,length);asyncStream.pos+=length*4;asyncStream.pop();if(callback(result)==false){console.log("error");}return true;}};}function ReadInt(asyncStream,callback){this.process=function(){if(asyncStream.available()>=4){var value=asyncStream.dataView.getInt32(asyncStream.pos);asyncStream.pos+=4;asyncStream.pop();if(callback(value)==false){console.log("error");}return true;}};}function ReadFloats(asyncStream,length,callback){this.process=function(){if(asyncStream.available()>=4*length){var results=[];for(var i=0;i<length;i++){var value=asyncStream.dataView.getFloat32(asyncStream.pos);asyncStream.pos+=4;results.push(value);}asyncStream.pop();if(callback(results)==false){console.log("error");}return true;}};}function ReadLong(asyncStream,callback){this.process=function(){if(asyncStream.available()>=4){// We are throwing away the first 4 bytes here...
var value=asyncStream.dataView.getInt32(asyncStream.pos+4);asyncStream.pos+=8;asyncStream.pop();if(callback(value)==false){console.log("error");}return true;}};}function AsyncStream(){var othis=this;window.lastStream=othis;othis.arrayBuffer=null;othis.dataView=null;othis.pos=4;othis.todolist=[];othis.data=[];othis.totalReceived=0;othis.lastTotalReceived=-1;othis.stoppedOnMax=false;othis.pop=function(){othis.todolist.splice(0,1);};othis.available=function(){return othis.arrayBuffer.byteLength-othis.pos;};othis.addReadUTF8=function(callback){othis.todolist.push(new ReadUTF8(othis,callback));};othis.addReadByte=function(callback){othis.todolist.push(new ReadByte(othis,callback));};othis.addReadFloatArray=function(length,callback){if(length==0){callback();}else{othis.todolist.push(new ReadFloatArray(othis,length,callback));}};othis.addReadIntArray=function(length,callback){if(length==0){callback();}else{othis.todolist.push(new ReadIntArray(othis,length,callback));}};othis.addReadFloats=function(length,callback){if(length==0){callback();}else{othis.todolist.push(new ReadFloats(othis,length,callback));}};othis.addReadInt=function(callback){othis.todolist.push(new ReadInt(othis,callback));};othis.addReadLong=function(callback){othis.todolist.push(new ReadLong(othis,callback));};othis.align4=function(){// Skips to the next alignment of 4 (source should have done the same!)
var skip=4-othis.pos%4;if(skip>0&&skip!=4){othis.pos+=skip;}};othis.process=function(max){var c=0;if(othis.totalReceived==othis.lastTotalReceived&&!othis.stoppedOnMax){return;}othis.lastTotalReceived=othis.totalReceived;othis.stoppedOnMax=false;while(othis.todolist.length>0&&othis.data.length>0){var todoitem=othis.todolist[0];var data=othis.data[0];othis.arrayBuffer=data;othis.dataView=new DataView(othis.arrayBuffer);var processDone=todoitem.process();if(data.byteLength==othis.pos){othis.data.splice(0,1);othis.pos=4;}if(!processDone){break;}c++;if(c>max){othis.stoppedOnMax=true;break;}}};othis.newData=function(data){othis.data.push(data);othis.totalReceived+=data.byteLength-4;};}var BIMSURFER={CLASS:"BIMSURFER",VERSION_NUMBER:"2.0 Dev"};/**
 * Constructor: BIMSURFER.Class
 * Base class used to construct all other classes. Includes support for multiple inheritance.
 */BIMSURFER.Class=function(baseClass,subClass){var constructor=null;var classObject=subClass||baseClass;if(typeof classObject.__construct=='function'){constructor=classObject.__construct;}else if(typeof baseClass.prototype.__construct=='function'){constructor=function constructor(){baseClass.prototype.__construct.apply(this,arguments);};}else{constructor=function constructor(){};}var Class=constructor;if(typeof subClass=='undefined'){Class.prototype=classObject;}else{var newClass=function newClass(){};newClass.prototype=jQuery.extend({},baseClass.prototype);jQuery.extend(newClass.prototype,subClass);Class.prototype=new newClass();}return Class;};if(_typeof(BIMSURFER.Constants)!='object'){BIMSURFER.Constants={};}/**
 * Time in milliseconds before a connect or login action will timeout
 */BIMSURFER.Constants.timeoutTime=10000;// ms
/**
 * The default IFC Types to load
 */BIMSURFER.Constants.defaultTypes=["IfcColumn","IfcStair","IfcSlab","IfcWindow",//	"IfcOpeningElement",
"IfcDoor","IfcBuildingElementProxy","IfcWallStandardCase","IfcWall","IfcBeam","IfcRailing","IfcProxy","IfcRoof"];//writeMaterial(jsonWriter, "IfcSpace", new double[] { 0.137255f, 0.403922f, 0.870588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcRoof", new double[] { 0.837255f, 0.203922f, 0.270588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcSlab", new double[] { 0.637255f, 0.603922f, 0.670588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcWall", new double[] { 0.537255f, 0.337255f, 0.237255f }, 1.0f);
//writeMaterial(jsonWriter, "IfcWallStandardCase", new double[] { 1.0f, 1.0f, 1.0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcDoor", new double[] { 0.637255f, 0.603922f, 0.670588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcWindow", new double[] { 0.2f, 0.2f, 0.8f }, 0.2f);
//writeMaterial(jsonWriter, "IfcRailing", new double[] { 0.137255f, 0.203922f, 0.270588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcColumn", new double[] { 0.437255f, 0.603922f, 0.370588f, }, 1.0f);
//writeMaterial(jsonWriter, "IfcBeam", new double[] { 0.437255f, 0.603922f, 0.370588f, }, 1.0f);
//writeMaterial(jsonWriter, "IfcFurnishingElement", new double[] { 0.437255f, 0.603922f, 0.370588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcCurtainWall", new double[] { 0.5f, 0.5f, 0.5f }, 0.5f);
//writeMaterial(jsonWriter, "IfcStair", new double[] { 0.637255f, 0.603922f, 0.670588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcBuildingElementProxy", new double[] { 0.5f, 0.5f, 0.5f }, 1.0f);
//writeMaterial(jsonWriter, "IfcFlowSegment", new double[] { 0.8470588235f, 0.427450980392f, 0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcFlowFitting", new double[] { 0.8470588235f, 0.427450980392f, 0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcFlowTerminal", new double[] { 0.8470588235f, 0.427450980392f, 0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcProxy", new double[] { 0.637255f, 0.603922f, 0.670588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcSite", new double[] { 0.637255f, 0.603922f, 0.670588f }, 1.0f);
//writeMaterial(jsonWriter, "IfcLightFixture", new double[] {0.8470588235f, 0.8470588235f, 0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcDuctSegment", new double[] {0.8470588235f, 0.427450980392f, 0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcDuctFitting", new double[] {0.8470588235f, 0.427450980392f, 0f }, 1.0f);
//writeMaterial(jsonWriter, "IfcAirTerminal", new double[] {0.8470588235f, 0.427450980392f, 0f }, 1.0f);
BIMSURFER.Constants.materials=(_BIMSURFER$Constants$={IfcSpace:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcRoof:{r:0.837255,g:0.203922,b:0.270588,a:1.0},IfcSlab:{r:0.637255,g:0.603922,b:0.670588,a:1.0},IfcWall:{r:0.537255,g:0.337255,b:0.237255,a:1.0},IfcWallStandardCase:{r:0.537255,g:0.337255,b:0.237255,a:1.0},IfcDoor:{r:0.637255,g:0.603922,b:0.670588,a:1.0},IfcWindow:{r:0.137255,g:0.403922,b:0.870588,a:0.5},IfcOpeningElement:{r:0.137255,g:0.403922,b:0.870588,a:0},IfcRailing:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcColumn:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcBeam:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcBeamStandardCase:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcFurnishingElement:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcCurtainWall:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcStair:{r:0.637255,g:0.603922,b:0.670588,a:1.0},IfcStairFlight:{r:0.637255,g:0.603922,b:0.670588,a:1.0},IfcBuildingElementProxy:{r:0.5,g:0.5,b:0.5,a:1.0},IfcFlowSegment:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcFlowitting:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcFlowTerminal:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcProxy:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcSite:{r:0.137255,g:0.403922,b:0.870588,a:1.0},IfcLightFixture:{r:0.8470588235,g:0.8470588235,b:0.870588,a:1.0},IfcDuctSegment:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcDistributionFlowElement:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcDuctFitting:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcPlate:{r:0.8470588235,g:0.427450980392,b:0,a:0.5},IfcPile:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcAirTerminal:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcMember:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcCovering:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcTransportElement:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcFlowController:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcFlowFitting:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcRamp:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcFurniture:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcFooting:{r:0.8470588235,g:0.427450980392,b:0,a:1.0},IfcSystemFurnitureElement:{r:0.8470588235,g:0.427450980392,b:0,a:1.0}},_defineProperty(_BIMSURFER$Constants$,"IfcSpace",{r:0.137255,g:0.303922,b:0.570588,a:0.5}),_defineProperty(_BIMSURFER$Constants$,"IfcBuildingElementPart",{r:1,g:0.5,b:0.5,a:1.0}),_defineProperty(_BIMSURFER$Constants$,"IfcDistributionElement",{r:1,g:0.5,b:0.5,a:1.0}),_defineProperty(_BIMSURFER$Constants$,"DEFAULT",{r:0.8470588235,g:0.427450980392,b:0,a:1.0}),_BIMSURFER$Constants$);/*
 * Default camera settings
 */BIMSURFER.Constants.camera={maxOrbitSpeed:Math.PI*0.1,orbitSpeedFactor:0.05,zoomSpeedFactor:0.1,panSpeedFactor:0.6};/*
 * Default markup for highlighted objects
 */BIMSURFER.Constants.highlightSelectedObject={type:'material',wire:true,id:'highlight',emit:0.0,baseColor:{r:0.0,g:1,b:0}/*
 * Default markup for highlighted special objects
 */};BIMSURFER.Constants.highlightSelectedSpecialObject={type:'material',id:'specialselectedhighlight',emit:1,baseColor:{r:0.16,g:0.70,b:0.88},shine:10.0};/*
 * Enumeration for progressbar types
 */BIMSURFER.Constants.ProgressBarStyle={Continuous:1,Marquee:2/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} s The number to clamp
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */};BIMSURFER.Constants.clamp=function(s,min,max){return Math.min(Math.max(s,min),max);};"use strict";/**
 * Class: BIMSURFER.Control
 * Controls affect the behavior of the viewer.
 * They allow everything from zooming, panning and navigating to selecting en showing an object tree.
 * Controls can be added to a Viewer. Some controls need a div to be binded to.
 *
 * Example:
 * The following example shows how to add controls to a viewer
 *
 * > var viewer = new BIM.Viewer('viewport');
 * > var panOrbit = new BIMSURFER.Control.PickFlyOrbit();
 * > viewer.addControl(panOrbit);
 * > panOrbit.activate();
 * >
 * > var clickSelect = new BIMSURFER.Control.ClickSelect();
 * > clickSelect.events.register('select', nodeSelected);
 * > clickSelect.events.register('unselect', nodeUnselected);
 * > viewer.addControl(clickSelect);
 * > clickSelect.activate();
 */BIMSURFER.Control=BIMSURFER.Class({CLASS:'BIMSURFER.Control',/**
	 * BIMSURFER.Viewer instance
	 */SYSTEM:null,/**
	 * The DIV element containing the control
	 */div:null,/**
	 * The DOM element of the control (drawn by the function redraw)
	 */DOMelement:null,/**
	 * Is the control active?
	 */active:false,/**
	 * BIMSURFER.Events instance. The events meganism of this control
	 */events:null,/**
	 * Default constructor for the controls
	 *
	 * @constructor
	 * @param {string|DOMelement} div ID or reference to a div
	 */__construct:function __construct(div){if(typeof div=='string'){this.div=jQuery(document).find('div#'+div)[0]||null;}else if(jQuery(div).is('div')){this.div=div;}this.events=new BIMSURFER.Events(this);},/**
	 * Default function to redraw the control
	 * @return this
	 */redraw:function redraw(){jQuery(this.div).empty();jQuery(this.DOMelement).remove();this.DOMelement=jQuery('<div />').addClass(this.CLASS.replace(/\./g,"-"));if(this.active){jQuery(this.div).append(this.DOMelement);}return this;},/**
	 * Default function to set the parent viewer
	 *
	 * @param {BIMSURFER.Viewer} viewer The viewer the control is working for
	 * @return this
	 */setViewer:function setViewer(viewer){if(this.active){this.deactivate();}this.SYSTEM=viewer;return this;},/**
	 * Default function to remove the control from the viewer
	 * Sets the this.SYSTEM to null
	 *
	 * @return this
	 */removeFromSurfer:function removeFromSurfer(){this.SYSTEM=null;return this;},/**
	 * Default function to initialize the control events
	 *
	 * @return this
	 */initEvents:function initEvents(){return this;},/**
	 * Default function to activate the control
	 *
	 * @return this
	 */activate:function activate(){if(this.div){this.active=true;this.redraw();this.initEvents();this.show();}this.events.trigger('activated');return this;},/**
	 * Default function to activate the control when the scene is loaded
	 *
	 * @return this
	 */activateWhenReady:function activateWhenReady(){if(this.SYSTEM.sceneLoaded){this.activate();}else{var _this=this;var sceneLoaded=function sceneLoaded(){_this.SYSTEM.events.unregister('sceneLoaded',sceneLoaded);_this.activate();};this.SYSTEM.events.register('sceneLoaded',sceneLoaded);}return this;},/**
	 * Default function to deactivate the control
	 *
	 * @return this
	 */deactivate:function deactivate(){this.active=false;this.initEvents();jQuery(this.DOMelement).remove();this.DOMelement=null;this.events.trigger('deactivated');return this;},/**
	 * Default function to show the control
	 *
	 * @param {String} [speed] The speed of the animation ('fast', 'normal' or 'slow'). Leave empty for no animation
	 * @return this
	 */show:function show(speed){switch(speed){case'fast':case'normal':case'slow':jQuery(this.DOMelement).stop().fadeIn(speed);break;default:jQuery(this.DOMelement).stop().show();}return this;},/**
	 * Default function to hide the control
	 *
	 * @param {String} [speed] The speed of the animation ('fast', 'normal' or 'slow'). Leave empty for no animation
	 * @return this
	 */hide:function hide(speed){switch(speed){case'fast':case'normal':case'slow':jQuery(this.DOMelement).stop().fadeOut(speed);break;default:jQuery(this.DOMelement).stop().hide();}return this;}});"use strict";/**
 * Class: BIMSURFER.DataInputStreamReader
 * Class to read binary data from the BIMServer
 */BIMSURFER.DataInputStreamReader=BIMSURFER.Class({CLASS:'BIMSurfer.DataInputStreamReader',SYSTEM:null,arrayBuffer:null,dataView:null,pos:null,__construct:function __construct(system,arrayBuffer){this.arrayBuffer=arrayBuffer;this.dataView=new DataView(this.arrayBuffer);this.pos=0;},readUTF8:function readUTF8(){var length=this.dataView.getInt16(this.pos);this.pos+=2;var view=this.arrayBuffer.slice(this.pos,this.pos+length);var result=new StringView(view).toString();this.pos+=length;return result;},align4:function align4(){// Skips to the next alignment of 4 (source should have done the same!)
var skip=4-this.pos%4;if(skip>0&&skip!=4){//			console.log("Skip", skip);
this.pos+=skip;}},align8:function align8(){// Skips to the next alignment of 4 (source should have done the same!)
var skip=8-this.pos%8;if(skip>0&&skip!=8){//			console.log("Skip", skip);
this.pos+=skip;}},readFloat:function readFloat(){var value=this.dataView.getFloat32(this.pos,true);this.pos+=4;return value;},readInt:function readInt(){var value=this.dataView.getInt32(this.pos,true);this.pos+=4;return value;},readByte:function readByte(){var value=this.dataView.getInt8(this.pos);this.pos+=1;return value;},readLong:function readLong(){var value=this.dataView.getUint32(this.pos,true)+0x100000000*this.dataView.getUint32(this.pos+4,true);this.pos+=8;return value;},readFloatArray2:function readFloatArray2(length){var results=[];for(var i=0;i<length;i++){var value=this.dataView.getFloat32(this.pos,true);this.pos+=4;results.push(value);}return results;},readFloatArray:function readFloatArray(length){try{var result=new Float32Array(this.arrayBuffer,this.pos,length);this.pos+=length*4;return result;}catch(e){console.error(e,this.arrayBuffer.byteLength,this.pos,length);}},readDoubleArray:function readDoubleArray(length){var result=new Float64Array(this.arrayBuffer,this.pos,length);this.pos+=length*8;return result;},readIntArray2:function readIntArray2(length){var results=[];for(var i=0;i<length;i++){var value=this.dataView.getInt32(this.pos,true);this.pos+=4;results.push(value);}return results;},readIntArray:function readIntArray(length){var result=new Int32Array(this.arrayBuffer,this.pos,length);this.pos+=length*4;return result;},readShortArray:function readShortArray(length){try{var result=new Int16Array(this.arrayBuffer,this.pos,length);this.pos+=length*2;return result;}catch(e){console.error(e,this.pos,length);}}});"use strict";/**
 * Class: BIMSURFER.Events
 * Event system that can be used for all BIMSURFER classes.
 * Enables the user to register, unregister and trigger events, based on object instances
 */BIMSURFER.Events=BIMSURFER.Class({CLASS:'BIMSURFER.Events',SYSTEM:null,listeners:{},object:null,__construct:function __construct(object){this.object=object;this.listeners={};},/**
	 * Register an event.
	 *
	 * @param {String} event The event name
	 * @param {Function} callback The callback function that will be fired when the event is triggered
	 * @param {Object} [object] The object that will be used as "this" in the callback function. Defaut = this.object
	 */register:function register(event,callback,object){if(typeof event!='string'||typeof callback!='function'){return;}if(!this.listeners[event]){this.listeners[event]=new Array();}this.listeners[event].push({object:!BIMSURFER.Util.isset(object)?this.object:object,callback:callback});},/**
	 * Unregister a registered event
	 *
	 * @param {String} event The event name
	 * @param {Function} callback The callback function that would be called when teh event was triggered
	 * @param {Object} [object] The object that would be used as "this" in the callback function. Default = this.object
	 */unregister:function unregister(event,callback,object){if(typeof event!='string'||typeof callback!='function'){return;}object=!BIMSURFER.Util.isset(object)?this.object:object;if(this.listeners[event]){for(var i=0;i<this.listeners[event].length;i++){if(this.listeners[event][i].object==object&&this.listeners[event][i].callback==callback){this.listeners[event].splice(i,1);break;}}}},/**
	 * Trigger an event
	 *
	 * @param {String} event The event name
	 * @param {Array} [eventArguments] The parameters that will be passed to the registered callback function(s)
	 * @param {Object} [object] The object that will be used as "this" in the callback function instead of the preset one.
	 * @return success
	 */trigger:function trigger(event,eventArguments,object){if(typeof event!='string'){return false;}eventArguments=eventArguments||new Array();if(!BIMSURFER.Util.isset(eventArguments)){eventArguments=new Array();}else if(!BIMSURFER.Util.isArray(eventArguments)){eventArguments=[eventArguments];}if(event.substring(0,5).toLowerCase()=='mouse'){eventArguments[0]=this.normalizeEvent(eventArguments[0]);}if(!this.listeners[event]||this.listeners[event].length==0){return true;}var listeners=this.listeners[event].slice(0);for(var i=0;i<listeners.length;i++){var continueEvent=null;if(BIMSURFER.Util.isset(object)){continueEvent=listeners[i].callback.apply(object,eventArguments);}else{continueEvent=listeners[i].callback.apply(listeners[i].object,eventArguments);}if(continueEvent===false){return false;}}return true;},/**
	 * Normalize mouse/touch events for browser compability
	 *
	 * @param {Event} event The event to be normalized
	 * @return event
	 */normalizeEvent:function normalizeEvent(event){//		if(!event.offsetX) {
//			event.offsetX = (event.pageX - jQuery(event.target).offset().left);
//			event.offsetY = (event.pageY - jQuery(event.target).offset().top);
//		}
return event;}});function GeometryLoader(bimServerApi,models,viewer,type){var o=this;o.models=models;o.bimServerApi=bimServerApi;o.viewer=viewer;o.state={};o.progressListeners=[];o.objectAddedListeners=[];o.prepareReceived=false;o.todo=[];o.type=type;if(o.type==null){o.type="triangles";}o.stats={nrPrimitives:0,nrVertices:0,nrNormals:0,nrColors:0};// GeometryInfo.oid -> GeometryData.oid
//	o.infoToData = {};
// GeometryData.oid -> [GeometryInfo.oid]
o.dataToInfo={};// Loaded geometry, GeometryData.oid -> Boolean
o.loadedGeometry={};// GeometryInfo.oid -> IfcProduct.oid
o.infoToOid={};this.addProgressListener=function(progressListener){o.progressListeners.push(progressListener);};this.readObject=function(data,geometryType){data.align8();if(geometryType==5){var roid=data.readLong();var geometryInfoOid=data.readLong();var hasTransparency=data.readLong()==1;var objectBounds=data.readDoubleArray(6);//			if (objectBounds[0] < o.modelBounds.min.x) {
//				o.modelBounds.min.x = objectBounds[0];
//			}
//			if (objectBounds[1] < o.modelBounds.min.y) {
//				o.modelBounds.min.y = objectBounds[1];
//			}
//			if (objectBounds[2] < o.modelBounds.min.z) {
//				o.modelBounds.min.z = objectBounds[2];
//			}
//			if (objectBounds[3] > o.modelBounds.max.x) {
//				o.modelBounds.max.x = objectBounds[3];
//			}
//			if (objectBounds[4] > o.modelBounds.max.y) {
//				o.modelBounds.max.y = objectBounds[4];
//			}
//			if (objectBounds[5] > o.modelBounds.max.z) {
//				o.modelBounds.max.z = objectBounds[5];
//			}
var transformationMatrix=data.readDoubleArray(16);var geometryDataOid=data.readLong();var coreIds=[geometryDataOid];//			o.infoToData[geometryInfoOid] = geometryDataOid;
if(o.state.mode==0){console.log("Mode is still 0, should be 1");return;}var oid=o.infoToOid[geometryInfoOid];if(oid==null){console.log("Not found",geometryInfoOid);}else{o.models[roid].get(oid,function(object){object.gid=geometryInfoOid;if(o.viewer.scene.findNode(geometryInfoOid)!=null){console.log("Node with id "+geometryInfoOid+" already existed");return;}var material=BIMSURFER.Constants.materials[object.getType()];var hasTransparency=false;if(material==null){console.log("material not found",object.getType());material=BIMSURFER.Constants.materials["DEFAULT"];}if(material.a<1){hasTransparency=true;}var enabled=object.trans.mode==0;var coreNodes=null;var loaded=o.loadedGeometry[geometryDataOid];if(loaded!=null){if(Array.isArray(loaded)){coreNodes=[];loaded.forEach(function(id){coreNodes.push({type:"geometry",coreId:id});});}else{coreNodes=[{type:"geometry",coreId:geometryDataOid}];}}else{if(o.dataToInfo[geometryDataOid]==null){o.dataToInfo[geometryDataOid]=[geometryInfoOid];}else{o.dataToInfo[geometryDataOid].push(geometryInfoOid);}}var flags={type:"flags",flags:{transparent:hasTransparency},nodes:[{type:"enable",enabled:enabled,nodes:[//								{
//								type : "material",
//								baseColor: material,
//								alpha: 1,
//								nodes : [{}]
//								nodes : [{
//									type: "translate",
//									x: objectBounds[0] + (objectBounds[3] - objectBounds[0]) / 2,
//									y: objectBounds[1] + (objectBounds[4] - objectBounds[1]) / 2,
//									z: objectBounds[2] + (objectBounds[5] - objectBounds[2]) / 2,
//									nodes : [{
//										type: "scale",
//										x: (objectBounds[3] - objectBounds[0]) / 2,
//										y: (objectBounds[4] - objectBounds[1]) / 2,
//										z: (objectBounds[5] - objectBounds[2]) / 2,
//										nodes: [{
//											type: "geometry/box",
//											wire: true
//										}]
//									}]
//								}]
//							}, {
{type:"material",baseColor:material,alpha:material.a,nodes:[{type:"name",id:geometryInfoOid,data:{object:object},nodes:[{type:"matrix",elements:transformationMatrix,nodes:coreNodes}]}]}]}]};o.modelNode.addNode(flags);o.objectAddedListeners.forEach(function(listener){listener(oid);});});}}else if(geometryType==3){var hasTransparency=data.readLong()==1;var coreIds=[];var geometryDataOid=data.readLong();var nrParts=data.readInt();//var objectBounds = data.readFloatArray(6);
for(var i=0;i<nrParts;i++){var partId=data.readLong();var coreId=geometryDataOid+"_"+i;coreIds.push(coreId);var nrIndices=data.readInt();o.stats.nrPrimitives+=nrIndices/3;var indices=data.readShortArray(nrIndices);if(o.state.version>=11){var b=data.readInt();if(b==1){var color={r:data.readFloat(),g:data.readFloat(),b:data.readFloat(),a:data.readFloat()};}}data.align4();var nrVertices=data.readInt();o.stats.nrVertices+=nrVertices;var vertices=data.readFloatArray(nrVertices);var nrNormals=data.readInt();o.stats.nrNormals+=nrNormals;var normals=data.readFloatArray(nrNormals);var nrColors=data.readInt();o.stats.nrColors+=nrColors;var colors=data.readFloatArray(nrColors);var geometry={type:"geometry",primitive:o.type};if(color!=null){// Creating vertex colors here anyways (not transmitted over the line is a plus), should find a way to do this with scenejs without vertex-colors
geometry.colors=new Array(nrVertices*4);for(var i=0;i<nrVertices;i++){geometry.colors[i*4+0]=color.r;geometry.colors[i*4+1]=color.g;geometry.colors[i*4+2]=color.b;geometry.colors[i*4+3]=color.a;}}geometry.coreId=coreId;if(o.type=="lines"){geometry.indices=o.convertToLines(indices);}else{geometry.indices=indices;}geometry.positions=vertices;geometry.normals=normals;if(colors!=null&&colors.length>0){geometry.colors=colors;}o.library.add("node",geometry);}o.loadedGeometry[geometryDataOid]=coreIds;if(o.dataToInfo[geometryDataOid]!=null){o.dataToInfo[geometryDataOid].forEach(function(geometryInfoId){var node=o.viewer.scene.findNode(geometryInfoId);if(node!=null&&node.nodes[0]!=null){coreIds.forEach(function(coreId){node.nodes[0].addNode({type:"geometry",coreId:coreId});});}});delete o.dataToInfo[geometryDataOid];}}else if(geometryType==1){var hasTransparency=data.readLong()==1;var geometryDataOid=data.readLong();var nrIndices=data.readInt();var indices=data.readShortArray(nrIndices);o.stats.nrPrimitives+=nrIndices/3;if(o.state.version>=11){var b=data.readInt();if(b==1){var color={r:data.readFloat(),g:data.readFloat(),b:data.readFloat(),a:data.readFloat()};}}data.align4();var nrVertices=data.readInt();var vertices=data.readFloatArray(nrVertices);o.stats.nrVertices+=nrVertices;var nrNormals=data.readInt();o.stats.nrNormals+=nrNormals;var normals=data.readFloatArray(nrNormals);var nrColors=data.readInt();o.stats.nrColors+=nrColors;var colors=data.readFloatArray(nrColors);var geometry={type:"geometry",primitive:o.type};if(color!=null){// Creating vertex colors here anyways (not transmitted over the line is a plus), should find a way to do this with scenejs without vertex-colors
geometry.colors=new Array(nrVertices*4);for(var i=0;i<nrVertices;i++){geometry.colors[i*4+0]=color.r;geometry.colors[i*4+1]=color.g;geometry.colors[i*4+2]=color.b;geometry.colors[i*4+3]=color.a;}}geometry.coreId=geometryDataOid;if(o.type=="lines"){geometry.indices=o.convertToLines(indices);}else{geometry.indices=indices;}geometry.positions=vertices;geometry.normals=normals;if(colors!=null&&colors.length>0){geometry.colors=colors;}o.library.add("node",geometry);o.loadedGeometry[geometryDataOid]=true;if(o.dataToInfo[geometryDataOid]!=null){o.dataToInfo[geometryDataOid].forEach(function(geometryInfoId){var node=o.viewer.scene.findNode(geometryInfoId);if(node!=null&&node.nodes[0]!=null){node.nodes[0].addNode({type:"geometry",coreId:geometryDataOid});}});delete o.dataToInfo[geometryDataOid];}}o.state.nrObjectsRead++;//		o.updateProgress();
};this.convertToLines=function(indices){var lineIndices=[];for(var i=0;i<indices.length;i+=3){var i1=indices[i];var i2=indices[i+1];var i3=indices[i+2];lineIndices.push(i1,i2);lineIndices.push(i2,i3);lineIndices.push(i3,i1);}return lineIndices;};this.updateProgress=function(){o.progressListeners.forEach(function(progressListener){progressListener("Loading",-1);});//		if (o.state.nrObjectsRead < o.state.nrObjects) {
//			var progress = Math.ceil(100 * o.state.nrObjectsRead / o.state.nrObjects);
//			if (progress != o.state.lastProgress) {
//				o.progressListeners.forEach(function(progressListener){
//					progressListener(progress, o.state.nrObjectsRead, o.state.nrObjects);
//				});
//				o.viewer.SYSTEM.events.trigger('progressChanged', [progress]);
//				o.state.lastProgress = progress;
//			}
//		} else {
//			o.viewer.SYSTEM.events.trigger('progressDone');
//			o.progressListeners.forEach(function(progressListener){
//				progressListener("done", o.state.nrObjectsRead, o.state.nrObjects);
//			});
//			o.viewer.events.trigger('sceneLoaded', [o.viewer.scene]);
//			o.bimServerApi.call("ServiceInterface", "cleanupLongAction", {topicId: o.topicId}, function(){
//			});
//		}
};this.downloadInitiated=function(){o.state={mode:0,nrObjectsRead:0,nrObjects:0};//		o.viewer.SYSTEM.events.trigger('progressStarted', ['Loading Geometry']);
//		o.viewer.SYSTEM.events.trigger('progressBarStyleChanged', BIMSURFER.Constants.ProgressBarStyle.Continuous);
//		o.viewer.refreshMask();
o.library=o.viewer.scene.findNode("library-"+o.groupId);if(o.library==null){o.library=o.viewer.scene.addNode({id:"library-"+o.groupId,type:"library"});}var msg={topicId:o.topicId};o.bimServerApi.setBinaryDataListener(o.topicId,o.binaryDataListener);o.bimServerApi.downloadViaWebsocket(msg);};this.binaryDataListener=function(data){o.todo.push(data);};this.readEnd=function(data){if(Object.keys(o.dataToInfo).length>0){console.error("Unsolved links");for(var key in o.dataToInfo){console.log(key,o.dataToInfo[key]);}}//		o.boundsTranslate = o.viewer.scene.findNode("bounds_translate");
//
//		var center = {
//			x: (o.modelBounds.max.x + o.modelBounds.min.x) / 2,
//			y: (o.modelBounds.max.y + o.modelBounds.min.y) / 2,
//			z: (o.modelBounds.max.z + o.modelBounds.min.z) / 2,
//		};
//		
//		o.boundsTranslate.x = -o.center.x;
//		o.boundsTranslate.y = -o.center.y;
//		o.boundsTranslate.z = -o.center.z;
//
//		var lookat = o.viewer.scene.findNode("main-lookAt");
//		var eye = { x: (o.modelBounds.max.x - o.modelBounds.min.x) * 0.5, y: (o.modelBounds.max.y - o.modelBounds.min.y) * -1, z: (o.modelBounds.max.z - o.modelBounds.min.z) * 0.5 };
//		lookat.set("eye", eye);
//		
//		var maincamera = o.viewer.scene.findNode("main-camera");
//		
//		var diagonal = Math.sqrt(Math.pow(o.modelBounds.max.x - o.modelBounds.min.x, 2) + Math.pow(o.modelBounds.max.y - o.modelBounds.min.y, 2) + Math.pow(o.modelBounds.max.z - o.modelBounds.min.z, 2));
//		
//		var far = diagonal * 5; // 5 being a guessed constant that should somehow coincide with the max zoom-out-factor
//		
//		maincamera.setOptics({
//			type: 'perspective',
//			far: far,
//			near: far / 1000,
//			aspect: jQuery(o.viewer.canvas).width() / jQuery(o.viewer.canvas).height(),
//			fovy: 37.8493
//		});
console.log(o.stats);o.viewer.SYSTEM.events.trigger('progressDone');o.progressListeners.forEach(function(progressListener){progressListener("done",o.state.nrObjectsRead,o.state.nrObjectsRead);});o.bimServerApi.call("ServiceInterface","cleanupLongAction",{topicId:o.topicId},function(){});};this.readStart=function(data){var start=data.readUTF8();if(start!="BGS"){console.log("Stream does not start with BGS ("+start+")");return false;}var version=data.readByte();if(version!=12){console.log("Unimplemented version");return false;}else{o.state.version=version;}data.align8();var modelBounds=data.readDoubleArray(6);o.modelBounds={min:{x:modelBounds[0],y:modelBounds[1],z:modelBounds[2]},max:{x:modelBounds[3],y:modelBounds[4],z:modelBounds[5]}};o.center={x:(o.modelBounds.max.x+o.modelBounds.min.x)/2,y:(o.modelBounds.max.y+o.modelBounds.min.y)/2,z:(o.modelBounds.max.z+o.modelBounds.min.z)/2};o.boundsTranslate=o.viewer.scene.findNode("bounds_translate");var firstModel=false;if(o.boundsTranslate==null){var firstModel=true;o.boundsTranslate={id:"bounds_translate",type:"translate",x:-o.center.x,y:-o.center.y,z:-o.center.z,nodes:[]};o.boundsTranslate=o.viewer.scene.findNode("my-lights").addNode(o.boundsTranslate);}o.modelNode=o.viewer.scene.findNode("model_node_"+o.groupId);if(o.modelNode==null){o.modelNode={id:"model_node_"+o.groupId,type:"translate",x:0,y:0,z:0,data:{groupId:o.groupId},nodes:[]};o.modelNode=o.boundsTranslate.addNode(o.modelNode);}if(firstModel){var lookat=o.viewer.scene.findNode("main-lookAt");var eye={x:(o.modelBounds.max.x-o.modelBounds.min.x)*0.5,y:(o.modelBounds.max.y-o.modelBounds.min.y)*-1,z:(o.modelBounds.max.z-o.modelBounds.min.z)*0.5};lookat.set("eye",eye);var maincamera=o.viewer.scene.findNode("main-camera");var diagonal=Math.sqrt(Math.pow(o.modelBounds.max.x-o.modelBounds.min.x,2)+Math.pow(o.modelBounds.max.y-o.modelBounds.min.y,2)+Math.pow(o.modelBounds.max.z-o.modelBounds.min.z,2));var far=diagonal*5;// 5 being a guessed constant that should somehow coincide with the max zoom-out-factor
maincamera.setOptics({type:'perspective',far:far,near:far/1000,aspect:jQuery(o.viewer.canvas).width()/jQuery(o.viewer.canvas).height(),fovy:37.8493});o.viewer.events.trigger('sceneLoaded',[o.viewer.scene]);}o.state.mode=1;//o.state.nrObjects = data.readInt();
//		o.updateProgress();
//		console.log("Nr Objects", o.state.nrObjects);
};this.process=function(){var data=o.todo.shift();while(data!=null){inputStream=new BIMSURFER.DataInputStreamReader(null,data);var topicId=inputStream.readLong();// Which we don't use here
var messageType=inputStream.readByte();if(messageType==0){o.readStart(inputStream);}else if(messageType==6){o.readEnd(inputStream);}else{o.readObject(inputStream,messageType);}data=o.todo.shift();}};this.progressHandler=function(topicId,state){if(topicId==o.topicId){if(state.title=="Done preparing"){if(!o.prepareReceived){o.prepareReceived=true;o.downloadInitiated();}}if(state.state=="FINISHED"){o.bimServerApi.unregisterProgressHandler(o.topicId,o.progressHandler);}o.progressListeners.forEach(function(progressListener){progressListener("Loading"+(o.options.title==null?"":" "+o.options.title)+"...",state.progress);});}};this.setTitle=function(title){o.options.title=title;};this.setLoadOids=function(roids,oids){o.options={type:"oids",roids:roids,oids:oids};};this.start=function(){if(o.options!=null){o.groupId=o.options.roids[0];o.infoToOid={};var oids=[];o.options.oids.forEach(function(object){if(object.gid!=null){o.infoToOid[object.gid]=object.oid;oids.push(object.gid);}});if(oids.length>0){var query={type:"GeometryInfo",oids:oids,include:{type:"GeometryInfo",field:"data"}};o.bimServerApi.getSerializerByPluginClassName("org.bimserver.serializers.binarygeometry.BinaryGeometryMessagingStreamingSerializerPlugin3",function(serializer){o.bimServerApi.call("ServiceInterface","download",{roids:o.options.roids,serializerOid:serializer.oid,sync:false,query:JSON.stringify(query)},function(topicId){o.topicId=topicId;o.bimServerApi.registerProgressHandler(o.topicId,o.progressHandler);});});}}};}"use strict";/**
 * Class: BIMSURFER.ProgressLoader
 * A class to manage the BIMServer progress.
 * Can register progress listeners on the server for long running actions
 */BIMSURFER.ProgressLoader=BIMSURFER.Class({CLASS:'BIMSURFER.Class',SYSTEM:null,server:null,topicId:null,step:null,done:null,autoUnregister:null,registered:null,/**
	 * @constructor
	 * @param {BIMSURFER.Viewer instance} system The viewer instance
	 * @param {BimServerAPI instance} server The API provided by a connected BIMServer
	 * @param {Number} topicId The TopicID, provided by the BIMServer
	 * @param {Function} step The callback function for everey progress response by the server
	 * @param {Function done The callback function that will be fired when the server gives a STATE == Finished
	 * @param {Boolean} [autoUnregister] Should it automatically unregister the progress listener on the server?
	 */__construct:function __construct(system,server,topicId,step,done,autoUnregister){this.SYSTEM=system;this.server=server;this.topicId=topicId;this.step=step;this.done=done;this.autoUnregister=autoUnregister;this.registered=false;var _this=this;var registering=true;this.responseHandler=function(topicId,state){if(!_this.registered&&!registering){return;}_this.registered=true;_this.progressHandler.apply(_this,[topicId,state]);};this.server.registerProgressHandler(this.topicId,this.responseHandler,function(){_this.registered=true;registering=false;});},unregister:function unregister(){var _this=this;this.server.unregisterProgressHandler(this.topicId,this.responseHandler);this.registered=false;},responseHandler:null,progressHandler:function progressHandler(topicId,state){if(state.state=="FINISHED"){if(this.autoUnregister&&this.registered){this.unregister();}this.done(state,this);}else{this.step(state,this);}}});if((typeof SceneJS==="undefined"?"undefined":_typeof(SceneJS))!='object'){console.error('SceneJS: SceneJS is not loaded!');}SceneJS.FX={};SceneJS.FX.Tween={};SceneJS.FX.TweenSpline=function(){var TweenSpline,_dt,_intervalID,_r,_tick,_tweens;TweenSpline=function(){function TweenSpline(lookAtNode,play){this._target=lookAtNode;this._sequence=[];this._timeline=[];this._play=play!=null?play:true;this._t=0.0;}TweenSpline.prototype.tick=function(dt){if(this._play)return this._t+=dt;};TweenSpline.prototype.start=function(lookAt){this._sequence=[lookAt!=null?lookAt:{eye:this._target.get('eye'),look:this._target.get('look'),up:this._target.get('up')}];this._timeline=[0.0];return this._t=0.0;};TweenSpline.prototype.push=function(lookAt,dt){var dt_prime;if(this._sequence.length===0)this._t=0.0;dt_prime=dt!=null?dt:5000;if(this._timeline.length===0)dt_prime=0.0;this._timeline.push(this.totalTime()+dt_prime);return this._sequence.push(lookAt);};TweenSpline.prototype.sequence=function(lookAts,dt){var dt_prime,lookAt,_i,_len;if(this._sequence.length===0)this._t=0.0;for(_i=0,_len=lookAts.length;_i<_len;_i++){lookAt=lookAts[_i];dt_prime=dt!=null?dt:800;// speedfactor of
// playing sequences
if(this._timeline.length===0)dt_prime=0.0;this._timeline.push(this.totalTime()+dt_prime);this._sequence.push(lookAt);}return null;};TweenSpline.prototype.pause=function(){return this._play=false;};TweenSpline.prototype.play=function(){return this._play=true;};TweenSpline.prototype.totalTime=function(){if(this._timeline.length>0){return this._timeline[this._timeline.length-1];}return 0;};TweenSpline.prototype.update=function(){var dt,i;if(this._sequence.length===0)return false;if(!this._play)return true;if(this._t>=this.totalTime()||this._sequence.length===1){this._target.set(this._sequence[this._sequence.length-1]);return false;}i=0;while(this._timeline[i]<=this._t){++i;}dt=this._timeline[i]-this._timeline[i-1];_this.lerpLookAtNode(this._target,(this._t-this._timeline[i-1])/dt,this._sequence[i-1],this._sequence[i]);return true;};return TweenSpline;}();_tweens=[];_intervalID=null;_dt=0;_tick=function _tick(){var tween,_i,_len;for(_i=0,_len=_tweens.length;_i<_len;_i++){tween=_tweens[_i];tween.tick(_dt);}return null;};_r=function _r(lookAtNode,interval){var tween;_dt=interval||50;if(_intervalID!==null)clearInterval(_intervalID);_intervalID=setInterval(_tick,_dt);tween=new TweenSpline(lookAtNode);_tweens.push(tween);return tween;};_r.update=function(){var i,tween,_results;i=0;_results=[];while(i<_tweens.length){tween=_tweens[i];if(!tween.update()){_results.push(_tweens.splice(i,1));}else{_results.push(i+=1);}}return _results;};return _r;}();SceneJS.FX.idle=function(){SceneJS.FX.TweenSpline.update();return null;};"use strict";/*\
|*|
|*|  :: Number.isInteger() polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
|*|
\*/if(!Number.isInteger){Number.isInteger=function isInteger(nVal){return typeof nVal==="number"&&isFinite(nVal)&&nVal>-9007199254740992&&nVal<9007199254740992&&Math.floor(nVal)===nVal;};}/*\
|*|
|*|  StringView - Mozilla Developer Network - revision #6
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/StringView
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
\*/function StringView(vInput,sEncoding/* optional (default: UTF-8) */,nOffset/* optional */,nLength/* optional */){var fTAView,aWhole,aRaw,fPutOutptCode,fGetOutptChrSize,nInptLen,nStartIdx=isFinite(nOffset)?nOffset:0,nTranscrType=15;if(sEncoding){this.encoding=sEncoding.toString();}encSwitch:switch(this.encoding){case"UTF-8":fPutOutptCode=StringView.putUTF8CharCode;fGetOutptChrSize=StringView.getUTF8CharLength;fTAView=Uint8Array;break encSwitch;case"UTF-16":fPutOutptCode=StringView.putUTF16CharCode;fGetOutptChrSize=StringView.getUTF16CharLength;fTAView=Uint16Array;break encSwitch;case"UTF-32":fTAView=Uint32Array;nTranscrType&=14;break encSwitch;default:/* case "ASCII", or case "BinaryString" or unknown cases */fTAView=Uint8Array;nTranscrType&=14;}typeSwitch:switch(typeof vInput==="undefined"?"undefined":_typeof(vInput)){case"string":/* the input argument is a primitive string: a new buffer will be created. */nTranscrType&=7;break typeSwitch;case"object":classSwitch:switch(vInput.constructor){case StringView:/* the input argument is a stringView: a new buffer will be created. */nTranscrType&=3;break typeSwitch;case String:/* the input argument is an objectified string: a new buffer will be created. */nTranscrType&=7;break typeSwitch;case ArrayBuffer:/* the input argument is an arrayBuffer: the buffer will be shared. */aWhole=new fTAView(vInput);nInptLen=this.encoding==="UTF-32"?vInput.byteLength>>>2:this.encoding==="UTF-16"?vInput.byteLength>>>1:vInput.byteLength;aRaw=nStartIdx===0&&(!isFinite(nLength)||nLength===nInptLen)?aWhole:new fTAView(vInput,nStartIdx,!isFinite(nLength)?nInptLen-nStartIdx:nLength);break typeSwitch;case Uint32Array:case Uint16Array:case Uint8Array:/* the input argument is a typedArray: the buffer, and possibly the array itself, will be shared. */fTAView=vInput.constructor;nInptLen=vInput.length;aWhole=vInput.byteOffset===0&&vInput.length===(fTAView===Uint32Array?vInput.buffer.byteLength>>>2:fTAView===Uint16Array?vInput.buffer.byteLength>>>1:vInput.buffer.byteLength)?vInput:new fTAView(vInput.buffer);aRaw=nStartIdx===0&&(!isFinite(nLength)||nLength===nInptLen)?vInput:vInput.subarray(nStartIdx,isFinite(nLength)?nStartIdx+nLength:nInptLen);break typeSwitch;default:/* the input argument is an array or another serializable object: a new typedArray will be created. */aWhole=new fTAView(vInput);nInptLen=aWhole.length;aRaw=nStartIdx===0&&(!isFinite(nLength)||nLength===nInptLen)?aWhole:aWhole.subarray(nStartIdx,isFinite(nLength)?nStartIdx+nLength:nInptLen);}break typeSwitch;default:/* the input argument is a number, a boolean or a function: a new typedArray will be created. */aWhole=aRaw=new fTAView(Number(vInput)||0);}if(nTranscrType<8){var vSource,nOutptLen,nCharStart,nCharEnd,nEndIdx,fGetInptChrSize,fGetInptChrCode;if(nTranscrType&4){/* input is string */vSource=vInput;nOutptLen=nInptLen=vSource.length;nTranscrType^=this.encoding==="UTF-32"?0:2;/* ...or...: nTranscrType ^= Number(this.encoding !== "UTF-32") << 1; */nStartIdx=nCharStart=nOffset?Math.max((nOutptLen+nOffset)%nOutptLen,0):0;nEndIdx=nCharEnd=(Number.isInteger(nLength)?Math.min(Math.max(nLength,0)+nStartIdx,nOutptLen):nOutptLen)-1;}else{/* input is stringView */vSource=vInput.rawData;nInptLen=vInput.makeIndex();nStartIdx=nCharStart=nOffset?Math.max((nInptLen+nOffset)%nInptLen,0):0;nOutptLen=Number.isInteger(nLength)?Math.min(Math.max(nLength,0),nInptLen-nCharStart):nInptLen;nEndIdx=nCharEnd=nOutptLen+nCharStart;if(vInput.encoding==="UTF-8"){fGetInptChrSize=StringView.getUTF8CharLength;fGetInptChrCode=StringView.loadUTF8CharCode;}else if(vInput.encoding==="UTF-16"){fGetInptChrSize=StringView.getUTF16CharLength;fGetInptChrCode=StringView.loadUTF16CharCode;}else{nTranscrType&=1;}}if(nOutptLen===0||nTranscrType<4&&vSource.encoding===this.encoding&&nCharStart===0&&nOutptLen===nInptLen){/* the encoding is the same, the length too and the offset is 0... or the input is empty! */nTranscrType=7;}conversionSwitch:switch(nTranscrType){case 0:/* both the source and the new StringView have a fixed-length encoding... */aWhole=new fTAView(nOutptLen);for(var nOutptIdx=0;nOutptIdx<nOutptLen;aWhole[nOutptIdx]=vSource[nStartIdx+nOutptIdx++]){}break conversionSwitch;case 1:/* the source has a fixed-length encoding but the new StringView has a variable-length encoding... *//* mapping... */nOutptLen=0;for(var nInptIdx=nStartIdx;nInptIdx<nEndIdx;nInptIdx++){nOutptLen+=fGetOutptChrSize(vSource[nInptIdx]);}aWhole=new fTAView(nOutptLen);/* transcription of the source... */for(var nInptIdx=nStartIdx,nOutptIdx=0;nOutptIdx<nOutptLen;nInptIdx++){nOutptIdx=fPutOutptCode(aWhole,vSource[nInptIdx],nOutptIdx);}break conversionSwitch;case 2:/* the source has a variable-length encoding but the new StringView has a fixed-length encoding... *//* mapping... */nStartIdx=0;var nChrCode;for(nChrIdx=0;nChrIdx<nCharStart;nChrIdx++){nChrCode=fGetInptChrCode(vSource,nStartIdx);nStartIdx+=fGetInptChrSize(nChrCode);}aWhole=new fTAView(nOutptLen);/* transcription of the source... */for(var nInptIdx=nStartIdx,nOutptIdx=0;nOutptIdx<nOutptLen;nInptIdx+=fGetInptChrSize(nChrCode),nOutptIdx++){nChrCode=fGetInptChrCode(vSource,nInptIdx);aWhole[nOutptIdx]=nChrCode;}break conversionSwitch;case 3:/* both the source and the new StringView have a variable-length encoding... *//* mapping... */nOutptLen=0;var nChrCode;for(var nChrIdx=0,nInptIdx=0;nChrIdx<nCharEnd;nInptIdx+=fGetInptChrSize(nChrCode)){nChrCode=fGetInptChrCode(vSource,nInptIdx);if(nChrIdx===nCharStart){nStartIdx=nInptIdx;}if(++nChrIdx>nCharStart){nOutptLen+=fGetOutptChrSize(nChrCode);}}aWhole=new fTAView(nOutptLen);/* transcription... */for(var nInptIdx=nStartIdx,nOutptIdx=0;nOutptIdx<nOutptLen;nInptIdx+=fGetInptChrSize(nChrCode)){nChrCode=fGetInptChrCode(vSource,nInptIdx);nOutptIdx=fPutOutptCode(aWhole,nChrCode,nOutptIdx);}break conversionSwitch;case 4:/* DOMString to ASCII or BinaryString or other unknown encodings */aWhole=new fTAView(nOutptLen);/* transcription... */for(var nIdx=0;nIdx<nOutptLen;nIdx++){aWhole[nIdx]=vSource.charCodeAt(nIdx)&0xff;}break conversionSwitch;case 5:/* DOMString to UTF-8 or to UTF-16 *//* mapping... */nOutptLen=0;for(var nMapIdx=0;nMapIdx<nInptLen;nMapIdx++){if(nMapIdx===nCharStart){nStartIdx=nOutptLen;}nOutptLen+=fGetOutptChrSize(vSource.charCodeAt(nMapIdx));if(nMapIdx===nCharEnd){nEndIdx=nOutptLen;}}aWhole=new fTAView(nOutptLen);/* transcription... */for(var nOutptIdx=0,nChrIdx=0;nOutptIdx<nOutptLen;nChrIdx++){nOutptIdx=fPutOutptCode(aWhole,vSource.charCodeAt(nChrIdx),nOutptIdx);}break conversionSwitch;case 6:/* DOMString to UTF-32 */aWhole=new fTAView(nOutptLen);/* transcription... */for(var nIdx=0;nIdx<nOutptLen;nIdx++){aWhole[nIdx]=vSource.charCodeAt(nIdx);}break conversionSwitch;case 7:aWhole=new fTAView(nOutptLen?vSource:0);break conversionSwitch;}aRaw=nTranscrType>3&&(nStartIdx>0||nEndIdx<aWhole.length-1)?aWhole.subarray(nStartIdx,nEndIdx):aWhole;}this.buffer=aWhole.buffer;this.bufferView=aWhole;this.rawData=aRaw;Object.freeze(this);}/* CONSTRUCTOR'S METHODS */StringView.loadUTF8CharCode=function(aChars,nIdx){var nLen=aChars.length,nPart=aChars[nIdx];return nPart>251&&nPart<254&&nIdx+5<nLen?/* (nPart - 252 << 32) is not possible in ECMAScript! So...: *//* six bytes */(nPart-252)*1073741824+(aChars[nIdx+1]-128<<24)+(aChars[nIdx+2]-128<<18)+(aChars[nIdx+3]-128<<12)+(aChars[nIdx+4]-128<<6)+aChars[nIdx+5]-128:nPart>247&&nPart<252&&nIdx+4<nLen?/* five bytes */(nPart-248<<24)+(aChars[nIdx+1]-128<<18)+(aChars[nIdx+2]-128<<12)+(aChars[nIdx+3]-128<<6)+aChars[nIdx+4]-128:nPart>239&&nPart<248&&nIdx+3<nLen?/* four bytes */(nPart-240<<18)+(aChars[nIdx+1]-128<<12)+(aChars[nIdx+2]-128<<6)+aChars[nIdx+3]-128:nPart>223&&nPart<240&&nIdx+2<nLen?/* three bytes */(nPart-224<<12)+(aChars[nIdx+1]-128<<6)+aChars[nIdx+2]-128:nPart>191&&nPart<224&&nIdx+1<nLen?/* two bytes */(nPart-192<<6)+aChars[nIdx+1]-128:/* one byte */nPart;};StringView.putUTF8CharCode=function(aTarget,nChar,nPutAt){var nIdx=nPutAt;if(nChar<0x80/* 128 */){/* one byte */aTarget[nIdx++]=nChar;}else if(nChar<0x800/* 2048 */){/* two bytes */aTarget[nIdx++]=0xc0/* 192 */+(nChar>>>6);aTarget[nIdx++]=0x80/* 128 */+(nChar&0x3f/* 63 */);}else if(nChar<0x10000/* 65536 */){/* three bytes */aTarget[nIdx++]=0xe0/* 224 */+(nChar>>>12);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>6&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar&0x3f/* 63 */);}else if(nChar<0x200000/* 2097152 */){/* four bytes */aTarget[nIdx++]=0xf0/* 240 */+(nChar>>>18);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>12&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>6&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar&0x3f/* 63 */);}else if(nChar<0x4000000/* 67108864 */){/* five bytes */aTarget[nIdx++]=0xf8/* 248 */+(nChar>>>24);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>18&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>12&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>6&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar&0x3f/* 63 */);}else/* if (nChar <= 0x7fffffff) */{/* 2147483647 *//* six bytes */aTarget[nIdx++]=0xfc/* 252 */+/* (nChar >>> 32) is not possible in ECMAScript! So...: */nChar/1073741824;aTarget[nIdx++]=0x80/* 128 */+(nChar>>>24&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>18&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>12&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar>>>6&0x3f/* 63 */);aTarget[nIdx++]=0x80/* 128 */+(nChar&0x3f/* 63 */);}return nIdx;};StringView.getUTF8CharLength=function(nChar){return nChar<0x80?1:nChar<0x800?2:nChar<0x10000?3:nChar<0x200000?4:nChar<0x4000000?5:6;};StringView.loadUTF16CharCode=function(aChars,nIdx){/* UTF-16 to DOMString decoding algorithm */var nFrstChr=aChars[nIdx];return nFrstChr>0xD7BF/* 55231 */&&nIdx+1<aChars.length?(nFrstChr-0xD800/* 55296 */<<10)+aChars[nIdx+1]+0x2400/* 9216 */:nFrstChr;};StringView.putUTF16CharCode=function(aTarget,nChar,nPutAt){var nIdx=nPutAt;if(nChar<0x10000/* 65536 */){/* one element */aTarget[nIdx++]=nChar;}else{/* two elements */aTarget[nIdx++]=0xD7C0/* 55232 */+(nChar>>>10);aTarget[nIdx++]=0xDC00/* 56320 */+(nChar&0x3FF/* 1023 */);}return nIdx;};StringView.getUTF16CharLength=function(nChar){return nChar<0x10000?1:2;};/* Array of bytes to base64 string decoding */StringView.b64ToUint6=function(nChr){return nChr>64&&nChr<91?nChr-65:nChr>96&&nChr<123?nChr-71:nChr>47&&nChr<58?nChr+4:nChr===43?62:nChr===47?63:0;};StringView.uint6ToB64=function(nUint6){return nUint6<26?nUint6+65:nUint6<52?nUint6+71:nUint6<62?nUint6-4:nUint6===62?43:nUint6===63?47:65;};/* Base64 string to array encoding */StringView.bytesToBase64=function(aBytes){var sB64Enc="";for(var nMod3,nLen=aBytes.length,nUint24=0,nIdx=0;nIdx<nLen;nIdx++){nMod3=nIdx%3;if(nIdx>0&&nIdx*4/3%76===0){sB64Enc+="\r\n";}nUint24|=aBytes[nIdx]<<(16>>>nMod3&24);if(nMod3===2||aBytes.length-nIdx===1){sB64Enc+=String.fromCharCode(StringView.uint6ToB64(nUint24>>>18&63),StringView.uint6ToB64(nUint24>>>12&63),StringView.uint6ToB64(nUint24>>>6&63),StringView.uint6ToB64(nUint24&63));nUint24=0;}}return sB64Enc.replace(/A(?=A$|$)/g,"=");};StringView.base64ToBytes=function(sBase64,nBlockBytes){var sB64Enc=sBase64.replace(/[^A-Za-z0-9\+\/]/g,""),nInLen=sB64Enc.length,nOutLen=nBlockBytes?Math.ceil((nInLen*3+1>>>2)/nBlockBytes)*nBlockBytes:nInLen*3+1>>>2,aBytes=new Uint8Array(nOutLen);for(var nMod3,nMod4,nUint24=0,nOutIdx=0,nInIdx=0;nInIdx<nInLen;nInIdx++){nMod4=nInIdx&3;nUint24|=StringView.b64ToUint6(sB64Enc.charCodeAt(nInIdx))<<18-6*nMod4;if(nMod4===3||nInLen-nInIdx===1){for(nMod3=0;nMod3<3&&nOutIdx<nOutLen;nMod3++,nOutIdx++){aBytes[nOutIdx]=nUint24>>>(16>>>nMod3&24)&255;}nUint24=0;}}return aBytes;};StringView.makeFromBase64=function(sB64Inpt,sEncoding,nByteOffset,nLength){return new StringView(sEncoding==="UTF-16"||sEncoding==="UTF-32"?StringView.base64ToBytes(sB64Inpt,sEncoding==="UTF-16"?2:4).buffer:StringView.base64ToBytes(sB64Inpt),sEncoding,nByteOffset,nLength);};/* DEFAULT VALUES */StringView.prototype.encoding="UTF-8";/* Default encoding... *//* INSTANCES' METHODS */StringView.prototype.makeIndex=function(nChrLength,nStartFrom){var aTarget=this.rawData,nChrEnd,nRawLength=aTarget.length,nStartIdx=nStartFrom||0,nIdxEnd=nStartIdx,nStopAtChr=isNaN(nChrLength)?Infinity:nChrLength;if(nChrLength+1>aTarget.length){throw new RangeError("StringView.prototype.makeIndex - The offset can\'t be major than the length of the array - 1.");}switch(this.encoding){case"UTF-8":var nPart;for(nChrEnd=0;nIdxEnd<nRawLength&&nChrEnd<nStopAtChr;nChrEnd++){nPart=aTarget[nIdxEnd];nIdxEnd+=nPart>251&&nPart<254&&nIdxEnd+5<nRawLength?6:nPart>247&&nPart<252&&nIdxEnd+4<nRawLength?5:nPart>239&&nPart<248&&nIdxEnd+3<nRawLength?4:nPart>223&&nPart<240&&nIdxEnd+2<nRawLength?3:nPart>191&&nPart<224&&nIdxEnd+1<nRawLength?2:1;}break;case"UTF-16":for(nChrEnd=nStartIdx;nIdxEnd<nRawLength&&nChrEnd<nStopAtChr;nChrEnd++){nIdxEnd+=aTarget[nIdxEnd]>0xD7BF/* 55231 */&&nIdxEnd+1<aTarget.length?2:1;}break;default:nIdxEnd=nChrEnd=isFinite(nChrLength)?nChrLength:nRawLength-1;}if(nChrLength){return nIdxEnd;}return nChrEnd;};StringView.prototype.toBase64=function(bWholeBuffer){return StringView.bytesToBase64(bWholeBuffer?this.bufferView.constructor===Uint8Array?this.bufferView:new Uint8Array(this.buffer):this.rawData.constructor===Uint8Array?this.rawData:new Uint8Array(this.buffer,this.rawData.byteOffset,this.rawData.length<<(this.rawData.constructor===Uint16Array?1:2)));};StringView.prototype.subview=function(nCharOffset/* optional */,nCharLength/* optional */){var nChrLen,nCharStart,nStrLen,bVariableLen=this.encoding==="UTF-8"||this.encoding==="UTF-16",nStartOffset=nCharOffset,nStringLength,nRawLen=this.rawData.length;if(nRawLen===0){return new StringView(this.buffer,this.encoding);}nStringLength=bVariableLen?this.makeIndex():nRawLen;nCharStart=nCharOffset?Math.max((nStringLength+nCharOffset)%nStringLength,0):0;nStrLen=Number.isInteger(nCharLength)?Math.max(nCharLength,0)+nCharStart>nStringLength?nStringLength-nCharStart:nCharLength:nStringLength;if(nCharStart===0&&nStrLen===nStringLength){return this;}if(bVariableLen){nStartOffset=this.makeIndex(nCharStart);nChrLen=this.makeIndex(nStrLen,nStartOffset)-nStartOffset;}else{nStartOffset=nCharStart;nChrLen=nStrLen-nCharStart;}if(this.encoding==="UTF-16"){nStartOffset<<=1;}else if(this.encoding==="UTF-32"){nStartOffset<<=2;}return new StringView(this.buffer,this.encoding,nStartOffset,nChrLen);};StringView.prototype.forEachChar=function(fCallback,oThat,nChrOffset,nChrLen){var aSource=this.rawData,nRawEnd,nRawIdx;if(this.encoding==="UTF-8"||this.encoding==="UTF-16"){var fGetInptChrSize,fGetInptChrCode;if(this.encoding==="UTF-8"){fGetInptChrSize=StringView.getUTF8CharLength;fGetInptChrCode=StringView.loadUTF8CharCode;}else if(this.encoding==="UTF-16"){fGetInptChrSize=StringView.getUTF16CharLength;fGetInptChrCode=StringView.loadUTF16CharCode;}nRawIdx=isFinite(nChrOffset)?this.makeIndex(nChrOffset):0;nRawEnd=isFinite(nChrLen)?this.makeIndex(nChrLen,nRawIdx):aSource.length;for(var nChrCode,nChrIdx=0;nRawIdx<nRawEnd;nChrIdx++){nChrCode=fGetInptChrCode(aSource,nRawIdx);fCallback.call(oThat||null,nChrCode,nChrIdx,nRawIdx,aSource);nRawIdx+=fGetInptChrSize(nChrCode);}}else{nRawIdx=isFinite(nChrOffset)?nChrOffset:0;nRawEnd=isFinite(nChrLen)?nChrLen+nRawIdx:aSource.length;for(nRawIdx;nRawIdx<nRawEnd;nRawIdx++){fCallback.call(oThat||null,aSource[nRawIdx],nRawIdx,nRawIdx,aSource);}}};StringView.prototype.valueOf=StringView.prototype.toString=function(){if(this.encoding!=="UTF-8"&&this.encoding!=="UTF-16"){/* ASCII, UTF-32 or BinaryString to DOMString */return String.fromCharCode.apply(null,this.rawData);}var fGetCode,fGetIncr,sView="";if(this.encoding==="UTF-8"){fGetIncr=StringView.getUTF8CharLength;fGetCode=StringView.loadUTF8CharCode;}else if(this.encoding==="UTF-16"){fGetIncr=StringView.getUTF16CharLength;fGetCode=StringView.loadUTF16CharCode;}for(var nChr,nLen=this.rawData.length,nIdx=0;nIdx<nLen;nIdx+=fGetIncr(nChr)){nChr=fGetCode(this.rawData,nIdx);sView+=String.fromCharCode(nChr);}return sView;};if(_typeof(BIMSURFER.Util)!='object')BIMSURFER.Util={};BIMSURFER.Util.isset=function(variable){for(var i=0;i<arguments.length;i++){if(typeof arguments[i]=='undefined'||arguments[i]==null){return false;}}return true;};BIMSURFER.Util.isArray=function(variable){return Object.prototype.toString.call(variable)==='[object Array]';};function removeA(arr){var what,a=arguments,L=a.length,ax;while(L>1&&arr.length){what=a[--L];while((ax=arr.indexOf(what))!==-1){arr.splice(ax,1);}}return arr;}/******************************************************************************//* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */if(!GLMAT_EPSILON){var GLMAT_EPSILON=0.000001;}if(!GLMAT_ARRAY_TYPE){var GLMAT_ARRAY_TYPE=typeof Float32Array!=='undefined'?Float32Array:Array;}if(!GLMAT_RANDOM){var GLMAT_RANDOM=Math.random;}/**
 * @class Common utilities
 * @name glMatrix
 */BIMSURFER.Util.glMatrix={};/**
 * Sets the type of array used when creating new vectors and matricies
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */BIMSURFER.Util.glMatrix.setMatrixArrayType=function(type){GLMAT_ARRAY_TYPE=type;};/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/BIMSURFER.Util.glMatrix.toRadian=function(a){return a*(Math.PI/180);};/**
 * @class 4 Dimensional Vector
 * @name vec4
 */BIMSURFER.Util.glMatrix.vec4={};/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */BIMSURFER.Util.glMatrix.vec4.create=function(){var out=new GLMAT_ARRAY_TYPE(4);out[0]=0;out[1]=0;out[2]=0;out[3]=0;return out;};/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */BIMSURFER.Util.glMatrix.vec4.clone=function(a){var out=new GLMAT_ARRAY_TYPE(4);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];return out;};/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */BIMSURFER.Util.glMatrix.vec4.fromValues=function(x,y,z,w){var out=new GLMAT_ARRAY_TYPE(4);out[0]=x;out[1]=y;out[2]=z;out[3]=w;return out;};/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];return out;};/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.set=function(out,x,y,z,w){out[0]=x;out[1]=y;out[2]=z;out[3]=w;return out;};/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];out[2]=a[2]+b[2];out[3]=a[3]+b[3];return out;};/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];out[2]=a[2]-b[2];out[3]=a[3]-b[3];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.subtract}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.sub=BIMSURFER.Util.glMatrix.vec4.subtract;/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.multiply=function(out,a,b){out[0]=a[0]*b[0];out[1]=a[1]*b[1];out[2]=a[2]*b[2];out[3]=a[3]*b[3];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.mul=BIMSURFER.Util.glMatrix.vec4.multiply;/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.divide=function(out,a,b){out[0]=a[0]/b[0];out[1]=a[1]/b[1];out[2]=a[2]/b[2];out[3]=a[3]/b[3];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.divide}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.div=BIMSURFER.Util.glMatrix.vec4.divide;/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.min=function(out,a,b){out[0]=Math.min(a[0],b[0]);out[1]=Math.min(a[1],b[1]);out[2]=Math.min(a[2],b[2]);out[3]=Math.min(a[3],b[3]);return out;};/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.max=function(out,a,b){out[0]=Math.max(a[0],b[0]);out[1]=Math.max(a[1],b[1]);out[2]=Math.max(a[2],b[2]);out[3]=Math.max(a[3],b[3]);return out;};/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.scale=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;out[2]=a[2]*b;out[3]=a[3]*b;return out;};/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.scaleAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;out[2]=a[2]+b[2]*scale;out[3]=a[3]+b[3]*scale;return out;};/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */BIMSURFER.Util.glMatrix.vec4.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return Math.sqrt(x*x+y*y+z*z+w*w);};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.distance}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.dist=BIMSURFER.Util.glMatrix.vec4.distance;/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */BIMSURFER.Util.glMatrix.vec4.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return x*x+y*y+z*z+w*w;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.squaredDistance}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.sqrDist=BIMSURFER.Util.glMatrix.vec4.squaredDistance;/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */BIMSURFER.Util.glMatrix.vec4.length=function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return Math.sqrt(x*x+y*y+z*z+w*w);};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.length}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.len=BIMSURFER.Util.glMatrix.vec4.length;/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */BIMSURFER.Util.glMatrix.vec4.squaredLength=function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return x*x+y*y+z*z+w*w;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec4.squaredLength}
 * @function
 */BIMSURFER.Util.glMatrix.vec4.sqrLen=BIMSURFER.Util.glMatrix.vec4.squaredLength;/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.negate=function(out,a){out[0]=-a[0];out[1]=-a[1];out[2]=-a[2];out[3]=-a[3];return out;};/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.normalize=function(out,a){var x=a[0],y=a[1],z=a[2],w=a[3];var len=x*x+y*y+z*z+w*w;if(len>0){len=1/Math.sqrt(len);out[0]=a[0]*len;out[1]=a[1]*len;out[2]=a[2]*len;out[3]=a[3]*len;}return out;};/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */BIMSURFER.Util.glMatrix.vec4.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3];};/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.lerp=function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3];out[0]=ax+t*(b[0]-ax);out[1]=ay+t*(b[1]-ay);out[2]=az+t*(b[2]-az);out[3]=aw+t*(b[3]-aw);return out;};/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.random=function(out,scale){scale=scale||1.0;//TODO: This is a pretty awful way of doing this. Find something better.
out[0]=GLMAT_RANDOM();out[1]=GLMAT_RANDOM();out[2]=GLMAT_RANDOM();out[3]=GLMAT_RANDOM();BIMSURFER.Util.glMatrix.vec4.normalize(out,out);BIMSURFER.Util.glMatrix.vec4.scale(out,out,scale);return out;};/**
 * Transforms the vec4 with a BIMSURFER.Util.glMatrix.mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.transformMat4=function(out,a,m){var x=a[0],y=a[1],z=a[2],w=a[3];out[0]=m[0]*x+m[4]*y+m[8]*z+m[12]*w;out[1]=m[1]*x+m[5]*y+m[9]*z+m[13]*w;out[2]=m[2]*x+m[6]*y+m[10]*z+m[14]*w;out[3]=m[3]*x+m[7]*y+m[11]*z+m[15]*w;return out;};/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */BIMSURFER.Util.glMatrix.vec4.transformQuat=function(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],// calculate quat * vec
ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;// calculate result * inverse quat
out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy;out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz;out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx;return out;};/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each BIMSURFER.Util.glMatrix.vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */BIMSURFER.Util.glMatrix.vec4.forEach=function(){var vec=BIMSURFER.Util.glMatrix.vec4.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride=4;}if(!offset){offset=0;}if(count){l=Math.min(count*stride+offset,a.length);}else{l=a.length;}for(i=offset;i<l;i+=stride){vec[0]=a[i];vec[1]=a[i+1];vec[2]=a[i+2];vec[3]=a[i+3];fn(vec,vec,arg);a[i]=vec[0];a[i+1]=vec[1];a[i+2]=vec[2];a[i+3]=vec[3];}return a;};}();/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */BIMSURFER.Util.glMatrix.vec4.str=function(a){return'vec4('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+')';};/**
 * @class 3 Dimensional Vector
 * @name vec3
 */BIMSURFER.Util.glMatrix.vec3={};/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */BIMSURFER.Util.glMatrix.vec3.create=function(){var out=new GLMAT_ARRAY_TYPE(3);out[0]=0;out[1]=0;out[2]=0;return out;};/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */BIMSURFER.Util.glMatrix.vec3.clone=function(a){var out=new GLMAT_ARRAY_TYPE(3);out[0]=a[0];out[1]=a[1];out[2]=a[2];return out;};/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */BIMSURFER.Util.glMatrix.vec3.fromValues=function(x,y,z){var out=new GLMAT_ARRAY_TYPE(3);out[0]=x;out[1]=y;out[2]=z;return out;};/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];return out;};/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.set=function(out,x,y,z){out[0]=x;out[1]=y;out[2]=z;return out;};/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];out[2]=a[2]+b[2];return out;};/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];out[2]=a[2]-b[2];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.subtract}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.sub=BIMSURFER.Util.glMatrix.vec3.subtract;/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.multiply=function(out,a,b){out[0]=a[0]*b[0];out[1]=a[1]*b[1];out[2]=a[2]*b[2];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.mul=BIMSURFER.Util.glMatrix.vec3.multiply;/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.divide=function(out,a,b){out[0]=a[0]/b[0];out[1]=a[1]/b[1];out[2]=a[2]/b[2];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.divide}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.div=BIMSURFER.Util.glMatrix.vec3.divide;/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.min=function(out,a,b){out[0]=Math.min(a[0],b[0]);out[1]=Math.min(a[1],b[1]);out[2]=Math.min(a[2],b[2]);return out;};/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.max=function(out,a,b){out[0]=Math.max(a[0],b[0]);out[1]=Math.max(a[1],b[1]);out[2]=Math.max(a[2],b[2]);return out;};/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.scale=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;out[2]=a[2]*b;return out;};/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.scaleAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;out[2]=a[2]+b[2]*scale;return out;};/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */BIMSURFER.Util.glMatrix.vec3.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return Math.sqrt(x*x+y*y+z*z);};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.distance}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.dist=BIMSURFER.Util.glMatrix.vec3.distance;/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */BIMSURFER.Util.glMatrix.vec3.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return x*x+y*y+z*z;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.squaredDistance}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.sqrDist=BIMSURFER.Util.glMatrix.vec3.squaredDistance;/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */BIMSURFER.Util.glMatrix.vec3.length=function(a){var x=a[0],y=a[1],z=a[2];return Math.sqrt(x*x+y*y+z*z);};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.length}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.len=BIMSURFER.Util.glMatrix.vec3.length;/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */BIMSURFER.Util.glMatrix.vec3.squaredLength=function(a){var x=a[0],y=a[1],z=a[2];return x*x+y*y+z*z;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec3.squaredLength}
 * @function
 */BIMSURFER.Util.glMatrix.vec3.sqrLen=BIMSURFER.Util.glMatrix.vec3.squaredLength;/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.negate=function(out,a){out[0]=-a[0];out[1]=-a[1];out[2]=-a[2];return out;};/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.normalize=function(out,a){var x=a[0],y=a[1],z=a[2];var len=x*x+y*y+z*z;if(len>0){//TODO: evaluate use of glm_invsqrt here?
len=1/Math.sqrt(len);out[0]=a[0]*len;out[1]=a[1]*len;out[2]=a[2]*len;}return out;};/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */BIMSURFER.Util.glMatrix.vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];};/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.cross=function(out,a,b){var ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2];out[0]=ay*bz-az*by;out[1]=az*bx-ax*bz;out[2]=ax*by-ay*bx;return out;};/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.lerp=function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2];out[0]=ax+t*(b[0]-ax);out[1]=ay+t*(b[1]-ay);out[2]=az+t*(b[2]-az);return out;};/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.random=function(out,scale){scale=scale||1.0;var r=GLMAT_RANDOM()*2.0*Math.PI;var z=GLMAT_RANDOM()*2.0-1.0;var zScale=Math.sqrt(1.0-z*z)*scale;out[0]=Math.cos(r)*zScale;out[1]=Math.sin(r)*zScale;out[2]=z*scale;return out;};/**
 * Transforms the vec3 with a BIMSURFER.Util.glMatrix.mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.transformMat4=function(out,a,m){var x=a[0],y=a[1],z=a[2];out[0]=m[0]*x+m[4]*y+m[8]*z+m[12];out[1]=m[1]*x+m[5]*y+m[9]*z+m[13];out[2]=m[2]*x+m[6]*y+m[10]*z+m[14];return out;};/**
 * Transforms the vec3 with a BIMSURFER.Util.glMatrix.mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.transformMat3=function(out,a,m){var x=a[0],y=a[1],z=a[2];out[0]=x*m[0]+y*m[3]+z*m[6];out[1]=x*m[1]+y*m[4]+z*m[7];out[2]=x*m[2]+y*m[5]+z*m[8];return out;};/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec3.transformQuat=function(out,a,q){// benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],// calculate quat * vec
ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;// calculate result * inverse quat
out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy;out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz;out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx;return out;};/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each BIMSURFER.Util.glMatrix.vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */BIMSURFER.Util.glMatrix.vec3.forEach=function(){var vec=BIMSURFER.Util.glMatrix.vec3.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride=3;}if(!offset){offset=0;}if(count){l=Math.min(count*stride+offset,a.length);}else{l=a.length;}for(i=offset;i<l;i+=stride){vec[0]=a[i];vec[1]=a[i+1];vec[2]=a[i+2];fn(vec,vec,arg);a[i]=vec[0];a[i+1]=vec[1];a[i+2]=vec[2];}return a;};}();/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */BIMSURFER.Util.glMatrix.vec3.str=function(a){return'vec3('+a[0]+', '+a[1]+', '+a[2]+')';};/**
 * @class 2 Dimensional Vector
 * @name vec2
 */BIMSURFER.Util.glMatrix.vec2={};/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */BIMSURFER.Util.glMatrix.vec2.create=function(){var out=new GLMAT_ARRAY_TYPE(2);out[0]=0;out[1]=0;return out;};/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */BIMSURFER.Util.glMatrix.vec2.clone=function(a){var out=new GLMAT_ARRAY_TYPE(2);out[0]=a[0];out[1]=a[1];return out;};/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */BIMSURFER.Util.glMatrix.vec2.fromValues=function(x,y){var out=new GLMAT_ARRAY_TYPE(2);out[0]=x;out[1]=y;return out;};/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.copy=function(out,a){out[0]=a[0];out[1]=a[1];return out;};/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.set=function(out,x,y){out[0]=x;out[1]=y;return out;};/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];return out;};/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.subtract}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.sub=BIMSURFER.Util.glMatrix.vec2.subtract;/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.multiply=function(out,a,b){out[0]=a[0]*b[0];out[1]=a[1]*b[1];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.mul=BIMSURFER.Util.glMatrix.vec2.multiply;/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.divide=function(out,a,b){out[0]=a[0]/b[0];out[1]=a[1]/b[1];return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.divide}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.div=BIMSURFER.Util.glMatrix.vec2.divide;/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.min=function(out,a,b){out[0]=Math.min(a[0],b[0]);out[1]=Math.min(a[1],b[1]);return out;};/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.max=function(out,a,b){out[0]=Math.max(a[0],b[0]);out[1]=Math.max(a[1],b[1]);return out;};/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.scale=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;return out;};/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.scaleAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;return out;};/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */BIMSURFER.Util.glMatrix.vec2.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1];return Math.sqrt(x*x+y*y);};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.distance}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.dist=BIMSURFER.Util.glMatrix.vec2.distance;/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */BIMSURFER.Util.glMatrix.vec2.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1];return x*x+y*y;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.squaredDistance}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.sqrDist=BIMSURFER.Util.glMatrix.vec2.squaredDistance;/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */BIMSURFER.Util.glMatrix.vec2.length=function(a){var x=a[0],y=a[1];return Math.sqrt(x*x+y*y);};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.length}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.len=BIMSURFER.Util.glMatrix.vec2.length;/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */BIMSURFER.Util.glMatrix.vec2.squaredLength=function(a){var x=a[0],y=a[1];return x*x+y*y;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.vec2.squaredLength}
 * @function
 */BIMSURFER.Util.glMatrix.vec2.sqrLen=BIMSURFER.Util.glMatrix.vec2.squaredLength;/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.negate=function(out,a){out[0]=-a[0];out[1]=-a[1];return out;};/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.normalize=function(out,a){var x=a[0],y=a[1];var len=x*x+y*y;if(len>0){//TODO: evaluate use of glm_invsqrt here?
len=1/Math.sqrt(len);out[0]=a[0]*len;out[1]=a[1]*len;}return out;};/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */BIMSURFER.Util.glMatrix.vec2.dot=function(a,b){return a[0]*b[0]+a[1]*b[1];};/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */BIMSURFER.Util.glMatrix.vec2.cross=function(out,a,b){var z=a[0]*b[1]-a[1]*b[0];out[0]=out[1]=0;out[2]=z;return out;};/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.lerp=function(out,a,b,t){var ax=a[0],ay=a[1];out[0]=ax+t*(b[0]-ax);out[1]=ay+t*(b[1]-ay);return out;};/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.random=function(out,scale){scale=scale||1.0;var r=GLMAT_RANDOM()*2.0*Math.PI;out[0]=Math.cos(r)*scale;out[1]=Math.sin(r)*scale;return out;};/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.transformMat2=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[2]*y;out[1]=m[1]*x+m[3]*y;return out;};/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.transformMat2d=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[2]*y+m[4];out[1]=m[1]*x+m[3]*y+m[5];return out;};/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.transformMat3=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[3]*y+m[6];out[1]=m[1]*x+m[4]*y+m[7];return out;};/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */BIMSURFER.Util.glMatrix.vec2.transformMat4=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[4]*y+m[12];out[1]=m[1]*x+m[5]*y+m[13];return out;};/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each BIMSURFER.Util.glMatrix.vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */BIMSURFER.Util.glMatrix.vec2.forEach=function(){var vec=BIMSURFER.Util.glMatrix.vec2.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride=2;}if(!offset){offset=0;}if(count){l=Math.min(count*stride+offset,a.length);}else{l=a.length;}for(i=offset;i<l;i+=stride){vec[0]=a[i];vec[1]=a[i+1];fn(vec,vec,arg);a[i]=vec[0];a[i+1]=vec[1];}return a;};}();/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */BIMSURFER.Util.glMatrix.vec2.str=function(a){return'vec2('+a[0]+', '+a[1]+')';};/**
 * @class 4x4 Matrix
 * @name mat4
 */BIMSURFER.Util.glMatrix.mat4={};/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */BIMSURFER.Util.glMatrix.mat4.create=function(){var out=new GLMAT_ARRAY_TYPE(16);out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=1;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=1;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */BIMSURFER.Util.glMatrix.mat4.clone=function(a){var out=new GLMAT_ARRAY_TYPE(16);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.identity=function(out){out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=1;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=1;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.transpose=function(out,a){// If we are transposing ourselves we can skip a few steps but have to cache some values
if(out===a){var a01=a[1],a02=a[2],a03=a[3],a12=a[6],a13=a[7],a23=a[11];out[1]=a[4];out[2]=a[8];out[3]=a[12];out[4]=a01;out[6]=a[9];out[7]=a[13];out[8]=a02;out[9]=a12;out[11]=a[14];out[12]=a03;out[13]=a13;out[14]=a23;}else{out[0]=a[0];out[1]=a[4];out[2]=a[8];out[3]=a[12];out[4]=a[1];out[5]=a[5];out[6]=a[9];out[7]=a[13];out[8]=a[2];out[9]=a[6];out[10]=a[10];out[11]=a[14];out[12]=a[3];out[13]=a[7];out[14]=a[11];out[15]=a[15];}return out;};/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.invert=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,// Calculate the determinant
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;if(!det){return null;}det=1.0/det;out[0]=(a11*b11-a12*b10+a13*b09)*det;out[1]=(a02*b10-a01*b11-a03*b09)*det;out[2]=(a31*b05-a32*b04+a33*b03)*det;out[3]=(a22*b04-a21*b05-a23*b03)*det;out[4]=(a12*b08-a10*b11-a13*b07)*det;out[5]=(a00*b11-a02*b08+a03*b07)*det;out[6]=(a32*b02-a30*b05-a33*b01)*det;out[7]=(a20*b05-a22*b02+a23*b01)*det;out[8]=(a10*b10-a11*b08+a13*b06)*det;out[9]=(a01*b08-a00*b10-a03*b06)*det;out[10]=(a30*b04-a31*b02+a33*b00)*det;out[11]=(a21*b02-a20*b04-a23*b00)*det;out[12]=(a11*b07-a10*b09-a12*b06)*det;out[13]=(a00*b09-a01*b07+a02*b06)*det;out[14]=(a31*b01-a30*b03-a32*b00)*det;out[15]=(a20*b03-a21*b01+a22*b00)*det;return out;};/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.adjoint=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];out[0]=a11*(a22*a33-a23*a32)-a21*(a12*a33-a13*a32)+a31*(a12*a23-a13*a22);out[1]=-(a01*(a22*a33-a23*a32)-a21*(a02*a33-a03*a32)+a31*(a02*a23-a03*a22));out[2]=a01*(a12*a33-a13*a32)-a11*(a02*a33-a03*a32)+a31*(a02*a13-a03*a12);out[3]=-(a01*(a12*a23-a13*a22)-a11*(a02*a23-a03*a22)+a21*(a02*a13-a03*a12));out[4]=-(a10*(a22*a33-a23*a32)-a20*(a12*a33-a13*a32)+a30*(a12*a23-a13*a22));out[5]=a00*(a22*a33-a23*a32)-a20*(a02*a33-a03*a32)+a30*(a02*a23-a03*a22);out[6]=-(a00*(a12*a33-a13*a32)-a10*(a02*a33-a03*a32)+a30*(a02*a13-a03*a12));out[7]=a00*(a12*a23-a13*a22)-a10*(a02*a23-a03*a22)+a20*(a02*a13-a03*a12);out[8]=a10*(a21*a33-a23*a31)-a20*(a11*a33-a13*a31)+a30*(a11*a23-a13*a21);out[9]=-(a00*(a21*a33-a23*a31)-a20*(a01*a33-a03*a31)+a30*(a01*a23-a03*a21));out[10]=a00*(a11*a33-a13*a31)-a10*(a01*a33-a03*a31)+a30*(a01*a13-a03*a11);out[11]=-(a00*(a11*a23-a13*a21)-a10*(a01*a23-a03*a21)+a20*(a01*a13-a03*a11));out[12]=-(a10*(a21*a32-a22*a31)-a20*(a11*a32-a12*a31)+a30*(a11*a22-a12*a21));out[13]=a00*(a21*a32-a22*a31)-a20*(a01*a32-a02*a31)+a30*(a01*a22-a02*a21);out[14]=-(a00*(a11*a32-a12*a31)-a10*(a01*a32-a02*a31)+a30*(a01*a12-a02*a11));out[15]=a00*(a11*a22-a12*a21)-a10*(a01*a22-a02*a21)+a20*(a01*a12-a02*a11);return out;};/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */BIMSURFER.Util.glMatrix.mat4.determinant=function(a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;// Calculate the determinant
return b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;};/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.multiply=function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];// Cache only the current line of the second matrix
var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0]=b0*a00+b1*a10+b2*a20+b3*a30;out[1]=b0*a01+b1*a11+b2*a21+b3*a31;out[2]=b0*a02+b1*a12+b2*a22+b3*a32;out[3]=b0*a03+b1*a13+b2*a23+b3*a33;b0=b[4];b1=b[5];b2=b[6];b3=b[7];out[4]=b0*a00+b1*a10+b2*a20+b3*a30;out[5]=b0*a01+b1*a11+b2*a21+b3*a31;out[6]=b0*a02+b1*a12+b2*a22+b3*a32;out[7]=b0*a03+b1*a13+b2*a23+b3*a33;b0=b[8];b1=b[9];b2=b[10];b3=b[11];out[8]=b0*a00+b1*a10+b2*a20+b3*a30;out[9]=b0*a01+b1*a11+b2*a21+b3*a31;out[10]=b0*a02+b1*a12+b2*a22+b3*a32;out[11]=b0*a03+b1*a13+b2*a23+b3*a33;b0=b[12];b1=b[13];b2=b[14];b3=b[15];out[12]=b0*a00+b1*a10+b2*a20+b3*a30;out[13]=b0*a01+b1*a11+b2*a21+b3*a31;out[14]=b0*a02+b1*a12+b2*a22+b3*a32;out[15]=b0*a03+b1*a13+b2*a23+b3*a33;return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.mat4.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.mat4.mul=BIMSURFER.Util.glMatrix.mat4.multiply;/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.translate=function(out,a,v){var x=v[0],y=v[1],z=v[2],a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23;if(a===out){out[12]=a[0]*x+a[4]*y+a[8]*z+a[12];out[13]=a[1]*x+a[5]*y+a[9]*z+a[13];out[14]=a[2]*x+a[6]*y+a[10]*z+a[14];out[15]=a[3]*x+a[7]*y+a[11]*z+a[15];}else{a00=a[0];a01=a[1];a02=a[2];a03=a[3];a10=a[4];a11=a[5];a12=a[6];a13=a[7];a20=a[8];a21=a[9];a22=a[10];a23=a[11];out[0]=a00;out[1]=a01;out[2]=a02;out[3]=a03;out[4]=a10;out[5]=a11;out[6]=a12;out[7]=a13;out[8]=a20;out[9]=a21;out[10]=a22;out[11]=a23;out[12]=a00*x+a10*y+a20*z+a[12];out[13]=a01*x+a11*y+a21*z+a[13];out[14]=a02*x+a12*y+a22*z+a[14];out[15]=a03*x+a13*y+a23*z+a[15];}return out;};/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/BIMSURFER.Util.glMatrix.mat4.scale=function(out,a,v){var x=v[0],y=v[1],z=v[2];out[0]=a[0]*x;out[1]=a[1]*x;out[2]=a[2]*x;out[3]=a[3]*x;out[4]=a[4]*y;out[5]=a[5]*y;out[6]=a[6]*y;out[7]=a[7]*y;out[8]=a[8]*z;out[9]=a[9]*z;out[10]=a[10]*z;out[11]=a[11]*z;out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.rotate=function(out,a,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x*x+y*y+z*z),s,c,t,a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23,b00,b01,b02,b10,b11,b12,b20,b21,b22;if(Math.abs(len)<GLMAT_EPSILON){return null;}len=1/len;x*=len;y*=len;z*=len;s=Math.sin(rad);c=Math.cos(rad);t=1-c;a00=a[0];a01=a[1];a02=a[2];a03=a[3];a10=a[4];a11=a[5];a12=a[6];a13=a[7];a20=a[8];a21=a[9];a22=a[10];a23=a[11];// Construct the elements of the rotation matrix
b00=x*x*t+c;b01=y*x*t+z*s;b02=z*x*t-y*s;b10=x*y*t-z*s;b11=y*y*t+c;b12=z*y*t+x*s;b20=x*z*t+y*s;b21=y*z*t-x*s;b22=z*z*t+c;// Perform rotation-specific matrix multiplication
out[0]=a00*b00+a10*b01+a20*b02;out[1]=a01*b00+a11*b01+a21*b02;out[2]=a02*b00+a12*b01+a22*b02;out[3]=a03*b00+a13*b01+a23*b02;out[4]=a00*b10+a10*b11+a20*b12;out[5]=a01*b10+a11*b11+a21*b12;out[6]=a02*b10+a12*b11+a22*b12;out[7]=a03*b10+a13*b11+a23*b12;out[8]=a00*b20+a10*b21+a20*b22;out[9]=a01*b20+a11*b21+a21*b22;out[10]=a02*b20+a12*b21+a22*b22;out[11]=a03*b20+a13*b21+a23*b22;if(a!==out){// If the source and destination differ, copy the unchanged last row
out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}return out;};/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.rotateX=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a!==out){// If the source and destination differ, copy the unchanged rows
out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
out[4]=a10*c+a20*s;out[5]=a11*c+a21*s;out[6]=a12*c+a22*s;out[7]=a13*c+a23*s;out[8]=a20*c-a10*s;out[9]=a21*c-a11*s;out[10]=a22*c-a12*s;out[11]=a23*c-a13*s;return out;};/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.rotateY=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a!==out){// If the source and destination differ, copy the unchanged rows
out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
out[0]=a00*c-a20*s;out[1]=a01*c-a21*s;out[2]=a02*c-a22*s;out[3]=a03*c-a23*s;out[8]=a00*s+a20*c;out[9]=a01*s+a21*c;out[10]=a02*s+a22*c;out[11]=a03*s+a23*c;return out;};/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.rotateZ=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7];if(a!==out){// If the source and destination differ, copy the unchanged last row
out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
out[0]=a00*c+a10*s;out[1]=a01*c+a11*s;out[2]=a02*c+a12*s;out[3]=a03*c+a13*s;out[4]=a10*c-a00*s;out[5]=a11*c-a01*s;out[6]=a12*c-a02*s;out[7]=a13*c-a03*s;return out;};/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     BIMSURFER.Util.glMatrix.mat4.identity(dest);
 *     BIMSURFER.Util.glMatrix.mat4.translate(dest, vec);
 *     var quatMat = BIMSURFER.Util.glMatrix.mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     BIMSURFER.Util.glMatrix.mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.fromRotationTranslation=function(out,q,v){// Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;out[0]=1-(yy+zz);out[1]=xy+wz;out[2]=xz-wy;out[3]=0;out[4]=xy-wz;out[5]=1-(xx+zz);out[6]=yz+wx;out[7]=0;out[8]=xz+wy;out[9]=yz-wx;out[10]=1-(xx+yy);out[11]=0;out[12]=v[0];out[13]=v[1];out[14]=v[2];out[15]=1;return out;};/**
* Calculates a 4x4 matrix from the given quaternion
*
* @param {mat4} out mat4 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat4} out
*/BIMSURFER.Util.glMatrix.mat4.fromQuat=function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;out[0]=1-(yy+zz);out[1]=xy+wz;out[2]=xz-wy;out[3]=0;out[4]=xy-wz;out[5]=1-(xx+zz);out[6]=yz+wx;out[7]=0;out[8]=xz+wy;out[9]=yz-wx;out[10]=1-(xx+yy);out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.frustum=function(out,left,right,bottom,top,near,far){var rl=1/(right-left),tb=1/(top-bottom),nf=1/(near-far);out[0]=near*2*rl;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=near*2*tb;out[6]=0;out[7]=0;out[8]=(right+left)*rl;out[9]=(top+bottom)*tb;out[10]=(far+near)*nf;out[11]=-1;out[12]=0;out[13]=0;out[14]=far*near*2*nf;out[15]=0;return out;};/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.perspective=function(out,fovy,aspect,near,far){var f=1.0/Math.tan(fovy/2),nf=1/(near-far);out[0]=f/aspect;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=f;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=(far+near)*nf;out[11]=-1;out[12]=0;out[13]=0;out[14]=2*far*near*nf;out[15]=0;return out;};/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.ortho=function(out,left,right,bottom,top,near,far){var lr=1/(left-right),bt=1/(bottom-top),nf=1/(near-far);out[0]=-2*lr;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=-2*bt;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=2*nf;out[11]=0;out[12]=(left+right)*lr;out[13]=(top+bottom)*bt;out[14]=(far+near)*nf;out[15]=1;return out;};/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */BIMSURFER.Util.glMatrix.mat4.lookAt=function(out,eye,center,up){var x0,x1,x2,y0,y1,y2,z0,z1,z2,len,eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],centerx=center[0],centery=center[1],centerz=center[2];if(Math.abs(eyex-centerx)<GLMAT_EPSILON&&Math.abs(eyey-centery)<GLMAT_EPSILON&&Math.abs(eyez-centerz)<GLMAT_EPSILON){return BIMSURFER.Util.glMatrix.mat4.identity(out);}z0=eyex-centerx;z1=eyey-centery;z2=eyez-centerz;len=1/Math.sqrt(z0*z0+z1*z1+z2*z2);z0*=len;z1*=len;z2*=len;x0=upy*z2-upz*z1;x1=upz*z0-upx*z2;x2=upx*z1-upy*z0;len=Math.sqrt(x0*x0+x1*x1+x2*x2);if(!len){x0=0;x1=0;x2=0;}else{len=1/len;x0*=len;x1*=len;x2*=len;}y0=z1*x2-z2*x1;y1=z2*x0-z0*x2;y2=z0*x1-z1*x0;len=Math.sqrt(y0*y0+y1*y1+y2*y2);if(!len){y0=0;y1=0;y2=0;}else{len=1/len;y0*=len;y1*=len;y2*=len;}out[0]=x0;out[1]=y0;out[2]=z0;out[3]=0;out[4]=x1;out[5]=y1;out[6]=z1;out[7]=0;out[8]=x2;out[9]=y2;out[10]=z2;out[11]=0;out[12]=-(x0*eyex+x1*eyey+x2*eyez);out[13]=-(y0*eyex+y1*eyey+y2*eyez);out[14]=-(z0*eyex+z1*eyey+z2*eyez);out[15]=1;return out;};/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */BIMSURFER.Util.glMatrix.mat4.str=function(a){return'mat4('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+', '+a[4]+', '+a[5]+', '+a[6]+', '+a[7]+', '+a[8]+', '+a[9]+', '+a[10]+', '+a[11]+', '+a[12]+', '+a[13]+', '+a[14]+', '+a[15]+')';};/**
 * @class 3x3 Matrix
 * @name mat3
 */BIMSURFER.Util.glMatrix.mat3={};/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */BIMSURFER.Util.glMatrix.mat3.create=function(){var out=new GLMAT_ARRAY_TYPE(9);out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=1;out[5]=0;out[6]=0;out[7]=0;out[8]=1;return out;};/**
 * Copies the upper-left 3x3 values into the given BIMSURFER.Util.glMatrix.mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.fromMat4=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[4];out[4]=a[5];out[5]=a[6];out[6]=a[8];out[7]=a[9];out[8]=a[10];return out;};/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */BIMSURFER.Util.glMatrix.mat3.clone=function(a){var out=new GLMAT_ARRAY_TYPE(9);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];return out;};/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];return out;};/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.identity=function(out){out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=1;out[5]=0;out[6]=0;out[7]=0;out[8]=1;return out;};/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.transpose=function(out,a){// If we are transposing ourselves we can skip a few steps but have to cache some values
if(out===a){var a01=a[1],a02=a[2],a12=a[5];out[1]=a[3];out[2]=a[6];out[3]=a01;out[5]=a[7];out[6]=a02;out[7]=a12;}else{out[0]=a[0];out[1]=a[3];out[2]=a[6];out[3]=a[1];out[4]=a[4];out[5]=a[7];out[6]=a[2];out[7]=a[5];out[8]=a[8];}return out;};/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.invert=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b01=a22*a11-a12*a21,b11=-a22*a10+a12*a20,b21=a21*a10-a11*a20,// Calculate the determinant
det=a00*b01+a01*b11+a02*b21;if(!det){return null;}det=1.0/det;out[0]=b01*det;out[1]=(-a22*a01+a02*a21)*det;out[2]=(a12*a01-a02*a11)*det;out[3]=b11*det;out[4]=(a22*a00-a02*a20)*det;out[5]=(-a12*a00+a02*a10)*det;out[6]=b21*det;out[7]=(-a21*a00+a01*a20)*det;out[8]=(a11*a00-a01*a10)*det;return out;};/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.adjoint=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];out[0]=a11*a22-a12*a21;out[1]=a02*a21-a01*a22;out[2]=a01*a12-a02*a11;out[3]=a12*a20-a10*a22;out[4]=a00*a22-a02*a20;out[5]=a02*a10-a00*a12;out[6]=a10*a21-a11*a20;out[7]=a01*a20-a00*a21;out[8]=a00*a11-a01*a10;return out;};/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */BIMSURFER.Util.glMatrix.mat3.determinant=function(a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return a00*(a22*a11-a12*a21)+a01*(-a22*a10+a12*a20)+a02*(a21*a10-a11*a20);};/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.multiply=function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b00=b[0],b01=b[1],b02=b[2],b10=b[3],b11=b[4],b12=b[5],b20=b[6],b21=b[7],b22=b[8];out[0]=b00*a00+b01*a10+b02*a20;out[1]=b00*a01+b01*a11+b02*a21;out[2]=b00*a02+b01*a12+b02*a22;out[3]=b10*a00+b11*a10+b12*a20;out[4]=b10*a01+b11*a11+b12*a21;out[5]=b10*a02+b11*a12+b12*a22;out[6]=b20*a00+b21*a10+b22*a20;out[7]=b20*a01+b21*a11+b22*a21;out[8]=b20*a02+b21*a12+b22*a22;return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.mat3.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.mat3.mul=BIMSURFER.Util.glMatrix.mat3.multiply;/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.translate=function(out,a,v){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],x=v[0],y=v[1];out[0]=a00;out[1]=a01;out[2]=a02;out[3]=a10;out[4]=a11;out[5]=a12;out[6]=x*a00+y*a10+a20;out[7]=x*a01+y*a11+a21;out[8]=x*a02+y*a12+a22;return out;};/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */BIMSURFER.Util.glMatrix.mat3.rotate=function(out,a,rad){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],s=Math.sin(rad),c=Math.cos(rad);out[0]=c*a00+s*a10;out[1]=c*a01+s*a11;out[2]=c*a02+s*a12;out[3]=c*a10-s*a00;out[4]=c*a11-s*a01;out[5]=c*a12-s*a02;out[6]=a20;out[7]=a21;out[8]=a22;return out;};/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/BIMSURFER.Util.glMatrix.mat3.scale=function(out,a,v){var x=v[0],y=v[1];out[0]=x*a[0];out[1]=x*a[1];out[2]=x*a[2];out[3]=y*a[3];out[4]=y*a[4];out[5]=y*a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];return out;};/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/BIMSURFER.Util.glMatrix.mat3.fromMat2d=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=0;out[3]=a[2];out[4]=a[3];out[5]=0;out[6]=a[4];out[7]=a[5];out[8]=1;return out;};/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/BIMSURFER.Util.glMatrix.mat3.fromQuat=function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;out[0]=1-(yy+zz);out[3]=xy+wz;out[6]=xz-wy;out[1]=xy-wz;out[4]=1-(xx+zz);out[7]=yz+wx;out[2]=xz+wy;out[5]=yz-wx;out[8]=1-(xx+yy);return out;};/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/BIMSURFER.Util.glMatrix.mat3.normalFromMat4=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,// Calculate the determinant
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;if(!det){return null;}det=1.0/det;out[0]=(a11*b11-a12*b10+a13*b09)*det;out[1]=(a12*b08-a10*b11-a13*b07)*det;out[2]=(a10*b10-a11*b08+a13*b06)*det;out[3]=(a02*b10-a01*b11-a03*b09)*det;out[4]=(a00*b11-a02*b08+a03*b07)*det;out[5]=(a01*b08-a00*b10-a03*b06)*det;out[6]=(a31*b05-a32*b04+a33*b03)*det;out[7]=(a32*b02-a30*b05-a33*b01)*det;out[8]=(a30*b04-a31*b02+a33*b00)*det;return out;};/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */BIMSURFER.Util.glMatrix.mat3.str=function(a){return'mat3('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+', '+a[4]+', '+a[5]+', '+a[6]+', '+a[7]+', '+a[8]+')';};/**
 * @class 2x3 Matrix
 * @name mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx,ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0
 *  c, d, 0
 *  tx,ty,1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */BIMSURFER.Util.glMatrix.mat2d={};/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */BIMSURFER.Util.glMatrix.mat2d.create=function(){var out=new GLMAT_ARRAY_TYPE(6);out[0]=1;out[1]=0;out[2]=0;out[3]=1;out[4]=0;out[5]=0;return out;};/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */BIMSURFER.Util.glMatrix.mat2d.clone=function(a){var out=new GLMAT_ARRAY_TYPE(6);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];return out;};/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */BIMSURFER.Util.glMatrix.mat2d.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];return out;};/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */BIMSURFER.Util.glMatrix.mat2d.identity=function(out){out[0]=1;out[1]=0;out[2]=0;out[3]=1;out[4]=0;out[5]=0;return out;};/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */BIMSURFER.Util.glMatrix.mat2d.invert=function(out,a){var aa=a[0],ab=a[1],ac=a[2],ad=a[3],atx=a[4],aty=a[5];var det=aa*ad-ab*ac;if(!det){return null;}det=1.0/det;out[0]=ad*det;out[1]=-ab*det;out[2]=-ac*det;out[3]=aa*det;out[4]=(ac*aty-ad*atx)*det;out[5]=(ab*atx-aa*aty)*det;return out;};/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */BIMSURFER.Util.glMatrix.mat2d.determinant=function(a){return a[0]*a[3]-a[1]*a[2];};/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */BIMSURFER.Util.glMatrix.mat2d.multiply=function(out,a,b){var aa=a[0],ab=a[1],ac=a[2],ad=a[3],atx=a[4],aty=a[5],ba=b[0],bb=b[1],bc=b[2],bd=b[3],btx=b[4],bty=b[5];out[0]=aa*ba+ab*bc;out[1]=aa*bb+ab*bd;out[2]=ac*ba+ad*bc;out[3]=ac*bb+ad*bd;out[4]=ba*atx+bc*aty+btx;out[5]=bb*atx+bd*aty+bty;return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.mat2d.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.mat2d.mul=BIMSURFER.Util.glMatrix.mat2d.multiply;/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */BIMSURFER.Util.glMatrix.mat2d.rotate=function(out,a,rad){var aa=a[0],ab=a[1],ac=a[2],ad=a[3],atx=a[4],aty=a[5],st=Math.sin(rad),ct=Math.cos(rad);out[0]=aa*ct+ab*st;out[1]=-aa*st+ab*ct;out[2]=ac*ct+ad*st;out[3]=-ac*st+ct*ad;out[4]=ct*atx+st*aty;out[5]=ct*aty-st*atx;return out;};/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/BIMSURFER.Util.glMatrix.mat2d.scale=function(out,a,v){var vx=v[0],vy=v[1];out[0]=a[0]*vx;out[1]=a[1]*vy;out[2]=a[2]*vx;out[3]=a[3]*vy;out[4]=a[4]*vx;out[5]=a[5]*vy;return out;};/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/BIMSURFER.Util.glMatrix.mat2d.translate=function(out,a,v){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4]+v[0];out[5]=a[5]+v[1];return out;};/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */BIMSURFER.Util.glMatrix.mat2d.str=function(a){return'mat2d('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+', '+a[4]+', '+a[5]+')';};/**
 * @class 2x2 Matrix
 * @name mat2
 */BIMSURFER.Util.glMatrix.mat2={};/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */BIMSURFER.Util.glMatrix.mat2.create=function(){var out=new GLMAT_ARRAY_TYPE(4);out[0]=1;out[1]=0;out[2]=0;out[3]=1;return out;};/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */BIMSURFER.Util.glMatrix.mat2.clone=function(a){var out=new GLMAT_ARRAY_TYPE(4);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];return out;};/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];return out;};/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.identity=function(out){out[0]=1;out[1]=0;out[2]=0;out[3]=1;return out;};/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.transpose=function(out,a){// If we are transposing ourselves we can skip a few steps but have to cache some values
if(out===a){var a1=a[1];out[1]=a[2];out[2]=a1;}else{out[0]=a[0];out[1]=a[2];out[2]=a[1];out[3]=a[3];}return out;};/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.invert=function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],// Calculate the determinant
det=a0*a3-a2*a1;if(!det){return null;}det=1.0/det;out[0]=a3*det;out[1]=-a1*det;out[2]=-a2*det;out[3]=a0*det;return out;};/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.adjoint=function(out,a){// Caching this value is nessecary if out == a
var a0=a[0];out[0]=a[3];out[1]=-a[1];out[2]=-a[2];out[3]=a0;return out;};/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */BIMSURFER.Util.glMatrix.mat2.determinant=function(a){return a[0]*a[3]-a[2]*a[1];};/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.multiply=function(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3];var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0]=a0*b0+a1*b2;out[1]=a0*b1+a1*b3;out[2]=a2*b0+a3*b2;out[3]=a2*b1+a3*b3;return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.mat2.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.mat2.mul=BIMSURFER.Util.glMatrix.mat2.multiply;/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */BIMSURFER.Util.glMatrix.mat2.rotate=function(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],s=Math.sin(rad),c=Math.cos(rad);out[0]=a0*c+a1*s;out[1]=a0*-s+a1*c;out[2]=a2*c+a3*s;out[3]=a2*-s+a3*c;return out;};/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/BIMSURFER.Util.glMatrix.mat2.scale=function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],v0=v[0],v1=v[1];out[0]=a0*v0;out[1]=a1*v1;out[2]=a2*v0;out[3]=a3*v1;return out;};/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */BIMSURFER.Util.glMatrix.mat2.str=function(a){return'mat2('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+')';};/**
 * @class Quaternion
 * @name quat
 */BIMSURFER.Util.glMatrix.quat={};/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */BIMSURFER.Util.glMatrix.quat.create=function(){var out=new GLMAT_ARRAY_TYPE(4);out[0]=0;out[1]=0;out[2]=0;out[3]=1;return out;};/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.rotationTo=function(){var tmpvec3=BIMSURFER.Util.glMatrix.vec3.create();var xUnitVec3=BIMSURFER.Util.glMatrix.vec3.fromValues(1,0,0);var yUnitVec3=BIMSURFER.Util.glMatrix.vec3.fromValues(0,1,0);return function(out,a,b){var dot=BIMSURFER.Util.glMatrix.vec3.dot(a,b);if(dot<-0.999999){BIMSURFER.Util.glMatrix.vec3.cross(tmpvec3,xUnitVec3,a);if(BIMSURFER.Util.glMatrix.vec3.length(tmpvec3)<0.000001)BIMSURFER.Util.glMatrix.vec3.cross(tmpvec3,yUnitVec3,a);BIMSURFER.Util.glMatrix.vec3.normalize(tmpvec3,tmpvec3);BIMSURFER.Util.glMatrix.quat.setAxisAngle(out,tmpvec3,Math.PI);return out;}else if(dot>0.999999){out[0]=0;out[1]=0;out[2]=0;out[3]=1;return out;}else{BIMSURFER.Util.glMatrix.vec3.cross(tmpvec3,a,b);out[0]=tmpvec3[0];out[1]=tmpvec3[1];out[2]=tmpvec3[2];out[3]=1+dot;return BIMSURFER.Util.glMatrix.quat.normalize(out,out);}};}();/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.setAxes=function(){var matr=BIMSURFER.Util.glMatrix.mat3.create();return function(out,view,right,up){matr[0]=right[0];matr[3]=right[1];matr[6]=right[2];matr[1]=up[0];matr[4]=up[1];matr[7]=up[2];matr[2]=view[0];matr[5]=view[1];matr[8]=view[2];return BIMSURFER.Util.glMatrix.quat.normalize(out,BIMSURFER.Util.glMatrix.quat.fromMat3(out,matr));};}();/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */BIMSURFER.Util.glMatrix.quat.clone=BIMSURFER.Util.glMatrix.vec4.clone;/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */BIMSURFER.Util.glMatrix.quat.fromValues=BIMSURFER.Util.glMatrix.vec4.fromValues;/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.copy=BIMSURFER.Util.glMatrix.vec4.copy;/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.set=BIMSURFER.Util.glMatrix.vec4.set;/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.identity=function(out){out[0]=0;out[1]=0;out[2]=0;out[3]=1;return out;};/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/BIMSURFER.Util.glMatrix.quat.setAxisAngle=function(out,axis,rad){rad=rad*0.5;var s=Math.sin(rad);out[0]=s*axis[0];out[1]=s*axis[1];out[2]=s*axis[2];out[3]=Math.cos(rad);return out;};/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.add=BIMSURFER.Util.glMatrix.vec4.add;/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.multiply=function(out,a,b){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];out[0]=ax*bw+aw*bx+ay*bz-az*by;out[1]=ay*bw+aw*by+az*bx-ax*bz;out[2]=az*bw+aw*bz+ax*by-ay*bx;out[3]=aw*bw-ax*bx-ay*by-az*bz;return out;};/**
 * Alias for {@link BIMSURFER.Util.glMatrix.quat.multiply}
 * @function
 */BIMSURFER.Util.glMatrix.quat.mul=BIMSURFER.Util.glMatrix.quat.multiply;/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.scale=BIMSURFER.Util.glMatrix.vec4.scale;/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.rotateX=function(out,a,rad){rad*=0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=Math.sin(rad),bw=Math.cos(rad);out[0]=ax*bw+aw*bx;out[1]=ay*bw+az*bx;out[2]=az*bw-ay*bx;out[3]=aw*bw-ax*bx;return out;};/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.rotateY=function(out,a,rad){rad*=0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],by=Math.sin(rad),bw=Math.cos(rad);out[0]=ax*bw-az*by;out[1]=ay*bw+aw*by;out[2]=az*bw+ax*by;out[3]=aw*bw-ay*by;return out;};/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.rotateZ=function(out,a,rad){rad*=0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bz=Math.sin(rad),bw=Math.cos(rad);out[0]=ax*bw+ay*bz;out[1]=ay*bw-ax*bz;out[2]=az*bw+aw*bz;out[3]=aw*bw-az*bz;return out;};/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.calculateW=function(out,a){var x=a[0],y=a[1],z=a[2];out[0]=x;out[1]=y;out[2]=z;out[3]=-Math.sqrt(Math.abs(1.0-x*x-y*y-z*z));return out;};/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */BIMSURFER.Util.glMatrix.quat.dot=BIMSURFER.Util.glMatrix.vec4.dot;/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.lerp=BIMSURFER.Util.glMatrix.vec4.lerp;/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.slerp=function(out,a,b,t){// benchmarks:
//    http://jsperf.com/quaternion-slerp-implementations
var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];var omega,cosom,sinom,scale0,scale1;// calc cosine
cosom=ax*bx+ay*by+az*bz+aw*bw;// adjust signs (if necessary)
if(cosom<0.0){cosom=-cosom;bx=-bx;by=-by;bz=-bz;bw=-bw;}// calculate coefficients
if(1.0-cosom>0.000001){// standard case (slerp)
omega=Math.acos(cosom);sinom=Math.sin(omega);scale0=Math.sin((1.0-t)*omega)/sinom;scale1=Math.sin(t*omega)/sinom;}else{// "from" and "to" quaternions are very close
//  ... so we can do a linear interpolation
scale0=1.0-t;scale1=t;}// calculate final values
out[0]=scale0*ax+scale1*bx;out[1]=scale0*ay+scale1*by;out[2]=scale0*az+scale1*bz;out[3]=scale0*aw+scale1*bw;return out;};/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.invert=function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],dot=a0*a0+a1*a1+a2*a2+a3*a3,invDot=dot?1.0/dot:0;// TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
out[0]=-a0*invDot;out[1]=-a1*invDot;out[2]=-a2*invDot;out[3]=a3*invDot;return out;};/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than BIMSURFER.Util.glMatrix.quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */BIMSURFER.Util.glMatrix.quat.conjugate=function(out,a){out[0]=-a[0];out[1]=-a[1];out[2]=-a[2];out[3]=a[3];return out;};/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */BIMSURFER.Util.glMatrix.quat.length=BIMSURFER.Util.glMatrix.vec4.length;/**
 * Alias for {@link BIMSURFER.Util.glMatrix.quat.length}
 * @function
 */BIMSURFER.Util.glMatrix.quat.len=BIMSURFER.Util.glMatrix.quat.length;/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */BIMSURFER.Util.glMatrix.quat.squaredLength=BIMSURFER.Util.glMatrix.vec4.squaredLength;/**
 * Alias for {@link BIMSURFER.Util.glMatrix.quat.squaredLength}
 * @function
 */BIMSURFER.Util.glMatrix.quat.sqrLen=BIMSURFER.Util.glMatrix.quat.squaredLength;/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.normalize=BIMSURFER.Util.glMatrix.vec4.normalize;/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */BIMSURFER.Util.glMatrix.quat.fromMat3=function(out,m){// Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
// article "Quaternion Calculus and Fast Animation".
var fTrace=m[0]+m[4]+m[8];var fRoot;if(fTrace>0.0){// |w| > 1/2, may as well choose w > 1/2
fRoot=Math.sqrt(fTrace+1.0);// 2w
out[3]=0.5*fRoot;fRoot=0.5/fRoot;// 1/(4w)
out[0]=(m[7]-m[5])*fRoot;out[1]=(m[2]-m[6])*fRoot;out[2]=(m[3]-m[1])*fRoot;}else{// |w| <= 1/2
var i=0;if(m[4]>m[0])i=1;if(m[8]>m[i*3+i])i=2;var j=(i+1)%3;var k=(i+2)%3;fRoot=Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k]+1.0);out[i]=0.5*fRoot;fRoot=0.5/fRoot;out[3]=(m[k*3+j]-m[j*3+k])*fRoot;out[j]=(m[j*3+i]+m[i*3+j])*fRoot;out[k]=(m[k*3+i]+m[i*3+k])*fRoot;}return out;};/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */BIMSURFER.Util.glMatrix.quat.str=function(a){return'quat('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+')';};"use strict";/**
 * Class: BIMSURFER.Viewer
 * The viewer can load and show the BIM Models.
 */var GEOMETRY_TYPE_TRIANGLES=0;var GEOMETRY_TYPE_INSTANCE=1;BIMSURFER.Viewer=BIMSURFER.Class({CLASS:'BIMSURFER.Viewer',SYSTEM:null,connectedServers:null,div:null,mode:null,canvas:null,events:null,controls:null,lights:null,scene:null,sceneLoaded:false,bimServerApi:null,activeGeometryLoaders:[],waitingGeometryLoaders:[],tick:0,//	selectedObj: 'emtpy Selection',
//	mouseRotate: 0,
//	oldZoom: 15,
//	autoLoadPath: "",
/**
	 * @constructor
	 * @param {String|div DOMelement} div The viewport div that will be used for the canvas
	 * @param {Object} [options] An object with options for controls and/or lights
	 * @param {Boolean} autoStart Full start automatically with the given options (default = false)
	 */__construct:function __construct(bimServerApi,div,options,autoStart){this.bimServerApi=bimServerApi;if(typeof div=='string'){div=jQuery('div#'+div)[0];}if(!jQuery(div).is('div')){console.error('BIMSURFER: Can not find div element');return;}if(!BIMSURFER.Util.isset(options)){options={};}this.SYSTEM=this;this.div=div;this.events=new BIMSURFER.Events(this);this.connectedServers=new Array();this.controls=new Array();if(!BIMSURFER.Util.isset(options.controls)){this.addControl(new BIMSURFER.Control.PickFlyOrbit()).activateWhenReady();}else if(BIMSURFER.Util.isArray(options.controls)){for(var i=0;i<options.controls.length;i++){this.addControl(options.controls[i]).activateWhenReady();}}this.lights=new Array();if(typeof options.lights=='undefined'){this.addLight(new BIMSURFER.Light.Sun());this.addLight(new BIMSURFER.Light.Ambient());}else if(BIMSURFER.Util.isArray(options.lights)){for(var i=0;i<options.lights.length;i++){this.addLight(options.lights[i]);}}this.visibleTypes=new Array();if(BIMSURFER.Util.isset(options,options.autoStart)){if(!BIMSURFER.Util.isset(options.autoStart.serverUrl,options.autoStart.serverUsername,options.autoStart.serverPassword,options.autoStart.projectOid)){console.error('Some autostart parameters are missing');return;}var _this=this;var BIMServer=new BIMSURFER.Server(this,options.autoStart.serverUrl,options.autoStart.serverUsername,options.autoStart.serverPassword,false,true,true,function(){if(BIMServer.loginStatus!='loggedin'){_this.div.innerHTML='Something went wrong while connecting';console.error('Something went wrong while connecting');return;}var project=BIMServer.getProjectByOid(options.autoStart.projectOid);project.loadScene(BIMSURFER.Util.isset(options.autoStart.revisionOid)?options.autoStart.revisionOid:null,true);});}setInterval(this.startNewLoaders,200,this);},/**
	 * Stores a connection to a server for later use
	 *
	 * @param {BIMSURFER.Server instance} server The server connection to store
	 */addConnectedServer:function addConnectedServer(server){if(this.connectedServers.indexOf(server)==-1){this.connectedServers.push(server);}},/**
	 * Adds a control to the viewer.
	 *
	 * @param {BIMSURFER.Control.* instance} control The control to add
	 * @return The control object
	 */addControl:function addControl(control){if(!BIMSURFER.Util.isset(this.controls[control.CLASS])){this.controls[control.CLASS]=new Array();}if(this.controls[control.CLASS].indexOf(control)==-1){this.controls[control.CLASS].push(control);}control.setViewer(this);return control;},/**
	 * Removes a control from the viewer
	 *
	 * @param {BIMSURFER.Control.* instance} control The controle to remove
	 * @return The control object
	 */removeControl:function removeControl(control){if(BIMSURFER.Util.isArray(this.controls[control.CLASS])){var i=this.controls[control.CLASS].indexOf(control);if(i!=-1){this.controls[control.CLASS].splice(i,1);control.deactivate();control.removeFromViewer();}}return control;},getControl:function getControl(type){var controls=this.controls[type];if(controls.length>0){return controls[0];}return null;},/**
	 * Adds a light to the viewer
	 *
	 * @param {BIMSURFER.Light.* instance} light The light to add
	 * @return The light object
	 */addLight:function addLight(light){if(light.CLASS.substr(0,16)!='BIMSURFER.Light.'){return;}if(this.lights.indexOf(light)==-1){this.lights.push(light);}light.setViewer(this);if(this.scene){light.activate();}return light;},/**
	 * Resizes the viewport and updates the aspect ratio
	 *
	 * @param {Number} width The new width in px
	 * @param {Number} height The new height in px
	 */resize:function resize(width,height){if(this.canvas){jQuery(this.canvas).width(width).height(height);if(BIMSURFER.Util.isset(this.canvas[0])){this.canvas[0].width=width;this.canvas[0].height=height;}}if(this.scene!==null){var optics=this.scene.findNode('main-camera').get('optics');optics['aspect']=jQuery(this.canvas).width()/jQuery(this.canvas).height();this.scene.findNode('main-camera').set('optics',optics);}},/**
	 * Draws the HTML5 canvas element
	 *
	 * @return The canvas element
	 */drawCanvas:function drawCanvas(){var width=jQuery(this.div).width();var height=jQuery(this.div).height();if(!(width>0&&height>0)){return;}if(jQuery(this.canvas).length==1){jQuery(this.canvas).remove();}jQuery(this.div).empty();this.canvas=jQuery('<canvas />').attr('id',jQuery(this.div).attr('id')+"-canvas").attr('width',width).attr('height',height).html('<p>This application requires a browser that supports the <a href="http://www.w3.org/html/wg/html5/">HTML5</a> &lt;canvas&gt; feature.</p>').addClass(this.CLASS.replace(/\./g,"-")).appendTo(this.div);return this.canvas;},/**
	 * Initializes the common events of the viewer
	 */initEvents:function initEvents(){var _this=this;//		TouchEmulator();
var canvas=this.scene.getCanvas();//		var hammer = new Hammer(canvas, { inputClass: Hammer.TouchInput });
//
//        hammer.on('pinch', function(e) { 
//        	_this.events.trigger('touchPinch', [e]); 
//        });
//        hammer.get('pinch').set({ threshold: 0.1 });
//        hammer.get('pinch').set({ enable: true });
//
//        hammer.on('pan', function(e) { 
//        	_this.events.trigger('touchPan', [e]); 
//        });
//        hammer.get('pan').set({ pointers: 2 });
canvas.addEventListener('mousedown',function(e){_this.events.trigger('mouseDown',[e]);},true);canvas.addEventListener('mousemove',function(e){_this.events.trigger('mouseMove',[e]);},true);canvas.addEventListener('mouseup',function(e){_this.events.trigger('mouseUp',[e]);},true);canvas.addEventListener('touchstart',function(e){_this.events.trigger('touchStart',[e]);},true);canvas.addEventListener('touchmove',function(e){_this.events.trigger('touchMove',[e]);},true);canvas.addEventListener('touchend',function(e){_this.events.trigger('touchEnd',[e]);},true);canvas.addEventListener('mousewheel',function(e){_this.events.trigger('mouseWheel',[e]);},true);canvas.addEventListener('DOMMouseScroll',function(e){_this.events.trigger('mouseWheel',[e]);},true);this.scene.on('pick',function(hit){_this.events.trigger('pick',[hit]);});this.scene.on('tick',function(){_this.events.trigger('tick',[]);});var lastDown={x:null,y:null,scene:this.scene};this.events.register('mouseDown',function(e){this.x=e.offsetX;this.y=e.offsetY;},lastDown);this.events.register('mouseUp',function(e){if((e.offsetX>this.x?e.offsetX-this.x<5:this.x-e.offsetX<5)&&(e.offsetY>this.y?e.offsetY-this.y<5:this.y-e.offsetY<5)){this.scene.pick(this.x,this.y,{rayPick:true});}},lastDown);},/**
	 * Creates or updates the SceneJS Scene, based on a revision
	 *
	 * @param {BIMSURFER.ProjectRevision instance} revision The revision
	 * @param {Object} [options] An object with options to overwrite the default values
	 * @return The loaded scene
	 */loadScene:function loadScene(callback,options){SceneJS.reset();if((typeof options==="undefined"?"undefined":_typeof(options))!='object'){options={};}if(this.scene==null){try{var self=this;var CAPTURE_ID="canvasCaptureNode";var addCaptureNode=function addCaptureNode(nodes){if(options.useCapture){nodes.push({type:"canvas/capture",id:CAPTURE_ID});}return nodes;};this.scene={backfaces:false,type:"scene",nodes:[{type:'lookAt',id:'main-lookAt',eye:_typeof(options.eye)=='object'?options.eye:{x:1,y:1,z:1},look:_typeof(options.look)=='object'?options.look:{x:0.0,y:0.0,z:0.0},up:_typeof(options.up)=='object'?options.up:{x:0.0,y:0.0,z:1.0},nodes:[{nodes:addCaptureNode([{type:'camera',id:'main-camera',optics:{type:'perspective',far:typeof options.far=='number'?options.far:100,near:typeof options.near=='number'?options.near:0.001,aspect:typeof options.aspect=='number'?options.aspect:jQuery(this.canvas).width()/jQuery(this.canvas).height(),fovy:typeof options.fovy=='number'?options.fovy:37.8493},nodes:[{type:'renderer',id:'main-renderer',clear:{color:typeof options.clearColor=='boolean'?options.clearColor:true,depth:typeof options.clearDepth=='boolean'?options.clearDepth:true,stencil:typeof options.clearStencil=='boolean'?options.clearStencil:true},nodes:[{type:'lights',id:'my-lights',//										nodes: [
//											{
//											    type:"material",
//											    color:{ r:1, g:0, b:0 },
//											    nodes:[
//											        {
//											            type:"geometry/box",
//											            xSize: 100000,
//											            ySize: 1000,
//											            zSize: 1000
//											        }
//											    ]
//											},
//											{
//											    type:"material",
//											    color:{ r:0, g:1, b:0 },
//											    nodes:[
//											        {
//											            type:"geometry/box",
//											            xSize: 1000,
//											            ySize: 100000,
//											            zSize: 1000
//											        }
//											    ]
//											},
//											{
//											    type:"material",
//											    color:{ r:0, g:0, b:1 },
//											    nodes:[
//											        {
//											            type:"geometry/box",
//											            xSize: 1000,
//											            ySize: 1000,
//											            zSize: 100000
//											        }
//											    ]
//											}
//										],
lights:[]}]}]}])}]}]};this.drawCanvas();this.scene.canvasId=jQuery(this.canvas).attr('id');this.scene.id=this.scene.canvasId;this.scene=SceneJS.createScene(this.scene);var _this=this;if(options.useCapture){this.scene.getNode(CAPTURE_ID,function(node){var d;node.on("image",function(data){d.resolve(data);});_this.capture=function(options){d=jQuery.Deferred();node.capture({format:(options||{}).format||"png",width:(options||{}).width||1024,height:(options||{}).height||1024});return d;};});}this.scene.on("tick",function(){if(_this.tick%5==0){_this.activeGeometryLoaders.forEach(function(geometryLoader){geometryLoader.process();});}_this.tick++;});for(var i=0;i<this.lights.length;i++){this.lights[i].activate();}var clickSelect=new BIMSURFER.Control.ClickSelect();this.addControl(clickSelect);if(this.scene!=null){//					this.scene.set('tagMask', '^()$');
this.initEvents();this.sceneLoaded=true;}callback();}catch(error){console.error('loadScene: ',error,error.stack,this,arguments);console.debug('loadScene ERROR',error,error.stack,this,arguments);}}else{callback();}return null;},startNewLoaders:function startNewLoaders(o){if(o.waitingGeometryLoaders.length>0&&o.activeGeometryLoaders.length<3){var geometryLoader=o.waitingGeometryLoaders[0];o.waitingGeometryLoaders=o.waitingGeometryLoaders.slice(1);o.activeGeometryLoaders.push(geometryLoader);geometryLoader.progressListeners.push(function(progress){if(progress=="done"){o.tick=0;removeA(o.activeGeometryLoaders,geometryLoader);}});geometryLoader.start();}},/**
	 * Loads and shows the geometry of the revisions that are in the load queue
	 */loadGeometry:function loadGeometry(geometryLoader){var o=this;if(o.activeGeometryLoaders.length<3){o.activeGeometryLoaders.push(geometryLoader);geometryLoader.progressListeners.push(function(progress){if(progress=="done"){o.tick=0;removeA(o.activeGeometryLoaders,geometryLoader);}});geometryLoader.start();}else{o.waitingGeometryLoaders.push(geometryLoader);}},/**
	 * Hides an ifcType of a revision.
	 *
	 * @param {String} typeName The name of the type to hide
	 * @param {BIMSURFER.ProjectRevision instance} revision The revision
	 */hideType:function hideType(typeName,revision){var i=revision.visibleTypes.indexOf(typeName.toLowerCase());if(i==-1){return;}revision.visibleTypes.splice(i,1);this.refreshMask();},/**
	 * Updates the mask filter of the viewer (shows/hides the ifcTypes)
	 */refreshMask:function refreshMask(){var mask=new Array();this.visibleTypes.forEach(function(type){mask.push(type);});var tagMask='^('+mask.join('|')+')$';this.scene.set('tagMask',tagMask);this.events.trigger('tagMaskUpdated');},/**
	 * Hides all the types of a revision
	 *
	 * @param {BIMSURFER.ProjectRevision} revision The revision to hide
	 */hideRevision:function hideRevision(revision){var visibleTypes=revision.visibleTypes.slice(0);for(var i=0;i<visibleTypes.length;i++){this.hideType(visibleTypes[i],revision);}},/**
	 * Shows a revision
	 *
	 * @param {BIMSURFER.ProjectRevision} revision The revision to show
	 * @param {Array} [types] The types to show (default = BIMSURFER.Constants.defaultTypes)
	 */showRevision:function showRevision(revision,types){if(!BIMSURFER.Util.isset(types)){types=new Array();for(var i=0;i<revision.ifcTypes.length;i++){if(BIMSURFER.Constants.defaultTypes.indexOf(revision.ifcTypes[i])!=-1){types.push(revision.ifcTypes[i]);}}}this.showType(types,revision);}});"use strict";/**
 * Class: BIMSURFER.Control.ClickSelect
 * Control to select and hightlight a Scene JS by clicking on it.
 */BIMSURFER.Control.ClickSelect=BIMSURFER.Class(BIMSURFER.Control,{CLASS:"BIMSURFER.Control.ClickSelect",/**
	 * X coordinate of the last mouse event
	 */downX:null,/**
	 * Y coordinate of the last mouse event
	 */downY:null,active:false,/**
	 * The selected and highlighted SceneJS node
	 */highlighted:null,/**
	 * Timestamp of the last selection
	 */lastSelected:0,/**
	 * Constructor.
	 *
	 * @constructor
	 */__construct:function __construct(){this.events=new BIMSURFER.Events(this);},/**
	 * Activates the contol
	 */activate:function activate(){if(this.SYSTEM==null||!this.SYSTEM.sceneLoaded){console.error('Cannot activate '+this.CLASS+': Surfer or scene not ready');return null;}if(!this.active){this.active=true;this.initEvents();this.events.trigger('activated');}return this;},/**
	 * Initializes the events necessary for the operation of this control
	 *
	 * @return this
	 */initEvents:function initEvents(){if(this.active){this.SYSTEM.events.register('pick',this.pick,this);this.SYSTEM.events.register('mouseDown',this.mouseDown,this);this.SYSTEM.events.register('mouseUp',this.mouseUp,this);}else{this.SYSTEM.events.unregister('pick',this.pick,this);this.SYSTEM.events.unregister('mouseDown',this.mouseDown,this);this.SYSTEM.events.unregister('mouseUp',this.mouseUp,this);}return this;},/**
	 * Event listener
	 *
	 * @param {mouseEvent} e Mouse event
	 */mouseDown:function mouseDown(e){this.downX=e.offsetX;this.downY=e.offsetY;},/**
	 * Event listener
	 *
	 * @param {mouseEvent} e Mouse event
	 */mouseUp:function mouseUp(e){if((e.offsetX>this.downX?e.offsetX-this.downX<5:this.downX-e.offsetX<5)&&(e.offsetY>this.downY?e.offsetY-this.downY<5:this.downY-e.offsetY<5)){if(Date.now()-this.lastSelected>10){this.unselect();}}},/**
	 * Event listener
	 *
	 * @param {SceneJS.node} hit Selected SceneJS node
	 */pick:function pick(hit){this.unselect();this.highlighted=this.SYSTEM.scene.findNode(hit.nodeId);var groupId=this.highlighted.findParentByType("translate").data.groupId;var matrix=this.highlighted.nodes[0];var geometryNode=matrix.nodes[0];if(geometryNode._core.arrays.colors!=null){var geometry={type:"geometry",primitive:"triangles"};geometry.coreId=geometryNode.getCoreId()+"Highlighted";geometry.indices=geometryNode._core.arrays.indices;geometry.positions=geometryNode._core.arrays.positions;geometry.normals=geometryNode._core.arrays.normals;geometry.colors=[];for(var i=0;i<geometryNode._core.arrays.colors.length;i+=4){geometry.colors[i]=0;geometry.colors[i+1]=1;geometry.colors[i+2]=0;geometry.colors[i+3]=1;}var library=this.SYSTEM.scene.findNode("library-"+groupId);library.add("node",geometry);var newGeometry={type:"geometry",coreId:geometryNode.getCoreId()+"Highlighted"};matrix.removeNode(geometryNode);matrix.addNode(newGeometry);}this.highlighted.insert('node',BIMSURFER.Constants.highlightSelectedObject);this.lastSelected=Date.now();var o=this;window.setTimeout(function(){o.events.trigger('select',[groupId,o.highlighted]);},0);},/**
	 * Event listener
	 */unselect:function unselect(){var highlighted=this.SYSTEM.scene.findNode(BIMSURFER.Constants.highlightSelectedObject.id);if(highlighted!=null){var groupId=highlighted.findParentByType("translate").data.groupId;if(highlighted!=null){var matrix=highlighted.nodes[0];var geometryNode=matrix.nodes[0];if(geometryNode._core.arrays.colors!=null){matrix.removeNode(geometryNode);var newGeometry={type:"geometry",coreId:geometryNode.getCoreId().replace("Highlighted","")};matrix.addNode(newGeometry);}highlighted.splice();this.events.trigger('unselect',[this.highlighted==null?null:this.highlighted.findParentByType("translate").groupId,this.highlighted]);this.highlighted=null;}}}});BIMSURFER.Control.LayerList=BIMSURFER.Class(BIMSURFER.Control,{CLASS:"BIMSURFER.Control.LayerList",showCheckboxes:true,autoDraw:true,redraw:function redraw(){jQuery(this.div).empty();jQuery(this.DOMelement).remove();var controlClass=this.CLASS.replace(/\./g,"-");this.DOMelement=jQuery('<ul />').addClass(controlClass);if(this.active){jQuery(this.div).append(this.DOMelement);for(var i=0;i<this.SYSTEM.loadedProjects.length;i++){var project=this.SYSTEM.loadedProjects[i];var projectLi=jQuery('<li />').addClass(controlClass+'-Project');jQuery('<span />').addClass(controlClass+'-Project-Title').text(project.name).appendTo(projectLi);var projectUl=jQuery('<ul />').addClass(controlClass+'-Revisions').appendTo(projectLi);for(var x=0;x<project.loadedRevisions.length;x++){var revision=project.loadedRevisions[x];var revisionLi=jQuery('<li />').addClass(controlClass+'-Revision');if(project.loadedRevisions.length>1){jQuery('<span />').addClass(controlClass+'-Revision-Title').text(revision.comment).appendTo(revisionLi);}var revisionUl=jQuery('<ul />').addClass(controlClass+'-ifcTypes').appendTo(revisionLi);for(var y=0;y<revision.ifcTypes.length;y++){var ifcType=revision.ifcTypes[y];var typeLi=jQuery('<li />').addClass(controlClass+'-ifcType');var label=jQuery('<label />').addClass(controlClass+'-ifcType-Label').appendTo(typeLi);if(this.showCheckboxes){var _this=this;var checkbox=jQuery('<input />').attr('type','checkbox').attr('name',controlClass+'-'+project.oid+'-'+revision.oid+'-'+ifcType).addClass(controlClass+'-ifcType-Checkbox').data('ifcType',ifcType).data('revision',revision).change(function(){if(jQuery(this).is(':checked')){_this.SYSTEM.showType(jQuery(this).data('ifcType'),jQuery(this).data('revision'));}else{_this.SYSTEM.hideType(jQuery(this).data('ifcType'),jQuery(this).data('revision'));}});jQuery('<span />').addClass(controlClass+'-ifcType-checkboxContainer').append(checkbox).appendTo(label);if(revision.visibleTypes.indexOf(ifcType.toLowerCase())>-1){jQuery(checkbox).attr('checked','checked');}}jQuery('<span />').addClass(controlClass+'-ifcType-Name').text(ifcType).appendTo(label);jQuery(typeLi).appendTo(revisionUl);}jQuery(revisionLi).appendTo(projectUl);}jQuery(projectLi).appendTo(this.DOMelement);}}return this;},initEvents:function initEvents(){if(!this.SYSTEM){return;}if(this.active){var _this=this;this.SYSTEM.events.register('revisionSceneLoaded',function(){if(_this.autoDraw){_this.redraw();}});this.SYSTEM.events.register('tagMaskUpdated',function(){if(_this.autoDraw){_this.redraw();}});}}});BIMSURFER.Control.ObjectTreeView=BIMSURFER.Class(BIMSURFER.Control,{CLASS:"BIMSURFER.Control.ObjectTreeView",showCheckboxes:true,projectHtml:null,__construct:function __construct(div){if(typeof div=='string'){this.div=jQuery(document).find('div#'+div)[0]||null;}else if(jQuery(div).is('div')){this.div=div;}this.events=new BIMSURFER.Events(this);//this.projectHtml = '<li id="{ID}"
},redraw:function redraw(){jQuery(this.div).empty();jQuery(this.DOMelement).remove();var classIdPrefix=this.CLASS.replace(/\./g,"-");this.DOMelement=jQuery('<ul />').addClass(classIdPrefix);if(this.active){var drawRelationships=function drawRelationships(objects,relationship){if(objects==null||objects.length==0){return null;}var div=jQuery('<div />');jQuery('<span />').text(relationship).appendTo(div);var list=jQuery('<ul />').appendTo(div);for(var i=0;i<objects.length;i++){jQuery(list).append(drawObject(objects[i]));}return div;};var drawObject=function drawObject(object){var li=jQuery('<li />');var div=jQuery('<div />').appendTo(li);if(showCheckboxes){jQuery('<span />').append(jQuery('<input />').attr('type','checkbox').attr('checked','checked')).appendTo(div);}jQuery('<span />').text(object.name).appendTo(div);jQuery('<span />').text('('+object.type+')');jQuery(li).append(drawRelationships(object.decomposedBy,'Decomposed by'));jQuery(li).append(drawRelationships(object.definedBy,'Defined by'));jQuery(li).append(drawRelationships(object.contains,'Contains'));return li;};var drawProject=function drawProject(project){var projLi=jQuery('<li />').attr('id',classIdPrefix+'-project-'+project.id).addClass(+'-project');jQuery('<div />').appendTo(projLi).append(jQuery('<span />').addClass(classIdPrefix+'-project-name').text(project.name)).append(jQuery('<span />').addClass(classIdPrefix+'-project-type').text('('+project.type+')'));jQuery(projLi).append(drawRelationships(project.decomposedBy,'Decomposed by'));jQuery(projLi).append(drawRelationships(project.definedBy,'Defined by'));jQuery(projLi).append(drawRelationships(project.contains,'Contains'));return projLi;};jQuery(this.div).append(this.DOMelement);var relationships=this.SYSTEM.scene.data.relationships;var showCheckboxes=this.showCheckboxes;for(var i=0;i<this.SYSTEM.scene.data.relationships.length;i++){var project=this.SYSTEM.scene.data.relationships[i];jQuery(this.DOMelement).append(drawProject(project));/*

		ifcRelationships = function(type, rel, indent) {
			var html, obj, _i, _len;
			if ((rel != null) && rel.length > 0) {
				indent = Math.min(indent + 1, 6);
				html = "<ul class='controls-tree'>";
				html += "<div class='controls-tree-heading'><hr><h4>" + type + "</h4></div>";
				for (_i = 0, _len = rel.length; _i < _len; _i++) {
					obj = rel[_i];
					html += ifcObjectDescription(obj, indent);
				}
				return html += "</ul>";
			} else {
				return "";
			}
		};
ifcObjectDescription = function(obj, indent) {
			return "<li class='controls-tree-rel' id='" + obj.id + "'><div class='controls-tree-item'><span class='indent-" + String(indent) + "'/>"
					+ "<input type='checkbox' checked='checked'> " + obj.name + "<span class='controls-tree-postfix'>(" + obj.type + ")</span></div>"
					+ (ifcDefinedBy(obj.decomposedBy, indent)) + (ifcDefinedBy(obj.definedBy, indent)) + (ifcContains(obj.contains, indent)) + "</li>";
		};
		ifcProject = function(obj) {
			return "<li class='controls-tree-root' id='" + obj.id + "'><div class='controls-tree-item'>" + obj.name + "<span class='controls-tree-postfix'>(" + obj.type
					+ ")</span></div>" + (ifcDefinedBy(obj.decomposedBy, 0)) + (ifcDefinedBy(obj.definedBy, 0)) + (ifcContains(obj.contains, 0)) + "</li>";
		};
*/}}return this;}});"use strict";// Some helper functions to deal with the camera math: Note the these
// operate on vectors represented as JavaScript objects {x:, y:, z:} not
// arrays or typed arrays.
var vecCrossProduct=function vecCrossProduct(a,b){var r=SceneJS_math_cross3Vec3([a.x,a.y,a.z],[b.x,b.y,b.z]);return{x:r[0],y:r[1],z:r[2]};};var vecMultiplyScalar=function vecMultiplyScalar(a,m){return{x:a.x*m,y:a.y*m,z:a.z*m};};var vecSubtract=function vecSubtract(a,b){return{x:a.x-b.x,y:a.y-b.y,z:a.z-b.z};};var vecMagnitude=function vecMagnitude(v){var x=v.x,y=v.y,z=v.z;return Math.sqrt(x*x+y*y+z*z);};var vecNormalize=function vecNormalize(v){return vecMultiplyScalar(v,1/vecMagnitude(v));};var vecNegate=function vecNegate(v){return{x:-v.x,y:-v.y,z:-v.z};};var vecAdd=function vecAdd(a,b){return{x:a.x+b.x,y:a.y+b.y,z:a.z+b.z};};/**
 * Class: BIMSURFER.Control.PickFlyOrbit
 * Control to control the main camera of the scene.
 * Allows the user to pan, orbit and zoom-in.
 */BIMSURFER.Control.PickFlyOrbit=BIMSURFER.Class(BIMSURFER.Control,{CLASS:"BIMSURFER.Control.PickFlyOrbit",touching:false,orbitDragging:false,panDragging:false,orbiting:false,flying:false,panning:false,lastX:null,lastY:null,downX:null,downY:null,direction:1,yaw:0,pitch:0,zoom:0,prevZoom:0,scale:1,prevScale:1,rate:40,lookAt:null,startEye:{x:0,y:0,z:0},eye:{x:0,y:0,z:0},look:{x:0,y:0,z:0},startPivot:{x:0,y:0,z:0},endPivot:{x:0,y:0,z:0},currentPivot:{x:0,y:0,z:0},flightStartTime:null,flightDuration:null,/**
	 * Consturctor
	 *
	 * @constructor
	 * @param {object} params Options
	 */__construct:function __construct(params){this.events=new BIMSURFER.Events(this);if(BIMSURFER.Util.isset(params)){this.eye=params.eye||this.eye;this.look=params.look||this.look;this.zoom=params.zoom||this.zoom;}},/**
	 * Activates the control
	 *
	 * @return this
	 */activate:function activate(){if(this.SYSTEM==null||!this.SYSTEM.sceneLoaded){console.error('Cannot activate '+this.CLASS+': Surfer or scene not ready');return null;}this.lookAt=this.SYSTEM.scene.findNode('main-lookAt');this.eye=this.lookAt.getEye();this.startEye=this.lookAt.getEye();this.rate=Math.abs(this.eye.z)/500;this.look=this.lookAt.getLook();this.currentPivot=this.look;this.active=true;this.initEvents();this.events.trigger('activated');return this;},/**
	 * Deactivates the control
	 *
	 * @return this
	 */deactivate:function deactivate(){this.active=false;this.initEvents();this.events.trigger('deactivated');return this;},/**
	 * Initializes the events necessary for the operation of this control
	 *
	 * @return this
	 */initEvents:function initEvents(){if(this.active){this.SYSTEM.events.register('mouseDown',this.mouseDown,this);this.SYSTEM.events.register('mouseUp',this.mouseUp,this);this.SYSTEM.events.register('mouseMove',this.mouseMove,this);this.SYSTEM.events.register('mouseWheel',this.mouseWheel,this);this.SYSTEM.events.register('DOMMouseScroll',this.mouseWheel,this);this.SYSTEM.events.register('touchStart',this.touchStart,this);this.SYSTEM.events.register('touchMove',this.touchMove,this);this.SYSTEM.events.register('touchEnd',this.touchEnd,this);this.SYSTEM.events.register('pick',this.pick,this);this.SYSTEM.events.register('tick',this.tick,this);this.SYSTEM.events.register('touchPinch',this.touchPinch,this);this.SYSTEM.events.register('touchPan',this.touchPan,this);}else{this.SYSTEM.events.unregister('mouseDown',this.mouseDown,this);this.SYSTEM.events.unregister('mouseUp',this.mouseUp,this);this.SYSTEM.events.unregister('mouseMove',this.mouseMove,this);this.SYSTEM.events.unregister('mouseWheel',this.mouseWheel,this);this.SYSTEM.events.unregister('touchStart',this.touchStart,this);this.SYSTEM.events.unregister('touchMove',this.touchMove,this);this.SYSTEM.events.unregister('touchEnd',this.touchEnd,this);this.SYSTEM.events.unregister('pick',this.pick,this);this.SYSTEM.events.unregister('tick',this.tick,this);this.SYSTEM.events.unregister('touchPinch',this.touchPinch,this);this.SYSTEM.events.unregister('touchPan',this.touchPan,this);}return this;},ease:function ease(t,b,c,d){b=b||0;c=c||1;d=d||1;var ts=(t/=d)*t;var tc=ts*t;return b+c*(-1*ts*ts+4*tc+-6*ts+4*t);},lerp:function lerp(a,b,p){return a+(b-a)*p;},lerp3:function lerp3(dest,a,b,p){for(var i=0;i<3;++i){var component=String.fromCharCode('x'.charCodeAt(0)+i);dest[component]=this.lerp(a[component],b[component],p);}},updateTimer:function updateTimer(){// TODO: Use HTML5 Animation Frame
this.timeNow=+new Date();if(this.flightStartTime===null){this.flightStartTime=this.timeNow;}this.timeElapsed=this.timeNow-this.flightStartTime;this.timeElapsedNormalized=Math.min(this.timeElapsed/this.flightDuration,1.0);if(this.timeElapsed>=this.flightDuration){this.flying=false;this.flightStartTime=null;this.rotating=false;this.startYaw=this.startPitch=this.endYaw=this.endPitch=null;}},sphericalCoords:function sphericalCoords(eye){var r=vecMagnitude(eye);var phi=Math.acos(eye.z/r);var theta=Math.atan2(eye.y,eye.x);return{phi:phi,theta:theta};},/**
	 * Event listener for every SceneJS tick
	 */tick:function tick(){if(this.flying){this.updateTimer();var easedTime=this.ease(this.timeElapsedNormalized);this.lerp3(this.currentPivot,this.startPivot,this.endPivot,easedTime);// Need to rotate lookat
this.orbiting=true;if(this.rotating){this.pitch=this.lerp(this.startPitch,this.endPitch,easedTime);this.yaw=this.lerp(this.startYaw,this.endYaw,easedTime);}}if(this.orbiting){var radius=vecMagnitude(this.startEye);var phiTheta=this.sphericalCoords(this.startEye);var startPhi=phiTheta.phi;var startTheta=phiTheta.theta;var PI_2=2*Math.PI;var phi=this.pitch*BIMSURFER.Constants.camera.orbitSpeedFactor+startPhi;while(phi>PI_2){phi-=PI_2;}while(phi<0){phi+=PI_2;}if(phi>Math.PI){if(this.direction!=-1){this.direction=-1;this.lookAt.set('up',{x:0,y:0,z:-1});}}else{if(this.direction!=1){this.direction=1;this.lookAt.set('up',{x:0,y:0,z:1});}}var theta=this.yaw*BIMSURFER.Constants.camera.orbitSpeedFactor+startTheta;var x=radius*Math.sin(phi)*Math.cos(theta);var y=radius*Math.sin(phi)*Math.sin(theta);var z=radius*Math.cos(phi);var zoomX=x*this.zoom*BIMSURFER.Constants.camera.zoomSpeedFactor;var zoomY=y*this.zoom*BIMSURFER.Constants.camera.zoomSpeedFactor;var zoomZ=z*this.zoom*BIMSURFER.Constants.camera.zoomSpeedFactor;if(x>=0&&zoomX>x||x<0&&zoomX<x||y>=0&&zoomY>y||y<0&&zoomY<y||z>=0&&zoomZ>z||z<0&&zoomZ<z){this.zoom=this.prevZoom;zoomX=x*this.zoom*BIMSURFER.Constants.camera.zoomSpeedFactor;zoomY=y*this.zoom*BIMSURFER.Constants.camera.zoomSpeedFactor;zoomZ=z*this.zoom*BIMSURFER.Constants.camera.zoomSpeedFactor;}x-=zoomX;y-=zoomY;z-=zoomZ;this.prevZoom=this.zoom;x+=this.currentPivot.x;y+=this.currentPivot.y;z+=this.currentPivot.z;this.eye={x:x,y:y,z:z};// Update view transform
this.lookAt.setLook(this.currentPivot);this.lookAt.setEye(this.eye);this.orbiting=false;}if(this.panning){this.lookAt.setLook(this.currentPivot);this.lookAt.setEye(this.eye);this.panning=false;}},/**
	 * Event listener
	 *
	 * @param {SceneJS.node} hit Selected SceneJS node
	 */pick:function pick(hit){// Some plugins wrap things in this name to
// avoid them being picked, such as skyboxes
if(hit.name=="__SceneJS_dontPickMe"){return;}this.startPivot={x:this.currentPivot.x,y:this.currentPivot.y,z:this.currentPivot.z};this.endPivot={x:hit.worldPos[0],y:hit.worldPos[1],z:hit.worldPos[2]};var dif={x:this.endPivot.x-this.startPivot.x,y:this.endPivot.y-this.startPivot.y,z:this.endPivot.z-this.startPivot.z};var flightDist=Math.sqrt(dif.x*dif.x+dif.y*dif.y+dif.z*dif.z);this.flightStartTime=null;this.flightDuration=1000.0*(flightDist/15000+1);// extra seconds to ensure arrival
this.flying=true;},/**
	 * @return {Object} a structure containing eye point, view direction and up vector
	 */obtainView:function obtainView(){var eye=this.lookAt.getEye();var tgt=this.lookAt.getLook();var up=this.lookAt.getUp();var dir=vecNormalize(vecSubtract(tgt,eye));up=vecCrossProduct(vecCrossProduct(dir,up),dir);up=vecNormalize(up);return{eye:eye,dir:dir,up:up};},/**
	 * @param {Object} a structure containing eye point, view direction and up vector
	 */restoreView:function restoreView(lookat){// Set the current camera orientation as our initial one and
// transition to the new one. The lookat structure does not
// contain the distance from camera to target so the end pivot
// will be set the same distance from the camera as it is now.
var l=vecMagnitude(vecSubtract(this.eye,this.currentPivot));var cy=vecSubtract(this.eye,this.currentPivot);this.startEye={x:cy.x,y:cy.y,z:cy.z};var currentPT=this.sphericalCoords(this.startEye);var eventualPT=this.sphericalCoords(vecNegate(lookat.dir));this.endYaw=(eventualPT.theta-currentPT.theta)/BIMSURFER.Constants.camera.orbitSpeedFactor;this.endPitch=(eventualPT.phi-currentPT.phi)/BIMSURFER.Constants.camera.orbitSpeedFactor;this.rotating=true;this.startYaw=this.startPitch=this.yaw=this.pitch=0;this.zoom=this.prevZoom=0;this.startPivot={x:this.currentPivot.x,y:this.currentPivot.y,z:this.currentPivot.z};this.endPivot=vecSubtract(lookat.eye,vecNegate(vecMultiplyScalar(lookat.dir,l)));this.flightStartTime=null;this.flightDuration=1000;this.flying=true;},/**
	 * Handler for mouse and touch drag events
	 *
	 * @param {Number} x X coordinate
	 * @param {Number} y Y coordinate
	 */actionMove:function actionMove(x,y){if(this.orbitDragging){this.yaw-=(x-this.lastX)*this.direction*0.1;this.pitch-=(y-this.lastY)*0.1;this.orbiting=true;}else if(this.panDragging){var rate=this.rate;var eye=this.lookAt.getEye();var look=this.currentPivot;//var look = this.lookAt.getLook();
var up=vecNormalize(this.lookAt.getUp());var forward=vecNormalize(vecSubtract({x:look.x,y:look.y,z:look.z},{x:eye.x,y:eye.y,z:eye.z}));var axis=vecCrossProduct(up,forward);up=vecNormalize(vecCrossProduct(axis,forward));var right=vecNormalize(vecCrossProduct(forward,up));var moveX=vecMultiplyScalar(right,(x-this.lastX)*rate);var moveY=vecMultiplyScalar(up,-1*(y-this.lastY)*rate);var move=vecAdd(moveX,moveY);this.currentPivot=vecAdd({x:look.x,y:look.y,z:look.z},move);//this.look = vecAdd({ x: look.x, y: look.y, z: look.z }, move);
this.eye=vecAdd({x:eye.x,y:eye.y,z:eye.z},move);this.panning=true;}this.lastX=x;this.lastY=y;},/**
	 * Event listener
	 *
	 * @param {mouseEvent} e Mouse event
	 */mouseDown:function mouseDown(e){this.lastX=this.downX=e.offsetX;this.lastY=this.downY=e.offsetY;if(e.which==1){// Left click
this.orbitDragging=true;}if(e.which==2||e.which==3){// Middle, Right click
this.panDragging=true;e.preventDefault();e.stopPropagation();}},/**
	 * Event listener
	 *
	 * @param {mouseEvent} e Mouse event
	 */mouseUp:function mouseUp(e){this.orbitDragging=false;this.panDragging=false;if(e.which==2||e.which==3){e.preventDefault();e.stopPropagation();}},/**
	 * Event listener
	 *
	 * @param {mouseEvent} e Mouse event
	 */mouseMove:function mouseMove(e){if(!this.touching){this.actionMove(e.offsetX,e.offsetY);}},/**
	 * Event listener
	 *
	 * @param {mouseEvent} e Mouse event
	 */mouseWheel:function mouseWheel(e){var delta=0;var event=e;if(event.wheelDelta){delta=event.wheelDelta/120;if(window.opera){delta=-delta;}}else if(event.detail){delta=-event.detail/3;}if(delta){if(delta<0&&this.zoom>-25){this.zoom-=1;}else if(delta>0){this.zoom+=1;}}if(event.preventDefault){event.preventDefault();}event.preventDefault();this.orbiting=true;},/**
	 * Event listener
	 *
	 * @param {touchEvent} e Touch event
	 */touchStart:function touchStart(e){if(e.targetTouches.length==1){this.lastX=this.downX=e.targetTouches[0].clientX;this.lastY=this.downY=e.targetTouches[0].clientY;this.orbitDragging=true;this.touching=true;}},/**
	 * Event listener
	 *
	 * @param {touchEvent} e Touch event
	 */touchMove:function touchMove(e){if(e.targetTouches.length==1){this.actionMove(e.targetTouches[0].clientX,e.targetTouches[0].clientY);}},/**
	 * Event listener
	 *
	 * @param {touchEvent} e Touch event
	 */touchEnd:function touchEnd(e){if(e.targetTouches.length==1){this.orbitDragging=false;this.panDragging=false;this.touching=false;}else{this.prevScale=1;}},/**
	 * Event listener
	 *
	 * @param {touchEvent} e Touch event
	 */touchPinch:function touchPinch(e){var delta=0;var event=e;if(event.scale){this.scale=event.scale;delta=this.prevScale-this.scale;}if(delta){if(delta>0.1&&this.zoom>-25){this.zoom-=1;this.prevScale=this.scale;}else if(delta<-0.1){this.zoom+=1;this.prevScale=this.scale;}}if(event.preventDefault){event.preventDefault();}event.preventDefault();this.orbiting=true;},/**
	 * Event listener
	 *
	 * @param {touchEvent} e Touch event
	 */touchPan:function touchPan(e){this.orbitDragging=false;this.panDragging=true;this.actionMove(this.downX+e.deltaX,this.downY+e.deltaY);this.panDragging=false;}});"use strict";/**
 * Class: BIMSURFER.Control.ProgressBar
 * A progressbar can show the progress of some long running actions
 * It will register and listen to some events on the Viewer instance.
 * Other objects can trigger these events and the progressbar will show the progress.
 */BIMSURFER.Control.ProgressBar=BIMSURFER.Class(BIMSURFER.Control,{CLASS:"BIMSURFER.Control.ProgressBar",percentage:0,shownPercentage:0,message:'',animationSpeed:200,animationTimer:null,currentType:BIMSURFER.Constants.ProgressBarStyle.Continuous,marqueeImageSrc:'./images/loader.png',marqueeImage:null,marqueeSpeed:20,activate:function activate(){if(this.div&&this.SYSTEM){this.active=true;this.marqueeImage=new Image();this.marqueeImage.src=this.marqueeImageSrc;this.redraw();this.initEvents();}this.events.trigger('activated');return this;},deactivate:function deactivate(){this.active=false;this.marqueeImage=null;this.initEvents();jQuery(this.DOMelement).remove();this.DOMelement=null;this.events.trigger('deactivated');return this;},initEvents:function initEvents(){if(this.active){this.SYSTEM.events.register('progressStarted',this.start,this);// Register on global events
this.SYSTEM.events.register('progressDone',this.stop,this);// Register on global events
this.SYSTEM.events.register('progressBarStyleChanged',this.changeType,this);// Register on global events
this.SYSTEM.events.register('progressChanged',this.animateProgress,this);// Register on global events
this.SYSTEM.events.register('progressMessageChanged',this.changeMessage,this);// Register on global events
}else{this.SYSTEM.events.register('progressLoadingTypeChanged',this.animateProgress,this);// Register on global events
this.SYSTEM.events.unregister('progressChanged',this.animateProgress,this);this.SYSTEM.events.unregister('progressMessageChanged',this.changeMessage,this);}},redraw:function redraw(){jQuery(this.div).empty();jQuery(this.DOMelement).remove();this.DOMelement=jQuery('<div />').addClass(this.CLASS.replace(/\./g,"-"));if(this.active){jQuery(this.div).append(this.DOMelement);}jQuery('<div />').addClass(this.CLASS.replace(/\./g,"-")+'-progress').appendTo(this.DOMelement);jQuery('<div />').addClass(this.CLASS.replace(/\./g,"-")+'-text').appendTo(this.DOMelement).text('0%');return this;},start:function start(message){if(this.active){this.changeMessage(message);this.show();}},stop:function stop(){this.hide('slow');},changeType:function changeType(loadingType){var bar=jQuery(this.DOMelement).find('.'+this.CLASS.replace(/\./g,"-")+'-progress');var text=jQuery(this.DOMelement).find('.'+this.CLASS.replace(/\./g,"-")+'-text');switch(loadingType){case BIMSURFER.Constants.ProgressBarStyle.Continuous:if(this.animationTimer!=null){clearInterval(this.animationTimer);this.animationTimer=null;}jQuery(bar).removeAttr('style');jQuery(text).show();this.currentType=BIMSURFER.Constants.ProgressBarStyle.Continuous;break;case BIMSURFER.Constants.ProgressBarStyle.Marquee:jQuery(text).hide();var width=Math.round(jQuery(this.DOMelement).height()/this.marqueeImage.height*this.marqueeImage.width);jQuery(bar).css({'width':'100%','background-image':'url('+this.marqueeImageSrc+')','background-position':'0px 0px','background-size':width+'px '+jQuery(this.DOMelement).height()+'px'});if(this.animationTimer!=null){clearInterval(this.animationTimer);this.animationTimer=null;}var _this=this;this.animationTimer=setInterval(function(){var position=jQuery(bar).css('background-position').split('px');position=position[0];if(position>=width){position=0;}jQuery(bar).css('background-position',position/1+1+'px 0px');},this.marqueeSpeed);this.currentType=BIMSURFER.Constants.ProgressBarStyle.Marquee;break;}},setAnimationSpeed:function setAnimationSpeed(speed){this.animationSpeed=speed;return this;},changeShownProgress:function changeShownProgress(percentage){if(this.currentType!=BIMSURFER.Constants.ProgressBarStyle.Continuous){this.changeType(BIMSURFER.Constants.ProgressBarStyle.Continuous);}if(percentage>100){percentage=100;}else if(percentage<0){percentage=0;}this.shownPercentage=percentage;jQuery(this.DOMelement).find('.'+this.CLASS.replace(/\./g,"-")+'-text').text(this.shownPercentage+'%'+(this.message.length>0?' ('+this.message+')':''));return this;},animateProgress:function animateProgress(percentage){if(percentage>100){percentage=100;}else if(percentage<0){percentage=0;}if(this.animationTimer!=null){clearInterval(this.animationTimer);this.animationTimer=null;}if(this.percentage<percentage){jQuery(this.DOMelement).find('.'+this.CLASS.replace(/\./g,"-")+'-progress').stop(true,false).animate({'width':percentage+'%'},{duration:this.animationSpeed,queue:false});var _this=this;this.animationTimer=setInterval(function(){if(_this.shownPercentage==_this.percentage){clearInterval(_this.animationTimer);_this.animationTimer=null;return;}_this.changeShownProgress(_this.shownPercentage+1);},Math.floor(this.animationSpeed/(percentage-this.shownPercentage)));}else{jQuery(this.DOMelement).find('.'+this.CLASS.replace(/\./g,"-")+'-progress').stop().css('width',percentage+'%');this.changeShownProgress(percentage);}this.percentage=percentage;return this;},changeMessage:function changeMessage(message){jQuery(this.DOMelement).find('.'+this.CLASS.replace(/\./g,"-")+'-text').text(this.percentage+'%'+(message.length>0?' ('+message+')':''));this.message=message;return this;}});"use strict";/**
 * Class: BIMSURFER.Light
 * This is the base class for Light objects.
 * Lights can be used to modify the lighting in the viewer
 */BIMSURFER.Light=BIMSURFER.Class({CLASS:'BIMSURFER.Light',SYSTEM:null,lightObject:null,__construct:function __construct(){},activate:function activate(){var myLights=this.SYSTEM.scene.findNode('my-lights');var lights=myLights._core.lights;if(BIMSURFER.Util.isArray(this.lightObject)){for(var i=0;i<this.lightObject.length;i++){if(lights.indexOf(this.lightObject[i])==-1){lights.push(this.lightObject[i]);}}}else if(lights.indexOf(this.lightObject)==-1){lights.push(this.lightObject);}myLights.setLights(lights);},deactivate:function deactivate(){var myLight=this.SYSTEM.scene.findNode('my-lights');var lights=myLights._core.lights;var i=-1;if(BIMSURFER.Util.isArray(this.lightObject)){for(i=0;i<this.lightObject.length;i++){var y=lights.indexOf(this.lightObject[i]);if(y>-1){lights.splice(y,1);}}}else if(i=lights.indexOf(this.lightObject)>-1){lights.splice(i,1);}myLights.setLights(lights);},setViewer:function setViewer(viewer){this.SYSTEM=viewer;}});"use strict";/**
 * Class: BIMSURFER.Light.Ambient
 * Default ambient light
 */BIMSURFER.Light.Ambient=BIMSURFER.Class(BIMSURFER.Light,{CLASS:'BIMSURFER.Light.Ambient',__construct:function __construct(system){this.SYSTEM=system;this.lightObject=new Array({mode:"ambient",color:{r:0.3,g:0.3,b:0.3},diffuse:false,specular:false},{mode:"dir",color:{r:1.0,g:1.0,b:1.0},diffuse:true,specular:true,dir:{x:-0.5,y:-0.5,z:-1.0},space:"view"});}});"use strict";/**
 * Class: BIMSURFER.Light.Camera
 * This light will allways be behind the camera and pointed to the middle of the model
 */BIMSURFER.Light.Camera=BIMSURFER.Class(BIMSURFER.Light,{CLASS:'BIMSURFER.Light.Camera',__construct:function __construct(system){this.SYSTEM=system;this.lightObject={type:'light',id:'sun-light',mode:'dir',color:{r:1,g:1,b:1},dir:{x:-0.5,y:-0.5,z:-1.0},space:'world',diffuse:true,specular:true};}});"use strict";/**
 * Class: BIMSURFER.Light.Camera
 * This light mimics the sunlight
 */BIMSURFER.Light.Sun=BIMSURFER.Class(BIMSURFER.Light,{CLASS:'BIMSURFER.Light.Sun',__construct:function __construct(system){this.SYSTEM=system;this.lightObject={type:'light',id:'sun-light',mode:'dir',color:{r:0.8,g:0.8,b:0.8},dir:{x:-0.5,y:0.5,z:-1.0},diffuse:true,specular:true};}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./src/libs/jquery.js")))

/***/ }),

/***/ "./src/libs/jquery.js":
/*!****************************!*\
  !*** ./src/libs/jquery.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=mylib.bundle.js.map