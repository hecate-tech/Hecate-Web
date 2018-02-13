function hexToRgb(t) {
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
        return e + e + i + i + n + n
    });
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
        r: parseInt(e[1], 16),
        g: parseInt(e[2], 16),
        b: parseInt(e[3], 16)
    } : null
}

function clamp(t, e, i) {
    return Math.min(Math.max(t, e), i)
}

function isInArray(t, e) {
    return e.indexOf(t) > -1
}
if (function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        "use strict";

        function i(t, e) {
            var i = (e = e || G).createElement("script");
            i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
        }

        function n(t) {
            var e = !!t && "length" in t && t.length,
                i = rt.type(t);
            return "function" !== i && !rt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function o(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function c(t, e, i) {
            return rt.isFunction(e) ? rt.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? rt.grep(t, function (t) {
                return t === e !== i
            }) : "string" != typeof e ? rt.grep(t, function (t) {
                return tt.call(e, t) > -1 !== i
            }) : At.test(e) ? rt.filter(e, t, i) : (e = rt.filter(e, t), rt.grep(t, function (t) {
                return tt.call(e, t) > -1 !== i && 1 === t.nodeType
            }))
        }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            return t
        }

        function a(t) {
            throw t
        }

        function l(t, e, i, n) {
            var o;
            try {
                t && rt.isFunction(o = t.promise) ? o.call(t).done(e).fail(i) : t && rt.isFunction(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }

        function p() {
            G.removeEventListener("DOMContentLoaded", p), t.removeEventListener("load", p), rt.ready()
        }

        function d() {
            this.expando = rt.expando + d.uid++
        }

        function u(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(_t, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = function (t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : wt.test(t) ? JSON.parse(t) : t)
                        }(i)
                    } catch (t) {}
                    Wt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function M(t, e, i, n) {
            var o, c = 1,
                s = 20,
                r = n ? function () {
                    return n.cur()
                } : function () {
                    return rt.css(t, e, "")
                },
                a = r(),
                l = i && i[3] || (rt.cssNumber[e] ? "" : "px"),
                p = (rt.cssNumber[e] || "px" !== l && +a) && Ct.exec(rt.css(t, e));
            if (p && p[3] !== l) {
                l = l || p[3], i = i || [], p = +a || 1;
                do {
                    c = c || ".5", p /= c, rt.style(t, e, p + l)
                } while (c !== (c = r() / a) && 1 !== c && --s)
            }
            return i && (p = +p || +a || 0, o = i[1] ? p + (i[1] + 1) * i[2] : +i[2], n && (n.unit = l, n.start = p, n.end = o)), o
        }

        function f(t) {
            var e, i = t.ownerDocument,
                n = t.nodeName,
                o = kt[n];
            return o || (e = i.body.appendChild(i.createElement(n)), o = rt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), kt[n] = o, o)
        }

        function h(t, e) {
            for (var i, n, o = [], c = 0, s = t.length; c < s; c++)(n = t[c]).style && (i = n.style.display, e ? ("none" === i && (o[c] = qt.get(n, "display") || null, o[c] || (n.style.display = "")), "" === n.style.display && Bt(n) && (o[c] = f(n))) : "none" !== i && (o[c] = "none", qt.set(n, "display", i)));
            for (c = 0; c < s; c++) null != o[c] && (t[c].style.display = o[c]);
            return t
        }

        function b(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? rt.merge([t], i) : i
        }

        function A(t, e) {
            for (var i = 0, n = t.length; i < n; i++) qt.set(t[i], "globalEval", !e || qt.get(e[i], "globalEval"))
        }

        function z(t, e, i, n, o) {
            for (var c, s, r, a, l, p, d = e.createDocumentFragment(), u = [], M = 0, f = t.length; M < f; M++)
                if ((c = t[M]) || 0 === c)
                    if ("object" === rt.type(c)) rt.merge(u, c.nodeType ? [c] : c);
                    else if (It.test(c)) {
                for (s = s || d.appendChild(e.createElement("div")), r = (Dt.exec(c) || ["", ""])[1].toLowerCase(), a = Pt[r] || Pt._default, s.innerHTML = a[1] + rt.htmlPrefilter(c) + a[2], p = a[0]; p--;) s = s.lastChild;
                rt.merge(u, s.childNodes), (s = d.firstChild).textContent = ""
            } else u.push(e.createTextNode(c));
            for (d.textContent = "", M = 0; c = u[M++];)
                if (n && rt.inArray(c, n) > -1) o && o.push(c);
                else if (l = rt.contains(c.ownerDocument, c), s = b(d.appendChild(c), "script"), l && A(s), i)
                for (p = 0; c = s[p++];) Rt.test(c.type || "") && i.push(c);
            return d
        }

        function m() {
            return !0
        }

        function g() {
            return !1
        }

        function v() {
            try {
                return G.activeElement
            } catch (t) {}
        }

        function O(t, e, i, n, o, c) {
            var s, r;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (r in e) O(t, r, i, n, e[r], c);
                return t
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = g;
            else if (!o) return t;
            return 1 === c && (s = o, o = function (t) {
                return rt().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = rt.guid++)), t.each(function () {
                rt.event.add(this, e, o, n, i)
            })
        }

        function y(t, e) {
            return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") ? rt(">tbody", t)[0] || t : t
        }

        function L(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function N(t) {
            var e = Gt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function T(t, e) {
            var i, n, o, c, s, r, a, l;
            if (1 === e.nodeType) {
                if (qt.hasData(t) && (c = qt.access(t), s = qt.set(e, c), l = c.events)) {
                    delete s.handle, s.events = {};
                    for (o in l)
                        for (i = 0, n = l[o].length; i < n; i++) rt.event.add(e, o, l[o][i])
                }
                Wt.hasData(t) && (r = Wt.access(t), a = rt.extend({}, r), Wt.set(e, a))
            }
        }

        function q(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && xt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function W(t, e, n, o) {
            e = J.apply([], e);
            var c, s, r, a, l, p, d = 0,
                u = t.length,
                M = u - 1,
                f = e[0],
                h = rt.isFunction(f);
            if (h || u > 1 && "string" == typeof f && !st.checkClone && Vt.test(f)) return t.each(function (i) {
                var c = t.eq(i);
                h && (e[0] = f.call(this, i, c.html())), W(c, e, n, o)
            });
            if (u && (c = z(e, t[0].ownerDocument, !1, t, o), s = c.firstChild, 1 === c.childNodes.length && (c = s), s || o)) {
                for (a = (r = rt.map(b(c, "script"), L)).length; d < u; d++) l = c, d !== M && (l = rt.clone(l, !0, !0), a && rt.merge(r, b(l, "script"))), n.call(t[d], l, d);
                if (a)
                    for (p = r[r.length - 1].ownerDocument, rt.map(r, N), d = 0; d < a; d++) l = r[d], Rt.test(l.type || "") && !qt.access(l, "globalEval") && rt.contains(p, l) && (l.src ? rt._evalUrl && rt._evalUrl(l.src) : i(l.textContent.replace(Kt, ""), p))
            }
            return t
        }

        function w(t, e, i) {
            for (var n, o = e ? rt.filter(e, t) : t, c = 0; null != (n = o[c]); c++) i || 1 !== n.nodeType || rt.cleanData(b(n)), n.parentNode && (i && rt.contains(n.ownerDocument, n) && A(b(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function _(t, e, i) {
            var n, o, c, s, r = t.style;
            return (i = i || Zt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), !st.pixelMarginRight() && Jt.test(s) && Qt.test(e) && (n = r.width, o = r.minWidth, c = r.maxWidth, r.minWidth = r.maxWidth = r.width = s, s = i.width, r.width = n, r.minWidth = o, r.maxWidth = c)), void 0 !== s ? s + "" : s
        }

        function S(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function C(t) {
            var e = rt.cssProps[t];
            return e || (e = rt.cssProps[t] = function (t) {
                if (t in ce) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = oe.length; i--;)
                    if ((t = oe[i] + e) in ce) return t
            }(t) || t), e
        }

        function X(t, e, i) {
            var n = Ct.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function B(t, e, i, n, o) {
            var c, s = 0;
            for (c = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; c < 4; c += 2) "margin" === i && (s += rt.css(t, i + Xt[c], !0, o)), n ? ("content" === i && (s -= rt.css(t, "padding" + Xt[c], !0, o)), "margin" !== i && (s -= rt.css(t, "border" + Xt[c] + "Width", !0, o))) : (s += rt.css(t, "padding" + Xt[c], !0, o), "padding" !== i && (s += rt.css(t, "border" + Xt[c] + "Width", !0, o)));
            return s
        }

        function E(t, e, i) {
            var n, o = Zt(t),
                c = _(t, e, o),
                s = "border-box" === rt.css(t, "boxSizing", !1, o);
            return Jt.test(c) ? c : (n = s && (st.boxSizingReliable() || c === t.style[e]), "auto" === c && (c = t["offset" + e[0].toUpperCase() + e.slice(1)]), (c = parseFloat(c) || 0) + B(t, e, i || (s ? "border" : "content"), n, o) + "px")
        }

        function k(t, e, i, n, o) {
            return new k.prototype.init(t, e, i, n, o)
        }

        function x() {
            re && (!1 === G.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(x) : t.setTimeout(x, rt.fx.interval), rt.fx.tick())
        }

        function D() {
            return t.setTimeout(function () {
                se = void 0
            }), se = rt.now()
        }

        function R(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Xt[n], o["margin" + i] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function P(t, e, i) {
            for (var n, o = (I.tweeners[e] || []).concat(I.tweeners["*"]), c = 0, s = o.length; c < s; c++)
                if (n = o[c].call(i, e, t)) return n
        }

        function I(t, e, i) {
            var n, o, c = 0,
                s = I.prefilters.length,
                r = rt.Deferred().always(function () {
                    delete a.elem
                }),
                a = function () {
                    if (o) return !1;
                    for (var e = se || D(), i = Math.max(0, l.startTime + l.duration - e), n = 1 - (i / l.duration || 0), c = 0, s = l.tweens.length; c < s; c++) l.tweens[c].run(n);
                    return r.notifyWith(t, [l, n, i]), n < 1 && s ? i : (s || r.notifyWith(t, [l, 1, 0]), r.resolveWith(t, [l]), !1)
                },
                l = r.promise({
                    elem: t,
                    props: rt.extend({}, e),
                    opts: rt.extend(!0, {
                        specialEasing: {},
                        easing: rt.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: se || D(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = rt.Tween(t, l.opts, e, i, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? l.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < n; i++) l.tweens[i].run(1);
                        return e ? (r.notifyWith(t, [l, 1, 0]), r.resolveWith(t, [l, e])) : r.rejectWith(t, [l, e]), this
                    }
                }),
                p = l.props;
            for (function (t, e) {
                    var i, n, o, c, s;
                    for (i in t)
                        if (n = rt.camelCase(i), o = e[n], c = t[i], Array.isArray(c) && (o = c[1], c = t[i] = c[0]), i !== n && (t[n] = c, delete t[i]), (s = rt.cssHooks[n]) && "expand" in s) {
                            c = s.expand(c), delete t[n];
                            for (i in c) i in t || (t[i] = c[i], e[i] = o)
                        } else e[n] = o
                }(p, l.opts.specialEasing); c < s; c++)
                if (n = I.prefilters[c].call(l, t, p, l.opts)) return rt.isFunction(n.stop) && (rt._queueHooks(l.elem, l.opts.queue).stop = rt.proxy(n.stop, n)), n;
            return rt.map(p, P, l), rt.isFunction(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), rt.fx.timer(rt.extend(a, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })), l
        }

        function H(t) {
            return (t.match(Ot) || []).join(" ")
        }

        function j(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function F(t, e, i, n) {
            var o;
            if (Array.isArray(e)) rt.each(e, function (e, o) {
                i || me.test(t) ? n(t, o) : F(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== rt.type(e)) n(t, e);
            else
                for (o in e) F(t + "[" + o + "]", e[o], i, n)
        }

        function U(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    c = e.toLowerCase().match(Ot) || [];
                if (rt.isFunction(i))
                    for (; n = c[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function $(t, e, i, n) {
            function o(r) {
                var a;
                return c[r] = !0, rt.each(t[r] || [], function (t, r) {
                    var l = r(e, i, n);
                    return "string" != typeof l || s || c[l] ? s ? !(a = l) : void 0 : (e.dataTypes.unshift(l), o(l), !1)
                }), a
            }
            var c = {},
                s = t === _e;
            return o(e.dataTypes[0]) || !c["*"] && o("*")
        }

        function Y(t, e) {
            var i, n, o = rt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && rt.extend(!0, t, n), t
        }
        var V = [],
            G = t.document,
            K = Object.getPrototypeOf,
            Q = V.slice,
            J = V.concat,
            Z = V.push,
            tt = V.indexOf,
            et = {},
            it = et.toString,
            nt = et.hasOwnProperty,
            ot = nt.toString,
            ct = ot.call(Object),
            st = {},
            rt = function (t, e) {
                return new rt.fn.init(t, e)
            },
            at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            lt = /^-ms-/,
            pt = /-([a-z])/g,
            dt = function (t, e) {
                return e.toUpperCase()
            };
        rt.fn = rt.prototype = {
            jquery: "3.2.1",
            constructor: rt,
            length: 0,
            toArray: function () {
                return Q.call(this)
            },
            get: function (t) {
                return null == t ? Q.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return rt.each(this, t)
            },
            map: function (t) {
                return this.pushStack(rt.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function () {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: Z,
            sort: V.sort,
            splice: V.splice
        }, rt.extend = rt.fn.extend = function () {
            var t, e, i, n, o, c, s = arguments[0] || {},
                r = 1,
                a = arguments.length,
                l = !1;
            for ("boolean" == typeof s && (l = s, s = arguments[r] || {}, r++), "object" == typeof s || rt.isFunction(s) || (s = {}), r === a && (s = this, r--); r < a; r++)
                if (null != (t = arguments[r]))
                    for (e in t) i = s[e], n = t[e], s !== n && (l && n && (rt.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, c = i && Array.isArray(i) ? i : []) : c = i && rt.isPlainObject(i) ? i : {}, s[e] = rt.extend(l, c, n)) : void 0 !== n && (s[e] = n));
            return s
        }, rt.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === rt.type(t)
            },
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = rt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function (t) {
                var e, i;
                return !(!t || "[object Object]" !== it.call(t) || (e = K(t)) && ("function" != typeof (i = nt.call(e, "constructor") && e.constructor) || ot.call(i) !== ct))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? et[it.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                i(t)
            },
            camelCase: function (t) {
                return t.replace(lt, "ms-").replace(pt, dt)
            },
            each: function (t, e) {
                var i, o = 0;
                if (n(t))
                    for (i = t.length; o < i && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(at, "")
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
            },
            inArray: function (t, e, i) {
                return null == e ? -1 : tt.call(e, t, i)
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function (t, e, i) {
                for (var n = [], o = 0, c = t.length, s = !i; o < c; o++) !e(t[o], o) !== s && n.push(t[o]);
                return n
            },
            map: function (t, e, i) {
                var o, c, s = 0,
                    r = [];
                if (n(t))
                    for (o = t.length; s < o; s++) null != (c = e(t[s], s, i)) && r.push(c);
                else
                    for (s in t) null != (c = e(t[s], s, i)) && r.push(c);
                return J.apply([], r)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, o;
                if ("string" == typeof e && (i = t[e], e = t, t = i), rt.isFunction(t)) return n = Q.call(arguments, 2), o = function () {
                    return t.apply(e || this, n.concat(Q.call(arguments)))
                }, o.guid = t.guid = t.guid || rt.guid++, o
            },
            now: Date.now,
            support: st
        }), "function" == typeof Symbol && (rt.fn[Symbol.iterator] = V[Symbol.iterator]), rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            et["[object " + e + "]"] = e.toLowerCase()
        });
        var ut = function (t) {
            function e(t, e, i, n) {
                var o, c, s, r, a, l, p, u = e && e.ownerDocument,
                    f = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
                if (!n && ((e ? e.ownerDocument || e : R) !== S && _(e), e = e || S, X)) {
                    if (11 !== f && (a = ht.exec(t)))
                        if (o = a[1]) {
                            if (9 === f) {
                                if (!(s = e.getElementById(o))) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (u && (s = u.getElementById(o)) && x(e, s) && s.id === o) return i.push(s), i
                        } else {
                            if (a[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = a[3]) && g.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (g.qsa && !F[t + " "] && (!B || !B.test(t))) {
                        if (1 !== f) u = e, p = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((r = e.getAttribute("id")) ? r = r.replace(mt, gt) : e.setAttribute("id", r = D), c = (l = L(t)).length; c--;) l[c] = "#" + r + " " + M(l[c]);
                            p = l.join(","), u = bt.test(t) && d(e.parentNode) || e
                        }
                        if (p) try {
                            return K.apply(i, u.querySelectorAll(p)), i
                        } catch (t) {} finally {
                            r === D && e.removeAttribute("id")
                        }
                    }
                }
                return T(t.replace(ct, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > v.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[D] = !0, t
            }

            function o(t) {
                var e = S.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function c(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) v.attrHandle[i[n]] = e
            }

            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function r(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function p(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var o, c = t([], i.length, e), s = c.length; s--;) i[o = c[s]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function d(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function u() {}

            function M(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir,
                    o = e.next,
                    c = o || n,
                    s = i && "parentNode" === c,
                    r = I++;
                return e.first ? function (e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o);
                    return !1
                } : function (e, i, a) {
                    var l, p, d, u = [P, r];
                    if (a) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s)
                                if (d = e[D] || (e[D] = {}), p = d[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e;
                                else {
                                    if ((l = p[c]) && l[0] === P && l[1] === r) return u[2] = l[2];
                                    if (p[c] = u, u[2] = t(e, i, a)) return !0
                                } return !1
                }
            }

            function h(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function b(t, e, i, n, o) {
                for (var c, s = [], r = 0, a = t.length, l = null != e; r < a; r++)(c = t[r]) && (i && !i(c, n, o) || (s.push(c), l && e.push(r)));
                return s
            }

            function A(t, i, o, c, s, r) {
                return c && !c[D] && (c = A(c)), s && !s[D] && (s = A(s, r)), n(function (n, r, a, l) {
                    var p, d, u, M = [],
                        f = [],
                        h = r.length,
                        A = n || function (t, i, n) {
                            for (var o = 0, c = i.length; o < c; o++) e(t, i[o], n);
                            return n
                        }(i || "*", a.nodeType ? [a] : a, []),
                        z = !t || !n && i ? A : b(A, M, t, a, l),
                        m = o ? s || (n ? t : h || c) ? [] : r : z;
                    if (o && o(z, m, a, l), c)
                        for (p = b(m, f), c(p, [], a, l), d = p.length; d--;)(u = p[d]) && (m[f[d]] = !(z[f[d]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (p = [], d = m.length; d--;)(u = m[d]) && p.push(z[d] = u);
                                s(null, m = [], p, l)
                            }
                            for (d = m.length; d--;)(u = m[d]) && (p = s ? J(n, u) : M[d]) > -1 && (n[p] = !(r[p] = u))
                        }
                    } else m = b(m === r ? m.splice(h, m.length) : m), s ? s(null, r, m, l) : K.apply(r, m)
                })
            }

            function z(t) {
                for (var e, i, n, o = t.length, c = v.relative[t[0].type], s = c || v.relative[" "], r = c ? 1 : 0, a = f(function (t) {
                        return t === e
                    }, s, !0), l = f(function (t) {
                        return J(e, t) > -1
                    }, s, !0), p = [function (t, i, n) {
                        var o = !c && (n || i !== q) || ((e = i).nodeType ? a(t, i, n) : l(t, i, n));
                        return e = null, o
                    }]; r < o; r++)
                    if (i = v.relative[t[r].type]) p = [f(h(p), i)];
                    else {
                        if ((i = v.filter[t[r].type].apply(null, t[r].matches))[D]) {
                            for (n = ++r; n < o && !v.relative[t[n].type]; n++);
                            return A(r > 1 && h(p), r > 1 && M(t.slice(0, r - 1).concat({
                                value: " " === t[r - 2].type ? "*" : ""
                            })).replace(ct, "$1"), i, r < n && z(t.slice(r, n)), n < o && z(t = t.slice(n)), n < o && M(t))
                        }
                        p.push(i)
                    }
                return h(p)
            }
            var m, g, v, O, y, L, N, T, q, W, w, _, S, C, X, B, E, k, x, D = "sizzle" + 1 * new Date,
                R = t.document,
                P = 0,
                I = 0,
                H = i(),
                j = i(),
                F = i(),
                U = function (t, e) {
                    return t === e && (w = !0), 0
                },
                $ = {}.hasOwnProperty,
                Y = [],
                V = Y.pop,
                G = Y.push,
                K = Y.push,
                Q = Y.slice,
                J = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                ot = new RegExp(tt + "+", "g"),
                ct = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                st = new RegExp("^" + tt + "*," + tt + "*"),
                rt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                at = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                lt = new RegExp(nt),
                pt = new RegExp("^" + et + "$"),
                dt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + nt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ut = /^(?:input|select|textarea|button)$/i,
                Mt = /^h\d$/i,
                ft = /^[^{]+\{\s*\[native \w/,
                ht = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                At = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                zt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                mt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                gt = function (t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                vt = function () {
                    _()
                },
                Ot = f(function (t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply(Y = Q.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
            } catch (t) {
                K = {
                    apply: Y.length ? function (t, e) {
                        G.apply(t, Q.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            g = e.support = {}, y = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, _ = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : R;
                return n !== S && 9 === n.nodeType && n.documentElement ? (S = n, C = S.documentElement, X = !y(S), R !== S && (i = S.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", vt, !1) : i.attachEvent && i.attachEvent("onunload", vt)), g.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), g.getElementsByTagName = o(function (t) {
                    return t.appendChild(S.createComment("")), !t.getElementsByTagName("*").length
                }), g.getElementsByClassName = ft.test(S.getElementsByClassName), g.getById = o(function (t) {
                    return C.appendChild(t).id = D, !S.getElementsByName || !S.getElementsByName(D).length
                }), g.getById ? (v.filter.ID = function (t) {
                    var e = t.replace(At, zt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, v.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && X) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (v.filter.ID = function (t) {
                    var e = t.replace(At, zt);
                    return function (t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, v.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && X) {
                        var i, n, o, c = e.getElementById(t);
                        if (c) {
                            if ((i = c.getAttributeNode("id")) && i.value === t) return [c];
                            for (o = e.getElementsByName(t), n = 0; c = o[n++];)
                                if ((i = c.getAttributeNode("id")) && i.value === t) return [c]
                        }
                        return []
                    }
                }), v.find.TAG = g.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : g.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        o = 0,
                        c = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = c[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return c
                }, v.find.CLASS = g.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && X) return e.getElementsByClassName(t)
                }, E = [], B = [], (g.qsa = ft.test(S.querySelectorAll)) && (o(function (t) {
                    C.appendChild(t).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || B.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + D + "-]").length || B.push("~="), t.querySelectorAll(":checked").length || B.push(":checked"), t.querySelectorAll("a#" + D + "+*").length || B.push(".#.+[+~]")
                }), o(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = S.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && B.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && B.push(":enabled", ":disabled"), C.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && B.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), B.push(",.*:")
                })), (g.matchesSelector = ft.test(k = C.matches || C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.msMatchesSelector)) && o(function (t) {
                    g.disconnectedMatch = k.call(t, "*"), k.call(t, "[s!='']:x"), E.push("!=", nt)
                }), B = B.length && new RegExp(B.join("|")), E = E.length && new RegExp(E.join("|")), e = ft.test(C.compareDocumentPosition), x = e || ft.test(C.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e) return w = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !g.sortDetached && e.compareDocumentPosition(t) === i ? t === S || t.ownerDocument === R && x(R, t) ? -1 : e === S || e.ownerDocument === R && x(R, e) ? 1 : W ? J(W, t) - J(W, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return w = !0, 0;
                    var i, n = 0,
                        o = t.parentNode,
                        c = e.parentNode,
                        r = [t],
                        a = [e];
                    if (!o || !c) return t === S ? -1 : e === S ? 1 : o ? -1 : c ? 1 : W ? J(W, t) - J(W, e) : 0;
                    if (o === c) return s(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; r[n] === a[n];) n++;
                    return n ? s(r[n], a[n]) : r[n] === R ? -1 : a[n] === R ? 1 : 0
                }, S) : S
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== S && _(t), i = i.replace(at, "='$1']"), g.matchesSelector && X && !F[i + " "] && (!E || !E.test(i)) && (!B || !B.test(i))) try {
                    var n = k.call(t, i);
                    if (n || g.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, S, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== S && _(t), x(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== S && _(t);
                var i = v.attrHandle[e.toLowerCase()],
                    n = i && $.call(v.attrHandle, e.toLowerCase()) ? i(t, e, !X) : void 0;
                return void 0 !== n ? n : g.attributes || !X ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.escape = function (t) {
                return (t + "").replace(mt, gt)
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (w = !g.detectDuplicates, W = !g.sortStable && t.slice(0), t.sort(U), w) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return W = null, t
            }, O = e.getText = function (t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += O(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += O(e);
                return i
            }, (v = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(At, zt), t[3] = (t[3] || t[4] || t[5] || "").replace(At, zt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && lt.test(i) && (e = L(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(At, zt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, i, n) {
                        return function (o) {
                            var c = e.attr(o, t);
                            return null == c ? "!=" === i : !i || (c += "", "=" === i ? c === n : "!=" === i ? c !== n : "^=" === i ? n && 0 === c.indexOf(n) : "*=" === i ? n && c.indexOf(n) > -1 : "$=" === i ? n && c.slice(-n.length) === n : "~=" === i ? (" " + c.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i && (c === n || c.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (t, e, i, n, o) {
                        var c = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === n && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, a) {
                            var l, p, d, u, M, f, h = c !== s ? "nextSibling" : "previousSibling",
                                b = e.parentNode,
                                A = r && e.nodeName.toLowerCase(),
                                z = !a && !r,
                                m = !1;
                            if (b) {
                                if (c) {
                                    for (; h;) {
                                        for (u = e; u = u[h];)
                                            if (r ? u.nodeName.toLowerCase() === A : 1 === u.nodeType) return !1;
                                        f = h = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? b.firstChild : b.lastChild], s && z) {
                                    for (m = (M = (l = (p = (d = (u = b)[D] || (u[D] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === P && l[1]) && l[2], u = M && b.childNodes[M]; u = ++M && u && u[h] || (m = M = 0) || f.pop();)
                                        if (1 === u.nodeType && ++m && u === e) {
                                            p[t] = [P, M, m];
                                            break
                                        }
                                } else if (z && (u = e, d = u[D] || (u[D] = {}), p = d[u.uniqueID] || (d[u.uniqueID] = {}), l = p[t] || [], M = l[0] === P && l[1], m = M), !1 === m)
                                    for (;
                                        (u = ++M && u && u[h] || (m = M = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== A : 1 !== u.nodeType) || !++m || (z && (d = u[D] || (u[D] = {}), p = d[u.uniqueID] || (d[u.uniqueID] = {}), p[t] = [P, m]), u !== e)););
                                return (m -= o) === n || m % n == 0 && m / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, i) {
                        var o, c = v.pseudos[t] || v.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return c[D] ? c(i) : c.length > 1 ? (o = [t, t, "", i], v.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, o = c(t, i), s = o.length; s--;) n = J(t, o[s]), t[n] = !(e[n] = o[s])
                        }) : function (t) {
                            return c(t, 0, o)
                        }) : c
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            o = N(t.replace(ct, "$1"));
                        return o[D] ? n(function (t, e, i, n) {
                            for (var c, s = o(t, null, n, []), r = t.length; r--;)(c = s[r]) && (t[r] = !(e[r] = c))
                        }) : function (t, n, c) {
                            return e[0] = t, o(e, null, c, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function (t) {
                        return t = t.replace(At, zt),
                            function (e) {
                                return (e.textContent || e.innerText || O(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function (t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(At, zt).toLowerCase(),
                            function (e) {
                                var i;
                                do {
                                    if (i = X ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === C
                    },
                    focus: function (t) {
                        return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: l(!1),
                    disabled: l(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !v.pseudos.empty(t)
                    },
                    header: function (t) {
                        return Mt.test(t.nodeName)
                    },
                    input: function (t) {
                        return ut.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: p(function () {
                        return [0]
                    }),
                    last: p(function (t, e) {
                        return [e - 1]
                    }),
                    eq: p(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: p(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: p(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: p(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: p(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = v.pseudos.eq;
            for (m in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) v.pseudos[m] = r(m);
            for (m in {
                    submit: !0,
                    reset: !0
                }) v.pseudos[m] = a(m);
            return u.prototype = v.filters = v.pseudos, v.setFilters = new u, L = e.tokenize = function (t, i) {
                var n, o, c, s, r, a, l, p = j[t + " "];
                if (p) return i ? 0 : p.slice(0);
                for (r = t, a = [], l = v.preFilter; r;) {
                    n && !(o = st.exec(r)) || (o && (r = r.slice(o[0].length) || r), a.push(c = [])), n = !1, (o = rt.exec(r)) && (n = o.shift(), c.push({
                        value: n,
                        type: o[0].replace(ct, " ")
                    }), r = r.slice(n.length));
                    for (s in v.filter) !(o = dt[s].exec(r)) || l[s] && !(o = l[s](o)) || (n = o.shift(), c.push({
                        value: n,
                        type: s,
                        matches: o
                    }), r = r.slice(n.length));
                    if (!n) break
                }
                return i ? r.length : r ? e.error(t) : j(t, a).slice(0)
            }, N = e.compile = function (t, i) {
                var o, c = [],
                    s = [],
                    r = F[t + " "];
                if (!r) {
                    for (i || (i = L(t)), o = i.length; o--;)(r = z(i[o]))[D] ? c.push(r) : s.push(r);
                    (r = F(t, function (t, i) {
                        var o = i.length > 0,
                            c = t.length > 0,
                            s = function (n, s, r, a, l) {
                                var p, d, u, M = 0,
                                    f = "0",
                                    h = n && [],
                                    A = [],
                                    z = q,
                                    m = n || c && v.find.TAG("*", l),
                                    g = P += null == z ? 1 : Math.random() || .1,
                                    O = m.length;
                                for (l && (q = s === S || s || l); f !== O && null != (p = m[f]); f++) {
                                    if (c && p) {
                                        for (d = 0, s || p.ownerDocument === S || (_(p), r = !X); u = t[d++];)
                                            if (u(p, s || S, r)) {
                                                a.push(p);
                                                break
                                            }
                                        l && (P = g)
                                    }
                                    o && ((p = !u && p) && M--, n && h.push(p))
                                }
                                if (M += f, o && f !== M) {
                                    for (d = 0; u = i[d++];) u(h, A, s, r);
                                    if (n) {
                                        if (M > 0)
                                            for (; f--;) h[f] || A[f] || (A[f] = V.call(a));
                                        A = b(A)
                                    }
                                    K.apply(a, A), l && !n && A.length > 0 && M + i.length > 1 && e.uniqueSort(a)
                                }
                                return l && (P = g, q = z), h
                            };
                        return o ? n(s) : s
                    }(s, c))).selector = t
                }
                return r
            }, T = e.select = function (t, e, i, n) {
                var o, c, s, r, a, l = "function" == typeof t && t,
                    p = !n && L(t = l.selector || t);
                if (i = i || [], 1 === p.length) {
                    if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = c[0]).type && 9 === e.nodeType && X && v.relative[c[1].type]) {
                        if (!(e = (v.find.ID(s.matches[0].replace(At, zt), e) || [])[0])) return i;
                        l && (e = e.parentNode), t = t.slice(c.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : c.length; o-- && (s = c[o], !v.relative[r = s.type]);)
                        if ((a = v.find[r]) && (n = a(s.matches[0].replace(At, zt), bt.test(c[0].type) && d(e.parentNode) || e))) {
                            if (c.splice(o, 1), !(t = n.length && M(c))) return K.apply(i, n), i;
                            break
                        }
                }
                return (l || N(t, p))(n, e, !X, i, !e || bt.test(t) && d(e.parentNode) || e), i
            }, g.sortStable = D.split("").sort(U).join("") === D, g.detectDuplicates = !!w, _(), g.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(S.createElement("fieldset"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || c("type|href|height|width", function (t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), g.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || c("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || c(Z, function (t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.uniqueSort = rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains, rt.escapeSelector = ut.escape;
        var Mt = function (t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && rt(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            ft = function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            ht = rt.expr.match.needsContext,
            bt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            At = /^.[^:#\[\.,]*$/;
        rt.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function (t) {
                var e, i, n = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(rt(t).filter(function () {
                    for (e = 0; e < n; e++)
                        if (rt.contains(o[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < n; e++) rt.find(t, o[e], i);
                return n > 1 ? rt.uniqueSort(i) : i
            },
            filter: function (t) {
                return this.pushStack(c(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(c(this, t || [], !0))
            },
            is: function (t) {
                return !!c(this, "string" == typeof t && ht.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var zt, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (rt.fn.init = function (t, e, i) {
            var n, o;
            if (!t) return this;
            if (i = i || zt, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : mt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), bt.test(n[1]) && rt.isPlainObject(e))
                        for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (o = G.getElementById(n[2])) && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(rt) : rt.makeArray(t, this)
        }).prototype = rt.fn, zt = rt(G);
        var gt = /^(?:parents|prev(?:Until|All))/,
            vt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        rt.fn.extend({
            has: function (t) {
                var e = rt(t, this),
                    i = e.length;
                return this.filter(function () {
                    for (var t = 0; t < i; t++)
                        if (rt.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                var i, n = 0,
                    o = this.length,
                    c = [],
                    s = "string" != typeof t && rt(t);
                if (!ht.test(t))
                    for (; n < o; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                                c.push(i);
                                break
                            }
                return this.pushStack(c.length > 1 ? rt.uniqueSort(c) : c)
            },
            index: function (t) {
                return t ? "string" == typeof t ? tt.call(rt(t), this[0]) : tt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(rt.uniqueSort(rt.merge(this.get(), rt(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return Mt(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return Mt(t, "parentNode", i)
            },
            next: function (t) {
                return s(t, "nextSibling")
            },
            prev: function (t) {
                return s(t, "previousSibling")
            },
            nextAll: function (t) {
                return Mt(t, "nextSibling")
            },
            prevAll: function (t) {
                return Mt(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return Mt(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return Mt(t, "previousSibling", i)
            },
            siblings: function (t) {
                return ft((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return ft(t.firstChild)
            },
            contents: function (t) {
                return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t), rt.merge([], t.childNodes))
            }
        }, function (t, e) {
            rt.fn[t] = function (i, n) {
                var o = rt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = rt.filter(n, o)), this.length > 1 && (vt[t] || rt.uniqueSort(o), gt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Ot = /[^\x20\t\r\n\f]+/g;
        rt.Callbacks = function (t) {
            t = "string" == typeof t ? function (t) {
                var e = {};
                return rt.each(t.match(Ot) || [], function (t, i) {
                    e[i] = !0
                }), e
            }(t) : rt.extend({}, t);
            var e, i, n, o, c = [],
                s = [],
                r = -1,
                a = function () {
                    for (o = o || t.once, n = e = !0; s.length; r = -1)
                        for (i = s.shift(); ++r < c.length;) !1 === c[r].apply(i[0], i[1]) && t.stopOnFalse && (r = c.length, i = !1);
                    t.memory || (i = !1), e = !1, o && (c = i ? [] : "")
                },
                l = {
                    add: function () {
                        return c && (i && !e && (r = c.length - 1, s.push(i)), function e(i) {
                            rt.each(i, function (i, n) {
                                rt.isFunction(n) ? t.unique && l.has(n) || c.push(n) : n && n.length && "string" !== rt.type(n) && e(n)
                            })
                        }(arguments), i && !e && a()), this
                    },
                    remove: function () {
                        return rt.each(arguments, function (t, e) {
                            for (var i;
                                (i = rt.inArray(e, c, i)) > -1;) c.splice(i, 1), i <= r && r--
                        }), this
                    },
                    has: function (t) {
                        return t ? rt.inArray(t, c) > -1 : c.length > 0
                    },
                    empty: function () {
                        return c && (c = []), this
                    },
                    disable: function () {
                        return o = s = [], c = i = "", this
                    },
                    disabled: function () {
                        return !c
                    },
                    lock: function () {
                        return o = s = [], i || e || (c = i = ""), this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (t, i) {
                        return o || (i = i || [], i = [t, i.slice ? i.slice() : i], s.push(i), e || a()), this
                    },
                    fire: function () {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!n
                    }
                };
            return l
        }, rt.extend({
            Deferred: function (e) {
                var i = [
                        ["notify", "progress", rt.Callbacks("memory"), rt.Callbacks("memory"), 2],
                        ["resolve", "done", rt.Callbacks("once memory"), rt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", rt.Callbacks("once memory"), rt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    o = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return c.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return o.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return rt.Deferred(function (e) {
                                rt.each(i, function (i, n) {
                                    var o = rt.isFunction(t[n[4]]) && t[n[4]];
                                    c[n[1]](function () {
                                        var t = o && o.apply(this, arguments);
                                        t && rt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function (e, n, o) {
                            function c(e, i, n, o) {
                                return function () {
                                    var l = this,
                                        p = arguments,
                                        d = function () {
                                            var t, d;
                                            if (!(e < s)) {
                                                if ((t = n.apply(l, p)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                d = t && ("object" == typeof t || "function" == typeof t) && t.then, rt.isFunction(d) ? o ? d.call(t, c(s, i, r, o), c(s, i, a, o)) : (s++, d.call(t, c(s, i, r, o), c(s, i, a, o), c(s, i, r, i.notifyWith))) : (n !== r && (l = void 0, p = [t]), (o || i.resolveWith)(l, p))
                                            }
                                        },
                                        u = o ? d : function () {
                                            try {
                                                d()
                                            } catch (t) {
                                                rt.Deferred.exceptionHook && rt.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= s && (n !== a && (l = void 0, p = [t]), i.rejectWith(l, p))
                                            }
                                        };
                                    e ? u() : (rt.Deferred.getStackHook && (u.stackTrace = rt.Deferred.getStackHook()), t.setTimeout(u))
                                }
                            }
                            var s = 0;
                            return rt.Deferred(function (t) {
                                i[0][3].add(c(0, t, rt.isFunction(o) ? o : r, t.notifyWith)), i[1][3].add(c(0, t, rt.isFunction(e) ? e : r)), i[2][3].add(c(0, t, rt.isFunction(n) ? n : a))
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? rt.extend(t, o) : o
                        }
                    },
                    c = {};
                return rt.each(i, function (t, e) {
                    var s = e[2],
                        r = e[5];
                    o[e[1]] = s.add, r && s.add(function () {
                        n = r
                    }, i[3 - t][2].disable, i[0][2].lock), s.add(e[3].fire), c[e[0]] = function () {
                        return c[e[0] + "With"](this === c ? void 0 : this, arguments), this
                    }, c[e[0] + "With"] = s.fireWith
                }), o.promise(c), e && e.call(c, c), c
            },
            when: function (t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    o = Q.call(arguments),
                    c = rt.Deferred(),
                    s = function (t) {
                        return function (i) {
                            n[t] = this, o[t] = arguments.length > 1 ? Q.call(arguments) : i, --e || c.resolveWith(n, o)
                        }
                    };
                if (e <= 1 && (l(t, c.done(s(i)).resolve, c.reject, !e), "pending" === c.state() || rt.isFunction(o[i] && o[i].then))) return c.then();
                for (; i--;) l(o[i], s(i), c.reject);
                return c.promise()
            }
        });
        var yt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        rt.Deferred.exceptionHook = function (e, i) {
            t.console && t.console.warn && e && yt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
        }, rt.readyException = function (e) {
            t.setTimeout(function () {
                throw e
            })
        };
        var Lt = rt.Deferred();
        rt.fn.ready = function (t) {
            return Lt.then(t).catch(function (t) {
                rt.readyException(t)
            }), this
        }, rt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, !0 !== t && --rt.readyWait > 0 || Lt.resolveWith(G, [rt]))
            }
        }), rt.ready.then = Lt.then, "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(rt.ready) : (G.addEventListener("DOMContentLoaded", p), t.addEventListener("load", p));
        var Nt = function (t, e, i, n, o, c, s) {
                var r = 0,
                    a = t.length,
                    l = null == i;
                if ("object" === rt.type(i)) {
                    o = !0;
                    for (r in i) Nt(t, e, r, i[r], !0, c, s)
                } else if (void 0 !== n && (o = !0, rt.isFunction(n) || (s = !0), l && (s ? (e.call(t, n), e = null) : (l = e, e = function (t, e, i) {
                        return l.call(rt(t), i)
                    })), e))
                    for (; r < a; r++) e(t[r], i, s ? n : n.call(t[r], r, e(t[r], i)));
                return o ? t : l ? e.call(t) : a ? e(t[0], i) : c
            },
            Tt = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        d.uid = 1, d.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e) o[rt.camelCase(e)] = i;
                else
                    for (n in e) o[rt.camelCase(n)] = e[n];
                return o
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][rt.camelCase(e)]
            },
            access: function (t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function (t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(rt.camelCase) : (e = rt.camelCase(e), e = e in n ? [e] : e.match(Ot) || []), i = e.length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || rt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !rt.isEmptyObject(e)
            }
        };
        var qt = new d,
            Wt = new d,
            wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            _t = /[A-Z]/g;
        rt.extend({
            hasData: function (t) {
                return Wt.hasData(t) || qt.hasData(t)
            },
            data: function (t, e, i) {
                return Wt.access(t, e, i)
            },
            removeData: function (t, e) {
                Wt.remove(t, e)
            },
            _data: function (t, e, i) {
                return qt.access(t, e, i)
            },
            _removeData: function (t, e) {
                qt.remove(t, e)
            }
        }), rt.fn.extend({
            data: function (t, e) {
                var i, n, o, c = this[0],
                    s = c && c.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Wt.get(c), 1 === c.nodeType && !qt.get(c, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = rt.camelCase(n.slice(5)), u(c, n, o[n]));
                        qt.set(c, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    Wt.set(this, t)
                }) : Nt(this, function (e) {
                    var i;
                    if (c && void 0 === e) {
                        if (void 0 !== (i = Wt.get(c, t))) return i;
                        if (void 0 !== (i = u(c, t))) return i
                    } else this.each(function () {
                        Wt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    Wt.remove(this, t)
                })
            }
        }), rt.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = qt.get(t, e), i && (!n || Array.isArray(i) ? n = qt.access(t, e, rt.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = rt.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    c = rt._queueHooks(t, e);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete c.stop, o.call(t, function () {
                    rt.dequeue(t, e)
                }, c)), !n && c && c.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return qt.get(t, i) || qt.access(t, i, {
                    empty: rt.Callbacks("once memory").add(function () {
                        qt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), rt.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    rt.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    o = rt.Deferred(),
                    c = this,
                    s = this.length,
                    r = function () {
                        --n || o.resolveWith(c, [c])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = qt.get(c[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
                return r(), o.promise(e)
            }
        });
        var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ct = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
            Xt = ["Top", "Right", "Bottom", "Left"],
            Bt = function (t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && rt.contains(t.ownerDocument, t) && "none" === rt.css(t, "display")
            },
            Et = function (t, e, i, n) {
                var o, c, s = {};
                for (c in e) s[c] = t.style[c], t.style[c] = e[c];
                o = i.apply(t, n || []);
                for (c in e) t.style[c] = s[c];
                return o
            },
            kt = {};
        rt.fn.extend({
            show: function () {
                return h(this, !0)
            },
            hide: function () {
                return h(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Bt(this) ? rt(this).show() : rt(this).hide()
                })
            }
        });
        var xt = /^(?:checkbox|radio)$/i,
            Dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Rt = /^$|\/(?:java|ecma)script/i,
            Pt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, Pt.th = Pt.td;
        var It = /<|&#?\w+;/;
        ! function () {
            var t = G.createDocumentFragment().appendChild(G.createElement("div")),
                e = G.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), st.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", st.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ht = G.documentElement,
            jt = /^key/,
            Ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ut = /^([^.]*)(?:\.(.+)|)/;
        rt.event = {
            global: {},
            add: function (t, e, i, n, o) {
                var c, s, r, a, l, p, d, u, M, f, h, b = qt.get(t);
                if (b)
                    for (i.handler && (c = i, i = c.handler, o = c.selector), o && rt.find.matchesSelector(Ht, o), i.guid || (i.guid = rt.guid++), (a = b.events) || (a = b.events = {}), (s = b.handle) || (s = b.handle = function (e) {
                            return void 0 !== rt && rt.event.triggered !== e.type ? rt.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(Ot) || [""]).length; l--;) r = Ut.exec(e[l]) || [], M = h = r[1], f = (r[2] || "").split(".").sort(), M && (d = rt.event.special[M] || {}, M = (o ? d.delegateType : d.bindType) || M, d = rt.event.special[M] || {}, p = rt.extend({
                        type: M,
                        origType: h,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && rt.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, c), (u = a[M]) || (u = a[M] = [], u.delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(M, s)), d.add && (d.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), o ? u.splice(u.delegateCount++, 0, p) : u.push(p), rt.event.global[M] = !0)
            },
            remove: function (t, e, i, n, o) {
                var c, s, r, a, l, p, d, u, M, f, h, b = qt.hasData(t) && qt.get(t);
                if (b && (a = b.events)) {
                    for (l = (e = (e || "").match(Ot) || [""]).length; l--;)
                        if (r = Ut.exec(e[l]) || [], M = h = r[1], f = (r[2] || "").split(".").sort(), M) {
                            for (d = rt.event.special[M] || {}, u = a[M = (n ? d.delegateType : d.bindType) || M] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = c = u.length; c--;) p = u[c], !o && h !== p.origType || i && i.guid !== p.guid || r && !r.test(p.namespace) || n && n !== p.selector && ("**" !== n || !p.selector) || (u.splice(c, 1), p.selector && u.delegateCount--, d.remove && d.remove.call(t, p));
                            s && !u.length && (d.teardown && !1 !== d.teardown.call(t, f, b.handle) || rt.removeEvent(t, M, b.handle), delete a[M])
                        } else
                            for (M in a) rt.event.remove(t, M + e[l], i, n, !0);
                    rt.isEmptyObject(a) && qt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, i, n, o, c, s, r = rt.event.fix(t),
                    a = new Array(arguments.length),
                    l = (qt.get(this, "events") || {})[r.type] || [],
                    p = rt.event.special[r.type] || {};
                for (a[0] = r, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (r.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, r)) {
                    for (s = rt.event.handlers.call(this, r, l), e = 0;
                        (o = s[e++]) && !r.isPropagationStopped();)
                        for (r.currentTarget = o.elem, i = 0;
                            (c = o.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(c.namespace) || (r.handleObj = c, r.data = c.data, void 0 !== (n = ((rt.event.special[c.origType] || {}).handle || c.handler).apply(o.elem, a)) && !1 === (r.result = n) && (r.preventDefault(), r.stopPropagation()));
                    return p.postDispatch && p.postDispatch.call(this, r), r.result
                }
            },
            handlers: function (t, e) {
                var i, n, o, c, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && !("click" === t.type && t.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                            for (c = [], s = {}, i = 0; i < a; i++) n = e[i], o = n.selector + " ", void 0 === s[o] && (s[o] = n.needsContext ? rt(o, this).index(l) > -1 : rt.find(o, this, null, [l]).length), s[o] && c.push(n);
                            c.length && r.push({
                                elem: l,
                                handlers: c
                            })
                        }
                return l = this, a < e.length && r.push({
                    elem: l,
                    handlers: e.slice(a)
                }), r
            },
            addProp: function (t, e) {
                Object.defineProperty(rt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: rt.isFunction(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function (t) {
                return t[rt.expando] ? t : new rt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== v() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === v() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                    },
                    _default: function (t) {
                        return o(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, rt.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, rt.Event = function (t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? m : g, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            constructor: rt.Event,
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = m, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = m, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = m, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && jt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ft.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, rt.event.addProp), rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            rt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = t.relatedTarget,
                        o = t.handleObj;
                    return n && (n === this || rt.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), rt.fn.extend({
            on: function (t, e, i, n) {
                return O(this, t, e, i, n)
            },
            one: function (t, e, i, n) {
                return O(this, t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = g), this.each(function () {
                    rt.event.remove(this, t, i, e)
                })
            }
        });
        var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Yt = /<script|<style|<link/i,
            Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Gt = /^true\/(.*)/,
            Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        rt.extend({
            htmlPrefilter: function (t) {
                return t.replace($t, "<$1></$2>")
            },
            clone: function (t, e, i) {
                var n, o, c, s, r = t.cloneNode(!0),
                    a = rt.contains(t.ownerDocument, t);
                if (!(st.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                    for (s = b(r), c = b(t), n = 0, o = c.length; n < o; n++) q(c[n], s[n]);
                if (e)
                    if (i)
                        for (c = c || b(t), s = s || b(r), n = 0, o = c.length; n < o; n++) T(c[n], s[n]);
                    else T(t, r);
                return (s = b(r, "script")).length > 0 && A(s, !a && b(t, "script")), r
            },
            cleanData: function (t) {
                for (var e, i, n, o = rt.event.special, c = 0; void 0 !== (i = t[c]); c++)
                    if (Tt(i)) {
                        if (e = i[qt.expando]) {
                            if (e.events)
                                for (n in e.events) o[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, e.handle);
                            i[qt.expando] = void 0
                        }
                        i[Wt.expando] && (i[Wt.expando] = void 0)
                    }
            }
        }), rt.fn.extend({
            detach: function (t) {
                return w(this, t, !0)
            },
            remove: function (t) {
                return w(this, t)
            },
            text: function (t) {
                return Nt(this, function (t) {
                    return void 0 === t ? rt.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return W(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        y(this, t).appendChild(t)
                    }
                })
            },
            prepend: function () {
                return W(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return W(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return W(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (rt.cleanData(b(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return rt.clone(this, t, e)
                })
            },
            html: function (t) {
                return Nt(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Yt.test(t) && !Pt[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = rt.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (rt.cleanData(b(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return W(this, arguments, function (e) {
                    var i = this.parentNode;
                    rt.inArray(this, t) < 0 && (rt.cleanData(b(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            rt.fn[t] = function (t) {
                for (var i, n = [], o = rt(t), c = o.length - 1, s = 0; s <= c; s++) i = s === c ? this : this.clone(!0), rt(o[s])[e](i), Z.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Qt = /^margin/,
            Jt = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
            Zt = function (e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            };
        ! function () {
            function e() {
                if (r) {
                    r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Ht.appendChild(s);
                    var e = t.getComputedStyle(r);
                    i = "1%" !== e.top, c = "2px" === e.marginLeft, n = "4px" === e.width, r.style.marginRight = "50%", o = "4px" === e.marginRight, Ht.removeChild(s), r = null
                }
            }
            var i, n, o, c, s = G.createElement("div"),
                r = G.createElement("div");
            r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", st.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(r), rt.extend(st, {
                pixelPosition: function () {
                    return e(), i
                },
                boxSizingReliable: function () {
                    return e(), n
                },
                pixelMarginRight: function () {
                    return e(), o
                },
                reliableMarginLeft: function () {
                    return e(), c
                }
            }))
        }();
        var te = /^(none|table(?!-c[ea]).+)/,
            ee = /^--/,
            ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ne = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            oe = ["Webkit", "Moz", "ms"],
            ce = G.createElement("div").style;
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = _(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, c, s, r = rt.camelCase(e),
                        a = ee.test(e),
                        l = t.style;
                    return a || (e = C(r)), s = rt.cssHooks[e] || rt.cssHooks[r], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : ("string" === (c = typeof i) && (o = Ct.exec(i)) && o[1] && (i = M(t, e, o), c = "number"), void(null != i && i == i && ("number" === c && (i += o && o[3] || (rt.cssNumber[r] ? "" : "px")), st.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (a ? l.setProperty(e, i) : l[e] = i))))
                }
            },
            css: function (t, e, i, n) {
                var o, c, s, r = rt.camelCase(e);
                return ee.test(e) || (e = C(r)), (s = rt.cssHooks[e] || rt.cssHooks[r]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = _(t, e, n)), "normal" === o && e in ne && (o = ne[e]), "" === i || i ? (c = parseFloat(o), !0 === i || isFinite(c) ? c || 0 : o) : o
            }
        }), rt.each(["height", "width"], function (t, e) {
            rt.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i) return !te.test(rt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? E(t, e, n) : Et(t, ie, function () {
                        return E(t, e, n)
                    })
                },
                set: function (t, i, n) {
                    var o, c = n && Zt(t),
                        s = n && B(t, e, n, "border-box" === rt.css(t, "boxSizing", !1, c), c);
                    return s && (o = Ct.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = rt.css(t, e)), X(0, i, s)
                }
            }
        }), rt.cssHooks.marginLeft = S(st.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(_(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), rt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            rt.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, o = {}, c = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + Xt[n] + e] = c[n] || c[n - 2] || c[0];
                    return o
                }
            }, Qt.test(t) || (rt.cssHooks[t + e].set = X)
        }), rt.fn.extend({
            css: function (t, e) {
                return Nt(this, function (t, e, i) {
                    var n, o, c = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (n = Zt(t), o = e.length; s < o; s++) c[e[s]] = rt.css(t, e[s], !1, n);
                        return c
                    }
                    return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), rt.Tween = k, (k.prototype = {
            constructor: k,
            init: function (t, e, i, n, o, c) {
                this.elem = t, this.prop = i, this.easing = o || rt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = c || (rt.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = k.propHooks[this.prop];
                return t && t.get ? t.get(this) : k.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = k.propHooks[this.prop];
                return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : k.propHooks._default.set(this), this
            }
        }).init.prototype = k.prototype, (k.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = rt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function (t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[rt.cssProps[t.prop]] && !rt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : rt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = k.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, rt.fx = k.prototype.init, rt.fx.step = {};
        var se, re, ae = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;
        rt.Animation = rt.extend(I, {
                tweeners: {
                    "*": [function (t, e) {
                        var i = this.createTween(t, e);
                        return M(i.elem, t, Ct.exec(e), i), i
                    }]
                },
                tweener: function (t, e) {
                    rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ot);
                    for (var i, n = 0, o = t.length; n < o; n++) i = t[n], I.tweeners[i] = I.tweeners[i] || [], I.tweeners[i].unshift(e)
                },
                prefilters: [function (t, e, i) {
                    var n, o, c, s, r, a, l, p, d = "width" in e || "height" in e,
                        u = this,
                        M = {},
                        f = t.style,
                        b = t.nodeType && Bt(t),
                        A = qt.get(t, "fxshow");
                    i.queue || (null == (s = rt._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, r = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || r()
                    }), s.unqueued++, u.always(function () {
                        u.always(function () {
                            s.unqueued--, rt.queue(t, "fx").length || s.empty.fire()
                        })
                    }));
                    for (n in e)
                        if (o = e[n], ae.test(o)) {
                            if (delete e[n], c = c || "toggle" === o, o === (b ? "hide" : "show")) {
                                if ("show" !== o || !A || void 0 === A[n]) continue;
                                b = !0
                            }
                            M[n] = A && A[n] || rt.style(t, n)
                        }
                    if ((a = !rt.isEmptyObject(e)) || !rt.isEmptyObject(M)) {
                        d && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (l = A && A.display) && (l = qt.get(t, "display")), "none" === (p = rt.css(t, "display")) && (l ? p = l : (h([t], !0), l = t.style.display || l, p = rt.css(t, "display"), h([t]))), ("inline" === p || "inline-block" === p && null != l) && "none" === rt.css(t, "float") && (a || (u.done(function () {
                            f.display = l
                        }), null == l && (p = f.display, l = "none" === p ? "" : p)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function () {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        })), a = !1;
                        for (n in M) a || (A ? "hidden" in A && (b = A.hidden) : A = qt.access(t, "fxshow", {
                            display: l
                        }), c && (A.hidden = !b), b && h([t], !0), u.done(function () {
                            b || h([t]), qt.remove(t, "fxshow");
                            for (n in M) rt.style(t, n, M[n])
                        })), a = P(b ? A[n] : 0, n, u), n in A || (A[n] = a.start, b && (a.end = a.start, a.start = 0))
                    }
                }],
                prefilter: function (t, e) {
                    e ? I.prefilters.unshift(t) : I.prefilters.push(t)
                }
            }), rt.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? rt.extend({}, t) : {
                    complete: i || !i && e || rt.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !rt.isFunction(e) && e
                };
                return rt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in rt.fx.speeds ? n.duration = rt.fx.speeds[n.duration] : n.duration = rt.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
                }, n
            }, rt.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(Bt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function (t, e, i, n) {
                    var o = rt.isEmptyObject(t),
                        c = rt.speed(e, i, n),
                        s = function () {
                            var e = I(this, rt.extend({}, t), c);
                            (o || qt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === c.queue ? this.each(s) : this.queue(c.queue, s)
                },
                stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            c = rt.timers,
                            s = qt.get(this);
                        if (o) s[o] && s[o].stop && n(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && le.test(o) && n(s[o]);
                        for (o = c.length; o--;) c[o].elem !== this || null != t && c[o].queue !== t || (c[o].anim.stop(i), e = !1, c.splice(o, 1));
                        !e && i || rt.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each(function () {
                        var e, i = qt.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            c = rt.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = c.length; e--;) c[e].elem === this && c[e].queue === t && (c[e].anim.stop(!0), c.splice(e, 1));
                        for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), rt.each(["toggle", "show", "hide"], function (t, e) {
                var i = rt.fn[e];
                rt.fn[e] = function (t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, o)
                }
            }), rt.each({
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                rt.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), rt.timers = [], rt.fx.tick = function () {
                var t, e = 0,
                    i = rt.timers;
                for (se = rt.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || rt.fx.stop(), se = void 0
            }, rt.fx.timer = function (t) {
                rt.timers.push(t), rt.fx.start()
            }, rt.fx.interval = 13, rt.fx.start = function () {
                re || (re = !0, x())
            }, rt.fx.stop = function () {
                re = null
            }, rt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, rt.fn.delay = function (e, i) {
                return e = rt.fx ? rt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function () {
                        t.clearTimeout(o)
                    }
                })
            },
            function () {
                var t = G.createElement("input"),
                    e = G.createElement("select").appendChild(G.createElement("option"));
                t.type = "checkbox", st.checkOn = "" !== t.value, st.optSelected = e.selected, (t = G.createElement("input")).value = "t", t.type = "radio", st.radioValue = "t" === t.value
            }();
        var pe, de = rt.expr.attrHandle;
        rt.fn.extend({
            attr: function (t, e) {
                return Nt(this, rt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function (t, e, i) {
                var n, o, c = t.nodeType;
                if (3 !== c && 8 !== c && 2 !== c) return void 0 === t.getAttribute ? rt.prop(t, e, i) : (1 === c && rt.isXMLDoc(t) || (o = rt.attrHooks[e.toLowerCase()] || (rt.expr.match.bool.test(e) ? pe : void 0)), void 0 !== i ? null === i ? void rt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = rt.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!st.radioValue && "radio" === e && o(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var i, n = 0,
                    o = e && e.match(Ot);
                if (o && 1 === t.nodeType)
                    for (; i = o[n++];) t.removeAttribute(i)
            }
        }), pe = {
            set: function (t, e, i) {
                return !1 === e ? rt.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = de[e] || rt.find.attr;
            de[e] = function (t, e, n) {
                var o, c, s = e.toLowerCase();
                return n || (c = de[s], de[s] = o, o = null != i(t, e, n) ? s : null, de[s] = c), o
            }
        });
        var ue = /^(?:input|select|textarea|button)$/i,
            Me = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function (t, e) {
                return Nt(this, rt.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[rt.propFix[t] || t]
                })
            }
        }), rt.extend({
            prop: function (t, e, i) {
                var n, o, c = t.nodeType;
                if (3 !== c && 8 !== c && 2 !== c) return 1 === c && rt.isXMLDoc(t) || (e = rt.propFix[e] || e, o = rt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ue.test(t.nodeName) || Me.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), st.optSelected || (rt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            rt.propFix[this.toLowerCase()] = this
        }), rt.fn.extend({
            addClass: function (t) {
                var e, i, n, o, c, s, r, a = 0;
                if (rt.isFunction(t)) return this.each(function (e) {
                    rt(this).addClass(t.call(this, e, j(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Ot) || []; i = this[a++];)
                        if (o = j(i), n = 1 === i.nodeType && " " + H(o) + " ") {
                            for (s = 0; c = e[s++];) n.indexOf(" " + c + " ") < 0 && (n += c + " ");
                            o !== (r = H(n)) && i.setAttribute("class", r)
                        }
                return this
            },
            removeClass: function (t) {
                var e, i, n, o, c, s, r, a = 0;
                if (rt.isFunction(t)) return this.each(function (e) {
                    rt(this).removeClass(t.call(this, e, j(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Ot) || []; i = this[a++];)
                        if (o = j(i), n = 1 === i.nodeType && " " + H(o) + " ") {
                            for (s = 0; c = e[s++];)
                                for (; n.indexOf(" " + c + " ") > -1;) n = n.replace(" " + c + " ", " ");
                            o !== (r = H(n)) && i.setAttribute("class", r)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function (i) {
                    rt(this).toggleClass(t.call(this, i, j(this), e), e)
                }) : this.each(function () {
                    var e, n, o, c;
                    if ("string" === i)
                        for (n = 0, o = rt(this), c = t.match(Ot) || []; e = c[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = j(this)) && qt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : qt.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + H(j(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var fe = /\r/g;
        rt.fn.extend({
            val: function (t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = rt.isFunction(t), this.each(function (i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? t.call(this, i, rt(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = rt.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), (e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof (i = o.value) ? i.replace(fe, "") : null == i ? "" : i : void 0
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : H(rt.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, i, n, c = t.options,
                            s = t.selectedIndex,
                            r = "select-one" === t.type,
                            a = r ? null : [],
                            l = r ? s + 1 : c.length;
                        for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                            if (((i = c[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !o(i.parentNode, "optgroup"))) {
                                if (e = rt(i).val(), r) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function (t, e) {
                        for (var i, n, o = t.options, c = rt.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = rt.inArray(rt.valHooks.option.get(n), c) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), c
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function () {
            rt.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = rt.inArray(rt(t).val(), e) > -1
                }
            }, st.checkOn || (rt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var he = /^(?:focusinfocus|focusoutblur)$/;
        rt.extend(rt.event, {
            trigger: function (e, i, n, o) {
                var c, s, r, a, l, p, d, u = [n || G],
                    M = nt.call(e, "type") ? e.type : e,
                    f = nt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = r = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !he.test(M + rt.event.triggered) && (M.indexOf(".") > -1 && (f = M.split("."), M = f.shift(), f.sort()), l = M.indexOf(":") < 0 && "on" + M, e = e[rt.expando] ? e : new rt.Event(M, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), d = rt.event.special[M] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, i))) {
                    if (!o && !d.noBubble && !rt.isWindow(n)) {
                        for (a = d.delegateType || M, he.test(a + M) || (s = s.parentNode); s; s = s.parentNode) u.push(s), r = s;
                        r === (n.ownerDocument || G) && u.push(r.defaultView || r.parentWindow || t)
                    }
                    for (c = 0;
                        (s = u[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? a : d.bindType || M, (p = (qt.get(s, "events") || {})[e.type] && qt.get(s, "handle")) && p.apply(s, i), (p = l && s[l]) && p.apply && Tt(s) && (e.result = p.apply(s, i), !1 === e.result && e.preventDefault());
                    return e.type = M, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), i) || !Tt(n) || l && rt.isFunction(n[M]) && !rt.isWindow(n) && ((r = n[l]) && (n[l] = null), rt.event.triggered = M, n[M](), rt.event.triggered = void 0, r && (n[l] = r)), e.result
                }
            },
            simulate: function (t, e, i) {
                var n = rt.extend(new rt.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                rt.event.trigger(n, null, e)
            }
        }), rt.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    rt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return rt.event.trigger(t, e, i, !0)
            }
        }), rt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            rt.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), st.focusin = "onfocusin" in t, st.focusin || rt.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var i = function (t) {
                rt.event.simulate(e, t.target, rt.event.fix(t))
            };
            rt.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this,
                        o = qt.access(n, e);
                    o || n.addEventListener(t, i, !0), qt.access(n, e, (o || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this,
                        o = qt.access(n, e) - 1;
                    o ? qt.access(n, e, o) : (n.removeEventListener(t, i, !0), qt.remove(n, e))
                }
            }
        });
        var be = t.location,
            Ae = rt.now(),
            ze = /\?/;
        rt.parseXML = function (e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
        };
        var me = /\[\]$/,
            ge = /\r?\n/g,
            ve = /^(?:submit|button|image|reset|file)$/i,
            Oe = /^(?:input|select|textarea|keygen)/i;
        rt.param = function (t, e) {
            var i, n = [],
                o = function (t, e) {
                    var i = rt.isFunction(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (Array.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function () {
                o(this.name, this.value)
            });
            else
                for (i in t) F(i, t[i], e, o);
            return n.join("&")
        }, rt.fn.extend({
            serialize: function () {
                return rt.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && Oe.test(this.nodeName) && !ve.test(t) && (this.checked || !xt.test(t))
                }).map(function (t, e) {
                    var i = rt(this).val();
                    return null == i ? null : Array.isArray(i) ? rt.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(ge, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(ge, "\r\n")
                    }
                }).get()
            }
        });
        var ye = /%20/g,
            Le = /#.*$/,
            Ne = /([?&])_=[^&]*/,
            Te = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qe = /^(?:GET|HEAD)$/,
            We = /^\/\//,
            we = {},
            _e = {},
            Se = "*/".concat("*"),
            Ce = G.createElement("a");
        Ce.href = be.href, rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Se,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": rt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? Y(Y(t, rt.ajaxSettings), e) : Y(rt.ajaxSettings, t)
            },
            ajaxPrefilter: U(we),
            ajaxTransport: U(_e),
            ajax: function (e, i) {
                function n(e, i, n, r) {
                    var l, u, M, g, v, O = i;
                    p || (p = !0, a && t.clearTimeout(a), o = void 0, s = r || "", y.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (g = function (t, e, i) {
                        for (var n, o, c, s, r = t.contents, a = t.dataTypes;
                            "*" === a[0];) a.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (o in r)
                                if (r[o] && r[o].test(n)) {
                                    a.unshift(o);
                                    break
                                }
                        if (a[0] in i) c = a[0];
                        else {
                            for (o in i) {
                                if (!a[0] || t.converters[o + " " + a[0]]) {
                                    c = o;
                                    break
                                }
                                s || (s = o)
                            }
                            c = c || s
                        }
                        if (c) return c !== a[0] && a.unshift(c), i[c]
                    }(f, y, n)), g = function (t, e, i, n) {
                        var o, c, s, r, a, l = {},
                            p = t.dataTypes.slice();
                        if (p[1])
                            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
                        for (c = p.shift(); c;)
                            if (t.responseFields[c] && (i[t.responseFields[c]] = e), !a && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), a = c, c = p.shift())
                                if ("*" === c) c = a;
                                else if ("*" !== a && a !== c) {
                            if (!(s = l[a + " " + c] || l["* " + c]))
                                for (o in l)
                                    if ((r = o.split(" "))[1] === c && (s = l[a + " " + r[0]] || l["* " + r[0]])) {
                                        !0 === s ? s = l[o] : !0 !== l[o] && (c = r[0], p.unshift(r[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + a + " to " + c
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(f, g, y, l), l ? (f.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (rt.lastModified[c] = v), (v = y.getResponseHeader("etag")) && (rt.etag[c] = v)), 204 === e || "HEAD" === f.type ? O = "nocontent" : 304 === e ? O = "notmodified" : (O = g.state, u = g.data, M = g.error, l = !M)) : (M = O, !e && O || (O = "error", e < 0 && (e = 0))), y.status = e, y.statusText = (i || O) + "", l ? A.resolveWith(h, [u, O, y]) : A.rejectWith(h, [y, O, M]), y.statusCode(m), m = void 0, d && b.trigger(l ? "ajaxSuccess" : "ajaxError", [y, f, l ? u : M]), z.fireWith(h, [y, O]), d && (b.trigger("ajaxComplete", [y, f]), --rt.active || rt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var o, c, s, r, a, l, p, d, u, M, f = rt.ajaxSetup({}, i),
                    h = f.context || f,
                    b = f.context && (h.nodeType || h.jquery) ? rt(h) : rt.event,
                    A = rt.Deferred(),
                    z = rt.Callbacks("once memory"),
                    m = f.statusCode || {},
                    g = {},
                    v = {},
                    O = "canceled",
                    y = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (p) {
                                if (!r)
                                    for (r = {}; e = Te.exec(s);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return p ? s : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == p && (t = v[t.toLowerCase()] = v[t.toLowerCase()] || t, g[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == p && (f.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (p) y.always(t[y.status]);
                                else
                                    for (e in t) m[e] = [m[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || O;
                            return o && o.abort(e), n(0, e), this
                        }
                    };
                if (A.promise(y), f.url = ((e || f.url || be.href) + "").replace(We, be.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ot) || [""], null == f.crossDomain) {
                    l = G.createElement("a");
                    try {
                        l.href = f.url, l.href = l.href, f.crossDomain = Ce.protocol + "//" + Ce.host != l.protocol + "//" + l.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = rt.param(f.data, f.traditional)), $(we, f, i, y), p) return y;
                (d = rt.event && f.global) && 0 == rt.active++ && rt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !qe.test(f.type), c = f.url.replace(Le, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(ye, "+")) : (M = f.url.slice(c.length), f.data && (c += (ze.test(c) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (c = c.replace(Ne, "$1"), M = (ze.test(c) ? "&" : "?") + "_=" + Ae++ + M), f.url = c + M), f.ifModified && (rt.lastModified[c] && y.setRequestHeader("If-Modified-Since", rt.lastModified[c]), rt.etag[c] && y.setRequestHeader("If-None-Match", rt.etag[c])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && y.setRequestHeader("Content-Type", f.contentType), y.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : f.accepts["*"]);
                for (u in f.headers) y.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, y, f) || p)) return y.abort();
                if (O = "abort", z.add(f.complete), y.done(f.success), y.fail(f.error), o = $(_e, f, i, y)) {
                    if (y.readyState = 1, d && b.trigger("ajaxSend", [y, f]), p) return y;
                    f.async && f.timeout > 0 && (a = t.setTimeout(function () {
                        y.abort("timeout")
                    }, f.timeout));
                    try {
                        p = !1, o.send(g, n)
                    } catch (t) {
                        if (p) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return y
            },
            getJSON: function (t, e, i) {
                return rt.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function (t, e) {
            rt[e] = function (t, i, n, o) {
                return rt.isFunction(i) && (o = o || n, n = i, i = void 0), rt.ajax(rt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, rt.isPlainObject(t) && t))
            }
        }), rt._evalUrl = function (t) {
            return rt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, rt.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (rt.isFunction(t) && (t = t.call(this[0])), e = rt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function (t) {
                return rt.isFunction(t) ? this.each(function (e) {
                    rt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = rt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = rt.isFunction(t);
                return this.each(function (i) {
                    rt(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    rt(this).replaceWith(this.childNodes)
                }), this
            }
        }), rt.expr.pseudos.hidden = function (t) {
            return !rt.expr.pseudos.visible(t)
        }, rt.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, rt.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var Xe = {
                0: 200,
                1223: 204
            },
            Be = rt.ajaxSettings.xhr();
        st.cors = !!Be && "withCredentials" in Be, st.ajax = Be = !!Be, rt.ajaxTransport(function (e) {
            var i, n;
            if (st.cors || Be && !e.crossDomain) return {
                send: function (o, c) {
                    var s, r = e.xhr();
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) r[s] = e.xhrFields[s];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) r.setRequestHeader(s, o[s]);
                    i = function (t) {
                        return function () {
                            i && (i = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? c(0, "error") : c(r.status, r.statusText) : c(Xe[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = i(), n = r.onerror = i("error"), void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function () {
                        4 === r.readyState && t.setTimeout(function () {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function () {
                    i && i()
                }
            }
        }), rt.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), rt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), rt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function (n, o) {
                        e = rt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function (t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), G.head.appendChild(e[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
            }
        });
        var Ee = [],
            ke = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ee.pop() || rt.expando + "_" + Ae++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function (e, i, n) {
            var o, c, s, r = !1 !== e.jsonp && (ke.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ke.test(e.data) && "data");
            if (r || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ke, "$1" + o) : !1 !== e.jsonp && (e.url += (ze.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return s || rt.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", c = t[o], t[o] = function () {
                s = arguments
            }, n.always(function () {
                void 0 === c ? rt(t).removeProp(o) : t[o] = c, e[o] && (e.jsonpCallback = i.jsonpCallback, Ee.push(o)), s && rt.isFunction(c) && c(s[0]), s = c = void 0
            }), "script"
        }), st.createHTMLDocument = function () {
            var t = G.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), rt.parseHTML = function (t, e, i) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (i = e, e = !1);
            var n, o, c;
            return e || (st.createHTMLDocument ? (e = G.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = G.location.href, e.head.appendChild(n)) : e = G), o = bt.exec(t), c = !i && [], o ? [e.createElement(o[1])] : (o = z([t], e, c), c && c.length && rt(c).remove(), rt.merge([], o.childNodes))
        }, rt.fn.load = function (t, e, i) {
            var n, o, c, s = this,
                r = t.indexOf(" ");
            return r > -1 && (n = H(t.slice(r)), t = t.slice(0, r)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                c = arguments, s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
            }).always(i && function (t, e) {
                s.each(function () {
                    i.apply(this, c || [t.responseText, e, t])
                })
            }), this
        }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            rt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), rt.expr.pseudos.animated = function (t) {
            return rt.grep(rt.timers, function (e) {
                return t === e.elem
            }).length
        }, rt.offset = {
            setOffset: function (t, e, i) {
                var n, o, c, s, r, a, l = rt.css(t, "position"),
                    p = rt(t),
                    d = {};
                "static" === l && (t.style.position = "relative"), r = p.offset(), c = rt.css(t, "top"), a = rt.css(t, "left"), ("absolute" === l || "fixed" === l) && (c + a).indexOf("auto") > -1 ? (n = p.position(), s = n.top, o = n.left) : (s = parseFloat(c) || 0, o = parseFloat(a) || 0), rt.isFunction(e) && (e = e.call(t, i, rt.extend({}, r))), null != e.top && (d.top = e.top - r.top + s), null != e.left && (d.left = e.left - r.left + o), "using" in e ? e.using.call(t, d) : p.css(d)
            }
        }, rt.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, i, n, o, c = this[0];
                return c ? c.getClientRects().length ? (n = c.getBoundingClientRect(), e = c.ownerDocument, i = e.documentElement, o = e.defaultView, {
                    top: n.top + o.pageYOffset - i.clientTop,
                    left: n.left + o.pageXOffset - i.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), o(t[0], "html") || (n = t.offset()), n = {
                        top: n.top + rt.css(t[0], "borderTopWidth", !0),
                        left: n.left + rt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - n.top - rt.css(i, "marginTop", !0),
                        left: e.left - n.left - rt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === rt.css(t, "position");) t = t.offsetParent;
                    return t || Ht
                })
            }
        }), rt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var i = "pageYOffset" === e;
            rt.fn[t] = function (n) {
                return Nt(this, function (t, n, o) {
                    var c;
                    return rt.isWindow(t) ? c = t : 9 === t.nodeType && (c = t.defaultView), void 0 === o ? c ? c[e] : t[n] : void(c ? c.scrollTo(i ? c.pageXOffset : o, i ? o : c.pageYOffset) : t[n] = o)
                }, t, n, arguments.length)
            }
        }), rt.each(["top", "left"], function (t, e) {
            rt.cssHooks[e] = S(st.pixelPosition, function (t, i) {
                if (i) return i = _(t, e), Jt.test(i) ? rt(t).position()[e] + "px" : i
            })
        }), rt.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            rt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (i, n) {
                rt.fn[n] = function (o, c) {
                    var s = arguments.length && (i || "boolean" != typeof o),
                        r = i || (!0 === o || !0 === c ? "margin" : "border");
                    return Nt(this, function (e, i, o) {
                        var c;
                        return rt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (c = e.documentElement, Math.max(e.body["scroll" + t], c["scroll" + t], e.body["offset" + t], c["offset" + t], c["client" + t])) : void 0 === o ? rt.css(e, i, r) : rt.style(e, i, o, r)
                    }, e, s ? o : void 0, s)
                }
            })
        }), rt.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), rt.holdReady = function (t) {
            t ? rt.readyWait++ : rt.ready(!0)
        }, rt.isArray = Array.isArray, rt.parseJSON = JSON.parse, rt.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {
            return rt
        });
        var xe = t.jQuery,
            De = t.$;
        return rt.noConflict = function (e) {
            return t.$ === rt && (t.$ = De), e && t.jQuery === rt && (t.jQuery = xe), rt
        }, e || (t.jQuery = t.$ = rt), rt
    }), function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
    }(this, function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t) {
            var e = t.getBoundingClientRect(),
                i = {};
            for (var n in e) i[n] = e[n];
            if (t.ownerDocument !== document) {
                var c = t.ownerDocument.defaultView.frameElement;
                if (c) {
                    var s = o(c);
                    i.top += s.top, i.bottom += s.top, i.left += s.left, i.right += s.left
                }
            }
            return i
        }

        function c(t) {
            var e = (getComputedStyle(t) || {}).position,
                i = [];
            if ("fixed" === e) return [t];
            for (var n = t;
                (n = n.parentNode) && n && 1 === n.nodeType;) {
                var o = void 0;
                try {
                    o = getComputedStyle(n)
                } catch (t) {}
                if (void 0 === o || null === o) return i.push(n), i;
                var c = o,
                    s = c.overflow,
                    r = c.overflowX,
                    a = c.overflowY;
                /(auto|scroll)/.test(s + a + r) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && i.push(n)
            }
            return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
        }

        function s() {
            y && document.body.removeChild(y), y = null
        }

        function r(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var i = e.documentElement,
                n = o(t),
                c = T();
            return n.top -= c.top, n.left -= c.left, void 0 === n.width && (n.width = document.body.scrollWidth - n.left - n.right), void 0 === n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - i.clientTop, n.left = n.left - i.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n
        }

        function a(t) {
            return t.offsetParent || document.documentElement
        }

        function l() {
            if (q) return q;
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            p(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var i = t.offsetWidth;
            e.style.overflow = "scroll";
            var n = t.offsetWidth;
            i === n && (n = e.clientWidth), document.body.removeChild(e);
            var o = i - n;
            return q = {
                width: o,
                height: o
            }
        }

        function p() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
                if (e)
                    for (var i in e)({}).hasOwnProperty.call(e, i) && (t[i] = e[i])
            }), t
        }

        function d(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
                e.trim() && t.classList.remove(e)
            });
            else {
                var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                    n = f(t).replace(i, " ");
                h(t, n)
            }
        }

        function u(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
                e.trim() && t.classList.add(e)
            });
            else {
                d(t, e);
                var i = f(t) + " " + e;
                h(t, i)
            }
        }

        function M(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var i = f(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(i)
        }

        function f(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }

        function h(t, e) {
            t.setAttribute("class", e)
        }

        function b(t, e, i) {
            i.forEach(function (i) {
                -1 === e.indexOf(i) && M(t, i) && d(t, i)
            }), e.forEach(function (e) {
                M(t, e) || u(t, e)
            })
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function A(t, e) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + i >= e && e >= t - i
        }

        function z() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
        }

        function m() {
            for (var t = {
                    top: 0,
                    left: 0
                }, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            return i.forEach(function (e) {
                var i = e.top,
                    n = e.left;
                "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += i, t.left += n
            }), t
        }

        function g(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }
        var v = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            O = void 0;
        void 0 === O && (O = {
            modules: []
        });
        var y = null,
            L = function () {
                var t = 0;
                return function () {
                    return ++t
                }
            }(),
            N = {},
            T = function () {
                var t = y;
                t && document.body.contains(t) || ((t = document.createElement("div")).setAttribute("data-tether-id", L()), p(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(t), y = t);
                var e = t.getAttribute("data-tether-id");
                return void 0 === N[e] && (N[e] = o(t), w(function () {
                    delete N[e]
                })), N[e]
            },
            q = null,
            W = [],
            w = function (t) {
                W.push(t)
            },
            _ = function () {
                for (var t = void 0; t = W.pop();) t()
            },
            S = function () {
                function t() {
                    n(this, t)
                }
                return v(t, [{
                    key: "on",
                    value: function (t, e, i) {
                        var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                            handler: e,
                            ctx: i,
                            once: n
                        })
                    }
                }, {
                    key: "once",
                    value: function (t, e, i) {
                        this.on(t, e, i, !0)
                    }
                }, {
                    key: "off",
                    value: function (t, e) {
                        if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                            if (void 0 === e) delete this.bindings[t];
                            else
                                for (var i = 0; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i
                    }
                }, {
                    key: "trigger",
                    value: function (t) {
                        if (void 0 !== this.bindings && this.bindings[t]) {
                            for (var e = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                            for (; e < this.bindings[t].length;) {
                                var c = this.bindings[t][e],
                                    s = c.handler,
                                    r = c.ctx,
                                    a = c.once,
                                    l = r;
                                void 0 === l && (l = this), s.apply(l, n), a ? this.bindings[t].splice(e, 1) : ++e
                            }
                        }
                    }
                }]), t
            }();
        O.Utils = {
            getActualBoundingClientRect: o,
            getScrollParents: c,
            getBounds: r,
            getOffsetParent: a,
            extend: p,
            addClass: u,
            removeClass: d,
            hasClass: M,
            updateClasses: b,
            defer: w,
            flush: _,
            uniqueId: L,
            Evented: S,
            getScrollBarSize: l,
            removeUtilElements: s
        };
        var C = function () {
                return function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function (t, e) {
                        var i = [],
                            n = !0,
                            o = !1,
                            c = void 0;
                        try {
                            for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                        } catch (t) {
                            o = !0, c = t
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (o) throw c
                            }
                        }
                        return i
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            v = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            X = function (t, e, i) {
                for (var n = !0; n;) {
                    var o = t,
                        c = e,
                        s = i;
                    n = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, c);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var a = r.get;
                        if (void 0 === a) return;
                        return a.call(s)
                    }
                    var l = Object.getPrototypeOf(o);
                    if (null === l) return;
                    t = l, e = c, i = s, n = !0, r = l = void 0
                }
            };
        if (void 0 === O) throw new Error("You must include the utils.js file before tether.js");
        var B = O.Utils,
            c = B.getScrollParents,
            r = B.getBounds,
            a = B.getOffsetParent,
            p = B.extend,
            u = B.addClass,
            d = B.removeClass,
            b = B.updateClasses,
            w = B.defer,
            _ = B.flush,
            l = B.getScrollBarSize,
            s = B.removeUtilElements,
            E = function () {
                if ("undefined" == typeof document) return "";
                for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
                    var n = e[i];
                    if (void 0 !== t.style[n]) return n
                }
            }(),
            k = [],
            x = function () {
                k.forEach(function (t) {
                    t.position(!1)
                }), _()
            };
        ! function () {
            var t = null,
                e = null,
                i = null,
                n = function n() {
                    return void 0 !== e && e > 16 ? (e = Math.min(e - 16, 250), void(i = setTimeout(n, 250))) : void(void 0 !== t && z() - t < 10 || (null != i && (clearTimeout(i), i = null), t = z(), x(), e = z() - t))
                };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
                window.addEventListener(t, n)
            })
        }();
        var D = {
                center: "center",
                left: "right",
                right: "left"
            },
            R = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            P = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            I = function (t) {
                var e = t.left,
                    i = t.top;
                return void 0 !== P[t.left] && (e = P[t.left]), void 0 !== P[t.top] && (i = P[t.top]), {
                    left: e,
                    top: i
                }
            },
            H = function (t) {
                var e = t.split(" "),
                    i = C(e, 2);
                return {
                    top: i[0],
                    left: i[1]
                }
            },
            j = H,
            F = function (t) {
                function e(t) {
                    var i = this;
                    n(this, e), X(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), k.push(this), this.history = [], this.setOptions(t, !1), O.modules.forEach(function (t) {
                        void 0 !== t.initialize && t.initialize.call(i)
                    }), this.position()
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, S), v(e, [{
                    key: "getClass",
                    value: function () {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            e = this.options.classes;
                        return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                    }
                }, {
                    key: "setOptions",
                    value: function (t) {
                        var e = this,
                            i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                        this.options = p({
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        }, t);
                        var n = this.options,
                            o = n.element,
                            s = n.target,
                            r = n.targetModifier;
                        if (this.element = o, this.target = s, this.targetModifier = r, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
                                if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                                void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                            }), u(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && u(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = H(this.options.offset), this.targetOffset = H(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = c(this.target), !1 !== this.options.enabled && this.enable(i)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function () {
                        if (void 0 === this.targetModifier) return r(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            return (c = {
                                height: (t = r(this.target)).height,
                                width: t.width,
                                top: t.top,
                                left: t.left
                            }).height = Math.min(c.height, t.height - (pageYOffset - t.top)), c.height = Math.min(c.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), c.height = Math.min(innerHeight, c.height), c.height -= 2, c.width = Math.min(c.width, t.width - (pageXOffset - t.left)), c.width = Math.min(c.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), c.width = Math.min(innerWidth, c.width), c.width -= 2, c.top < pageYOffset && (c.top = pageYOffset), c.left < pageXOffset && (c.left = pageXOffset), c
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var t = void 0,
                                e = this.target;
                            e === document.body ? (e = document.documentElement, t = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : t = r(e);
                            var i = getComputedStyle(e),
                                n = 0;
                            (e.scrollWidth > e.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (n = 15);
                            var o = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - n,
                                c = {
                                    width: 15,
                                    height: .975 * o * (o / e.scrollHeight),
                                    left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                                },
                                s = 0;
                            o < 408 && this.target === document.body && (s = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58), this.target !== document.body && (c.height = Math.max(c.height, 24));
                            var a = this.target.scrollTop / (e.scrollHeight - o);
                            return c.top = a * (o - c.height - s) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (c.height = Math.max(c.height, 24)), c
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function () {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function (t, e) {
                        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                    }
                }, {
                    key: "enable",
                    value: function () {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        !1 !== this.options.addTargetClasses && u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
                            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                        }), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function () {
                        var t = this;
                        d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (e) {
                            e.removeEventListener("scroll", t.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        var t = this;
                        this.disable(), k.forEach(function (e, i) {
                            e === t && k.splice(i, 1)
                        }), 0 === k.length && s()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function (t, e) {
                        var i = this;
                        t = t || this.attachment, e = e || this.targetAttachment;
                        void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                        var n = this._addAttachClasses;
                        t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                        var o = [];
                        ["left", "top", "bottom", "right", "middle", "center"].forEach(function (t) {
                            o.push(i.getClass("element-attached") + "-" + t), o.push(i.getClass("target-attached") + "-" + t)
                        }), w(function () {
                            void 0 !== i._addAttachClasses && (b(i.element, i._addAttachClasses, o), !1 !== i.options.addTargetClasses && b(i.target, i._addAttachClasses, o), delete i._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function () {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var i = function (t, e) {
                                var i = t.left,
                                    n = t.top;
                                return "auto" === i && (i = D[e.left]), "auto" === n && (n = R[e.top]), {
                                    left: i,
                                    top: n
                                }
                            }(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, i);
                            var n = this.cache("element-bounds", function () {
                                    return r(t.element)
                                }),
                                o = n.width,
                                c = n.height;
                            if (0 === o && 0 === c && void 0 !== this.lastSize) {
                                var s = this.lastSize;
                                o = s.width, c = s.height
                            } else this.lastSize = {
                                width: o,
                                height: c
                            };
                            var p = this.cache("target-bounds", function () {
                                    return t.getTargetBounds()
                                }),
                                d = p,
                                u = g(I(this.attachment), {
                                    width: o,
                                    height: c
                                }),
                                M = g(I(i), d),
                                f = g(this.offset, {
                                    width: o,
                                    height: c
                                }),
                                h = g(this.targetOffset, d);
                            u = m(u, f), M = m(M, h);
                            for (var b = p.left + M.left - u.left, A = p.top + M.top - u.top, z = 0; z < O.modules.length; ++z) {
                                var v = O.modules[z].position.call(this, {
                                    left: b,
                                    top: A,
                                    targetAttachment: i,
                                    targetPos: p,
                                    elementPos: n,
                                    offset: u,
                                    targetOffset: M,
                                    manualOffset: f,
                                    manualTargetOffset: h,
                                    scrollbarSize: T,
                                    attachment: this.attachment
                                });
                                if (!1 === v) return !1;
                                void 0 !== v && "object" == typeof v && (A = v.top, b = v.left)
                            }
                            var y = {
                                    page: {
                                        top: A,
                                        left: b
                                    },
                                    viewport: {
                                        top: A - pageYOffset,
                                        bottom: pageYOffset - A - c + innerHeight,
                                        left: b - pageXOffset,
                                        right: pageXOffset - b - o + innerWidth
                                    }
                                },
                                L = this.target.ownerDocument,
                                N = L.defaultView,
                                T = void 0;
                            return N.innerHeight > L.documentElement.clientHeight && (T = this.cache("scrollbar-size", l), y.viewport.bottom -= T.height), N.innerWidth > L.documentElement.clientWidth && (T = this.cache("scrollbar-size", l), y.viewport.right -= T.width), -1 !== ["", "static"].indexOf(L.body.style.position) && -1 !== ["", "static"].indexOf(L.body.parentElement.style.position) || (y.page.bottom = L.body.scrollHeight - A - c, y.page.right = L.body.scrollWidth - b - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function () {
                                var e = t.cache("target-offsetparent", function () {
                                        return a(t.target)
                                    }),
                                    i = t.cache("target-offsetparent-bounds", function () {
                                        return r(e)
                                    }),
                                    n = getComputedStyle(e),
                                    o = i,
                                    c = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                                        c[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                                    }), i.right = L.body.scrollWidth - i.left - o.width + c.right, i.bottom = L.body.scrollHeight - i.top - o.height + c.bottom, y.page.top >= i.top + c.top && y.page.bottom >= i.bottom && y.page.left >= i.left + c.left && y.page.right >= i.right) {
                                    var s = e.scrollTop,
                                        l = e.scrollLeft;
                                    y.offset = {
                                        top: y.page.top - i.top + s - c.top,
                                        left: y.page.left - i.left + l - c.left
                                    }
                                }
                            }(), this.move(y), this.history.unshift(y), this.history.length > 3 && this.history.pop(), e && _(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function (t) {
                        var e = this;
                        if (void 0 !== this.element.parentNode) {
                            var i = {};
                            for (var n in t) {
                                i[n] = {};
                                for (var o in t[n]) {
                                    for (var c = !1, s = 0; s < this.history.length; ++s) {
                                        var r = this.history[s];
                                        if (void 0 !== r[n] && !A(r[n][o], t[n][o])) {
                                            c = !0;
                                            break
                                        }
                                    }
                                    c || (i[n][o] = !0)
                                }
                            }
                            var l = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                d = function (t, i) {
                                    if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                        var n = void 0,
                                            o = void 0;
                                        if (t.top ? (l.top = 0, n = i.top) : (l.bottom = 0, n = -i.bottom), t.left ? (l.left = 0, o = i.left) : (l.right = 0, o = -i.right), window.matchMedia) {
                                            window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o), n = Math.round(n))
                                        }
                                        l[E] = "translateX(" + o + "px) translateY(" + n + "px)", "msTransform" !== E && (l[E] += " translateZ(0)")
                                    } else t.top ? l.top = i.top + "px" : l.bottom = i.bottom + "px", t.left ? l.left = i.left + "px" : l.right = i.right + "px"
                                },
                                u = !1;
                            if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (l.position = "absolute", d(i.page, t.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (l.position = "fixed", d(i.viewport, t.viewport)) : void 0 !== i.offset && i.offset.top && i.offset.left ? function () {
                                    l.position = "absolute";
                                    var n = e.cache("target-offsetparent", function () {
                                        return a(e.target)
                                    });
                                    a(e.element) !== n && w(function () {
                                        e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                                    }), d(i.offset, t.offset), u = !0
                                }() : (l.position = "absolute", d({
                                    top: !0,
                                    left: !0
                                }, t.page)), !u)
                                if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                                else {
                                    for (var M = !0, f = this.element.parentNode; f && 1 === f.nodeType && "BODY" !== f.tagName;) {
                                        if ("static" !== getComputedStyle(f).position) {
                                            M = !1;
                                            break
                                        }
                                        f = f.parentNode
                                    }
                                    M || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                                }
                            var h = {},
                                b = !1;
                            for (var o in l) {
                                var z = l[o];
                                this.element.style[o] !== z && (b = !0, h[o] = z)
                            }
                            b && w(function () {
                                p(e.element.style, h), e.trigger("repositioned")
                            })
                        }
                    }
                }]), e
            }();
        F.modules = [], O.position = x;
        var U = p(F, O),
            C = function () {
                return function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function (t, e) {
                        var i = [],
                            n = !0,
                            o = !1,
                            c = void 0;
                        try {
                            for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                        } catch (t) {
                            o = !0, c = t
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (o) throw c
                            }
                        }
                        return i
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            r = (B = O.Utils).getBounds,
            p = B.extend,
            b = B.updateClasses,
            w = B.defer,
            $ = ["left", "top", "right", "bottom"];
        O.modules.push({
            position: function (t) {
                var e = this,
                    i = t.top,
                    n = t.left,
                    o = t.targetAttachment;
                if (!this.options.constraints) return !0;
                var c = this.cache("element-bounds", function () {
                        return r(e.element)
                    }),
                    s = c.height,
                    a = c.width;
                if (0 === a && 0 === s && void 0 !== this.lastSize) {
                    var l = this.lastSize;
                    a = l.width, s = l.height
                }
                var d = this.cache("target-bounds", function () {
                        return e.getTargetBounds()
                    }),
                    u = d.height,
                    M = d.width,
                    f = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function (t) {
                    var e = t.outOfBoundsClass,
                        i = t.pinnedClass;
                    e && f.push(e), i && f.push(i)
                }), f.forEach(function (t) {
                    ["left", "top", "right", "bottom"].forEach(function (e) {
                        f.push(t + "-" + e)
                    })
                });
                var h = [],
                    A = p({}, o),
                    z = p({}, this.attachment);
                return this.options.constraints.forEach(function (t) {
                    var c = t.to,
                        l = t.attachment,
                        p = t.pin;
                    void 0 === l && (l = "");
                    var d = void 0,
                        f = void 0;
                    if (l.indexOf(" ") >= 0) {
                        var b = l.split(" "),
                            m = C(b, 2);
                        f = m[0], d = m[1]
                    } else d = f = l;
                    var g = function (t, e) {
                        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function () {
                            var t = e,
                                i = r(e),
                                n = i,
                                o = getComputedStyle(e);
                            if (e = [n.left, n.top, i.width + n.left, i.height + n.top], t.ownerDocument !== document) {
                                var c = t.ownerDocument.defaultView;
                                e[0] += c.pageXOffset, e[1] += c.pageYOffset, e[2] += c.pageXOffset, e[3] += c.pageYOffset
                            }
                            $.forEach(function (t, i) {
                                "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? e[i] += parseFloat(o["border" + t + "Width"]) : e[i] -= parseFloat(o["border" + t + "Width"])
                            })
                        }(), e
                    }(e, c);
                    "target" !== f && "both" !== f || (i < g[1] && "top" === A.top && (i += u, A.top = "bottom"), i + s > g[3] && "bottom" === A.top && (i -= u, A.top = "top")), "together" === f && ("top" === A.top && ("bottom" === z.top && i < g[1] ? (i += u, A.top = "bottom", i += s, z.top = "top") : "top" === z.top && i + s > g[3] && i - (s - u) >= g[1] && (i -= s - u, A.top = "bottom", z.top = "bottom")), "bottom" === A.top && ("top" === z.top && i + s > g[3] ? (i -= u, A.top = "top", i -= s, z.top = "bottom") : "bottom" === z.top && i < g[1] && i + (2 * s - u) <= g[3] && (i += s - u, A.top = "top", z.top = "top")), "middle" === A.top && (i + s > g[3] && "top" === z.top ? (i -= s, z.top = "bottom") : i < g[1] && "bottom" === z.top && (i += s, z.top = "top"))), "target" !== d && "both" !== d || (n < g[0] && "left" === A.left && (n += M, A.left = "right"), n + a > g[2] && "right" === A.left && (n -= M, A.left = "left")), "together" === d && (n < g[0] && "left" === A.left ? "right" === z.left ? (n += M, A.left = "right", n += a, z.left = "left") : "left" === z.left && (n += M, A.left = "right", n -= a, z.left = "right") : n + a > g[2] && "right" === A.left ? "left" === z.left ? (n -= M, A.left = "left", n -= a, z.left = "right") : "right" === z.left && (n -= M, A.left = "left", n += a, z.left = "left") : "center" === A.left && (n + a > g[2] && "left" === z.left ? (n -= a, z.left = "right") : n < g[0] && "right" === z.left && (n += a, z.left = "left"))), "element" !== f && "both" !== f || (i < g[1] && "bottom" === z.top && (i += s, z.top = "top"), i + s > g[3] && "top" === z.top && (i -= s, z.top = "bottom")), "element" !== d && "both" !== d || (n < g[0] && ("right" === z.left ? (n += a, z.left = "left") : "center" === z.left && (n += a / 2, z.left = "left")), n + a > g[2] && ("left" === z.left ? (n -= a, z.left = "right") : "center" === z.left && (n -= a / 2, z.left = "right"))), "string" == typeof p ? p = p.split(",").map(function (t) {
                        return t.trim()
                    }) : !0 === p && (p = ["top", "left", "right", "bottom"]), p = p || [];
                    var v = [],
                        O = [];
                    i < g[1] && (p.indexOf("top") >= 0 ? (i = g[1], v.push("top")) : O.push("top")), i + s > g[3] && (p.indexOf("bottom") >= 0 ? (i = g[3] - s, v.push("bottom")) : O.push("bottom")), n < g[0] && (p.indexOf("left") >= 0 ? (n = g[0], v.push("left")) : O.push("left")), n + a > g[2] && (p.indexOf("right") >= 0 ? (n = g[2] - a, v.push("right")) : O.push("right")), v.length && function () {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), h.push(t), v.forEach(function (e) {
                            h.push(t + "-" + e)
                        })
                    }(), O.length && function () {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), h.push(t), O.forEach(function (e) {
                            h.push(t + "-" + e)
                        })
                    }(), (v.indexOf("left") >= 0 || v.indexOf("right") >= 0) && (z.left = A.left = !1), (v.indexOf("top") >= 0 || v.indexOf("bottom") >= 0) && (z.top = A.top = !1), A.top === o.top && A.left === o.left && z.top === e.attachment.top && z.left === e.attachment.left || (e.updateAttachClasses(z, A), e.trigger("update", {
                        attachment: z,
                        targetAttachment: A
                    }))
                }), w(function () {
                    !1 !== e.options.addTargetClasses && b(e.target, h, f), b(e.element, h, f)
                }), {
                    top: i,
                    left: n
                }
            }
        });
        var r = (B = O.Utils).getBounds,
            b = B.updateClasses,
            w = B.defer;
        O.modules.push({
            position: function (t) {
                var e = this,
                    i = t.top,
                    n = t.left,
                    o = this.cache("element-bounds", function () {
                        return r(e.element)
                    }),
                    c = o.height,
                    s = o.width,
                    a = this.getTargetBounds(),
                    l = i + c,
                    p = n + s,
                    d = [];
                i <= a.bottom && l >= a.top && ["left", "right"].forEach(function (t) {
                    var e = a[t];
                    e !== n && e !== p || d.push(t)
                }), n <= a.right && p >= a.left && ["top", "bottom"].forEach(function (t) {
                    var e = a[t];
                    e !== i && e !== l || d.push(t)
                });
                var u = [],
                    M = [];
                return u.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach(function (t) {
                    u.push(e.getClass("abutted") + "-" + t)
                }), d.length && M.push(this.getClass("abutted")), d.forEach(function (t) {
                    M.push(e.getClass("abutted") + "-" + t)
                }), w(function () {
                    !1 !== e.options.addTargetClasses && b(e.target, M, u), b(e.element, M, u)
                }), !0
            }
        });
        C = function () {
            return function (t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function (t, e) {
                    var i = [],
                        n = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                    } catch (t) {
                        o = !0, c = t
                    } finally {
                        try {
                            !n && r.return && r.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    return i
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return O.modules.push({
            position: function (t) {
                var e = t.top,
                    i = t.left;
                if (this.options.shift) {
                    var n = this.options.shift;
                    "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                        top: e,
                        left: i
                    }));
                    var o = void 0,
                        c = void 0;
                    if ("string" == typeof n) {
                        (n = n.split(" "))[1] = n[1] || n[0];
                        var s = C(n, 2);
                        o = s[0], c = s[1], o = parseFloat(o, 10), c = parseFloat(c, 10)
                    } else o = n.top, c = n.left;
                    return e += o, i += c, {
                        top: e,
                        left: i
                    }
                }
            }
        }), U
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function (t) {
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function () {
    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        n = function (t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function i(t) {
                return (t[0] || t).nodeType
            }

            function n(e) {
                var i = this,
                    n = !1;
                return t(this).one(s.TRANSITION_END, function () {
                    n = !0
                }), setTimeout(function () {
                    n || s.triggerTransitionEnd(i)
                }, e), this
            }
            var o = !1,
                c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                s = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function (t) {
                        var e = t.getAttribute("data-target");
                        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                    },
                    reflow: function (t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function (e) {
                        t(e).trigger(o.end)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(o)
                    },
                    typeCheckConfig: function (t, n, o) {
                        for (var c in o)
                            if (o.hasOwnProperty(c)) {
                                var s = o[c],
                                    r = n[c],
                                    a = r && i(r) ? "element" : e(r);
                                if (!new RegExp(s).test(a)) throw new Error(t.toUpperCase() + ': Option "' + c + '" provided type "' + a + '" but expected type "' + s + '".')
                            }
                    }
                };
            return o = function () {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in c)
                    if (void 0 !== t.style[e]) return {
                        end: c[e]
                    };
                return !1
            }(), t.fn.emulateTransitionEnd = n, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = {
                bindType: o.end,
                delegateType: o.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }), s
        }(jQuery),
        o = (function (e) {
            var o = "bs.alert",
                c = e.fn.alert,
                s = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                r = "alert",
                a = "fade",
                l = "show",
                p = function () {
                    function c(e) {
                        t(this, c), this._element = e
                    }
                    return c.prototype.close = function (t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, c.prototype.dispose = function () {
                        e.removeData(this._element, o), this._element = null
                    }, c.prototype._getRootElement = function (t) {
                        var i = n.getSelectorFromElement(t),
                            o = !1;
                        return i && (o = e(i)[0]), o || (o = e(t).closest("." + r)[0]), o
                    }, c.prototype._triggerCloseEvent = function (t) {
                        var i = e.Event(s.CLOSE);
                        return e(t).trigger(i), i
                    }, c.prototype._removeElement = function (t) {
                        var i = this;
                        return e(t).removeClass(l), n.supportsTransitionEnd() && e(t).hasClass(a) ? void e(t).one(n.TRANSITION_END, function (e) {
                            return i._destroyElement(t, e)
                        }).emulateTransitionEnd(150) : void this._destroyElement(t)
                    }, c.prototype._destroyElement = function (t) {
                        e(t).detach().trigger(s.CLOSED).remove()
                    }, c._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this),
                                n = i.data(o);
                            n || (n = new c(this), i.data(o, n)), "close" === t && n[t](this)
                        })
                    }, c._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, i(c, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }]), c
                }();
            e(document).on(s.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), e.fn.alert = p._jQueryInterface, e.fn.alert.Constructor = p, e.fn.alert.noConflict = function () {
                return e.fn.alert = c, p._jQueryInterface
            }
        }(jQuery), function (e) {
            var n = "bs.button",
                o = "." + n,
                c = e.fn.button,
                s = "active",
                r = "btn",
                a = "focus",
                l = '[data-toggle^="button"]',
                p = '[data-toggle="buttons"]',
                d = "input",
                u = ".active",
                M = ".btn",
                f = {
                    CLICK_DATA_API: "click" + o + ".data-api",
                    FOCUS_BLUR_DATA_API: "focus" + o + ".data-api blur" + o + ".data-api"
                },
                h = function () {
                    function o(e) {
                        t(this, o), this._element = e
                    }
                    return o.prototype.toggle = function () {
                        var t = !0,
                            i = e(this._element).closest(p)[0];
                        if (i) {
                            var n = e(this._element).find(d)[0];
                            if (n) {
                                if ("radio" === n.type)
                                    if (n.checked && e(this._element).hasClass(s)) t = !1;
                                    else {
                                        var o = e(i).find(u)[0];
                                        o && e(o).removeClass(s)
                                    }
                                t && (n.checked = !e(this._element).hasClass(s), e(n).trigger("change")), n.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !e(this._element).hasClass(s)), t && e(this._element).toggleClass(s)
                    }, o.prototype.dispose = function () {
                        e.removeData(this._element, n), this._element = null
                    }, o._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(n);
                            i || (i = new o(this), e(this).data(n, i)), "toggle" === t && i[t]()
                        })
                    }, i(o, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }]), o
                }();
            e(document).on(f.CLICK_DATA_API, l, function (t) {
                t.preventDefault();
                var i = t.target;
                e(i).hasClass(r) || (i = e(i).closest(M)), h._jQueryInterface.call(e(i), "toggle")
            }).on(f.FOCUS_BLUR_DATA_API, l, function (t) {
                var i = e(t.target).closest(M)[0];
                e(i).toggleClass(a, /^focus(in)?$/.test(t.type))
            }), e.fn.button = h._jQueryInterface, e.fn.button.Constructor = h, e.fn.button.noConflict = function () {
                return e.fn.button = c, h._jQueryInterface
            }
        }(jQuery), function (o) {
            var c = "carousel",
                s = "bs.carousel",
                r = "." + s,
                a = o.fn[c],
                l = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                p = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                d = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                u = {
                    SLIDE: "slide" + r,
                    SLID: "slid" + r,
                    KEYDOWN: "keydown" + r,
                    MOUSEENTER: "mouseenter" + r,
                    MOUSELEAVE: "mouseleave" + r,
                    LOAD_DATA_API: "load" + r + ".data-api",
                    CLICK_DATA_API: "click" + r + ".data-api"
                },
                M = "carousel",
                f = "active",
                h = "slide",
                b = "carousel-item-right",
                A = "carousel-item-left",
                z = "carousel-item-next",
                m = "carousel-item-prev",
                g = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                v = function () {
                    function a(e, i) {
                        t(this, a), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = o(e)[0], this._indicatorsElement = o(this._element).find(g.INDICATORS)[0], this._addEventListeners()
                    }
                    return a.prototype.next = function () {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(d.NEXT)
                    }, a.prototype.nextWhenVisible = function () {
                        document.hidden || this.next()
                    }, a.prototype.prev = function () {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(d.PREVIOUS)
                    }, a.prototype.pause = function (t) {
                        t || (this._isPaused = !0), o(this._element).find(g.NEXT_PREV)[0] && n.supportsTransitionEnd() && (n.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, a.prototype.cycle = function (t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, a.prototype.to = function (t) {
                        var e = this;
                        this._activeElement = o(this._element).find(g.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0)) {
                            if (this._isSliding) return void o(this._element).one(u.SLID, function () {
                                return e.to(t)
                            });
                            if (i === t) return this.pause(), void this.cycle();
                            var n = t > i ? d.NEXT : d.PREVIOUS;
                            this._slide(n, this._items[t])
                        }
                    }, a.prototype.dispose = function () {
                        o(this._element).off(r), o.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, a.prototype._getConfig = function (t) {
                        return t = o.extend({}, l, t), n.typeCheckConfig(c, t, p), t
                    }, a.prototype._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard && o(this._element).on(u.KEYDOWN, function (e) {
                            return t._keydown(e)
                        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || o(this._element).on(u.MOUSEENTER, function (e) {
                            return t.pause(e)
                        }).on(u.MOUSELEAVE, function (e) {
                            return t.cycle(e)
                        })
                    }, a.prototype._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, a.prototype._getItemIndex = function (t) {
                        return this._items = o.makeArray(o(t).parent().find(g.ITEM)), this._items.indexOf(t)
                    }, a.prototype._getItemByDirection = function (t, e) {
                        var i = t === d.NEXT,
                            n = t === d.PREVIOUS,
                            o = this._getItemIndex(e),
                            c = this._items.length - 1;
                        if ((n && 0 === o || i && o === c) && !this._config.wrap) return e;
                        var s = (o + (t === d.PREVIOUS ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, a.prototype._triggerSlideEvent = function (t, e) {
                        var i = o.Event(u.SLIDE, {
                            relatedTarget: t,
                            direction: e
                        });
                        return o(this._element).trigger(i), i
                    }, a.prototype._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            o(this._indicatorsElement).find(g.ACTIVE).removeClass(f);
                            var e = this._indicatorsElement.children[this._getItemIndex(t)];
                            e && o(e).addClass(f)
                        }
                    }, a.prototype._slide = function (t, e) {
                        var i = this,
                            c = o(this._element).find(g.ACTIVE_ITEM)[0],
                            s = e || c && this._getItemByDirection(t, c),
                            r = Boolean(this._interval),
                            a = void 0,
                            l = void 0,
                            p = void 0;
                        if (t === d.NEXT ? (a = A, l = z, p = d.LEFT) : (a = b, l = m, p = d.RIGHT), s && o(s).hasClass(f)) this._isSliding = !1;
                        else {
                            if (!this._triggerSlideEvent(s, p).isDefaultPrevented() && c && s) {
                                this._isSliding = !0, r && this.pause(), this._setActiveIndicatorElement(s);
                                var M = o.Event(u.SLID, {
                                    relatedTarget: s,
                                    direction: p
                                });
                                n.supportsTransitionEnd() && o(this._element).hasClass(h) ? (o(s).addClass(l), n.reflow(s), o(c).addClass(a), o(s).addClass(a), o(c).one(n.TRANSITION_END, function () {
                                    o(s).removeClass(a + " " + l).addClass(f), o(c).removeClass(f + " " + l + " " + a), i._isSliding = !1, setTimeout(function () {
                                        return o(i._element).trigger(M)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (o(c).removeClass(f), o(s).addClass(f), this._isSliding = !1, o(this._element).trigger(M)), r && this.cycle()
                            }
                        }
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = o(this).data(s),
                                n = o.extend({}, l, o(this).data());
                            "object" === (void 0 === t ? "undefined" : e(t)) && o.extend(n, t);
                            var c = "string" == typeof t ? t : n.slide;
                            if (i || (i = new a(this, n), o(this).data(s, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof c) {
                                if (void 0 === i[c]) throw new Error('No method named "' + c + '"');
                                i[c]()
                            } else n.interval && (i.pause(), i.cycle())
                        })
                    }, a._dataApiClickHandler = function (t) {
                        var e = n.getSelectorFromElement(this);
                        if (e) {
                            var i = o(e)[0];
                            if (i && o(i).hasClass(M)) {
                                var c = o.extend({}, o(i).data(), o(this).data()),
                                    r = this.getAttribute("data-slide-to");
                                r && (c.interval = !1), a._jQueryInterface.call(o(i), c), r && o(i).data(s).to(r), t.preventDefault()
                            }
                        }
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }]), a
                }();
            o(document).on(u.CLICK_DATA_API, g.DATA_SLIDE, v._dataApiClickHandler), o(window).on(u.LOAD_DATA_API, function () {
                o(g.DATA_RIDE).each(function () {
                    var t = o(this);
                    v._jQueryInterface.call(t, t.data())
                })
            }), o.fn[c] = v._jQueryInterface, o.fn[c].Constructor = v, o.fn[c].noConflict = function () {
                return o.fn[c] = a, v._jQueryInterface
            }
        }(jQuery), function (o) {
            var c = "collapse",
                s = "bs.collapse",
                r = "." + s,
                a = o.fn[c],
                l = {
                    toggle: !0,
                    parent: ""
                },
                p = {
                    toggle: "boolean",
                    parent: "string"
                },
                d = {
                    SHOW: "show" + r,
                    SHOWN: "shown" + r,
                    HIDE: "hide" + r,
                    HIDDEN: "hidden" + r,
                    CLICK_DATA_API: "click" + r + ".data-api"
                },
                u = "show",
                M = "collapse",
                f = "collapsing",
                h = "collapsed",
                b = "width",
                A = "height",
                z = ".card > .show, .card > .collapsing",
                m = '[data-toggle="collapse"]',
                g = function () {
                    function r(e, i) {
                        t(this, r), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = o.makeArray(o('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return r.prototype.toggle = function () {
                        o(this._element).hasClass(u) ? this.hide() : this.show()
                    }, r.prototype.show = function () {
                        var t = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!o(this._element).hasClass(u)) {
                            var e = void 0,
                                i = void 0;
                            if (this._parent && ((e = o.makeArray(o(this._parent).find(z))).length || (e = null)), !(e && (i = o(e).data(s)) && i._isTransitioning)) {
                                var c = o.Event(d.SHOW);
                                if (o(this._element).trigger(c), !c.isDefaultPrevented()) {
                                    e && (r._jQueryInterface.call(o(e), "hide"), i || o(e).data(s, null));
                                    var a = this._getDimension();
                                    o(this._element).removeClass(M).addClass(f), this._element.style[a] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && o(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var l = function () {
                                        o(t._element).removeClass(f).addClass(M).addClass(u), t._element.style[a] = "", t.setTransitioning(!1), o(t._element).trigger(d.SHOWN)
                                    };
                                    if (!n.supportsTransitionEnd()) return void l();
                                    var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    o(this._element).one(n.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px"
                                }
                            }
                        }
                    }, r.prototype.hide = function () {
                        var t = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (o(this._element).hasClass(u)) {
                            var e = o.Event(d.HIDE);
                            if (o(this._element).trigger(e), !e.isDefaultPrevented()) {
                                var i = this._getDimension(),
                                    c = i === b ? "offsetWidth" : "offsetHeight";
                                this._element.style[i] = this._element[c] + "px", n.reflow(this._element), o(this._element).addClass(f).removeClass(M).removeClass(u), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && o(this._triggerArray).addClass(h).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var s = function () {
                                    t.setTransitioning(!1), o(t._element).removeClass(f).addClass(M).trigger(d.HIDDEN)
                                };
                                return this._element.style[i] = "", n.supportsTransitionEnd() ? void o(this._element).one(n.TRANSITION_END, s).emulateTransitionEnd(600) : void s()
                            }
                        }
                    }, r.prototype.setTransitioning = function (t) {
                        this._isTransitioning = t
                    }, r.prototype.dispose = function () {
                        o.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, r.prototype._getConfig = function (t) {
                        return t = o.extend({}, l, t), t.toggle = Boolean(t.toggle), n.typeCheckConfig(c, t, p), t
                    }, r.prototype._getDimension = function () {
                        return o(this._element).hasClass(b) ? b : A
                    }, r.prototype._getParent = function () {
                        var t = this,
                            e = o(this._config.parent)[0],
                            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return o(e).find(i).each(function (e, i) {
                            t._addAriaAndCollapsedClass(r._getTargetFromElement(i), [i])
                        }), e
                    }, r.prototype._addAriaAndCollapsedClass = function (t, e) {
                        if (t) {
                            var i = o(t).hasClass(u);
                            t.setAttribute("aria-expanded", i), e.length && o(e).toggleClass(h, !i).attr("aria-expanded", i)
                        }
                    }, r._getTargetFromElement = function (t) {
                        var e = n.getSelectorFromElement(t);
                        return e ? o(e)[0] : null
                    }, r._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = o(this),
                                n = i.data(s),
                                c = o.extend({}, l, i.data(), "object" === (void 0 === t ? "undefined" : e(t)) && t);
                            if (!n && c.toggle && /show|hide/.test(t) && (c.toggle = !1), n || (n = new r(this, c), i.data(s, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, i(r, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }]), r
                }();
            o(document).on(d.CLICK_DATA_API, m, function (t) {
                t.preventDefault();
                var e = g._getTargetFromElement(this),
                    i = o(e).data(s) ? "toggle" : o(this).data();
                g._jQueryInterface.call(o(e), i)
            }), o.fn[c] = g._jQueryInterface, o.fn[c].Constructor = g, o.fn[c].noConflict = function () {
                return o.fn[c] = a, g._jQueryInterface
            }
        }(jQuery), function (e) {
            var o = "dropdown",
                c = "bs.dropdown",
                s = "." + c,
                r = e.fn[o],
                a = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK: "click" + s,
                    CLICK_DATA_API: "click" + s + ".data-api",
                    FOCUSIN_DATA_API: "focusin" + s + ".data-api",
                    KEYDOWN_DATA_API: "keydown" + s + ".data-api"
                },
                l = "dropdown-backdrop",
                p = "disabled",
                d = "show",
                u = ".dropdown-backdrop",
                M = '[data-toggle="dropdown"]',
                f = ".dropdown form",
                h = '[role="menu"]',
                b = '[role="listbox"]',
                A = ".navbar-nav",
                z = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
                m = function () {
                    function o(e) {
                        t(this, o), this._element = e, this._addEventListeners()
                    }
                    return o.prototype.toggle = function () {
                        if (this.disabled || e(this).hasClass(p)) return !1;
                        var t = o._getParentFromElement(this),
                            i = e(t).hasClass(d);
                        if (o._clearMenus(), i) return !1;
                        if ("ontouchstart" in document.documentElement && !e(t).closest(A).length) {
                            var n = document.createElement("div");
                            n.className = l, e(n).insertBefore(this), e(n).on("click", o._clearMenus)
                        }
                        var c = {
                                relatedTarget: this
                            },
                            s = e.Event(a.SHOW, c);
                        return e(t).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), e(t).toggleClass(d), e(t).trigger(e.Event(a.SHOWN, c)), !1)
                    }, o.prototype.dispose = function () {
                        e.removeData(this._element, c), e(this._element).off(s), this._element = null
                    }, o.prototype._addEventListeners = function () {
                        e(this._element).on(a.CLICK, this.toggle)
                    }, o._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(c);
                            if (i || (i = new o(this), e(this).data(c, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t].call(this)
                            }
                        })
                    }, o._clearMenus = function (t) {
                        if (!t || 3 !== t.which) {
                            var i = e(u)[0];
                            i && i.parentNode.removeChild(i);
                            for (var n = e.makeArray(e(M)), c = 0; c < n.length; c++) {
                                var s = o._getParentFromElement(n[c]),
                                    r = {
                                        relatedTarget: n[c]
                                    };
                                if (e(s).hasClass(d) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "focusin" === t.type) && e.contains(s, t.target))) {
                                    var l = e.Event(a.HIDE, r);
                                    e(s).trigger(l), l.isDefaultPrevented() || (n[c].setAttribute("aria-expanded", "false"), e(s).removeClass(d).trigger(e.Event(a.HIDDEN, r)))
                                }
                            }
                        }
                    }, o._getParentFromElement = function (t) {
                        var i = void 0,
                            o = n.getSelectorFromElement(t);
                        return o && (i = e(o)[0]), i || t.parentNode
                    }, o._dataApiKeydownHandler = function (t) {
                        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(p))) {
                            var i = o._getParentFromElement(this),
                                n = e(i).hasClass(d);
                            if (!n && 27 !== t.which || n && 27 === t.which) {
                                if (27 === t.which) {
                                    var c = e(i).find(M)[0];
                                    e(c).trigger("focus")
                                }
                                return void e(this).trigger("click")
                            }
                            var s = e(i).find(z).get();
                            if (s.length) {
                                var r = s.indexOf(t.target);
                                38 === t.which && r > 0 && r--, 40 === t.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                            }
                        }
                    }, i(o, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }]), o
                }();
            e(document).on(a.KEYDOWN_DATA_API, M, m._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, h, m._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, b, m._dataApiKeydownHandler).on(a.CLICK_DATA_API + " " + a.FOCUSIN_DATA_API, m._clearMenus).on(a.CLICK_DATA_API, M, m.prototype.toggle).on(a.CLICK_DATA_API, f, function (t) {
                t.stopPropagation()
            }), e.fn[o] = m._jQueryInterface, e.fn[o].Constructor = m, e.fn[o].noConflict = function () {
                return e.fn[o] = r, m._jQueryInterface
            }
        }(jQuery), function (o) {
            var c = "bs.modal",
                s = "." + c,
                r = o.fn.modal,
                a = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                l = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    FOCUSIN: "focusin" + s,
                    RESIZE: "resize" + s,
                    CLICK_DISMISS: "click.dismiss" + s,
                    KEYDOWN_DISMISS: "keydown.dismiss" + s,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + s,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + s,
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                d = "modal-scrollbar-measure",
                u = "modal-backdrop",
                M = "modal-open",
                f = "fade",
                h = "show",
                b = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                },
                A = function () {
                    function r(e, i) {
                        t(this, r), this._config = this._getConfig(i), this._element = e, this._dialog = o(e).find(b.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return r.prototype.toggle = function (t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, r.prototype.show = function (t) {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Modal is transitioning");
                        n.supportsTransitionEnd() && o(this._element).hasClass(f) && (this._isTransitioning = !0);
                        var i = o.Event(p.SHOW, {
                            relatedTarget: t
                        });
                        o(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), o(document.body).addClass(M), this._setEscapeEvent(), this._setResizeEvent(), o(this._element).on(p.CLICK_DISMISS, b.DATA_DISMISS, function (t) {
                            return e.hide(t)
                        }), o(this._dialog).on(p.MOUSEDOWN_DISMISS, function () {
                            o(e._element).one(p.MOUSEUP_DISMISS, function (t) {
                                o(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function () {
                            return e._showElement(t)
                        }))
                    }, r.prototype.hide = function (t) {
                        var e = this;
                        if (t && t.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                        var i = n.supportsTransitionEnd() && o(this._element).hasClass(f);
                        i && (this._isTransitioning = !0);
                        var c = o.Event(p.HIDE);
                        o(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), o(document).off(p.FOCUSIN), o(this._element).removeClass(h), o(this._element).off(p.CLICK_DISMISS), o(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? o(this._element).one(n.TRANSITION_END, function (t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal())
                    }, r.prototype.dispose = function () {
                        o.removeData(this._element, c), o(window, document, this._element, this._backdrop).off(s), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, r.prototype._getConfig = function (t) {
                        return t = o.extend({}, a, t), n.typeCheckConfig("modal", t, l), t
                    }, r.prototype._showElement = function (t) {
                        var e = this,
                            i = n.supportsTransitionEnd() && o(this._element).hasClass(f);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && n.reflow(this._element), o(this._element).addClass(h), this._config.focus && this._enforceFocus();
                        var c = o.Event(p.SHOWN, {
                                relatedTarget: t
                            }),
                            s = function () {
                                e._config.focus && e._element.focus(), e._isTransitioning = !1, o(e._element).trigger(c)
                            };
                        i ? o(this._dialog).one(n.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                    }, r.prototype._enforceFocus = function () {
                        var t = this;
                        o(document).off(p.FOCUSIN).on(p.FOCUSIN, function (e) {
                            document === e.target || t._element === e.target || o(t._element).has(e.target).length || t._element.focus()
                        })
                    }, r.prototype._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard ? o(this._element).on(p.KEYDOWN_DISMISS, function (e) {
                            27 === e.which && t.hide()
                        }) : this._isShown || o(this._element).off(p.KEYDOWN_DISMISS)
                    }, r.prototype._setResizeEvent = function () {
                        var t = this;
                        this._isShown ? o(window).on(p.RESIZE, function (e) {
                            return t._handleUpdate(e)
                        }) : o(window).off(p.RESIZE)
                    }, r.prototype._hideModal = function () {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
                            o(document.body).removeClass(M), t._resetAdjustments(), t._resetScrollbar(), o(t._element).trigger(p.HIDDEN)
                        })
                    }, r.prototype._removeBackdrop = function () {
                        this._backdrop && (o(this._backdrop).remove(), this._backdrop = null)
                    }, r.prototype._showBackdrop = function (t) {
                        var e = this,
                            i = o(this._element).hasClass(f) ? f : "";
                        if (this._isShown && this._config.backdrop) {
                            var c = n.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && o(this._backdrop).addClass(i), o(this._backdrop).appendTo(document.body), o(this._element).on(p.CLICK_DISMISS, function (t) {
                                    return e._ignoreBackdropClick ? void(e._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()))
                                }), c && n.reflow(this._backdrop), o(this._backdrop).addClass(h), !t) return;
                            if (!c) return void t();
                            o(this._backdrop).one(n.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            o(this._backdrop).removeClass(h);
                            var s = function () {
                                e._removeBackdrop(), t && t()
                            };
                            n.supportsTransitionEnd() && o(this._element).hasClass(f) ? o(this._backdrop).one(n.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                        } else t && t()
                    }, r.prototype._handleUpdate = function () {
                        this._adjustDialog()
                    }, r.prototype._adjustDialog = function () {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, r.prototype._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, r.prototype._checkScrollbar = function () {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, r.prototype._setScrollbar = function () {
                        var t = parseInt(o(b.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                    }, r.prototype._resetScrollbar = function () {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, r.prototype._getScrollbarWidth = function () {
                        var t = document.createElement("div");
                        t.className = d, document.body.appendChild(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, r._jQueryInterface = function (t, i) {
                        return this.each(function () {
                            var n = o(this).data(c),
                                s = o.extend({}, r.Default, o(this).data(), "object" === (void 0 === t ? "undefined" : e(t)) && t);
                            if (n || (n = new r(this, s), o(this).data(c, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t](i)
                            } else s.show && n.show(i)
                        })
                    }, i(r, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), r
                }();
            o(document).on(p.CLICK_DATA_API, b.DATA_TOGGLE, function (t) {
                var e = this,
                    i = void 0,
                    s = n.getSelectorFromElement(this);
                s && (i = o(s)[0]);
                var r = o(i).data(c) ? "toggle" : o.extend({}, o(i).data(), o(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var a = o(i).one(p.SHOW, function (t) {
                    t.isDefaultPrevented() || a.one(p.HIDDEN, function () {
                        o(e).is(":visible") && e.focus()
                    })
                });
                A._jQueryInterface.call(o(i), r, this)
            }), o.fn.modal = A._jQueryInterface, o.fn.modal.Constructor = A, o.fn.modal.noConflict = function () {
                return o.fn.modal = r, A._jQueryInterface
            }
        }(jQuery), function (o) {
            var c = "scrollspy",
                s = "bs.scrollspy",
                r = "." + s,
                a = o.fn[c],
                l = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                p = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                d = {
                    ACTIVATE: "activate" + r,
                    SCROLL: "scroll" + r,
                    LOAD_DATA_API: "load" + r + ".data-api"
                },
                u = "dropdown-item",
                M = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                h = "offset",
                b = "position",
                A = function () {
                    function a(e, i) {
                        var n = this;
                        t(this, a), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o(this._scrollElement).on(d.SCROLL, function (t) {
                            return n._process(t)
                        }), this.refresh(), this._process()
                    }
                    return a.prototype.refresh = function () {
                        var t = this,
                            e = this._scrollElement !== this._scrollElement.window ? b : h,
                            i = "auto" === this._config.method ? e : this._config.method,
                            c = i === b ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        o.makeArray(o(this._selector)).map(function (t) {
                            var e = void 0,
                                s = n.getSelectorFromElement(t);
                            return s && (e = o(s)[0]), e && (e.offsetWidth || e.offsetHeight) ? [o(e)[i]().top + c, s] : null
                        }).filter(function (t) {
                            return t
                        }).sort(function (t, e) {
                            return t[0] - e[0]
                        }).forEach(function (e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, a.prototype.dispose = function () {
                        o.removeData(this._element, s), o(this._scrollElement).off(r), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, a.prototype._getConfig = function (t) {
                        if ("string" != typeof (t = o.extend({}, l, t)).target) {
                            var e = o(t.target).attr("id");
                            e || (e = n.getUID(c), o(t.target).attr("id", e)), t.target = "#" + e
                        }
                        return n.typeCheckConfig(c, t, p), t
                    }, a.prototype._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, a.prototype._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, a.prototype._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                    }, a.prototype._process = function () {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            i = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= i) {
                            var n = this._targets[this._targets.length - 1];
                            this._activeTarget !== n && this._activate(n)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                            }
                        }
                    }, a.prototype._activate = function (t) {
                        this._activeTarget = t, this._clear();
                        var e = this._selector.split(",");
                        e = e.map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = o(e.join(","));
                        i.hasClass(u) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(M), i.addClass(M)) : i.parents(f.LI).find("> " + f.NAV_LINKS).addClass(M), o(this._scrollElement).trigger(d.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, a.prototype._clear = function () {
                        o(this._selector).filter(f.ACTIVE).removeClass(M)
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = o(this).data(s),
                                n = "object" === (void 0 === t ? "undefined" : e(t)) && t;
                            if (i || (i = new a(this, n), o(this).data(s, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }]), a
                }();
            o(window).on(d.LOAD_DATA_API, function () {
                for (var t = o.makeArray(o(f.DATA_SPY)), e = t.length; e--;) {
                    var i = o(t[e]);
                    A._jQueryInterface.call(i, i.data())
                }
            }), o.fn[c] = A._jQueryInterface, o.fn[c].Constructor = A, o.fn[c].noConflict = function () {
                return o.fn[c] = a, A._jQueryInterface
            }
        }(jQuery), function (e) {
            var o = ".bs.tab",
                c = e.fn.tab,
                s = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                r = "dropdown-menu",
                a = "active",
                l = "disabled",
                p = "fade",
                d = "show",
                u = ".dropdown",
                M = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                f = "> .nav-item .fade, > .fade",
                h = ".active",
                b = "> .nav-item > .active, > .active",
                A = '[data-toggle="tab"], [data-toggle="pill"]',
                z = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                g = function () {
                    function o(e) {
                        t(this, o), this._element = e
                    }
                    return o.prototype.show = function () {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(a) || e(this._element).hasClass(l))) {
                            var i = void 0,
                                o = void 0,
                                c = e(this._element).closest(M)[0],
                                r = n.getSelectorFromElement(this._element);
                            c && (o = e.makeArray(e(c).find(h)), o = o[o.length - 1]);
                            var p = e.Event(s.HIDE, {
                                    relatedTarget: this._element
                                }),
                                d = e.Event(s.SHOW, {
                                    relatedTarget: o
                                });
                            if (o && e(o).trigger(p), e(this._element).trigger(d), !d.isDefaultPrevented() && !p.isDefaultPrevented()) {
                                r && (i = e(r)[0]), this._activate(this._element, c);
                                var u = function () {
                                    var i = e.Event(s.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        n = e.Event(s.SHOWN, {
                                            relatedTarget: o
                                        });
                                    e(o).trigger(i), e(t._element).trigger(n)
                                };
                                i ? this._activate(i, i.parentNode, u) : u()
                            }
                        }
                    }, o.prototype.dispose = function () {
                        e.removeClass(this._element, "bs.tab"), this._element = null
                    }, o.prototype._activate = function (t, i, o) {
                        var c = this,
                            s = e(i).find(b)[0],
                            r = o && n.supportsTransitionEnd() && (s && e(s).hasClass(p) || Boolean(e(i).find(f)[0])),
                            a = function () {
                                return c._transitionComplete(t, s, r, o)
                            };
                        s && r ? e(s).one(n.TRANSITION_END, a).emulateTransitionEnd(150) : a(), s && e(s).removeClass(d)
                    }, o.prototype._transitionComplete = function (t, i, o, c) {
                        if (i) {
                            e(i).removeClass(a);
                            var s = e(i.parentNode).find(m)[0];
                            s && e(s).removeClass(a), i.setAttribute("aria-expanded", !1)
                        }
                        if (e(t).addClass(a), t.setAttribute("aria-expanded", !0), o ? (n.reflow(t), e(t).addClass(d)) : e(t).removeClass(p), t.parentNode && e(t.parentNode).hasClass(r)) {
                            var l = e(t).closest(u)[0];
                            l && e(l).find(z).addClass(a), t.setAttribute("aria-expanded", !0)
                        }
                        c && c()
                    }, o._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this),
                                n = i.data("bs.tab");
                            if (n || (n = new o(this), i.data("bs.tab", n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, i(o, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }]), o
                }();
            e(document).on(s.CLICK_DATA_API, A, function (t) {
                t.preventDefault(), g._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = g._jQueryInterface, e.fn.tab.Constructor = g, e.fn.tab.noConflict = function () {
                return e.fn.tab = c, g._jQueryInterface
            }
        }(jQuery), function (o) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var c = "tooltip",
                s = "bs.tooltip",
                r = "." + s,
                a = o.fn[c],
                l = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: [],
                    container: !1
                },
                p = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array",
                    container: "(string|element|boolean)"
                },
                d = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                u = "show",
                M = "out",
                f = {
                    HIDE: "hide" + r,
                    HIDDEN: "hidden" + r,
                    SHOW: "show" + r,
                    SHOWN: "shown" + r,
                    INSERTED: "inserted" + r,
                    CLICK: "click" + r,
                    FOCUSIN: "focusin" + r,
                    FOCUSOUT: "focusout" + r,
                    MOUSEENTER: "mouseenter" + r,
                    MOUSELEAVE: "mouseleave" + r
                },
                h = "fade",
                b = "show",
                A = ".tooltip-inner",
                z = {
                    element: !1,
                    enabled: !1
                },
                m = "hover",
                g = "focus",
                v = "click",
                O = "manual",
                y = function () {
                    function a(e, i) {
                        t(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = e, this.config = this._getConfig(i), this.tip = null, this._setListeners()
                    }
                    return a.prototype.enable = function () {
                        this._isEnabled = !0
                    }, a.prototype.disable = function () {
                        this._isEnabled = !1
                    }, a.prototype.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, a.prototype.toggle = function (t) {
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                i = o(t.currentTarget).data(e);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (o(this.getTipElement()).hasClass(b)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, a.prototype.dispose = function () {
                        clearTimeout(this._timeout), this.cleanupTether(), o.removeData(this.element, this.constructor.DATA_KEY), o(this.element).off(this.constructor.EVENT_KEY), o(this.element).closest(".modal").off("hide.bs.modal"), this.tip && o(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, a.prototype.show = function () {
                        var t = this;
                        if ("none" === o(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var e = o.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            o(this.element).trigger(e);
                            var i = o.contains(this.element.ownerDocument.documentElement, this.element);
                            if (e.isDefaultPrevented() || !i) return;
                            var c = this.getTipElement(),
                                s = n.getUID(this.constructor.NAME);
                            c.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o(c).addClass(h);
                            var r = "function" == typeof this.config.placement ? this.config.placement.call(this, c, this.element) : this.config.placement,
                                l = this._getAttachment(r),
                                p = !1 === this.config.container ? document.body : o(this.config.container);
                            o(c).data(this.constructor.DATA_KEY, this).appendTo(p), o(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: l,
                                element: c,
                                target: this.element,
                                classes: z,
                                classPrefix: "bs-tether",
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), n.reflow(c), this._tether.position(), o(c).addClass(b);
                            var d = function () {
                                var e = t._hoverState;
                                t._hoverState = null, t._isTransitioning = !1, o(t.element).trigger(t.constructor.Event.SHOWN), e === M && t._leave(null, t)
                            };
                            if (n.supportsTransitionEnd() && o(this.tip).hasClass(h)) return this._isTransitioning = !0, void o(this.tip).one(n.TRANSITION_END, d).emulateTransitionEnd(a._TRANSITION_DURATION);
                            d()
                        }
                    }, a.prototype.hide = function (t) {
                        var e = this,
                            i = this.getTipElement(),
                            c = o.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var s = function () {
                            e._hoverState !== u && i.parentNode && i.parentNode.removeChild(i), e.element.removeAttribute("aria-describedby"), o(e.element).trigger(e.constructor.Event.HIDDEN), e._isTransitioning = !1, e.cleanupTether(), t && t()
                        };
                        o(this.element).trigger(c), c.isDefaultPrevented() || (o(i).removeClass(b), this._activeTrigger[v] = !1, this._activeTrigger[g] = !1, this._activeTrigger[m] = !1, n.supportsTransitionEnd() && o(this.tip).hasClass(h) ? (this._isTransitioning = !0, o(i).one(n.TRANSITION_END, s).emulateTransitionEnd(150)) : s(), this._hoverState = "")
                    }, a.prototype.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, a.prototype.getTipElement = function () {
                        return this.tip = this.tip || o(this.config.template)[0]
                    }, a.prototype.setContent = function () {
                        var t = o(this.getTipElement());
                        this.setElementContent(t.find(A), this.getTitle()), t.removeClass(h + " " + b), this.cleanupTether()
                    }, a.prototype.setElementContent = function (t, i) {
                        var n = this.config.html;
                        "object" === (void 0 === i ? "undefined" : e(i)) && (i.nodeType || i.jquery) ? n ? o(i).parent().is(t) || t.empty().append(i) : t.text(o(i).text()): t[n ? "html" : "text"](i)
                    }, a.prototype.getTitle = function () {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, a.prototype.cleanupTether = function () {
                        this._tether && this._tether.destroy()
                    }, a.prototype._getAttachment = function (t) {
                        return d[t.toUpperCase()]
                    }, a.prototype._setListeners = function () {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function (e) {
                            if ("click" === e) o(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e)
                            });
                            else if (e !== O) {
                                var i = e === m ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    n = e === m ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                o(t.element).on(i, t.config.selector, function (e) {
                                    return t._enter(e)
                                }).on(n, t.config.selector, function (e) {
                                    return t._leave(e)
                                })
                            }
                            o(t.element).closest(".modal").on("hide.bs.modal", function () {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = o.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, a.prototype._fixTitle = function () {
                        var t = e(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, a.prototype._enter = function (t, e) {
                        var i = this.constructor.DATA_KEY;
                        return (e = e || o(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? g : m] = !0), o(e.getTipElement()).hasClass(b) || e._hoverState === u ? void(e._hoverState = u) : (clearTimeout(e._timeout), e._hoverState = u, e.config.delay && e.config.delay.show ? void(e._timeout = setTimeout(function () {
                            e._hoverState === u && e.show()
                        }, e.config.delay.show)) : void e.show())
                    }, a.prototype._leave = function (t, e) {
                        var i = this.constructor.DATA_KEY;
                        if ((e = e || o(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? g : m] = !1), !e._isWithActiveTrigger()) return clearTimeout(e._timeout), e._hoverState = M, e.config.delay && e.config.delay.hide ? void(e._timeout = setTimeout(function () {
                            e._hoverState === M && e.hide()
                        }, e.config.delay.hide)) : void e.hide()
                    }, a.prototype._isWithActiveTrigger = function () {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, a.prototype._getConfig = function (t) {
                        return (t = o.extend({}, this.constructor.Default, o(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }), n.typeCheckConfig(c, t, this.constructor.DefaultType), t
                    }, a.prototype._getDelegateConfig = function () {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = o(this).data(s),
                                n = "object" === (void 0 === t ? "undefined" : e(t)) && t;
                            if ((i || !/dispose|hide/.test(t)) && (i || (i = new a(this, n), o(this).data(s, i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, i(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return c
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return s
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return f
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return r
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return p
                        }
                    }]), a
                }();
            return o.fn[c] = y._jQueryInterface, o.fn[c].Constructor = y, o.fn[c].noConflict = function () {
                return o.fn[c] = a, y._jQueryInterface
            }, y
        }(jQuery));
    ! function (n) {
        var c = "popover",
            s = "bs.popover",
            r = "." + s,
            a = n.fn[c],
            l = n.extend({}, o.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            p = n.extend({}, o.DefaultType, {
                content: "(string|element|function)"
            }),
            d = "fade",
            u = "show",
            M = ".popover-title",
            f = ".popover-content",
            h = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                INSERTED: "inserted" + r,
                CLICK: "click" + r,
                FOCUSIN: "focusin" + r,
                FOCUSOUT: "focusout" + r,
                MOUSEENTER: "mouseenter" + r,
                MOUSELEAVE: "mouseleave" + r
            },
            b = function (o) {
                function a() {
                    return t(this, a),
                        function (t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, o.apply(this, arguments))
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(a, o), a.prototype.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, a.prototype.getTipElement = function () {
                    return this.tip = this.tip || n(this.config.template)[0]
                }, a.prototype.setContent = function () {
                    var t = n(this.getTipElement());
                    this.setElementContent(t.find(M), this.getTitle()), this.setElementContent(t.find(f), this._getContent()), t.removeClass(d + " " + u), this.cleanupTether()
                }, a.prototype._getContent = function () {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, a._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = n(this).data(s),
                            o = "object" === (void 0 === t ? "undefined" : e(t)) ? t : null;
                        if ((i || !/destroy|hide/.test(t)) && (i || (i = new a(this, o), n(this).data(s, i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, i(a, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return l
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return c
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return s
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return h
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return r
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return p
                    }
                }]), a
            }(o);
        n.fn[c] = b._jQueryInterface, n.fn[c].Constructor = b, n.fn[c].noConflict = function () {
            return n.fn[c] = a, b._jQueryInterface
        }
    }(jQuery)
}();
var pJS = function (t, e) {
    var i = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: i,
            w: i.offsetWidth,
            h: i.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var n = this.pJS;
    e && Object.deepExtend(n, e), n.tmp.obj = {
        size_value: n.particles.size.value,
        size_anim_speed: n.particles.size.anim.speed,
        move_speed: n.particles.move.speed,
        line_linked_distance: n.particles.line_linked.distance,
        line_linked_width: n.particles.line_linked.width,
        mode_grab_distance: n.interactivity.modes.grab.distance,
        mode_bubble_distance: n.interactivity.modes.bubble.distance,
        mode_bubble_size: n.interactivity.modes.bubble.size,
        mode_repulse_distance: n.interactivity.modes.repulse.distance
    }, n.fn.retinaInit = function () {
        n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio, n.tmp.retina = !0) : (n.canvas.pxratio = 1, n.tmp.retina = !1), n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio, n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio, n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio, n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio, n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio, n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio, n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio, n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio, n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio, n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio, n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
    }, n.fn.canvasInit = function () {
        n.canvas.ctx = n.canvas.el.getContext("2d")
    }, n.fn.canvasSize = function () {
        n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n && n.interactivity.events.resize && window.addEventListener("resize", function () {
            n.canvas.w = n.canvas.el.offsetWidth, n.canvas.h = n.canvas.el.offsetHeight, n.tmp.retina && (n.canvas.w *= n.canvas.pxratio, n.canvas.h *= n.canvas.pxratio), n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n.particles.move.enable || (n.fn.particlesEmpty(), n.fn.particlesCreate(), n.fn.particlesDraw(), n.fn.vendors.densityAutoParticles()), n.fn.vendors.densityAutoParticles()
        })
    }, n.fn.canvasPaint = function () {
        n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.canvasClear = function () {
        n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.particle = function (t, e, i) {
        if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value, n.particles.size.anim.enable && (this.size_status = !1, this.vs = n.particles.size.anim.speed / 100, n.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * n.canvas.w, this.y = i ? i.y : Math.random() * n.canvas.h, this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof t.value)
            if (t.value instanceof Array) {
                var o = t.value[Math.floor(Math.random() * n.particles.color.value.length)];
                this.color.rgb = hexToRgb(o)
            } else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
                r: t.value.r,
                g: t.value.g,
                b: t.value.b
            }), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
                h: t.value.h,
                s: t.value.s,
                l: t.value.l
            });
        else "random" == t.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value, n.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = n.particles.opacity.anim.speed / 100, n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var c = {};
        switch (n.particles.move.direction) {
            case "top":
                c = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                c = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                c = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                c = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                c = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                c = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                c = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                c = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                c = {
                    x: 0,
                    y: 0
                }
        }
        n.particles.move.straight ? (this.vx = c.x, this.vy = c.y, n.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = c.x + Math.random() - .5, this.vy = c.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var s = n.particles.shape.type;
        if ("object" == typeof s) {
            if (s instanceof Array) {
                var r = s[Math.floor(Math.random() * s.length)];
                this.shape = r
            }
        } else this.shape = s;
        if ("image" == this.shape) {
            var a = n.particles.shape;
            this.img = {
                src: a.image.src,
                ratio: a.image.width / a.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == n.tmp.img_type && void 0 != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this), n.tmp.pushing && (this.img.loaded = !1))
        }
    }, n.fn.particle.prototype.draw = function () {
        var t = this;
        if (void 0 != t.radius_bubble) e = t.radius_bubble;
        else var e = t.radius;
        if (void 0 != t.opacity_bubble) i = t.opacity_bubble;
        else var i = t.opacity;
        if (t.color.rgb) o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + i + ")";
        else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + i + ")";
        switch (n.canvas.ctx.fillStyle = o, n.canvas.ctx.beginPath(), t.shape) {
            case "circle":
                n.canvas.ctx.arc(t.x, t.y, e, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                n.canvas.ctx.rect(t.x - e, t.y - e, 2 * e, 2 * e);
                break;
            case "triangle":
                n.fn.vendors.drawShape(n.canvas.ctx, t.x - e, t.y + e / 1.66, 2 * e, 3, 2);
                break;
            case "polygon":
                n.fn.vendors.drawShape(n.canvas.ctx, t.x - e / (n.particles.shape.polygon.nb_sides / 3.5), t.y - e / .76, 2.66 * e / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                n.fn.vendors.drawShape(n.canvas.ctx, t.x - 2 * e / (n.particles.shape.polygon.nb_sides / 4), t.y - e / 1.52, 2 * e * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == n.tmp.img_type) c = t.img.obj;
                else var c = n.tmp.img_obj;
                c && n.canvas.ctx.drawImage(c, t.x - e, t.y - e, 2 * e, 2 * e / t.img.ratio)
        }
        n.canvas.ctx.closePath(), n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color, n.canvas.ctx.lineWidth = n.particles.shape.stroke.width, n.canvas.ctx.stroke()), n.canvas.ctx.fill()
    }, n.fn.particlesCreate = function () {
        for (var t = 0; t < n.particles.number.value; t++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value))
    }, n.fn.particlesUpdate = function () {
        for (var t = 0; t < n.particles.array.length; t++) {
            var e = n.particles.array[t];
            if (n.particles.move.enable) {
                var i = n.particles.move.speed / 2;
                e.x += e.vx * i, e.y += e.vy * i
            }
            if (n.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= n.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= n.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), n.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= n.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= n.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == n.particles.move.out_mode) o = {
                x_left: e.radius,
                x_right: n.canvas.w,
                y_top: e.radius,
                y_bottom: n.canvas.h
            };
            else var o = {
                x_left: -e.radius,
                x_right: n.canvas.w + e.radius,
                y_top: -e.radius,
                y_bottom: n.canvas.h + e.radius
            };
            switch (e.x - e.radius > n.canvas.w ? (e.x = o.x_left, e.y = Math.random() * n.canvas.h) : e.x + e.radius < 0 && (e.x = o.x_right, e.y = Math.random() * n.canvas.h), e.y - e.radius > n.canvas.h ? (e.y = o.y_top, e.x = Math.random() * n.canvas.w) : e.y + e.radius < 0 && (e.y = o.y_bottom, e.x = Math.random() * n.canvas.w), n.particles.move.out_mode) {
                case "bounce":
                    e.x + e.radius > n.canvas.w ? e.vx = -e.vx : e.x - e.radius < 0 && (e.vx = -e.vx), e.y + e.radius > n.canvas.h ? e.vy = -e.vy : e.y - e.radius < 0 && (e.vy = -e.vy)
            }
            if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(e), (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(e), (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(e), n.particles.line_linked.enable || n.particles.move.attract.enable)
                for (var c = t + 1; c < n.particles.array.length; c++) {
                    var s = n.particles.array[c];
                    n.particles.line_linked.enable && n.fn.interact.linkParticles(e, s), n.particles.move.attract.enable && n.fn.interact.attractParticles(e, s), n.particles.move.bounce && n.fn.interact.bounceParticles(e, s)
                }
        }
    }, n.fn.particlesDraw = function () {
        n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h), n.fn.particlesUpdate();
        for (var t = 0; t < n.particles.array.length; t++) {
            n.particles.array[t].draw()
        }
    }, n.fn.particlesEmpty = function () {
        n.particles.array = []
    }, n.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(n.fn.checkAnimFrame), cancelRequestAnimFrame(n.fn.drawAnimFrame), n.tmp.source_svg = void 0, n.tmp.img_obj = void 0, n.tmp.count_svg = 0, n.fn.particlesEmpty(), n.fn.canvasClear(), n.fn.vendors.start()
    }, n.fn.interact.linkParticles = function (t, e) {
        var i = t.x - e.x,
            o = t.y - e.y,
            c = Math.sqrt(i * i + o * o);
        if (c <= n.particles.line_linked.distance) {
            var s = n.particles.line_linked.opacity - c / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
            if (s > 0) {
                var r = n.particles.line_linked.color_rgb_line;
                n.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(e.x, e.y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
            }
        }
    }, n.fn.interact.attractParticles = function (t, e) {
        var i = t.x - e.x,
            o = t.y - e.y;
        if (Math.sqrt(i * i + o * o) <= n.particles.line_linked.distance) {
            var c = i / (1e3 * n.particles.move.attract.rotateX),
                s = o / (1e3 * n.particles.move.attract.rotateY);
            t.vx -= c, t.vy -= s, e.vx += c, e.vy += s
        }
    }, n.fn.interact.bounceParticles = function (t, e) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.sqrt(i * i + n * n);
        t.radius + e.radius >= o && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
    }, n.fn.modes.pushParticles = function (t, e) {
        n.tmp.pushing = !0;
        for (var i = 0; t > i; i++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value, {
            x: e ? e.pos_x : Math.random() * n.canvas.w,
            y: e ? e.pos_y : Math.random() * n.canvas.h
        })), i == t - 1 && (n.particles.move.enable || n.fn.particlesDraw(), n.tmp.pushing = !1)
    }, n.fn.modes.removeParticles = function (t) {
        n.particles.array.splice(0, t), n.particles.move.enable || n.fn.particlesDraw()
    }, n.fn.modes.bubbleParticle = function (t) {
        function e() {
            t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
        }

        function i(e, i, o, c, s) {
            if (e != i)
                if (n.tmp.bubble_duration_end) {
                    if (void 0 != o) {
                        a = e + (e - (c - d * (c - e) / n.interactivity.modes.bubble.duration)), "size" == s && (t.radius_bubble = a), "opacity" == s && (t.opacity_bubble = a)
                    }
                } else if (p <= n.interactivity.modes.bubble.distance) {
                if (void 0 != o) r = o;
                else var r = c;
                if (r != e) {
                    var a = c - d * (c - e) / n.interactivity.modes.bubble.duration;
                    "size" == s && (t.radius_bubble = a), "opacity" == s && (t.opacity_bubble = a)
                }
            } else "size" == s && (t.radius_bubble = void 0), "opacity" == s && (t.opacity_bubble = void 0)
        }
        if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
            var o = t.x - n.interactivity.mouse.pos_x,
                c = t.y - n.interactivity.mouse.pos_y,
                s = 1 - (p = Math.sqrt(o * o + c * c)) / n.interactivity.modes.bubble.distance;
            if (p <= n.interactivity.modes.bubble.distance) {
                if (s >= 0 && "mousemove" == n.interactivity.status) {
                    if (n.interactivity.modes.bubble.size != n.particles.size.value)
                        if (n.interactivity.modes.bubble.size > n.particles.size.value) {
                            (a = t.radius + n.interactivity.modes.bubble.size * s) >= 0 && (t.radius_bubble = a)
                        } else {
                            var r = t.radius - n.interactivity.modes.bubble.size,
                                a = t.radius - r * s;
                            t.radius_bubble = a > 0 ? a : 0
                        }
                    if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
                        if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value) {
                            (l = n.interactivity.modes.bubble.opacity * s) > t.opacity && l <= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = l)
                        } else {
                            var l = t.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * s;
                            l < t.opacity && l >= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = l)
                        }
                }
            } else e();
            "mouseleave" == n.interactivity.status && e()
        } else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
            if (n.tmp.bubble_clicking) {
                var o = t.x - n.interactivity.mouse.click_pos_x,
                    c = t.y - n.interactivity.mouse.click_pos_y,
                    p = Math.sqrt(o * o + c * c),
                    d = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
                d > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0), d > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1, n.tmp.bubble_duration_end = !1)
            }
            n.tmp.bubble_clicking && (i(n.interactivity.modes.bubble.size, n.particles.size.value, t.radius_bubble, t.radius, "size"), i(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
        }
    }, n.fn.modes.repulseParticle = function (t) {
        if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
            var e = t.x - n.interactivity.mouse.pos_x,
                i = t.y - n.interactivity.mouse.pos_y,
                o = Math.sqrt(e * e + i * i),
                c = e / o,
                s = i / o,
                r = clamp(1 / (l = n.interactivity.modes.repulse.distance) * (-1 * Math.pow(o / l, 2) + 1) * l * 100, 0, 50),
                a = {
                    x: t.x + c * r,
                    y: t.y + s * r
                };
            "bounce" == n.particles.move.out_mode ? (a.x - t.radius > 0 && a.x + t.radius < n.canvas.w && (t.x = a.x), a.y - t.radius > 0 && a.y + t.radius < n.canvas.h && (t.y = a.y)) : (t.x = a.x, t.y = a.y)
        } else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode))
            if (n.tmp.repulse_finish || (n.tmp.repulse_count++, n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)), n.tmp.repulse_clicking) {
                var l = Math.pow(n.interactivity.modes.repulse.distance / 6, 3),
                    p = n.interactivity.mouse.click_pos_x - t.x,
                    d = n.interactivity.mouse.click_pos_y - t.y,
                    u = p * p + d * d,
                    M = -l / u * 1;
                l >= u && function () {
                    var e = Math.atan2(d, p);
                    if (t.vx = M * Math.cos(e), t.vy = M * Math.sin(e), "bounce" == n.particles.move.out_mode) {
                        var i = t.x + t.vx,
                            o = t.y + t.vy;
                        i + t.radius > n.canvas.w ? t.vx = -t.vx : i - t.radius < 0 && (t.vx = -t.vx), o + t.radius > n.canvas.h ? t.vy = -t.vy : o - t.radius < 0 && (t.vy = -t.vy)
                    }
                }()
            } else 0 == n.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
    }, n.fn.modes.grabParticle = function (t) {
        if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
            var e = t.x - n.interactivity.mouse.pos_x,
                i = t.y - n.interactivity.mouse.pos_y,
                o = Math.sqrt(e * e + i * i);
            if (o <= n.interactivity.modes.grab.distance) {
                var c = n.interactivity.modes.grab.line_linked.opacity - o / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
                if (c > 0) {
                    var s = n.particles.line_linked.color_rgb_line;
                    n.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + c + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
                }
            }
        }
    }, n.fn.vendors.eventsListeners = function () {
        "window" == n.interactivity.detect_on ? n.interactivity.el = window : n.interactivity.el = n.canvas.el, (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", function (t) {
            if (n.interactivity.el == window) var e = t.clientX,
                i = t.clientY;
            else var e = t.offsetX || t.clientX,
                i = t.offsetY || t.clientY;
            n.interactivity.mouse.pos_x = e, n.interactivity.mouse.pos_y = i, n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio, n.interactivity.mouse.pos_y *= n.canvas.pxratio), n.interactivity.status = "mousemove"
        }), n.interactivity.el.addEventListener("mouseleave", function (t) {
            n.interactivity.mouse.pos_x = null, n.interactivity.mouse.pos_y = null, n.interactivity.status = "mouseleave"
        })), n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", function () {
            if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x, n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y, n.interactivity.mouse.click_time = (new Date).getTime(), n.interactivity.events.onclick.enable) switch (n.interactivity.events.onclick.mode) {
                case "push":
                    n.particles.move.enable ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    n.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    n.tmp.repulse_clicking = !0, n.tmp.repulse_count = 0, n.tmp.repulse_finish = !1, setTimeout(function () {
                        n.tmp.repulse_clicking = !1
                    }, 1e3 * n.interactivity.modes.repulse.duration)
            }
        })
    }, n.fn.vendors.densityAutoParticles = function () {
        if (n.particles.number.density.enable) {
            var t = n.canvas.el.width * n.canvas.el.height / 1e3;
            n.tmp.retina && (t /= 2 * n.canvas.pxratio);
            var e = t * n.particles.number.value / n.particles.number.density.value_area,
                i = n.particles.array.length - e;
            0 > i ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
        }
    }, n.fn.vendors.checkOverlap = function (t, e) {
        for (var i = 0; i < n.particles.array.length; i++) {
            var o = n.particles.array[i],
                c = t.x - o.x,
                s = t.y - o.y;
            Math.sqrt(c * c + s * s) <= t.radius + o.radius && (t.x = e ? e.x : Math.random() * n.canvas.w, t.y = e ? e.y : Math.random() * n.canvas.h, n.fn.vendors.checkOverlap(t))
        }
    }, n.fn.vendors.createSvgImg = function (t) {
        var e = n.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (e, i, n, o) {
                if (t.color.rgb) c = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
                else var c = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
                return c
            }),
            i = new Blob([e], {
                type: "image/svg+xml;charset=utf-8"
            }),
            o = window.URL || window.webkitURL || window,
            c = o.createObjectURL(i),
            s = new Image;
        s.addEventListener("load", function () {
            t.img.obj = s, t.img.loaded = !0, o.revokeObjectURL(c), n.tmp.count_svg++
        }), s.src = c
    }, n.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(n.fn.drawAnimFrame), i.remove(), pJSDom = null
    }, n.fn.vendors.drawShape = function (t, e, i, n, o, c) {
        var s = o * c,
            r = o / c,
            a = 180 * (r - 2) / r,
            l = Math.PI - Math.PI * a / 180;
        t.save(), t.beginPath(), t.translate(e, i), t.moveTo(0, 0);
        for (var p = 0; s > p; p++) t.lineTo(n, 0), t.translate(n, 0), t.rotate(l);
        t.fill(), t.restore()
    }, n.fn.vendors.exportImg = function () {
        window.open(n.canvas.el.toDataURL("image/png"), "_blank")
    }, n.fn.vendors.loadImg = function (t) {
        if (n.tmp.img_error = void 0, "" != n.particles.shape.image.src)
            if ("svg" == t) {
                var e = new XMLHttpRequest;
                e.open("GET", n.particles.shape.image.src), e.onreadystatechange = function (t) {
                    4 == e.readyState && (200 == e.status ? (n.tmp.source_svg = t.currentTarget.response, n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), n.tmp.img_error = !0))
                }, e.send()
            } else {
                var i = new Image;
                i.addEventListener("load", function () {
                    n.tmp.img_obj = i, n.fn.vendors.checkBeforeDraw()
                }), i.src = n.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), n.tmp.img_error = !0
    }, n.fn.vendors.draw = function () {
        "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : void 0 != n.tmp.img_obj ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
    }, n.fn.vendors.checkBeforeDraw = function () {
        "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && void 0 == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame), n.tmp.img_error || (n.fn.vendors.init(), n.fn.vendors.draw())) : (n.fn.vendors.init(), n.fn.vendors.draw())
    }, n.fn.vendors.init = function () {
        n.fn.retinaInit(), n.fn.canvasInit(), n.fn.canvasSize(), n.fn.canvasPaint(), n.fn.particlesCreate(), n.fn.vendors.densityAutoParticles(), n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
    }, n.fn.vendors.start = function () {
        isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3), n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
    }, n.fn.vendors.eventsListeners(), n.fn.vendors.start()
};
Object.deepExtend = function (t, e) {
        for (var i in e) e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, arguments.callee(t[i], e[i])) : t[i] = e[i];
        return t
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (t, e) {
        "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
        var i = document.getElementById(t),
            n = "particles-js-canvas-el",
            o = i.getElementsByClassName(n);
        if (o.length)
            for (; o.length > 0;) i.removeChild(o[0]);
        var c = document.createElement("canvas");
        c.className = n, c.style.width = "100%", c.style.height = "100%";
        null != document.getElementById(t).appendChild(c) && pJSDom.push(new pJS(t, e))
    }, window.particlesJS.load = function (t, e, i) {
        var n = new XMLHttpRequest;
        n.open("GET", e), n.onreadystatechange = function (e) {
            if (4 == n.readyState)
                if (200 == n.status) {
                    var o = JSON.parse(e.currentTarget.response);
                    window.particlesJS(t, o), i && i()
                } else console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found")
        }, n.send()
    },
    function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, function () {
        return function (t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var o = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "dist/", e(0)
        }([function (t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var o = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                },
                c = n((n(i(1)), i(5))),
                s = n(i(6)),
                r = n(i(7)),
                a = n(i(8)),
                l = n(i(9)),
                p = n(i(10)),
                d = n(i(13)),
                u = [],
                M = !1,
                f = document.all && !window.atob,
                h = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded"
                },
                b = function () {
                    return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (M = !0), M ? (u = (0, p.default)(u, h), (0, l.default)(u, h.once), u) : void 0
                },
                A = function () {
                    u = (0, d.default)(), b()
                };
            t.exports = {
                init: function (t) {
                    return h = o(h, t), u = (0, d.default)(),
                        function (t) {
                            return !0 === t || "mobile" === t && a.default.mobile() || "phone" === t && a.default.phone() || "tablet" === t && a.default.tablet() || "function" == typeof t && !0 === t()
                        }(h.disable) || f ? void u.forEach(function (t, e) {
                            t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                        }) : (document.querySelector("body").setAttribute("data-aos-easing", h.easing), document.querySelector("body").setAttribute("data-aos-duration", h.duration), document.querySelector("body").setAttribute("data-aos-delay", h.delay), "DOMContentLoaded" === h.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? b(!0) : "load" === h.startEvent ? window.addEventListener(h.startEvent, function () {
                            b(!0)
                        }) : document.addEventListener(h.startEvent, function () {
                            b(!0)
                        }), window.addEventListener("resize", (0, s.default)(b, 50, !0)), window.addEventListener("orientationchange", (0, s.default)(b, 50, !0)), window.addEventListener("scroll", (0, c.default)(function () {
                            (0, l.default)(u, h.once)
                        }, 99)), document.addEventListener("DOMNodeRemoved", function (t) {
                            var e = t.target;
                            e && 1 === e.nodeType && e.hasAttribute && e.hasAttribute("data-aos") && (0, s.default)(A, 50, !0)
                        }), (0, r.default)("[data-aos]", A), u)
                },
                refresh: b,
                refreshHard: A
            }
        }, function (t, e) {}, , , , function (t, e, i) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                o = i(6),
                c = "Expected a function";
            t.exports = function (t, e, i) {
                var s = !0,
                    r = !0;
                if ("function" != typeof t) throw new TypeError(c);
                return function (t) {
                    var e = void 0 === t ? "undefined" : n(t);
                    return !!t && ("object" == e || "function" == e)
                }(i) && (s = "leading" in i ? !!i.leading : s, r = "trailing" in i ? !!i.trailing : r), o(t, e, {
                    leading: s,
                    maxWait: e,
                    trailing: r
                })
            }
        }, function (t, e) {
            "use strict";

            function i(t) {
                var e = void 0 === t ? "undefined" : c(t);
                return !!t && ("object" == e || "function" == e)
            }

            function n(t) {
                return "symbol" == (void 0 === t ? "undefined" : c(t)) || function (t) {
                    return !!t && "object" == (void 0 === t ? "undefined" : c(t))
                }(t) && b.call(t) == p
            }

            function o(t) {
                if ("number" == typeof t) return t;
                if (n(t)) return r;
                if (i(t)) {
                    var e = function (t) {
                        var e = i(t) ? b.call(t) : "";
                        return e == a || e == l
                    }(t.valueOf) ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(d, "");
                var o = M.test(t);
                return o || f.test(t) ? h(t.slice(2), o ? 2 : 8) : u.test(t) ? r : +t
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                s = "Expected a function",
                r = NaN,
                a = "[object Function]",
                l = "[object GeneratorFunction]",
                p = "[object Symbol]",
                d = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                M = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                h = parseInt,
                b = Object.prototype.toString,
                A = Math.max,
                z = Math.min,
                m = Date.now;
            t.exports = function (t, e, n) {
                function c(e) {
                    var i = d,
                        n = u;
                    return d = u = void 0, g = e, f = t.apply(n, i)
                }

                function r(t) {
                    var i = t - b;
                    return !b || i >= e || 0 > i || O && t - g >= M
                }

                function a() {
                    var t = m();
                    return r(t) ? l(t) : void(h = setTimeout(a, function (i) {
                        var n = e - (t - b);
                        return O ? z(n, M - (t - g)) : n
                    }()))
                }

                function l(t) {
                    return clearTimeout(h), h = void 0, y && d ? c(t) : (d = u = void 0, f)
                }

                function p() {
                    var t = m(),
                        i = r(t);
                    if (d = arguments, u = this, b = t, i) {
                        if (void 0 === h) return function (t) {
                            return g = t, h = setTimeout(a, e), v ? c(t) : f
                        }(b);
                        if (O) return clearTimeout(h), h = setTimeout(a, e), c(b)
                    }
                    return void 0 === h && (h = setTimeout(a, e)), f
                }
                var d, u, M, f, h, b = 0,
                    g = 0,
                    v = !1,
                    O = !1,
                    y = !0;
                if ("function" != typeof t) throw new TypeError(s);
                return e = o(e) || 0, i(n) && (v = !!n.leading, O = "maxWait" in n, M = O ? A(o(n.maxWait) || 0, e) : M, y = "trailing" in n ? !!n.trailing : y), p.cancel = function () {
                    void 0 !== h && clearTimeout(h), b = g = 0, d = u = h = void 0
                }, p.flush = function () {
                    return void 0 === h ? f : l(m())
                }, p
            }
        }, function (t, e) {
            "use strict";

            function i() {
                for (var t, e, i = 0, o = c.length; o > i; i++) {
                    t = c[i];
                    for (var s, r = 0, a = (e = n.querySelectorAll(t.selector)).length; a > r; r++)(s = e[r]).ready || (s.ready = !0, t.fn.call(s, s))
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = window.document,
                o = window.MutationObserver || window.WebKitMutationObserver,
                c = [],
                s = void 0;
            e.default = function (t, e) {
                c.push({
                    selector: t,
                    fn: e
                }), !s && o && (s = new o(i)).observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                }), i()
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                n = function () {
                    function t() {
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return i(t, [{
                        key: "phone",
                        value: function () {
                            var t = !1;
                            return function (e) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                            }(navigator.userAgent || navigator.vendor || window.opera), t
                        }
                    }, {
                        key: "mobile",
                        value: function () {
                            var t = !1;
                            return function (e) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                            }(navigator.userAgent || navigator.vendor || window.opera), t
                        }
                    }, {
                        key: "tablet",
                        value: function () {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new n
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t, e) {
                var i = window.pageYOffset,
                    n = window.innerHeight;
                t.forEach(function (t, o) {
                    ! function (t, e, i) {
                        var n = t.node.getAttribute("data-aos-once");
                        e > t.position ? t.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && t.node.classList.remove("aos-animate")
                    }(t, n + i, e)
                })
            }
        }, function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(11));
            e.default = function (t, e) {
                return t.forEach(function (t, i) {
                    t.node.classList.add("aos-init"), t.position = (0, n.default)(t.node, e.offset)
                }), t
            }
        }, function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(12));
            e.default = function (t, e) {
                var i = 0,
                    o = 0,
                    c = window.innerHeight,
                    s = {
                        offset: t.getAttribute("data-aos-offset"),
                        anchor: t.getAttribute("data-aos-anchor"),
                        anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                    };
                switch (s.offset && !isNaN(s.offset) && (o = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]), i = (0, n.default)(t).top, s.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += t.offsetHeight;
                        break;
                    case "top-center":
                        i += c / 2;
                        break;
                    case "bottom-center":
                        i += c / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        i += c / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += c;
                        break;
                    case "bottom-top":
                        i += t.offsetHeight + c;
                        break;
                    case "center-top":
                        i += t.offsetHeight / 2 + c
                }
                return s.anchorPlacement || s.offset || isNaN(e) || (o = e), i + o
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: i,
                    left: e
                }
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t) {
                t = t || document.querySelectorAll("[data-aos]");
                var e = [];
                return [].forEach.call(t, function (t, i) {
                    e.push({
                        node: t
                    })
                }), e
            }
        }])
    }),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    }(this, function () {
        "use strict";

        function t() {
            return Kt.apply(null, arguments)
        }

        function e(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function i(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }

        function n(t) {
            return void 0 === t
        }

        function o(t) {
            return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
        }

        function c(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function s(t, e) {
            var i, n = [];
            for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
            return n
        }

        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function a(t, e) {
            for (var i in e) r(e, i) && (t[i] = e[i]);
            return r(e, "toString") && (t.toString = e.toString), r(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function l(t, e, i, n) {
            return At(t, e, i, n, !0).utc()
        }

        function p(t) {
            return null == t._pf && (t._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }), t._pf
        }

        function d(t) {
            if (null == t._isValid) {
                var e = p(t),
                    i = Qt.call(e.parsedDateParts, function (t) {
                        return null != t
                    }),
                    n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
                t._isValid = n
            }
            return t._isValid
        }

        function u(t) {
            var e = l(NaN);
            return null != t ? a(p(e), t) : p(e).userInvalidated = !0, e
        }

        function M(t, e) {
            var i, o, c;
            if (n(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), n(e._i) || (t._i = e._i), n(e._f) || (t._f = e._f), n(e._l) || (t._l = e._l), n(e._strict) || (t._strict = e._strict), n(e._tzm) || (t._tzm = e._tzm), n(e._isUTC) || (t._isUTC = e._isUTC), n(e._offset) || (t._offset = e._offset), n(e._pf) || (t._pf = p(e)), n(e._locale) || (t._locale = e._locale), Jt.length > 0)
                for (i = 0; i < Jt.length; i++) n(c = e[o = Jt[i]]) || (t[o] = c);
            return t
        }

        function f(e) {
            M(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Zt && (Zt = !0, t.updateOffset(this), Zt = !1)
        }

        function h(t) {
            return t instanceof f || null != t && null != t._isAMomentObject
        }

        function b(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function A(t) {
            var e = +t,
                i = 0;
            return 0 !== e && isFinite(e) && (i = b(e)), i
        }

        function z(t, e, i) {
            var n, o = Math.min(t.length, e.length),
                c = Math.abs(t.length - e.length),
                s = 0;
            for (n = 0; n < o; n++)(i && t[n] !== e[n] || !i && A(t[n]) !== A(e[n])) && s++;
            return s + c
        }

        function m(e) {
            !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function g(e, i) {
            var n = !0;
            return a(function () {
                if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                    for (var o, c = [], s = 0; s < arguments.length; s++) {
                        if (o = "", "object" == typeof arguments[s]) {
                            o += "\n[" + s + "] ";
                            for (var r in arguments[0]) o += r + ": " + arguments[0][r] + ", ";
                            o = o.slice(0, -2)
                        } else o = arguments[s];
                        c.push(o)
                    }
                    m(e + "\nArguments: " + Array.prototype.slice.call(c).join("") + "\n" + (new Error).stack), n = !1
                }
                return i.apply(this, arguments)
            }, i)
        }

        function v(e, i) {
            null != t.deprecationHandler && t.deprecationHandler(e, i), te[e] || (m(i), te[e] = !0)
        }

        function O(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function y(t, e) {
            var n, o = a({}, t);
            for (n in e) r(e, n) && (i(t[n]) && i(e[n]) ? (o[n] = {}, a(o[n], t[n]), a(o[n], e[n])) : null != e[n] ? o[n] = e[n] : delete o[n]);
            for (n in t) r(t, n) && !r(e, n) && i(t[n]) && (o[n] = a({}, o[n]));
            return o
        }

        function L(t) {
            null != t && this.set(t)
        }

        function N(t, e) {
            var i = t.toLowerCase();
            ie[i] = ie[i + "s"] = ie[e] = t
        }

        function T(t) {
            return "string" == typeof t ? ie[t] || ie[t.toLowerCase()] : void 0
        }

        function q(t) {
            var e, i, n = {};
            for (i in t) r(t, i) && (e = T(i)) && (n[e] = t[i]);
            return n
        }

        function W(t, e) {
            ne[t] = e
        }

        function w(t, e, i) {
            var n = "" + Math.abs(t),
                o = e - n.length;
            return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
        }

        function _(t, e, i, n) {
            var o = n;
            "string" == typeof n && (o = function () {
                return this[n]()
            }), t && (re[t] = o), e && (re[e[0]] = function () {
                return w(o.apply(this, arguments), e[1], e[2])
            }), i && (re[i] = function () {
                return this.localeData().ordinal(o.apply(this, arguments), t)
            })
        }

        function S(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function C(t, e) {
            return t.isValid() ? (e = X(e, t.localeData()), se[e] = se[e] || function (t) {
                var e, i, n = t.match(oe);
                for (e = 0, i = n.length; e < i; e++) re[n[e]] ? n[e] = re[n[e]] : n[e] = S(n[e]);
                return function (e) {
                    var o, c = "";
                    for (o = 0; o < i; o++) c += O(n[o]) ? n[o].call(e, t) : n[o];
                    return c
                }
            }(e), se[e](t)) : t.localeData().invalidDate()
        }

        function X(t, e) {
            var i = 5;
            for (ce.lastIndex = 0; i >= 0 && ce.test(t);) t = t.replace(ce, function (t) {
                return e.longDateFormat(t) || t
            }), ce.lastIndex = 0, i -= 1;
            return t
        }

        function B(t, e, i) {
            Le[t] = O(e) ? e : function (t, n) {
                return t && i ? i : e
            }
        }

        function E(t, e) {
            return r(Le, t) ? Le[t](e._strict, e._locale) : new RegExp(function (t) {
                return k(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, o) {
                    return e || i || n || o
                }))
            }(t))
        }

        function k(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function x(t, e) {
            var i, n = e;
            for ("string" == typeof t && (t = [t]), o(e) && (n = function (t, i) {
                    i[e] = A(t)
                }), i = 0; i < t.length; i++) Ne[t[i]] = n
        }

        function D(t, e) {
            x(t, function (t, i, n, o) {
                n._w = n._w || {}, e(t, n._w, n, o)
            })
        }

        function R(t, e, i) {
            null != e && r(Ne, t) && Ne[t](e, i._a, i, t)
        }

        function P(t) {
            return I(t) ? 366 : 365
        }

        function I(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }

        function H(e, i) {
            return function (n) {
                return null != n ? (F(this, e, n), t.updateOffset(this, i), this) : j(this, e)
            }
        }

        function j(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function F(t, e, i) {
            t.isValid() && !isNaN(i) && ("FullYear" === e && I(t.year()) ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), U(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
        }

        function U(t, e) {
            if (isNaN(t) || isNaN(e)) return NaN;
            var i = function (t, e) {
                return (t % e + e) % e
            }(e, 12);
            return t += (e - i) / 12, 1 === i ? I(t) ? 29 : 28 : 31 - i % 7 % 2
        }

        function $(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = A(e);
                else if (e = t.localeData().monthsParse(e), !o(e)) return t;
            return i = Math.min(t.date(), U(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function Y(e) {
            return null != e ? ($(this, e), t.updateOffset(this, !0), this) : j(this, "Month")
        }

        function V() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, n = [],
                o = [],
                c = [];
            for (e = 0; e < 12; e++) i = l([2e3, e]), n.push(this.monthsShort(i, "")), o.push(this.months(i, "")), c.push(this.months(i, "")), c.push(this.monthsShort(i, ""));
            for (n.sort(t), o.sort(t), c.sort(t), e = 0; e < 12; e++) n[e] = k(n[e]), o[e] = k(o[e]);
            for (e = 0; e < 24; e++) c[e] = k(c[e]);
            this._monthsRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function G(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
        }

        function K(t, e, i) {
            var n = 7 + e - i;
            return -(7 + G(t, 0, n).getUTCDay() - e) % 7 + n - 1
        }

        function Q(t, e, i, n, o) {
            var c, s, r = 1 + 7 * (e - 1) + (7 + i - n) % 7 + K(t, n, o);
            return r <= 0 ? s = P(c = t - 1) + r : r > P(t) ? (c = t + 1, s = r - P(t)) : (c = t, s = r), {
                year: c,
                dayOfYear: s
            }
        }

        function J(t, e, i) {
            var n, o, c = K(t.year(), e, i),
                s = Math.floor((t.dayOfYear() - c - 1) / 7) + 1;
            return s < 1 ? n = s + Z(o = t.year() - 1, e, i) : s > Z(t.year(), e, i) ? (n = s - Z(t.year(), e, i), o = t.year() + 1) : (o = t.year(), n = s), {
                week: n,
                year: o
            }
        }

        function Z(t, e, i) {
            var n = K(t, e, i),
                o = K(t + 1, e, i);
            return (P(t) - n + o) / 7
        }

        function tt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, n, o, c, s = [],
                r = [],
                a = [],
                p = [];
            for (e = 0; e < 7; e++) i = l([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), o = this.weekdaysShort(i, ""), c = this.weekdays(i, ""), s.push(n), r.push(o), a.push(c), p.push(n), p.push(o), p.push(c);
            for (s.sort(t), r.sort(t), a.sort(t), p.sort(t), e = 0; e < 7; e++) r[e] = k(r[e]), a[e] = k(a[e]), p[e] = k(p[e]);
            this._weekdaysRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function et() {
            return this.hours() % 12 || 12
        }

        function it(t, e) {
            _(t, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }

        function nt(t, e) {
            return e._meridiemParse
        }

        function ot(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function ct(t) {
            var e = null;
            if (!Qe[t] && "undefined" != typeof module && module && module.exports) try {
                e = Ve._abbr, require("./locale/" + t), st(e)
            } catch (t) {}
            return Qe[t]
        }

        function st(t, e) {
            var i;
            return t && (i = n(e) ? at(t) : rt(t, e)) && (Ve = i), Ve._abbr
        }

        function rt(t, e) {
            if (null !== e) {
                var i = Ke;
                if (e.abbr = t, null != Qe[t]) v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Qe[t]._config;
                else if (null != e.parentLocale) {
                    if (null == Qe[e.parentLocale]) return Je[e.parentLocale] || (Je[e.parentLocale] = []), Je[e.parentLocale].push({
                        name: t,
                        config: e
                    }), null;
                    i = Qe[e.parentLocale]._config
                }
                return Qe[t] = new L(y(i, e)), Je[t] && Je[t].forEach(function (t) {
                    rt(t.name, t.config)
                }), st(t), Qe[t]
            }
            return delete Qe[t], null
        }

        function at(t) {
            var i;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ve;
            if (!e(t)) {
                if (i = ct(t)) return i;
                t = [t]
            }
            return function (t) {
                for (var e, i, n, o, c = 0; c < t.length;) {
                    for (e = (o = ot(t[c]).split("-")).length, i = (i = ot(t[c + 1])) ? i.split("-") : null; e > 0;) {
                        if (n = ct(o.slice(0, e).join("-"))) return n;
                        if (i && i.length >= e && z(o, i, !0) >= e - 1) break;
                        e--
                    }
                    c++
                }
                return null
            }(t)
        }

        function lt(t) {
            var e, i = t._a;
            return i && -2 === p(t).overflow && (e = i[qe] < 0 || i[qe] > 11 ? qe : i[We] < 1 || i[We] > U(i[Te], i[qe]) ? We : i[we] < 0 || i[we] > 24 || 24 === i[we] && (0 !== i[_e] || 0 !== i[Se] || 0 !== i[Ce]) ? we : i[_e] < 0 || i[_e] > 59 ? _e : i[Se] < 0 || i[Se] > 59 ? Se : i[Ce] < 0 || i[Ce] > 999 ? Ce : -1, p(t)._overflowDayOfYear && (e < Te || e > We) && (e = We), p(t)._overflowWeeks && -1 === e && (e = Xe), p(t)._overflowWeekday && -1 === e && (e = Be), p(t).overflow = e), t
        }

        function pt(t, e, i) {
            return null != t ? t : null != e ? e : i
        }

        function dt(e) {
            var i, n, o, c, s = [];
            if (!e._d) {
                for (o = function (e) {
                        var i = new Date(t.now());
                        return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
                    }(e), e._w && null == e._a[We] && null == e._a[qe] && function (t) {
                        var e, i, n, o, c, s, r, a;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) c = 1, s = 4, i = pt(e.GG, t._a[Te], J(zt(), 1, 4).year), n = pt(e.W, 1), ((o = pt(e.E, 1)) < 1 || o > 7) && (a = !0);
                        else {
                            c = t._locale._week.dow, s = t._locale._week.doy;
                            var l = J(zt(), c, s);
                            i = pt(e.gg, t._a[Te], l.year), n = pt(e.w, l.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (a = !0) : null != e.e ? (o = e.e + c, (e.e < 0 || e.e > 6) && (a = !0)) : o = c
                        }
                        n < 1 || n > Z(i, c, s) ? p(t)._overflowWeeks = !0 : null != a ? p(t)._overflowWeekday = !0 : (r = Q(i, n, o, c, s), t._a[Te] = r.year, t._dayOfYear = r.dayOfYear)
                    }(e), null != e._dayOfYear && (c = pt(e._a[Te], o[Te]), (e._dayOfYear > P(c) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0), n = G(c, 0, e._dayOfYear), e._a[qe] = n.getUTCMonth(), e._a[We] = n.getUTCDate()), i = 0; i < 3 && null == e._a[i]; ++i) e._a[i] = s[i] = o[i];
                for (; i < 7; i++) e._a[i] = s[i] = null == e._a[i] ? 2 === i ? 1 : 0 : e._a[i];
                24 === e._a[we] && 0 === e._a[_e] && 0 === e._a[Se] && 0 === e._a[Ce] && (e._nextDay = !0, e._a[we] = 0), e._d = (e._useUTC ? G : function (t, e, i, n, o, c, s) {
                    var r = new Date(t, e, i, n, o, c, s);
                    return t < 100 && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t), r
                }).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[we] = 24), e._w && void 0 !== e._w.d && e._w.d !== e._d.getDay() && (p(e).weekdayMismatch = !0)
            }
        }

        function ut(t) {
            var e, i, n, o, c, s, r = t._i,
                a = Ze.exec(r) || ti.exec(r);
            if (a) {
                for (p(t).iso = !0, e = 0, i = ii.length; e < i; e++)
                    if (ii[e][1].exec(a[1])) {
                        o = ii[e][0], n = !1 !== ii[e][2];
                        break
                    }
                if (null == o) return void(t._isValid = !1);
                if (a[3]) {
                    for (e = 0, i = ni.length; e < i; e++)
                        if (ni[e][1].exec(a[3])) {
                            c = (a[2] || " ") + ni[e][0];
                            break
                        }
                    if (null == c) return void(t._isValid = !1)
                }
                if (!n && null != c) return void(t._isValid = !1);
                if (a[4]) {
                    if (!ei.exec(a[4])) return void(t._isValid = !1);
                    s = "Z"
                }
                t._f = o + (c || "") + (s || ""), ht(t)
            } else t._isValid = !1
        }

        function Mt(t, e, i, n, o, c) {
            var s = [function (t) {
                var e = parseInt(t, 10);
                return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
            }(t), Re.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(o, 10)];
            return c && s.push(parseInt(c, 10)), s
        }

        function ft(t) {
            var e = ci.exec(function (t) {
                return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
            }(t._i));
            if (e) {
                var i = Mt(e[4], e[3], e[2], e[5], e[6], e[7]);
                if (! function (t, e, i) {
                        return !t || je.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (p(i).weekdayMismatch = !0, i._isValid = !1, !1)
                    }(e[1], i, t)) return;
                t._a = i, t._tzm = function (t, e, i) {
                    if (t) return si[t];
                    if (e) return 0;
                    var n = parseInt(i, 10),
                        o = n % 100;
                    return (n - o) / 100 * 60 + o
                }(e[8], e[9], e[10]), t._d = G.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), p(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function ht(e) {
            if (e._f !== t.ISO_8601)
                if (e._f !== t.RFC_2822) {
                    e._a = [], p(e).empty = !0;
                    var i, n, o, c, s, r = "" + e._i,
                        a = r.length,
                        l = 0;
                    for (o = X(e._f, e._locale).match(oe) || [], i = 0; i < o.length; i++) c = o[i], (n = (r.match(E(c, e)) || [])[0]) && ((s = r.substr(0, r.indexOf(n))).length > 0 && p(e).unusedInput.push(s), r = r.slice(r.indexOf(n) + n.length), l += n.length), re[c] ? (n ? p(e).empty = !1 : p(e).unusedTokens.push(c), R(c, n, e)) : e._strict && !n && p(e).unusedTokens.push(c);
                    p(e).charsLeftOver = a - l, r.length > 0 && p(e).unusedInput.push(r), e._a[we] <= 12 && !0 === p(e).bigHour && e._a[we] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[we] = function (t, e, i) {
                        var n;
                        return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
                    }(e._locale, e._a[we], e._meridiem), dt(e), lt(e)
                } else ft(e);
            else ut(e)
        }

        function bt(r) {
            var l = r._i,
                b = r._f;
            return r._locale = r._locale || at(r._l), null === l || void 0 === b && "" === l ? u({
                nullInput: !0
            }) : ("string" == typeof l && (r._i = l = r._locale.preparse(l)), h(l) ? new f(lt(l)) : (c(l) ? r._d = l : e(b) ? function (t) {
                var e, i, n, o, c;
                if (0 === t._f.length) return p(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (o = 0; o < t._f.length; o++) c = 0, e = M({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], ht(e), d(e) && (c += p(e).charsLeftOver, c += 10 * p(e).unusedTokens.length, p(e).score = c, (null == n || c < n) && (n = c, i = e));
                a(t, i || e)
            }(r) : b ? ht(r) : function (r) {
                var a = r._i;
                n(a) ? r._d = new Date(t.now()) : c(a) ? r._d = new Date(a.valueOf()) : "string" == typeof a ? function (e) {
                    var i = oi.exec(e._i);
                    null === i ? (ut(e), !1 === e._isValid && (delete e._isValid, ft(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))) : e._d = new Date(+i[1])
                }(r) : e(a) ? (r._a = s(a.slice(0), function (t) {
                    return parseInt(t, 10)
                }), dt(r)) : i(a) ? function (t) {
                    if (!t._d) {
                        var e = q(t._i);
                        t._a = s([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                            return t && parseInt(t, 10)
                        }), dt(t)
                    }
                }(r) : o(a) ? r._d = new Date(a) : t.createFromInputFallback(r)
            }(r), d(r) || (r._d = null), r))
        }

        function At(t, n, o, c, s) {
            var r = {};
            return !0 !== o && !1 !== o || (c = o, o = void 0), (i(t) && function (t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }(t) || e(t) && 0 === t.length) && (t = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = o, r._i = t, r._f = n, r._strict = c,
                function (t) {
                    var e = new f(lt(bt(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
                }(r)
        }

        function zt(t, e, i, n) {
            return At(t, e, i, n, !1)
        }

        function mt(t, i) {
            var n, o;
            if (1 === i.length && e(i[0]) && (i = i[0]), !i.length) return zt();
            for (n = i[0], o = 1; o < i.length; ++o) i[o].isValid() && !i[o][t](n) || (n = i[o]);
            return n
        }

        function gt(t) {
            var e = q(t),
                i = e.year || 0,
                n = e.quarter || 0,
                o = e.month || 0,
                c = e.week || 0,
                s = e.day || 0,
                r = e.hour || 0,
                a = e.minute || 0,
                l = e.second || 0,
                p = e.millisecond || 0;
            this._isValid = function (t) {
                for (var e in t)
                    if (-1 === Ee.call(li, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var i = !1, n = 0; n < li.length; ++n)
                    if (t[li[n]]) {
                        if (i) return !1;
                        parseFloat(t[li[n]]) !== A(t[li[n]]) && (i = !0)
                    }
                return !0
            }(e), this._milliseconds = +p + 1e3 * l + 6e4 * a + 1e3 * r * 60 * 60, this._days = +s + 7 * c, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = at(), this._bubble()
        }

        function vt(t) {
            return t instanceof gt
        }

        function Ot(t) {
            return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
        }

        function yt(t, e) {
            _(t, 0, 0, function () {
                var t = this.utcOffset(),
                    i = "+";
                return t < 0 && (t = -t, i = "-"), i + w(~~(t / 60), 2) + e + w(~~t % 60, 2)
            })
        }

        function Lt(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var n = ((i[i.length - 1] || []) + "").match(pi) || ["-", 0, 0],
                o = 60 * n[1] + A(n[2]);
            return 0 === o ? 0 : "+" === n[0] ? o : -o
        }

        function Nt(e, i) {
            var n, o;
            return i._isUTC ? (n = i.clone(), o = (h(e) || c(e) ? e.valueOf() : zt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), t.updateOffset(n, !1), n) : zt(e).local()
        }

        function Tt(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function qt() {
            return !!this.isValid() && this._isUTC && 0 === this._offset
        }

        function Wt(t, e) {
            var i, n, c, s = t,
                a = null;
            return vt(t) ? s = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : o(t) ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (a = di.exec(t)) ? (i = "-" === a[1] ? -1 : 1, s = {
                y: 0,
                d: A(a[We]) * i,
                h: A(a[we]) * i,
                m: A(a[_e]) * i,
                s: A(a[Se]) * i,
                ms: A(Ot(1e3 * a[Ce])) * i
            }) : (a = ui.exec(t)) ? (i = "-" === a[1] ? -1 : (a[1], 1), s = {
                y: wt(a[2], i),
                M: wt(a[3], i),
                w: wt(a[4], i),
                d: wt(a[5], i),
                h: wt(a[6], i),
                m: wt(a[7], i),
                s: wt(a[8], i)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (c = function (t, e) {
                var i;
                return t.isValid() && e.isValid() ? (e = Nt(e, t), t.isBefore(e) ? i = _t(t, e) : ((i = _t(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                    milliseconds: 0,
                    months: 0
                }
            }(zt(s.from), zt(s.to)), (s = {}).ms = c.milliseconds, s.M = c.months), n = new gt(s), vt(t) && r(t, "_locale") && (n._locale = t._locale), n
        }

        function wt(t, e) {
            var i = t && parseFloat(t.replace(",", "."));
            return (isNaN(i) ? 0 : i) * e
        }

        function _t(t, e) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
        }

        function St(t, e) {
            return function (i, n) {
                var o, c;
                return null === n || isNaN(+n) || (v(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), c = i, i = n, n = c), i = "string" == typeof i ? +i : i, o = Wt(i, n), Ct(this, o, t), this
            }
        }

        function Ct(e, i, n, o) {
            var c = i._milliseconds,
                s = Ot(i._days),
                r = Ot(i._months);
            e.isValid() && (o = null == o || o, r && $(e, j(e, "Month") + r * n), s && F(e, "Date", j(e, "Date") + s * n), c && e._d.setTime(e._d.valueOf() + c * n), o && t.updateOffset(e, s || r))
        }

        function Xt(t, e) {
            var i, n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                o = t.clone().add(n, "months");
            return i = e - o < 0 ? (e - o) / (o - t.clone().add(n - 1, "months")) : (e - o) / (t.clone().add(n + 1, "months") - o), -(n + i) || 0
        }

        function Bt(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (null != (e = at(t)) && (this._locale = e), this)
        }

        function Et() {
            return this._locale
        }

        function kt(t, e) {
            _(0, [t, t.length], 0, e)
        }

        function xt(t, e, i, n, o) {
            var c;
            return null == t ? J(this, n, o).year : (c = Z(t, n, o), e > c && (e = c), function (t, e, i, n, o) {
                var c = Q(t, e, i, n, o),
                    s = G(c.year, 0, c.dayOfYear);
                return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
            }.call(this, t, e, i, n, o))
        }

        function Dt(t) {
            return t
        }

        function Rt(t, e, i, n) {
            var o = at(),
                c = l().set(n, e);
            return o[i](c, t)
        }

        function Pt(t, e, i) {
            if (o(t) && (e = t, t = void 0), t = t || "", null != e) return Rt(t, e, i, "month");
            var n, c = [];
            for (n = 0; n < 12; n++) c[n] = Rt(t, n, i, "month");
            return c
        }

        function It(t, e, i, n) {
            "boolean" == typeof t ? (o(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, o(e) && (i = e, e = void 0), e = e || "");
            var c = at(),
                s = t ? c._week.dow : 0;
            if (null != i) return Rt(e, (i + s) % 7, n, "day");
            var r, a = [];
            for (r = 0; r < 7; r++) a[r] = Rt(e, (r + s) % 7, n, "day");
            return a
        }

        function Ht(t, e, i, n) {
            var o = Wt(e, i);
            return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble()
        }

        function jt(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function Ft(t) {
            return 4800 * t / 146097
        }

        function Ut(t) {
            return 146097 * t / 4800
        }

        function $t(t) {
            return function () {
                return this.as(t)
            }
        }

        function Yt(t) {
            return function () {
                return this.isValid() ? this._data[t] : NaN
            }
        }

        function Vt(t) {
            return (t > 0) - (t < 0) || +t
        }

        function Gt() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, i, n = Ii(this._milliseconds) / 1e3,
                o = Ii(this._days),
                c = Ii(this._months);
            e = b((t = b(n / 60)) / 60), n %= 60, t %= 60;
            var s = i = b(c / 12),
                r = c %= 12,
                a = o,
                l = e,
                p = t,
                d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                u = this.asSeconds();
            if (!u) return "P0D";
            var M = u < 0 ? "-" : "",
                f = Vt(this._months) !== Vt(u) ? "-" : "",
                h = Vt(this._days) !== Vt(u) ? "-" : "",
                A = Vt(this._milliseconds) !== Vt(u) ? "-" : "";
            return M + "P" + (s ? f + s + "Y" : "") + (r ? f + r + "M" : "") + (a ? h + a + "D" : "") + (l || p || d ? "T" : "") + (l ? A + l + "H" : "") + (p ? A + p + "M" : "") + (d ? A + d + "S" : "")
        }
        var Kt, Qt;
        Qt = Array.prototype.some ? Array.prototype.some : function (t) {
            for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                if (n in e && t.call(this, e[n], n, e)) return !0;
            return !1
        };
        var Jt = t.momentProperties = [],
            Zt = !1,
            te = {};
        t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
        var ee;
        ee = Object.keys ? Object.keys : function (t) {
            var e, i = [];
            for (e in t) r(t, e) && i.push(e);
            return i
        };
        var ie = {},
            ne = {},
            oe = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            ce = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            se = {},
            re = {},
            ae = /\d/,
            le = /\d\d/,
            pe = /\d{3}/,
            de = /\d{4}/,
            ue = /[+-]?\d{6}/,
            Me = /\d\d?/,
            fe = /\d\d\d\d?/,
            he = /\d\d\d\d\d\d?/,
            be = /\d{1,3}/,
            Ae = /\d{1,4}/,
            ze = /[+-]?\d{1,6}/,
            me = /\d+/,
            ge = /[+-]?\d+/,
            ve = /Z|[+-]\d\d:?\d\d/gi,
            Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ye = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Le = {},
            Ne = {},
            Te = 0,
            qe = 1,
            We = 2,
            we = 3,
            _e = 4,
            Se = 5,
            Ce = 6,
            Xe = 7,
            Be = 8;
        _("Y", 0, 0, function () {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }), _(0, ["YY", 2], 0, function () {
            return this.year() % 100
        }), _(0, ["YYYY", 4], 0, "year"), _(0, ["YYYYY", 5], 0, "year"), _(0, ["YYYYYY", 6, !0], 0, "year"), N("year", "y"), W("year", 1), B("Y", ge), B("YY", Me, le), B("YYYY", Ae, de), B("YYYYY", ze, ue), B("YYYYYY", ze, ue), x(["YYYYY", "YYYYYY"], Te), x("YYYY", function (e, i) {
            i[Te] = 2 === e.length ? t.parseTwoDigitYear(e) : A(e)
        }), x("YY", function (e, i) {
            i[Te] = t.parseTwoDigitYear(e)
        }), x("Y", function (t, e) {
            e[Te] = parseInt(t, 10)
        }), t.parseTwoDigitYear = function (t) {
            return A(t) + (A(t) > 68 ? 1900 : 2e3)
        };
        var Ee, ke = H("FullYear", !0);
        Ee = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        }, _("M", ["MM", 2], "Mo", function () {
            return this.month() + 1
        }), _("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t)
        }), _("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t)
        }), N("month", "M"), W("month", 8), B("M", Me), B("MM", Me, le), B("MMM", function (t, e) {
            return e.monthsShortRegex(t)
        }), B("MMMM", function (t, e) {
            return e.monthsRegex(t)
        }), x(["M", "MM"], function (t, e) {
            e[qe] = A(t) - 1
        }), x(["MMM", "MMMM"], function (t, e, i, n) {
            var o = i._locale.monthsParse(t, n, i._strict);
            null != o ? e[qe] = o : p(i).invalidMonth = t
        });
        var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            De = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Pe = ye,
            Ie = ye;
        _("w", ["ww", 2], "wo", "week"), _("W", ["WW", 2], "Wo", "isoWeek"), N("week", "w"), N("isoWeek", "W"), W("week", 5), W("isoWeek", 5), B("w", Me), B("ww", Me, le), B("W", Me), B("WW", Me, le), D(["w", "ww", "W", "WW"], function (t, e, i, n) {
            e[n.substr(0, 1)] = A(t)
        });
        _("d", 0, "do", "day"), _("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t)
        }), _("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t)
        }), _("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t)
        }), _("e", 0, 0, "weekday"), _("E", 0, 0, "isoWeekday"), N("day", "d"), N("weekday", "e"), N("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), B("d", Me), B("e", Me), B("E", Me), B("dd", function (t, e) {
            return e.weekdaysMinRegex(t)
        }), B("ddd", function (t, e) {
            return e.weekdaysShortRegex(t)
        }), B("dddd", function (t, e) {
            return e.weekdaysRegex(t)
        }), D(["dd", "ddd", "dddd"], function (t, e, i, n) {
            var o = i._locale.weekdaysParse(t, n, i._strict);
            null != o ? e.d = o : p(i).invalidWeekday = t
        }), D(["d", "e", "E"], function (t, e, i, n) {
            e[n] = A(t)
        });
        var He = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            je = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Fe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Ue = ye,
            $e = ye,
            Ye = ye;
        _("H", ["HH", 2], 0, "hour"), _("h", ["hh", 2], 0, et), _("k", ["kk", 2], 0, function () {
            return this.hours() || 24
        }), _("hmm", 0, 0, function () {
            return "" + et.apply(this) + w(this.minutes(), 2)
        }), _("hmmss", 0, 0, function () {
            return "" + et.apply(this) + w(this.minutes(), 2) + w(this.seconds(), 2)
        }), _("Hmm", 0, 0, function () {
            return "" + this.hours() + w(this.minutes(), 2)
        }), _("Hmmss", 0, 0, function () {
            return "" + this.hours() + w(this.minutes(), 2) + w(this.seconds(), 2)
        }), it("a", !0), it("A", !1), N("hour", "h"), W("hour", 13), B("a", nt), B("A", nt), B("H", Me), B("h", Me), B("k", Me), B("HH", Me, le), B("hh", Me, le), B("kk", Me, le), B("hmm", fe), B("hmmss", he), B("Hmm", fe), B("Hmmss", he), x(["H", "HH"], we), x(["k", "kk"], function (t, e, i) {
            var n = A(t);
            e[we] = 24 === n ? 0 : n
        }), x(["a", "A"], function (t, e, i) {
            i._isPm = i._locale.isPM(t), i._meridiem = t
        }), x(["h", "hh"], function (t, e, i) {
            e[we] = A(t), p(i).bigHour = !0
        }), x("hmm", function (t, e, i) {
            var n = t.length - 2;
            e[we] = A(t.substr(0, n)), e[_e] = A(t.substr(n)), p(i).bigHour = !0
        }), x("hmmss", function (t, e, i) {
            var n = t.length - 4,
                o = t.length - 2;
            e[we] = A(t.substr(0, n)), e[_e] = A(t.substr(n, 2)), e[Se] = A(t.substr(o)), p(i).bigHour = !0
        }), x("Hmm", function (t, e, i) {
            var n = t.length - 2;
            e[we] = A(t.substr(0, n)), e[_e] = A(t.substr(n))
        }), x("Hmmss", function (t, e, i) {
            var n = t.length - 4,
                o = t.length - 2;
            e[we] = A(t.substr(0, n)), e[_e] = A(t.substr(n, 2)), e[Se] = A(t.substr(o))
        });
        var Ve, Ge = H("Hours", !0),
            Ke = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: De,
                monthsShort: Re,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: He,
                weekdaysMin: Fe,
                weekdaysShort: je,
                meridiemParse: /[ap]\.?m?\.?/i
            },
            Qe = {},
            Je = {},
            Ze = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ti = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ei = /Z|[+-]\d\d(?::?\d\d)?/,
            ii = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ni = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            oi = /^\/?Date\((\-?\d+)/i,
            ci = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            si = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
        t.createFromInputFallback = g("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }), t.ISO_8601 = function () {}, t.RFC_2822 = function () {};
        var ri = g("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var t = zt.apply(null, arguments);
                return this.isValid() && t.isValid() ? t < this ? this : t : u()
            }),
            ai = g("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var t = zt.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : u()
            }),
            li = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        yt("Z", ":"), yt("ZZ", ""), B("Z", Oe), B("ZZ", Oe), x(["Z", "ZZ"], function (t, e, i) {
            i._useUTC = !0, i._tzm = Lt(Oe, t)
        });
        var pi = /([\+\-]|\d\d)/gi;
        t.updateOffset = function () {};
        var di = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            ui = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        Wt.fn = gt.prototype, Wt.invalid = function () {
            return Wt(NaN)
        };
        var Mi = St(1, "add"),
            fi = St(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var hi = g("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        _(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }), _(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100
        }), kt("gggg", "weekYear"), kt("ggggg", "weekYear"), kt("GGGG", "isoWeekYear"), kt("GGGGG", "isoWeekYear"), N("weekYear", "gg"), N("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), B("G", ge), B("g", ge), B("GG", Me, le), B("gg", Me, le), B("GGGG", Ae, de), B("gggg", Ae, de), B("GGGGG", ze, ue), B("ggggg", ze, ue), D(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
            e[n.substr(0, 2)] = A(t)
        }), D(["gg", "GG"], function (e, i, n, o) {
            i[o] = t.parseTwoDigitYear(e)
        }), _("Q", 0, "Qo", "quarter"), N("quarter", "Q"), W("quarter", 7), B("Q", ae), x("Q", function (t, e) {
            e[qe] = 3 * (A(t) - 1)
        }), _("D", ["DD", 2], "Do", "date"), N("date", "D"), W("date", 9), B("D", Me), B("DD", Me, le), B("Do", function (t, e) {
            return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
        }), x(["D", "DD"], We), x("Do", function (t, e) {
            e[We] = A(t.match(Me)[0])
        });
        var bi = H("Date", !0);
        _("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), N("dayOfYear", "DDD"), W("dayOfYear", 4), B("DDD", be), B("DDDD", pe), x(["DDD", "DDDD"], function (t, e, i) {
            i._dayOfYear = A(t)
        }), _("m", ["mm", 2], 0, "minute"), N("minute", "m"), W("minute", 14), B("m", Me), B("mm", Me, le), x(["m", "mm"], _e);
        var Ai = H("Minutes", !1);
        _("s", ["ss", 2], 0, "second"), N("second", "s"), W("second", 15), B("s", Me), B("ss", Me, le), x(["s", "ss"], Se);
        var zi = H("Seconds", !1);
        _("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }), _(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
        }), _(0, ["SSS", 3], 0, "millisecond"), _(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
        }), _(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
        }), _(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
        }), _(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
        }), _(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
        }), _(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
        }), N("millisecond", "ms"), W("millisecond", 16), B("S", be, ae), B("SS", be, le), B("SSS", be, pe);
        var mi;
        for (mi = "SSSS"; mi.length <= 9; mi += "S") B(mi, me);
        for (mi = "S"; mi.length <= 9; mi += "S") x(mi, function (t, e) {
            e[Ce] = A(1e3 * ("0." + t))
        });
        var gi = H("Milliseconds", !1);
        _("z", 0, 0, "zoneAbbr"), _("zz", 0, 0, "zoneName");
        var vi = f.prototype;
        vi.add = Mi, vi.calendar = function (e, i) {
            var n = e || zt(),
                o = Nt(n, this).startOf("day"),
                c = t.calendarFormat(this, o) || "sameElse",
                s = i && (O(i[c]) ? i[c].call(this, n) : i[c]);
            return this.format(s || this.localeData().calendar(c, this, zt(n)))
        }, vi.clone = function () {
            return new f(this)
        }, vi.diff = function (t, e, i) {
            var n, o, c;
            if (!this.isValid()) return NaN;
            if (!(n = Nt(t, this)).isValid()) return NaN;
            switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), e = T(e)) {
                case "year":
                    c = Xt(this, n) / 12;
                    break;
                case "month":
                    c = Xt(this, n);
                    break;
                case "quarter":
                    c = Xt(this, n) / 3;
                    break;
                case "second":
                    c = (this - n) / 1e3;
                    break;
                case "minute":
                    c = (this - n) / 6e4;
                    break;
                case "hour":
                    c = (this - n) / 36e5;
                    break;
                case "day":
                    c = (this - n - o) / 864e5;
                    break;
                case "week":
                    c = (this - n - o) / 6048e5;
                    break;
                default:
                    c = this - n
            }
            return i ? c : b(c)
        }, vi.endOf = function (t) {
            return void 0 === (t = T(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }, vi.format = function (e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var i = C(this, e);
            return this.localeData().postformat(i)
        }, vi.from = function (t, e) {
            return this.isValid() && (h(t) && t.isValid() || zt(t).isValid()) ? Wt({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, vi.fromNow = function (t) {
            return this.from(zt(), t)
        }, vi.to = function (t, e) {
            return this.isValid() && (h(t) && t.isValid() || zt(t).isValid()) ? Wt({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, vi.toNow = function (t) {
            return this.to(zt(), t)
        }, vi.get = function (t) {
            return t = T(t), O(this[t]) ? this[t]() : this
        }, vi.invalidAt = function () {
            return p(this).overflow
        }, vi.isAfter = function (t, e) {
            var i = h(t) ? t : zt(t);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = T(n(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
        }, vi.isBefore = function (t, e) {
            var i = h(t) ? t : zt(t);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = T(n(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
        }, vi.isBetween = function (t, e, i, n) {
            return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
        }, vi.isSame = function (t, e) {
            var i, n = h(t) ? t : zt(t);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = T(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
        }, vi.isSameOrAfter = function (t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }, vi.isSameOrBefore = function (t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }, vi.isValid = function () {
            return d(this)
        }, vi.lang = hi, vi.locale = Bt, vi.localeData = Et, vi.max = ai, vi.min = ri, vi.parsingFlags = function () {
            return a({}, p(this))
        }, vi.set = function (t, e) {
            if ("object" == typeof t)
                for (var i = function (t) {
                        var e = [];
                        for (var i in t) e.push({
                            unit: i,
                            priority: ne[i]
                        });
                        return e.sort(function (t, e) {
                            return t.priority - e.priority
                        }), e
                    }(t = q(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
            else if (t = T(t), O(this[t])) return this[t](e);
            return this
        }, vi.startOf = function (t) {
            switch (t = T(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }, vi.subtract = fi, vi.toArray = function () {
            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
        }, vi.toObject = function () {
            return {
                years: this.year(),
                months: this.month(),
                date: this.date(),
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            }
        }, vi.toDate = function () {
            return new Date(this.valueOf())
        }, vi.toISOString = function () {
            if (!this.isValid()) return null;
            var t = this.clone().utc();
            return t.year() < 0 || t.year() > 9999 ? C(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : O(Date.prototype.toISOString) ? this.toDate().toISOString() : C(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, vi.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var i = "[" + t + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                o = e + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + o)
        }, vi.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
        }, vi.toString = function () {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, vi.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
        }, vi.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, vi.creationData = function () {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }, vi.year = ke, vi.isLeapYear = function () {
            return I(this.year())
        }, vi.weekYear = function (t) {
            return xt.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, vi.isoWeekYear = function (t) {
            return xt.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, vi.quarter = vi.quarters = function (t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }, vi.month = Y, vi.daysInMonth = function () {
            return U(this.year(), this.month())
        }, vi.week = vi.weeks = function (t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }, vi.isoWeek = vi.isoWeeks = function (t) {
            var e = J(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }, vi.weeksInYear = function () {
            var t = this.localeData()._week;
            return Z(this.year(), t.dow, t.doy)
        }, vi.isoWeeksInYear = function () {
            return Z(this.year(), 1, 4)
        }, vi.date = bi, vi.day = vi.days = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = function (t, e) {
                return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
            }(t, this.localeData()), this.add(t - e, "d")) : e
        }, vi.weekday = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }, vi.isoWeekday = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                var e = function (t, e) {
                    return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
        }, vi.dayOfYear = function (t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }, vi.hour = vi.hours = Ge, vi.minute = vi.minutes = Ai, vi.second = vi.seconds = zi, vi.millisecond = vi.milliseconds = gi, vi.utcOffset = function (e, i, n) {
            var o, c = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                if ("string" == typeof e) {
                    if (null === (e = Lt(Oe, e))) return this
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return !this._isUTC && i && (o = Tt(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), c !== e && (!i || this._changeInProgress ? Ct(this, Wt(e - c, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? c : Tt(this)
        }, vi.utc = function (t) {
            return this.utcOffset(0, t)
        }, vi.local = function (t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Tt(this), "m")), this
        }, vi.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = Lt(ve, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }, vi.hasAlignedHourOffset = function (t) {
            return !!this.isValid() && (t = t ? zt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
        }, vi.isDST = function () {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, vi.isLocal = function () {
            return !!this.isValid() && !this._isUTC
        }, vi.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC
        }, vi.isUtc = qt, vi.isUTC = qt, vi.zoneAbbr = function () {
            return this._isUTC ? "UTC" : ""
        }, vi.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, vi.dates = g("dates accessor is deprecated. Use date instead.", bi), vi.months = g("months accessor is deprecated. Use month instead", Y), vi.years = g("years accessor is deprecated. Use year instead", ke), vi.zone = g("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }), vi.isDSTShifted = g("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
            if (!n(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (M(t, this), (t = bt(t))._a) {
                var e = t._isUTC ? l(t._a) : zt(t._a);
                this._isDSTShifted = this.isValid() && z(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var Oi = L.prototype;
        Oi.calendar = function (t, e, i) {
            var n = this._calendar[t] || this._calendar.sameElse;
            return O(n) ? n.call(e, i) : n
        }, Oi.longDateFormat = function (t) {
            var e = this._longDateFormat[t],
                i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }), this._longDateFormat[t])
        }, Oi.invalidDate = function () {
            return this._invalidDate
        }, Oi.ordinal = function (t) {
            return this._ordinal.replace("%d", t)
        }, Oi.preparse = Dt, Oi.postformat = Dt, Oi.relativeTime = function (t, e, i, n) {
            var o = this._relativeTime[i];
            return O(o) ? o(t, e, i, n) : o.replace(/%d/i, t)
        }, Oi.pastFuture = function (t, e) {
            var i = this._relativeTime[t > 0 ? "future" : "past"];
            return O(i) ? i(e) : i.replace(/%s/i, e)
        }, Oi.set = function (t) {
            var e, i;
            for (i in t) O(e = t[i]) ? this[i] = e : this["_" + i] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, Oi.months = function (t, i) {
            return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || xe).test(i) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
        }, Oi.monthsShort = function (t, i) {
            return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[xe.test(i) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, Oi.monthsParse = function (t, e, i) {
            var n, o, c;
            if (this._monthsParseExact) return function (t, e, i) {
                var n, o, c, s = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) c = l([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(c, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(c, "").toLocaleLowerCase();
                return i ? "MMM" === e ? -1 !== (o = Ee.call(this._shortMonthsParse, s)) ? o : null : -1 !== (o = Ee.call(this._longMonthsParse, s)) ? o : null : "MMM" === e ? -1 !== (o = Ee.call(this._shortMonthsParse, s)) ? o : -1 !== (o = Ee.call(this._longMonthsParse, s)) ? o : null : -1 !== (o = Ee.call(this._longMonthsParse, s)) ? o : -1 !== (o = Ee.call(this._shortMonthsParse, s)) ? o : null
            }.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                if (o = l([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (c = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(c.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                if (!i && this._monthsParse[n].test(t)) return n
            }
        }, Oi.monthsRegex = function (t) {
            return this._monthsParseExact ? (r(this, "_monthsRegex") || V.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = Ie), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }, Oi.monthsShortRegex = function (t) {
            return this._monthsParseExact ? (r(this, "_monthsRegex") || V.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = Pe), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, Oi.week = function (t) {
            return J(t, this._week.dow, this._week.doy).week
        }, Oi.firstDayOfYear = function () {
            return this._week.doy
        }, Oi.firstDayOfWeek = function () {
            return this._week.dow
        }, Oi.weekdays = function (t, i) {
            return t ? e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(i) ? "format" : "standalone"][t.day()] : e(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, Oi.weekdaysMin = function (t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }, Oi.weekdaysShort = function (t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }, Oi.weekdaysParse = function (t, e, i) {
            var n, o, c;
            if (this._weekdaysParseExact) return function (t, e, i) {
                var n, o, c, s = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) c = l([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(c, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(c, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(c, "").toLocaleLowerCase();
                return i ? "dddd" === e ? -1 !== (o = Ee.call(this._weekdaysParse, s)) ? o : null : "ddd" === e ? -1 !== (o = Ee.call(this._shortWeekdaysParse, s)) ? o : null : -1 !== (o = Ee.call(this._minWeekdaysParse, s)) ? o : null : "dddd" === e ? -1 !== (o = Ee.call(this._weekdaysParse, s)) ? o : -1 !== (o = Ee.call(this._shortWeekdaysParse, s)) ? o : -1 !== (o = Ee.call(this._minWeekdaysParse, s)) ? o : null : "ddd" === e ? -1 !== (o = Ee.call(this._shortWeekdaysParse, s)) ? o : -1 !== (o = Ee.call(this._weekdaysParse, s)) ? o : -1 !== (o = Ee.call(this._minWeekdaysParse, s)) ? o : null : -1 !== (o = Ee.call(this._minWeekdaysParse, s)) ? o : -1 !== (o = Ee.call(this._weekdaysParse, s)) ? o : -1 !== (o = Ee.call(this._shortWeekdaysParse, s)) ? o : null
            }.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                if (o = l([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (c = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(c.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                if (!i && this._weekdaysParse[n].test(t)) return n
            }
        }, Oi.weekdaysRegex = function (t) {
            return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = Ue), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, Oi.weekdaysShortRegex = function (t) {
            return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, Oi.weekdaysMinRegex = function (t) {
            return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ye), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, Oi.isPM = function (t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }, Oi.meridiem = function (t, e, i) {
            return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        }, st("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
                var e = t % 10;
                return t + (1 === A(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
            }
        }), t.lang = g("moment.lang is deprecated. Use moment.locale instead.", st), t.langData = g("moment.langData is deprecated. Use moment.localeData instead.", at);
        var yi = Math.abs,
            Li = $t("ms"),
            Ni = $t("s"),
            Ti = $t("m"),
            qi = $t("h"),
            Wi = $t("d"),
            wi = $t("w"),
            _i = $t("M"),
            Si = $t("y"),
            Ci = Yt("milliseconds"),
            Xi = Yt("seconds"),
            Bi = Yt("minutes"),
            Ei = Yt("hours"),
            ki = Yt("days"),
            xi = Yt("months"),
            Di = Yt("years"),
            Ri = Math.round,
            Pi = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            Ii = Math.abs,
            Hi = gt.prototype;
        return Hi.isValid = function () {
            return this._isValid
        }, Hi.abs = function () {
            var t = this._data;
            return this._milliseconds = yi(this._milliseconds), this._days = yi(this._days), this._months = yi(this._months), t.milliseconds = yi(t.milliseconds), t.seconds = yi(t.seconds), t.minutes = yi(t.minutes), t.hours = yi(t.hours), t.months = yi(t.months), t.years = yi(t.years), this
        }, Hi.add = function (t, e) {
            return Ht(this, t, e, 1)
        }, Hi.subtract = function (t, e) {
            return Ht(this, t, e, -1)
        }, Hi.as = function (t) {
            if (!this.isValid()) return NaN;
            var e, i, n = this._milliseconds;
            if ("month" === (t = T(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + Ft(e), "month" === t ? i : i / 12;
            switch (e = this._days + Math.round(Ut(this._months)), t) {
                case "week":
                    return e / 7 + n / 6048e5;
                case "day":
                    return e + n / 864e5;
                case "hour":
                    return 24 * e + n / 36e5;
                case "minute":
                    return 1440 * e + n / 6e4;
                case "second":
                    return 86400 * e + n / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + n;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }, Hi.asMilliseconds = Li, Hi.asSeconds = Ni, Hi.asMinutes = Ti, Hi.asHours = qi, Hi.asDays = Wi, Hi.asWeeks = wi, Hi.asMonths = _i, Hi.asYears = Si, Hi.valueOf = function () {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * A(this._months / 12) : NaN
        }, Hi._bubble = function () {
            var t, e, i, n, o, c = this._milliseconds,
                s = this._days,
                r = this._months,
                a = this._data;
            return c >= 0 && s >= 0 && r >= 0 || c <= 0 && s <= 0 && r <= 0 || (c += 864e5 * jt(Ut(r) + s), s = 0, r = 0), a.milliseconds = c % 1e3, t = b(c / 1e3), a.seconds = t % 60, e = b(t / 60), a.minutes = e % 60, i = b(e / 60), a.hours = i % 24, s += b(i / 24), o = b(Ft(s)), r += o, s -= jt(Ut(o)), n = b(r / 12), r %= 12, a.days = s, a.months = r, a.years = n, this
        }, Hi.clone = function () {
            return Wt(this)
        }, Hi.get = function (t) {
            return t = T(t), this.isValid() ? this[t + "s"]() : NaN
        }, Hi.milliseconds = Ci, Hi.seconds = Xi, Hi.minutes = Bi, Hi.hours = Ei, Hi.days = ki, Hi.weeks = function () {
            return b(this.days() / 7)
        }, Hi.months = xi, Hi.years = Di, Hi.humanize = function (t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = this.localeData(),
                i = function (t, e, i) {
                    var n = Wt(t).abs(),
                        o = Ri(n.as("s")),
                        c = Ri(n.as("m")),
                        s = Ri(n.as("h")),
                        r = Ri(n.as("d")),
                        a = Ri(n.as("M")),
                        l = Ri(n.as("y")),
                        p = o <= Pi.ss && ["s", o] || o < Pi.s && ["ss", o] || c <= 1 && ["m"] || c < Pi.m && ["mm", c] || s <= 1 && ["h"] || s < Pi.h && ["hh", s] || r <= 1 && ["d"] || r < Pi.d && ["dd", r] || a <= 1 && ["M"] || a < Pi.M && ["MM", a] || l <= 1 && ["y"] || ["yy", l];
                    return p[2] = e, p[3] = +t > 0, p[4] = i,
                        function (t, e, i, n, o) {
                            return o.relativeTime(e || 1, !!i, t, n)
                        }.apply(null, p)
                }(this, !t, e);
            return t && (i = e.pastFuture(+this, i)), e.postformat(i)
        }, Hi.toISOString = Gt, Hi.toString = Gt, Hi.toJSON = Gt, Hi.locale = Bt, Hi.localeData = Et, Hi.toIsoString = g("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gt), Hi.lang = hi, _("X", 0, 0, "unix"), _("x", 0, 0, "valueOf"), B("x", ge), B("X", /[+-]?\d+(\.\d{1,3})?/), x("X", function (t, e, i) {
            i._d = new Date(1e3 * parseFloat(t, 10))
        }), x("x", function (t, e, i) {
            i._d = new Date(A(t))
        }), t.version = "2.19.1", Kt = zt, t.fn = vi, t.min = function () {
            return mt("isBefore", [].slice.call(arguments, 0))
        }, t.max = function () {
            return mt("isAfter", [].slice.call(arguments, 0))
        }, t.now = function () {
            return Date.now ? Date.now() : +new Date
        }, t.utc = l, t.unix = function (t) {
            return zt(1e3 * t)
        }, t.months = function (t, e) {
            return Pt(t, e, "months")
        }, t.isDate = c, t.locale = st, t.invalid = u, t.duration = Wt, t.isMoment = h, t.weekdays = function (t, e, i) {
            return It(t, e, i, "weekdays")
        }, t.parseZone = function () {
            return zt.apply(null, arguments).parseZone()
        }, t.localeData = at, t.isDuration = vt, t.monthsShort = function (t, e) {
            return Pt(t, e, "monthsShort")
        }, t.weekdaysMin = function (t, e, i) {
            return It(t, e, i, "weekdaysMin")
        }, t.defineLocale = rt, t.updateLocale = function (t, e) {
            if (null != e) {
                var i, n = Ke;
                null != Qe[t] && (n = Qe[t]._config), (i = new L(e = y(n, e))).parentLocale = Qe[t], Qe[t] = i, st(t)
            } else null != Qe[t] && (null != Qe[t].parentLocale ? Qe[t] = Qe[t].parentLocale : null != Qe[t] && delete Qe[t]);
            return Qe[t]
        }, t.locales = function () {
            return ee(Qe)
        }, t.weekdaysShort = function (t, e, i) {
            return It(t, e, i, "weekdaysShort")
        }, t.normalizeUnits = T, t.relativeTimeRounding = function (t) {
            return void 0 === t ? Ri : "function" == typeof t && (Ri = t, !0)
        }, t.relativeTimeThreshold = function (t, e) {
            return void 0 !== Pi[t] && (void 0 === e ? Pi[t] : (Pi[t] = e, "s" === t && (Pi.ss = e - 1), !0))
        }, t.calendarFormat = function (t, e) {
            var i = t.diff(e, "days", !0);
            return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }, t.prototype = vi, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["moment"], e) : "object" == typeof module && module.exports ? module.exports = e(require("moment")) : e(t.moment)
    }(this, function (t) {
        "use strict";

        function e(t) {
            return t > 96 ? t - 87 : t > 64 ? t - 29 : t - 48
        }

        function i(t) {
            var i = 0,
                n = t.split("."),
                o = n[0],
                c = n[1] || "",
                s = 1,
                r = 0,
                a = 1;
            for (45 === t.charCodeAt(0) && (i = 1, a = -1), i; i < o.length; i++) r = 60 * r + e(o.charCodeAt(i));
            for (i = 0; i < c.length; i++) s /= 60, r += e(c.charCodeAt(i)) * s;
            return r * a
        }

        function n(t) {
            for (var e = 0; e < t.length; e++) t[e] = i(t[e])
        }

        function o(t, e) {
            var i, n = [];
            for (i = 0; i < e.length; i++) n[i] = t[e[i]];
            return n
        }

        function c(t) {
            var e = t.split("|"),
                i = e[2].split(" "),
                c = e[3].split(""),
                s = e[4].split(" ");
            return n(i), n(c), n(s),
                function (t, e) {
                    for (var i = 0; i < e; i++) t[i] = Math.round((t[i - 1] || 0) + 6e4 * t[i]);
                    t[e - 1] = 1 / 0
                }(s, c.length), {
                    name: e[0],
                    abbrs: o(e[1].split(" "), c),
                    offsets: o(i, c),
                    untils: s,
                    population: 0 | e[5]
                }
        }

        function s(t) {
            t && this._set(c(t))
        }

        function r(t) {
            var e = t.toTimeString(),
                i = e.match(/\([a-z ]+\)/i);
            "GMT" === (i = i && i[0] ? (i = i[0].match(/[A-Z]/g)) ? i.join("") : void 0 : (i = e.match(/[A-Z]{3,5}/g)) ? i[0] : void 0) && (i = void 0), this.at = +t, this.abbr = i, this.offset = t.getTimezoneOffset()
        }

        function a(t) {
            this.zone = t, this.offsetScore = 0, this.abbrScore = 0
        }

        function l(t, e) {
            for (var i, n; n = 6e4 * ((e.at - t.at) / 12e4 | 0);)(i = new r(new Date(t.at + n))).offset === t.offset ? t = i : e = i;
            return t
        }

        function p(t, e) {
            return t.offsetScore !== e.offsetScore ? t.offsetScore - e.offsetScore : t.abbrScore !== e.abbrScore ? t.abbrScore - e.abbrScore : e.zone.population - t.zone.population
        }

        function d(t, e) {
            var i, o;
            for (n(e), i = 0; i < e.length; i++) o = e[i], q[o] = q[o] || {}, q[o][t] = !0
        }

        function u() {
            try {
                var t = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (t && t.length > 3) {
                    var e = T[M(t)];
                    if (e) return e;
                    g("Moment Timezone found " + t + " from the Intl api, but did not have that data loaded.")
                }
            } catch (t) {}
            var i, n, o, c = function () {
                    var t, e, i, n = (new Date).getFullYear() - 2,
                        o = new r(new Date(n, 0, 1)),
                        c = [o];
                    for (i = 1; i < 48; i++)(e = new r(new Date(n, i, 1))).offset !== o.offset && (t = l(o, e), c.push(t), c.push(new r(new Date(t.at + 6e4)))), o = e;
                    for (i = 0; i < 4; i++) c.push(new r(new Date(n + i, 0, 1))), c.push(new r(new Date(n + i, 6, 1)));
                    return c
                }(),
                s = c.length,
                d = function (t) {
                    var e, i, n, o = t.length,
                        c = {},
                        s = [];
                    for (e = 0; e < o; e++) {
                        n = q[t[e].offset] || {};
                        for (i in n) n.hasOwnProperty(i) && (c[i] = !0)
                    }
                    for (e in c) c.hasOwnProperty(e) && s.push(T[e]);
                    return s
                }(c),
                u = [];
            for (n = 0; n < d.length; n++) {
                for (i = new a(h(d[n]), s), o = 0; o < s; o++) i.scoreOffsetAt(c[o]);
                u.push(i)
            }
            return u.sort(p), u.length > 0 ? u[0].zone.name : void 0
        }

        function M(t) {
            return (t || "").toLowerCase().replace(/\//g, "_")
        }

        function f(t) {
            var e, i, n, o;
            for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) o = M(i = (n = t[e].split("|"))[0]), L[o] = t[e], T[o] = i, d(o, n[2].split(" "))
        }

        function h(t, e) {
            t = M(t);
            var i, n = L[t];
            return n instanceof s ? n : "string" == typeof n ? (n = new s(n), L[t] = n, n) : N[t] && e !== h && (i = h(N[t], h)) ? ((n = L[t] = new s)._set(i), n.name = T[t], n) : null
        }

        function b(t) {
            var e, i, n, o;
            for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) n = M((i = t[e].split("|"))[0]), o = M(i[1]), N[n] = o, T[n] = i[0], N[o] = n, T[o] = i[1]
        }

        function A(t) {
            f(t.zones), b(t.links), v.dataVersion = t.version
        }

        function z(t) {
            return z.didShowError || (z.didShowError = !0, g("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!h(t)
        }

        function m(t) {
            var e = "X" === t._f || "x" === t._f;
            return !(!t._a || void 0 !== t._tzm || e)
        }

        function g(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t)
        }

        function v(e) {
            var i = Array.prototype.slice.call(arguments, 0, -1),
                n = arguments[arguments.length - 1],
                o = h(n),
                c = t.utc.apply(null, i);
            return o && !t.isMoment(e) && m(c) && c.add(o.parse(c), "minutes"), c.tz(n), c
        }

        function O(t) {
            return function () {
                return this._z ? this._z.abbr(this) : t.call(this)
            }
        }
        var y, L = {},
            N = {},
            T = {},
            q = {},
            W = t.version.split("."),
            w = +W[0],
            _ = +W[1];
        (w < 2 || 2 === w && _ < 6) && g("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + t.version + ". See momentjs.com"), s.prototype = {
            _set: function (t) {
                this.name = t.name, this.abbrs = t.abbrs, this.untils = t.untils, this.offsets = t.offsets, this.population = t.population
            },
            _index: function (t) {
                var e, i = +t,
                    n = this.untils;
                for (e = 0; e < n.length; e++)
                    if (i < n[e]) return e
            },
            parse: function (t) {
                var e, i, n, o, c = +t,
                    s = this.offsets,
                    r = this.untils,
                    a = r.length - 1;
                for (o = 0; o < a; o++)
                    if (e = s[o], i = s[o + 1], n = s[o ? o - 1 : o], e < i && v.moveAmbiguousForward ? e = i : e > n && v.moveInvalidForward && (e = n), c < r[o] - 6e4 * e) return s[o];
                return s[a]
            },
            abbr: function (t) {
                return this.abbrs[this._index(t)]
            },
            offset: function (t) {
                return g("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(t)]
            },
            utcOffset: function (t) {
                return this.offsets[this._index(t)]
            }
        }, a.prototype.scoreOffsetAt = function (t) {
            this.offsetScore += Math.abs(this.zone.utcOffset(t.at) - t.offset), this.zone.abbr(t.at).replace(/[^A-Z]/g, "") !== t.abbr && this.abbrScore++
        }, v.version = "0.5.14", v.dataVersion = "", v._zones = L, v._links = N, v._names = T, v.add = f, v.link = b, v.load = A, v.zone = h, v.zoneExists = z, v.guess = function (t) {
            return y && !t || (y = u()), y
        }, v.names = function () {
            var t, e = [];
            for (t in T) T.hasOwnProperty(t) && (L[t] || L[N[t]]) && T[t] && e.push(T[t]);
            return e.sort()
        }, v.Zone = s, v.unpack = c, v.unpackBase60 = i, v.needsOffset = m, v.moveInvalidForward = !0, v.moveAmbiguousForward = !1;
        var S = t.fn;
        t.tz = v, t.defaultZone = null, t.updateOffset = function (e, i) {
            var n, o = t.defaultZone;
            void 0 === e._z && (o && m(e) && !e._isUTC && (e._d = t.utc(e._a)._d, e.utc().add(o.parse(e), "minutes")), e._z = o), e._z && (n = e._z.utcOffset(e), Math.abs(n) < 16 && (n /= 60), void 0 !== e.utcOffset ? e.utcOffset(-n, i) : e.zone(n, i))
        }, S.tz = function (e, i) {
            return e ? (this._z = h(e), this._z ? t.updateOffset(this, i) : g("Moment Timezone has no data for " + e + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0
        }, S.zoneName = O(S.zoneName), S.zoneAbbr = O(S.zoneAbbr), S.utc = function (t) {
            return function () {
                return this._z = null, t.apply(this, arguments)
            }
        }(S.utc), t.tz.setDefault = function (e) {
            return (w < 2 || 2 === w && _ < 9) && g("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + t.version + "."), t.defaultZone = e ? h(e) : null, t
        };
        var C = t.momentProperties;
        return "[object Array]" === Object.prototype.toString.call(C) ? (C.push("_z"), C.push("_a")) : C && (C._z = null), A({
            version: "2017c",
            zones: ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5", "Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6", "Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5", "Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|+0130 SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|01213454545454545454545454545454545454545454545454543|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0", "America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0", "America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0", "America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0", "America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0", "America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0", "America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0", "America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0", "America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0", "America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0", "America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0", "America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0", "America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4", "America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5", "America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/La_Paz|CMT BOST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|MMT -0330 -03 -02 -0230|3I.I 3u 30 20 2u|012121212121212121212121213232323232324242423243232323232323232323232323232323232323232|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5", "America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6", "America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212|-2q00 1DjS0 T90 40P0 KL0 blz0|10", "Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "Antarctica/Rothera|-00 -03|0 30|01|gOo0|130", "Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20", "Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4", "Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0", "Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4", "Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6", "Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4", "Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4", "Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5", "Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4", "Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4", "Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4", "Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4", "Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4", "Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5", "Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|01231|-2um8n 97XR 1lTzu 2Onc0|29e5", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4", "Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5", "Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4", "Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5", "Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJH0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|-02|20|0||30", "Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4", "Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "EST|EST|50|0|", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Etc/GMT+0|GMT|0|0|", "Etc/GMT+1|-01|10|0|", "Etc/GMT+10|-10|a0|0|", "Etc/GMT+11|-11|b0|0|", "Etc/GMT+12|-12|c0|0|", "Etc/GMT+3|-03|30|0|", "Etc/GMT+4|-04|40|0|", "Etc/GMT+5|-05|50|0|", "Etc/GMT+6|-06|60|0|", "Etc/GMT+7|-07|70|0|", "Etc/GMT+8|-08|80|0|", "Etc/GMT+9|-09|90|0|", "Etc/GMT-1|+01|-10|0|", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Pacific/Pohnpei|+11|-b0|0||34e3", "Pacific/Tarawa|+12|-c0|0||29e3", "Etc/GMT-13|+13|-d0|0|", "Etc/GMT-14|+14|-e0|0|", "Etc/GMT-2|+02|-20|0|", "Etc/GMT-3|+03|-30|0|", "Etc/GMT-4|+04|-40|0|", "Etc/GMT-5|+05|-50|0|", "Etc/GMT-6|+06|-60|0|", "Indian/Christmas|+07|-70|0||21e2", "Etc/GMT-8|+08|-80|0|", "Pacific/Palau|+09|-90|0||21e3", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5", "Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0|", "Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Cocos|+0630|-6u|0||596", "Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130", "Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3", "Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "MST|MST|70|0|", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B8n0|1", "Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4", "Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3", "Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4", "Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4", "Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B8nk|51e2", "Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2", "Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3", "Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2", "Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3", "Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4", "Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56", "Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],
            links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Sao_Tome", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Singapore", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Atlantic/South_Georgia|Etc/GMT+2", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT+0|Etc/GMT", "Etc/GMT+0|Etc/GMT-0", "Etc/GMT+0|Etc/GMT0", "Etc/GMT+0|Etc/Greenwich", "Etc/GMT+0|GMT", "Etc/GMT+0|GMT+0", "Etc/GMT+0|GMT-0", "Etc/GMT+0|GMT0", "Etc/GMT+0|Greenwich", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Indian/Christmas|Etc/GMT-7", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Palau|Etc/GMT-9", "Pacific/Pohnpei|Etc/GMT-11", "Pacific/Pohnpei|Pacific/Ponape", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Port_Moresby|Pacific/Chuuk", "Pacific/Port_Moresby|Pacific/Truk", "Pacific/Port_Moresby|Pacific/Yap", "Pacific/Tarawa|Etc/GMT-12", "Pacific/Tarawa|Pacific/Funafuti", "Pacific/Tarawa|Pacific/Wake", "Pacific/Tarawa|Pacific/Wallis"]
        }), t
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";
        var e = window.Slick || {};
        (e = function () {
            var e = 0;
            return function (i, n) {
                var o;
                this.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(i),
                    appendDots: t(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, i) {
                        return t('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, this.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(this, this.initials), this.activeBreakpoint = null, this.animType = null, this.animProp = null, this.breakpoints = [], this.breakpointSettings = [], this.cssTransitions = !1, this.focussed = !1, this.interrupted = !1, this.hidden = "hidden", this.paused = !0, this.positionProp = null, this.respondTo = null, this.rowCount = 1, this.shouldClick = !0, this.$slider = t(i), this.$slidesCache = null, this.transformType = null, this.transitionType = null, this.visibilityChange = "visibilitychange", this.windowWidth = 0, this.windowTimer = null, o = t(i).data("slick") || {}, this.options = t.extend({}, this.defaults, n, o), this.currentSlide = this.options.initialSlide, this.originalSettings = this.options, void 0 !== document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.autoPlay = t.proxy(this.autoPlay, this), this.autoPlayClear = t.proxy(this.autoPlayClear, this), this.autoPlayIterator = t.proxy(this.autoPlayIterator, this), this.changeSlide = t.proxy(this.changeSlide, this), this.clickHandler = t.proxy(this.clickHandler, this), this.selectHandler = t.proxy(this.selectHandler, this), this.setPosition = t.proxy(this.setPosition, this), this.swipeHandler = t.proxy(this.swipeHandler, this), this.dragHandler = t.proxy(this.dragHandler, this), this.keyHandler = t.proxy(this.keyHandler, this), this.instanceUid = e++, this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, this.registerBreakpoints(), this.init(!0)
            }
        }()).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= this.slideCount) return !1;
            this.unload(), "number" == typeof i ? 0 === i && 0 === this.$slides.length ? t(e).appendTo(this.$slideTrack) : n ? t(e).insertBefore(this.$slides.eq(i)) : t(e).insertAfter(this.$slides.eq(i)) : !0 === n ? t(e).prependTo(this.$slideTrack) : t(e).appendTo(this.$slideTrack), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.append(this.$slides), this.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e)
            }), this.$slidesCache = this.$slides, this.reinit()
        }, e.prototype.animateHeight = function () {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.animate({
                    height: t
                }, this.options.speed)
            }
        }, e.prototype.animateSlide = function (e, i) {
            var n = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (t) {
                    t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function () {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function () {
            var e = this.options.asNavFor;
            return e && null !== e && (e = t(e).not(this.$slider)), e
        }, e.prototype.asNavFor = function (e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function (t) {
            var e = {};
            !1 === this.options.fade ? e[this.transitionType] = this.transformType + " " + this.options.speed + "ms " + this.options.cssEase : e[this.transitionType] = "opacity " + this.options.speed + "ms " + this.options.cssEase, !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, e.prototype.autoPlay = function () {
            this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function () {
            var t = this.currentSlide + this.options.slidesToScroll;
            this.paused || this.interrupted || this.focussed || (!1 === this.options.infinite && (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1 ? this.direction = 0 : 0 === this.direction && (t = this.currentSlide - this.options.slidesToScroll, this.currentSlide - 1 == 0 && (this.direction = 1))), this.slideHandler(t))
        }, e.prototype.buildArrows = function () {
            !0 === this.options.arrows && (this.$prevArrow = t(this.options.prevArrow).addClass("slick-arrow"), this.$nextArrow = t(this.options.nextArrow).addClass("slick-arrow"), this.slideCount > this.options.slidesToShow ? (this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.prependTo(this.options.appendArrows), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.appendTo(this.options.appendArrows), !0 !== this.options.infinite && this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function () {
            var e, i;
            if (!0 === this.options.dots) {
                for (this.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(this.options.dotsClass), e = 0; e <= this.getDotCount(); e += 1) i.append(t("<li />").append(this.options.customPaging.call(this, this, e)));
                this.$dots = i.appendTo(this.options.appendDots), this.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function () {
            this.$slides = this.$slider.children(this.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), this.slideCount = this.$slides.length, this.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), this.$slider.addClass("slick-slider"), this.$slideTrack = 0 === this.slideCount ? t('<div class="slick-track"/>').appendTo(this.$slider) : this.$slides.wrapAll('<div class="slick-track"/>').parent(), this.$list = this.$slideTrack.wrap('<div class="slick-list"/>').parent(), this.$slideTrack.css("opacity", 0), !0 !== this.options.centerMode && !0 !== this.options.swipeToSlide || (this.options.slidesToScroll = 1), t("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading"), this.setupInfinite(), this.buildArrows(), this.buildDots(), this.updateDots(), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), !0 === this.options.draggable && this.$list.addClass("draggable")
        }, e.prototype.buildRows = function () {
            var t, e, i, n, o, c, s;
            if (n = document.createDocumentFragment(), c = this.$slider.children(), this.options.rows > 1) {
                for (s = this.options.slidesPerRow * this.options.rows, o = Math.ceil(c.length / s), t = 0; t < o; t++) {
                    var r = document.createElement("div");
                    for (e = 0; e < this.options.rows; e++) {
                        var a = document.createElement("div");
                        for (i = 0; i < this.options.slidesPerRow; i++) {
                            var l = t * s + (e * this.options.slidesPerRow + i);
                            c.get(l) && a.appendChild(c.get(l))
                        }
                        r.appendChild(a)
                    }
                    n.appendChild(r)
                }
                this.$slider.empty().append(n), this.$slider.children().children().children().css({
                    width: 100 / this.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function (e, i) {
            var n, o, c, s = !1,
                r = this.$slider.width(),
                a = window.innerWidth || t(window).width();
            if ("window" === this.respondTo ? c = a : "slider" === this.respondTo ? c = r : "min" === this.respondTo && (c = Math.min(a, r)), this.options.responsive && this.options.responsive.length && null !== this.options.responsive) {
                o = null;
                for (n in this.breakpoints) this.breakpoints.hasOwnProperty(n) && (!1 === this.originalSettings.mobileFirst ? c < this.breakpoints[n] && (o = this.breakpoints[n]) : c > this.breakpoints[n] && (o = this.breakpoints[n]));
                null !== o ? null !== this.activeBreakpoint ? (o !== this.activeBreakpoint || i) && (this.activeBreakpoint = o, "unslick" === this.breakpointSettings[o] ? this.unslick(o) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[o]), !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e)), s = o) : (this.activeBreakpoint = o, "unslick" === this.breakpointSettings[o] ? this.unslick(o) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[o]), !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e)), s = o) : null !== this.activeBreakpoint && (this.activeBreakpoint = null, this.options = this.originalSettings, !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e), s = o), e || !1 === s || this.$slider.trigger("breakpoint", [this, s])
            }
        }, e.prototype.changeSlide = function (e, i) {
            var n, o, c, s = t(e.currentTarget);
            switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), c = this.slideCount % this.options.slidesToScroll != 0, n = c ? 0 : (this.slideCount - this.currentSlide) % this.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? this.options.slidesToScroll : this.options.slidesToShow - n, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? this.options.slidesToScroll : n, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + o, !1, i);
                    break;
                case "index":
                    var r = 0 === e.data.index ? 0 : e.data.index || s.index() * this.options.slidesToScroll;
                    this.slideHandler(this.checkNavigable(r), !1, i), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function (t) {
            var e, i;
            if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        }, e.prototype.cleanUpEvents = function () {
            this.options.dots && null !== this.$dots && (t("li", this.$dots).off("click.slick", this.changeSlide).off("mouseenter.slick", t.proxy(this.interrupt, this, !0)).off("mouseleave.slick", t.proxy(this.interrupt, this, !1)), !0 === this.options.accessibility && this.$dots.off("keydown.slick", this.keyHandler)), this.$slider.off("focus.slick blur.slick"), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide), this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide), !0 === this.options.accessibility && (this.$prevArrow && this.$prevArrow.off("keydown.slick", this.keyHandler), this.$nextArrow && this.$nextArrow.off("keydown.slick", this.keyHandler))), this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler), this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler), this.$list.off("touchend.slick mouseup.slick", this.swipeHandler), this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler), this.$list.off("click.slick", this.clickHandler), t(document).off(this.visibilityChange, this.visibility), this.cleanUpSlideEvents(), !0 === this.options.accessibility && this.$list.off("keydown.slick", this.keyHandler), !0 === this.options.focusOnSelect && t(this.$slideTrack).children().off("click.slick", this.selectHandler), t(window).off("orientationchange.slick.slick-" + this.instanceUid, this.orientationChange), t(window).off("resize.slick.slick-" + this.instanceUid, this.resize), t("[draggable!=true]", this.$slideTrack).off("dragstart", this.preventDefault), t(window).off("load.slick.slick-" + this.instanceUid, this.setPosition)
        }, e.prototype.cleanUpSlideEvents = function () {
            this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1))
        }, e.prototype.cleanUpRows = function () {
            var t;
            this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
        }, e.prototype.clickHandler = function (t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function (e) {
            this.autoPlayClear(), this.touchObject = {}, this.cleanUpEvents(), t(".slick-cloned", this.$slider).detach(), this.$dots && this.$dots.remove(), this.$prevArrow && this.$prevArrow.length && (this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove()), this.$nextArrow && this.$nextArrow.length && (this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove()), this.$slides && (this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                t(this).attr("style", t(this).data("originalStyling"))
            }), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.detach(), this.$list.detach(), this.$slider.append(this.$slides)), this.cleanUpRows(), this.$slider.removeClass("slick-slider"), this.$slider.removeClass("slick-initialized"), this.$slider.removeClass("slick-dotted"), this.unslicked = !0, e || this.$slider.trigger("destroy", [this])
        }, e.prototype.disableTransition = function (t) {
            var e = {};
            e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, e.prototype.fadeSlide = function (t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function () {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function (t) {
            !1 === this.cssTransitions ? this.$slides.eq(t).animate({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit())
        }, e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, e.prototype.getDotCount = function () {
            var t = 0,
                e = 0,
                i = 0;
            if (!0 === this.options.infinite)
                if (this.slideCount <= this.options.slidesToShow) ++i;
                else
                    for (; t < this.slideCount;) ++i, t = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
            else if (!0 === this.options.centerMode) i = this.slideCount;
            else if (this.options.asNavFor)
                for (; t < this.slideCount;) ++i, t = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
            else i = 1 + Math.ceil((this.slideCount - this.options.slidesToShow) / this.options.slidesToScroll);
            return i - 1
        }, e.prototype.getLeft = function (t) {
            var e, i, n, o, c = 0;
            return this.slideOffset = 0, i = this.$slides.first().outerHeight(!0), !0 === this.options.infinite ? (this.slideCount > this.options.slidesToShow && (this.slideOffset = this.slideWidth * this.options.slidesToShow * -1, o = -1, !0 === this.options.vertical && !0 === this.options.centerMode && (2 === this.options.slidesToShow ? o = -1.5 : 1 === this.options.slidesToShow && (o = -2)), c = i * this.options.slidesToShow * o), this.slideCount % this.options.slidesToScroll != 0 && t + this.options.slidesToScroll > this.slideCount && this.slideCount > this.options.slidesToShow && (t > this.slideCount ? (this.slideOffset = (this.options.slidesToShow - (t - this.slideCount)) * this.slideWidth * -1, c = (this.options.slidesToShow - (t - this.slideCount)) * i * -1) : (this.slideOffset = this.slideCount % this.options.slidesToScroll * this.slideWidth * -1, c = this.slideCount % this.options.slidesToScroll * i * -1))) : t + this.options.slidesToShow > this.slideCount && (this.slideOffset = (t + this.options.slidesToShow - this.slideCount) * this.slideWidth, c = (t + this.options.slidesToShow - this.slideCount) * i), this.slideCount <= this.options.slidesToShow && (this.slideOffset = 0, c = 0), !0 === this.options.centerMode && this.slideCount <= this.options.slidesToShow ? this.slideOffset = this.slideWidth * Math.floor(this.options.slidesToShow) / 2 - this.slideWidth * this.slideCount / 2 : !0 === this.options.centerMode && !0 === this.options.infinite ? this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2) - this.slideWidth : !0 === this.options.centerMode && (this.slideOffset = 0, this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2)), e = !1 === this.options.vertical ? t * this.slideWidth * -1 + this.slideOffset : t * i * -1 + c, !0 === this.options.variableWidth && (n = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow), e = !0 === this.options.rtl ? n[0] ? -1 * (this.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === this.options.centerMode && (n = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow + 1), e = !0 === this.options.rtl ? n[0] ? -1 * (this.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (this.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function () {
            var t, e = 0,
                i = 0,
                n = [];
            for (!1 === this.options.infinite ? t = this.slideCount : (e = -1 * this.options.slidesToScroll, i = -1 * this.options.slidesToScroll, t = 2 * this.slideCount); e < t;) n.push(e), e = i + this.options.slidesToScroll, i += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
            return n
        }, e.prototype.getSlick = function () {
            return this
        }, e.prototype.getSlideCount = function () {
            var e, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (o, c) {
                if (c.offsetLeft - i + t(c).outerWidth() / 2 > -1 * n.swipeLeft) return e = c, !1
            }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function (e) {
            t(this.$slider).hasClass("slick-initialized") || (t(this.$slider).addClass("slick-initialized"), this.buildRows(), this.buildOut(), this.setProps(), this.startLoad(), this.loadSlider(), this.initializeEvents(), this.updateArrows(), this.updateDots(), this.checkResponsive(!0), this.focusHandler()), e && this.$slider.trigger("init", [this]), !0 === this.options.accessibility && this.initADA(), this.options.autoplay && (this.paused = !1, this.autoPlay())
        }, e.prototype.initADA = function () {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                n = e.getNavigableIndexes().filter(function (t) {
                    return t >= 0 && t < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                var o = n.indexOf(i);
                t(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + i,
                    tabindex: -1
                }), -1 !== o && t(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + o
                })
            }), e.$dots.attr("role", "tablist").find("li").each(function (o) {
                var c = n[o];
                t(this).attr({
                    role: "presentation"
                }), t(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + o,
                    "aria-controls": "slick-slide" + e.instanceUid + c,
                    "aria-label": o + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = e.currentSlide, c = o + e.options.slidesToShow; o < c; o++) e.$slides.eq(o).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function () {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, this.changeSlide), !0 === this.options.accessibility && (this.$prevArrow.on("keydown.slick", this.keyHandler), this.$nextArrow.on("keydown.slick", this.keyHandler)))
        }, e.prototype.initDotEvents = function () {
            !0 === this.options.dots && (t("li", this.$dots).on("click.slick", {
                message: "index"
            }, this.changeSlide), !0 === this.options.accessibility && this.$dots.on("keydown.slick", this.keyHandler)), !0 === this.options.dots && !0 === this.options.pauseOnDotsHover && t("li", this.$dots).on("mouseenter.slick", t.proxy(this.interrupt, this, !0)).on("mouseleave.slick", t.proxy(this.interrupt, this, !1))
        }, e.prototype.initSlideEvents = function () {
            this.options.pauseOnHover && (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)))
        }, e.prototype.initializeEvents = function () {
            this.initArrowEvents(), this.initDotEvents(), this.initSlideEvents(), this.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, this.swipeHandler), this.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, this.swipeHandler), this.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, this.swipeHandler), this.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, this.swipeHandler), this.$list.on("click.slick", this.clickHandler), t(document).on(this.visibilityChange, t.proxy(this.visibility, this)), !0 === this.options.accessibility && this.$list.on("keydown.slick", this.keyHandler), !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler), t(window).on("orientationchange.slick.slick-" + this.instanceUid, t.proxy(this.orientationChange, this)), t(window).on("resize.slick.slick-" + this.instanceUid, t.proxy(this.resize, this)), t("[draggable!=true]", this.$slideTrack).on("dragstart", this.preventDefault), t(window).on("load.slick.slick-" + this.instanceUid, this.setPosition), t(this.setPosition)
        }, e.prototype.initUI = function () {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
        }, e.prototype.keyHandler = function (t) {
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = t(this).attr("data-srcset"),
                        o = t(this).attr("data-sizes") || c.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    s.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function () {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), c.$slider.trigger("lazyLoaded", [c, e, i])
                        })
                    }, s.onerror = function () {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, i])
                    }, s.src = i
                })
            }
            var i, n, o, c = this;
            if (!0 === c.options.centerMode ? !0 === c.options.infinite ? o = (n = c.currentSlide + (c.options.slidesToShow / 2 + 1)) + c.options.slidesToShow + 2 : (n = Math.max(0, c.currentSlide - (c.options.slidesToShow / 2 + 1)), o = c.options.slidesToShow / 2 + 1 + 2 + c.currentSlide) : (n = c.options.infinite ? c.options.slidesToShow + c.currentSlide : c.currentSlide, o = Math.ceil(n + c.options.slidesToShow), !0 === c.options.fade && (n > 0 && n--, o <= c.slideCount && o++)), i = c.$slider.find(".slick-slide").slice(n, o), "anticipated" === c.options.lazyLoad)
                for (var s = n - 1, r = o, a = c.$slider.find(".slick-slide"), l = 0; l < c.options.slidesToScroll; l++) s < 0 && (s = c.slideCount - 1), i = (i = i.add(a.eq(s))).add(a.eq(r)), s--, r++;
            e(i), c.slideCount <= c.options.slidesToShow ? e(c.$slider.find(".slick-slide")) : c.currentSlide >= c.slideCount - c.options.slidesToShow ? e(c.$slider.find(".slick-cloned").slice(0, c.options.slidesToShow)) : 0 === c.currentSlide && e(c.$slider.find(".slick-cloned").slice(-1 * c.options.slidesToShow))
        }, e.prototype.loadSlider = function () {
            this.setPosition(), this.$slideTrack.css({
                opacity: 1
            }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function () {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function () {
            this.autoPlayClear(), this.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function () {
            this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
        }, e.prototype.postSlide = function (e) {
            this.unslicked || (this.$slider.trigger("afterChange", [this, e]), this.animating = !1, this.slideCount > this.options.slidesToShow && this.setPosition(), this.swipeLeft = null, this.options.autoplay && this.autoPlay(), !0 === this.options.accessibility && (this.initADA(), this.options.focusOnChange && t(this.$slides.get(this.currentSlide)).attr("tabindex", 0).focus()))
        }, e.prototype.prev = e.prototype.slickPrev = function () {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var i, n, o, c, s, r = this,
                a = t("img[data-lazy]", r.$slider);
            a.length ? (i = a.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), c = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
                o && (i.attr("srcset", o), c && i.attr("sizes", c)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
            }, s.onerror = function () {
                e < 3 ? setTimeout(function () {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
            }, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
        }, e.prototype.refresh = function (e) {
            var i, n;
            n = this.slideCount - this.options.slidesToShow, !this.options.infinite && this.currentSlide > n && (this.currentSlide = n), this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), i = this.currentSlide, this.destroy(!0), t.extend(this, this.initials, {
                currentSlide: i
            }), this.init(), e || this.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function () {
            var e, i, n, o = this,
                c = o.options.responsive || null;
            if ("array" === t.type(c) && c.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in c)
                    if (n = o.breakpoints.length - 1, c.hasOwnProperty(e)) {
                        for (i = c[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = c[e].settings
                    }
                o.breakpoints.sort(function (t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function () {
            this.$slides = this.$slideTrack.children(this.options.slide).addClass("slick-slide"), this.slideCount = this.$slides.length, this.currentSlide >= this.slideCount && 0 !== this.currentSlide && (this.currentSlide = this.currentSlide - this.options.slidesToScroll), this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), this.registerBreakpoints(), this.setProps(), this.setupInfinite(), this.buildArrows(), this.updateArrows(), this.initArrowEvents(), this.buildDots(), this.updateDots(), this.initDotEvents(), this.cleanUpSlideEvents(), this.initSlideEvents(), this.checkResponsive(!1, !0), !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), this.setPosition(), this.focusHandler(), this.paused = !this.options.autoplay, this.autoPlay(), this.$slider.trigger("reInit", [this])
        }, e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : this.slideCount - 1 : !0 === e ? --t : t, this.slideCount < 1 || t < 0 || t > this.slideCount - 1) return !1;
            this.unload(), !0 === i ? this.$slideTrack.children().remove() : this.$slideTrack.children(this.options.slide).eq(t).remove(), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.append(this.$slides), this.$slidesCache = this.$slides, this.reinit()
        }, e.prototype.setCSS = function (t) {
            var e, i, n = {};
            !0 === this.options.rtl && (t = -t), e = "left" == this.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == this.positionProp ? Math.ceil(t) + "px" : "0px", n[this.positionProp] = t, !1 === this.transformsEnabled ? this.$slideTrack.css(n) : (n = {}, !1 === this.cssTransitions ? (n[this.animType] = "translate(" + e + ", " + i + ")", this.$slideTrack.css(n)) : (n[this.animType] = "translate3d(" + e + ", " + i + ", 0px)", this.$slideTrack.css(n)))
        }, e.prototype.setDimensions = function () {
            !1 === this.options.vertical ? !0 === this.options.centerMode && this.$list.css({
                padding: "0px " + this.options.centerPadding
            }) : (this.$list.height(this.$slides.first().outerHeight(!0) * this.options.slidesToShow), !0 === this.options.centerMode && this.$list.css({
                padding: this.options.centerPadding + " 0px"
            })), this.listWidth = this.$list.width(), this.listHeight = this.$list.height(), !1 === this.options.vertical && !1 === this.options.variableWidth ? (this.slideWidth = Math.ceil(this.listWidth / this.options.slidesToShow), this.$slideTrack.width(Math.ceil(this.slideWidth * this.$slideTrack.children(".slick-slide").length))) : !0 === this.options.variableWidth ? this.$slideTrack.width(5e3 * this.slideCount) : (this.slideWidth = Math.ceil(this.listWidth), this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0) * this.$slideTrack.children(".slick-slide").length)));
            var t = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
            !1 === this.options.variableWidth && this.$slideTrack.children(".slick-slide").width(this.slideWidth - t)
        }, e.prototype.setFade = function () {
            var e, i = this;
            i.$slides.each(function (n, o) {
                e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function () {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.css("height", t)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, i, n, o, c, s = this,
                r = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], r = arguments[1], c = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? c = "responsive" : void 0 !== arguments[1] && (c = "single")), "single" === c) s.options[n] = o;
            else if ("multiple" === c) t.each(n, function (t, e) {
                s.options[t] = e
            });
            else if ("responsive" === c)
                for (i in o)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(o[i])
                    }
            r && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function () {
            this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
        }, e.prototype.setProps = function () {
            var t = document.body.style;
            this.positionProp = !0 === this.options.vertical ? "top" : "left", "top" === this.positionProp ? this.$slider.addClass("slick-vertical") : this.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === this.options.useCSS && (this.cssTransitions = !0), this.options.fade && ("number" == typeof this.options.zIndex ? this.options.zIndex < 3 && (this.options.zIndex = 3) : this.options.zIndex = this.defaults.zIndex), void 0 !== t.OTransform && (this.animType = "OTransform", this.transformType = "-o-transform", this.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)), void 0 !== t.MozTransform && (this.animType = "MozTransform", this.transformType = "-moz-transform", this.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (this.animType = !1)), void 0 !== t.webkitTransform && (this.animType = "webkitTransform", this.transformType = "-webkit-transform", this.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)), void 0 !== t.msTransform && (this.animType = "msTransform", this.transformType = "-ms-transform", this.transitionType = "msTransition", void 0 === t.msTransform && (this.animType = !1)), void 0 !== t.transform && !1 !== this.animType && (this.animType = "transform", this.transformType = "transform", this.transitionType = "transition"), this.transformsEnabled = this.options.useTransform && null !== this.animType && !1 !== this.animType
        }, e.prototype.setSlideClasses = function (t) {
            var e, i, n, o;
            if (i = this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), this.$slides.eq(t).addClass("slick-current"), !0 === this.options.centerMode) {
                var c = this.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(this.options.slidesToShow / 2), !0 === this.options.infinite && (t >= e && t <= this.slideCount - 1 - e ? this.$slides.slice(t - e + c, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = this.options.slidesToShow + t, i.slice(n - e + 1 + c, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - this.options.slidesToShow).addClass("slick-center") : t === this.slideCount - 1 && i.eq(this.options.slidesToShow).addClass("slick-center")), this.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= this.slideCount - this.options.slidesToShow ? this.$slides.slice(t, t + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= this.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = this.slideCount % this.options.slidesToShow, n = !0 === this.options.infinite ? this.options.slidesToShow + t : t, this.options.slidesToShow == this.options.slidesToScroll && this.slideCount - t < this.options.slidesToShow ? i.slice(n - (this.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== this.options.lazyLoad && "anticipated" !== this.options.lazyLoad || this.lazyLoad()
        }, e.prototype.setupInfinite = function () {
            var e, i, n;
            if (!0 === this.options.fade && (this.options.centerMode = !1), !0 === this.options.infinite && !1 === this.options.fade && (i = null, this.slideCount > this.options.slidesToShow)) {
                for (n = !0 === this.options.centerMode ? this.options.slidesToShow + 1 : this.options.slidesToShow, e = this.slideCount; e > this.slideCount - n; e -= 1) i = e - 1, t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n + this.slideCount; e += 1) i = e, t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");
                this.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function (t) {
            t || this.autoPlay(), this.interrupted = t
        }, e.prototype.selectHandler = function (e) {
            var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                n = parseInt(i.attr("data-slick-index"));
            n || (n = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
        }, e.prototype.slideHandler = function (t, e, i) {
            var n, o, c, s, r, a = null,
                l = this;
            if (e = e || !1, !(!0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === t))
                if (!1 === e && l.asNavFor(t), n = t, a = l.getLeft(n), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (t < 0 || t > l.getDotCount() * l.options.slidesToScroll)) !1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(s, function () {
                    l.postSlide(n)
                }) : l.postSlide(n));
                else if (!1 === l.options.infinite && !0 === l.options.centerMode && (t < 0 || t > l.slideCount - l.options.slidesToScroll)) !1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(s, function () {
                l.postSlide(n)
            }) : l.postSlide(n));
            else {
                if (l.options.autoplay && clearInterval(l.autoPlayTimer), o = n < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), c = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.options.asNavFor && (r = (r = l.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade) return !0 !== i ? (l.fadeSlideOut(c), l.fadeSlide(o, function () {
                    l.postSlide(o)
                })) : l.postSlide(o), void l.animateHeight();
                !0 !== i ? l.animateSlide(a, function () {
                    l.postSlide(o)
                }) : l.postSlide(o)
            }
        }, e.prototype.startLoad = function () {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.hide(), this.$nextArrow.hide()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.hide(), this.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function () {
            var t, e, i, n;
            return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === this.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === this.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function (t) {
            var e, i;
            if (this.dragging = !1, this.swiping = !1, this.scrolling) return this.scrolling = !1, !1;
            if (this.interrupted = !1, this.shouldClick = !(this.touchObject.swipeLength > 10), void 0 === this.touchObject.curX) return !1;
            if (!0 === this.touchObject.edgeHit && this.$slider.trigger("edge", [this, this.swipeDirection()]), this.touchObject.swipeLength >= this.touchObject.minSwipe) {
                switch (i = this.swipeDirection()) {
                    case "left":
                    case "down":
                        e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide + this.getSlideCount()) : this.currentSlide + this.getSlideCount(), this.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide - this.getSlideCount()) : this.currentSlide - this.getSlideCount(), this.currentDirection = 1
                }
                "vertical" != i && (this.slideHandler(e), this.touchObject = {}, this.$slider.trigger("swipe", [this, i]))
            } else this.touchObject.startX !== this.touchObject.curX && (this.slideHandler(this.currentSlide), this.touchObject = {})
        }, e.prototype.swipeHandler = function (t) {
            if (!(!1 === this.options.swipe || "ontouchend" in document && !1 === this.options.swipe || !1 === this.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (this.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, this.touchObject.minSwipe = this.listWidth / this.options.touchThreshold, !0 === this.options.verticalSwiping && (this.touchObject.minSwipe = this.listHeight / this.options.touchThreshold), t.data.action) {
                case "start":
                    this.swipeStart(t);
                    break;
                case "move":
                    this.swipeMove(t);
                    break;
                case "end":
                    this.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function (t) {
            var e, i, n, o, c, s;
            return c = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!this.dragging || this.scrolling || c && 1 !== c.length) && (e = this.getLeft(this.currentSlide), this.touchObject.curX = void 0 !== c ? c[0].pageX : t.clientX, this.touchObject.curY = void 0 !== c ? c[0].pageY : t.clientY, this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2))), !this.options.verticalSwiping && !this.swiping && s > 4 ? (this.scrolling = !0, !1) : (!0 === this.options.verticalSwiping && (this.touchObject.swipeLength = s), i = this.swipeDirection(), void 0 !== t.originalEvent && this.touchObject.swipeLength > 4 && (this.swiping = !0, t.preventDefault()), o = (!1 === this.options.rtl ? 1 : -1) * (this.touchObject.curX > this.touchObject.startX ? 1 : -1), !0 === this.options.verticalSwiping && (o = this.touchObject.curY > this.touchObject.startY ? 1 : -1), n = this.touchObject.swipeLength, this.touchObject.edgeHit = !1, !1 === this.options.infinite && (0 === this.currentSlide && "right" === i || this.currentSlide >= this.getDotCount() && "left" === i) && (n = this.touchObject.swipeLength * this.options.edgeFriction, this.touchObject.edgeHit = !0), !1 === this.options.vertical ? this.swipeLeft = e + n * o : this.swipeLeft = e + n * (this.$list.height() / this.listWidth) * o, !0 === this.options.verticalSwiping && (this.swipeLeft = e + n * o), !0 !== this.options.fade && !1 !== this.options.touchMove && (!0 === this.animating ? (this.swipeLeft = null, !1) : void this.setCSS(this.swipeLeft))))
        }, e.prototype.swipeStart = function (t) {
            var e;
            if (this.interrupted = !0, 1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow) return this.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, this.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
        }, e.prototype.unload = function () {
            t(".slick-cloned", this.$slider).remove(), this.$dots && this.$dots.remove(), this.$prevArrow && this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove(), this.$nextArrow && this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove(), this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function (t) {
            this.$slider.trigger("unslick", [this, t]), this.destroy()
        }, e.prototype.updateArrows = function () {
            Math.floor(this.options.slidesToShow / 2), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && !this.options.infinite && (this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === this.currentSlide ? (this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode ? (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - 1 && !0 === this.options.centerMode && (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function () {
            null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function () {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, t.fn.slick = function () {
            var t, i, n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                c = this.length;
            for (t = 0; t < c; t++)
                if ("object" == typeof n || void 0 === n ? this[t].slick = new e(this[t], n) : i = this[t].slick[n].apply(this[t].slick, o), void 0 !== i) return i;
            return this
        }
    });