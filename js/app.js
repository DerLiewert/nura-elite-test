(() => {
    var __webpack_modules__ = {
        531: function(__unused_webpack_module, exports) {
            /* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
            !function(t, e) {
                true ? e(exports) : 0;
            }(0, (function(t) {
                "use strict";
                function l(t) {
                    for (var e, i, n = 1, o = arguments.length; n < o; n++) for (e in i = arguments[n]) t[e] = i[e];
                    return t;
                }
                var R = Object.create || function(t) {
                    return N.prototype = t, new N;
                };
                function N() {}
                function a(t, e) {
                    var i, n = Array.prototype.slice;
                    return t.bind ? t.bind.apply(t, n.call(arguments, 1)) : (i = n.call(arguments, 2), 
                    function() {
                        return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
                    });
                }
                var D = 0;
                function h(t) {
                    return "_leaflet_id" in t || (t._leaflet_id = ++D), t._leaflet_id;
                }
                function j(t, e, i) {
                    var n, o, s = function() {
                        n = !1, o && (r.apply(i, o), o = !1);
                    }, r = function() {
                        n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0);
                    };
                    return r;
                }
                function H(t, e, i) {
                    var n = e[1], o = (e = e[0], n - e);
                    return t === n && i ? t : ((t - e) % o + o) % o + e;
                }
                function u() {
                    return !1;
                }
                function i(t, e) {
                    return !1 === e ? t : (e = Math.pow(10, void 0 === e ? 6 : e), Math.round(t * e) / e);
                }
                function W(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                }
                function F(t) {
                    return W(t).split(/\s+/);
                }
                function c(t, e) {
                    for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? R(t.options) : {}), 
                    e) t.options[i] = e[i];
                    return t.options;
                }
                function U(t, e, i) {
                    var n, o = [];
                    for (n in t) o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
                    return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&");
                }
                var V = /\{ *([\w_ -]+) *\}/g;
                function q(t, i) {
                    return t.replace(V, (function(t, e) {
                        e = i[e];
                        if (void 0 === e) throw new Error("No value provided for variable " + t);
                        return e = "function" == typeof e ? e(i) : e;
                    }));
                }
                var d = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                };
                function G(t, e) {
                    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
                    return -1;
                }
                var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                function Y(t) {
                    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
                }
                var X = 0;
                function J(t) {
                    var e = +new Date, i = Math.max(0, 16 - (e - X));
                    return X = e + i, window.setTimeout(t, i);
                }
                var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J, Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function(t) {
                    window.clearTimeout(t);
                };
                function x(t, e, i) {
                    if (!i || $ !== J) return $.call(window, a(t, e));
                    t.call(e);
                }
                function r(t) {
                    t && Q.call(window, t);
                }
                var tt = {
                    __proto__: null,
                    extend: l,
                    create: R,
                    bind: a,
                    get lastId() {
                        return D;
                    },
                    stamp: h,
                    throttle: j,
                    wrapNum: H,
                    falseFn: u,
                    formatNum: i,
                    trim: W,
                    splitWords: F,
                    setOptions: c,
                    getParamString: U,
                    template: q,
                    isArray: d,
                    indexOf: G,
                    emptyImageUrl: K,
                    requestFn: $,
                    cancelFn: Q,
                    requestAnimFrame: x,
                    cancelAnimFrame: r
                };
                function et() {}
                et.extend = function(t) {
                    function e() {
                        c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
                    }
                    var i, n = e.__super__ = this.prototype, o = R(n);
                    for (i in (o.constructor = e).prototype = o, this) Object.prototype.hasOwnProperty.call(this, i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
                    if (t.statics && l(e, t.statics), t.includes) {
                        var s = t.includes;
                        if ("undefined" != typeof L && L && L.Mixin) {
                            s = d(s) ? s : [ s ];
                            for (var r = 0; r < s.length; r++) s[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack);
                        }
                        l.apply(null, [ o ].concat(t.includes));
                    }
                    return l(o, t), delete o.statics, delete o.includes, o.options && (o.options = n.options ? R(n.options) : {}, 
                    l(o.options, t.options)), o._initHooks = [], o.callInitHooks = function() {
                        if (!this._initHooksCalled) {
                            n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                            for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this);
                        }
                    }, e;
                }, et.include = function(t) {
                    var e = this.prototype.options;
                    return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), 
                    this;
                }, et.mergeOptions = function(t) {
                    return l(this.prototype.options, t), this;
                }, et.addInitHook = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1), i = "function" == typeof t ? t : function() {
                        this[t].apply(this, e);
                    };
                    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), 
                    this;
                };
                var e = {
                    on: function(t, e, i) {
                        if ("object" == typeof t) for (var n in t) this._on(n, t[n], e); else for (var o = 0, s = (t = F(t)).length; o < s; o++) this._on(t[o], e, i);
                        return this;
                    },
                    off: function(t, e, i) {
                        if (arguments.length) if ("object" == typeof t) for (var n in t) this._off(n, t[n], e); else {
                            t = F(t);
                            for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++) o ? this._off(t[s]) : this._off(t[s], e, i);
                        } else delete this._events;
                        return this;
                    },
                    _on: function(t, e, i, n) {
                        "function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 === this._listens(t, e, i) && (e = {
                            fn: e,
                            ctx: i = i === this ? void 0 : i
                        }, n && (e.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], 
                        this._events[t].push(e));
                    },
                    _off: function(t, e, i) {
                        var n, o, s;
                        if (this._events && (n = this._events[t])) if (1 === arguments.length) {
                            if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = u;
                            delete this._events[t];
                        } else "function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 !== (e = this._listens(t, e, i)) && (i = n[e], 
                        this._firingCount && (i.fn = u, this._events[t] = n = n.slice()), n.splice(e, 1));
                    },
                    fire: function(t, e, i) {
                        if (this.listens(t, i)) {
                            var n = l({}, e, {
                                type: t,
                                target: this,
                                sourceTarget: e && e.sourceTarget || this
                            });
                            if (this._events) {
                                var o = this._events[t];
                                if (o) {
                                    this._firingCount = this._firingCount + 1 || 1;
                                    for (var s = 0, r = o.length; s < r; s++) {
                                        var a = o[s], h = a.fn;
                                        a.once && this.off(t, h, a.ctx), h.call(a.ctx || this, n);
                                    }
                                    this._firingCount--;
                                }
                            }
                            i && this._propagateEvent(n);
                        }
                        return this;
                    },
                    listens: function(t, e, i, n) {
                        "string" != typeof t && console.warn('"string" type argument expected');
                        var o = e, s = ("function" != typeof e && (n = !!e, i = o = void 0), this._events && this._events[t]);
                        if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
                        if (n) for (var r in this._eventParents) if (this._eventParents[r].listens(t, e, i, n)) return !0;
                        return !1;
                    },
                    _listens: function(t, e, i) {
                        if (this._events) {
                            var n = this._events[t] || [];
                            if (!e) return !!n.length;
                            i === this && (i = void 0);
                            for (var o = 0, s = n.length; o < s; o++) if (n[o].fn === e && n[o].ctx === i) return o;
                        }
                        return !1;
                    },
                    once: function(t, e, i) {
                        if ("object" == typeof t) for (var n in t) this._on(n, t[n], e, !0); else for (var o = 0, s = (t = F(t)).length; o < s; o++) this._on(t[o], e, i, !0);
                        return this;
                    },
                    addEventParent: function(t) {
                        return this._eventParents = this._eventParents || {}, this._eventParents[h(t)] = t, 
                        this;
                    },
                    removeEventParent: function(t) {
                        return this._eventParents && delete this._eventParents[h(t)], this;
                    },
                    _propagateEvent: function(t) {
                        for (var e in this._eventParents) this._eventParents[e].fire(t.type, l({
                            layer: t.target,
                            propagatedFrom: t.target
                        }, t), !0);
                    }
                }, it = (e.addEventListener = e.on, e.removeEventListener = e.clearAllEventListeners = e.off, 
                e.addOneTimeEventListener = e.once, e.fireEvent = e.fire, e.hasEventListeners = e.listens, 
                et.extend(e));
                function p(t, e, i) {
                    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
                }
                var nt = Math.trunc || function(t) {
                    return 0 < t ? Math.floor(t) : Math.ceil(t);
                };
                function m(t, e, i) {
                    return t instanceof p ? t : d(t) ? new p(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new p(t.x, t.y) : new p(t, e, i);
                }
                function f(t, e) {
                    if (t) for (var i = e ? [ t, e ] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
                }
                function _(t, e) {
                    return !t || t instanceof f ? t : new f(t, e);
                }
                function s(t, e) {
                    if (t) for (var i = e ? [ t, e ] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
                }
                function g(t, e) {
                    return t instanceof s ? t : new s(t, e);
                }
                function v(t, e, i) {
                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                    this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i);
                }
                function w(t, e, i) {
                    return t instanceof v ? t : d(t) && "object" != typeof t[0] ? 3 === t.length ? new v(t[0], t[1], t[2]) : 2 === t.length ? new v(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new v(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new v(t, e, i);
                }
                p.prototype = {
                    clone: function() {
                        return new p(this.x, this.y);
                    },
                    add: function(t) {
                        return this.clone()._add(m(t));
                    },
                    _add: function(t) {
                        return this.x += t.x, this.y += t.y, this;
                    },
                    subtract: function(t) {
                        return this.clone()._subtract(m(t));
                    },
                    _subtract: function(t) {
                        return this.x -= t.x, this.y -= t.y, this;
                    },
                    divideBy: function(t) {
                        return this.clone()._divideBy(t);
                    },
                    _divideBy: function(t) {
                        return this.x /= t, this.y /= t, this;
                    },
                    multiplyBy: function(t) {
                        return this.clone()._multiplyBy(t);
                    },
                    _multiplyBy: function(t) {
                        return this.x *= t, this.y *= t, this;
                    },
                    scaleBy: function(t) {
                        return new p(this.x * t.x, this.y * t.y);
                    },
                    unscaleBy: function(t) {
                        return new p(this.x / t.x, this.y / t.y);
                    },
                    round: function() {
                        return this.clone()._round();
                    },
                    _round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
                    },
                    floor: function() {
                        return this.clone()._floor();
                    },
                    _floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
                    },
                    ceil: function() {
                        return this.clone()._ceil();
                    },
                    _ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
                    },
                    trunc: function() {
                        return this.clone()._trunc();
                    },
                    _trunc: function() {
                        return this.x = nt(this.x), this.y = nt(this.y), this;
                    },
                    distanceTo: function(t) {
                        var e = (t = m(t)).x - this.x;
                        t = t.y - this.y;
                        return Math.sqrt(e * e + t * t);
                    },
                    equals: function(t) {
                        return (t = m(t)).x === this.x && t.y === this.y;
                    },
                    contains: function(t) {
                        return t = m(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
                    },
                    toString: function() {
                        return "Point(" + i(this.x) + ", " + i(this.y) + ")";
                    }
                }, f.prototype = {
                    extend: function(t) {
                        var e, i;
                        if (t) {
                            if (t instanceof p || "number" == typeof t[0] || "x" in t) e = i = m(t); else if (e = (t = _(t)).min, 
                            i = t.max, !e || !i) return this;
                            this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), 
                            this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(), 
                            this.max = i.clone());
                        }
                        return this;
                    },
                    getCenter: function(t) {
                        return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
                    },
                    getBottomLeft: function() {
                        return m(this.min.x, this.max.y);
                    },
                    getTopRight: function() {
                        return m(this.max.x, this.min.y);
                    },
                    getTopLeft: function() {
                        return this.min;
                    },
                    getBottomRight: function() {
                        return this.max;
                    },
                    getSize: function() {
                        return this.max.subtract(this.min);
                    },
                    contains: function(t) {
                        var e, i;
                        return (t = ("number" == typeof t[0] || t instanceof p ? m : _)(t)) instanceof f ? (e = t.min, 
                        i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
                    },
                    intersects: function(t) {
                        t = _(t);
                        var e = this.min, i = this.max, n = t.min, o = (t = t.max, t.x >= e.x && n.x <= i.x);
                        t = t.y >= e.y && n.y <= i.y;
                        return o && t;
                    },
                    overlaps: function(t) {
                        t = _(t);
                        var e = this.min, i = this.max, n = t.min, o = (t = t.max, t.x > e.x && n.x < i.x);
                        t = t.y > e.y && n.y < i.y;
                        return o && t;
                    },
                    isValid: function() {
                        return !(!this.min || !this.max);
                    },
                    pad: function(t) {
                        var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t;
                        t = Math.abs(e.y - i.y) * t;
                        return _(m(e.x - n, e.y - t), m(i.x + n, i.y + t));
                    },
                    equals: function(t) {
                        return !!t && (t = _(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
                    }
                }, s.prototype = {
                    extend: function(t) {
                        var e, i, n = this._southWest, o = this._northEast;
                        if (t instanceof v) i = e = t; else {
                            if (!(t instanceof s)) return t ? this.extend(w(t) || g(t)) : this;
                            if (e = t._southWest, i = t._northEast, !e || !i) return this;
                        }
                        return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), 
                        o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new v(e.lat, e.lng), 
                        this._northEast = new v(i.lat, i.lng)), this;
                    },
                    pad: function(t) {
                        var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t;
                        t = Math.abs(e.lng - i.lng) * t;
                        return new s(new v(e.lat - n, e.lng - t), new v(i.lat + n, i.lng + t));
                    },
                    getCenter: function() {
                        return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
                    },
                    getSouthWest: function() {
                        return this._southWest;
                    },
                    getNorthEast: function() {
                        return this._northEast;
                    },
                    getNorthWest: function() {
                        return new v(this.getNorth(), this.getWest());
                    },
                    getSouthEast: function() {
                        return new v(this.getSouth(), this.getEast());
                    },
                    getWest: function() {
                        return this._southWest.lng;
                    },
                    getSouth: function() {
                        return this._southWest.lat;
                    },
                    getEast: function() {
                        return this._northEast.lng;
                    },
                    getNorth: function() {
                        return this._northEast.lat;
                    },
                    contains: function(t) {
                        t = ("number" == typeof t[0] || t instanceof v || "lat" in t ? w : g)(t);
                        var e, i, n = this._southWest, o = this._northEast;
                        return t instanceof s ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, 
                        e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng;
                    },
                    intersects: function(t) {
                        t = g(t);
                        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = (t = t.getNorthEast(), 
                        t.lat >= e.lat && n.lat <= i.lat);
                        t = t.lng >= e.lng && n.lng <= i.lng;
                        return o && t;
                    },
                    overlaps: function(t) {
                        t = g(t);
                        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = (t = t.getNorthEast(), 
                        t.lat > e.lat && n.lat < i.lat);
                        t = t.lng > e.lng && n.lng < i.lng;
                        return o && t;
                    },
                    toBBoxString: function() {
                        return [ this.getWest(), this.getSouth(), this.getEast(), this.getNorth() ].join(",");
                    },
                    equals: function(t, e) {
                        return !!t && (t = g(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
                    },
                    isValid: function() {
                        return !(!this._southWest || !this._northEast);
                    }
                };
                var ot = {
                    latLngToPoint: function(t, e) {
                        t = this.projection.project(t), e = this.scale(e);
                        return this.transformation._transform(t, e);
                    },
                    pointToLatLng: function(t, e) {
                        e = this.scale(e), t = this.transformation.untransform(t, e);
                        return this.projection.unproject(t);
                    },
                    project: function(t) {
                        return this.projection.project(t);
                    },
                    unproject: function(t) {
                        return this.projection.unproject(t);
                    },
                    scale: function(t) {
                        return 256 * Math.pow(2, t);
                    },
                    zoom: function(t) {
                        return Math.log(t / 256) / Math.LN2;
                    },
                    getProjectedBounds: function(t) {
                        var e;
                        return this.infinite ? null : (e = this.projection.bounds, t = this.scale(t), new f(this.transformation.transform(e.min, t), this.transformation.transform(e.max, t)));
                    },
                    infinite: !(v.prototype = {
                        equals: function(t, e) {
                            return !!t && (t = w(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e));
                        },
                        toString: function(t) {
                            return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")";
                        },
                        distanceTo: function(t) {
                            return st.distance(this, w(t));
                        },
                        wrap: function() {
                            return st.wrapLatLng(this);
                        },
                        toBounds: function(t) {
                            t = 180 * t / 40075017;
                            var e = t / Math.cos(Math.PI / 180 * this.lat);
                            return g([ this.lat - t, this.lng - e ], [ this.lat + t, this.lng + e ]);
                        },
                        clone: function() {
                            return new v(this.lat, this.lng, this.alt);
                        }
                    }),
                    wrapLatLng: function(t) {
                        var e = this.wrapLng ? H(t.lng, this.wrapLng, !0) : t.lng;
                        return new v(this.wrapLat ? H(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
                    },
                    wrapLatLngBounds: function(t) {
                        var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat;
                        e = e.lng - i.lng;
                        return 0 == n && 0 == e ? t : (i = t.getSouthWest(), t = t.getNorthEast(), new s(new v(i.lat - n, i.lng - e), new v(t.lat - n, t.lng - e)));
                    }
                }, st = l({}, ot, {
                    wrapLng: [ -180, 180 ],
                    R: 6371e3,
                    distance: function(t, e) {
                        var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, s = Math.sin((e.lat - t.lat) * i / 2);
                        e = Math.sin((e.lng - t.lng) * i / 2), t = s * s + Math.cos(n) * Math.cos(o) * e * e, 
                        i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
                        return this.R * i;
                    }
                }), rt = 6378137;
                rt = {
                    R: rt,
                    MAX_LATITUDE: 85.0511287798,
                    project: function(t) {
                        var e = Math.PI / 180, i = this.MAX_LATITUDE;
                        i = Math.max(Math.min(i, t.lat), -i), i = Math.sin(i * e);
                        return new p(this.R * t.lng * e, this.R * Math.log((1 + i) / (1 - i)) / 2);
                    },
                    unproject: function(t) {
                        var e = 180 / Math.PI;
                        return new v((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
                    },
                    bounds: new f([ -(rt *= Math.PI), -rt ], [ rt, rt ])
                };
                function at(t, e, i, n) {
                    d(t) ? (this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3]) : (this._a = t, 
                    this._b = e, this._c = i, this._d = n);
                }
                function ht(t, e, i, n) {
                    return new at(t, e, i, n);
                }
                at.prototype = {
                    transform: function(t, e) {
                        return this._transform(t.clone(), e);
                    },
                    _transform: function(t, e) {
                        return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), 
                        t;
                    },
                    untransform: function(t, e) {
                        return new p((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c);
                    }
                };
                var lt = l({}, st, {
                    code: "EPSG:3857",
                    projection: rt,
                    transformation: ht(lt = .5 / (Math.PI * rt.R), .5, -lt, .5)
                }), ut = l({}, lt, {
                    code: "EPSG:900913"
                });
                function ct(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t);
                }
                function dt(t, e) {
                    for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
                        for (i = 0, n = (o = t[a]).length; i < n; i++) r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
                        r += e ? b.svg ? "z" : "x" : "";
                    }
                    return r || "M0 0";
                }
                var _t = document.documentElement.style, pt = "ActiveXObject" in window, mt = pt && !document.addEventListener, n = "msLaunchUri" in navigator && !("documentMode" in document), ft = y("webkit"), gt = y("android"), vt = y("android 2") || y("android 3"), yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), xt = (yt = gt && y("Google") && yt < 537 && !("AudioNode" in window), 
                !!window.opera), wt = !n && y("chrome"), bt = y("gecko") && !ft && !xt && !pt, Pt = !wt && y("safari"), Lt = y("phantom"), o = "OTransition" in _t, Tt = 0 === navigator.platform.indexOf("Win"), Mt = pt && "transition" in _t, zt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !vt, Ct = (_t = "MozPerspective" in _t, 
                !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt), Zt = "undefined" != typeof orientation || y("mobile"), St = Zt && ft, Et = Zt && zt, kt = !window.PointerEvent && window.MSPointerEvent, Ot = !(!window.PointerEvent && !kt), At = "ontouchstart" in window || !!window.TouchEvent, Bt = !window.L_NO_TOUCH && (At || Ot), It = Zt && xt, Rt = Zt && bt, Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Dt = function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0;
                            }
                        });
                        window.addEventListener("testPassiveEventSupport", u, e), window.removeEventListener("testPassiveEventSupport", u, e);
                    } catch (t) {}
                    return t;
                }(), jt = !!document.createElement("canvas").getContext, Ht = !(!document.createElementNS || !ct("svg").createSVGRect), Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>", 
                "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));
                function y(t) {
                    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
                }
                var b = {
                    ie: pt,
                    ielt9: mt,
                    edge: n,
                    webkit: ft,
                    android: gt,
                    android23: vt,
                    androidStock: yt,
                    opera: xt,
                    chrome: wt,
                    gecko: bt,
                    safari: Pt,
                    phantom: Lt,
                    opera12: o,
                    win: Tt,
                    ie3d: Mt,
                    webkit3d: zt,
                    gecko3d: _t,
                    any3d: Ct,
                    mobile: Zt,
                    mobileWebkit: St,
                    mobileWebkit3d: Et,
                    msPointer: kt,
                    pointer: Ot,
                    touch: Bt,
                    touchNative: At,
                    mobileOpera: It,
                    mobileGecko: Rt,
                    retina: Nt,
                    passiveEvents: Dt,
                    canvas: jt,
                    svg: Ht,
                    vml: !Ht && function() {
                        try {
                            var t = document.createElement("div"), e = (t.innerHTML = '<v:shape adj="1"/>', 
                            t.firstChild);
                            return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj;
                        } catch (t) {
                            return !1;
                        }
                    }(),
                    inlineSvg: Wt,
                    mac: 0 === navigator.platform.indexOf("Mac"),
                    linux: 0 === navigator.platform.indexOf("Linux")
                }, Ft = b.msPointer ? "MSPointerDown" : "pointerdown", Ut = b.msPointer ? "MSPointerMove" : "pointermove", Vt = b.msPointer ? "MSPointerUp" : "pointerup", qt = b.msPointer ? "MSPointerCancel" : "pointercancel", Gt = {
                    touchstart: Ft,
                    touchmove: Ut,
                    touchend: Vt,
                    touchcancel: qt
                }, Kt = {
                    touchstart: function(t, e) {
                        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && O(e);
                        ee(t, e);
                    },
                    touchmove: ee,
                    touchend: ee,
                    touchcancel: ee
                }, Yt = {}, Xt = !1;
                function Jt(t, e, i) {
                    return "touchstart" !== e || Xt || (document.addEventListener(Ft, $t, !0), document.addEventListener(Ut, Qt, !0), 
                    document.addEventListener(Vt, te, !0), document.addEventListener(qt, te, !0), Xt = !0), 
                    Kt[e] ? (i = Kt[e].bind(this, i), t.addEventListener(Gt[e], i, !1), i) : (console.warn("wrong event specified:", e), 
                    u);
                }
                function $t(t) {
                    Yt[t.pointerId] = t;
                }
                function Qt(t) {
                    Yt[t.pointerId] && (Yt[t.pointerId] = t);
                }
                function te(t) {
                    delete Yt[t.pointerId];
                }
                function ee(t, e) {
                    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
                        for (var i in e.touches = [], Yt) e.touches.push(Yt[i]);
                        e.changedTouches = [ e ], t(e);
                    }
                }
                var ie = 200;
                function ne(t, i) {
                    t.addEventListener("dblclick", i);
                    var n, o = 0;
                    function e(t) {
                        var e;
                        1 !== t.detail ? n = t.detail : "mouse" === t.pointerType || t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents || (e = Ne(t)).some((function(t) {
                            return t instanceof HTMLLabelElement && t.attributes.for;
                        })) && !e.some((function(t) {
                            return t instanceof HTMLInputElement || t instanceof HTMLSelectElement;
                        })) || ((e = Date.now()) - o <= ie ? 2 === ++n && i(function(t) {
                            var e, i, n = {};
                            for (i in t) e = t[i], n[i] = e && e.bind ? e.bind(t) : e;
                            return (t = n).type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, 
                            n;
                        }(t)) : n = 1, o = e);
                    }
                    return t.addEventListener("click", e), {
                        dblclick: i,
                        simDblclick: e
                    };
                }
                var oe, se, re, ae, he, le, ue = we([ "transform", "webkitTransform", "OTransform", "MozTransform", "msTransform" ]), ce = we([ "webkitTransition", "transition", "OTransition", "MozTransition", "msTransition" ]), de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
                function _e(t) {
                    return "string" == typeof t ? document.getElementById(t) : t;
                }
                function pe(t, e) {
                    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
                    return "auto" === (i = i && "auto" !== i || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i;
                }
                function P(t, e, i) {
                    t = document.createElement(t);
                    return t.className = e || "", i && i.appendChild(t), t;
                }
                function T(t) {
                    var e = t.parentNode;
                    e && e.removeChild(t);
                }
                function me(t) {
                    for (;t.firstChild; ) t.removeChild(t.firstChild);
                }
                function fe(t) {
                    var e = t.parentNode;
                    e && e.lastChild !== t && e.appendChild(t);
                }
                function ge(t) {
                    var e = t.parentNode;
                    e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
                }
                function ve(t, e) {
                    return void 0 !== t.classList ? t.classList.contains(e) : 0 < (t = xe(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t);
                }
                function M(t, e) {
                    var i;
                    if (void 0 !== t.classList) for (var n = F(e), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]); else ve(t, e) || ye(t, ((i = xe(t)) ? i + " " : "") + e);
                }
                function z(t, e) {
                    void 0 !== t.classList ? t.classList.remove(e) : ye(t, W((" " + xe(t) + " ").replace(" " + e + " ", " ")));
                }
                function ye(t, e) {
                    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e;
                }
                function xe(t) {
                    return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal;
                }
                function C(t, e) {
                    if ("opacity" in t.style) t.style.opacity = e; else if ("filter" in t.style) {
                        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
                        try {
                            i = t.filters.item(n);
                        } catch (t) {
                            if (1 === e) return;
                        }
                        e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
                    }
                }
                function we(t) {
                    for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
                    return !1;
                }
                function be(t, e, i) {
                    e = e || new p(0, 0);
                    t.style[ue] = (b.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "");
                }
                function Z(t, e) {
                    t._leaflet_pos = e, b.any3d ? be(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
                }
                function Pe(t) {
                    return t._leaflet_pos || new p(0, 0);
                }
                function Le() {
                    S(window, "dragstart", O);
                }
                function Te() {
                    k(window, "dragstart", O);
                }
                function Me(t) {
                    for (;-1 === t.tabIndex; ) t = t.parentNode;
                    t.style && (ze(), le = (he = t).style.outlineStyle, t.style.outlineStyle = "none", 
                    S(window, "keydown", ze));
                }
                function ze() {
                    he && (he.style.outlineStyle = le, le = he = void 0, k(window, "keydown", ze));
                }
                function Ce(t) {
                    for (;!((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); ) ;
                    return t;
                }
                function Ze(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        x: e.width / t.offsetWidth || 1,
                        y: e.height / t.offsetHeight || 1,
                        boundingClientRect: e
                    };
                }
                ae = "onselectstart" in document ? (re = function() {
                    S(window, "selectstart", O);
                }, function() {
                    k(window, "selectstart", O);
                }) : (se = we([ "userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect" ]), 
                re = function() {
                    var t;
                    se && (t = document.documentElement.style, oe = t[se], t[se] = "none");
                }, function() {
                    se && (document.documentElement.style[se] = oe, oe = void 0);
                });
                pt = {
                    __proto__: null,
                    TRANSFORM: ue,
                    TRANSITION: ce,
                    TRANSITION_END: de,
                    get: _e,
                    getStyle: pe,
                    create: P,
                    remove: T,
                    empty: me,
                    toFront: fe,
                    toBack: ge,
                    hasClass: ve,
                    addClass: M,
                    removeClass: z,
                    setClass: ye,
                    getClass: xe,
                    setOpacity: C,
                    testProp: we,
                    setTransform: be,
                    setPosition: Z,
                    getPosition: Pe,
                    get disableTextSelection() {
                        return re;
                    },
                    get enableTextSelection() {
                        return ae;
                    },
                    disableImageDrag: Le,
                    enableImageDrag: Te,
                    preventOutline: Me,
                    restoreOutline: ze,
                    getSizedParentNode: Ce,
                    getScale: Ze
                };
                function S(t, e, i, n) {
                    if (e && "object" == typeof e) for (var o in e) ke(t, o, e[o], i); else for (var s = 0, r = (e = F(e)).length; s < r; s++) ke(t, e[s], i, n);
                    return this;
                }
                var E = "_leaflet_events";
                function k(t, e, i, n) {
                    if (1 === arguments.length) Se(t), delete t[E]; else if (e && "object" == typeof e) for (var o in e) Oe(t, o, e[o], i); else if (e = F(e), 
                    2 === arguments.length) Se(t, (function(t) {
                        return -1 !== G(e, t);
                    })); else for (var s = 0, r = e.length; s < r; s++) Oe(t, e[s], i, n);
                    return this;
                }
                function Se(t, e) {
                    for (var i in t[E]) {
                        var n = i.split(/\d/)[0];
                        e && !e(n) || Oe(t, n, null, null, i);
                    }
                }
                var Ee = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    wheel: !("onwheel" in window) && "mousewheel"
                };
                function ke(e, t, i, n) {
                    var o, s, r = t + h(i) + (n ? "_" + h(n) : "");
                    e[E] && e[E][r] || (s = o = function(t) {
                        return i.call(n || e, t || window.event);
                    }, !b.touchNative && b.pointer && 0 === t.indexOf("touch") ? o = Jt(e, t, o) : b.touch && "dblclick" === t ? o = ne(e, o) : "addEventListener" in e ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? e.addEventListener(Ee[t] || t, o, !!b.passiveEvents && {
                        passive: !1
                    }) : "mouseenter" === t || "mouseleave" === t ? e.addEventListener(Ee[t], o = function(t) {
                        t = t || window.event, We(e, t) && s(t);
                    }, !1) : e.addEventListener(t, s, !1) : e.attachEvent("on" + t, o), e[E] = e[E] || {}, 
                    e[E][r] = o);
                }
                function Oe(t, e, i, n, o) {
                    o = o || e + h(i) + (n ? "_" + h(n) : "");
                    var s, r;
                    i = t[E] && t[E][o];
                    i && (!b.touchNative && b.pointer && 0 === e.indexOf("touch") ? (n = t, r = i, Gt[s = e] ? n.removeEventListener(Gt[s], r, !1) : console.warn("wrong event specified:", s)) : b.touch && "dblclick" === e ? (n = i, 
                    (r = t).removeEventListener("dblclick", n.dblclick), r.removeEventListener("click", n.simDblclick)) : "removeEventListener" in t ? t.removeEventListener(Ee[e] || e, i, !1) : t.detachEvent("on" + e, i), 
                    t[E][o] = null);
                }
                function Ae(t) {
                    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, 
                    this;
                }
                function Be(t) {
                    return ke(t, "wheel", Ae), this;
                }
                function Ie(t) {
                    return S(t, "mousedown touchstart dblclick contextmenu", Ae), t._leaflet_disable_click = !0, 
                    this;
                }
                function O(t) {
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
                }
                function Re(t) {
                    return O(t), Ae(t), this;
                }
                function Ne(t) {
                    if (t.composedPath) return t.composedPath();
                    for (var e = [], i = t.target; i; ) e.push(i), i = i.parentNode;
                    return e;
                }
                function De(t, e) {
                    var i, n;
                    return e ? (n = (i = Ze(e)).boundingClientRect, new p((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)) : new p(t.clientX, t.clientY);
                }
                var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
                function He(t) {
                    return b.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / je : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
                }
                function We(t, e) {
                    var i = e.relatedTarget;
                    if (!i) return !0;
                    try {
                        for (;i && i !== t; ) i = i.parentNode;
                    } catch (t) {
                        return !1;
                    }
                    return i !== t;
                }
                mt = {
                    __proto__: null,
                    on: S,
                    off: k,
                    stopPropagation: Ae,
                    disableScrollPropagation: Be,
                    disableClickPropagation: Ie,
                    preventDefault: O,
                    stop: Re,
                    getPropagationPath: Ne,
                    getMousePosition: De,
                    getWheelDelta: He,
                    isExternalTarget: We,
                    addListener: S,
                    removeListener: k
                };
                var Fe = it.extend({
                    run: function(t, e, i, n) {
                        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), 
                        this._startPos = Pe(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, 
                        this.fire("start"), this._animate();
                    },
                    stop: function() {
                        this._inProgress && (this._step(!0), this._complete());
                    },
                    _animate: function() {
                        this._animId = x(this._animate, this), this._step();
                    },
                    _step: function(t) {
                        var e = +new Date - this._startTime, i = 1e3 * this._duration;
                        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
                    },
                    _runFrame: function(t, e) {
                        t = this._startPos.add(this._offset.multiplyBy(t));
                        e && t._round(), Z(this._el, t), this.fire("step");
                    },
                    _complete: function() {
                        r(this._animId), this._inProgress = !1, this.fire("end");
                    },
                    _easeOut: function(t) {
                        return 1 - Math.pow(1 - t, this._easeOutPower);
                    }
                }), A = it.extend({
                    options: {
                        crs: lt,
                        center: void 0,
                        zoom: void 0,
                        minZoom: void 0,
                        maxZoom: void 0,
                        layers: [],
                        maxBounds: void 0,
                        renderer: void 0,
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4,
                        fadeAnimation: !0,
                        markerZoomAnimation: !0,
                        transform3DLimit: 8388608,
                        zoomSnap: 1,
                        zoomDelta: 1,
                        trackResize: !0
                    },
                    initialize: function(t, e) {
                        e = c(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, 
                        this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), 
                        this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), 
                        e.center && void 0 !== e.zoom && this.setView(w(e.center), e.zoom, {
                            reset: !0
                        }), this.callInitHooks(), this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation, 
                        this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, de, this._catchTransitionEnd, this)), 
                        this._addLayers(this.options.layers);
                    },
                    setView: function(t, e, i) {
                        if ((e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(w(t), e, this.options.maxBounds), 
                        i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = l({
                            animate: i.animate
                        }, i.zoom), i.pan = l({
                            animate: i.animate,
                            duration: i.duration
                        }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer), 
                        this;
                        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
                    },
                    setZoom: function(t, e) {
                        return this._loaded ? this.setView(this.getCenter(), t, {
                            zoom: e
                        }) : (this._zoom = t, this);
                    },
                    zoomIn: function(t, e) {
                        return t = t || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
                    },
                    zoomOut: function(t, e) {
                        return t = t || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
                    },
                    setZoomAround: function(t, e, i) {
                        var n = this.getZoomScale(e), o = this.getSize().divideBy(2);
                        t = (t instanceof p ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n), 
                        n = this.containerPointToLatLng(o.add(t));
                        return this.setView(n, e, {
                            zoom: i
                        });
                    },
                    _getBoundsCenterZoom: function(t, e) {
                        e = e || {}, t = t.getBounds ? t.getBounds() : g(t);
                        var i = m(e.paddingTopLeft || e.padding || [ 0, 0 ]), n = m(e.paddingBottomRight || e.padding || [ 0, 0 ]), o = this.getBoundsZoom(t, !1, i.add(n));
                        return (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0 ? {
                            center: t.getCenter(),
                            zoom: o
                        } : (e = n.subtract(i).divideBy(2), n = this.project(t.getSouthWest(), o), i = this.project(t.getNorthEast(), o), 
                        {
                            center: this.unproject(n.add(i).divideBy(2).add(e), o),
                            zoom: o
                        });
                    },
                    fitBounds: function(t, e) {
                        if ((t = g(t)).isValid()) return t = this._getBoundsCenterZoom(t, e), this.setView(t.center, t.zoom, e);
                        throw new Error("Bounds are not valid.");
                    },
                    fitWorld: function(t) {
                        return this.fitBounds([ [ -90, -180 ], [ 90, 180 ] ], t);
                    },
                    panTo: function(t, e) {
                        return this.setView(t, this._zoom, {
                            pan: e
                        });
                    },
                    panBy: function(t, e) {
                        var i;
                        return e = e || {}, (t = m(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Fe, 
                        this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate ? (M(this._mapPane, "leaflet-pan-anim"), 
                        i = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t), 
                        this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), 
                        this) : this.fire("moveend");
                    },
                    flyTo: function(n, o, t) {
                        if (!1 === (t = t || {}).animate || !b.any3d) return this.setView(n, o, t);
                        this._stop();
                        var s = this.project(this.getCenter()), r = this.project(n), e = this.getSize(), a = this._zoom, h = (n = w(n), 
                        o = void 0 === o ? a : o, Math.max(e.x, e.y)), i = h * this.getZoomScale(a, o), l = r.distanceTo(s) || 1, u = 1.42, c = u * u;
                        function d(t) {
                            t = (i * i - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? i : h) * c * l), 
                            t = Math.sqrt(t * t + 1) - t;
                            return t < 1e-9 ? -18 : Math.log(t);
                        }
                        function _(t) {
                            return (Math.exp(t) - Math.exp(-t)) / 2;
                        }
                        function p(t) {
                            return (Math.exp(t) + Math.exp(-t)) / 2;
                        }
                        var m = d(0);
                        function f(t) {
                            return h * (p(m) * (_(t = m + u * t) / p(t)) - _(m)) / c;
                        }
                        var g = Date.now(), v = (d(1) - m) / u, y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
                        return this._moveStart(!0, t.noMoveStart), function t() {
                            var e = (Date.now() - g) / y, i = (1 - Math.pow(1 - e, 1.5)) * v;
                            e <= 1 ? (this._flyToFrame = x(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i) / l)), a), this.getScaleZoom(h / (e = i, 
                            h * (p(m) / p(m + u * e))), a), {
                                flyTo: !0
                            })) : this._move(n, o)._moveEnd(!0);
                        }.call(this), this;
                    },
                    flyToBounds: function(t, e) {
                        t = this._getBoundsCenterZoom(t, e);
                        return this.flyTo(t.center, t.zoom, e);
                    },
                    setMaxBounds: function(t) {
                        return t = g(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), 
                        t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), 
                        this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, 
                        this);
                    },
                    setMinZoom: function(t) {
                        var e = this.options.minZoom;
                        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), 
                        this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
                    },
                    setMaxZoom: function(t) {
                        var e = this.options.maxZoom;
                        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), 
                        this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
                    },
                    panInsideBounds: function(t, e) {
                        this._enforcingBounds = !0;
                        var i = this.getCenter();
                        t = this._limitCenter(i, this._zoom, g(t));
                        return i.equals(t) || this.panTo(t, e), this._enforcingBounds = !1, this;
                    },
                    panInside: function(t, e) {
                        var i = m((e = e || {}).paddingTopLeft || e.padding || [ 0, 0 ]), n = m(e.paddingBottomRight || e.padding || [ 0, 0 ]), o = this.project(this.getCenter()), s = (t = this.project(t), 
                        this.getPixelBounds());
                        i = _([ s.min.add(i), s.max.subtract(n) ]), s = i.getSize();
                        return i.contains(t) || (this._enforcingBounds = !0, n = t.subtract(i.getCenter()), 
                        i = i.extend(t).getSize().subtract(s), o.x += n.x < 0 ? -i.x : i.x, o.y += n.y < 0 ? -i.y : i.y, 
                        this.panTo(this.unproject(o), e), this._enforcingBounds = !1), this;
                    },
                    invalidateSize: function(t) {
                        if (!this._loaded) return this;
                        t = l({
                            animate: !1,
                            pan: !0
                        }, !0 === t ? {
                            animate: !0
                        } : t);
                        var e = this.getSize(), i = (this._sizeChanged = !0, this._lastCenter = null, this.getSize()), n = e.divideBy(2).round(), o = i.divideBy(2).round();
                        n = n.subtract(o);
                        return n.x || n.y ? (t.animate && t.pan ? this.panBy(n) : (t.pan && this._rawPanBy(n), 
                        this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), 
                        this.fire("resize", {
                            oldSize: e,
                            newSize: i
                        })) : this;
                    },
                    stop: function() {
                        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), 
                        this._stop();
                    },
                    locate: function(t) {
                        var e, i;
                        return t = this._locateOptions = l({
                            timeout: 1e4,
                            watch: !1
                        }, t), "geolocation" in navigator ? (e = a(this._handleGeolocationResponse, this), 
                        i = a(this._handleGeolocationError, this), t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t)) : this._handleGeolocationError({
                            code: 0,
                            message: "Geolocation not supported."
                        }), this;
                    },
                    stopLocate: function() {
                        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), 
                        this._locateOptions && (this._locateOptions.setView = !1), this;
                    },
                    _handleGeolocationError: function(t) {
                        var e;
                        this._container._leaflet_id && (e = t.code, t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout"), 
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                            code: e,
                            message: "Geolocation error: " + t + "."
                        }));
                    },
                    _handleGeolocationResponse: function(t) {
                        if (this._container._leaflet_id) {
                            var e, i, n = new v(t.coords.latitude, t.coords.longitude), o = n.toBounds(2 * t.coords.accuracy), s = this._locateOptions, r = (s.setView && (e = this.getBoundsZoom(o), 
                            this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)), {
                                latlng: n,
                                bounds: o,
                                timestamp: t.timestamp
                            });
                            for (i in t.coords) "number" == typeof t.coords[i] && (r[i] = t.coords[i]);
                            this.fire("locationfound", r);
                        }
                    },
                    addHandler: function(t, e) {
                        return e && (e = this[t] = new e(this), this._handlers.push(e), this.options[t] && e.enable()), 
                        this;
                    },
                    remove: function() {
                        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), 
                        this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                        try {
                            delete this._container._leaflet_id, delete this._containerId;
                        } catch (t) {
                            this._container._leaflet_id = void 0, this._containerId = void 0;
                        }
                        for (var t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), 
                        T(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (r(this._resizeRequest), 
                        this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), 
                        this._layers) this._layers[t].remove();
                        for (t in this._panes) T(this._panes[t]);
                        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, 
                        this;
                    },
                    createPane: function(t, e) {
                        e = P("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                        return t && (this._panes[t] = e), e;
                    },
                    getCenter: function() {
                        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
                    },
                    getZoom: function() {
                        return this._zoom;
                    },
                    getBounds: function() {
                        var t = this.getPixelBounds();
                        return new s(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
                    },
                    getMinZoom: function() {
                        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
                    },
                    getMaxZoom: function() {
                        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
                    },
                    getBoundsZoom: function(t, e, i) {
                        t = g(t), i = m(i || [ 0, 0 ]);
                        var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), r = t.getNorthWest(), a = (t = t.getSouthEast(), 
                        i = this.getSize().subtract(i), t = _(this.project(t, n), this.project(r, n)).getSize(), 
                        r = b.any3d ? this.options.zoomSnap : 1, i.x / t.x);
                        i = i.y / t.y, t = e ? Math.max(a, i) : Math.min(a, i), n = this.getScaleZoom(t, n);
                        return r && (n = Math.round(n / (r / 100)) * (r / 100), n = e ? Math.ceil(n / r) * r : Math.floor(n / r) * r), 
                        Math.max(o, Math.min(s, n));
                    },
                    getSize: function() {
                        return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0), 
                        this._sizeChanged = !1), this._size.clone();
                    },
                    getPixelBounds: function(t, e) {
                        t = this._getTopLeftPoint(t, e);
                        return new f(t, t.add(this.getSize()));
                    },
                    getPixelOrigin: function() {
                        return this._checkIfLoaded(), this._pixelOrigin;
                    },
                    getPixelWorldBounds: function(t) {
                        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
                    },
                    getPane: function(t) {
                        return "string" == typeof t ? this._panes[t] : t;
                    },
                    getPanes: function() {
                        return this._panes;
                    },
                    getContainer: function() {
                        return this._container;
                    },
                    getZoomScale: function(t, e) {
                        var i = this.options.crs;
                        return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e);
                    },
                    getScaleZoom: function(t, e) {
                        var i = this.options.crs;
                        t = (e = void 0 === e ? this._zoom : e, i.zoom(t * i.scale(e)));
                        return isNaN(t) ? 1 / 0 : t;
                    },
                    project: function(t, e) {
                        return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(w(t), e);
                    },
                    unproject: function(t, e) {
                        return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(m(t), e);
                    },
                    layerPointToLatLng: function(t) {
                        t = m(t).add(this.getPixelOrigin());
                        return this.unproject(t);
                    },
                    latLngToLayerPoint: function(t) {
                        return this.project(w(t))._round()._subtract(this.getPixelOrigin());
                    },
                    wrapLatLng: function(t) {
                        return this.options.crs.wrapLatLng(w(t));
                    },
                    wrapLatLngBounds: function(t) {
                        return this.options.crs.wrapLatLngBounds(g(t));
                    },
                    distance: function(t, e) {
                        return this.options.crs.distance(w(t), w(e));
                    },
                    containerPointToLayerPoint: function(t) {
                        return m(t).subtract(this._getMapPanePos());
                    },
                    layerPointToContainerPoint: function(t) {
                        return m(t).add(this._getMapPanePos());
                    },
                    containerPointToLatLng: function(t) {
                        t = this.containerPointToLayerPoint(m(t));
                        return this.layerPointToLatLng(t);
                    },
                    latLngToContainerPoint: function(t) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)));
                    },
                    mouseEventToContainerPoint: function(t) {
                        return De(t, this._container);
                    },
                    mouseEventToLayerPoint: function(t) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
                    },
                    mouseEventToLatLng: function(t) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
                    },
                    _initContainer: function(t) {
                        t = this._container = _e(t);
                        if (!t) throw new Error("Map container not found.");
                        if (t._leaflet_id) throw new Error("Map container is already initialized.");
                        S(t, "scroll", this._onScroll, this), this._containerId = h(t);
                    },
                    _initLayout: function() {
                        var t = this._container, e = (this._fadeAnimated = this.options.fadeAnimation && b.any3d, 
                        M(t, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), 
                        pe(t, "position"));
                        "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"), 
                        this._initPanes(), this._initControlPos && this._initControlPos();
                    },
                    _initPanes: function() {
                        var t = this._panes = {};
                        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), 
                        Z(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), 
                        this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), 
                        this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"), 
                        M(t.shadowPane, "leaflet-zoom-hide"));
                    },
                    _resetView: function(t, e, i) {
                        Z(this._mapPane, new p(0, 0));
                        var n = !this._loaded, o = (this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset"), 
                        this._zoom !== e);
                        this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
                    },
                    _moveStart: function(t, e) {
                        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
                    },
                    _move: function(t, e, i, n) {
                        void 0 === e && (e = this._zoom);
                        var o = this._zoom !== e;
                        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), 
                        n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), 
                        this.fire("move", i)), this;
                    },
                    _moveEnd: function(t) {
                        return t && this.fire("zoomend"), this.fire("moveend");
                    },
                    _stop: function() {
                        return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
                    },
                    _rawPanBy: function(t) {
                        Z(this._mapPane, this._getMapPanePos().subtract(t));
                    },
                    _getZoomSpan: function() {
                        return this.getMaxZoom() - this.getMinZoom();
                    },
                    _panInsideMaxBounds: function() {
                        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
                    },
                    _checkIfLoaded: function() {
                        if (!this._loaded) throw new Error("Set map center and zoom first.");
                    },
                    _initEvents: function(t) {
                        this._targets = {};
                        var e = t ? k : S;
                        e((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), 
                        this.options.trackResize && e(window, "resize", this._onResize, this), b.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
                    },
                    _onResize: function() {
                        r(this._resizeRequest), this._resizeRequest = x((function() {
                            this.invalidateSize({
                                debounceMoveend: !0
                            });
                        }), this);
                    },
                    _onScroll: function() {
                        this._container.scrollTop = 0, this._container.scrollLeft = 0;
                    },
                    _onMoveEnd: function() {
                        var t = this._getMapPanePos();
                        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
                    },
                    _findEventTargets: function(t, e) {
                        for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s; ) {
                            if ((i = this._targets[h(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
                                r = !0;
                                break;
                            }
                            if (i && i.listens(e, !0)) {
                                if (o && !We(s, t)) break;
                                if (n.push(i), o) break;
                            }
                            if (s === this._container) break;
                            s = s.parentNode;
                        }
                        return n = n.length || r || o || !this.listens(e, !0) ? n : [ this ];
                    },
                    _isClickDisabled: function(t) {
                        for (;t && t !== this._container; ) {
                            if (t._leaflet_disable_click) return !0;
                            t = t.parentNode;
                        }
                    },
                    _handleDOMEvent: function(t) {
                        var e, i = t.target || t.srcElement;
                        !this._loaded || i._leaflet_disable_events || "click" === t.type && this._isClickDisabled(i) || ("mousedown" === (e = t.type) && Me(i), 
                        this._fireDOMEvent(t, e));
                    },
                    _mouseEvents: [ "click", "dblclick", "mouseover", "mouseout", "contextmenu" ],
                    _fireDOMEvent: function(t, e, i) {
                        "click" === t.type && ((a = l({}, t)).type = "preclick", this._fireDOMEvent(a, a.type, i));
                        var n = this._findEventTargets(t, e);
                        if (i) {
                            for (var o = [], s = 0; s < i.length; s++) i[s].listens(e, !0) && o.push(i[s]);
                            n = o.concat(n);
                        }
                        if (n.length) {
                            "contextmenu" === e && O(t);
                            var r, a = n[0], h = {
                                originalEvent: t
                            };
                            for ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = a.getLatLng && (!a._radius || a._radius <= 10), 
                            h.containerPoint = r ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), 
                            h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = r ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint)), 
                            s = 0; s < n.length; s++) if (n[s].fire(e, h, !0), h.originalEvent._stopped || !1 === n[s].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e)) return;
                        }
                    },
                    _draggableMoved: function(t) {
                        return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
                    },
                    _clearHandlers: function() {
                        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
                    },
                    whenReady: function(t, e) {
                        return this._loaded ? t.call(e || this, {
                            target: this
                        }) : this.on("load", t, e), this;
                    },
                    _getMapPanePos: function() {
                        return Pe(this._mapPane) || new p(0, 0);
                    },
                    _moved: function() {
                        var t = this._getMapPanePos();
                        return t && !t.equals([ 0, 0 ]);
                    },
                    _getTopLeftPoint: function(t, e) {
                        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos());
                    },
                    _getNewPixelOrigin: function(t, e) {
                        var i = this.getSize()._divideBy(2);
                        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
                    },
                    _latLngToNewLayerPoint: function(t, e, i) {
                        i = this._getNewPixelOrigin(i, e);
                        return this.project(t, e)._subtract(i);
                    },
                    _latLngBoundsToNewLayerBounds: function(t, e, i) {
                        i = this._getNewPixelOrigin(i, e);
                        return _([ this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i) ]);
                    },
                    _getCenterLayerPoint: function() {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
                    },
                    _getCenterOffset: function(t) {
                        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
                    },
                    _limitCenter: function(t, e, i) {
                        var n, o;
                        return !i || (n = this.project(t, e), o = this.getSize().divideBy(2), o = new f(n.subtract(o), n.add(o)), 
                        o = this._getBoundsOffset(o, i, e), Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e);
                    },
                    _limitOffset: function(t, e) {
                        var i;
                        return e ? (i = new f((i = this.getPixelBounds()).min.add(t), i.max.add(t)), t.add(this._getBoundsOffset(i, e))) : t;
                    },
                    _getBoundsOffset: function(t, e, i) {
                        e = _(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)), i = e.min.subtract(t.min), 
                        e = e.max.subtract(t.max);
                        return new p(this._rebound(i.x, -e.x), this._rebound(i.y, -e.y));
                    },
                    _rebound: function(t, e) {
                        return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
                    },
                    _limitZoom: function(t) {
                        var e = this.getMinZoom(), i = this.getMaxZoom(), n = b.any3d ? this.options.zoomSnap : 1;
                        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
                    },
                    _onPanTransitionStep: function() {
                        this.fire("move");
                    },
                    _onPanTransitionEnd: function() {
                        z(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
                    },
                    _tryAnimatedPan: function(t, e) {
                        t = this._getCenterOffset(t)._trunc();
                        return !(!0 !== (e && e.animate) && !this.getSize().contains(t)) && (this.panBy(t, e), 
                        !0);
                    },
                    _createAnimProxy: function() {
                        var t = this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated");
                        this._panes.mapPane.appendChild(t), this.on("zoomanim", (function(t) {
                            var e = ue, i = this._proxy.style[e];
                            be(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
                        }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
                    },
                    _destroyAnimProxy: function() {
                        T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
                    },
                    _animMoveEnd: function() {
                        var t = this.getCenter(), e = this.getZoom();
                        be(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
                    },
                    _catchTransitionEnd: function(t) {
                        this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
                    },
                    _nothingToAnimate: function() {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
                    },
                    _tryAnimatedZoom: function(t, e, i) {
                        if (!this._animatingZoom) {
                            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e);
                            n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                            if (!0 !== i.animate && !this.getSize().contains(n)) return !1;
                            x((function() {
                                this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
                            }), this);
                        }
                        return !0;
                    },
                    _animateZoom: function(t, e, i, n) {
                        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, 
                        M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                            center: t,
                            zoom: e,
                            noUpdate: n
                        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), 
                        this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(a(this._onZoomTransitionEnd, this), 250));
                    },
                    _onZoomTransitionEnd: function() {
                        this._animatingZoom && (this._mapPane && z(this._mapPane, "leaflet-zoom-anim"), 
                        this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), 
                        this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), 
                        this._moveEnd(!0));
                    }
                });
                function Ue(t) {
                    return new B(t);
                }
                var B = et.extend({
                    options: {
                        position: "topright"
                    },
                    initialize: function(t) {
                        c(this, t);
                    },
                    getPosition: function() {
                        return this.options.position;
                    },
                    setPosition: function(t) {
                        var e = this._map;
                        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), 
                        this;
                    },
                    getContainer: function() {
                        return this._container;
                    },
                    addTo: function(t) {
                        this.remove(), this._map = t;
                        var e = this._container = this.onAdd(t), i = this.getPosition();
                        t = t._controlCorners[i];
                        return M(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e), 
                        this._map.on("unload", this.remove, this), this;
                    },
                    remove: function() {
                        return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), 
                        this._map.off("unload", this.remove, this), this._map = null), this;
                    },
                    _refocusOnMap: function(t) {
                        this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
                    }
                }), Ve = (A.include({
                    addControl: function(t) {
                        return t.addTo(this), this;
                    },
                    removeControl: function(t) {
                        return t.remove(), this;
                    },
                    _initControlPos: function() {
                        var i = this._controlCorners = {}, n = "leaflet-", o = this._controlContainer = P("div", n + "control-container", this._container);
                        function t(t, e) {
                            i[t + e] = P("div", n + t + " " + n + e, o);
                        }
                        t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
                    },
                    _clearControlPos: function() {
                        for (var t in this._controlCorners) T(this._controlCorners[t]);
                        T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
                    }
                }), B.extend({
                    options: {
                        collapsed: !0,
                        position: "topright",
                        autoZIndex: !0,
                        hideSingleBase: !1,
                        sortLayers: !1,
                        sortFunction: function(t, e, i, n) {
                            return i < n ? -1 : n < i ? 1 : 0;
                        }
                    },
                    initialize: function(t, e, i) {
                        for (var n in c(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, 
                        this._handlingClick = !1, this._preventClick = !1, t) this._addLayer(t[n], n);
                        for (n in e) this._addLayer(e[n], n, !0);
                    },
                    onAdd: function(t) {
                        this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
                        for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                        return this._container;
                    },
                    addTo: function(t) {
                        return B.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
                    },
                    onRemove: function() {
                        this._map.off("zoomend", this._checkDisabledLayers, this);
                        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
                    },
                    addBaseLayer: function(t, e) {
                        return this._addLayer(t, e), this._map ? this._update() : this;
                    },
                    addOverlay: function(t, e) {
                        return this._addLayer(t, e, !0), this._map ? this._update() : this;
                    },
                    removeLayer: function(t) {
                        t.off("add remove", this._onLayerChange, this);
                        t = this._getLayer(h(t));
                        return t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
                    },
                    expand: function() {
                        M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                        var t = this._map.getSize().y - (this._container.offsetTop + 50);
                        return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), 
                        this._section.style.height = t + "px") : z(this._section, "leaflet-control-layers-scrollbar"), 
                        this._checkDisabledLayers(), this;
                    },
                    collapse: function() {
                        return z(this._container, "leaflet-control-layers-expanded"), this;
                    },
                    _initLayout: function() {
                        var t = "leaflet-control-layers", e = this._container = P("div", t), i = this.options.collapsed, n = (e.setAttribute("aria-haspopup", !0), 
                        Ie(e), Be(e), this._section = P("section", t + "-list")), o = (i && (this._map.on("click", this.collapse, this), 
                        S(e, {
                            mouseenter: this._expandSafely,
                            mouseleave: this.collapse
                        }, this)), this._layersLink = P("a", t + "-toggle", e));
                        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), S(o, {
                            keydown: function(t) {
                                13 === t.keyCode && this._expandSafely();
                            },
                            click: function(t) {
                                O(t), this._expandSafely();
                            }
                        }, this), i || this.expand(), this._baseLayersList = P("div", t + "-base", n), this._separator = P("div", t + "-separator", n), 
                        this._overlaysList = P("div", t + "-overlays", n), e.appendChild(n);
                    },
                    _getLayer: function(t) {
                        for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && h(this._layers[e].layer) === t) return this._layers[e];
                    },
                    _addLayer: function(t, e, i) {
                        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                            layer: t,
                            name: e,
                            overlay: i
                        }), this.options.sortLayers && this._layers.sort(a((function(t, e) {
                            return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                        }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), 
                        this._expandIfNotCollapsed();
                    },
                    _update: function() {
                        if (this._container) {
                            me(this._baseLayersList), me(this._overlaysList), this._layerControlInputs = [];
                            for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++) i = this._layers[o], 
                            this._addItem(i), e = e || i.overlay, t = t || !i.overlay, n += i.overlay ? 0 : 1;
                            this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"), 
                            this._separator.style.display = e && t ? "" : "none";
                        }
                        return this;
                    },
                    _onLayerChange: function(t) {
                        this._handlingClick || this._update();
                        var e = this._getLayer(h(t.target));
                        t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                        t && this._map.fire(t, e);
                    },
                    _createRadioElement: function(t, e) {
                        t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", 
                        e = document.createElement("div");
                        return e.innerHTML = t, e.firstChild;
                    },
                    _addItem: function(t) {
                        var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer), o = (n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox", 
                        e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + h(this), n), 
                        this._layerControlInputs.push(e), e.layerId = h(t.layer), S(e, "click", this._onInputClick, this), 
                        document.createElement("span")), n.innerHTML = " " + t.name, document.createElement("span"));
                        return i.appendChild(o), o.appendChild(e), o.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), 
                        this._checkDisabledLayers(), i;
                    },
                    _onInputClick: function() {
                        if (!this._preventClick) {
                            var t, e, i = this._layerControlInputs, n = [], o = [];
                            this._handlingClick = !0;
                            for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, 
                            t.checked ? n.push(e) : t.checked || o.push(e);
                            for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                            for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                            this._handlingClick = !1, this._refocusOnMap();
                        }
                    },
                    _checkDisabledLayers: function() {
                        for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o], 
                        e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom;
                    },
                    _expandIfNotCollapsed: function() {
                        return this._map && !this.options.collapsed && this.expand(), this;
                    },
                    _expandSafely: function() {
                        var t = this._section, e = (this._preventClick = !0, S(t, "click", O), this.expand(), 
                        this);
                        setTimeout((function() {
                            k(t, "click", O), e._preventClick = !1;
                        }));
                    }
                })), qe = B.extend({
                    options: {
                        position: "topleft",
                        zoomInText: '<span aria-hidden="true">+</span>',
                        zoomInTitle: "Zoom in",
                        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                        zoomOutTitle: "Zoom out"
                    },
                    onAdd: function(t) {
                        var e = "leaflet-control-zoom", i = P("div", e + " leaflet-bar"), n = this.options;
                        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), 
                        this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), 
                        this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), 
                        i;
                    },
                    onRemove: function(t) {
                        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
                    },
                    disable: function() {
                        return this._disabled = !0, this._updateDisabled(), this;
                    },
                    enable: function() {
                        return this._disabled = !1, this._updateDisabled(), this;
                    },
                    _zoomIn: function(t) {
                        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
                    },
                    _zoomOut: function(t) {
                        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
                    },
                    _createButton: function(t, e, i, n, o) {
                        i = P("a", i, n);
                        return i.innerHTML = t, i.href = "#", i.title = e, i.setAttribute("role", "button"), 
                        i.setAttribute("aria-label", e), Ie(i), S(i, "click", Re), S(i, "click", o, this), 
                        S(i, "click", this._refocusOnMap, this), i;
                    },
                    _updateDisabled: function() {
                        var t = this._map, e = "leaflet-disabled";
                        z(this._zoomInButton, e), z(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), 
                        this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t._zoom !== t.getMinZoom() || (M(this._zoomOutButton, e), 
                        this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t._zoom !== t.getMaxZoom() || (M(this._zoomInButton, e), 
                        this._zoomInButton.setAttribute("aria-disabled", "true"));
                    }
                }), Ge = (A.mergeOptions({
                    zoomControl: !0
                }), A.addInitHook((function() {
                    this.options.zoomControl && (this.zoomControl = new qe, this.addControl(this.zoomControl));
                })), B.extend({
                    options: {
                        position: "bottomleft",
                        maxWidth: 100,
                        metric: !0,
                        imperial: !0
                    },
                    onAdd: function(t) {
                        var e = "leaflet-control-scale", i = P("div", e), n = this.options;
                        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), 
                        t.whenReady(this._update, this), i;
                    },
                    onRemove: function(t) {
                        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
                    },
                    _addScales: function(t, e, i) {
                        t.metric && (this._mScale = P("div", e, i)), t.imperial && (this._iScale = P("div", e, i));
                    },
                    _update: function() {
                        var t = this._map, e = t.getSize().y / 2;
                        t = t.distance(t.containerPointToLatLng([ 0, e ]), t.containerPointToLatLng([ this.options.maxWidth, e ]));
                        this._updateScales(t);
                    },
                    _updateScales: function(t) {
                        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
                    },
                    _updateMetric: function(t) {
                        var e = this._getRoundNum(t);
                        this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t);
                    },
                    _updateImperial: function(t) {
                        var e, i;
                        t *= 3.2808399;
                        5280 < t ? (i = this._getRoundNum(e = t / 5280), this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(t), 
                        this._updateScale(this._iScale, i + " ft", i / t));
                    },
                    _updateScale: function(t, e, i) {
                        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
                    },
                    _getRoundNum: function(t) {
                        var e = Math.pow(10, (Math.floor(t) + "").length - 1);
                        t /= e;
                        return e * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1);
                    }
                })), Ke = B.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (b.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
                    },
                    initialize: function(t) {
                        c(this, t), this._attributions = {};
                    },
                    onAdd: function(t) {
                        for (var e in (t.attributionControl = this)._container = P("div", "leaflet-control-attribution"), 
                        Ie(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
                    },
                    onRemove: function(t) {
                        t.off("layeradd", this._addAttribution, this);
                    },
                    _addAttribution: function(t) {
                        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", (function() {
                            this.removeAttribution(t.layer.getAttribution());
                        }), this));
                    },
                    setPrefix: function(t) {
                        return this.options.prefix = t, this._update(), this;
                    },
                    addAttribution: function(t) {
                        return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, 
                        this._update()), this;
                    },
                    removeAttribution: function(t) {
                        return t && this._attributions[t] && (this._attributions[t]--, this._update()), 
                        this;
                    },
                    _update: function() {
                        if (this._map) {
                            var t, e = [];
                            for (t in this._attributions) this._attributions[t] && e.push(t);
                            var i = [];
                            this.options.prefix && i.push(this.options.prefix), e.length && i.push(e.join(", ")), 
                            this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
                        }
                    }
                }), Ye = (n = (A.mergeOptions({
                    attributionControl: !0
                }), A.addInitHook((function() {
                    this.options.attributionControl && (new Ke).addTo(this);
                })), B.Layers = Ve, B.Zoom = qe, B.Scale = Ge, B.Attribution = Ke, Ue.layers = function(t, e, i) {
                    return new Ve(t, e, i);
                }, Ue.zoom = function(t) {
                    return new qe(t);
                }, Ue.scale = function(t) {
                    return new Ge(t);
                }, Ue.attribution = function(t) {
                    return new Ke(t);
                }, et.extend({
                    initialize: function(t) {
                        this._map = t;
                    },
                    enable: function() {
                        return this._enabled || (this._enabled = !0, this.addHooks()), this;
                    },
                    disable: function() {
                        return this._enabled && (this._enabled = !1, this.removeHooks()), this;
                    },
                    enabled: function() {
                        return !!this._enabled;
                    }
                })), ft = (n.addTo = function(t, e) {
                    return t.addHandler(e, this), this;
                }, {
                    Events: e
                }), b.touch ? "touchstart mousedown" : "mousedown"), Xe = it.extend({
                    options: {
                        clickTolerance: 3
                    },
                    initialize: function(t, e, i, n) {
                        c(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
                    },
                    enable: function() {
                        this._enabled || (S(this._dragStartTarget, Ye, this._onDown, this), this._enabled = !0);
                    },
                    disable: function() {
                        this._enabled && (Xe._dragging === this && this.finishDrag(!0), k(this._dragStartTarget, Ye, this._onDown, this), 
                        this._enabled = !1, this._moved = !1);
                    },
                    _onDown: function(t) {
                        var e, i;
                        this._enabled && (this._moved = !1, ve(this._element, "leaflet-zoom-anim") || (t.touches && 1 !== t.touches.length ? Xe._dragging === this && this.finishDrag() : Xe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xe._dragging = this)._preventOutline && Me(this._element), 
                        Le(), re(), this._moving || (this.fire("down"), i = t.touches ? t.touches[0] : t, 
                        e = Ce(this._element), this._startPoint = new p(i.clientX, i.clientY), this._startPos = Pe(this._element), 
                        this._parentScale = Ze(e), i = "mousedown" === t.type, S(document, i ? "mousemove" : "touchmove", this._onMove, this), 
                        S(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
                    },
                    _onMove: function(t) {
                        var e;
                        this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new p((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, 
                        e.y /= this._parentScale.y, O(t), this._moved || (this.fire("dragstart"), this._moved = !0, 
                        M(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, 
                        window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), 
                        M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), 
                        this._moving = !0, this._lastEvent = t, this._updatePosition()));
                    },
                    _updatePosition: function() {
                        var t = {
                            originalEvent: this._lastEvent
                        };
                        this.fire("predrag", t), Z(this._element, this._newPos), this.fire("drag", t);
                    },
                    _onUp: function() {
                        this._enabled && this.finishDrag();
                    },
                    finishDrag: function(t) {
                        z(document.body, "leaflet-dragging"), this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"), 
                        this._lastTarget = null), k(document, "mousemove touchmove", this._onMove, this), 
                        k(document, "mouseup touchend touchcancel", this._onUp, this), Te(), ae();
                        var e = this._moved && this._moving;
                        this._moving = !1, Xe._dragging = !1, e && this.fire("dragend", {
                            noInertia: t,
                            distance: this._newPos.distanceTo(this._startPos)
                        });
                    }
                });
                function Je(t, e, i) {
                    for (var n, o, s, r, a, h, l, u = [ 1, 4, 2, 8 ], c = 0, d = t.length; c < d; c++) t[c]._code = si(t[c], e);
                    for (s = 0; s < 4; s++) {
                        for (h = u[s], n = [], c = 0, o = (d = t.length) - 1; c < d; o = c++) r = t[c], 
                        a = t[o], r._code & h ? a._code & h || ((l = oi(a, r, h, e, i))._code = si(l, e), 
                        n.push(l)) : (a._code & h && ((l = oi(a, r, h, e, i))._code = si(l, e), n.push(l)), 
                        n.push(r));
                        t = n;
                    }
                    return t;
                }
                function $e(t, e) {
                    var i, n, o, s, r, a, h;
                    if (!t || 0 === t.length) throw new Error("latlngs not passed");
                    I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), 
                    t = t[0]);
                    for (var l = w([ 0, 0 ]), u = g(t), c = (u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (l = Qe(t)), 
                    t.length), d = [], _ = 0; _ < c; _++) {
                        var p = w(t[_]);
                        d.push(e.project(w([ p.lat - l.lat, p.lng - l.lng ])));
                    }
                    for (_ = r = a = h = 0, i = c - 1; _ < c; i = _++) n = d[_], o = d[i], s = n.y * o.x - o.y * n.x, 
                    a += (n.x + o.x) * s, h += (n.y + o.y) * s, r += 3 * s;
                    u = 0 === r ? d[0] : [ a / r, h / r ], u = e.unproject(m(u));
                    return w([ u.lat + l.lat, u.lng + l.lng ]);
                }
                function Qe(t) {
                    for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
                        var s = w(t[o]);
                        e += s.lat, i += s.lng, n++;
                    }
                    return w([ e / n, i / n ]);
                }
                var ti;
                gt = {
                    __proto__: null,
                    clipPolygon: Je,
                    polygonCenter: $e,
                    centroid: Qe
                };
                function ei(t, e) {
                    if (e && t.length) {
                        var i = t = function(t, e) {
                            for (var i = [ t[0] ], n = 1, o = 0, s = t.length; n < s; n++) (function(t, e) {
                                var i = e.x - t.x;
                                e = e.y - t.y;
                                return i * i + e * e;
                            })(t[n], t[o]) > e && (i.push(t[n]), o = n);
                            o < s - 1 && i.push(t[s - 1]);
                            return i;
                        }(t, e *= e), n = i.length, o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
                        o[0] = o[n - 1] = 1, function t(e, i, n, o, s) {
                            var r, a, h, l = 0;
                            for (a = o + 1; a <= s - 1; a++) h = ri(e[a], e[o], e[s], !0), l < h && (r = a, 
                            l = h);
                            n < l && (i[r] = 1, t(e, i, n, o, r), t(e, i, n, r, s));
                        }(i, o, e, 0, n - 1);
                        var s, r = [];
                        for (s = 0; s < n; s++) o[s] && r.push(i[s]);
                        return r;
                    }
                    return t.slice();
                }
                function ii(t, e, i) {
                    return Math.sqrt(ri(t, e, i, !0));
                }
                function ni(t, e, i, n, o) {
                    var s, r, a, h = n ? ti : si(t, i), l = si(e, i);
                    for (ti = l; ;) {
                        if (!(h | l)) return [ t, e ];
                        if (h & l) return !1;
                        a = si(r = oi(t, e, s = h || l, i, o), i), s === h ? (t = r, h = a) : (e = r, l = a);
                    }
                }
                function oi(t, e, i, n, o) {
                    var s, r, a = e.x - t.x, h = (e = e.y - t.y, n.min);
                    n = n.max;
                    return 8 & i ? (s = t.x + a * (n.y - t.y) / e, r = n.y) : 4 & i ? (s = t.x + a * (h.y - t.y) / e, 
                    r = h.y) : 2 & i ? (s = n.x, r = t.y + e * (n.x - t.x) / a) : 1 & i && (s = h.x, 
                    r = t.y + e * (h.x - t.x) / a), new p(s, r, o);
                }
                function si(t, e) {
                    var i = 0;
                    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), 
                    i;
                }
                function ri(t, e, i, n) {
                    var o = e.x, s = (e = e.y, i.x - o), r = i.y - e, a = s * s + r * r;
                    return 0 < a && (1 < (a = ((t.x - o) * s + (t.y - e) * r) / a) ? (o = i.x, e = i.y) : 0 < a && (o += s * a, 
                    e += r * a)), s = t.x - o, r = t.y - e, n ? s * s + r * r : new p(o, e);
                }
                function I(t) {
                    return !d(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0];
                }
                function ai(t) {
                    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), 
                    I(t);
                }
                function hi(t, e) {
                    var i, n, o, s, r, a;
                    if (!t || 0 === t.length) throw new Error("latlngs not passed");
                    I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), 
                    t = t[0]);
                    for (var h = w([ 0, 0 ]), l = g(t), u = (l.getNorthWest().distanceTo(l.getSouthWest()) * l.getNorthEast().distanceTo(l.getNorthWest()) < 1700 && (h = Qe(t)), 
                    t.length), c = [], d = 0; d < u; d++) {
                        var _ = w(t[d]);
                        c.push(e.project(w([ _.lat - h.lat, _.lng - h.lng ])));
                    }
                    for (i = d = 0; d < u - 1; d++) i += c[d].distanceTo(c[d + 1]) / 2;
                    if (0 === i) a = c[0]; else for (n = d = 0; d < u - 1; d++) if (o = c[d], s = c[d + 1], 
                    i < (n += r = o.distanceTo(s))) {
                        a = [ s.x - (r = (n - i) / r) * (s.x - o.x), s.y - r * (s.y - o.y) ];
                        break;
                    }
                    l = e.unproject(m(a));
                    return w([ l.lat + h.lat, l.lng + h.lng ]);
                }
                vt = {
                    __proto__: null,
                    simplify: ei,
                    pointToSegmentDistance: ii,
                    closestPointOnSegment: function(t, e, i) {
                        return ri(t, e, i);
                    },
                    clipSegment: ni,
                    _getEdgeIntersection: oi,
                    _getBitCode: si,
                    _sqClosestPointOnSegment: ri,
                    isFlat: I,
                    _flat: ai,
                    polylineCenter: hi
                }, yt = {
                    project: function(t) {
                        return new p(t.lng, t.lat);
                    },
                    unproject: function(t) {
                        return new v(t.y, t.x);
                    },
                    bounds: new f([ -180, -90 ], [ 180, 90 ])
                }, xt = {
                    R: 6378137,
                    R_MINOR: 6356752.314245179,
                    bounds: new f([ -20037508.34279, -15496570.73972 ], [ 20037508.34279, 18764656.23138 ]),
                    project: function(t) {
                        var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = (o = Math.sqrt(1 - o * o), 
                        o * Math.sin(n));
                        s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2), n = -i * Math.log(Math.max(s, 1e-10));
                        return new p(t.lng * e * i, n);
                    },
                    unproject: function(t) {
                        for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++) e = s * Math.sin(a), 
                        e = Math.pow((1 - e) / (1 + e), s / 2), a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
                        return new v(a * i, t.x * i / n);
                    }
                }, wt = {
                    __proto__: null,
                    LonLat: yt,
                    Mercator: xt,
                    SphericalMercator: rt
                }, Pt = l({}, st, {
                    code: "EPSG:3395",
                    projection: xt,
                    transformation: ht(bt = .5 / (Math.PI * xt.R), .5, -bt, .5)
                });
                var li = l({}, st, {
                    code: "EPSG:4326",
                    projection: yt,
                    transformation: ht(1 / 180, 1, -1 / 180, .5)
                }), ui = (Lt = l({}, ot, {
                    projection: yt,
                    transformation: ht(1, 0, -1, 0),
                    scale: function(t) {
                        return Math.pow(2, t);
                    },
                    zoom: function(t) {
                        return Math.log(t) / Math.LN2;
                    },
                    distance: function(t, e) {
                        var i = e.lng - t.lng;
                        e = e.lat - t.lat;
                        return Math.sqrt(i * i + e * e);
                    },
                    infinite: !0
                }), o = (ot.Earth = st, ot.EPSG3395 = Pt, ot.EPSG3857 = lt, ot.EPSG900913 = ut, 
                ot.EPSG4326 = li, ot.Simple = Lt, it.extend({
                    options: {
                        pane: "overlayPane",
                        attribution: null,
                        bubblingMouseEvents: !0
                    },
                    addTo: function(t) {
                        return t.addLayer(this), this;
                    },
                    remove: function() {
                        return this.removeFrom(this._map || this._mapToAdd);
                    },
                    removeFrom: function(t) {
                        return t && t.removeLayer(this), this;
                    },
                    getPane: function(t) {
                        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
                    },
                    addInteractiveTarget: function(t) {
                        return this._map._targets[h(t)] = this;
                    },
                    removeInteractiveTarget: function(t) {
                        return delete this._map._targets[h(t)], this;
                    },
                    getAttribution: function() {
                        return this.options.attribution;
                    },
                    _layerAdd: function(t) {
                        var e, i = t.target;
                        i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && (e = this.getEvents(), 
                        i.on(e, this), this.once("remove", (function() {
                            i.off(e, this);
                        }), this)), this.onAdd(i), this.fire("add"), i.fire("layeradd", {
                            layer: this
                        }));
                    }
                })), A.include({
                    addLayer: function(t) {
                        var e;
                        if (t._layerAdd) return e = h(t), this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, 
                        t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
                        throw new Error("The provided object is not a Layer.");
                    },
                    removeLayer: function(t) {
                        var e = h(t);
                        return this._layers[e] && (this._loaded && t.onRemove(this), delete this._layers[e], 
                        this._loaded && (this.fire("layerremove", {
                            layer: t
                        }), t.fire("remove")), t._map = t._mapToAdd = null), this;
                    },
                    hasLayer: function(t) {
                        return h(t) in this._layers;
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers) t.call(e, this._layers[i]);
                        return this;
                    },
                    _addLayers: function(t) {
                        for (var e = 0, i = (t = t ? d(t) ? t : [ t ] : []).length; e < i; e++) this.addLayer(t[e]);
                    },
                    _addZoomLimit: function(t) {
                        isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[h(t)] = t, 
                        this._updateZoomLevels());
                    },
                    _removeZoomLimit: function(t) {
                        t = h(t);
                        this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
                    },
                    _updateZoomLevels: function() {
                        var t, e = 1 / 0, i = -1 / 0, n = this._getZoomSpan();
                        for (t in this._zoomBoundLayers) {
                            var o = this._zoomBoundLayers[t].options;
                            e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
                        }
                        this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = e === 1 / 0 ? void 0 : e, 
                        n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), 
                        void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
                    }
                }), o.extend({
                    initialize: function(t, e) {
                        var i, n;
                        if (c(this, e), this._layers = {}, t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
                    },
                    addLayer: function(t) {
                        var e = this.getLayerId(t);
                        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
                    },
                    removeLayer: function(t) {
                        t = t in this._layers ? t : this.getLayerId(t);
                        return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], 
                        this;
                    },
                    hasLayer: function(t) {
                        return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
                    },
                    clearLayers: function() {
                        return this.eachLayer(this.removeLayer, this);
                    },
                    invoke: function(t) {
                        var e, i, n = Array.prototype.slice.call(arguments, 1);
                        for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
                        return this;
                    },
                    onAdd: function(t) {
                        this.eachLayer(t.addLayer, t);
                    },
                    onRemove: function(t) {
                        this.eachLayer(t.removeLayer, t);
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers) t.call(e, this._layers[i]);
                        return this;
                    },
                    getLayer: function(t) {
                        return this._layers[t];
                    },
                    getLayers: function() {
                        var t = [];
                        return this.eachLayer(t.push, t), t;
                    },
                    setZIndex: function(t) {
                        return this.invoke("setZIndex", t);
                    },
                    getLayerId: h
                })), ci = ui.extend({
                    addLayer: function(t) {
                        return this.hasLayer(t) ? this : (t.addEventParent(this), ui.prototype.addLayer.call(this, t), 
                        this.fire("layeradd", {
                            layer: t
                        }));
                    },
                    removeLayer: function(t) {
                        return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this), 
                        ui.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                            layer: t
                        })) : this;
                    },
                    setStyle: function(t) {
                        return this.invoke("setStyle", t);
                    },
                    bringToFront: function() {
                        return this.invoke("bringToFront");
                    },
                    bringToBack: function() {
                        return this.invoke("bringToBack");
                    },
                    getBounds: function() {
                        var t, e = new s;
                        for (t in this._layers) {
                            var i = this._layers[t];
                            e.extend(i.getBounds ? i.getBounds() : i.getLatLng());
                        }
                        return e;
                    }
                }), di = et.extend({
                    options: {
                        popupAnchor: [ 0, 0 ],
                        tooltipAnchor: [ 0, 0 ],
                        crossOrigin: !1
                    },
                    initialize: function(t) {
                        c(this, t);
                    },
                    createIcon: function(t) {
                        return this._createIcon("icon", t);
                    },
                    createShadow: function(t) {
                        return this._createIcon("shadow", t);
                    },
                    _createIcon: function(t, e) {
                        var i = this._getIconUrl(t);
                        if (i) return i = this._createImg(i, e && "IMG" === e.tagName ? e : null), this._setIconStyles(i, t), 
                        !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), 
                        i;
                        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null;
                    },
                    _setIconStyles: function(t, e) {
                        var i = this.options, n = i[e + "Size"], o = (n = m(n = "number" == typeof n ? [ n, n ] : n), 
                        m("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0)));
                        t.className = "leaflet-marker-" + e + " " + (i.className || ""), o && (t.style.marginLeft = -o.x + "px", 
                        t.style.marginTop = -o.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px");
                    },
                    _createImg: function(t, e) {
                        return (e = e || document.createElement("img")).src = t, e;
                    },
                    _getIconUrl: function(t) {
                        return b.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
                    }
                });
                var _i = di.extend({
                    options: {
                        iconUrl: "marker-icon.png",
                        iconRetinaUrl: "marker-icon-2x.png",
                        shadowUrl: "marker-shadow.png",
                        iconSize: [ 25, 41 ],
                        iconAnchor: [ 12, 41 ],
                        popupAnchor: [ 1, -34 ],
                        tooltipAnchor: [ 16, -28 ],
                        shadowSize: [ 41, 41 ]
                    },
                    _getIconUrl: function(t) {
                        return "string" != typeof _i.imagePath && (_i.imagePath = this._detectIconPath()), 
                        (this.options.imagePath || _i.imagePath) + di.prototype._getIconUrl.call(this, t);
                    },
                    _stripUrl: function(t) {
                        function e(t, e, i) {
                            return (e = e.exec(t)) && e[i];
                        }
                        return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
                    },
                    _detectIconPath: function() {
                        var t = P("div", "leaflet-default-icon-path", document.body), e = pe(t, "background-image") || pe(t, "backgroundImage");
                        return document.body.removeChild(t), (e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : "";
                    }
                }), pi = n.extend({
                    initialize: function(t) {
                        this._marker = t;
                    },
                    addHooks: function() {
                        var t = this._marker._icon;
                        this._draggable || (this._draggable = new Xe(t, t, !0)), this._draggable.on({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).enable(), M(t, "leaflet-marker-draggable");
                    },
                    removeHooks: function() {
                        this._draggable.off({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).disable(), this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable");
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved;
                    },
                    _adjustPan: function(t) {
                        var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = Pe(e._icon), r = i.getPixelBounds(), a = i.getPixelOrigin();
                        a = _(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                        a.contains(s) || (o = m((Math.max(a.max.x, s.x) - a.max.x) / (r.max.x - a.max.x) - (Math.min(a.min.x, s.x) - a.min.x) / (r.min.x - a.min.x), (Math.max(a.max.y, s.y) - a.max.y) / (r.max.y - a.max.y) - (Math.min(a.min.y, s.y) - a.min.y) / (r.min.y - a.min.y)).multiplyBy(n), 
                        i.panBy(o, {
                            animate: !1
                        }), this._draggable._newPos._add(o), this._draggable._startPos._add(o), Z(e._icon, this._draggable._newPos), 
                        this._onDrag(t), this._panRequest = x(this._adjustPan.bind(this, t)));
                    },
                    _onDragStart: function() {
                        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), 
                        this._marker.fire("movestart").fire("dragstart");
                    },
                    _onPreDrag: function(t) {
                        this._marker.options.autoPan && (r(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t)));
                    },
                    _onDrag: function(t) {
                        var e = this._marker, i = e._shadow, n = Pe(e._icon), o = e._map.layerPointToLatLng(n);
                        i && Z(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
                    },
                    _onDragEnd: function(t) {
                        r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
                    }
                }), mi = o.extend({
                    options: {
                        icon: new _i,
                        interactive: !0,
                        keyboard: !0,
                        title: "",
                        alt: "Marker",
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250,
                        pane: "markerPane",
                        shadowPane: "shadowPane",
                        bubblingMouseEvents: !1,
                        autoPanOnFocus: !0,
                        draggable: !1,
                        autoPan: !1,
                        autoPanPadding: [ 50, 50 ],
                        autoPanSpeed: 10
                    },
                    initialize: function(t, e) {
                        c(this, e), this._latlng = w(t);
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), 
                        this._initIcon(), this.update();
                    },
                    onRemove: function(t) {
                        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), 
                        delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), 
                        this._removeIcon(), this._removeShadow();
                    },
                    getEvents: function() {
                        return {
                            zoom: this.update,
                            viewreset: this.update
                        };
                    },
                    getLatLng: function() {
                        return this._latlng;
                    },
                    setLatLng: function(t) {
                        var e = this._latlng;
                        return this._latlng = w(t), this.update(), this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng
                        });
                    },
                    setZIndexOffset: function(t) {
                        return this.options.zIndexOffset = t, this.update();
                    },
                    getIcon: function() {
                        return this.options.icon;
                    },
                    setIcon: function(t) {
                        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), 
                        this;
                    },
                    getElement: function() {
                        return this._icon;
                    },
                    update: function() {
                        var t;
                        return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), 
                        this._setPos(t)), this;
                    },
                    _initIcon: function() {
                        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1, o = (i = (i !== this._icon && (this._icon && this._removeIcon(), 
                        n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), 
                        M(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, 
                        t.riseOnHover && this.on({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }), this.options.autoPanOnFocus && S(i, "focus", this._panOnFocus, this), t.icon.createShadow(this._shadow)), 
                        !1);
                        i !== this._shadow && (this._removeShadow(), o = !0), i && (M(i, e), i.alt = ""), 
                        this._shadow = i, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), 
                        this._initInteraction(), i && o && this.getPane(t.shadowPane).appendChild(this._shadow);
                    },
                    _removeIcon: function() {
                        this.options.riseOnHover && this.off({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }), this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this), 
                        T(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
                    },
                    _removeShadow: function() {
                        this._shadow && T(this._shadow), this._shadow = null;
                    },
                    _setPos: function(t) {
                        this._icon && Z(this._icon, t), this._shadow && Z(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, 
                        this._resetZIndex();
                    },
                    _updateZIndex: function(t) {
                        this._icon && (this._icon.style.zIndex = this._zIndex + t);
                    },
                    _animateZoom: function(t) {
                        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(t);
                    },
                    _initInteraction: function() {
                        var t;
                        this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), 
                        pi && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), 
                        this.dragging.disable()), this.dragging = new pi(this), t && this.dragging.enable()));
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._map && this._updateOpacity(), this;
                    },
                    _updateOpacity: function() {
                        var t = this.options.opacity;
                        this._icon && C(this._icon, t), this._shadow && C(this._shadow, t);
                    },
                    _bringToFront: function() {
                        this._updateZIndex(this.options.riseOffset);
                    },
                    _resetZIndex: function() {
                        this._updateZIndex(0);
                    },
                    _panOnFocus: function() {
                        var t, e, i = this._map;
                        i && (t = (e = this.options.icon.options).iconSize ? m(e.iconSize) : m(0, 0), e = e.iconAnchor ? m(e.iconAnchor) : m(0, 0), 
                        i.panInside(this._latlng, {
                            paddingTopLeft: e,
                            paddingBottomRight: t.subtract(e)
                        }));
                    },
                    _getPopupAnchor: function() {
                        return this.options.icon.options.popupAnchor;
                    },
                    _getTooltipAnchor: function() {
                        return this.options.icon.options.tooltipAnchor;
                    }
                });
                var fi = o.extend({
                    options: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 3,
                        opacity: 1,
                        lineCap: "round",
                        lineJoin: "round",
                        dashArray: null,
                        dashOffset: null,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: .2,
                        fillRule: "evenodd",
                        interactive: !0,
                        bubblingMouseEvents: !0
                    },
                    beforeAdd: function(t) {
                        this._renderer = t.getRenderer(this);
                    },
                    onAdd: function() {
                        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
                    },
                    onRemove: function() {
                        this._renderer._removePath(this);
                    },
                    redraw: function() {
                        return this._map && this._renderer._updatePath(this), this;
                    },
                    setStyle: function(t) {
                        return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), 
                        this;
                    },
                    bringToFront: function() {
                        return this._renderer && this._renderer._bringToFront(this), this;
                    },
                    bringToBack: function() {
                        return this._renderer && this._renderer._bringToBack(this), this;
                    },
                    getElement: function() {
                        return this._path;
                    },
                    _reset: function() {
                        this._project(), this._update();
                    },
                    _clickTolerance: function() {
                        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
                    }
                }), gi = fi.extend({
                    options: {
                        fill: !0,
                        radius: 10
                    },
                    initialize: function(t, e) {
                        c(this, e), this._latlng = w(t), this._radius = this.options.radius;
                    },
                    setLatLng: function(t) {
                        var e = this._latlng;
                        return this._latlng = w(t), this.redraw(), this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng
                        });
                    },
                    getLatLng: function() {
                        return this._latlng;
                    },
                    setRadius: function(t) {
                        return this.options.radius = this._radius = t, this.redraw();
                    },
                    getRadius: function() {
                        return this._radius;
                    },
                    setStyle: function(t) {
                        var e = t && t.radius || this._radius;
                        return fi.prototype.setStyle.call(this, t), this.setRadius(e), this;
                    },
                    _project: function() {
                        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
                    },
                    _updateBounds: function() {
                        var t = this._radius, e = this._radiusY || t, i = this._clickTolerance();
                        t = [ t + i, e + i ];
                        this._pxBounds = new f(this._point.subtract(t), this._point.add(t));
                    },
                    _update: function() {
                        this._map && this._updatePath();
                    },
                    _updatePath: function() {
                        this._renderer._updateCircle(this);
                    },
                    _empty: function() {
                        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
                    },
                    _containsPoint: function(t) {
                        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
                    }
                });
                var vi = gi.extend({
                    initialize: function(t, e, i) {
                        if (c(this, e = "number" == typeof e ? l({}, i, {
                            radius: e
                        }) : e), this._latlng = w(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                        this._mRadius = this.options.radius;
                    },
                    setRadius: function(t) {
                        return this._mRadius = t, this.redraw();
                    },
                    getRadius: function() {
                        return this._mRadius;
                    },
                    getBounds: function() {
                        var t = [ this._radius, this._radiusY || this._radius ];
                        return new s(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
                    },
                    setStyle: fi.prototype.setStyle,
                    _project: function() {
                        var t, e, i, n, o, s = this._latlng.lng, r = this._latlng.lat, a = this._map, h = a.options.crs;
                        h.distance === st.distance ? (n = Math.PI / 180, o = this._mRadius / st.R / n, t = a.project([ r + o, s ]), 
                        e = a.project([ r - o, s ]), e = t.add(e).divideBy(2), i = a.unproject(e).lat, n = Math.acos((Math.cos(o * n) - Math.sin(r * n) * Math.sin(i * n)) / (Math.cos(r * n) * Math.cos(i * n))) / n, 
                        !isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * r)), this._point = e.subtract(a.getPixelOrigin()), 
                        this._radius = isNaN(n) ? 0 : e.x - a.project([ i, s - n ]).x, this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([ this._mRadius, 0 ])), 
                        this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(o).x), 
                        this._updateBounds();
                    }
                });
                var yi = fi.extend({
                    options: {
                        smoothFactor: 1,
                        noClip: !1
                    },
                    initialize: function(t, e) {
                        c(this, e), this._setLatLngs(t);
                    },
                    getLatLngs: function() {
                        return this._latlngs;
                    },
                    setLatLngs: function(t) {
                        return this._setLatLngs(t), this.redraw();
                    },
                    isEmpty: function() {
                        return !this._latlngs.length;
                    },
                    closestLayerPoint: function(t) {
                        for (var e = 1 / 0, i = null, n = ri, o = 0, s = this._parts.length; o < s; o++) for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
                            var l, u, c = n(t, l = r[a - 1], u = r[a], !0);
                            c < e && (e = c, i = n(t, l, u));
                        }
                        return i && (i.distance = Math.sqrt(e)), i;
                    },
                    getCenter: function() {
                        if (this._map) return hi(this._defaultShape(), this._map.options.crs);
                        throw new Error("Must add layer to map before using getCenter()");
                    },
                    getBounds: function() {
                        return this._bounds;
                    },
                    addLatLng: function(t, e) {
                        return e = e || this._defaultShape(), t = w(t), e.push(t), this._bounds.extend(t), 
                        this.redraw();
                    },
                    _setLatLngs: function(t) {
                        this._bounds = new s, this._latlngs = this._convertLatLngs(t);
                    },
                    _defaultShape: function() {
                        return I(this._latlngs) ? this._latlngs : this._latlngs[0];
                    },
                    _convertLatLngs: function(t) {
                        for (var e = [], i = I(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = w(t[n]), 
                        this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                        return e;
                    },
                    _project: function() {
                        var t = new f;
                        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, 
                        this._updateBounds());
                    },
                    _updateBounds: function() {
                        var t = this._clickTolerance();
                        t = new p(t, t);
                        this._rawPxBounds && (this._pxBounds = new f([ this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t) ]));
                    },
                    _projectLatlngs: function(t, e, i) {
                        var n, o, s = t[0] instanceof v, r = t.length;
                        if (s) {
                            for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                            e.push(o);
                        } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds;
                        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings; else for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++) for (e = 0, 
                        i = (o = this._rings[r]).length; e < i - 1; e++) (n = ni(o[e], o[e + 1], t, e, !0)) && (s[a] = s[a] || [], 
                        s[a].push(n[0]), n[1] === o[e + 1] && e !== i - 2 || (s[a].push(n[1]), a++));
                    },
                    _simplifyPoints: function() {
                        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = ei(t[i], e);
                    },
                    _update: function() {
                        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this);
                    },
                    _containsPoint: function(t, e) {
                        var i, n, o, s, r, a, h = this._clickTolerance();
                        if (this._pxBounds && this._pxBounds.contains(t)) for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, 
                        o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++) if ((e || 0 !== n) && ii(t, a[o], a[n]) <= h) return !0;
                        return !1;
                    }
                });
                yi._flat = ai;
                var xi = yi.extend({
                    options: {
                        fill: !0
                    },
                    isEmpty: function() {
                        return !this._latlngs.length || !this._latlngs[0].length;
                    },
                    getCenter: function() {
                        if (this._map) return $e(this._defaultShape(), this._map.options.crs);
                        throw new Error("Must add layer to map before using getCenter()");
                    },
                    _convertLatLngs: function(t) {
                        t = yi.prototype._convertLatLngs.call(this, t);
                        var e = t.length;
                        return 2 <= e && t[0] instanceof v && t[0].equals(t[e - 1]) && t.pop(), t;
                    },
                    _setLatLngs: function(t) {
                        yi.prototype._setLatLngs.call(this, t), I(this._latlngs) && (this._latlngs = [ this._latlngs ]);
                    },
                    _defaultShape: function() {
                        return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds, e = this.options.weight;
                        e = new p(e, e), t = new f(t.min.subtract(e), t.max.add(e));
                        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings; else for (var i, n = 0, o = this._rings.length; n < o; n++) (i = Je(this._rings[n], t, !0)).length && this._parts.push(i);
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this, !0);
                    },
                    _containsPoint: function(t) {
                        var e, i, n, o, s, r, a, h, l = !1;
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (o = 0, a = this._parts.length; o < a; o++) for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) i = e[s], 
                        n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
                        return l || yi.prototype._containsPoint.call(this, t, !0);
                    }
                });
                var wi = ci.extend({
                    initialize: function(t, e) {
                        c(this, e), this._layers = {}, t && this.addData(t);
                    },
                    addData: function(t) {
                        var e, i, n, o = d(t) ? t : t.features;
                        if (o) {
                            for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                            return this;
                        }
                        var s, r = this.options;
                        return (!r.filter || r.filter(t)) && (s = bi(t, r)) ? (s.feature = Zi(t), s.defaultOptions = s.options, 
                        this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this;
                    },
                    resetStyle: function(t) {
                        return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), 
                        this._setLayerStyle(t, this.options.style), this);
                    },
                    setStyle: function(e) {
                        return this.eachLayer((function(t) {
                            this._setLayerStyle(t, e);
                        }), this);
                    },
                    _setLayerStyle: function(t, e) {
                        t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
                    }
                });
                function bi(t, e) {
                    var i, n, o, s, r = "Feature" === t.type ? t.geometry : t, a = r ? r.coordinates : null, h = [], l = e && e.pointToLayer, u = e && e.coordsToLatLng || Li;
                    if (!a && !r) return null;
                    switch (r.type) {
                      case "Point":
                        return Pi(l, t, i = u(a), e);

                      case "MultiPoint":
                        for (o = 0, s = a.length; o < s; o++) i = u(a[o]), h.push(Pi(l, t, i, e));
                        return new ci(h);

                      case "LineString":
                      case "MultiLineString":
                        return n = Ti(a, "LineString" === r.type ? 0 : 1, u), new yi(n, e);

                      case "Polygon":
                      case "MultiPolygon":
                        return n = Ti(a, "Polygon" === r.type ? 1 : 2, u), new xi(n, e);

                      case "GeometryCollection":
                        for (o = 0, s = r.geometries.length; o < s; o++) {
                            var c = bi({
                                geometry: r.geometries[o],
                                type: "Feature",
                                properties: t.properties
                            }, e);
                            c && h.push(c);
                        }
                        return new ci(h);

                      case "FeatureCollection":
                        for (o = 0, s = r.features.length; o < s; o++) {
                            var d = bi(r.features[o], e);
                            d && h.push(d);
                        }
                        return new ci(h);

                      default:
                        throw new Error("Invalid GeoJSON object.");
                    }
                }
                function Pi(t, e, i, n) {
                    return t ? t(e, i) : new mi(i, n && n.markersInheritOptions && n);
                }
                function Li(t) {
                    return new v(t[1], t[0], t[2]);
                }
                function Ti(t, e, i) {
                    for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? Ti(t[s], e - 1, i) : (i || Li)(t[s]), 
                    o.push(n);
                    return o;
                }
                function Mi(t, e) {
                    return void 0 !== (t = w(t)).alt ? [ i(t.lng, e), i(t.lat, e), i(t.alt, e) ] : [ i(t.lng, e), i(t.lat, e) ];
                }
                function zi(t, e, i, n) {
                    for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? zi(t[s], I(t[s]) ? 0 : e - 1, i, n) : Mi(t[s], n));
                    return !e && i && 0 < o.length && o.push(o[0].slice()), o;
                }
                function Ci(t, e) {
                    return t.feature ? l({}, t.feature, {
                        geometry: e
                    }) : Zi(e);
                }
                function Zi(t) {
                    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                        type: "Feature",
                        properties: {},
                        geometry: t
                    };
                }
                Tt = {
                    toGeoJSON: function(t) {
                        return Ci(this, {
                            type: "Point",
                            coordinates: Mi(this.getLatLng(), t)
                        });
                    }
                };
                function Si(t, e) {
                    return new wi(t, e);
                }
                mi.include(Tt), vi.include(Tt), gi.include(Tt), yi.include({
                    toGeoJSON: function(t) {
                        var e = !I(this._latlngs);
                        return Ci(this, {
                            type: (e ? "Multi" : "") + "LineString",
                            coordinates: zi(this._latlngs, e ? 1 : 0, !1, t)
                        });
                    }
                }), xi.include({
                    toGeoJSON: function(t) {
                        var e = !I(this._latlngs), i = e && !I(this._latlngs[0]);
                        t = zi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                        return Ci(this, {
                            type: (i ? "Multi" : "") + "Polygon",
                            coordinates: t = e ? t : [ t ]
                        });
                    }
                }), ui.include({
                    toMultiPoint: function(e) {
                        var i = [];
                        return this.eachLayer((function(t) {
                            i.push(t.toGeoJSON(e).geometry.coordinates);
                        })), Ci(this, {
                            type: "MultiPoint",
                            coordinates: i
                        });
                    },
                    toGeoJSON: function(e) {
                        var i, n, t = this.feature && this.feature.geometry && this.feature.geometry.type;
                        return "MultiPoint" === t ? this.toMultiPoint(e) : (i = "GeometryCollection" === t, 
                        n = [], this.eachLayer((function(t) {
                            t.toGeoJSON && (t = t.toGeoJSON(e), i ? n.push(t.geometry) : "FeatureCollection" === (t = Zi(t)).type ? n.push.apply(n, t.features) : n.push(t));
                        })), i ? Ci(this, {
                            geometries: n,
                            type: "GeometryCollection"
                        }) : {
                            type: "FeatureCollection",
                            features: n
                        });
                    }
                });
                Mt = Si;
                var Ei = o.extend({
                    options: {
                        opacity: 1,
                        alt: "",
                        interactive: !1,
                        crossOrigin: !1,
                        errorOverlayUrl: "",
                        zIndex: 1,
                        className: ""
                    },
                    initialize: function(t, e, i) {
                        this._url = t, this._bounds = g(e), c(this, i);
                    },
                    onAdd: function() {
                        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), 
                        this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), 
                        this.getPane().appendChild(this._image), this._reset();
                    },
                    onRemove: function() {
                        T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._image && this._updateOpacity(), this;
                    },
                    setStyle: function(t) {
                        return t.opacity && this.setOpacity(t.opacity), this;
                    },
                    bringToFront: function() {
                        return this._map && fe(this._image), this;
                    },
                    bringToBack: function() {
                        return this._map && ge(this._image), this;
                    },
                    setUrl: function(t) {
                        return this._url = t, this._image && (this._image.src = t), this;
                    },
                    setBounds: function(t) {
                        return this._bounds = g(t), this._map && this._reset(), this;
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._reset,
                            viewreset: this._reset
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t, this._updateZIndex(), this;
                    },
                    getBounds: function() {
                        return this._bounds;
                    },
                    getElement: function() {
                        return this._image;
                    },
                    _initImage: function() {
                        var t = "IMG" === this._url.tagName, e = this._image = t ? this._url : P("img");
                        M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), 
                        this.options.className && M(e, this.options.className), e.onselectstart = u, e.onmousemove = u, 
                        e.onload = a(this.fire, this, "load"), e.onerror = a(this._overlayOnError, this, "error"), 
                        !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), 
                        this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, 
                        e.alt = this.options.alt);
                    },
                    _animateZoom: function(t) {
                        var e = this._map.getZoomScale(t.zoom);
                        t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        be(this._image, t, e);
                    },
                    _reset: function() {
                        var t = this._image, e = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), i = e.getSize();
                        Z(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
                    },
                    _updateOpacity: function() {
                        C(this._image, this.options.opacity);
                    },
                    _updateZIndex: function() {
                        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
                    },
                    _overlayOnError: function() {
                        this.fire("error");
                        var t = this.options.errorOverlayUrl;
                        t && this._url !== t && (this._url = t, this._image.src = t);
                    },
                    getCenter: function() {
                        return this._bounds.getCenter();
                    }
                }), ki = Ei.extend({
                    options: {
                        autoplay: !0,
                        loop: !0,
                        keepAspectRatio: !0,
                        muted: !1,
                        playsInline: !0
                    },
                    _initImage: function() {
                        var t = "VIDEO" === this._url.tagName, e = this._image = t ? this._url : P("video");
                        if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), 
                        this.options.className && M(e, this.options.className), e.onselectstart = u, e.onmousemove = u, 
                        e.onloadeddata = a(this.fire, this, "load"), t) {
                            for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
                            this._url = 0 < i.length ? n : [ e.src ];
                        } else {
                            d(this._url) || (this._url = [ this._url ]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), 
                            e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, 
                            e.playsInline = !!this.options.playsInline;
                            for (var s = 0; s < this._url.length; s++) {
                                var r = P("source");
                                r.src = this._url[s], e.appendChild(r);
                            }
                        }
                    }
                });
                var Oi = Ei.extend({
                    _initImage: function() {
                        var t = this._image = this._url;
                        M(t, "leaflet-image-layer"), this._zoomAnimated && M(t, "leaflet-zoom-animated"), 
                        this.options.className && M(t, this.options.className), t.onselectstart = u, t.onmousemove = u;
                    }
                });
                var Ai = o.extend({
                    options: {
                        interactive: !1,
                        offset: [ 0, 0 ],
                        className: "",
                        pane: void 0,
                        content: ""
                    },
                    initialize: function(t, e) {
                        t && (t instanceof v || d(t)) ? (this._latlng = w(t), c(this, e)) : (c(this, t), 
                        this._source = e), this.options.content && (this._content = this.options.content);
                    },
                    openOn: function(t) {
                        return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), 
                        this;
                    },
                    close: function() {
                        return this._map && this._map.removeLayer(this), this;
                    },
                    toggle: function(t) {
                        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, 
                        this._prepareOpen(), this.openOn(t._map)), this;
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && C(this._container, 0), 
                        clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), 
                        this.update(), t._fadeAnimated && C(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), 
                        this.addInteractiveTarget(this._container));
                    },
                    onRemove: function(t) {
                        t._fadeAnimated ? (C(this._container, 0), this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container), 
                        this.options.interactive && (z(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
                    },
                    getLatLng: function() {
                        return this._latlng;
                    },
                    setLatLng: function(t) {
                        return this._latlng = w(t), this._map && (this._updatePosition(), this._adjustPan()), 
                        this;
                    },
                    getContent: function() {
                        return this._content;
                    },
                    setContent: function(t) {
                        return this._content = t, this.update(), this;
                    },
                    getElement: function() {
                        return this._container;
                    },
                    update: function() {
                        this._map && (this._container.style.visibility = "hidden", this._updateContent(), 
                        this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", 
                        this._adjustPan());
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._updatePosition,
                            viewreset: this._updatePosition
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                    },
                    isOpen: function() {
                        return !!this._map && this._map.hasLayer(this);
                    },
                    bringToFront: function() {
                        return this._map && fe(this._container), this;
                    },
                    bringToBack: function() {
                        return this._map && ge(this._container), this;
                    },
                    _prepareOpen: function(t) {
                        if (!(i = this._source)._map) return !1;
                        if (i instanceof ci) {
                            var e, i = null, n = this._source._layers;
                            for (e in n) if (n[e]._map) {
                                i = n[e];
                                break;
                            }
                            if (!i) return !1;
                            this._source = i;
                        }
                        if (!t) if (i.getCenter) t = i.getCenter(); else if (i.getLatLng) t = i.getLatLng(); else {
                            if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
                            t = i.getBounds().getCenter();
                        }
                        return this.setLatLng(t), this._map && this.update(), !0;
                    },
                    _updateContent: function() {
                        if (this._content) {
                            var t = this._contentNode, e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                            if ("string" == typeof e) t.innerHTML = e; else {
                                for (;t.hasChildNodes(); ) t.removeChild(t.firstChild);
                                t.appendChild(e);
                            }
                            this.fire("contentupdate");
                        }
                    },
                    _updatePosition: function() {
                        var t, e, i;
                        this._map && (e = this._map.latLngToLayerPoint(this._latlng), t = m(this.options.offset), 
                        i = this._getAnchor(), this._zoomAnimated ? Z(this._container, e.add(i)) : t = t.add(e).add(i), 
                        e = this._containerBottom = -t.y, i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x, 
                        this._container.style.bottom = e + "px", this._container.style.left = i + "px");
                    },
                    _getAnchor: function() {
                        return [ 0, 0 ];
                    }
                }), Bi = (A.include({
                    _initOverlay: function(t, e, i, n) {
                        var o = e;
                        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
                    }
                }), o.include({
                    _initOverlay: function(t, e, i, n) {
                        var o = i;
                        return o instanceof t ? (c(o, n), o._source = this) : (o = e && !n ? e : new t(n, this)).setContent(i), 
                        o;
                    }
                }), Ai.extend({
                    options: {
                        pane: "popupPane",
                        offset: [ 0, 7 ],
                        maxWidth: 300,
                        minWidth: 50,
                        maxHeight: null,
                        autoPan: !0,
                        autoPanPaddingTopLeft: null,
                        autoPanPaddingBottomRight: null,
                        autoPanPadding: [ 5, 5 ],
                        keepInView: !1,
                        closeButton: !0,
                        autoClose: !0,
                        closeOnEscapeKey: !0,
                        className: ""
                    },
                    openOn: function(t) {
                        return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), 
                        t._popup = this, Ai.prototype.openOn.call(this, t);
                    },
                    onAdd: function(t) {
                        Ai.prototype.onAdd.call(this, t), t.fire("popupopen", {
                            popup: this
                        }), this._source && (this._source.fire("popupopen", {
                            popup: this
                        }, !0), this._source instanceof fi || this._source.on("preclick", Ae));
                    },
                    onRemove: function(t) {
                        Ai.prototype.onRemove.call(this, t), t.fire("popupclose", {
                            popup: this
                        }), this._source && (this._source.fire("popupclose", {
                            popup: this
                        }, !0), this._source instanceof fi || this._source.off("preclick", Ae));
                    },
                    getEvents: function() {
                        var t = Ai.prototype.getEvents.call(this);
                        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), 
                        this.options.keepInView && (t.moveend = this._adjustPan), t;
                    },
                    _initLayout: function() {
                        var t = "leaflet-popup", e = this._container = P("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"), i = this._wrapper = P("div", t + "-content-wrapper", e);
                        this._contentNode = P("div", t + "-content", i), Ie(e), Be(this._contentNode), S(e, "contextmenu", Ae), 
                        this._tipContainer = P("div", t + "-tip-container", e), this._tip = P("div", t + "-tip", this._tipContainer), 
                        this.options.closeButton && ((i = this._closeButton = P("a", t + "-close-button", e)).setAttribute("role", "button"), 
                        i.setAttribute("aria-label", "Close popup"), i.href = "#close", i.innerHTML = '<span aria-hidden="true">&#215;</span>', 
                        S(i, "click", (function(t) {
                            O(t), this.close();
                        }), this));
                    },
                    _updateLayout: function() {
                        var t = this._contentNode, e = t.style, i = (e.width = "", e.whiteSpace = "nowrap", 
                        t.offsetWidth), n = (i = Math.min(i, this.options.maxWidth), i = (i = Math.max(i, this.options.minWidth), 
                        e.width = i + 1 + "px", e.whiteSpace = "", e.height = "", t.offsetHeight), this.options.maxHeight), o = "leaflet-popup-scrolled";
                        (n && n < i ? (e.height = n + "px", M) : z)(t, o), this._containerWidth = this._container.offsetWidth;
                    },
                    _animateZoom: function(t) {
                        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        var e = this._getAnchor();
                        Z(this._container, t.add(e));
                    },
                    _adjustPan: function() {
                        var t, e, i, n, o, s, r, a;
                        this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), this._autopanning ? this._autopanning = !1 : (t = this._map, 
                        e = parseInt(pe(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + e, 
                        a = this._containerWidth, (i = new p(this._containerLeft, -e - this._containerBottom))._add(Pe(this._container)), 
                        i = t.layerPointToContainerPoint(i), o = m(this.options.autoPanPadding), n = m(this.options.autoPanPaddingTopLeft || o), 
                        o = m(this.options.autoPanPaddingBottomRight || o), s = t.getSize(), r = 0, i.x + a + o.x > s.x && (r = i.x + a - s.x + o.x), 
                        i.x - r - n.x < (a = 0) && (r = i.x - n.x), i.y + e + o.y > s.y && (a = i.y + e - s.y + o.y), 
                        i.y - a - n.y < 0 && (a = i.y - n.y), (r || a) && (this.options.keepInView && (this._autopanning = !0), 
                        t.fire("autopanstart").panBy([ r, a ]))));
                    },
                    _getAnchor: function() {
                        return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [ 0, 0 ]);
                    }
                })), Ii = (A.mergeOptions({
                    closePopupOnClick: !0
                }), A.include({
                    openPopup: function(t, e, i) {
                        return this._initOverlay(Bi, t, e, i).openOn(this), this;
                    },
                    closePopup: function(t) {
                        return (t = arguments.length ? t : this._popup) && t.close(), this;
                    }
                }), o.include({
                    bindPopup: function(t, e) {
                        return this._popup = this._initOverlay(Bi, this._popup, t, e), this._popupHandlersAdded || (this.on({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !0), this;
                    },
                    unbindPopup: function() {
                        return this._popup && (this.off({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !1, this._popup = null), this;
                    },
                    openPopup: function(t) {
                        return this._popup && (this instanceof ci || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), 
                        this;
                    },
                    closePopup: function() {
                        return this._popup && this._popup.close(), this;
                    },
                    togglePopup: function() {
                        return this._popup && this._popup.toggle(this), this;
                    },
                    isPopupOpen: function() {
                        return !!this._popup && this._popup.isOpen();
                    },
                    setPopupContent: function(t) {
                        return this._popup && this._popup.setContent(t), this;
                    },
                    getPopup: function() {
                        return this._popup;
                    },
                    _openPopup: function(t) {
                        var e;
                        this._popup && this._map && (Re(t), e = t.layer || t.target, this._popup._source !== e || e instanceof fi ? (this._popup._source = e, 
                        this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
                    },
                    _movePopup: function(t) {
                        this._popup.setLatLng(t.latlng);
                    },
                    _onKeyPress: function(t) {
                        13 === t.originalEvent.keyCode && this._openPopup(t);
                    }
                }), Ai.extend({
                    options: {
                        pane: "tooltipPane",
                        offset: [ 0, 0 ],
                        direction: "auto",
                        permanent: !1,
                        sticky: !1,
                        opacity: .9
                    },
                    onAdd: function(t) {
                        Ai.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                            tooltip: this
                        }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
                            tooltip: this
                        }, !0));
                    },
                    onRemove: function(t) {
                        Ai.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                            tooltip: this
                        }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
                            tooltip: this
                        }, !0));
                    },
                    getEvents: function() {
                        var t = Ai.prototype.getEvents.call(this);
                        return this.options.permanent || (t.preclick = this.close), t;
                    },
                    _initLayout: function() {
                        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                        this._contentNode = this._container = P("div", t), this._container.setAttribute("role", "tooltip"), 
                        this._container.setAttribute("id", "leaflet-tooltip-" + h(this));
                    },
                    _updateLayout: function() {},
                    _adjustPan: function() {},
                    _setPosition: function(t) {
                        var e, i = this._map, n = this._container, o = i.latLngToContainerPoint(i.getCenter()), s = (i = i.layerPointToContainerPoint(t), 
                        this.options.direction), r = n.offsetWidth, a = n.offsetHeight, h = m(this.options.offset), l = this._getAnchor();
                        i = "top" === s ? (e = r / 2, a) : "bottom" === s ? (e = r / 2, 0) : (e = "center" === s ? r / 2 : "right" === s ? 0 : "left" === s ? r : i.x < o.x ? (s = "right", 
                        0) : (s = "left", r + 2 * (h.x + l.x)), a / 2);
                        t = t.subtract(m(e, i, !0)).add(h).add(l), z(n, "leaflet-tooltip-right"), z(n, "leaflet-tooltip-left"), 
                        z(n, "leaflet-tooltip-top"), z(n, "leaflet-tooltip-bottom"), M(n, "leaflet-tooltip-" + s), 
                        Z(n, t);
                    },
                    _updatePosition: function() {
                        var t = this._map.latLngToLayerPoint(this._latlng);
                        this._setPosition(t);
                    },
                    setOpacity: function(t) {
                        this.options.opacity = t, this._container && C(this._container, t);
                    },
                    _animateZoom: function(t) {
                        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        this._setPosition(t);
                    },
                    _getAnchor: function() {
                        return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [ 0, 0 ]);
                    }
                })), Ri = (A.include({
                    openTooltip: function(t, e, i) {
                        return this._initOverlay(Ii, t, e, i).openOn(this), this;
                    },
                    closeTooltip: function(t) {
                        return t.close(), this;
                    }
                }), o.include({
                    bindTooltip: function(t, e) {
                        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t, e), 
                        this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), 
                        this;
                    },
                    unbindTooltip: function() {
                        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), 
                        this._tooltip = null), this;
                    },
                    _initTooltipInteractions: function(t) {
                        var e, i;
                        !t && this._tooltipHandlersAdded || (e = t ? "off" : "on", i = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip
                        }, this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, 
                        i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), 
                        this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t);
                    },
                    openTooltip: function(t) {
                        return this._tooltip && (this instanceof ci || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), 
                        this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), 
                        this;
                    },
                    closeTooltip: function() {
                        if (this._tooltip) return this._tooltip.close();
                    },
                    toggleTooltip: function() {
                        return this._tooltip && this._tooltip.toggle(this), this;
                    },
                    isTooltipOpen: function() {
                        return this._tooltip.isOpen();
                    },
                    setTooltipContent: function(t) {
                        return this._tooltip && this._tooltip.setContent(t), this;
                    },
                    getTooltip: function() {
                        return this._tooltip;
                    },
                    _addFocusListeners: function() {
                        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
                    },
                    _addFocusListenersOnLayer: function(t) {
                        var e = "function" == typeof t.getElement && t.getElement();
                        e && (S(e, "focus", (function() {
                            this._tooltip._source = t, this.openTooltip();
                        }), this), S(e, "blur", this.closeTooltip, this));
                    },
                    _setAriaDescribedByOnLayer: function(t) {
                        t = "function" == typeof t.getElement && t.getElement();
                        t && t.setAttribute("aria-describedby", this._tooltip._container.id);
                    },
                    _openTooltip: function(t) {
                        var e;
                        this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = !0, 
                        (e = this)._map.once("moveend", (function() {
                            e._openOnceFlag = !1, e._openTooltip(t);
                        }))) : (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)));
                    },
                    _moveTooltip: function(t) {
                        var e = t.latlng;
                        this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent), 
                        t = this._map.containerPointToLayerPoint(t), e = this._map.layerPointToLatLng(t)), 
                        this._tooltip.setLatLng(e);
                    }
                }), di.extend({
                    options: {
                        iconSize: [ 12, 12 ],
                        html: !1,
                        bgPos: null,
                        className: "leaflet-div-icon"
                    },
                    createIcon: function(t) {
                        t = t && "DIV" === t.tagName ? t : document.createElement("div");
                        var e = this.options;
                        return e.html instanceof Element ? (me(t), t.appendChild(e.html)) : t.innerHTML = !1 !== e.html ? e.html : "", 
                        e.bgPos && (e = m(e.bgPos), t.style.backgroundPosition = -e.x + "px " + -e.y + "px"), 
                        this._setIconStyles(t, "icon"), t;
                    },
                    createShadow: function() {
                        return null;
                    }
                }));
                di.Default = _i;
                var Ni = o.extend({
                    options: {
                        tileSize: 256,
                        opacity: 1,
                        updateWhenIdle: b.mobile,
                        updateWhenZooming: !0,
                        updateInterval: 200,
                        zIndex: 1,
                        bounds: null,
                        minZoom: 0,
                        maxZoom: void 0,
                        maxNativeZoom: void 0,
                        minNativeZoom: void 0,
                        noWrap: !1,
                        pane: "tilePane",
                        className: "",
                        keepBuffer: 2
                    },
                    initialize: function(t) {
                        c(this, t);
                    },
                    onAdd: function() {
                        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
                    },
                    beforeAdd: function(t) {
                        t._addZoomLimit(this);
                    },
                    onRemove: function(t) {
                        this._removeAllTiles(), T(this._container), t._removeZoomLimit(this), this._container = null, 
                        this._tileZoom = void 0;
                    },
                    bringToFront: function() {
                        return this._map && (fe(this._container), this._setAutoZIndex(Math.max)), this;
                    },
                    bringToBack: function() {
                        return this._map && (ge(this._container), this._setAutoZIndex(Math.min)), this;
                    },
                    getContainer: function() {
                        return this._container;
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._updateOpacity(), this;
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t, this._updateZIndex(), this;
                    },
                    isLoading: function() {
                        return this._loading;
                    },
                    redraw: function() {
                        var t;
                        return this._map && (this._removeAllTiles(), (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t, 
                        this._updateLevels()), this._update()), this;
                    },
                    getEvents: function() {
                        var t = {
                            viewprereset: this._invalidateAll,
                            viewreset: this._resetView,
                            zoom: this._resetView,
                            moveend: this._onMoveEnd
                        };
                        return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), 
                        t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), 
                        t;
                    },
                    createTile: function() {
                        return document.createElement("div");
                    },
                    getTileSize: function() {
                        var t = this.options.tileSize;
                        return t instanceof p ? t : new p(t, t);
                    },
                    _updateZIndex: function() {
                        this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
                    },
                    _setAutoZIndex: function(t) {
                        for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, 
                        i[o] !== this._container && e && (n = t(n, +e));
                        isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
                    },
                    _updateOpacity: function() {
                        if (this._map && !b.ielt9) {
                            C(this._container, this.options.opacity);
                            var t, e = +new Date, i = !1, n = !1;
                            for (t in this._tiles) {
                                var o, s = this._tiles[t];
                                s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200), C(s.el, o), o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s), 
                                s.active = !0));
                            }
                            n && !this._noPrune && this._pruneTiles(), i && (r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this));
                        }
                    },
                    _onOpaqueTile: u,
                    _initContainer: function() {
                        this._container || (this._container = P("div", "leaflet-layer " + (this.options.className || "")), 
                        this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
                    },
                    _updateLevels: function() {
                        var t = this._tileZoom, e = this.options.maxZoom;
                        if (void 0 !== t) {
                            for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), 
                            this._onUpdateLevel(i)) : (T(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), 
                            delete this._levels[i]);
                            var n = this._levels[t], o = this._map;
                            return n || ((n = this._levels[t] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container), 
                            n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), 
                            n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), u(n.el.offsetWidth), 
                            this._onCreateLevel(n)), this._level = n;
                        }
                    },
                    _onUpdateLevel: u,
                    _onRemoveLevel: u,
                    _onCreateLevel: u,
                    _pruneTiles: function() {
                        if (this._map) {
                            var t, e, i, n = this._map.getZoom();
                            if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles(); else {
                                for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
                                for (t in this._tiles) (i = this._tiles[t]).current && !i.active && (e = i.coords, 
                                this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
                                for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
                            }
                        }
                    },
                    _removeTilesAtZoom: function(t) {
                        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
                    },
                    _removeAllTiles: function() {
                        for (var t in this._tiles) this._removeTile(t);
                    },
                    _invalidateAll: function() {
                        for (var t in this._levels) T(this._levels[t].el), this._onRemoveLevel(Number(t)), 
                        delete this._levels[t];
                        this._removeAllTiles(), this._tileZoom = void 0;
                    },
                    _retainParent: function(t, e, i, n) {
                        t = Math.floor(t / 2), e = Math.floor(e / 2), i -= 1;
                        var o = new p(+t, +e);
                        o = (o.z = i, this._tileCoordsToKey(o)), o = this._tiles[o];
                        return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0), n < i && this._retainParent(t, e, i, n));
                    },
                    _retainChildren: function(t, e, i, n) {
                        for (var o = 2 * t; o < 2 * t + 2; o++) for (var s = 2 * e; s < 2 * e + 2; s++) {
                            var r = new p(o, s);
                            r = (r.z = i + 1, this._tileCoordsToKey(r)), r = this._tiles[r];
                            r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
                        }
                    },
                    _resetView: function(t) {
                        t = t && (t.pinch || t.flyTo);
                        this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
                    },
                    _animateZoom: function(t) {
                        this._setView(t.center, t.zoom, !0, t.noUpdate);
                    },
                    _clampZoom: function(t) {
                        var e = this.options;
                        return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t;
                    },
                    _setView: function(t, e, i, n) {
                        var o = Math.round(e), s = (o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o), 
                        this.options.updateWhenZooming && o !== this._tileZoom);
                        n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), 
                        this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), 
                        this._setZoomTransforms(t, e);
                    },
                    _setZoomTransforms: function(t, e) {
                        for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
                    },
                    _setZoomTransform: function(t, e, i) {
                        var n = this._map.getZoomScale(i, t.zoom);
                        e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                        b.any3d ? be(t.el, e, n) : Z(t.el, e);
                    },
                    _resetGrid: function() {
                        var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
                        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [ Math.floor(t.project([ 0, e.wrapLng[0] ], n).x / i.x), Math.ceil(t.project([ 0, e.wrapLng[1] ], n).x / i.y) ], 
                        this._wrapY = e.wrapLat && !this.options.noWrap && [ Math.floor(t.project([ e.wrapLat[0], 0 ], n).y / i.x), Math.ceil(t.project([ e.wrapLat[1], 0 ], n).y / i.y) ];
                    },
                    _onMoveEnd: function() {
                        this._map && !this._map._animatingZoom && this._update();
                    },
                    _getTiledPixelBounds: function(t) {
                        var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom();
                        i = e.getZoomScale(i, this._tileZoom), t = e.project(t, this._tileZoom).floor(), 
                        e = e.getSize().divideBy(2 * i);
                        return new f(t.subtract(e), t.add(e));
                    },
                    _update: function(t) {
                        var e = this._map;
                        if (e) {
                            var i = this._clampZoom(e.getZoom());
                            if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                                e = this._getTiledPixelBounds(t);
                                var n, o = this._pxBoundsToTileRange(e), s = o.getCenter(), r = [], a = (e = this.options.keepBuffer, 
                                new f(o.getBottomLeft().subtract([ e, -e ]), o.getTopRight().add([ e, -e ])));
                                if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                                for (n in this._tiles) {
                                    var h = this._tiles[n].coords;
                                    h.z === this._tileZoom && a.contains(new p(h.x, h.y)) || (this._tiles[n].current = !1);
                                }
                                if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i); else {
                                    for (var l = o.min.y; l <= o.max.y; l++) for (var u = o.min.x; u <= o.max.x; u++) {
                                        var c, d = new p(u, l);
                                        d.z = this._tileZoom, this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : r.push(d));
                                    }
                                    if (r.sort((function(t, e) {
                                        return t.distanceTo(s) - e.distanceTo(s);
                                    })), 0 !== r.length) {
                                        this._loading || (this._loading = !0, this.fire("loading"));
                                        var _ = document.createDocumentFragment();
                                        for (u = 0; u < r.length; u++) this._addTile(r[u], _);
                                        this._level.el.appendChild(_);
                                    }
                                }
                            }
                        }
                    },
                    _isValidTile: function(t) {
                        var e = this._map.options.crs;
                        if (!e.infinite) {
                            var i = this._globalTileRange;
                            if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1;
                        }
                        return !this.options.bounds || (e = this._tileCoordsToBounds(t), g(this.options.bounds).overlaps(e));
                    },
                    _keyToBounds: function(t) {
                        return this._tileCoordsToBounds(this._keyToTileCoords(t));
                    },
                    _tileCoordsToNwSe: function(t) {
                        var e = this._map, i = this.getTileSize(), n = t.scaleBy(i);
                        i = n.add(i);
                        return [ e.unproject(n, t.z), e.unproject(i, t.z) ];
                    },
                    _tileCoordsToBounds: function(t) {
                        t = this._tileCoordsToNwSe(t), t = new s(t[0], t[1]);
                        return t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t);
                    },
                    _tileCoordsToKey: function(t) {
                        return t.x + ":" + t.y + ":" + t.z;
                    },
                    _keyToTileCoords: function(t) {
                        t = t.split(":");
                        var e = new p(+t[0], +t[1]);
                        return e.z = +t[2], e;
                    },
                    _removeTile: function(t) {
                        var e = this._tiles[t];
                        e && (T(e.el), delete this._tiles[t], this.fire("tileunload", {
                            tile: e.el,
                            coords: this._keyToTileCoords(t)
                        }));
                    },
                    _initTile: function(t) {
                        M(t, "leaflet-tile");
                        var e = this.getTileSize();
                        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = u, t.onmousemove = u, 
                        b.ielt9 && this.options.opacity < 1 && C(t, this.options.opacity);
                    },
                    _addTile: function(t, e) {
                        var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
                        this._initTile(o), this.createTile.length < 2 && x(a(this._tileReady, this, t, null, o)), 
                        Z(o, i), this._tiles[n] = {
                            el: o,
                            coords: t,
                            current: !0
                        }, e.appendChild(o), this.fire("tileloadstart", {
                            tile: o,
                            coords: t
                        });
                    },
                    _tileReady: function(t, e, i) {
                        e && this.fire("tileerror", {
                            error: e,
                            tile: i,
                            coords: t
                        });
                        var n = this._tileCoordsToKey(t);
                        (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (C(i.el, 0), 
                        r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (i.active = !0, 
                        this._pruneTiles()), e || (M(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                            tile: i.el,
                            coords: t
                        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
                    },
                    _getTilePos: function(t) {
                        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
                    },
                    _wrapCoords: function(t) {
                        var e = new p(this._wrapX ? H(t.x, this._wrapX) : t.x, this._wrapY ? H(t.y, this._wrapY) : t.y);
                        return e.z = t.z, e;
                    },
                    _pxBoundsToTileRange: function(t) {
                        var e = this.getTileSize();
                        return new f(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([ 1, 1 ]));
                    },
                    _noTilesToLoad: function() {
                        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
                        return !0;
                    }
                });
                var Di = Ni.extend({
                    options: {
                        minZoom: 0,
                        maxZoom: 18,
                        subdomains: "abc",
                        errorTileUrl: "",
                        zoomOffset: 0,
                        tms: !1,
                        zoomReverse: !1,
                        detectRetina: !1,
                        crossOrigin: !1,
                        referrerPolicy: !1
                    },
                    initialize: function(t, e) {
                        this._url = t, (e = c(this, e)).detectRetina && b.retina && 0 < e.maxZoom ? (e.tileSize = Math.floor(e.tileSize / 2), 
                        e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, 
                        e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), 
                        "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
                    },
                    setUrl: function(t, e) {
                        return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), 
                        this;
                    },
                    createTile: function(t, e) {
                        var i = document.createElement("img");
                        return S(i, "load", a(this._tileOnLoad, this, e, i)), S(i, "error", a(this._tileOnError, this, e, i)), 
                        !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), 
                        "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy), 
                        i.alt = "", i.src = this.getTileUrl(t), i;
                    },
                    getTileUrl: function(t) {
                        var e = {
                            r: b.retina ? "@2x" : "",
                            s: this._getSubdomain(t),
                            x: t.x,
                            y: t.y,
                            z: this._getZoomForUrl()
                        };
                        return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y, 
                        this.options.tms && (e.y = t), e["-y"] = t), q(this._url, l(e, this.options));
                    },
                    _tileOnLoad: function(t, e) {
                        b.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e);
                    },
                    _tileOnError: function(t, e, i) {
                        var n = this.options.errorTileUrl;
                        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
                    },
                    _onTileRemove: function(t) {
                        t.tile.onload = null;
                    },
                    _getZoomForUrl: function() {
                        var t = this._tileZoom, e = this.options.maxZoom;
                        return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset;
                    },
                    _getSubdomain: function(t) {
                        t = Math.abs(t.x + t.y) % this.options.subdomains.length;
                        return this.options.subdomains[t];
                    },
                    _abortLoading: function() {
                        var t, e, i;
                        for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = u, 
                        i.onerror = u, i.complete || (i.src = K, e = this._tiles[t].coords, T(i), delete this._tiles[t], 
                        this.fire("tileabort", {
                            tile: i,
                            coords: e
                        })));
                    },
                    _removeTile: function(t) {
                        var e = this._tiles[t];
                        if (e) return e.el.setAttribute("src", K), Ni.prototype._removeTile.call(this, t);
                    },
                    _tileReady: function(t, e, i) {
                        if (this._map && (!i || i.getAttribute("src") !== K)) return Ni.prototype._tileReady.call(this, t, e, i);
                    }
                });
                function ji(t, e) {
                    return new Di(t, e);
                }
                var Hi = Di.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1,
                        version: "1.1.1"
                    },
                    options: {
                        crs: null,
                        uppercase: !1
                    },
                    initialize: function(t, e) {
                        this._url = t;
                        var i, n = l({}, this.defaultWmsParams);
                        for (i in e) i in this.options || (n[i] = e[i]);
                        t = (e = c(this, e)).detectRetina && b.retina ? 2 : 1;
                        var o = this.getTileSize();
                        n.width = o.x * t, n.height = o.y * t, this.wmsParams = n;
                    },
                    onAdd: function(t) {
                        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                        var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
                        this.wmsParams[e] = this._crs.code, Di.prototype.onAdd.call(this, t);
                    },
                    getTileUrl: function(t) {
                        var e = this._tileCoordsToNwSe(t), i = this._crs;
                        i = _(i.project(e[0]), i.project(e[1])), e = i.min, i = i.max, e = (1.3 <= this._wmsVersion && this._crs === li ? [ e.y, e.x, i.y, i.x ] : [ e.x, e.y, i.x, i.y ]).join(","), 
                        i = Di.prototype.getTileUrl.call(this, t);
                        return i + U(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e;
                    },
                    setParams: function(t, e) {
                        return l(this.wmsParams, t), e || this.redraw(), this;
                    }
                });
                Di.WMS = Hi, ji.wms = function(t, e) {
                    return new Hi(t, e);
                };
                var Wi = o.extend({
                    options: {
                        padding: .1
                    },
                    initialize: function(t) {
                        c(this, t), h(this), this._layers = this._layers || {};
                    },
                    onAdd: function() {
                        this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), 
                        this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
                    },
                    onRemove: function() {
                        this.off("update", this._updatePaths, this), this._destroyContainer();
                    },
                    getEvents: function() {
                        var t = {
                            viewreset: this._reset,
                            zoom: this._onZoom,
                            moveend: this._update,
                            zoomend: this._onZoomEnd
                        };
                        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
                    },
                    _onAnimZoom: function(t) {
                        this._updateTransform(t.center, t.zoom);
                    },
                    _onZoom: function() {
                        this._updateTransform(this._map.getCenter(), this._map.getZoom());
                    },
                    _updateTransform: function(t, e) {
                        var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(.5 + this.options.padding), o = this._map.project(this._center, e);
                        n = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
                        b.any3d ? be(this._container, n, i) : Z(this._container, n);
                    },
                    _reset: function() {
                        for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset();
                    },
                    _onZoomEnd: function() {
                        for (var t in this._layers) this._layers[t]._project();
                    },
                    _updatePaths: function() {
                        for (var t in this._layers) this._layers[t]._update();
                    },
                    _update: function() {
                        var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                        this._bounds = new f(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), 
                        this._zoom = this._map.getZoom();
                    }
                }), Fi = Wi.extend({
                    options: {
                        tolerance: 0
                    },
                    getEvents: function() {
                        var t = Wi.prototype.getEvents.call(this);
                        return t.viewprereset = this._onViewPreReset, t;
                    },
                    _onViewPreReset: function() {
                        this._postponeUpdatePaths = !0;
                    },
                    onAdd: function() {
                        Wi.prototype.onAdd.call(this), this._draw();
                    },
                    _initContainer: function() {
                        var t = this._container = document.createElement("canvas");
                        S(t, "mousemove", this._onMouseMove, this), S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), 
                        S(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
                    },
                    _destroyContainer: function() {
                        r(this._redrawRequest), delete this._ctx, T(this._container), k(this._container), 
                        delete this._container;
                    },
                    _updatePaths: function() {
                        if (!this._postponeUpdatePaths) {
                            for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                            this._redraw();
                        }
                    },
                    _update: function() {
                        var t, e, i, n;
                        this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), t = this._bounds, 
                        e = this._container, i = t.getSize(), n = b.retina ? 2 : 1, Z(e, t.min), e.width = n * i.x, 
                        e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", b.retina && this._ctx.scale(2, 2), 
                        this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
                    },
                    _reset: function() {
                        Wi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, 
                        this._updatePaths());
                    },
                    _initPath: function(t) {
                        this._updateDashArray(t);
                        t = (this._layers[h(t)] = t)._order = {
                            layer: t,
                            prev: this._drawLast,
                            next: null
                        };
                        this._drawLast && (this._drawLast.next = t), this._drawLast = t, this._drawFirst = this._drawFirst || this._drawLast;
                    },
                    _addPath: function(t) {
                        this._requestRedraw(t);
                    },
                    _removePath: function(t) {
                        var e = t._order, i = e.next;
                        e = e.prev;
                        i ? i.prev = e : this._drawLast = e, e ? e.next = i : this._drawFirst = i, delete t._order, 
                        delete this._layers[h(t)], this._requestRedraw(t);
                    },
                    _updatePath: function(t) {
                        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
                    },
                    _updateStyle: function(t) {
                        this._updateDashArray(t), this._requestRedraw(t);
                    },
                    _updateDashArray: function(t) {
                        if ("string" == typeof t.options.dashArray) {
                            for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
                                if (e = Number(i[o]), isNaN(e)) return;
                                n.push(e);
                            }
                            t.options._dashArray = n;
                        } else t.options._dashArray = t.options.dashArray;
                    },
                    _requestRedraw: function(t) {
                        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || x(this._redraw, this));
                    },
                    _extendRedrawBounds: function(t) {
                        var e;
                        t._pxBounds && (e = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new f, 
                        this._redrawBounds.extend(t._pxBounds.min.subtract([ e, e ])), this._redrawBounds.extend(t._pxBounds.max.add([ e, e ])));
                    },
                    _redraw: function() {
                        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), 
                        this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
                    },
                    _clear: function() {
                        var t, e = this._redrawBounds;
                        e ? (t = e.getSize(), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), 
                        this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), 
                        this._ctx.restore());
                    },
                    _draw: function() {
                        var t, e, i = this._redrawBounds;
                        this._ctx.save(), i && (e = i.getSize(), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), 
                        this._ctx.clip()), this._drawing = !0;
                        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                        this._drawing = !1, this._ctx.restore();
                    },
                    _updatePoly: function(t, e) {
                        if (this._drawing) {
                            var i, n, o, s, r = t._parts, a = r.length, h = this._ctx;
                            if (a) {
                                for (h.beginPath(), i = 0; i < a; i++) {
                                    for (n = 0, o = r[i].length; n < o; n++) s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                                    e && h.closePath();
                                }
                                this._fillStroke(h, t);
                            }
                        }
                    },
                    _updateCircle: function(t) {
                        var e, i, n, o;
                        this._drawing && !t._empty() && (e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), 
                        1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(), i.scale(1, o)), 
                        i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 != o && i.restore(), 
                        this._fillStroke(i, t));
                    },
                    _fillStroke: function(t, e) {
                        var i = e.options;
                        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, 
                        t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), 
                        t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, 
                        t.lineJoin = i.lineJoin, t.stroke());
                    },
                    _onClick: function(t) {
                        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) (e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(e) || (i = e));
                        this._fireEvent(!!i && [ i ], t);
                    },
                    _onMouseMove: function(t) {
                        var e;
                        !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t), 
                        this._handleMouseHover(t, e));
                    },
                    _handleMouseOut: function(t) {
                        var e = this._hoveredLayer;
                        e && (z(this._container, "leaflet-interactive"), this._fireEvent([ e ], t, "mouseout"), 
                        this._hoveredLayer = null, this._mouseHoverThrottled = !1);
                    },
                    _handleMouseHover: function(t, e) {
                        if (!this._mouseHoverThrottled) {
                            for (var i, n, o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (M(this._container, "leaflet-interactive"), 
                            this._fireEvent([ n ], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [ this._hoveredLayer ], t), 
                            this._mouseHoverThrottled = !0, setTimeout(a((function() {
                                this._mouseHoverThrottled = !1;
                            }), this), 32);
                        }
                    },
                    _fireEvent: function(t, e, i) {
                        this._map._fireDOMEvent(e, i || e.type, t);
                    },
                    _bringToFront: function(t) {
                        var e, i, n = t._order;
                        n && (e = n.next, i = n.prev, e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e), 
                        n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, 
                        this._requestRedraw(t)));
                    },
                    _bringToBack: function(t) {
                        var e, i, n = t._order;
                        n && (e = n.next, (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i), 
                        n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, 
                        this._requestRedraw(t)));
                    }
                });
                function Ui(t) {
                    return b.canvas ? new Fi(t) : null;
                }
                var Vi = function() {
                    try {
                        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">');
                        };
                    } catch (t) {}
                    return function(t) {
                        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
                    };
                }(), qi = (zt = {
                    _initContainer: function() {
                        this._container = P("div", "leaflet-vml-container");
                    },
                    _update: function() {
                        this._map._animatingZoom || (Wi.prototype._update.call(this), this.fire("update"));
                    },
                    _initPath: function(t) {
                        var e = t._container = Vi("shape");
                        M(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", 
                        t._path = Vi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[h(t)] = t;
                    },
                    _addPath: function(t) {
                        var e = t._container;
                        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
                    },
                    _removePath: function(t) {
                        var e = t._container;
                        T(e), t.removeInteractiveTarget(e), delete this._layers[h(t)];
                    },
                    _updateStyle: function(t) {
                        var e = t._stroke, i = t._fill, n = t.options, o = t._container;
                        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e = e || (t._stroke = Vi("stroke")), 
                        o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, 
                        n.dashArray ? e.dashStyle = d(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", 
                        e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), 
                        t._stroke = null), n.fill ? (i = i || (t._fill = Vi("fill")), o.appendChild(i), 
                        i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), 
                        t._fill = null);
                    },
                    _updateCircle: function(t) {
                        var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
                    },
                    _setPath: function(t, e) {
                        t._path.v = e;
                    },
                    _bringToFront: function(t) {
                        fe(t._container);
                    },
                    _bringToBack: function(t) {
                        ge(t._container);
                    }
                }, b.vml ? Vi : ct), Gi = Wi.extend({
                    _initContainer: function() {
                        this._container = qi("svg"), this._container.setAttribute("pointer-events", "none"), 
                        this._rootGroup = qi("g"), this._container.appendChild(this._rootGroup);
                    },
                    _destroyContainer: function() {
                        T(this._container), k(this._container), delete this._container, delete this._rootGroup, 
                        delete this._svgSize;
                    },
                    _update: function() {
                        var t, e, i;
                        this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), e = (t = this._bounds).getSize(), 
                        i = this._container, this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, 
                        i.setAttribute("width", e.x), i.setAttribute("height", e.y)), Z(i, t.min), i.setAttribute("viewBox", [ t.min.x, t.min.y, e.x, e.y ].join(" ")), 
                        this.fire("update"));
                    },
                    _initPath: function(t) {
                        var e = t._path = qi("path");
                        t.options.className && M(e, t.options.className), t.options.interactive && M(e, "leaflet-interactive"), 
                        this._updateStyle(t), this._layers[h(t)] = t;
                    },
                    _addPath: function(t) {
                        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), 
                        t.addInteractiveTarget(t._path);
                    },
                    _removePath: function(t) {
                        T(t._path), t.removeInteractiveTarget(t._path), delete this._layers[h(t)];
                    },
                    _updatePath: function(t) {
                        t._project(), t._update();
                    },
                    _updateStyle: function(t) {
                        var e = t._path;
                        t = t.options;
                        e && (t.stroke ? (e.setAttribute("stroke", t.color), e.setAttribute("stroke-opacity", t.opacity), 
                        e.setAttribute("stroke-width", t.weight), e.setAttribute("stroke-linecap", t.lineCap), 
                        e.setAttribute("stroke-linejoin", t.lineJoin), t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"), 
                        t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), 
                        t.fill ? (e.setAttribute("fill", t.fillColor || t.color), e.setAttribute("fill-opacity", t.fillOpacity), 
                        e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
                    },
                    _updatePoly: function(t, e) {
                        this._setPath(t, dt(t._parts, e));
                    },
                    _updateCircle: function(t) {
                        var e = t._point, i = Math.max(Math.round(t._radius), 1), n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ";
                        e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                        this._setPath(t, e);
                    },
                    _setPath: function(t, e) {
                        t._path.setAttribute("d", e);
                    },
                    _bringToFront: function(t) {
                        fe(t._path);
                    },
                    _bringToBack: function(t) {
                        ge(t._path);
                    }
                });
                function Ki(t) {
                    return b.svg || b.vml ? new Gi(t) : null;
                }
                b.vml && Gi.include(zt), A.include({
                    getRenderer: function(t) {
                        t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
                        return this.hasLayer(t) || this.addLayer(t), t;
                    },
                    _getPaneRenderer: function(t) {
                        var e;
                        return "overlayPane" !== t && void 0 !== t && (void 0 === (e = this._paneRenderers[t]) && (e = this._createRenderer({
                            pane: t
                        }), this._paneRenderers[t] = e), e);
                    },
                    _createRenderer: function(t) {
                        return this.options.preferCanvas && Ui(t) || Ki(t);
                    }
                });
                var Yi = xi.extend({
                    initialize: function(t, e) {
                        xi.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
                    },
                    setBounds: function(t) {
                        return this.setLatLngs(this._boundsToLatLngs(t));
                    },
                    _boundsToLatLngs: function(t) {
                        return [ (t = g(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast() ];
                    }
                });
                Gi.create = qi, Gi.pointsToPath = dt, wi.geometryToLayer = bi, wi.coordsToLatLng = Li, 
                wi.coordsToLatLngs = Ti, wi.latLngToCoords = Mi, wi.latLngsToCoords = zi, wi.getFeature = Ci, 
                wi.asFeature = Zi, A.mergeOptions({
                    boxZoom: !0
                });
                _t = n.extend({
                    initialize: function(t) {
                        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, 
                        this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
                    },
                    addHooks: function() {
                        S(this._container, "mousedown", this._onMouseDown, this);
                    },
                    removeHooks: function() {
                        k(this._container, "mousedown", this._onMouseDown, this);
                    },
                    moved: function() {
                        return this._moved;
                    },
                    _destroy: function() {
                        T(this._pane), delete this._pane;
                    },
                    _resetState: function() {
                        this._resetStateTimeout = 0, this._moved = !1;
                    },
                    _clearDeferredResetState: function() {
                        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
                    },
                    _onMouseDown: function(t) {
                        if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                        this._clearDeferredResetState(), this._resetState(), re(), Le(), this._startPoint = this._map.mouseEventToContainerPoint(t), 
                        S(document, {
                            contextmenu: Re,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this);
                    },
                    _onMouseMove: function(t) {
                        this._moved || (this._moved = !0, this._box = P("div", "leaflet-zoom-box", this._container), 
                        M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                        t = new f(this._point, this._startPoint);
                        var e = t.getSize();
                        Z(this._box, t.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
                    },
                    _finish: function() {
                        this._moved && (T(this._box), z(this._container, "leaflet-crosshair")), ae(), Te(), 
                        k(document, {
                            contextmenu: Re,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this);
                    },
                    _onMouseUp: function(t) {
                        1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), 
                        this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), t = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), 
                        this._map.fitBounds(t).fire("boxzoomend", {
                            boxZoomBounds: t
                        })));
                    },
                    _onKeyDown: function(t) {
                        27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
                    }
                }), Ct = (A.addInitHook("addHandler", "boxZoom", _t), A.mergeOptions({
                    doubleClickZoom: !0
                }), n.extend({
                    addHooks: function() {
                        this._map.on("dblclick", this._onDoubleClick, this);
                    },
                    removeHooks: function() {
                        this._map.off("dblclick", this._onDoubleClick, this);
                    },
                    _onDoubleClick: function(t) {
                        var e = this._map, i = e.getZoom(), n = e.options.zoomDelta;
                        i = t.originalEvent.shiftKey ? i - n : i + n;
                        "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i);
                    }
                })), Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct), A.mergeOptions({
                    dragging: !0,
                    inertia: !0,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    easeLinearity: .2,
                    worldCopyJump: !1,
                    maxBoundsViscosity: 0
                }), n.extend({
                    addHooks: function() {
                        var t;
                        this._draggable || (t = this._map, this._draggable = new Xe(t._mapPane, t._container), 
                        this._draggable.on({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), 
                        t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), M(this._map._container, "leaflet-grab leaflet-touch-drag"), 
                        this._draggable.enable(), this._positions = [], this._times = [];
                    },
                    removeHooks: function() {
                        z(this._map._container, "leaflet-grab"), z(this._map._container, "leaflet-touch-drag"), 
                        this._draggable.disable();
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved;
                    },
                    moving: function() {
                        return this._draggable && this._draggable._moving;
                    },
                    _onDragStart: function() {
                        var t, e = this._map;
                        e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = g(this._map.options.maxBounds), 
                        this._offsetLimit = _(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), 
                        this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, 
                        e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], 
                        this._times = []);
                    },
                    _onDrag: function(t) {
                        var e, i;
                        this._map.options.inertia && (e = this._lastTime = +new Date, i = this._lastPos = this._draggable._absPos || this._draggable._newPos, 
                        this._positions.push(i), this._times.push(e), this._prunePositions(e)), this._map.fire("move", t).fire("drag", t);
                    },
                    _prunePositions: function(t) {
                        for (;1 < this._positions.length && 50 < t - this._times[0]; ) this._positions.shift(), 
                        this._times.shift();
                    },
                    _onZoomEnd: function() {
                        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([ 0, 0 ]);
                        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
                    },
                    _viscousLimit: function(t, e) {
                        return t - (t - e) * this._viscosity;
                    },
                    _onPreDragLimit: function() {
                        var t, e;
                        this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), 
                        e = this._offsetLimit, t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), 
                        t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), 
                        t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
                    },
                    _onPreDragWrap: function() {
                        var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i;
                        n = (n + e + i) % t - e - i, t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
                        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = t;
                    },
                    _onDragEnd: function(t) {
                        var e, i, n, o, s = this._map, r = s.options, a = !r.inertia || t.noInertia || this._times.length < 2;
                        s.fire("dragend", t), !a && (this._prunePositions(+new Date), t = this._lastPos.subtract(this._positions[0]), 
                        a = (this._lastTime - this._times[0]) / 1e3, e = r.easeLinearity, a = (t = t.multiplyBy(e / a)).distanceTo([ 0, 0 ]), 
                        i = Math.min(r.inertiaMaxSpeed, a), t = t.multiplyBy(i / a), n = i / (r.inertiaDeceleration * e), 
                        (o = t.multiplyBy(-n / 2).round()).x || o.y) ? (o = s._limitOffset(o, s.options.maxBounds), 
                        x((function() {
                            s.panBy(o, {
                                duration: n,
                                easeLinearity: e,
                                noMoveStart: !0,
                                animate: !0
                            });
                        }))) : s.fire("moveend");
                    }
                })), St = (A.addInitHook("addHandler", "dragging", Zt), A.mergeOptions({
                    keyboard: !0,
                    keyboardPanDelta: 80
                }), n.extend({
                    keyCodes: {
                        left: [ 37 ],
                        right: [ 39 ],
                        down: [ 40 ],
                        up: [ 38 ],
                        zoomIn: [ 187, 107, 61, 171 ],
                        zoomOut: [ 189, 109, 54, 173 ]
                    },
                    initialize: function(t) {
                        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
                    },
                    addHooks: function() {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"), S(t, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.on({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this);
                    },
                    removeHooks: function() {
                        this._removeHooks(), k(this._map._container, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.off({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this);
                    },
                    _onMouseDown: function() {
                        var t, e, i;
                        this._focused || (i = document.body, t = document.documentElement, e = i.scrollTop || t.scrollTop, 
                        i = i.scrollLeft || t.scrollLeft, this._map._container.focus(), window.scrollTo(i, e));
                    },
                    _onFocus: function() {
                        this._focused = !0, this._map.fire("focus");
                    },
                    _onBlur: function() {
                        this._focused = !1, this._map.fire("blur");
                    },
                    _setPanDelta: function(t) {
                        for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [ -1 * t, 0 ];
                        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [ t, 0 ];
                        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [ 0, t ];
                        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [ 0, -1 * t ];
                    },
                    _setZoomDelta: function(t) {
                        for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
                        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
                    },
                    _addHooks: function() {
                        S(document, "keydown", this._onKeyDown, this);
                    },
                    _removeHooks: function() {
                        k(document, "keydown", this._onKeyDown, this);
                    },
                    _onKeyDown: function(t) {
                        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                            var e, i, n = t.keyCode, o = this._map;
                            if (n in this._panKeys) o._panAnim && o._panAnim._inProgress || (i = this._panKeys[n], 
                            t.shiftKey && (i = m(i).multiplyBy(3)), o.options.maxBounds && (i = o._limitOffset(m(i), o.options.maxBounds)), 
                            o.options.worldCopyJump ? (e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))), 
                            o.panTo(e)) : o.panBy(i)); else if (n in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]); else {
                                if (27 !== n || !o._popup || !o._popup.options.closeOnEscapeKey) return;
                                o.closePopup();
                            }
                            Re(t);
                        }
                    }
                })), Et = (A.addInitHook("addHandler", "keyboard", St), A.mergeOptions({
                    scrollWheelZoom: !0,
                    wheelDebounceTime: 40,
                    wheelPxPerZoomLevel: 60
                }), n.extend({
                    addHooks: function() {
                        S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
                    },
                    removeHooks: function() {
                        k(this._map._container, "wheel", this._onWheelScroll, this);
                    },
                    _onWheelScroll: function(t) {
                        var e = He(t), i = this._map.options.wheelDebounceTime;
                        e = (this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), 
                        this._startTime || (this._startTime = +new Date), Math.max(i - (+new Date - this._startTime), 0));
                        clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), e), 
                        Re(t);
                    },
                    _performZoom: function() {
                        var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0, n = (t._stop(), 
                        this._delta / (4 * this._map.options.wheelPxPerZoomLevel));
                        n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, i = i ? Math.ceil(n / i) * i : n, 
                        n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
                        this._delta = 0, this._startTime = null, n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n));
                    }
                })), kt = (A.addInitHook("addHandler", "scrollWheelZoom", Et), A.mergeOptions({
                    tapHold: b.touchNative && b.safari && b.mobile,
                    tapTolerance: 15
                }), n.extend({
                    addHooks: function() {
                        S(this._map._container, "touchstart", this._onDown, this);
                    },
                    removeHooks: function() {
                        k(this._map._container, "touchstart", this._onDown, this);
                    },
                    _onDown: function(t) {
                        var e;
                        clearTimeout(this._holdTimeout), 1 === t.touches.length && (e = t.touches[0], this._startPos = this._newPos = new p(e.clientX, e.clientY), 
                        this._holdTimeout = setTimeout(a((function() {
                            this._cancel(), this._isTapValid() && (S(document, "touchend", O), S(document, "touchend touchcancel", this._cancelClickPrevent), 
                            this._simulateEvent("contextmenu", e));
                        }), this), 600), S(document, "touchend touchcancel contextmenu", this._cancel, this), 
                        S(document, "touchmove", this._onMove, this));
                    },
                    _cancelClickPrevent: function t() {
                        k(document, "touchend", O), k(document, "touchend touchcancel", t);
                    },
                    _cancel: function() {
                        clearTimeout(this._holdTimeout), k(document, "touchend touchcancel contextmenu", this._cancel, this), 
                        k(document, "touchmove", this._onMove, this);
                    },
                    _onMove: function(t) {
                        t = t.touches[0];
                        this._newPos = new p(t.clientX, t.clientY);
                    },
                    _isTapValid: function() {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
                    },
                    _simulateEvent: function(t, e) {
                        t = new MouseEvent(t, {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            screenX: e.screenX,
                            screenY: e.screenY,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                        t._simulated = !0, e.target.dispatchEvent(t);
                    }
                })), Ot = (A.addInitHook("addHandler", "tapHold", kt), A.mergeOptions({
                    touchZoom: b.touch,
                    bounceAtZoomLimits: !0
                }), n.extend({
                    addHooks: function() {
                        M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
                    },
                    removeHooks: function() {
                        z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
                    },
                    _onTouchStart: function(t) {
                        var e, i, n = this._map;
                        !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]), 
                        i = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), 
                        this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))), 
                        this._startDist = e.distanceTo(i), this._startZoom = n.getZoom(), this._moved = !1, 
                        this._zooming = !0, n._stop(), S(document, "touchmove", this._onTouchMove, this), 
                        S(document, "touchend touchcancel", this._onTouchEnd, this), O(t));
                    },
                    _onTouchMove: function(t) {
                        if (t.touches && 2 === t.touches.length && this._zooming) {
                            var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
                            if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), 
                            "center" === e.options.touchZoom) {
                                if (this._center = this._startLatLng, 1 == o) return;
                            } else {
                                i = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                                if (1 == o && 0 === i.x && 0 === i.y) return;
                                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom);
                            }
                            this._moved || (e._moveStart(!0, !1), this._moved = !0), r(this._animRequest);
                            n = a(e._move, e, this._center, this._zoom, {
                                pinch: !0,
                                round: !1
                            }, void 0);
                            this._animRequest = x(n, this, !0), O(t);
                        }
                    },
                    _onTouchEnd: function() {
                        this._moved && this._zooming ? (this._zooming = !1, r(this._animRequest), k(document, "touchmove", this._onTouchMove, this), 
                        k(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
                    }
                }));
                var Xi = (A.addInitHook("addHandler", "touchZoom", Ot), A.BoxZoom = _t, A.DoubleClickZoom = Ct, 
                A.Drag = Zt, A.Keyboard = St, A.ScrollWheelZoom = Et, A.TapHold = kt, A.TouchZoom = Ot, 
                t.Bounds = f, t.Browser = b, t.CRS = ot, t.Canvas = Fi, t.Circle = vi, t.CircleMarker = gi, 
                t.Class = et, t.Control = B, t.DivIcon = Ri, t.DivOverlay = Ai, t.DomEvent = mt, 
                t.DomUtil = pt, t.Draggable = Xe, t.Evented = it, t.FeatureGroup = ci, t.GeoJSON = wi, 
                t.GridLayer = Ni, t.Handler = n, t.Icon = di, t.ImageOverlay = Ei, t.LatLng = v, 
                t.LatLngBounds = s, t.Layer = o, t.LayerGroup = ui, t.LineUtil = vt, t.Map = A, 
                t.Marker = mi, t.Mixin = ft, t.Path = fi, t.Point = p, t.PolyUtil = gt, t.Polygon = xi, 
                t.Polyline = yi, t.Popup = Bi, t.PosAnimation = Fe, t.Projection = wt, t.Rectangle = Yi, 
                t.Renderer = Wi, t.SVG = Gi, t.SVGOverlay = Oi, t.TileLayer = Di, t.Tooltip = Ii, 
                t.Transformation = at, t.Util = tt, t.VideoOverlay = ki, t.bind = a, t.bounds = _, 
                t.canvas = Ui, t.circle = function(t, e, i) {
                    return new vi(t, e, i);
                }, t.circleMarker = function(t, e) {
                    return new gi(t, e);
                }, t.control = Ue, t.divIcon = function(t) {
                    return new Ri(t);
                }, t.extend = l, t.featureGroup = function(t, e) {
                    return new ci(t, e);
                }, t.geoJSON = Si, t.geoJson = Mt, t.gridLayer = function(t) {
                    return new Ni(t);
                }, t.icon = function(t) {
                    return new di(t);
                }, t.imageOverlay = function(t, e, i) {
                    return new Ei(t, e, i);
                }, t.latLng = w, t.latLngBounds = g, t.layerGroup = function(t, e) {
                    return new ui(t, e);
                }, t.map = function(t, e) {
                    return new A(t, e);
                }, t.marker = function(t, e) {
                    return new mi(t, e);
                }, t.point = m, t.polygon = function(t, e) {
                    return new xi(t, e);
                }, t.polyline = function(t, e) {
                    return new yi(t, e);
                }, t.popup = function(t, e) {
                    return new Bi(t, e);
                }, t.rectangle = function(t, e) {
                    return new Yi(t, e);
                }, t.setOptions = c, t.stamp = h, t.svg = Ki, t.svgOverlay = function(t, e, i) {
                    return new Oi(t, e, i);
                }, t.tileLayer = ji, t.tooltip = function(t, e) {
                    return new Ii(t, e);
                }, t.transformation = ht, t.version = "1.9.4", t.videoOverlay = function(t, e, i) {
                    return new ki(t, e, i);
                }, window.L);
                t.noConflict = function() {
                    return window.L = Xi, this;
                }, window.L = t;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_getSlideTransformEl(slideEl) {
            return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementTransitionEnd(el, callback) {
            function fireCallBack(e) {
                if (e.target !== el) return;
                callback.call(el, e);
                el.removeEventListener("transitionend", fireCallBack);
            }
            if (callback) el.addEventListener("transitionend", fireCallBack);
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function navigation_Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    const newSlideIndex = swiper.getSlideIndexByData(index);
                    const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                    if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) swiper.loopFix({
                        direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                        activeSlideIndex: newSlideIndex,
                        slideTo: false
                    });
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(params.clickableClass);
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) subEl.removeEventListener("click", onBulletClick);
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function effect_init_effectInit(params) {
            const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
            on("beforeInit", (() => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            }));
            on("setTranslate", (() => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            }));
            on("setTransition", ((_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            }));
            on("transitionEnd", (() => {
                if (swiper.params.effect !== effect) return;
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) return;
                    swiper.slides.forEach((slideEl => {
                        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                    }));
                    recreateShadows();
                }
            }));
            let requireUpdateOnVirtual;
            on("virtualUpdate", (() => {
                if (swiper.params.effect !== effect) return;
                if (!swiper.slides.length) requireUpdateOnVirtual = true;
                requestAnimationFrame((() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                }));
            }));
        }
        function effect_target_effectTarget(effectParams, slideEl) {
            const transformEl = utils_getSlideTransformEl(slideEl);
            if (transformEl !== slideEl) {
                transformEl.style.backfaceVisibility = "hidden";
                transformEl.style["-webkit-backface-visibility"] = "hidden";
            }
            return transformEl;
        }
        function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
            let {swiper, duration, transformElements, allSlides} = _ref;
            const {activeIndex} = swiper;
            const getSlide = el => {
                if (!el.parentElement) {
                    const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                    return slide;
                }
                return el.parentElement;
            };
            if (swiper.params.virtualTranslate && duration !== 0) {
                let eventTriggered = false;
                let transitionEndTarget;
                if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                    const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                }));
                transitionEndTarget.forEach((el => {
                    utils_elementTransitionEnd(el, (() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }));
                }));
            }
        }
        function effect_fade_EffectFade(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                fadeEffect: {
                    crossFade: false
                }
            });
            const setTranslate = () => {
                const {slides} = swiper;
                const params = swiper.params.fadeEffect;
                for (let i = 0; i < slides.length; i += 1) {
                    const slideEl = swiper.slides[i];
                    const offset = slideEl.swiperSlideOffset;
                    let tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    let ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                    const targetEl = effect_target_effectTarget(params, slideEl);
                    targetEl.style.opacity = slideOpacity;
                    targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
                }
            };
            const setTransition = duration => {
                const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                transformElements.forEach((el => {
                    el.style.transitionDuration = `${duration}ms`;
                }));
                effect_virtual_transition_end_effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformElements,
                    allSlides: true
                });
            };
            effect_init_effectInit({
                effect: "fade",
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        window.addEventListener("load", (function(e) {}));
        const cottagesSliders = document.querySelectorAll(".cottages .swiper");
        cottagesSliders.forEach((slider => {
            new swiper_core_Swiper(slider, {
                modules: [ navigation_Navigation, effect_fade_EffectFade, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                speed: 500,
                loop: true,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: ".cottages__slider-pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: slider.querySelector(".cottages__slider-btn.swiper-button_prev"),
                    nextEl: slider.querySelector(".cottages__slider-btn.swiper-button_next")
                }
            });
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var leaflet = __webpack_require__(531);
        const contacts = document.querySelector(".header__contacts");
        const nav = document.querySelector(".header__nav");
        if (contacts && nav) {
            const smallMobileMatchMedia = window.matchMedia("(max-width: 479.98px)");
            const onSmallMobileChange = e => {
                if (e.matches) nav.insertAdjacentElement("beforeend", contacts); else nav.insertAdjacentElement("beforebegin", contacts);
            };
            smallMobileMatchMedia.addEventListener("change", onSmallMobileChange);
            onSmallMobileChange(smallMobileMatchMedia);
        }
        const burger = document.querySelector(".burger");
        function closeMenu() {
            document.documentElement.classList.remove("menu-open");
            document.documentElement.classList.remove("lock");
        }
        burger?.addEventListener("click", (() => {
            if (document.documentElement.classList.contains("menu-open")) closeMenu(); else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                document.documentElement.classList.add("menu-open");
                document.documentElement.classList.add("lock");
            }
        }));
        const tabletMatchMedia = window.matchMedia("(min-width: 991.98px)");
        const onTabletChange = e => {
            if (e.matches) closeMenu();
        };
        tabletMatchMedia.addEventListener("change", onTabletChange);
        onTabletChange(tabletMatchMedia);
        function script_goto() {
            const gotoLinks = document.querySelectorAll("[data-goto]");
            if (!gotoLinks.length) return;
            gotoLinks.forEach((gotoLink => {
                gotoLink.addEventListener("click", (e => {
                    e.preventDefault();
                    closeMenu();
                    const gotoTargetEl = document.querySelector(gotoLink.dataset.goto);
                    if (!gotoTargetEl) return;
                    let targetElTop = gotoTargetEl.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: targetElTop,
                        behavior: "smooth"
                    });
                }));
            }));
        }
        script_goto();
        let goTopObserver = new IntersectionObserver((entries => {
            entries.forEach((entry => {
                const gotoBtn = document.querySelector(".go-top-btn");
                if (!gotoBtn) return;
                if (!entry.isIntersecting) gotoBtn.classList.remove("_hide"); else gotoBtn.classList.add("_hide");
            }));
        }), {});
        goTopObserver.observe(document.querySelector(".intro"));
        function addLileLayer(map) {
            leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }
        const mapMarker = leaflet.icon({
            iconUrl: "./img/marker.png",
            iconSize: [ 24, 40 ]
        });
        const locationMap = new leaflet.Map("location-map", {
            center: [ 51.067936, 71.42287 ],
            zoom: 13
        });
        leaflet.marker([ 51.06116, 71.43724 ], {
            icon: mapMarker
        }).addTo(locationMap);
        addLileLayer(locationMap);
        locationMap.addEventListener("click", (e => {
            console.log("e", e);
            window.open("https://www.openstreetmap.org/#map=13/51.067936/71.42287");
        }));
        const contactsMap = new leaflet.Map("contacts-map", {
            center: [ 51.12974, 71.42203 ],
            zoom: 16
        });
        leaflet.marker([ 51.13057, 71.42255 ], {
            icon: mapMarker
        }).addTo(contactsMap);
        addLileLayer(contactsMap);
        const zoomImgs = document.querySelectorAll("[data-zoom]");
        const zoomBlock = document.querySelector(".zoom-image");
        const zoomImage = document.querySelector(".zoom-image img");
        if (zoomImgs.length && zoomBlock && zoomImage) {
            zoomImgs.forEach((img => {
                img.addEventListener("click", (() => {
                    zoomImage.setAttribute("src", img.getAttribute("src"));
                    zoomImage.setAttribute("alt", img.getAttribute("alt"));
                    document.documentElement.classList.add("lock");
                    document.documentElement.classList.add("zoom-open");
                }));
            }));
            zoomBlock.addEventListener("click", (e => {
                if (e.target.closest(".zoom-image__body")) return;
                zoomImage.setAttribute("src", "");
                zoomImage.setAttribute("alt", "");
                document.documentElement.classList.remove("lock");
                document.documentElement.classList.remove("zoom-open");
            }));
        }
        window["FLS"] = true;
        isWebp();
    })();
})();