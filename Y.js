(function(globals ){
    dome=function (selector) {
        console.log(this)
       return this.dome.prototype.get(selector);
    }

    function Dome(el){
        for(let i = 0; i < el.length; i++ ) {
            this[i]=el[i]
        }
        this.length = el.length;
    }
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
    Dome.prototype.map = function (callback) {
        var results = [], i = 0;result=[];
        for ( ; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    };
    Dome.prototype.mapOne = function (callback) {
        var m = this.map(callback);
        return m.length > 1 ? m : m[0];
    };
    Dome.prototype.forEach=function (callback) {
        this.map(callback);
        return this;
    };
    Dome.prototype. addClass =function (classes) {
        var className = "";
        if (typeof classes !== "string") {
            for (var i = 0; i < classes.length; i++) {
                className += " " + classes[i];
            }
        } else {
            className = " " + classes;
        }
        return this.forEach(function (el) {
            // console.log(el)
            el.className += className;
        });
    };
  
    Dome.prototype. removeClass =function (classes) {
        return this.forEach(function (el) {

            var cs = el.className.split(" "), i;
     
            while ( (i = cs.indexOf(classes)) > -1) { 
                cs = cs.slice(0, i).concat(cs.slice(++i));
            }
            el.className = cs.join(" ");
        }); 
    };

    Dome.prototype. attr =function (attr, val) {
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
    Dome.prototype. hide =function() {
        return this.forEach(function(el) {
            el.style.display="none";
        });
    };
    Dome.prototype. show =function () {
        return this.forEach(function(el) {
            el.style.display="bloch";
        });
    };
    Dome.prototype.text =function () {
        return this.singleTag(function(el){
            if(el.tagName==="INPUT")
            return el.value
            return el.innerText;
        });
    };
    Dome.prototype.html =function () {
        return this.singleTag(function(el){
            return el.innerHTML;
        });
    };
    Dome.prototype.value =function () {
        return this.singleTag(function(el){
            if(el.tagName!="INPUT")
            return el.innerText
            return el.value;
        });
    };
    Dome.prototype.singleTag =function (callback) {
        if(this.length>1){
            return new Error('Method cannot be called on Node or NodeList');
        }
        console.log(this)
        return callback.call(this,this[0],0);
    };
    
    if ( !globals ) {
        window.dome = window.Y = dome;
    }
    return dome;
}());
 