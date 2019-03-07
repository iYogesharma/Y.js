(function(globals ){
    dome=function (selector) {
       return this.dome.prototype.get(selector);
    }

    function Dome(el){
        for(let i = 0; i < el.length; i++ ) {
            this[i]=el[i]
        }
        this.length = el.length;
        
    }
    function get(selector) {
        var el;
        if (typeof selector === "string") {
            el = document.querySelectorAll(selector);
        } else if (selector.length) {
            el = selector;
        } else {
            el = [selector];
        }
        return new Dome(el);
    }
   
   
   
    function addClass(classes) {
        var className = "";
        if (typeof classes !== "string") {
            for (var i = 0; i < classes.length; i++) {
                className += " " + classes[i];
            }
        } else {
            className = " " + classes;
        }
        return this.forEach(function (el) {
            el.className += className;
        });
    };
    function removeClass(classes) {
        return this.forEach(function (el) {

            var cs = el.className.split(" "), i;
     
            while ( (i = cs.indexOf(classes)) > -1) { 
                cs = cs.slice(0, i).concat(cs.slice(++i));
            }
            el.className = cs.join(" ");
        }); 
    };
    function attr(attr, val) {
        if (typeof val !== "undefined") {
            return this.forEach(function(el) {
                el.setAttribute(attr, val);
            });
        } else {
            return this.mapOne(function (el) {
                return el.getAttribute(attr);
            });
        }
    };
    function hide() {
        return this.forEach(function(el) {
            el.style.display="none";
        });
    };
    function show() {
        return this.forEach(function(el) {
            el.style.display="bloch";
        });
    };
    function text() {
        return this.singleTag(function(el){
            if(el.tagName==="INPUT")
            return el.value
            return el.innerText;
        });
    };
    function html() {
        return this.singleTag(function(el){
            return el.innerHTML;
        });
    };
    function value() {
        return this.singleTag(function(el){
            if(el.tagName!="INPUT")
            return el.innerText
            return el.value;
        });
    };
    
    dome.prototype.get=function (selector) {
        var el;
        if (typeof selector === "string") {
            el = document.querySelectorAll(selector);
        } else if (selector.length) {
            el = selector;
        } else {
            el = [selector];
        }
        return new Dome(el);
    }
    Dome.prototype={
        constructor:Dome, 
        forEach: function forEach(callback) {
            this.map(callback);
            return this;
        },
        map: function map(callback) {
            var results = [], i = 0;result=[];
            for ( ; i < this.length; i++) {
                results.push(callback.call(this, this[i], i));
            }
            return results;
        },
        mapOne: function mapOne(callback) {
            var m = this.map(callback);
            return m.length > 1 ? m : m[0];
        },
        singleTag: function singleTag(callback) {
            if(this.length>1){
                return new Error('Method cannot be called on Node or NodeList');
            }
            return callback.call(this,this[0],0);
        },
        addClass:addClass,
        removeClass:removeClass,
        attr:attr,
        hide:hide,
        show:show,
        text:text,
        html:html,
        value:value
    };
    if ( !globals ) {
        window.dome = window.Y = dome;
    }
    return dome;
}());
 