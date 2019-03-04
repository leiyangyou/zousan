!function(i){"use strict";var s,c,u="fulfilled",f="undefined";var l=function(){var e=[],n=0;function r(){for(;e.length-n;){try{e[n]()}catch(t){i.console&&i.console.error(t)}e[n++]=c,1024==n&&(e.splice(0,1024),n=0)}}var o=function(){if(typeof MutationObserver===f)return typeof process!==f&&"function"==typeof process.nextTick?function(){process.nextTick(r)}:typeof setImmediate!==f?function(){setImmediate(r)}:function(){setTimeout(r,0)};var t=document.createElement("div");return new MutationObserver(r).observe(t,{attributes:!0}),function(){t.setAttribute("a",0)}}();return function(t){e.push(t),e.length-n==1&&o()}}();function n(t){if(!(this instanceof n))throw new TypeError("Zousan must be created with the new keyword");if("function"==typeof t){var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}else if(0<arguments.length)throw new TypeError("Zousan resolver "+t+" is not a function")}n.prototype=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(n.prototype,{resolve:function(n){if(this.state===s){if(n===this)return this.reject(new TypeError("Attempt to resolve promise with self"));var r=this;if(n&&("function"==typeof n||"object"==typeof n))try{var e=!0,t=n.then;if("function"==typeof t)return void t.call(n,function(t){e&&(e=!1,r.resolve(t))},function(t){e&&(e=!1,r.reject(t))})}catch(t){return void(e&&this.reject(t))}this.state=u,this.v=n,r.c&&l(function(){for(var t=0,e=r.c.length;t<e;t++)r.constructor.resolveClient(r.c[t],n)})}},reject:function(n){if(this.state===s){var r=this;this.state="rejected",this.v=n;var o=this.c;l(o?function(){for(var t=0,e=o.length;t<e;t++)r.constructor.rejectClient(o[t],n)}:function(){r.handled||!r.constructor.suppressUncaughtRejectionError&&i.console&&r.constructor.warn("You upset Zousan. Please catch rejections: ",n,n?n.stack:null)})}},then:function(t,e){var n=new this.constructor,r={y:t,n:e,p:n};if(this.state===s)this.c?this.c.push(r):this.c=[r];else{var o=this.state,i=this.v;this.handled=!0;var c=this;l(function(){o===u?c.constructor.resolveClient(r,i):c.constructor.rejectClient(r,i)})}return n},catch:function(t){return this.then(null,t)},finally:function(t){return this.then(t,t)},timeout:function(t,r){r=r||"Timeout";var o=this;return new this.constructor(function(e,n){setTimeout(function(){n(Error(r))},t),o.then(function(t){e(t)},function(t){n(t)})})}}),n.resolveClient=function(e,t){if("function"==typeof e.y)try{var n=e.y.call(c,t);e.p.resolve(n)}catch(t){e.p.reject(t)}else e.p.resolve(t)},n.rejectClient=function(e,t){if("function"==typeof e.n)try{var n=e.n.call(c,t);e.p.resolve(n)}catch(t){e.p.reject(t)}else e.p.reject(t)},n.resolve=function(t){var e=new this;return e.resolve(t),e},n.reject=function(t){var e=new this;return e.c=[],e.reject(t),e},n.all=function(n){var r=this,o=[],i=0,c=new this;function t(t,e){t&&"function"==typeof t.then||(t=r.resolve(t)),t.then(function(t){o[e]=t,++i==n.length&&c.resolve(o)},function(t){c.reject(t)})}for(var e=0;e<n.length;e++)t(n[e],e);return n.length||c.resolve(o),c},n.warn=console.warn,typeof module!=f&&module.exports&&(module.exports=n),i.define&&i.define.amd&&i.define([],function(){return n}),(i.Zousan=n).soon=l}("undefined"!=typeof global?global:this);