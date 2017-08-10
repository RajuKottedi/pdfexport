/*!
 * PDFExport v1.1.0
 * https://github.com/RajuKottedi/pdfexport
 * Copyright (c) 2017 RajuKottedi
 * Non-commercial - Free
 */
! function (e, define) {
    define("kendo.core.min", ["jquery"], e)
}(function () {
    return function (e, t, n) {
        function i() { }

        function o(e, t) {
            if (t) return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var n = e.charAt(0),
                i = e.substring(1);
            return "=" === n ? "+(" + i + ")+" : ":" === n ? "+$kendoHtmlEncode(" + i + ")+" : ";" + e + ";$kendoOutput+="
        }

        function r(e, t, n) {
            return e += "", t = t || 2, n = t - e.length, n ? W[t].substring(0, n) + e : e
        }

        function a(e) {
            var t = e.css(ve.support.transitions.css + "box-shadow") || e.css("box-shadow"),
                n = t ? t.match(Ae) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
                i = xe.max(+n[3], +(n[4] || 0));
            return {
                left: -n[1] + i,
                right: +n[1] + i,
                bottom: +n[2] + i
            }
        }

        function s(t, n) {
            var i, o, r, s, l, c, d, u, h = Se.browser,
                f = "rtl" == t.css("direction");
            return t.parent().hasClass("k-animation-container") ? (d = t.parent(".k-animation-container"), u = d[0].style, d.is(":hidden") && d.show(), i = Te.test(u.width) || Te.test(u.height), i || d.css({
                width: t.outerWidth(),
                height: t.outerHeight(),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })) : (o = a(t), r = t[0].style.width, s = t[0].style.height, l = Te.test(r), c = Te.test(s), h.opera && (o.left = o.right = o.bottom = 5), i = l || c, !l && (!n || n && r) && (r = t.outerWidth()), !c && (!n || n && s) && (s = t.outerHeight()), t.wrap(e("<div/>").addClass("k-animation-container").css({
                width: r,
                height: s,
                marginLeft: o.left * (f ? 1 : -1),
                paddingLeft: o.left,
                paddingRight: o.right,
                paddingBottom: o.bottom
            })), i && t.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })), h.msie && xe.floor(h.version) <= 7 && (t.css({
                zoom: 1
            }), t.children(".k-menu").width(t.width())), t.parent()
        }

        function l(e) {
            var t = 1,
                n = arguments.length;
            for (t = 1; n > t; t++) c(e, arguments[t]);
            return e
        }

        function c(e, t) {
            var n, i, o, r, a, s = ve.data.ObservableArray,
                l = ve.data.LazyObservableArray,
                d = ve.data.DataSource,
                u = ve.data.HierarchicalDataSource;
            for (n in t) i = t[n], o = typeof i, r = o === Fe && null !== i ? i.constructor : null, r && r !== Array && r !== s && r !== l && r !== d && r !== u ? i instanceof Date ? e[n] = new Date(i.getTime()) : M(i.clone) ? e[n] = i.clone() : (a = e[n], e[n] = typeof a === Fe ? a || {} : {}, c(e[n], i)) : o !== Be && (e[n] = i);
            return e
        }

        function d(e, t, i) {
            for (var o in t)
                if (t.hasOwnProperty(o) && t[o].test(e)) return o;
            return i !== n ? i : e
        }

        function u(e) {
            return e.replace(/([a-z][A-Z])/g, function (e) {
                return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
            })
        }

        function h(e) {
            return e.replace(/\-(\w)/g, function (e, t) {
                return t.toUpperCase()
            })
        }

        function f(t, n) {
            var i, o = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (i = document.defaultView.getComputedStyle(t, ""), n && e.each(n, function (e, t) {
                o[t] = i.getPropertyValue(t)
            })) : (i = t.currentStyle, n && e.each(n, function (e, t) {
                o[t] = i[h(t)]
            })), ve.size(o) || (o = i), o
        }

        function p(e) {
            if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1) return !0;
            var t = f(e, ["overflow"]).overflow;
            return "auto" == t || "scroll" == t
        }

        function m(t, i) {
            var o, r = Se.browser.webkit,
                a = Se.browser.mozilla,
                s = t instanceof e ? t[0] : t;
            if (t) return o = Se.isRtl(t), i === n ? o && r ? s.scrollWidth - s.clientWidth - s.scrollLeft : Math.abs(s.scrollLeft) : (s.scrollLeft = o && r ? s.scrollWidth - s.clientWidth - i : o && a ? -i : i, n)
        }

        function g(e) {
            var t, n = 0;
            for (t in e) e.hasOwnProperty(t) && "toJSON" != t && n++;
            return n
        }

        function v(e, n, i) {
            var o, r;
            return n || (n = "offset"), o = e[n](), Se.mobileOS.android && (o.top -= t.scrollY, o.left -= t.scrollX), Se.browser.msie && (Se.pointers || Se.msPointers) && !i && (r = Se.isRtl(e) ? 1 : -1, o.top -= t.pageYOffset + r * document.documentElement.scrollTop, o.left -= t.pageXOffset + r * document.documentElement.scrollLeft), o
        }

        function _(e) {
            var t = {};
            return be("string" == typeof e ? e.split(" ") : e, function (e) {
                t[e] = this
            }), t
        }

        function b(e) {
            return new ve.effects.Element(e)
        }

        function w(e, t, n, i) {
            return typeof e === Re && (M(t) && (i = t, t = 400, n = !1), M(n) && (i = n, n = !1), typeof t === Pe && (n = t, t = 400), e = {
                effects: e,
                duration: t,
                reverse: n,
                complete: i
            }), _e({
                effects: {},
                duration: 400,
                reverse: !1,
                init: ke,
                teardown: ke,
                hide: !1
            }, e, {
                    completeCallback: e.complete,
                    complete: ke
                })
        }

        function y(t, n, i, o, r) {
            for (var a, s = 0, l = t.length; l > s; s++) a = e(t[s]), a.queue(function () {
                j.promise(a, w(n, i, o, r))
            });
            return t
        }

        function k(e, t, n, i) {
            return t && (t = t.split(" "), be(t, function (t, n) {
                e.toggleClass(n, i)
            })), e
        }

        function x(e) {
            return ("" + e).replace(q, "&amp;").replace(G, "&lt;").replace(K, "&gt;").replace($, "&quot;").replace(Y, "&#39;")
        }

        function C(e, t) {
            var i;
            return 0 === t.indexOf("data") && (t = t.substring(4), t = t.charAt(0).toLowerCase() + t.substring(1)), t = t.replace(oe, "-$1"), i = e.getAttribute("data-" + ve.ns + t), null === i ? i = n : "null" === i ? i = null : "true" === i ? i = !0 : "false" === i ? i = !1 : Ee.test(i) ? i = parseFloat(i) : ne.test(i) && !ie.test(i) && (i = Function("return (" + i + ")")()), i
        }

        function S(t, i) {
            var o, r, a = {};
            for (o in i) r = C(t, o), r !== n && (te.test(o) && (r = ve.template(e("#" + r).html())), a[o] = r);
            return a
        }

        function T(t, n) {
            return e.contains(t, n) ? -1 : 1
        }

        function D() {
            var t = e(this);
            return e.inArray(t.attr("data-" + ve.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible")
        }

        function A(e, t) {
            var n = e.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && E(e)
        }

        function E(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
        }

        function I(e, t) {
            return new I.fn.init(e, t)
        }
        var R, M, F, z, P, B, L, H, N, O, V, W, U, j, q, G, $, Y, K, Q, X, J, Z, ee, te, ne, ie, oe, re, ae, se, le, ce, de, ue, he, fe, pe, me, ge, ve = t.kendo = t.kendo || {
            cultures: {}
        },
            _e = e.extend,
            be = e.each,
            we = e.isArray,
            ye = e.proxy,
            ke = e.noop,
            xe = Math,
            Ce = t.JSON || {},
            Se = {},
            Te = /%/,
            De = /\{(\d+)(:[^\}]+)?\}/g,
            Ae = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
            Ee = /^(\+|-?)\d+(\.?)\d*$/,
            Ie = "function",
            Re = "string",
            Me = "number",
            Fe = "object",
            ze = "null",
            Pe = "boolean",
            Be = "undefined",
            Le = {},
            He = {},
            Ne = [].slice;
        ve.version = "2016.3.914".replace(/^\s+|\s+$/g, ""), i.extend = function (e) {
            var t, n, i = function () { },
                o = this,
                r = e && e.init ? e.init : function () {
                    o.apply(this, arguments)
                };
            i.prototype = o.prototype, n = r.fn = r.prototype = new i;
            for (t in e) n[t] = null != e[t] && e[t].constructor === Object ? _e(!0, {}, i.prototype[t], e[t]) : e[t];
            return n.constructor = r, r.extend = o.extend, r
        }, i.prototype._initOptions = function (e) {
            this.options = l({}, this.options, e)
        }, M = ve.isFunction = function (e) {
            return "function" == typeof e
        }, F = function () {
            this._defaultPrevented = !0
        }, z = function () {
            return this._defaultPrevented === !0
        }, P = i.extend({
            init: function () {
                this._events = {}
            },
            bind: function (e, t, i) {
                var o, r, a, s, l, c = this,
                    d = typeof e === Re ? [e] : e,
                    u = typeof t === Ie;
                if (t === n) {
                    for (o in e) c.bind(o, e[o]);
                    return c
                }
                for (o = 0, r = d.length; r > o; o++) e = d[o], s = u ? t : t[e], s && (i && (a = s, s = function () {
                    c.unbind(e, s), a.apply(c, arguments)
                }, s.original = a), l = c._events[e] = c._events[e] || [], l.push(s));
                return c
            },
            one: function (e, t) {
                return this.bind(e, t, !0)
            },
            first: function (e, t) {
                var n, i, o, r, a = this,
                    s = typeof e === Re ? [e] : e,
                    l = typeof t === Ie;
                for (n = 0, i = s.length; i > n; n++) e = s[n], o = l ? t : t[e], o && (r = a._events[e] = a._events[e] || [], r.unshift(o));
                return a
            },
            trigger: function (e, t) {
                var n, i, o = this,
                    r = o._events[e];
                if (r) {
                    for (t = t || {}, t.sender = o, t._defaultPrevented = !1, t.preventDefault = F, t.isDefaultPrevented = z, r = r.slice(), n = 0, i = r.length; i > n; n++) r[n].call(o, t);
                    return t._defaultPrevented === !0
                }
                return !1
            },
            unbind: function (e, t) {
                var i, o = this,
                    r = o._events[e];
                if (e === n) o._events = {};
                else if (r)
                    if (t)
                        for (i = r.length - 1; i >= 0; i--) r[i] !== t && r[i].original !== t || r.splice(i, 1);
                    else o._events[e] = [];
                return o
            }
        }), B = /^\w+/, L = /\$\{([^}]*)\}/g, H = /\\\}/g, N = /__CURLY__/g, O = /\\#/g, V = /__SHARP__/g, W = ["", "0", "00", "000", "0000"], R = {
            paramName: "data",
            useWithBlock: !0,
            render: function (e, t) {
                var n, i, o = "";
                for (n = 0, i = t.length; i > n; n++) o += e(t[n]);
                return o
            },
            compile: function (e, t) {
                var n, i, r, a = _e({}, this, t),
                    s = a.paramName,
                    l = s.match(B)[0],
                    c = a.useWithBlock,
                    d = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
                if (M(e)) return e;
                for (d += c ? "with(" + s + "){" : "", d += "$kendoOutput=", i = e.replace(H, "__CURLY__").replace(L, "#=$kendoHtmlEncode($1)#").replace(N, "}").replace(O, "__SHARP__").split("#"), r = 0; i.length > r; r++) d += o(i[r], r % 2 === 0);
                d += c ? ";}" : ";", d += "return $kendoOutput;", d = d.replace(V, "#");
                try {
                    return n = Function(l, d), n._slotCount = Math.floor(i.length / 2), n
                } catch (u) {
                    throw Error(ve.format("Invalid template:'{0}' Generated code:'{1}'", e, d))
                }
            }
        },
            function () {
                function e(e) {
                    return a.lastIndex = 0, a.test(e) ? '"' + e.replace(a, function (e) {
                        var t = s[e];
                        return typeof t === Re ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function t(r, a) {
                    var s, c, d, u, h, f, p = n,
                        m = a[r];
                    if (m && typeof m === Fe && typeof m.toJSON === Ie && (m = m.toJSON(r)), typeof o === Ie && (m = o.call(a, r, m)), f = typeof m, f === Re) return e(m);
                    if (f === Me) return isFinite(m) ? m + "" : ze;
                    if (f === Pe || f === ze) return m + "";
                    if (f === Fe) {
                        if (!m) return ze;
                        if (n += i, h = [], "[object Array]" === l.apply(m)) {
                            for (u = m.length, s = 0; u > s; s++) h[s] = t(s, m) || ze;
                            return d = 0 === h.length ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + p + "]" : "[" + h.join(",") + "]", n = p, d
                        }
                        if (o && typeof o === Fe)
                            for (u = o.length, s = 0; u > s; s++) typeof o[s] === Re && (c = o[s], d = t(c, m), d && h.push(e(c) + (n ? ": " : ":") + d));
                        else
                            for (c in m) Object.hasOwnProperty.call(m, c) && (d = t(c, m), d && h.push(e(c) + (n ? ": " : ":") + d));
                        return d = 0 === h.length ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + p + "}" : "{" + h.join(",") + "}", n = p, d
                    }
                }
                var n, i, o, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    s = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    l = {}.toString;
                typeof Date.prototype.toJSON !== Ie && (Date.prototype.toJSON = function () {
                    var e = this;
                    return isFinite(e.valueOf()) ? r(e.getUTCFullYear(), 4) + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                    return this.valueOf()
                }), typeof Ce.stringify !== Ie && (Ce.stringify = function (e, r, a) {
                    var s;
                    if (n = "", i = "", typeof a === Me)
                        for (s = 0; a > s; s += 1) i += " ";
                    else typeof a === Re && (i = a);
                    if (o = r, r && typeof r !== Ie && (typeof r !== Fe || typeof r.length !== Me)) throw Error("JSON.stringify");
                    return t("", {
                        "": e
                    })
                })
            }(),
            function () {
                function e(e) {
                    if (e) {
                        if (e.numberFormat) return e;
                        if (typeof e === Re) {
                            var t = ve.cultures;
                            return t[e] || t[e.split("-")[0]] || null
                        }
                        return null
                    }
                    return null
                }

                function t(t) {
                    return t && (t = e(t)), t || ve.cultures.current
                }

                function i(e, i, o) {
                    o = t(o);
                    var a = o.calendars.standard,
                        s = a.days,
                        l = a.months;
                    return i = a.patterns[i] || i, i.replace(c, function (t) {
                        var i, o, c;
                        return "d" === t ? o = e.getDate() : "dd" === t ? o = r(e.getDate()) : "ddd" === t ? o = s.namesAbbr[e.getDay()] : "dddd" === t ? o = s.names[e.getDay()] : "M" === t ? o = e.getMonth() + 1 : "MM" === t ? o = r(e.getMonth() + 1) : "MMM" === t ? o = l.namesAbbr[e.getMonth()] : "MMMM" === t ? o = l.names[e.getMonth()] : "yy" === t ? o = r(e.getFullYear() % 100) : "yyyy" === t ? o = r(e.getFullYear(), 4) : "h" === t ? o = e.getHours() % 12 || 12 : "hh" === t ? o = r(e.getHours() % 12 || 12) : "H" === t ? o = e.getHours() : "HH" === t ? o = r(e.getHours()) : "m" === t ? o = e.getMinutes() : "mm" === t ? o = r(e.getMinutes()) : "s" === t ? o = e.getSeconds() : "ss" === t ? o = r(e.getSeconds()) : "f" === t ? o = xe.floor(e.getMilliseconds() / 100) : "ff" === t ? (o = e.getMilliseconds(), o > 99 && (o = xe.floor(o / 10)), o = r(o)) : "fff" === t ? o = r(e.getMilliseconds(), 3) : "tt" === t ? o = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (i = e.getTimezoneOffset(), c = 0 > i, o = ("" + xe.abs(i / 60)).split(".")[0], i = xe.abs(i) - 60 * o, o = (c ? "+" : "-") + r(o), o += ":" + r(i)) : "zz" !== t && "z" !== t || (o = e.getTimezoneOffset() / 60, c = 0 > o, o = ("" + xe.abs(o)).split(".")[0], o = (c ? "+" : "-") + ("zz" === t ? r(o) : o)), o !== n ? o : t.slice(1, t.length - 1)
                    })
                }

                function o(e, i, o) {
                    o = t(o);
                    var r, l, c, b, w, y, k, x, C, S, T, D, A, E, I, R, M, F, z, P, B, L, H, N = o.numberFormat,
                        O = N[p],
                        V = N.decimals,
                        W = N.pattern[0],
                        U = [],
                        j = 0 > e,
                        q = f,
                        G = f,
                        $ = -1;
                    if (e === n) return f;
                    if (!isFinite(e)) return e;
                    if (!i) return o.name.length ? e.toLocaleString() : "" + e;
                    if (w = d.exec(i)) {
                        if (i = w[1].toLowerCase(), l = "c" === i, c = "p" === i, (l || c) && (N = l ? N.currency : N.percent, O = N[p], V = N.decimals, r = N.symbol, W = N.pattern[j ? 0 : 1]), b = w[2], b && (V = +b), "e" === i) return b ? e.toExponential(V) : e.toExponential();
                        if (c && (e *= 100), e = s(e, V), j = 0 > e, e = e.split(p), y = e[0], k = e[1], j && (y = y.substring(1)), G = a(y, 0, y.length, N), k && (G += O + k), "n" === i && !j) return G;
                        for (e = f, S = 0, T = W.length; T > S; S++) D = W.charAt(S), e += "n" === D ? G : "$" === D || "%" === D ? r : D;
                        return e
                    }
                    if (j && (e = -e), (i.indexOf("'") > -1 || i.indexOf('"') > -1 || i.indexOf("\\") > -1) && (i = i.replace(u, function (e) {
                        var t = e.charAt(0).replace("\\", ""),
                            n = e.slice(1).replace(t, "");
                        return U.push(n), _
                    })), i = i.split(";"), j && i[1]) i = i[1], E = !0;
                    else if (0 === e) {
                        if (i = i[2] || i[0], -1 == i.indexOf(g) && -1 == i.indexOf(v)) return i
                    } else i = i[0];
                    if (P = i.indexOf("%"), B = i.indexOf("$"), c = -1 != P, l = -1 != B, c && (e *= 100), l && "\\" === i[B - 1] && (i = i.split("\\").join(""), l = !1), (l || c) && (N = l ? N.currency : N.percent, O = N[p], V = N.decimals, r = N.symbol), A = i.indexOf(m) > -1, A && (i = i.replace(h, f)), I = i.indexOf(p), T = i.length, -1 != I ? (k = ("" + e).split("e"), k = k[1] ? s(e, Math.abs(k[1])) : k[0], k = k.split(p)[1] || f, M = i.lastIndexOf(v) - I, R = i.lastIndexOf(g) - I, F = M > -1, z = R > -1, S = k.length, F || z || (i = i.substring(0, I) + i.substring(I + 1), T = i.length, I = -1, S = 0), F && M > R ? S = M : R > M && (z && S > R ? S = R : F && M > S && (S = M)), S > -1 && (e = s(e, S))) : e = s(e), R = i.indexOf(g), L = M = i.indexOf(v), $ = -1 == R && -1 != M ? M : -1 != R && -1 == M ? R : R > M ? M : R, R = i.lastIndexOf(g), M = i.lastIndexOf(v), H = -1 == R && -1 != M ? M : -1 != R && -1 == M ? R : R > M ? R : M, $ == T && (H = $), -1 != $) {
                        for (G = ("" + e).split(p), y = G[0], k = G[1] || f, x = y.length, C = k.length, j && -1 * e >= 0 && (j = !1), e = i.substring(0, $), j && !E && (e += "-"), S = $; T > S; S++) {
                            if (D = i.charAt(S), -1 == I) {
                                if (x > H - S) {
                                    e += y;
                                    break
                                }
                            } else if (-1 != M && S > M && (q = f), x >= I - S && I - S > -1 && (e += y, S = I), I === S) {
                                e += (k ? O : f) + k, S += H - I + 1;
                                continue
                            }
                            D === v ? (e += D, q = D) : D === g && (e += q)
                        }
                        if (A && (e = a(e, $ + (j ? 1 : 0), Math.max(H, x + $), N)), H >= $ && (e += i.substring(H + 1)), l || c) {
                            for (G = f, S = 0, T = e.length; T > S; S++) D = e.charAt(S), G += "$" === D || "%" === D ? r : D;
                            e = G
                        }
                        if (T = U.length)
                            for (S = 0; T > S; S++) e = e.replace(_, U[S])
                    }
                    return e
                }
                var a, s, l, c = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
                    d = /^(n|c|p|e)(\d*)$/i,
                    u = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
                    h = /\,/g,
                    f = "",
                    p = ".",
                    m = ",",
                    g = "#",
                    v = "0",
                    _ = "??",
                    b = "en-US",
                    w = {}.toString;
                ve.cultures["en-US"] = {
                    name: b,
                    numberFormat: {
                        pattern: ["-n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        percent: {
                            pattern: ["-n %", "n %"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "%"
                        },
                        currency: {
                            name: "US Dollar",
                            abbr: "USD",
                            pattern: ["($n)", "$n"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "$"
                        }
                    },
                    calendars: {
                        standard: {
                            days: {
                                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                            },
                            months: {
                                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            },
                            AM: ["AM", "am", "AM"],
                            PM: ["PM", "pm", "PM"],
                            patterns: {
                                d: "M/d/yyyy",
                                D: "dddd, MMMM dd, yyyy",
                                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                                g: "M/d/yyyy h:mm tt",
                                G: "M/d/yyyy h:mm:ss tt",
                                m: "MMMM dd",
                                M: "MMMM dd",
                                s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                                t: "h:mm tt",
                                T: "h:mm:ss tt",
                                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                                y: "MMMM, yyyy",
                                Y: "MMMM, yyyy"
                            },
                            "/": "/",
                            ":": ":",
                            firstDay: 0,
                            twoDigitYearMax: 2029
                        }
                    }
                }, ve.culture = function (t) {
                    var i, o = ve.cultures;
                    return t === n ? o.current : (i = e(t) || o[b], i.calendar = i.calendars.standard, o.current = i, n)
                }, ve.findCulture = e, ve.getCulture = t, ve.culture(b), a = function (e, t, i, o) {
                    var r, a, s, l, c, d, u = e.indexOf(o[p]),
                        h = o.groupSize.slice(),
                        f = h.shift();
                    if (i = -1 !== u ? u : i + 1, r = e.substring(t, i), a = r.length, a >= f) {
                        for (s = a, l = []; s > -1;)
                            if (c = r.substring(s - f, s), c && l.push(c), s -= f, d = h.shift(), f = d !== n ? d : f, 0 === f) {
                                l.push(r.substring(0, s));
                                break
                            }
                        r = l.reverse().join(o[m]), e = e.substring(0, t) + r + e.substring(i)
                    }
                    return e
                }, s = function (e, t) {
                    return t = t || 0, e = ("" + e).split("e"), e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))), e = ("" + e).split("e"), e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)), e.toFixed(Math.min(t, 20))
                }, l = function (e, t, r) {
                    if (t) {
                        if ("[object Date]" === w.call(e)) return i(e, t, r);
                        if (typeof e === Me) return o(e, t, r)
                    }
                    return e !== n ? e : ""
                }, ve.format = function (e) {
                    var t = arguments;
                    return e.replace(De, function (e, n, i) {
                        var o = t[parseInt(n, 10) + 1];
                        return l(o, i ? i.substring(1) : "")
                    })
                }, ve._extractFormat = function (e) {
                    return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)), e
                }, ve._activeElement = function () {
                    try {
                        return document.activeElement
                    } catch (e) {
                        return document.documentElement.activeElement
                    }
                }, ve._round = s, ve.toString = l
            }(),
            function () {
                function t(e, t, n) {
                    return !(e >= t && n >= e)
                }

                function i(e) {
                    return e.charAt(0)
                }

                function o(t) {
                    return e.map(t, i)
                }

                function r(e, t) {
                    t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
                }

                function a(e) {
                    for (var t = 0, n = e.length, i = []; n > t; t++) i[t] = (e[t] + "").toLowerCase();
                    return i
                }

                function s(e) {
                    var t, n = {};
                    for (t in e) n[t] = a(e[t]);
                    return n
                }

                function l(e, i, a) {
                    if (!e) return null;
                    var l, c, d, u, h, m, g, v, _, w, y, k, x, C = function (e) {
                        for (var t = 0; i[B] === e;) t++ , B++;
                        return t > 0 && (B -= 1), t
                    },
                        S = function (t) {
                            var n = b[t] || RegExp("^\\d{1," + t + "}"),
                                i = e.substr(L, t).match(n);
                            return i ? (i = i[0], L += i.length, parseInt(i, 10)) : null
                        },
                        T = function (t, n) {
                            for (var i, o, r, a = 0, s = t.length, l = 0, c = 0; s > a; a++) i = t[a], o = i.length, r = e.substr(L, o), n && (r = r.toLowerCase()), r == i && o > l && (l = o, c = a);
                            return l ? (L += l, c + 1) : null
                        },
                        D = function () {
                            var t = !1;
                            return e.charAt(L) === i[B] && (L++ , t = !0), t
                        },
                        A = a.calendars.standard,
                        E = null,
                        I = null,
                        R = null,
                        M = null,
                        F = null,
                        z = null,
                        P = null,
                        B = 0,
                        L = 0,
                        H = !1,
                        N = new Date,
                        O = A.twoDigitYearMax || 2029,
                        V = N.getFullYear();
                    for (i || (i = "d"), u = A.patterns[i], u && (i = u), i = i.split(""), d = i.length; d > B; B++)
                        if (l = i[B], H) "'" === l ? H = !1 : D();
                        else if ("d" === l) {
                            if (c = C("d"), A._lowerDays || (A._lowerDays = s(A.days)), null !== R && c > 2) continue;
                            if (R = 3 > c ? S(2) : T(A._lowerDays[3 == c ? "namesAbbr" : "names"], !0), null === R || t(R, 1, 31)) return null
                        } else if ("M" === l) {
                            if (c = C("M"), A._lowerMonths || (A._lowerMonths = s(A.months)), I = 3 > c ? S(2) : T(A._lowerMonths[3 == c ? "namesAbbr" : "names"], !0), null === I || t(I, 1, 12)) return null;
                            I -= 1
                        } else if ("y" === l) {
                            if (c = C("y"), E = S(c), null === E) return null;
                            2 == c && ("string" == typeof O && (O = V + parseInt(O, 10)), E = V - V % 100 + E, E > O && (E -= 100))
                        } else if ("h" === l) {
                            if (C("h"), M = S(2), 12 == M && (M = 0), null === M || t(M, 0, 11)) return null
                        } else if ("H" === l) {
                            if (C("H"), M = S(2), null === M || t(M, 0, 23)) return null
                        } else if ("m" === l) {
                            if (C("m"), F = S(2), null === F || t(F, 0, 59)) return null
                        } else if ("s" === l) {
                            if (C("s"), z = S(2), null === z || t(z, 0, 59)) return null
                        } else if ("f" === l) {
                            if (c = C("f"), x = e.substr(L, c).match(b[3]), P = S(c), null !== P && (P = parseFloat("0." + x[0], 10), P = ve._round(P, 3), P *= 1e3), null === P || t(P, 0, 999)) return null
                        } else if ("t" === l) {
                            if (c = C("t"), v = A.AM, _ = A.PM, 1 === c && (v = o(v), _ = o(_)), h = T(_), !h && !T(v)) return null
                        } else if ("z" === l) {
                            if (m = !0, c = C("z"), "Z" === e.substr(L, 1)) {
                                D();
                                continue
                            }
                            if (g = e.substr(L, 6).match(c > 2 ? p : f), !g) return null;
                            if (g = g[0].split(":"), w = g[0], y = g[1], !y && w.length > 3 && (L = w.length - 2, y = w.substring(L), w = w.substring(0, L)), w = parseInt(w, 10), t(w, -12, 13)) return null;
                            if (c > 2 && (y = parseInt(y, 10), isNaN(y) || t(y, 0, 59))) return null
                        } else if ("'" === l) H = !0, D();
                        else if (!D()) return null;
                    return k = null !== M || null !== F || z || null, null === E && null === I && null === R && k ? (E = V, I = N.getMonth(), R = N.getDate()) : (null === E && (E = V), null === R && (R = 1)), h && 12 > M && (M += 12), m ? (w && (M += -w), y && (F += -y), e = new Date(Date.UTC(E, I, R, M, F, z, P))) : (e = new Date(E, I, R, M, F, z, P), r(e, M)), 100 > E && e.setFullYear(E), e.getDate() !== R && m === n ? null : e
                }

                function c(e) {
                    var t = "-" === e.substr(0, 1) ? -1 : 1;
                    return e = e.substring(1), e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10), t * e
                }

                function d(e) {
                    var t, n, i, o = xe.max(v.length, _.length),
                        r = e.calendar.patterns,
                        a = [];
                    for (i = 0; o > i; i++) {
                        for (t = v[i], n = 0; t.length > n; n++) a.push(r[t[n]]);
                        a = a.concat(_[i])
                    }
                    return a
                }
                var u = /\u00A0/g,
                    h = /[eE][\-+]?[0-9]+/,
                    f = /[+|\-]\d{1,2}/,
                    p = /[+|\-]\d{1,2}:?\d{2}/,
                    m = /^\/Date\((.*?)\)\/$/,
                    g = /[+-]\d*/,
                    v = [
                        [],
                        ["G", "g", "F"],
                        ["D", "d", "y", "m", "T", "t"]
                    ],
                    _ = [
                        ["yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.fff", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss"],
                        ["yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm", "yyyy/MM/dd HH:mm"],
                        ["yyyy/MM/dd", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"]
                    ],
                    b = {
                        2: /^\d{1,2}/,
                        3: /^\d{1,3}/,
                        4: /^\d{4}/
                    },
                    w = {}.toString;
                ve.parseDate = function (e, t, n) {
                    var i, o, r, a;
                    if ("[object Date]" === w.call(e)) return e;
                    if (i = 0, o = null, e && 0 === e.indexOf("/D") && (o = m.exec(e))) return o = o[1], a = g.exec(o.substring(1)), o = new Date(parseInt(o, 10)), a && (a = c(a[0]), o = ve.timezone.apply(o, 0), o = ve.timezone.convert(o, 0, -1 * a)), o;
                    for (n = ve.getCulture(n), t || (t = d(n)), t = we(t) ? t : [t], r = t.length; r > i; i++)
                        if (o = l(e, t[i], n)) return o;
                    return o
                }, ve.parseInt = function (e, t) {
                    var n = ve.parseFloat(e, t);
                    return n && (n = 0 | n), n
                }, ve.parseFloat = function (e, t, n) {
                    if (!e && 0 !== e) return null;
                    if (typeof e === Me) return e;
                    e = "" + e, t = ve.getCulture(t);
                    var i, o, r = t.numberFormat,
                        a = r.percent,
                        s = r.currency,
                        l = s.symbol,
                        c = a.symbol,
                        d = e.indexOf("-");
                    return h.test(e) ? (e = parseFloat(e.replace(r["."], ".")), isNaN(e) && (e = null), e) : d > 0 ? null : (d = d > -1, e.indexOf(l) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (r = s, i = r.pattern[0].replace("$", l).split("n"), e.indexOf(i[0]) > -1 && e.indexOf(i[1]) > -1 && (e = e.replace(i[0], "").replace(i[1], ""), d = !0)) : e.indexOf(c) > -1 && (o = !0, r = a, l = c), e = e.replace("-", "").replace(l, "").replace(u, " ").split(r[","].replace(u, " ")).join("").replace(r["."], "."), e = parseFloat(e), isNaN(e) ? e = null : d && (e *= -1), e && o && (e /= 100), e)
                }
            }(),
            function () {
                var i, o, r, a, s, l, c;
                Se._scrollbar = n, Se.scrollbar = function (e) {
                    if (isNaN(Se._scrollbar) || e) {
                        var t, n = document.createElement("div");
                        return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", n.innerHTML = "&nbsp;", document.body.appendChild(n), Se._scrollbar = t = n.offsetWidth - n.scrollWidth, document.body.removeChild(n), t
                    }
                    return Se._scrollbar
                }, Se.isRtl = function (t) {
                    return e(t).closest(".k-rtl").length > 0
                }, i = document.createElement("table");
                try {
                    i.innerHTML = "<tr><td></td></tr>", Se.tbodyInnerHtml = !0
                } catch (u) {
                    Se.tbodyInnerHtml = !1
                }
                Se.touch = "ontouchstart" in t, Se.msPointers = t.MSPointerEvent, Se.pointers = t.PointerEvent, o = Se.transitions = !1, r = Se.transforms = !1, a = "HTMLElement" in t ? HTMLElement.prototype : [], Se.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style, be(["Moz", "webkit", "O", "ms"], function () {
                    var e, t = "" + this,
                        a = typeof i.style[t + "Transition"] === Re;
                    return a || typeof i.style[t + "Transform"] === Re ? (e = t.toLowerCase(), r = {
                        css: "ms" != e ? "-" + e + "-" : "",
                        prefix: t,
                        event: "o" === e || "webkit" === e ? e : ""
                    }, a && (o = r, o.event = o.event ? o.event + "TransitionEnd" : "transitionend"), !1) : n
                }), i = null, Se.transforms = r, Se.transitions = o, Se.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
                try {
                    Se.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth, Se.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
                } catch (u) {
                    Se.screenWidth = t.screen.availWidth, Se.screenHeight = t.screen.availHeight
                }
                Se.detectOS = function (e) {
                    var n, i, o = !1,
                        r = [],
                        a = !/mobile safari/i.test(e),
                        s = {
                            wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                            fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                            android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                            iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                            ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                            meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                            webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                            blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                            playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                            windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                            tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                            sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                            ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                        },
                        l = {
                            ios: /^i(phone|pad|pod)$/i,
                            android: /^android|fire$/i,
                            blackberry: /^blackberry|playbook/i,
                            windows: /windows/,
                            wp: /wp/,
                            flat: /sailfish|ffos|tizen/i,
                            meego: /meego/
                        },
                        c = {
                            tablet: /playbook|ipad|fire/i
                        },
                        u = {
                            omini: /Opera\sMini/i,
                            omobile: /Opera\sMobi/i,
                            firefox: /Firefox|Fennec/i,
                            mobilesafari: /version\/.*safari/i,
                            ie: /MSIE|Windows\sPhone/i,
                            chrome: /chrome|crios/i,
                            webkit: /webkit/i
                        };
                    for (i in s)
                        if (s.hasOwnProperty(i) && (r = e.match(s[i]))) {
                            if ("windows" == i && "plugins" in navigator) return !1;
                            o = {}, o.device = i, o.tablet = d(i, c, !1), o.browser = d(e, u, "default"), o.name = d(i, l), o[o.name] = !0, o.majorVersion = r[2], o.minorVersion = r[3].replace("_", "."), n = o.minorVersion.replace(".", "").substr(0, 2), o.flatVersion = o.majorVersion + n + Array(3 - (3 > n.length ? n.length : 2)).join("0"), o.cordova = typeof t.PhoneGap !== Be || typeof t.cordova !== Be, o.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || o.cordova, o.android && (1.5 > Se.devicePixelRatio && 400 > o.flatVersion || a) && (Se.screenWidth > 800 || Se.screenHeight > 800) && (o.tablet = i);
                            break
                        }
                    return o
                }, s = Se.mobileOS = Se.detectOS(navigator.userAgent), Se.wpDevicePixelRatio = s.wp ? screen.width / 320 : 0, Se.kineticScrollNeeded = s && (Se.touch || Se.msPointers || Se.pointers), Se.hasNativeScrolling = !1, (s.ios || s.android && s.majorVersion > 2 || s.wp) && (Se.hasNativeScrolling = s), Se.delayedClick = function () {
                    if (Se.touch) {
                        if (s.ios) return !0;
                        if (s.android) return Se.browser.chrome ? 32 > Se.browser.version ? !1 : !(e("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i) : !0
                    }
                    return !1
                }, Se.mouseAndTouchPresent = Se.touch && !(Se.mobileOS.ios || Se.mobileOS.android), Se.detectBrowser = function (e) {
                    var t, n = !1,
                        i = [],
                        o = {
                            edge: /(edge)[ \/]([\w.]+)/i,
                            webkit: /(chrome)[ \/]([\w.]+)/i,
                            safari: /(webkit)[ \/]([\w.]+)/i,
                            opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                            msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                            mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                        };
                    for (t in o)
                        if (o.hasOwnProperty(t) && (i = e.match(o[t]))) {
                            n = {}, n[t] = !0, n[i[1].toLowerCase().split(" ")[0].split("/")[0]] = !0, n.version = parseInt(document.documentMode || i[2], 10);
                            break
                        }
                    return n
                }, Se.browser = Se.detectBrowser(navigator.userAgent), Se.detectClipboardAccess = function () {
                    var e = {
                        copy: document.queryCommandSupported ? document.queryCommandSupported("copy") : !1,
                        cut: document.queryCommandSupported ? document.queryCommandSupported("cut") : !1,
                        paste: document.queryCommandSupported ? document.queryCommandSupported("paste") : !1
                    };
                    return Se.browser.chrome && (e.paste = !1, Se.browser.version >= 43 && (e.copy = !0, e.cut = !0)), e
                }, Se.clipboard = Se.detectClipboardAccess(), Se.zoomLevel = function () {
                    var e, n, i;
                    try {
                        return e = Se.browser, n = 0, i = document.documentElement, e.msie && 11 == e.version && i.scrollHeight > i.clientHeight && !Se.touch && (n = Se.scrollbar()), Se.touch ? i.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((top || t).document.documentElement.offsetWidth + n) / (top || t).innerWidth : 1
                    } catch (o) {
                        return 1
                    }
                }, Se.cssBorderSpacing = n !== document.documentElement.style.borderSpacing && !(Se.browser.msie && 8 > Se.browser.version),
                    function (t) {
                        var n = "",
                            i = e(document.documentElement),
                            o = parseInt(t.version, 10);
                        t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"), n && (n = "k-" + n + " k-" + n + o), Se.mobileOS && (n += " k-mobile"), i.addClass(n)
                    }(Se.browser), Se.eventCapture = document.documentElement.addEventListener, l = document.createElement("input"), Se.placeholder = "placeholder" in l, Se.propertyChangeEvent = "onpropertychange" in l, Se.input = function () {
                        for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, i = "test", o = {}, r = 0; n > r; r++) e = t[r], l.setAttribute("type", e), l.value = i, o[e.replace("-", "")] = "text" !== l.type && l.value !== i;
                        return o
                    }(), l.style.cssText = "float:left;", Se.cssFloat = !!l.style.cssFloat, l = null, Se.stableSort = function () {
                        var e, t = 513,
                            n = [{
                                index: 0,
                                field: "b"
                            }];
                        for (e = 1; t > e; e++) n.push({
                            index: e,
                            field: "a"
                        });
                        return n.sort(function (e, t) {
                            return e.field > t.field ? 1 : t.field > e.field ? -1 : 0
                        }), 1 === n[0].index
                    }(), Se.matchesSelector = a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.matchesSelector || a.matches || function (t) {
                        for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), i = n.length; i--;)
                            if (n[i] == this) return !0;
                        return !1
                    }, Se.pushState = t.history && t.history.pushState, c = document.documentMode, Se.hashChange = "onhashchange" in t && !(Se.browser.msie && (!c || 8 >= c)), Se.customElements = "registerElement" in t.document
            }(), U = {
                left: {
                    reverse: "right"
                },
                right: {
                    reverse: "left"
                },
                down: {
                    reverse: "up"
                },
                up: {
                    reverse: "down"
                },
                top: {
                    reverse: "bottom"
                },
                bottom: {
                    reverse: "top"
                },
                "in": {
                    reverse: "out"
                },
                out: {
                    reverse: "in"
                }
            }, j = {}, e.extend(j, {
                enabled: !0,
                Element: function (t) {
                    this.element = e(t)
                },
                promise: function (e, t) {
                    e.is(":visible") || e.css({
                        display: e.data("olddisplay") || "block"
                    }).css("display"), t.hide && e.data("olddisplay", e.css("display")).hide(), t.init && t.init(), t.completeCallback && t.completeCallback(e), e.dequeue()
                },
                disable: function () {
                    this.enabled = !1, this.promise = this.promiseShim
                },
                enable: function () {
                    this.enabled = !0, this.promise = this.animatedPromise
                }
            }), j.promiseShim = j.promise, "kendoAnimate" in e.fn || _e(e.fn, {
                kendoStop: function (e, t) {
                    return this.stop(e, t)
                },
                kendoAnimate: function (e, t, n, i) {
                    return y(this, e, t, n, i)
                },
                kendoAddClass: function (e, t) {
                    return ve.toggleClass(this, e, t, !0)
                },
                kendoRemoveClass: function (e, t) {
                    return ve.toggleClass(this, e, t, !1)
                },
                kendoToggleClass: function (e, t, n) {
                    return ve.toggleClass(this, e, t, n)
                }
            }), q = /&/g, G = /</g, $ = /"/g, Y = /'/g, K = />/g, Q = function (e) {
                return e.target
            }, Se.touch && (Q = function (e) {
                var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
                return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
            }, be(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function (t, n) {
                e.fn[n] = function (e) {
                    return this.bind(n, e)
                }
            })), Se.touch ? Se.mobileOS ? (Se.mousedown = "touchstart", Se.mouseup = "touchend", Se.mousemove = "touchmove", Se.mousecancel = "touchcancel", Se.click = "touchend", Se.resize = "orientationchange") : (Se.mousedown = "mousedown touchstart", Se.mouseup = "mouseup touchend", Se.mousemove = "mousemove touchmove", Se.mousecancel = "mouseleave touchcancel", Se.click = "click", Se.resize = "resize") : Se.pointers ? (Se.mousemove = "pointermove", Se.mousedown = "pointerdown", Se.mouseup = "pointerup", Se.mousecancel = "pointercancel", Se.click = "pointerup", Se.resize = "orientationchange resize") : Se.msPointers ? (Se.mousemove = "MSPointerMove", Se.mousedown = "MSPointerDown", Se.mouseup = "MSPointerUp", Se.mousecancel = "MSPointerCancel", Se.click = "MSPointerUp", Se.resize = "orientationchange resize") : (Se.mousemove = "mousemove", Se.mousedown = "mousedown", Se.mouseup = "mouseup", Se.mousecancel = "mouseleave", Se.click = "click", Se.resize = "resize"), X = function (e, t) {
                var n, i, o, r, a = t || "d",
                    s = 1;
                for (i = 0, o = e.length; o > i; i++) r = e[i], "" !== r && (n = r.indexOf("["), 0 !== n && (-1 == n ? r = "." + r : (s++ , r = "." + r.substring(0, n) + " || {})" + r.substring(n))), s++ , a += r + (o - 1 > i ? " || {})" : ")"));
                return Array(s).join("(") + a
            }, J = /^([a-z]+:)?\/\//i, _e(ve, {
                widgets: [],
                _widgetRegisteredCallbacks: [],
                ui: ve.ui || {},
                fx: ve.fx || b,
                effects: ve.effects || j,
                mobile: ve.mobile || {},
                data: ve.data || {},
                dataviz: ve.dataviz || {},
                drawing: ve.drawing || {},
                spreadsheet: {
                    messages: {}
                },
                keys: {
                    INSERT: 45,
                    DELETE: 46,
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    END: 35,
                    HOME: 36,
                    SPACEBAR: 32,
                    PAGEUP: 33,
                    PAGEDOWN: 34,
                    F2: 113,
                    F10: 121,
                    F12: 123,
                    NUMPAD_PLUS: 107,
                    NUMPAD_MINUS: 109,
                    NUMPAD_DOT: 110
                },
                support: ve.support || Se,
                animate: ve.animate || y,
                ns: "",
                attr: function (e) {
                    return "data-" + ve.ns + e
                },
                getShadows: a,
                wrap: s,
                deepExtend: l,
                getComputedStyles: f,
                webComponents: ve.webComponents || [],
                isScrollable: p,
                scrollLeft: m,
                size: g,
                toCamelCase: h,
                toHyphens: u,
                getOffset: ve.getOffset || v,
                parseEffects: ve.parseEffects || _,
                toggleClass: ve.toggleClass || k,
                directions: ve.directions || U,
                Observable: P,
                Class: i,
                Template: R,
                template: ye(R.compile, R),
                render: ye(R.render, R),
                stringify: ye(Ce.stringify, Ce),
                eventTarget: Q,
                htmlEncode: x,
                isLocalUrl: function (e) {
                    return e && !J.test(e)
                },
                expr: function (e, t, n) {
                    return e = e || "", typeof t == Re && (n = t, t = !1), n = n || "d", e && "[" !== e.charAt(0) && (e = "." + e), t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'), e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"), e = X(e.split("."), n), e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e, e
                },
                getter: function (e, t) {
                    var n = e + t;
                    return Le[n] = Le[n] || Function("d", "return " + ve.expr(e, t))
                },
                setter: function (e) {
                    return He[e] = He[e] || Function("d,value", ve.expr(e) + "=value")
                },
                accessor: function (e) {
                    return {
                        get: ve.getter(e),
                        set: ve.setter(e)
                    }
                },
                guid: function () {
                    var e, t, n = "";
                    for (e = 0; 32 > e; e++) t = 16 * xe.random() | 0, 8 != e && 12 != e && 16 != e && 20 != e || (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                    return n
                },
                roleSelector: function (e) {
                    return e.replace(/(\S+)/g, "[" + ve.attr("role") + "=$1],").slice(0, -1)
                },
                directiveSelector: function (e) {
                    var t, n = e.split(" ");
                    if (n)
                        for (t = 0; n.length > t; t++) "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
                    return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
                },
                triggeredByInput: function (e) {
                    return /^(label|input|textarea|select)$/i.test(e.target.tagName)
                },
                onWidgetRegistered: function (e) {
                    for (var t = 0, n = ve.widgets.length; n > t; t++) e(ve.widgets[t]);
                    ve._widgetRegisteredCallbacks.push(e)
                },
                logToConsole: function (e, i) {
                    var o = t.console;
                    !ve.suppressLog && n !== o && o.log && o[i || "log"](e)
                }
            }), Z = P.extend({
                init: function (e, t) {
                    var n, i = this;
                    i.element = ve.jQuery(e).handler(i), i.angular("init", t), P.fn.init.call(i), n = t ? t.dataSource : null, n && (t = _e({}, t, {
                        dataSource: {}
                    })), t = i.options = _e(!0, {}, i.options, t),
                        n && (t.dataSource = n), i.element.attr(ve.attr("role")) || i.element.attr(ve.attr("role"), (t.name || "").toLowerCase()), i.element.data("kendo" + t.prefix + t.name, i), i.bind(i.events, t)
                },
                events: [],
                options: {
                    prefix: ""
                },
                _hasBindingTarget: function () {
                    return !!this.element[0].kendoBindingTarget
                },
                _tabindex: function (e) {
                    e = e || this.wrapper;
                    var t = this.element,
                        n = "tabindex",
                        i = e.attr(n) || t.attr(n);
                    t.removeAttr(n), e.attr(n, isNaN(i) ? 0 : i)
                },
                setOptions: function (t) {
                    this._setEvents(t), e.extend(this.options, t)
                },
                _setEvents: function (e) {
                    for (var t, n = this, i = 0, o = n.events.length; o > i; i++) t = n.events[i], n.options[t] && e[t] && n.unbind(t, n.options[t]);
                    n.bind(n.events, e)
                },
                resize: function (e) {
                    var t = this.getSize(),
                        n = this._size;
                    (e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t, this._resize(t, e), this.trigger("resize", t))
                },
                getSize: function () {
                    return ve.dimensions(this.element)
                },
                size: function (e) {
                    return e ? (this.setSize(e), n) : this.getSize()
                },
                setSize: e.noop,
                _resize: e.noop,
                destroy: function () {
                    var e = this;
                    e.element.removeData("kendo" + e.options.prefix + e.options.name), e.element.removeData("handler"), e.unbind()
                },
                _destroy: function () {
                    this.destroy()
                },
                angular: function () { },
                _muteAngularRebind: function (e) {
                    this._muteRebind = !0, e.call(this), this._muteRebind = !1
                }
            }), ee = Z.extend({
                dataItems: function () {
                    return this.dataSource.flatView()
                },
                _angularItems: function (t) {
                    var n = this;
                    n.angular(t, function () {
                        return {
                            elements: n.items(),
                            data: e.map(n.dataItems(), function (e) {
                                return {
                                    dataItem: e
                                }
                            })
                        }
                    })
                }
            }), ve.dimensions = function (e, t) {
                var n = e[0];
                return t && e.css(t), {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                }
            }, ve.notify = ke, te = /template$/i, ne = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/, ie = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/, oe = /([A-Z])/g, ve.initWidget = function (i, o, r) {
                var a, s, l, c, d, u, h, f, p, m, g, v, _;
                if (r ? r.roles && (r = r.roles) : r = ve.ui.roles, i = i.nodeType ? i : i[0], u = i.getAttribute("data-" + ve.ns + "role")) {
                    p = -1 === u.indexOf("."), l = p ? r[u] : ve.getter(u)(t), g = e(i).data(), v = l ? "kendo" + l.fn.options.prefix + l.fn.options.name : "", m = p ? RegExp("^kendo.*" + u + "$", "i") : RegExp("^" + v + "$", "i");
                    for (_ in g)
                        if (_.match(m)) {
                            if (_ !== v) return g[_];
                            a = g[_]
                        }
                    if (l) {
                        for (f = C(i, "dataSource"), o = e.extend({}, S(i, l.fn.options), o), f && (o.dataSource = typeof f === Re ? ve.getter(f)(t) : f), c = 0, d = l.fn.events.length; d > c; c++) s = l.fn.events[c], h = C(i, s), h !== n && (o[s] = ve.getter(h)(t));
                        return a ? e.isEmptyObject(o) || a.setOptions(o) : a = new l(i, o), a
                    }
                }
            }, ve.rolesFromNamespaces = function (e) {
                var t, n, i = [];
                for (e[0] || (e = [ve.ui, ve.dataviz.ui]), t = 0, n = e.length; n > t; t++) i[t] = e[t].roles;
                return _e.apply(null, [{}].concat(i.reverse()))
            }, ve.init = function (t) {
                var n = ve.rolesFromNamespaces(Ne.call(arguments, 1));
                e(t).find("[data-" + ve.ns + "role]").addBack().each(function () {
                    ve.initWidget(this, {}, n)
                })
            }, ve.destroy = function (t) {
                e(t).find("[data-" + ve.ns + "role]").addBack().each(function () {
                    var t, n = e(this).data();
                    for (t in n) 0 === t.indexOf("kendo") && typeof n[t].destroy === Ie && n[t].destroy()
                })
            }, ve.resize = function (t, n) {
                var i, o = e(t).find("[data-" + ve.ns + "role]").addBack().filter(D);
                o.length && (i = e.makeArray(o), i.sort(T), e.each(i, function () {
                    var t = ve.widgetInstance(e(this));
                    t && t.resize(n)
                }))
            }, ve.parseOptions = S, _e(ve.ui, {
                Widget: Z,
                DataBoundWidget: ee,
                roles: {},
                progress: function (t, n) {
                    var i, o, r, a, s = t.find(".k-loading-mask"),
                        l = ve.support,
                        c = l.browser;
                    n ? s.length || (i = l.isRtl(t), o = i ? "right" : "left", a = t.scrollLeft(), r = c.webkit && i ? t[0].scrollWidth - t.width() - 2 * a : 0, s = e("<div class='k-loading-mask'><span class='k-loading-text'>" + ve.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(o, Math.abs(a) + r).prependTo(t)) : s && s.remove()
                },
                plugin: function (t, i, o) {
                    var r, a, s, l, c = t.fn.options.name;
                    for (i = i || ve.ui, o = o || "", i[c] = t, i.roles[c.toLowerCase()] = t, r = "getKendo" + o + c, c = "kendo" + o + c, a = {
                        name: c,
                        widget: t,
                        prefix: o || ""
                    }, ve.widgets.push(a), s = 0, l = ve._widgetRegisteredCallbacks.length; l > s; s++) ve._widgetRegisteredCallbacks[s](a);
                    e.fn[c] = function (i) {
                        var o, r = this;
                        return typeof i === Re ? (o = Ne.call(arguments, 1), this.each(function () {
                            var t, a, s = e.data(this, c);
                            if (!s) throw Error(ve.format("Cannot call method '{0}' of {1} before it is initialized", i, c));
                            if (t = s[i], typeof t !== Ie) throw Error(ve.format("Cannot find method '{0}' of {1}", i, c));
                            return a = t.apply(s, o), a !== n ? (r = a, !1) : n
                        })) : this.each(function () {
                            return new t(this, i)
                        }), r
                    }, e.fn[c].widget = t, e.fn[r] = function () {
                        return this.data(c)
                    }
                }
            }), ve.ui.progress.messages = {
                loading: "Loading..."
            }, re = {
                bind: function () {
                    return this
                },
                nullObject: !0,
                options: {}
            }, ae = Z.extend({
                init: function (e, t) {
                    Z.fn.init.call(this, e, t), this.element.autoApplyNS(), this.wrapper = this.element, this.element.addClass("km-widget")
                },
                destroy: function () {
                    Z.fn.destroy.call(this), this.element.kendoDestroy()
                },
                options: {
                    prefix: "Mobile"
                },
                events: [],
                view: function () {
                    var e = this.element.closest(ve.roleSelector("view splitview modalview drawer"));
                    return ve.widgetInstance(e, ve.mobile.ui) || re
                },
                viewHasNativeScrolling: function () {
                    var e = this.view();
                    return e && e.options.useNativeScrolling
                },
                container: function () {
                    var e = this.element.closest(ve.roleSelector("view layout modalview drawer splitview"));
                    return ve.widgetInstance(e.eq(0), ve.mobile.ui) || re
                }
            }), _e(ve.mobile, {
                init: function (e) {
                    ve.init(e, ve.mobile.ui, ve.ui, ve.dataviz.ui)
                },
                appLevelNativeScrolling: function () {
                    return ve.mobile.application && ve.mobile.application.options && ve.mobile.application.options.useNativeScrolling
                },
                roles: {},
                ui: {
                    Widget: ae,
                    DataBoundWidget: ee.extend(ae.prototype),
                    roles: {},
                    plugin: function (e) {
                        ve.ui.plugin(e, ve.mobile.ui, "Mobile")
                    }
                }
            }), l(ve.dataviz, {
                init: function (e) {
                    ve.init(e, ve.dataviz.ui)
                },
                ui: {
                    roles: {},
                    themes: {},
                    views: [],
                    plugin: function (e) {
                        ve.ui.plugin(e, ve.dataviz.ui)
                    }
                },
                roles: {}
            }), ve.touchScroller = function (t, n) {
                return n || (n = {}), n.useNative = !0, e(t).map(function (t, i) {
                    return i = e(i), Se.kineticScrollNeeded && ve.mobile.ui.Scroller && !i.data("kendoMobileScroller") ? (i.kendoMobileScroller(n), i.data("kendoMobileScroller")) : !1
                })[0]
            }, ve.preventDefault = function (e) {
                e.preventDefault()
            }, ve.widgetInstance = function (e, n) {
                var i, o, r, a, s = e.data(ve.ns + "role"),
                    l = [];
                if (s) {
                    if ("content" === s && (s = "scroller"), n)
                        if (n[0])
                            for (i = 0, o = n.length; o > i; i++) l.push(n[i].roles[s]);
                        else l.push(n.roles[s]);
                    else l = [ve.ui.roles[s], ve.dataviz.ui.roles[s], ve.mobile.ui.roles[s]];
                    for (s.indexOf(".") >= 0 && (l = [ve.getter(s)(t)]), i = 0, o = l.length; o > i; i++)
                        if (r = l[i], r && (a = e.data("kendo" + r.fn.options.prefix + r.fn.options.name))) return a
                }
            }, ve.onResize = function (n) {
                var i = n;
                return Se.mobileOS.android && (i = function () {
                    setTimeout(n, 600)
                }), e(t).on(Se.resize, i), i
            }, ve.unbindResize = function (n) {
                e(t).off(Se.resize, n)
            }, ve.attrValue = function (e, t) {
                return e.data(ve.ns + t)
            }, ve.days = {
                Sunday: 0,
                Monday: 1,
                Tuesday: 2,
                Wednesday: 3,
                Thursday: 4,
                Friday: 5,
                Saturday: 6
            }, e.extend(e.expr[":"], {
                kendoFocusable: function (t) {
                    var n = e.attr(t, "tabindex");
                    return A(t, !isNaN(n) && n > -1)
                }
            }), se = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"], le = "label, input, [data-rel=external]", ce = {
                setupMouseMute: function () {
                    var t, n = 0,
                        i = se.length,
                        o = document.documentElement;
                    if (!ce.mouseTrap && Se.eventCapture)
                        for (ce.mouseTrap = !0, ce.bustClick = !1, ce.captureMouse = !1, t = function (t) {
                            ce.captureMouse && ("click" === t.type ? ce.bustClick && !e(t.target).is(le) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation())
                        }; i > n; n++) o.addEventListener(se[n], t, !0)
                },
                muteMouse: function (e) {
                    ce.captureMouse = !0, e.data.bustClick && (ce.bustClick = !0), clearTimeout(ce.mouseTrapTimeoutID)
                },
                unMuteMouse: function () {
                    clearTimeout(ce.mouseTrapTimeoutID), ce.mouseTrapTimeoutID = setTimeout(function () {
                        ce.captureMouse = !1, ce.bustClick = !1
                    }, 400)
                }
            }, de = {
                down: "touchstart mousedown",
                move: "mousemove touchmove",
                up: "mouseup touchend touchcancel",
                cancel: "mouseleave touchcancel"
            }, Se.touch && (Se.mobileOS.ios || Se.mobileOS.android) ? de = {
                down: "touchstart",
                move: "touchmove",
                up: "touchend touchcancel",
                cancel: "touchcancel"
            } : Se.pointers ? de = {
                down: "pointerdown",
                move: "pointermove",
                up: "pointerup",
                cancel: "pointercancel pointerleave"
            } : Se.msPointers && (de = {
                down: "MSPointerDown",
                move: "MSPointerMove",
                up: "MSPointerUp",
                cancel: "MSPointerCancel MSPointerLeave"
            }), !Se.msPointers || "onmspointerenter" in t || e.each({
                MSPointerEnter: "MSPointerOver",
                MSPointerLeave: "MSPointerOut"
            }, function (t, n) {
                e.event.special[t] = {
                    delegateType: n,
                    bindType: n,
                    handle: function (t) {
                        var i, o = this,
                            r = t.relatedTarget,
                            a = t.handleObj;
                        return r && (r === o || e.contains(o, r)) || (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = n), i
                    }
                }
            }), ue = function (e) {
                return de[e] || e
            }, he = /([^ ]+)/g, ve.applyEventMap = function (e, t) {
                return e = e.replace(he, ue), t && (e = e.replace(he, "$1." + t)), e
            }, fe = e.fn.on, _e(!0, I, e), I.fn = I.prototype = new e, I.fn.constructor = I, I.fn.init = function (t, n) {
                return n && n instanceof e && !(n instanceof I) && (n = I(n)), e.fn.init.call(this, t, n, pe)
            }, I.fn.init.prototype = I.fn, pe = I(document), _e(I.fn, {
                handler: function (e) {
                    return this.data("handler", e), this
                },
                autoApplyNS: function (e) {
                    return this.data("kendoNS", e || ve.guid()), this
                },
                on: function () {
                    var e, t, n, i, o, r, a = this,
                        s = a.data("kendoNS");
                    return 1 === arguments.length ? fe.call(a, arguments[0]) : (e = a, t = Ne.call(arguments), typeof t[t.length - 1] === Be && t.pop(), n = t[t.length - 1], i = ve.applyEventMap(t[0], s), Se.mouseAndTouchPresent && i.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (ce.setupMouseMute(), o = 2 === t.length ? null : t[1], r = i.indexOf("click") > -1 && i.indexOf("touchend") > -1, fe.call(this, {
                        touchstart: ce.muteMouse,
                        touchend: ce.unMuteMouse
                    }, o, {
                            bustClick: r
                        })), typeof n === Re && (e = a.data("handler"), n = e[n], t[t.length - 1] = function (t) {
                            n.call(e, t)
                        }), t[0] = i, fe.apply(a, t), a)
                },
                kendoDestroy: function (e) {
                    return e = e || this.data("kendoNS"), e && this.off("." + e), this
                }
            }), ve.jQuery = I, ve.eventMap = de, ve.timezone = function () {
                function e(e, t) {
                    var n, i, o, r = t[3],
                        a = t[4],
                        s = t[5],
                        l = t[8];
                    return l || (t[8] = l = {}), l[e] ? l[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, d[r] + 1, 1, s[0] - 24, s[1], s[2], 0)), i = u[a.substr(4, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + i - o - (i > o ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, d[r], a.substr(5), s[0], s[1], s[2], 0)), i = u[a.substr(0, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + i - o + (o > i ? 7 : 0))) : n = new Date(Date.UTC(e, d[r], a, s[0], s[1], s[2], 0)), l[e] = n)
                }

                function t(t, n, i) {
                    var o, r, a, s;
                    return (n = n[i]) ? (a = new Date(t).getUTCFullYear(), n = jQuery.grep(n, function (e) {
                        var t = e[0],
                            n = e[1];
                        return a >= t && (n >= a || t == a && "only" == n || "max" == n)
                    }), n.push(t), n.sort(function (t, n) {
                        return "number" != typeof t && (t = +e(a, t)), "number" != typeof n && (n = +e(a, n)), t - n
                    }), s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1], isNaN(s) ? s : null) : (o = i.split(":"), r = 0, o.length > 1 && (r = 60 * o[0] + +o[1]), [-1e6, "max", "-", "Jan", 1, [0, 0, 0], r, "-"])
                }

                function n(e, t, n) {
                    var i, o, r, a = t[n];
                    if ("string" == typeof a && (a = t[a]), !a) throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                    for (i = a.length - 1; i >= 0 && (o = a[i][3], !(o && e > o)); i--);
                    if (r = a[i + 1], !r) throw Error('Timezone "' + n + '" not found on ' + e + ".");
                    return r
                }

                function i(e, i, o, r) {
                    typeof e != Me && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                    var a = n(e, i, r);
                    return {
                        zone: a,
                        rule: t(e, o, a[1])
                    }
                }

                function o(e, t) {
                    var n, o, r;
                    return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = i(e, this.zones, this.rules, t), o = n.zone, r = n.rule, ve.parseFloat(r ? o[0] - r[6] : o[0]))
                }

                function r(e, t) {
                    var n = i(e, this.zones, this.rules, t),
                        o = n.zone,
                        r = n.rule,
                        a = o[2];
                    return a.indexOf("/") >= 0 ? a.split("/")[r && +r[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", r && "-" != r[7] ? r[7] : "") : a
                }

                function a(e, t, n) {
                    var i, o;
                    return typeof t == Re && (t = this.offset(e, t)), typeof n == Re && (n = this.offset(e, n)), i = e.getTimezoneOffset(), e = new Date(e.getTime() + 6e4 * (t - n)), o = e.getTimezoneOffset(), new Date(e.getTime() + 6e4 * (o - i))
                }

                function s(e, t) {
                    return this.convert(e, e.getTimezoneOffset(), t)
                }

                function l(e, t) {
                    return this.convert(e, t, e.getTimezoneOffset())
                }

                function c(e) {
                    return this.apply(new Date(e), "Etc/UTC")
                }
                var d = {
                    Jan: 0,
                    Feb: 1,
                    Mar: 2,
                    Apr: 3,
                    May: 4,
                    Jun: 5,
                    Jul: 6,
                    Aug: 7,
                    Sep: 8,
                    Oct: 9,
                    Nov: 10,
                    Dec: 11
                },
                    u = {
                        Sun: 0,
                        Mon: 1,
                        Tue: 2,
                        Wed: 3,
                        Thu: 4,
                        Fri: 5,
                        Sat: 6
                    };
                return {
                    zones: {},
                    rules: {},
                    offset: o,
                    convert: a,
                    apply: s,
                    remove: l,
                    abbr: r,
                    toLocalDate: c
                }
            }(), ve.date = function () {
                function e(e, t) {
                    return 0 === t && 23 === e.getHours() ? (e.setHours(e.getHours() + 2), !0) : !1
                }

                function t(t, n, i) {
                    var o = t.getHours();
                    i = i || 1, n = (n - t.getDay() + 7 * i) % 7, t.setDate(t.getDate() + n), e(t, o)
                }

                function n(e, n, i) {
                    return e = new Date(e), t(e, n, i), e
                }

                function i(e) {
                    return new Date(e.getFullYear(), e.getMonth(), 1)
                }

                function o(e) {
                    var t = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                        n = i(e),
                        o = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                    return o && t.setHours(n.getHours() + o / 60), t
                }

                function r(t) {
                    return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e(t, 0), t
                }

                function a(e) {
                    return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
                }

                function s(e) {
                    return e.getTime() - r(e)
                }

                function l(e, t, n) {
                    var i, o = s(t),
                        r = s(n);
                    return e && o != r ? (t >= n && (n += v), i = s(e), o > i && (i += v), o > r && (r += v), i >= o && r >= i) : !0
                }

                function c(e, t, n) {
                    var i, o = t.getTime(),
                        r = n.getTime();
                    return o >= r && (r += v), i = e.getTime(), i >= o && r >= i
                }

                function d(t, n) {
                    var i = t.getHours();
                    return t = new Date(t), u(t, n * v), e(t, i), t
                }

                function u(e, t, n) {
                    var i, o = e.getTimezoneOffset();
                    e.setTime(e.getTime() + t), n || (i = e.getTimezoneOffset() - o, e.setTime(e.getTime() + i * g))
                }

                function h(t, n) {
                    return t = new Date(ve.date.getDate(t).getTime() + ve.date.getMilliseconds(n)), e(t, n.getHours()), t
                }

                function f() {
                    return r(new Date)
                }

                function p(e) {
                    return r(e).getTime() == f().getTime()
                }

                function m(e) {
                    var t = new Date(1980, 1, 1, 0, 0, 0);
                    return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t
                }
                var g = 6e4,
                    v = 864e5;
                return {
                    adjustDST: e,
                    dayOfWeek: n,
                    setDayOfWeek: t,
                    getDate: r,
                    isInDateRange: c,
                    isInTimeRange: l,
                    isToday: p,
                    nextDay: function (e) {
                        return d(e, 1)
                    },
                    previousDay: function (e) {
                        return d(e, -1)
                    },
                    toUtcTime: a,
                    MS_PER_DAY: v,
                    MS_PER_HOUR: 60 * g,
                    MS_PER_MINUTE: g,
                    setTime: u,
                    setHours: h,
                    addDays: d,
                    today: f,
                    toInvariantTime: m,
                    firstDayOfMonth: i,
                    lastDayOfMonth: o,
                    getMilliseconds: s
                }
            }(), ve.stripWhitespace = function (e) {
                var t, n, i;
                if (document.createNodeIterator)
                    for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function (t) {
                        return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                    }, !1); t.nextNode();) t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
                else
                    for (n = 0; e.childNodes.length > n; n++) i = e.childNodes[n], 3 != i.nodeType || /\S/.test(i.nodeValue) || (e.removeChild(i), n--), 1 == i.nodeType && ve.stripWhitespace(i)
            }, me = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 1e3 / 60)
            }, ve.animationFrame = function (e) {
                me.call(t, e)
            }, ge = [], ve.queueAnimation = function (e) {
                ge[ge.length] = e, 1 === ge.length && ve.runNextAnimation()
            }, ve.runNextAnimation = function () {
                ve.animationFrame(function () {
                    ge[0] && (ge.shift()(), ge[0] && ve.runNextAnimation())
                })
            }, ve.parseQueryStringParams = function (e) {
                for (var t = e.split("?")[1] || "", n = {}, i = t.split(/&|=/), o = i.length, r = 0; o > r; r += 2) "" !== i[r] && (n[decodeURIComponent(i[r])] = decodeURIComponent(i[r + 1]));
                return n
            }, ve.elementUnderCursor = function (e) {
                return n !== e.x.client ? document.elementFromPoint(e.x.client, e.y.client) : n
            }, ve.wheelDeltaY = function (e) {
                var t, i = e.originalEvent,
                    o = i.wheelDeltaY;
                return i.wheelDelta ? (o === n || o) && (t = i.wheelDelta) : i.detail && i.axis === i.VERTICAL_AXIS && (t = 10 * -i.detail), t
            }, ve.throttle = function (e, t) {
                var i, o, r = 0;
                return !t || 0 >= t ? e : (o = function () {
                    function o() {
                        e.apply(a, l), r = +new Date
                    }
                    var a = this,
                        s = +new Date - r,
                        l = arguments;
                    return r ? (i && clearTimeout(i), s > t ? o() : i = setTimeout(o, t - s), n) : o()
                }, o.cancel = function () {
                    clearTimeout(i)
                }, o)
            }, ve.caret = function (t, i, o) {
                var r, a, s, l, c = i !== n;
                if (o === n && (o = i), t[0] && (t = t[0]), !c || !t.disabled) {
                    try {
                        t.selectionStart !== n ? c ? (t.focus(), t.setSelectionRange(i, o)) : i = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(), r = t.createTextRange(), c ? (r.collapse(!0), r.moveStart("character", i), r.moveEnd("character", o - i), r.select()) : (a = r.duplicate(), r.moveToBookmark(document.selection.createRange().getBookmark()), a.setEndPoint("EndToStart", r), s = a.text.length, l = s + r.text.length, i = [s, l]))
                    } catch (d) {
                        i = []
                    }
                    return i
                }
            }, ve.compileMobileDirective = function (e, n) {
                var i = t.angular;
                return e.attr("data-" + ve.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")), i.element(e).injector().invoke(["$compile", function (t) {
                    t(e)(n), /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
                }]), ve.widgetInstance(e, ve.mobile.ui)
            }, ve.antiForgeryTokens = function () {
                var t = {},
                    i = e("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
                    o = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
                return e("input[name^='__RequestVerificationToken']").each(function () {
                    t[this.name] = this.value
                }), o !== n && i !== n && (t[o] = i), t
            }, ve.cycleForm = function (e) {
                function t(e) {
                    var t = ve.widgetInstance(e);
                    t && t.focus ? t.focus() : e.focus()
                }
                var n = e.find("input, .k-widget").first(),
                    i = e.find("button, .k-button").last();
                i.on("keydown", function (e) {
                    e.keyCode != ve.keys.TAB || e.shiftKey || (e.preventDefault(), t(n))
                }), n.on("keydown", function (e) {
                    e.keyCode == ve.keys.TAB && e.shiftKey && (e.preventDefault(), t(i))
                })
            },
            function () {
                function n(t, n, i, o) {
                    var r, a, s = e("<form>").attr({
                        action: i,
                        method: "POST",
                        target: o
                    }),
                        l = ve.antiForgeryTokens();
                    l.fileName = n, r = t.split(";base64,"), l.contentType = r[0].replace("data:", ""), l.base64 = r[1];
                    for (a in l) l.hasOwnProperty(a) && e("<input>").attr({
                        value: l[a],
                        name: a,
                        type: "hidden"
                    }).appendTo(s);
                    s.appendTo("body").submit().remove()
                }

                function i(e, t) {
                    var n, i, o, r, a, s = e;
                    if ("string" == typeof e) {
                        for (n = e.split(";base64,"), i = n[0], o = atob(n[1]), r = new Uint8Array(o.length), a = 0; o.length > a; a++) r[a] = o.charCodeAt(a);
                        s = new Blob([r.buffer], {
                            type: i
                        })
                    }
                    navigator.msSaveBlob(s, t)
                }

                function o(e, n) {
                    t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)), r.download = n, r.href = e;
                    var i = document.createEvent("MouseEvents");
                    i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.dispatchEvent(i), setTimeout(function () {
                        URL.revokeObjectURL(e)
                    })
                }
                var r = document.createElement("a"),
                    a = "download" in r && !ve.support.browser.edge;
                ve.saveAs = function (e) {
                    var t = n;
                    e.forceProxy || (a ? t = o : navigator.msSaveBlob && (t = i)), t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
                }
            }(), ve.proxyModelSetters = function (e) {
                var t = {};
                return Object.keys(e || {}).forEach(function (n) {
                    Object.defineProperty(t, n, {
                        get: function () {
                            return e[n]
                        },
                        set: function (t) {
                            e[n] = t, e.dirty = !0
                        }
                    })
                }), t
            }
    }(jQuery, window), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t, n) {
    (n || t)()
}),
    function (e, define) {
        define("kendo.color.min", ["kendo.core.min"], e)
    }(function () {
        ! function (e, t, n) {
            function i(e, o) {
                var r, s;
                if (null == e || "none" == e) return null;
                if (e instanceof l) return e;
                if (e = e.toLowerCase(), r = a.exec(e)) return e = "transparent" == r[1] ? new c(1, 1, 1, 0) : i(f.namedColors[r[1]], o), e.match = [r[1]], e;
                if ((r = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(e)) ? s = new d(n(r[1], 16), n(r[2], 16), n(r[3], 16), 1) : (r = /^#?([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(e)) ? s = new d(n(r[1] + r[1], 16), n(r[2] + r[2], 16), n(r[3] + r[3], 16), 1) : (r = /^rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/.exec(e)) ? s = new d(n(r[1], 10), n(r[2], 10), n(r[3], 10), 1) : (r = /^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9.]+)\s*\)/.exec(e)) ? s = new d(n(r[1], 10), n(r[2], 10), n(r[3], 10), t(r[4])) : (r = /^rgb\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*\)/.exec(e)) ? s = new c(t(r[1]) / 100, t(r[2]) / 100, t(r[3]) / 100, 1) : (r = /^rgba\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9.]+)\s*\)/.exec(e)) && (s = new c(t(r[1]) / 100, t(r[2]) / 100, t(r[3]) / 100, t(r[4]))), s) s.match = r;
                else if (!o) throw Error("Cannot parse color: " + e);
                return s
            }

            function o(e, t, n) {
                for (n || (n = "0"), e = e.toString(16); t > e.length;) e = "0" + e;
                return e
            }

            function r(e, t, n) {
                return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? e + 6 * (t - e) * n : .5 > n ? t : 2 / 3 > n ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var a, s, l, c, d, u, h, f = function (e) {
                var t, n, i, o, r, a = this,
                    s = f.formats;
                if (1 === arguments.length)
                    for (e = a.resolveColor(e), o = 0; s.length > o; o++) t = s[o].re, n = s[o].process, i = t.exec(e), i && (r = n(i), a.r = r[0], a.g = r[1], a.b = r[2]);
                else a.r = arguments[0], a.g = arguments[1], a.b = arguments[2];
                a.r = a.normalizeByte(a.r), a.g = a.normalizeByte(a.g), a.b = a.normalizeByte(a.b)
            };
            f.prototype = {
                toHex: function () {
                    var e = this,
                        t = e.padDigit,
                        n = e.r.toString(16),
                        i = e.g.toString(16),
                        o = e.b.toString(16);
                    return "#" + t(n) + t(i) + t(o)
                },
                resolveColor: function (e) {
                    return e = e || "black", "#" == e.charAt(0) && (e = e.substr(1, 6)), e = e.replace(/ /g, ""), e = e.toLowerCase(), e = f.namedColors[e] || e
                },
                normalizeByte: function (e) {
                    return 0 > e || isNaN(e) ? 0 : e > 255 ? 255 : e
                },
                padDigit: function (e) {
                    return 1 === e.length ? "0" + e : e
                },
                brightness: function (e) {
                    var t = this,
                        n = Math.round;
                    return t.r = n(t.normalizeByte(t.r * e)), t.g = n(t.normalizeByte(t.g * e)), t.b = n(t.normalizeByte(t.b * e)), t
                },
                percBrightness: function () {
                    var e = this;
                    return Math.sqrt(.241 * e.r * e.r + .691 * e.g * e.g + .068 * e.b * e.b)
                }
            }, f.formats = [{
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                process: function (e) {
                    return [n(e[1], 10), n(e[2], 10), n(e[3], 10)]
                }
            }, {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                process: function (e) {
                    return [n(e[1], 16), n(e[2], 16), n(e[3], 16)]
                }
            }, {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                process: function (e) {
                    return [n(e[1] + e[1], 16), n(e[2] + e[2], 16), n(e[3] + e[3], 16)];
                }
            }], f.namedColors = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgrey: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                grey: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "778899",
                lightslategrey: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32"
            }, a = ["transparent"];
            for (s in f.namedColors) f.namedColors.hasOwnProperty(s) && a.push(s);
            a = RegExp("^(" + a.join("|") + ")(\\W|$)", "i"), l = kendo.Class.extend({
                toHSV: function () {
                    return this
                },
                toRGB: function () {
                    return this
                },
                toHex: function () {
                    return this.toBytes().toHex()
                },
                toBytes: function () {
                    return this
                },
                toCss: function () {
                    return "#" + this.toHex()
                },
                toCssRgba: function () {
                    var e = this.toBytes();
                    return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + t((+this.a).toFixed(3)) + ")"
                },
                toDisplay: function () {
                    return kendo.support.browser.msie && kendo.support.browser.version < 9 ? this.toCss() : this.toCssRgba()
                },
                equals: function (e) {
                    return e === this || null !== e && this.toCssRgba() == i(e).toCssRgba()
                },
                diff: function (e) {
                    if (null == e) return NaN;
                    var t = this.toBytes();
                    return e = e.toBytes(), Math.sqrt(Math.pow(.3 * (t.r - e.r), 2) + Math.pow(.59 * (t.g - e.g), 2) + Math.pow(.11 * (t.b - e.b), 2))
                },
                clone: function () {
                    var e = this.toBytes();
                    return e === this && (e = new d(e.r, e.g, e.b, e.a)), e
                }
            }), c = l.extend({
                init: function (e, t, n, i) {
                    this.r = e, this.g = t, this.b = n, this.a = i
                },
                toHSV: function () {
                    var e, t, n = this.r,
                        i = this.g,
                        o = this.b,
                        r = Math.min(n, i, o),
                        a = Math.max(n, i, o),
                        s = a,
                        l = a - r;
                    return 0 === l ? new u(0, 0, s, this.a) : (0 !== a ? (t = l / a, e = n == a ? (i - o) / l : i == a ? 2 + (o - n) / l : 4 + (n - i) / l, e *= 60, 0 > e && (e += 360)) : (t = 0, e = -1), new u(e, t, s, this.a))
                },
                toHSL: function () {
                    var e, t, n, i = this.r,
                        o = this.g,
                        r = this.b,
                        a = Math.max(i, o, r),
                        s = Math.min(i, o, r),
                        l = (a + s) / 2;
                    if (a == s) e = t = 0;
                    else {
                        switch (n = a - s, t = l > .5 ? n / (2 - a - s) : n / (a + s), a) {
                            case i:
                                e = (o - r) / n + (r > o ? 6 : 0);
                                break;
                            case o:
                                e = (r - i) / n + 2;
                                break;
                            case r:
                                e = (i - o) / n + 4
                        }
                        e *= 60, t *= 100, l *= 100
                    }
                    return new h(e, t, l, this.a)
                },
                toBytes: function () {
                    return new d(255 * this.r, 255 * this.g, 255 * this.b, this.a)
                }
            }), d = c.extend({
                init: function (e, t, n, i) {
                    this.r = Math.round(e), this.g = Math.round(t), this.b = Math.round(n), this.a = i
                },
                toRGB: function () {
                    return new c(this.r / 255, this.g / 255, this.b / 255, this.a)
                },
                toHSV: function () {
                    return this.toRGB().toHSV()
                },
                toHSL: function () {
                    return this.toRGB().toHSL()
                },
                toHex: function () {
                    return o(this.r, 2) + o(this.g, 2) + o(this.b, 2)
                },
                toBytes: function () {
                    return this
                }
            }), u = l.extend({
                init: function (e, t, n, i) {
                    this.h = e, this.s = t, this.v = n, this.a = i
                },
                toRGB: function () {
                    var e, t, n, i, o, r, a, s, l = this.h,
                        d = this.s,
                        u = this.v;
                    if (0 === d) t = n = i = u;
                    else switch (l /= 60, e = Math.floor(l), o = l - e, r = u * (1 - d), a = u * (1 - d * o), s = u * (1 - d * (1 - o)), e) {
                        case 0:
                            t = u, n = s, i = r;
                            break;
                        case 1:
                            t = a, n = u, i = r;
                            break;
                        case 2:
                            t = r, n = u, i = s;
                            break;
                        case 3:
                            t = r, n = a, i = u;
                            break;
                        case 4:
                            t = s, n = r, i = u;
                            break;
                        default:
                            t = u, n = r, i = a
                    }
                    return new c(t, n, i, this.a)
                },
                toHSL: function () {
                    return this.toRGB().toHSL()
                },
                toBytes: function () {
                    return this.toRGB().toBytes()
                }
            }), h = l.extend({
                init: function (e, t, n, i) {
                    this.h = e, this.s = t, this.l = n, this.a = i
                },
                toRGB: function () {
                    var e, t, n, i, o, a = this.h,
                        s = this.s,
                        l = this.l;
                    return 0 === s ? e = t = n = l : (a /= 360, s /= 100, l /= 100, i = .5 > l ? l * (1 + s) : l + s - l * s, o = 2 * l - i, e = r(o, i, a + 1 / 3), t = r(o, i, a), n = r(o, i, a - 1 / 3)), new c(e, t, n, this.a)
                },
                toHSV: function () {
                    return this.toRGB().toHSV()
                },
                toBytes: function () {
                    return this.toRGB().toBytes()
                }
            }), f.fromBytes = function (e, t, n, i) {
                return new d(e, t, n, null != i ? i : 1)
            }, f.fromRGB = function (e, t, n, i) {
                return new c(e, t, n, null != i ? i : 1)
            }, f.fromHSV = function (e, t, n, i) {
                return new u(e, t, n, null != i ? i : 1)
            }, f.fromHSL = function (e, t, n, i) {
                return new h(e, t, n, null != i ? i : 1)
            }, kendo.Color = f, kendo.parseColor = i
        }(window.kendo.jQuery, parseFloat, parseInt)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("util/main.min", ["kendo.core.min"], e)
    }(function () {
        return function () {
            function e(e) {
                return typeof e !== N
            }

            function t(e, t) {
                var i = n(t);
                return F.round(e * i) / i
            }

            function n(e) {
                return e ? F.pow(10, e) : 1
            }

            function i(e, t, n) {
                return F.max(F.min(e, n), t)
            }

            function o(e) {
                return e * B
            }

            function r(e) {
                return e / B
            }

            function a(e) {
                return "number" == typeof e && !isNaN(e)
            }

            function s(t, n) {
                return e(t) ? t : n
            }

            function l(e) {
                return e * e
            }

            function c(e) {
                var t, n = [];
                for (t in e) n.push(t + e[t]);
                return n.sort().join("")
            }

            function d(e) {
                var t, n = 2166136261;
                for (t = 0; e.length > t; ++t) n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24), n ^= e.charCodeAt(t);
                return n >>> 0
            }

            function u(e) {
                return d(c(e))
            }

            function h(e) {
                var t, n = e.length,
                    i = L,
                    o = H;
                for (t = 0; n > t; t++) o = F.max(o, e[t]), i = F.min(i, e[t]);
                return {
                    min: i,
                    max: o
                }
            }

            function f(e) {
                return h(e).min
            }

            function p(e) {
                return h(e).max
            }

            function m(e) {
                return v(e).min
            }

            function g(e) {
                return v(e).max
            }

            function v(e) {
                var t, n, i, o = L,
                    r = H;
                for (t = 0, n = e.length; n > t; t++) i = e[t], null !== i && isFinite(i) && (o = F.min(o, i), r = F.max(r, i));
                return {
                    min: o === L ? void 0 : o,
                    max: r === H ? void 0 : r
                }
            }

            function _(e) {
                return e ? e[e.length - 1] : void 0
            }

            function b(e, t) {
                return e.push.apply(e, t), e
            }

            function w(e) {
                return z.template(e, {
                    useWithBlock: !1,
                    paramName: "d"
                })
            }

            function y(t, n) {
                return e(n) && null !== n ? " " + t + "='" + n + "' " : ""
            }

            function k(e) {
                var t, n = "";
                for (t = 0; e.length > t; t++) n += y(e[t][0], e[t][1]);
                return n
            }

            function x(t) {
                var n, i, o = "";
                for (n = 0; t.length > n; n++) i = t[n][1], e(i) && (o += t[n][0] + ":" + i + ";");
                return "" !== o ? o : void 0
            }

            function C(e) {
                return "string" != typeof e && (e += "px"), e
            }

            function S(e) {
                var t, n, i = [];
                if (e)
                    for (t = z.toHyphens(e).split("-"), n = 0; t.length > n; n++) i.push("k-pos-" + t[n]);
                return i.join(" ")
            }

            function T(t) {
                return "" === t || null === t || "none" === t || "transparent" === t || !e(t)
            }

            function D(e) {
                for (var t = {
                    1: "i",
                    10: "x",
                    100: "c",
                    2: "ii",
                    20: "xx",
                    200: "cc",
                    3: "iii",
                    30: "xxx",
                    300: "ccc",
                    4: "iv",
                    40: "xl",
                    400: "cd",
                    5: "v",
                    50: "l",
                    500: "d",
                    6: "vi",
                    60: "lx",
                    600: "dc",
                    7: "vii",
                    70: "lxx",
                    700: "dcc",
                    8: "viii",
                    80: "lxxx",
                    800: "dccc",
                    9: "ix",
                    90: "xc",
                    900: "cm",
                    1e3: "m"
                }, n = [1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], i = ""; e > 0;) n[0] > e ? n.shift() : (i += t[n[0]], e -= n[0]);
                return i
            }

            function A(e) {
                var t, n, i, o, r;
                for (e = e.toLowerCase(), t = {
                    i: 1,
                    v: 5,
                    x: 10,
                    l: 50,
                    c: 100,
                    d: 500,
                    m: 1e3
                }, n = 0, i = 0, o = 0; e.length > o; ++o) {
                    if (r = t[e.charAt(o)], !r) return null;
                    n += r, r > i && (n -= 2 * i), i = r
                }
                return n
            }

            function E(e) {
                var t = Object.create(null);
                return function () {
                    var n, i = "";
                    for (n = arguments.length; --n >= 0;) i += ":" + arguments[n];
                    return i in t ? t[i] : e.apply(this, arguments)
                }
            }

            function I(e) {
                for (var t, n, i = [], o = 0, r = e.length; r > o;) t = e.charCodeAt(o++), t >= 55296 && 56319 >= t && r > o ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), o--)) : i.push(t);
                return i
            }

            function R(e) {
                return e.map(function (e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += String.fromCharCode(e)
                }).join("")
            }

            function M(e, t) {
                function n(e, n) {
                    for (var i = [], o = 0, r = 0, a = 0; e.length > o && n.length > r;) t(e[o], n[r]) <= 0 ? i[a++] = e[o++] : i[a++] = n[r++];
                    return e.length > o && i.push.apply(i, e.slice(o)), n.length > r && i.push.apply(i, n.slice(r)), i
                }
                return 2 > e.length ? e.slice() : function i(e) {
                    var t, o, r;
                    return 1 >= e.length ? e : (t = Math.floor(e.length / 2), o = e.slice(0, t), r = e.slice(t), o = i(o), r = i(r), n(o, r))
                }(e)
            }
            var F = Math,
                z = window.kendo,
                P = z.deepExtend,
                B = F.PI / 180,
                L = Number.MAX_VALUE,
                H = -Number.MAX_VALUE,
                N = "undefined",
                O = Date.now;
            O || (O = function () {
                return (new Date).getTime()
            }), P(z, {
                util: {
                    MAX_NUM: L,
                    MIN_NUM: H,
                    append: b,
                    arrayLimits: h,
                    arrayMin: f,
                    arrayMax: p,
                    defined: e,
                    deg: r,
                    hashKey: d,
                    hashObject: u,
                    isNumber: a,
                    isTransparent: T,
                    last: _,
                    limitValue: i,
                    now: O,
                    objectKey: c,
                    round: t,
                    rad: o,
                    renderAttr: y,
                    renderAllAttr: k,
                    renderPos: S,
                    renderSize: C,
                    renderStyle: x,
                    renderTemplate: w,
                    sparseArrayLimits: v,
                    sparseArrayMin: m,
                    sparseArrayMax: g,
                    sqr: l,
                    valueOrDefault: s,
                    romanToArabic: A,
                    arabicToRoman: D,
                    memoize: E,
                    ucs2encode: R,
                    ucs2decode: I,
                    mergeSort: M
                }
            }), z.drawing.util = z.util, z.dataviz.util = z.util
        }(), window.kendo
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("util/text-metrics.min", ["kendo.core.min", "util/main.min"], e)
    }(function () {
        ! function (e) {
            function t() {
                return {
                    width: 0,
                    height: 0,
                    baseline: 0
                }
            }

            function n(e, t, n) {
                return u.current.measure(e, t, n)
            }

            function i(e, t) {
                var n = [];
                if (e.length > 0 && document.fonts) {
                    try {
                        n = e.map(function (e) {
                            return document.fonts.load(e)
                        })
                    } catch (i) {
                        r.logToConsole(i)
                    }
                    Promise.all(n).then(t, t)
                } else t()
            }
            var o = document,
                r = window.kendo,
                a = r.Class,
                s = r.util,
                l = s.defined,
                c = a.extend({
                    init: function (e) {
                        this._size = e, this._length = 0, this._map = {}
                    },
                    put: function (e, t) {
                        var n = this,
                            i = n._map,
                            o = {
                                key: e,
                                value: t
                            };
                        i[e] = o, n._head ? (n._tail.newer = o, o.older = n._tail, n._tail = o) : n._head = n._tail = o, n._length >= n._size ? (i[n._head.key] = null, n._head = n._head.newer, n._head.older = null) : n._length++
                    },
                    get: function (e) {
                        var t = this,
                            n = t._map[e];
                        return n ? (n === t._head && n !== t._tail && (t._head = n.newer, t._head.older = null), n !== t._tail && (n.older && (n.older.newer = n.newer, n.newer.older = n.older), n.older = t._tail, n.newer = null, t._tail.newer = n, t._tail = n), n.value) : void 0
                    }
                }),
                d = e("<div style='position: absolute !important; top: -4000px !important; width: auto !important; height: auto !important;padding: 0 !important; margin: 0 !important; border: 0 !important;line-height: normal !important; visibility: hidden !important; white-space: nowrap!important;' />")[0],
                u = a.extend({
                    init: function (e) {
                        this._cache = new c(1e3), this._initOptions(e)
                    },
                    options: {
                        baselineMarkerSize: 1
                    },
                    measure: function (n, i, r) {
                        var a, c, u, h, f, p, m, g;
                        if (!n) return t();
                        if (a = s.objectKey(i), c = s.hashKey(n + a), u = this._cache.get(c), u) return u;
                        h = t(), f = r ? r : d, p = this._baselineMarker().cloneNode(!1);
                        for (m in i) g = i[m], l(g) && (f.style[m] = g);
                        return e(f).text(n), f.appendChild(p), o.body.appendChild(f), (n + "").length && (h.width = f.offsetWidth - this.options.baselineMarkerSize, h.height = f.offsetHeight, h.baseline = p.offsetTop + this.options.baselineMarkerSize), h.width > 0 && h.height > 0 && this._cache.put(c, h), f.parentNode.removeChild(f), h
                    },
                    _baselineMarker: function () {
                        return e("<div class='k-baseline-marker' style='display: inline-block; vertical-align: baseline;width: " + this.options.baselineMarkerSize + "px; height: " + this.options.baselineMarkerSize + "px;overflow: hidden;' />")[0]
                    }
                });
            u.current = new u, r.util.TextMetrics = u, r.util.LRUCache = c, r.util.loadFonts = i, r.util.measureText = n
        }(window.kendo.jQuery)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("util/base64.min", ["util/main.min"], e)
    }(function () {
        return function () {
            function e(e) {
                var n, i, o, a, s, l, c, d = "",
                    u = 0;
                for (e = t(e); e.length > u;) n = e.charCodeAt(u++), i = e.charCodeAt(u++), o = e.charCodeAt(u++), a = n >> 2, s = (3 & n) << 4 | i >> 4, l = (15 & i) << 2 | o >> 6, c = 63 & o, isNaN(i) ? l = c = 64 : isNaN(o) && (c = 64), d = d + r.charAt(a) + r.charAt(s) + r.charAt(l) + r.charAt(c);
                return d
            }

            function t(e) {
                var t, n, i = "";
                for (t = 0; e.length > t; t++) n = e.charCodeAt(t), 128 > n ? i += o(n) : 2048 > n ? (i += o(192 | n >>> 6), i += o(128 | 63 & n)) : 65536 > n && (i += o(224 | n >>> 12), i += o(128 | n >>> 6 & 63), i += o(128 | 63 & n));
                return i
            }
            var n = window.kendo,
                i = n.deepExtend,
                o = String.fromCharCode,
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            i(n.util, {
                encodeBase64: e,
                encodeUTF8: t
            })
        }(), window.kendo
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("mixins/observers.min", ["kendo.core.min"], e)
    }(function () {
        return function (e) {
            var t = Math,
                n = window.kendo,
                i = n.deepExtend,
                o = e.inArray,
                r = {
                    observers: function () {
                        return this._observers = this._observers || []
                    },
                    addObserver: function (e) {
                        return this._observers ? this._observers.push(e) : this._observers = [e], this
                    },
                    removeObserver: function (e) {
                        var t = this.observers(),
                            n = o(e, t);
                        return -1 != n && t.splice(n, 1), this
                    },
                    trigger: function (e, t) {
                        var n, i, o = this._observers;
                        if (o && !this._suspended)
                            for (i = 0; o.length > i; i++) n = o[i], n[e] && n[e](t);
                        return this
                    },
                    optionsChange: function (e) {
                        e = e || {}, e.element = this, this.trigger("optionsChange", e)
                    },
                    geometryChange: function () {
                        this.trigger("geometryChange", {
                            element: this
                        })
                    },
                    suspend: function () {
                        return this._suspended = (this._suspended || 0) + 1, this
                    },
                    resume: function () {
                        return this._suspended = t.max((this._suspended || 0) - 1, 0), this
                    },
                    _observerField: function (e, t) {
                        this[e] && this[e].removeObserver(this), this[e] = t, t.addObserver(this)
                    }
                };
            i(n, {
                mixins: {
                    ObserversMixin: r
                }
            })
        }(window.kendo.jQuery), window.kendo
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("drawing/geometry.min", ["util/main.min", "mixins/observers.min"], e)
    }(function () {
        return function () {
            function e(e) {
                return null === e ? null : e instanceof D ? e : new D(e)
            }

            function t(e) {
                return e && R.isFunction(e.matrix) ? e.matrix() : e
            }

            function n(e, t, n, i) {
                var o = 0,
                    r = 0;
                return i && (o = E.atan2(i.c * n, i.a * t), 0 !== i.b && (r = E.atan2(i.d * n, i.b * t))), {
                    x: o,
                    y: r
                }
            }

            function i(e, t) {
                for (; t > e;) e += 90;
                return e
            }

            function o(e, t) {
                var n, i, o;
                for (n = 0; t.length > n; n++) i = t[n], o = i.charAt(0).toUpperCase() + i.substring(1, i.length), e["set" + o] = r(i), e["get" + o] = a(i)
            }

            function r(e) {
                return function (t) {
                    return this[e] !== t && (this[e] = t, this.geometryChange()), this
                }
            }

            function a(e) {
                return function () {
                    return this[e]
                }
            }

            function s(e, t, n) {
                e > t && (t += 360);
                var i = E.abs(t - e);
                return n || (i = 360 - i), i
            }

            function l(e, t, n, i, o, r) {
                var a = N((o - e) / n, 3),
                    s = N((r - t) / i, 3);
                return N(H(E.atan2(s, a)))
            }

            function c(e, t, n, i, o, r, a, c) {
                var d, u, h, f, p, m, g, v, _, b, w, y, k, x, C, S, T, D;
                if (t !== i) _ = n - e, b = i - t, w = I(o, 2), y = I(r, 2), k = (y * _ * (e + n) + w * b * (t + i)) / (2 * w * b), x = k - i, C = -(_ * y) / (w * b), p = 1 / w + I(C, 2) / y, m = 2 * (C * x / y - n / w), g = I(n, 2) / w + I(x, 2) / y - 1, v = E.sqrt(I(m, 2) - 4 * p * g), d = (-m - v) / (2 * p), u = k + C * d, h = (-m + v) / (2 * p), f = k + C * h;
                else {
                    if (e === n) return !1;
                    m = -2 * i, g = I((n - e) * r / (2 * o), 2) + I(i, 2) - I(r, 2), v = E.sqrt(I(m, 2) - 4 * g), d = h = (e + n) / 2, u = (-m - v) / 2, f = (-m + v) / 2
                }
                return S = l(d, u, o, r, e, t), T = l(d, u, o, r, n, i), D = s(S, T, c), (a && 180 >= D || !a && D > 180) && (d = h, u = f, S = l(d, u, o, r, e, t), T = l(d, u, o, r, n, i)), {
                    center: new j(d, u),
                    startAngle: S,
                    endAngle: T
                }
            }

            function d(e, t, n, i) {
                if (0 === e) return y(t, n, i);
                var o, r, a, s, l, c, d, u = (3 * e * n - E.pow(t, 2)) / (3 * E.pow(e, 2)),
                    h = (2 * E.pow(t, 3) - 9 * e * t * n + 27 * E.pow(e, 2) * i) / (27 * E.pow(e, 3)),
                    f = E.pow(u / 3, 3) + E.pow(h / 2, 2),
                    p = new A(0, 1),
                    m = -t / (3 * e),
                    g = [];
                return 0 > f ? (o = new A(-h / 2, E.sqrt(-f)).nthRoot(3), r = new A(-h / 2, -E.sqrt(-f)).nthRoot(3)) : (o = -h / 2 + E.sqrt(f), o = new A(_(o) * E.pow(E.abs(o), 1 / 3)), r = -h / 2 - E.sqrt(f), r = new A(_(r) * E.pow(E.abs(r), 1 / 3))), a = o.add(r), c = o.add(r).multiplyConstant(-0.5), d = o.add(r.negate()).multiplyConstant(E.sqrt(3) / 2), s = c.add(p.multiply(d)), l = c.add(p.negate().multiply(d)), a.isReal() && g.push(N(a.real + m, U)), s.isReal() && g.push(N(s.real + m, U)), l.isReal() && g.push(N(l.real + m, U)), g
            }

            function u(e, t) {
                return [-e[0][t] + 3 * e[1][t] - 3 * e[2][t] + e[3][t], 3 * (e[0][t] - 2 * e[1][t] + e[2][t]), 3 * (-e[0][t] + e[1][t]), e[0][t]]
            }

            function h(e, t, n) {
                var i = 1 - e;
                return E.pow(i, 3) * n[0][t] + 3 * E.pow(i, 2) * e * n[1][t] + 3 * E.pow(e, 2) * i * n[2][t] + E.pow(e, 3) * n[3][t]
            }

            function f(e, t, n) {
                var i, o, r, a = u(e, "x"),
                    s = d(a[0], a[1], a[2], a[3] - t.x),
                    l = 0;
                for (r = 0; s.length > r; r++) i = h(s[r], "y", e), o = g(i, t.y) || i > t.y, o && ((0 === s[r] || 1 === s[r]) && n.bottomRight().x > t.x || s[r] > 0 && 1 > s[r]) && l++;
                return l
            }

            function p(e, t, n) {
                var i, o, r, a, s, l;
                return e.x != t.x && (o = E.min(e.x, t.x), r = E.max(e.x, t.x), a = E.min(e.y, t.y), s = E.max(e.y, t.y), l = n.x >= o && r > n.x, i = a == s ? a >= n.y && l : l && (s - a) * ((e.x - t.x) * (e.y - t.y) > 0 ? n.x - o : r - n.x) / (r - o) + a - n.y >= 0), i ? 1 : 0
            }

            function m(e, t, n, i) {
                var o = t.x - e.x,
                    r = i.x - n.x,
                    a = t.y - e.y,
                    s = i.y - n.y,
                    l = e.x - n.x,
                    c = e.y - n.y,
                    d = o * s - r * a,
                    u = (o * c - a * l) / d,
                    h = (r * c - s * l) / d;
                return u >= 0 && 1 >= u && h >= 0 && 1 >= h ? new j(e.x + h * o, e.y + h * a) : void 0
            }

            function g(e, t, n) {
                return 0 === N(E.abs(e - t), n || U)
            }

            function v(e, t, n) {
                return t > e || g(e, t, n)
            }

            function _(e) {
                return 0 > e ? -1 : 1
            }

            function b(t, n, i) {
                var o = P.deg(E.atan2(n.y - t.y, n.x - t.x)),
                    r = i.transformCopy(e().rotate(-o, t));
                return t.x > r.x
            }

            function w(e, t, n, i, o) {
                var r, a, s = u(e, i),
                    l = d(s[0], s[1], s[2], s[3] - t[i]);
                for (a = 0; l.length > a; a++)
                    if (l[a] >= 0 && 1 >= l[a] && (r = h(l[a], n, e), E.abs(r - t[n]) <= o)) return !0
            }

            function y(e, t, n) {
                var i = E.sqrt(E.pow(t, 2) - 4 * e * n);
                return [(-t + i) / (2 * e), (-t - i) / (2 * e)]
            }
            var k, x, C, S, T, D, A, E = Math,
                I = E.pow,
                R = window.kendo,
                M = R.Class,
                F = R.deepExtend,
                z = R.mixins.ObserversMixin,
                P = R.util,
                B = P.defined,
                L = P.rad,
                H = P.deg,
                N = P.round,
                O = E.PI / 2,
                V = P.MIN_NUM,
                W = P.MAX_NUM,
                U = 10,
                j = M.extend({
                    init: function (e, t) {
                        this.x = e || 0, this.y = t || 0
                    },
                    equals: function (e) {
                        return e && e.x === this.x && e.y === this.y
                    },
                    clone: function () {
                        return new j(this.x, this.y)
                    },
                    rotate: function (t, n) {
                        return this.transform(e().rotate(t, n))
                    },
                    translate: function (e, t) {
                        return this.x += e, this.y += t, this.geometryChange(), this
                    },
                    translateWith: function (e) {
                        return this.translate(e.x, e.y)
                    },
                    move: function (e, t) {
                        return this.x = this.y = 0, this.translate(e, t)
                    },
                    scale: function (e, t) {
                        return B(t) || (t = e), this.x *= e, this.y *= t, this.geometryChange(), this
                    },
                    scaleCopy: function (e, t) {
                        return this.clone().scale(e, t)
                    },
                    transform: function (e) {
                        var n = t(e),
                            i = this.x,
                            o = this.y;
                        return this.x = n.a * i + n.c * o + n.e, this.y = n.b * i + n.d * o + n.f, this.geometryChange(), this
                    },
                    transformCopy: function (e) {
                        var t = this.clone();
                        return e && t.transform(e), t
                    },
                    distanceTo: function (e) {
                        var t = this.x - e.x,
                            n = this.y - e.y;
                        return E.sqrt(t * t + n * n)
                    },
                    round: function (e) {
                        return this.x = N(this.x, e), this.y = N(this.y, e), this.geometryChange(), this
                    },
                    toArray: function (e) {
                        var t = B(e),
                            n = t ? N(this.x, e) : this.x,
                            i = t ? N(this.y, e) : this.y;
                        return [n, i]
                    }
                });
            o(j.fn, ["x", "y"]), F(j.fn, z), j.fn.toString = function (e, t) {
                var n = this.x,
                    i = this.y;
                return B(e) && (n = N(n, e), i = N(i, e)), t = t || " ", n + t + i
            }, j.create = function (e, t) {
                return B(e) ? e instanceof j ? e : 1 === arguments.length && 2 === e.length ? new j(e[0], e[1]) : new j(e, t) : void 0
            }, j.min = function () {
                var e, t, n = P.MAX_NUM,
                    i = P.MAX_NUM;
                for (e = 0; arguments.length > e; e++) t = arguments[e], n = E.min(t.x, n), i = E.min(t.y, i);
                return new j(n, i)
            }, j.max = function () {
                var e, t, n = P.MIN_NUM,
                    i = P.MIN_NUM;
                for (e = 0; arguments.length > e; e++) t = arguments[e], n = E.max(t.x, n), i = E.max(t.y, i);
                return new j(n, i)
            }, j.minPoint = function () {
                return new j(V, V)
            }, j.maxPoint = function () {
                return new j(W, W)
            }, j.ZERO = new j(0, 0), k = M.extend({
                init: function (e, t) {
                    this.width = e || 0, this.height = t || 0
                },
                equals: function (e) {
                    return e && e.width === this.width && e.height === this.height
                },
                clone: function () {
                    return new k(this.width, this.height)
                },
                toArray: function (e) {
                    var t = B(e),
                        n = t ? N(this.width, e) : this.width,
                        i = t ? N(this.height, e) : this.height;
                    return [n, i]
                }
            }), o(k.fn, ["width", "height"]), F(k.fn, z), k.create = function (e, t) {
                return B(e) ? e instanceof k ? e : 1 === arguments.length && 2 === e.length ? new k(e[0], e[1]) : new k(e, t) : void 0
            }, k.ZERO = new k(0, 0), x = M.extend({
                init: function (e, t) {
                    this.setOrigin(e || new j), this.setSize(t || new k)
                },
                clone: function () {
                    return new x(this.origin.clone(), this.size.clone())
                },
                equals: function (e) {
                    return e && e.origin.equals(this.origin) && e.size.equals(this.size)
                },
                setOrigin: function (e) {
                    return this._observerField("origin", j.create(e)), this.geometryChange(), this
                },
                getOrigin: function () {
                    return this.origin
                },
                setSize: function (e) {
                    return this._observerField("size", k.create(e)), this.geometryChange(), this
                },
                getSize: function () {
                    return this.size
                },
                width: function () {
                    return this.size.width
                },
                height: function () {
                    return this.size.height
                },
                topLeft: function () {
                    return this.origin.clone()
                },
                bottomRight: function () {
                    return this.origin.clone().translate(this.width(), this.height())
                },
                topRight: function () {
                    return this.origin.clone().translate(this.width(), 0)
                },
                bottomLeft: function () {
                    return this.origin.clone().translate(0, this.height())
                },
                center: function () {
                    return this.origin.clone().translate(this.width() / 2, this.height() / 2)
                },
                bbox: function (e) {
                    var t = this.topLeft().transformCopy(e),
                        n = this.topRight().transformCopy(e),
                        i = this.bottomRight().transformCopy(e),
                        o = this.bottomLeft().transformCopy(e);
                    return x.fromPoints(t, n, i, o)
                },
                transformCopy: function (e) {
                    return x.fromPoints(this.topLeft().transform(e), this.bottomRight().transform(e))
                },
                expand: function (e, t) {
                    return B(t) || (t = e), this.size.width += 2 * e, this.size.height += 2 * t, this.origin.translate(-e, -t), this
                },
                expandCopy: function (e, t) {
                    return this.clone().expand(e, t)
                },
                containsPoint: function (e) {
                    var t = this.origin,
                        n = this.bottomRight();
                    return !(t.x > e.x || t.y > e.y || e.x > n.x || e.y > n.y)
                },
                _isOnPath: function (e, t) {
                    var n = this.expandCopy(t, t),
                        i = this.expandCopy(-t, -t);
                    return n.containsPoint(e) && !i.containsPoint(e)
                }
            }), F(x.fn, z), x.fromPoints = function () {
                var e = j.min.apply(this, arguments),
                    t = j.max.apply(this, arguments),
                    n = new k(t.x - e.x, t.y - e.y);
                return new x(e, n)
            }, x.union = function (e, t) {
                return x.fromPoints(j.min(e.topLeft(), t.topLeft()), j.max(e.bottomRight(), t.bottomRight()))
            }, x.intersect = function (e, t) {
                return e = {
                    left: e.topLeft().x,
                    top: e.topLeft().y,
                    right: e.bottomRight().x,
                    bottom: e.bottomRight().y
                }, t = {
                    left: t.topLeft().x,
                    top: t.topLeft().y,
                    right: t.bottomRight().x,
                    bottom: t.bottomRight().y
                }, t.right >= e.left && e.right >= t.left && t.bottom >= e.top && e.bottom >= t.top ? x.fromPoints(new j(E.max(e.left, t.left), E.max(e.top, t.top)), new j(E.min(e.right, t.right), E.min(e.bottom, t.bottom))) : void 0
            }, C = M.extend({
                init: function (e, t) {
                    this.setCenter(e || new j), this.setRadius(t || 0)
                },
                setCenter: function (e) {
                    return this._observerField("center", j.create(e)), this.geometryChange(), this
                },
                getCenter: function () {
                    return this.center
                },
                equals: function (e) {
                    return e && e.center.equals(this.center) && e.radius === this.radius
                },
                clone: function () {
                    return new C(this.center.clone(), this.radius)
                },
                pointAt: function (e) {
                    return this._pointAt(L(e))
                },
                bbox: function (e) {
                    var t, i, o, r, a = j.maxPoint(),
                        s = j.minPoint(),
                        l = n(this.center, this.radius, this.radius, e);
                    for (t = 0; 4 > t; t++) i = this._pointAt(l.x + t * O).transformCopy(e), o = this._pointAt(l.y + t * O).transformCopy(e), r = new j(i.x, o.y), a = j.min(a, r), s = j.max(s, r);
                    return x.fromPoints(a, s)
                },
                _pointAt: function (e) {
                    var t = this.center,
                        n = this.radius;
                    return new j(t.x - n * E.cos(e), t.y - n * E.sin(e))
                },
                containsPoint: function (e) {
                    var t = this.center,
                        n = E.pow(e.x - t.x, 2) + E.pow(e.y - t.y, 2) <= E.pow(this.radius, 2);
                    return n
                },
                _isOnPath: function (e, t) {
                    var n = this.center,
                        i = this.radius,
                        o = n.distanceTo(e);
                    return o >= i - t && i + t >= o
                }
            }), o(C.fn, ["radius"]), F(C.fn, z), S = M.extend({
                init: function (e, t) {
                    this.setCenter(e || new j), t = t || {}, this.radiusX = t.radiusX, this.radiusY = t.radiusY || t.radiusX, this.startAngle = t.startAngle, this.endAngle = t.endAngle, this.anticlockwise = t.anticlockwise || !1
                },
                clone: function () {
                    return new S(this.center, {
                        radiusX: this.radiusX,
                        radiusY: this.radiusY,
                        startAngle: this.startAngle,
                        endAngle: this.endAngle,
                        anticlockwise: this.anticlockwise
                    })
                },
                setCenter: function (e) {
                    return this._observerField("center", j.create(e)), this.geometryChange(), this
                },
                getCenter: function () {
                    return this.center
                },
                MAX_INTERVAL: 45,
                pointAt: function (e) {
                    var t = this.center,
                        n = L(e);
                    return new j(t.x + this.radiusX * E.cos(n), t.y + this.radiusY * E.sin(n))
                },
                curvePoints: function () {
                    var e, t, n, i = this.startAngle,
                        o = this.anticlockwise ? -1 : 1,
                        r = [this.pointAt(i)],
                        a = i,
                        s = this._arcInterval(),
                        l = s.endAngle - s.startAngle,
                        c = E.ceil(l / this.MAX_INTERVAL),
                        d = l / c;
                    for (e = 1; c >= e; e++) t = a + o * d, n = this._intervalCurvePoints(a, t), r.push(n.cp1, n.cp2, n.p2), a = t;
                    return r
                },
                bbox: function (e) {
                    for (var t, o, r = this, a = r._arcInterval(), s = a.startAngle, l = a.endAngle, c = n(this.center, this.radiusX, this.radiusY, e), d = H(c.x), u = H(c.y), h = r.pointAt(s).transformCopy(e), f = r.pointAt(l).transformCopy(e), p = j.min(h, f), m = j.max(h, f), g = i(d, s), v = i(u, s); l > g || l > v;) l > g && (t = r.pointAt(g).transformCopy(e), g += 90), l > v && (o = r.pointAt(v).transformCopy(e), v += 90), h = new j(t.x, o.y), p = j.min(p, h), m = j.max(m, h);
                    return x.fromPoints(p, m)
                },
                _arcInterval: function () {
                    var e, t = this.startAngle,
                        n = this.endAngle,
                        i = this.anticlockwise;
                    return i && (e = t, t = n, n = e), (t > n || i && t === n) && (n += 360), {
                        startAngle: t,
                        endAngle: n
                    }
                },
                _intervalCurvePoints: function (e, t) {
                    var n = this,
                        i = n.pointAt(e),
                        o = n.pointAt(t),
                        r = n._derivativeAt(e),
                        a = n._derivativeAt(t),
                        s = (L(t) - L(e)) / 3,
                        l = new j(i.x + s * r.x, i.y + s * r.y),
                        c = new j(o.x - s * a.x, o.y - s * a.y);
                    return {
                        p1: i,
                        cp1: l,
                        cp2: c,
                        p2: o
                    }
                },
                _derivativeAt: function (e) {
                    var t = this,
                        n = L(e);
                    return new j(-t.radiusX * E.sin(n), t.radiusY * E.cos(n))
                },
                containsPoint: function (e) {
                    var t, n, i, o = this._arcInterval(),
                        r = o.endAngle - o.startAngle,
                        a = this.center,
                        s = a.distanceTo(e),
                        c = E.atan2(e.y - a.y, e.x - a.x),
                        d = this.radiusX * this.radiusY / E.sqrt(E.pow(this.radiusX, 2) * E.pow(E.sin(c), 2) + E.pow(this.radiusY, 2) * E.pow(E.cos(c), 2)),
                        u = this.pointAt(this.startAngle).round(U),
                        h = this.pointAt(this.endAngle).round(U),
                        f = m(a, e.round(U), u, h);
                    return 180 > r ? t = f && v(a.distanceTo(f), s) && v(s, d) : (n = l(a.x, a.y, this.radiusX, this.radiusY, e.x, e.y), 360 != n && (n = (360 + n) % 360), i = n >= o.startAngle && o.endAngle >= n, t = i && v(s, d) || !i && (!f || f.equals(e))), t
                },
                _isOnPath: function (e, t) {
                    var n, i = this._arcInterval(),
                        o = this.center,
                        r = l(o.x, o.y, this.radiusX, this.radiusY, e.x, e.y);
                    return 360 != r && (r = (360 + r) % 360), n = r >= i.startAngle && i.endAngle >= r, n && this.pointAt(r).distanceTo(e) <= t
                }
            }), o(S.fn, ["radiusX", "radiusY", "startAngle", "endAngle", "anticlockwise"]), F(S.fn, z), S.fromPoints = function (e, t, n, i, o, r) {
                var a = c(e.x, e.y, t.x, t.y, n, i, o, r);
                return new S(a.center, {
                    startAngle: a.startAngle,
                    endAngle: a.endAngle,
                    radiusX: n,
                    radiusY: i,
                    anticlockwise: 0 === r
                })
            }, T = M.extend({
                init: function (e, t, n, i, o, r) {
                    this.a = e || 0, this.b = t || 0, this.c = n || 0, this.d = i || 0, this.e = o || 0, this.f = r || 0
                },
                multiplyCopy: function (e) {
                    return new T(this.a * e.a + this.c * e.b, this.b * e.a + this.d * e.b, this.a * e.c + this.c * e.d, this.b * e.c + this.d * e.d, this.a * e.e + this.c * e.f + this.e, this.b * e.e + this.d * e.f + this.f)
                },
                invert: function () {
                    var e = this.a,
                        t = this.b,
                        n = this.c,
                        i = this.d,
                        o = this.e,
                        r = this.f,
                        a = e * i - t * n;
                    return 0 === a ? null : new T(i / a, -t / a, -n / a, e / a, (n * r - i * o) / a, (t * o - e * r) / a)
                },
                clone: function () {
                    return new T(this.a, this.b, this.c, this.d, this.e, this.f)
                },
                equals: function (e) {
                    return e ? this.a === e.a && this.b === e.b && this.c === e.c && this.d === e.d && this.e === e.e && this.f === e.f : !1
                },
                round: function (e) {
                    return this.a = N(this.a, e), this.b = N(this.b, e), this.c = N(this.c, e), this.d = N(this.d, e), this.e = N(this.e, e), this.f = N(this.f, e), this
                },
                toArray: function (e) {
                    var t, n = [this.a, this.b, this.c, this.d, this.e, this.f];
                    if (B(e))
                        for (t = 0; n.length > t; t++) n[t] = N(n[t], e);
                    return n
                }
            }), T.fn.toString = function (e, t) {
                return this.toArray(e).join(t || ",")
            }, T.translate = function (e, t) {
                return new T(1, 0, 0, 1, e, t)
            }, T.unit = function () {
                return new T(1, 0, 0, 1, 0, 0)
            }, T.rotate = function (e, t, n) {
                var i = new T;
                return i.a = E.cos(L(e)), i.b = E.sin(L(e)), i.c = -i.b, i.d = i.a, i.e = t - t * i.a + n * i.b || 0, i.f = n - n * i.a - t * i.b || 0, i
            }, T.scale = function (e, t) {
                return new T(e, 0, 0, t, 0, 0)
            }, T.IDENTITY = T.unit(), D = M.extend({
                init: function (e) {
                    this._matrix = e || T.unit()
                },
                clone: function () {
                    return new D(this._matrix.clone())
                },
                equals: function (e) {
                    return e && e._matrix.equals(this._matrix)
                },
                _optionsChange: function () {
                    this.optionsChange({
                        field: "transform",
                        value: this
                    })
                },
                translate: function (e, t) {
                    return this._matrix = this._matrix.multiplyCopy(T.translate(e, t)), this._optionsChange(), this
                },
                scale: function (e, t, n) {
                    return B(t) || (t = e), n && (n = j.create(n), this._matrix = this._matrix.multiplyCopy(T.translate(n.x, n.y))), this._matrix = this._matrix.multiplyCopy(T.scale(e, t)), n && (this._matrix = this._matrix.multiplyCopy(T.translate(-n.x, -n.y))), this._optionsChange(), this
                },
                rotate: function (e, t) {
                    return t = j.create(t) || j.ZERO, this._matrix = this._matrix.multiplyCopy(T.rotate(e, t.x, t.y)), this._optionsChange(), this
                },
                multiply: function (e) {
                    var n = t(e);
                    return this._matrix = this._matrix.multiplyCopy(n), this._optionsChange(), this
                },
                matrix: function (e) {
                    return e ? (this._matrix = e, this._optionsChange(), this) : this._matrix
                }
            }), F(D.fn, z), A = function (e, t) {
                this.real = e || 0, this.img = t || 0
            }, A.fn = A.prototype = {
                add: function (e) {
                    return new A(N(this.real + e.real, U), N(this.img + e.img, U))
                },
                addConstant: function (e) {
                    return new A(this.real + e, this.img)
                },
                negate: function () {
                    return new A(-this.real, -this.img)
                },
                multiply: function (e) {
                    return new A(this.real * e.real - this.img * e.img, this.real * e.img + this.img * e.real)
                },
                multiplyConstant: function (e) {
                    return new A(this.real * e, this.img * e)
                },
                nthRoot: function (e) {
                    var t = E.atan2(this.img, this.real),
                        n = E.sqrt(E.pow(this.img, 2) + E.pow(this.real, 2)),
                        i = E.pow(n, 1 / e);
                    return new A(i * E.cos(t / e), i * E.sin(t / e))
                },
                equals: function (e) {
                    return this.real === e.real && this.img === e.img
                },
                isReal: function () {
                    return 0 === this.img
                }
            }, F(R, {
                geometry: {
                    Arc: S,
                    Circle: C,
                    curveIntersectionsCount: f,
                    lineIntersectionsCount: p,
                    Matrix: T,
                    Point: j,
                    Rect: x,
                    Size: k,
                    Transformation: D,
                    transform: e,
                    toMatrix: t,
                    isOutOfEndPoint: b,
                    hasRootsInRange: w
                }
            }), R.dataviz.geometry = R.geometry
        }(), window.kendo
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("drawing/core.min", ["drawing/geometry.min"], e)
    }(function () {
        ! function (e) {
            function t(e) {
                var t, n;
                return e.touch ? (t = e.x.location, n = e.y.location) : (t = e.pageX || e.clientX || 0, n = e.pageY || e.clientY || 0), {
                    x: t,
                    y: n
                }
            }
            var n, i, o, r, a = e.noop,
                s = Object.prototype.toString,
                l = window.kendo,
                c = l.Class,
                d = l.ui.Widget,
                u = l.deepExtend,
                h = l.util,
                f = h.defined,
                p = h.limitValue,
                m = l.geometry,
                g = e.proxy,
                v = ".kendo",
                _ = '<div class="k-tooltip"><div class="k-tooltip-content"></div></div>',
                b = '<div class="k-tooltip-button"><a href="\\#" class="k-icon k-i-close">close</a></div>',
                w = d.extend({
                    init: function (e, t) {
                        this.options = u({}, this.options, t), d.fn.init.call(this, e, this.options), this._click = this._handler("click"), this._mouseenter = this._handler("mouseenter"), this._mouseleave = this._handler("mouseleave"), this._mousemove = this._handler("mousemove"), this._visual = new l.drawing.Group, this.options.width && this.element.css("width", this.options.width), this.options.height && this.element.css("height", this.options.height), this._enableTracking()
                    },
                    options: {
                        name: "Surface",
                        tooltip: {}
                    },
                    events: ["click", "mouseenter", "mouseleave", "mousemove", "resize", "tooltipOpen", "tooltipClose"],
                    draw: function (e) {
                        this._visual.children.push(e)
                    },
                    clear: function () {
                        this._visual.children = [], this.hideTooltip()
                    },
                    destroy: function () {
                        this._visual = null, this._tooltip && (this._tooltip.destroy(), delete this._tooltip), d.fn.destroy.call(this)
                    },
                    exportVisual: function () {
                        return this._visual
                    },
                    getSize: function () {
                        return {
                            width: this.element.width(),
                            height: this.element.height()
                        }
                    },
                    setSize: function (e) {
                        this.element.css({
                            width: e.width,
                            height: e.height
                        }), this._size = e, this._resize()
                    },
                    eventTarget: function (t) {
                        for (var n, i = e(t.touch ? t.touch.initialTouch : t.target); !n && i.length > 0 && (n = i[0]._kendoNode, !i.is(this.element) && 0 !== i.length);) i = i.parent();
                        return n ? n.srcElement : void 0
                    },
                    showTooltip: function (e, t) {
                        this._tooltip && this._tooltip.show(e, t)
                    },
                    hideTooltip: function () {
                        this._tooltip && this._tooltip.hide()
                    },
                    suspendTracking: function () {
                        this._suspendedTracking = !0, this.hideTooltip()
                    },
                    resumeTracking: function () {
                        this._suspendedTracking = !1
                    },
                    _resize: a,
                    _handler: function (e) {
                        var t = this;
                        return function (n) {
                            var i = t.eventTarget(n);
                            i && !t._suspendedTracking && t.trigger(e, {
                                element: i,
                                originalEvent: n,
                                type: e
                            })
                        }
                    },
                    _enableTracking: function () {
                        l.ui.Popup && (this._tooltip = new r(this, this.options.tooltip || {}))
                    },
                    _elementOffset: function () {
                        var e = this.element,
                            t = e.offset(),
                            n = parseInt(e.css("paddingLeft"), 10),
                            i = parseInt(e.css("paddingTop"), 10);
                        return {
                            left: t.left + n,
                            top: t.top + i
                        }
                    },
                    _surfacePoint: function (e) {
                        var n = this._elementOffset(),
                            i = t(e),
                            o = i.x - n.left,
                            r = i.y - n.top;
                        return new m.Point(o, r)
                    }
                });
            l.ui.plugin(w), w.create = function (e, t) {
                return o.current.create(e, t)
            }, n = c.extend({
                init: function (e) {
                    this.childNodes = [], this.parent = null, e && (this.srcElement = e, this.observe())
                },
                destroy: function () {
                    var e, t;
                    for (this.srcElement && this.srcElement.removeObserver(this), e = this.childNodes, t = 0; e.length > t; t++) this.childNodes[t].destroy();
                    this.parent = null
                },
                load: a,
                observe: function () {
                    this.srcElement && this.srcElement.addObserver(this)
                },
                append: function (e) {
                    this.childNodes.push(e), e.parent = this
                },
                insertAt: function (e, t) {
                    this.childNodes.splice(t, 0, e), e.parent = this
                },
                remove: function (e, t) {
                    var n, i = e + t;
                    for (n = e; i > n; n++) this.childNodes[n].removeSelf();
                    this.childNodes.splice(e, t)
                },
                removeSelf: function () {
                    this.clear(), this.destroy()
                },
                clear: function () {
                    this.remove(0, this.childNodes.length)
                },
                invalidate: function () {
                    this.parent && this.parent.invalidate()
                },
                geometryChange: function () {
                    this.invalidate()
                },
                optionsChange: function () {
                    this.invalidate()
                },
                childrenChange: function (e) {
                    "add" === e.action ? this.load(e.items, e.index) : "remove" === e.action && this.remove(e.index, e.items.length), this.invalidate()
                }
            }), i = c.extend({
                init: function (e, t) {
                    var n, i;
                    this.prefix = t || "";
                    for (n in e) i = e[n], i = this._wrap(i, n), this[n] = i
                },
                get: function (e) {
                    return l.getter(e, !0)(this)
                },
                set: function (e, t) {
                    var n, i = l.getter(e, !0)(this);
                    i !== t && (n = this._set(e, this._wrap(t, e)), n || this.optionsChange({
                        field: this.prefix + e,
                        value: t
                    }))
                },
                _set: function (e, t) {
                    var n, o, r, a = e.indexOf(".") >= 0;
                    if (a)
                        for (n = e.split("."), o = ""; n.length > 1;) {
                            if (o += n.shift(), r = l.getter(o, !0)(this), r || (r = new i({}, o + "."), r.addObserver(this), this[o] = r), r instanceof i) return r.set(n.join("."), t), a;
                            o += "."
                        }
                    return this._clear(e), l.setter(e)(this, t), a
                },
                _clear: function (e) {
                    var t = l.getter(e, !0)(this);
                    t && t.removeObserver && t.removeObserver(this)
                },
                _wrap: function (e, t) {
                    var n = s.call(e);
                    return null !== e && f(e) && "[object Object]" === n && (e instanceof i || e instanceof c || (e = new i(e, this.prefix + t + ".")), e.addObserver(this)), e
                }
            }), u(i.fn, l.mixins.ObserversMixin), o = function () {
                this._items = []
            }, o.prototype = {
                register: function (e, t, n) {
                    var i = this._items,
                        o = i[0],
                        r = {
                            name: e,
                            type: t,
                            order: n
                        };
                    !o || o.order > n ? i.unshift(r) : i.push(r)
                },
                create: function (e, t) {
                    var n, i, o = this._items,
                        r = o[0];
                    if (t && t.type)
                        for (n = t.type.toLowerCase(), i = 0; o.length > i; i++)
                            if (o[i].name === n) {
                                r = o[i];
                                break
                            }
                    return r ? new r.type(e, t) : void l.logToConsole("Warning: Unable to create Kendo UI Drawing Surface. Possible causes:\n- The browser does not support SVG, VML and Canvas. User agent: " + navigator.userAgent + "\n- The Kendo UI scripts are not fully loaded")
                }
            }, o.current = new o, r = c.extend({
                init: function (t, n) {
                    this.element = e(_), this.content = this.element.children(".k-tooltip-content"), n = n || {}, this.options = u({}, this.options, this._tooltipOptions(n)), this.popup = new l.ui.Popup(this.element, {
                        appendTo: n.appendTo,
                        animation: n.animation,
                        copyAnchorStyles: !1,
                        collision: "fit fit"
                    }), this._openPopupHandler = e.proxy(this._openPopup, this), this.surface = t, this._bindEvents()
                },
                options: {
                    position: "top",
                    showOn: "mouseenter",
                    offset: 7,
                    autoHide: !0,
                    hideDelay: 0,
                    showAfter: 100
                },
                _bindEvents: function () {
                    this._showHandler = g(this._showEvent, this), this._surfaceLeaveHandler = g(this._surfaceLeave, this), this._mouseleaveHandler = g(this._mouseleave, this), this._mousemoveHandler = g(this._mousemove, this), this.surface.bind("click", this._showHandler), this.surface.bind("mouseenter", this._showHandler), this.surface.bind("mouseleave", this._mouseleaveHandler), this.surface.bind("mousemove", this._mousemoveHandler), this.surface.element.on("mouseleave" + v, this._surfaceLeaveHandler), this.element.on("click" + v, ".k-tooltip-button", g(this._hideClick, this))
                },
                destroy: function () {
                    var e = this.popup;
                    this.surface.unbind("click", this._showHandler), this.surface.unbind("mouseenter", this._showHandler), this.surface.unbind("mouseleave", this._mouseleaveHandler), this.surface.unbind("mousemove", this._mousemoveHandler), this.surface.element.off("mouseleave" + v, this._surfaceLeaveHandler), this.element.off("click" + v), e && (e.destroy(), delete this.popup), clearTimeout(this._timeout), delete this.popup, delete this.element, delete this.content, delete this.surface
                },
                _tooltipOptions: function (e) {
                    return e = e || {}, {
                        position: e.position,
                        showOn: e.showOn,
                        offset: e.offset,
                        autoHide: e.autoHide,
                        width: e.width,
                        height: e.height,
                        content: e.content,
                        shared: e.shared,
                        hideDelay: e.hideDelay,
                        showAfter: e.showAfter
                    }
                },
                _tooltipShape: function (e) {
                    for (; e && !e.options.tooltip;) e = e.parent;
                    return e
                },
                _updateContent: function (e, t, n) {
                    var i = n.content;
                    return l.isFunction(i) && (i = i({
                        element: t,
                        target: e
                    })), i ? (this.content.html(i), !0) : void 0
                },
                _position: function (e, n, i, o) {
                    var r, a = n.position,
                        s = n.offset || 0,
                        l = this.surface,
                        c = l._elementOffset(),
                        d = l.getSize(),
                        u = l._offset,
                        h = e.bbox(),
                        f = i.width,
                        m = i.height,
                        g = 0,
                        v = 0;
                    return h.origin.translate(c.left, c.top), u && h.origin.translate(-u.x, -u.y), "cursor" == a && o ? (r = t(o), g = r.x - f / 2, v = r.y - m - s) : "left" == a ? (g = h.origin.x - f - s, v = h.center().y - m / 2) : "right" == a ? (g = h.bottomRight().x + s, v = h.center().y - m / 2) : "bottom" == a ? (g = h.center().x - f / 2, v = h.bottomRight().y + s) : (g = h.center().x - f / 2, v = h.origin.y - m - s), {
                        left: p(g, c.left, c.left + d.width),
                        top: p(v, c.top, c.top + d.height)
                    }
                },
                show: function (e, t) {
                    this._show(e, e, u({}, this.options, this._tooltipOptions(e.options.tooltip), t))
                },
                hide: function () {
                    var e = this._current;
                    delete this._current, clearTimeout(this._showTimeout), this.popup.visible() && e && !this.surface.trigger("tooltipClose", {
                        element: e.shape,
                        target: e.target,
                        popup: this.popup
                    }) && this.popup.close()
                },
                _hideClick: function (e) {
                    e.preventDefault(), this.hide()
                },
                _show: function (e, t, n, i, o) {
                    var r, a, s = this._current;
                    clearTimeout(this._timeout), s && (s.shape === t && n.shared || s.target === e) || (clearTimeout(this._showTimeout), !this.surface.trigger("tooltipOpen", {
                        element: t,
                        target: e,
                        popup: this.popup
                    }) && this._updateContent(e, t, n) && (this._autoHide(n), r = this._measure(n), a = this.popup, a.visible() && a.close(!0), this._current = {
                        options: n,
                        elementSize: r,
                        shape: t,
                        target: e,
                        position: this._position(n.shared ? t : e, n, r, i)
                    }, o ? this._showTimeout = setTimeout(this._openPopupHandler, n.showAfter || 0) : this._openPopup()))
                },
                _openPopup: function () {
                    var e = this._current,
                        t = e.position;
                    this.popup.open(t.left, t.top)
                },
                _autoHide: function (t) {
                    t.autoHide && this._closeButton && (this.element.removeClass("k-tooltip-closable"), this._closeButton.remove(), delete this._closeButton), t.autoHide || this._closeButton || (this.element.addClass("k-tooltip-closable"), this._closeButton = e(b).prependTo(this.element))
                },
                _showEvent: function (e) {
                    var t, n = this._tooltipShape(e.element);
                    n && (t = u({}, this.options, this._tooltipOptions(n.options.tooltip)), t && t.showOn == e.type && this._show(e.element, n, t, e.originalEvent, !0))
                },
                _measure: function (e) {
                    var t, n, i;
                    return this.element.css({
                        width: "auto",
                        height: "auto"
                    }), i = this.popup.visible(), i || this.popup.wrapper.show(), this.element.css({
                        width: f(e.width) ? e.width : "auto",
                        height: f(e.height) ? e.height : "auto"
                    }), t = this.element.outerWidth(), n = this.element.outerHeight(), i || this.popup.wrapper.hide(), {
                            width: t,
                            height: n
                        }
                },
                _mouseleave: function (e) {
                    var t, n;
                    this._popupRelatedTarget(e.originalEvent) || (t = this, n = t._current, n && n.options.autoHide && (t._timeout = setTimeout(function () {
                        clearTimeout(t._showTimeout), t.hide()
                    }, n.options.hideDelay || 0)))
                },
                _mousemove: function (e) {
                    var t, n, i = this._current;
                    i && e.element && (t = i.options, "cursor" == t.position && (n = this._position(e.element, t, i.elementSize, e.originalEvent), i.position = n, this.popup.wrapper.css({
                        left: n.left,
                        top: n.top
                    })))
                },
                _surfaceLeave: function (e) {
                    this._popupRelatedTarget(e) || (clearTimeout(this._showTimeout), this.hide())
                },
                _popupRelatedTarget: function (t) {
                    return t.relatedTarget && e(t.relatedTarget).closest(this.popup.wrapper).length
                }
            }), u(l, {
                drawing: {
                    DASH_ARRAYS: {
                        dot: [1.5, 3.5],
                        dash: [4, 3.5],
                        longdash: [8, 3.5],
                        dashdot: [3.5, 3.5, 1.5, 3.5],
                        longdashdot: [8, 3.5, 1.5, 3.5],
                        longdashdotdot: [8, 3.5, 1.5, 3.5, 1.5, 3.5]
                    },
                    Color: l.Color,
                    BaseNode: n,
                    OptionsStore: i,
                    Surface: w,
                    SurfaceFactory: o,
                    SurfaceTooltip: r
                }
            }), l.dataviz.drawing = l.drawing
        }(window.kendo.jQuery)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("drawing/mixins.min", ["drawing/core.min"], e)
    }(function () {
        ! function () {
            var e = window.kendo,
                t = e.deepExtend,
                n = e.util.defined,
                i = e.geometry,
                o = "gradient",
                r = "" + i.Matrix.IDENTITY,
                a = {
                    extend: function (e) {
                        e.fill = this.fill, e.stroke = this.stroke
                    },
                    fill: function (e, t) {
                        var i, r = this.options;
                        return n(e) ? (e && e.nodeType != o ? (i = {
                            color: e
                        }, n(t) && (i.opacity = t), r.set("fill", i)) : r.set("fill", e), this) : r.get("fill")
                    },
                    stroke: function (e, t, i) {
                        return n(e) ? (this.options.set("stroke.color", e), n(t) && this.options.set("stroke.width", t), n(i) && this.options.set("stroke.opacity", i), this) : this.options.get("stroke")
                    }
                },
                s = {
                    extend: function (e, t) {
                        e.traverse = function (e) {
                            var n, i, o = this[t];
                            for (n = 0; o.length > n; n++) i = o[n], i.traverse ? i.traverse(e) : e(i);
                            return this
                        }
                    }
                },
                l = {
                    extend: function (e) {
                        e.bbox = this.bbox, e.geometryChange = this.geometryChange
                    },
                    bbox: function (e) {
                        var t, n, o = i.toMatrix(this.currentTransform(e)),
                            a = o ? "" + o : r;
                        return this._bboxCache && this._matrixHash == a ? t = this._bboxCache.clone() : (t = this._bbox(o), this._bboxCache = t ? t.clone() : null, this._matrixHash = a), n = this.options.get("stroke.width"), n && t && t.expand(n / 2), t
                    },
                    geometryChange: function () {
                        delete this._bboxCache, this.trigger("geometryChange", {
                            element: this
                        })
                    }
                };
            t(e.drawing, {
                mixins: {
                    Paintable: a,
                    Traversable: s,
                    Measurable: l
                }
            })
        }()
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function(e, define) {
    define("drawing/shapes.min", ["drawing/core.min", "drawing/mixins.min", "util/text-metrics.min", "mixins/observers.min"], e)
}(function() {
    ! function(e) {
        function t(e, t, n) {
            var i, o, r, a;
            for (o = 0; e.length > o; o++) r = e[o], r.visible() && (a = t ? r.bbox(n) : r.rawBBox(), a && (i = i ? q.Rect.union(i, a) : a));
            return i
        }

        function n(e, t) {
            var n, i, o, r;
            for (i = 0; e.length > i; i++) o = e[i], o.visible() && (r = o.clippedBBox(t), r && (n = n ? q.Rect.union(n, r) : r));
            return n
        }

        function i(e, t) {
            for (var n = 0; t.length > n; n++) e[t[n]] = o(t[n])
        }

        function o(e) {
            var t = "_" + e;
            return function(e) {
                return ie(e) ? (this._observerField(t, e), this.geometryChange(), this) : this[t]
            }
        }

        function r(e, t) {
            for (var n = 0; t.length > n; n++) e[t[n]] = a(t[n])
        }

        function a(e) {
            var t = "_" + e;
            return function(e) {
                return ie(e) ? (this._observerField(t, G.create(e)), this.geometryChange(), this) : this[t]
            }
        }

        function s(e, t) {
            for (var n = 0; t.length > n; n++) e[t[n]] = l(t[n])
        }

        function l(e) {
            return function(t) {
                return ie(t) ? (this.options.set(e, t), this) : this.options.get(e)
            }
        }

        function c() {
            return "kdef" + pe++
        }

        function d(e, t, n) {
            y(e, t, n, "x", "width")
        }

        function u(e, t, n) {
            y(e, t, n, "y", "height")
        }

        function h(e) {
            w(b(e), "x", "y", "width")
        }

        function f(e) {
            w(b(e), "y", "x", "height")
        }

        function p(e, t) {
            return g(e, t, "x", "y", "width")
        }

        function m(e, t) {
            return g(e, t, "y", "x", "height")
        }

        function g(e, t, n, i, o) {
            var r, a, s, l, c = [],
                d = _(e, t, o),
                u = t.origin.clone();
            for (l = 0; d.length > l; l++)
                for (s = d[l], r = s[0], u[i] = r.bbox.origin[i], C(u, r.bbox, r.element), r.bbox.origin[n] = u[n], w(s, n, i, o), c.push([]), a = 0; s.length > a; a++) c[l].push(s[a].element);
            return c
        }

        function v(e, t) {
            var n, i, o = e.clippedBBox(),
                r = o.size,
                a = t.size;
            (r.width > a.width || r.height > a.height) && (n = J.min(a.width / r.width, a.height / r.height), i = e.transform() || q.transform(), i.scale(n, n), e.transform(i))
        }

        function _(e, t, n) {
            var i, o, r, a, s = t.size[n],
                l = 0,
                c = [],
                d = [],
                u = function() {
                    d.push({
                        element: i,
                        bbox: r
                    })
                };
            for (a = 0; e.length > a; a++) i = e[a], r = i.clippedBBox(), r && (o = r.size[n], l + o > s ? d.length ? (c.push(d), d = [], u(), l = o) : (u(), c.push(d), d = [], l = 0) : (u(), l += o));
            return d.length && c.push(d), c
        }

        function b(e) {
            var t, n, i, o = [];
            for (i = 0; e.length > i; i++) t = e[i], n = t.clippedBBox(), n && o.push({
                element: t,
                bbox: n
            });
            return o
        }

        function w(e, t, n, i) {
            var o, r, a, s, l;
            if (e.length > 1)
                for (o = e[0].bbox, r = new G, l = 1; e.length > l; l++) a = e[l].element, s = e[l].bbox, r[t] = o.origin[t] + o.size[i], r[n] = s.origin[n], C(r, s, a), s.origin[t] = r[t], o = s
        }

        function y(e, t, n, i, o) {
            var r, a, s;
            for (n = n || "start", s = 0; e.length > s; s++) r = e[s].clippedBBox(), r && (a = r.origin.clone(), a[i] = k(r.size[o], t, n, i, o), C(a, r, e[s]))
        }

        function k(e, t, n, i, o) {
            var r;
            return r = n == me ? t.origin[i] : n == ge ? t.origin[i] + t.size[o] - e : t.origin[i] + (t.size[o] - e) / 2
        }

        function x(e, t, n) {
            var i = n.transform() || q.transform(),
                o = i.matrix();
            o.e += e, o.f += t, i.matrix(o), n.transform(i)
        }

        function C(e, t, n) {
            x(e.x - t.origin.x, e.y - t.origin.y, n)
        }
        var S, T, D, A, E, I, R, M, F, z, P, B, L, H, N, O, V, W = window.kendo,
            U = W.Class,
            j = W.deepExtend,
            q = W.geometry,
            G = q.Point,
            $ = q.Size,
            Y = q.Matrix,
            K = q.toMatrix,
            Q = W.drawing,
            X = Q.OptionsStore,
            J = Math,
            Z = J.pow,
            ee = W.util,
            te = ee.append,
            ne = ee.arrayLimits,
            ie = ee.defined,
            oe = ee.last,
            re = ee.valueOrDefault,
            ae = W.mixins.ObserversMixin,
            se = e.inArray,
            le = [].push,
            ce = [].pop,
            de = [].splice,
            ue = [].shift,
            he = [].slice,
            fe = [].unshift,
            pe = 1,
            me = "start",
            ge = "end",
            ve = "horizontal",
            _e = U.extend({
                nodeType: "Element",
                init: function(e) {
                    this._initOptions(e)
                },
                _initOptions: function(e) {
                    var t, n;
                    e = e || {}, t = e.transform, n = e.clip, t && (e.transform = q.transform(t)), n && !n.id && (n.id = c()), this.options = new X(e), this.options.addObserver(this)
                },
                transform: function(e) {
                    return ie(e) ? void this.options.set("transform", q.transform(e)) : this.options.get("transform")
                },
                parentTransform: function() {
                    for (var e, t, n = this; n.parent;) n = n.parent, e = n.transform(), e && (t = e.matrix().multiplyCopy(t || Y.unit()));
                    return t ? q.transform(t) : void 0
                },
                currentTransform: function(e) {
                    var t, n, i = this.transform(),
                        o = K(i);
                    return ie(e) || (e = this.parentTransform()), t = K(e), n = o && t ? t.multiplyCopy(o) : o || t, n ? q.transform(n) : void 0
                },
                visible: function(e) {
                    return ie(e) ? (this.options.set("visible", e), this) : this.options.get("visible") !== !1
                },
                clip: function(e) {
                    var t = this.options;
                    return ie(e) ? (e && !e.id && (e.id = c()), t.set("clip", e), this) : t.get("clip")
                },
                opacity: function(e) {
                    return ie(e) ? (this.options.set("opacity", e), this) : re(this.options.get("opacity"), 1)
                },
                clippedBBox: function(e) {
                    var t, n = this._clippedBBox(e);
                    return n ? (t = this.clip(), t ? q.Rect.intersect(n, t.bbox(e)) : n) : void 0
                },
                containsPoint: function(e, t) {
                    if (this.visible()) {
                        var n = this.currentTransform(t);
                        return n && (e = e.transformCopy(n.matrix().invert())), this._hasFill() && this._containsPoint(e) || this._isOnPath && this._hasStroke() && this._isOnPath(e)
                    }
                    return !1
                },
                _hasFill: function() {
                    var e = this.options.fill;
                    return e && !ee.isTransparent(e.color)
                },
                _hasStroke: function() {
                    var e = this.options.stroke;
                    return e && e.width > 0 && !ee.isTransparent(e.color)
                },
                _clippedBBox: function(e) {
                    return this.bbox(e)
                }
            });
        j(_e.fn, ae), S = U.extend({
            init: function(e) {
                e = e || [], this.length = 0, this._splice(0, e.length, e)
            },
            elements: function(e) {
                return e ? (this._splice(0, this.length, e), this._change(), this) : this.slice(0)
            },
            push: function() {
                var e = arguments,
                    t = le.apply(this, e);
                return this._add(e), t
            },
            slice: he,
            pop: function() {
                var e = this.length,
                    t = ce.apply(this);
                return e && this._remove([t]), t
            },
            splice: function(e, t) {
                var n = he.call(arguments, 2),
                    i = this._splice(e, t, n);
                return this._change(), i
            },
            shift: function() {
                var e = this.length,
                    t = ue.apply(this);
                return e && this._remove([t]), t
            },
            unshift: function() {
                var e = arguments,
                    t = fe.apply(this, e);
                return this._add(e), t
            },
            indexOf: function(e) {
                var t, n, i = this;
                for (t = 0, n = i.length; n > t; t++)
                    if (i[t] === e) return t;
                return -1
            },
            _splice: function(e, t, n) {
                var i = de.apply(this, [e, t].concat(n));
                return this._clearObserver(i), this._setObserver(n), i
            },
            _add: function(e) {
                this._setObserver(e), this._change()
            },
            _remove: function(e) {
                this._clearObserver(e), this._change()
            },
            _setObserver: function(e) {
                for (var t = 0; e.length > t; t++) e[t].addObserver(this)
            },
            _clearObserver: function(e) {
                for (var t = 0; e.length > t; t++) e[t].removeObserver(this)
            },
            _change: function() {}
        }), j(S.fn, ae), T = _e.extend({
            nodeType: "Group",
            init: function(e) {
                _e.fn.init.call(this, e), this.children = []
            },
            childrenChange: function(e, t, n) {
                this.trigger("childrenChange", {
                    action: e,
                    items: t,
                    index: n
                })
            },
            append: function() {
                return te(this.children, arguments), this._reparent(arguments, this), this.childrenChange("add", arguments), this
            },
            insert: function(e, t) {
                return this.children.splice(e, 0, t), t.parent = this, this.childrenChange("add", [t], e), this
            },
            insertAt: function(e, t) {
                return this.insert(t, e)
            },
            remove: function(e) {
                var t = se(e, this.children);
                return t >= 0 && (this.children.splice(t, 1), e.parent = null, this.childrenChange("remove", [e], t)), this
            },
            removeAt: function(e) {
                if (e >= 0 && this.children.length > e) {
                    var t = this.children[e];
                    this.children.splice(e, 1), t.parent = null, this.childrenChange("remove", [t], e)
                }
                return this
            },
            clear: function() {
                var e = this.children;
                return this.children = [], this._reparent(e, null), this.childrenChange("remove", e, 0), this
            },
            bbox: function(e) {
                return t(this.children, !0, this.currentTransform(e))
            },
            rawBBox: function() {
                return t(this.children, !1)
            },
            _clippedBBox: function(e) {
                return n(this.children, this.currentTransform(e))
            },
            currentTransform: function(e) {
                return _e.fn.currentTransform.call(this, e) || null
            },
            containsPoint: function(e, t) {
                var n, i, o;
                if (this.visible())
                    for (n = this.children, i = this.currentTransform(t), o = 0; n.length > o; o++)
                        if (n[o].containsPoint(e, i)) return !0;
                return !1
            },
            _reparent: function(e, t) {
                var n, i, o;
                for (n = 0; e.length > n; n++) i = e[n], o = i.parent, o && o != this && o.remove && o.remove(i), i.parent = t
            }
        }), Q.mixins.Traversable.extend(T.fn, "children"), D = _e.extend({
            nodeType: "Text",
            init: function(e, t, n) {
                _e.fn.init.call(this, n), this.content(e), this.position(t || new q.Point), this.options.font || (this.options.font = "12px sans-serif"), ie(this.options.fill) || this.fill("#000")
            },
            content: function(e) {
                return ie(e) ? (this.options.set("content", e), this) : this.options.get("content")
            },
            measure: function() {
                var e = ee.measureText(this.content(), {
                    font: this.options.get("font")
                });
                return e
            },
            rect: function() {
                var e = this.measure(),
                    t = this.position().clone();
                return new q.Rect(t, [e.width, e.height])
            },
            bbox: function(e) {
                var t = K(this.currentTransform(e));
                return this.rect().bbox(t)
            },
            rawBBox: function() {
                return this.rect().bbox()
            },
            _containsPoint: function(e) {
                return this.rect().containsPoint(e)
            }
        }), Q.mixins.Paintable.extend(D.fn), r(D.fn, ["position"]), A = _e.extend({
            nodeType: "Circle",
            init: function(e, t) {
                _e.fn.init.call(this, t), this.geometry(e || new q.Circle), ie(this.options.stroke) || this.stroke("#000")
            },
            _bbox: function(e) {
                return this._geometry.bbox(e)
            },
            rawBBox: function() {
                return this._geometry.bbox()
            },
            _containsPoint: function(e) {
                return this.geometry().containsPoint(e)
            },
            _isOnPath: function(e) {
                return this.geometry()._isOnPath(e, this.options.stroke.width / 2)
            }
        }), Q.mixins.Paintable.extend(A.fn), Q.mixins.Measurable.extend(A.fn), i(A.fn, ["geometry"]), E = _e.extend({
            nodeType: "Arc",
            init: function(e, t) {
                _e.fn.init.call(this, t), this.geometry(e || new q.Arc), ie(this.options.stroke) || this.stroke("#000")
            },
            _bbox: function(e) {
                return this._geometry.bbox(e)
            },
            rawBBox: function() {
                return this.geometry().bbox()
            },
            toPath: function() {
                var e, t = new M,
                    n = this.geometry().curvePoints();
                if (n.length > 0)
                    for (t.moveTo(n[0].x, n[0].y), e = 1; n.length > e; e += 3) t.curveTo(n[e], n[e + 1], n[e + 2]);
                return t
            },
            _containsPoint: function(e) {
                return this.geometry().containsPoint(e)
            },
            _isOnPath: function(e) {
                return this.geometry()._isOnPath(e, this.options.stroke.width / 2)
            }
        }), Q.mixins.Paintable.extend(E.fn), Q.mixins.Measurable.extend(E.fn), i(E.fn, ["geometry"]), I = S.extend({
            _change: function() {
                this.geometryChange()
            }
        }), R = U.extend({
            init: function(e, t, n) {
                this.anchor(e || new G), this.controlIn(t), this.controlOut(n)
            },
            bboxTo: function(e, t) {
                var n, i = this.anchor().transformCopy(t),
                    o = e.anchor().transformCopy(t);
                return n = this.controlOut() && e.controlIn() ? this._curveBoundingBox(i, this.controlOut().transformCopy(t), e.controlIn().transformCopy(t), o) : this._lineBoundingBox(i, o)
            },
            _lineBoundingBox: function(e, t) {
                return q.Rect.fromPoints(e, t)
            },
            _curveBoundingBox: function(e, t, n, i) {
                var o = [e, t, n, i],
                    r = this._curveExtremesFor(o, "x"),
                    a = this._curveExtremesFor(o, "y"),
                    s = ne([r.min, r.max, e.x, i.x]),
                    l = ne([a.min, a.max, e.y, i.y]);
                return q.Rect.fromPoints(new G(s.min, l.min), new G(s.max, l.max))
            },
            _curveExtremesFor: function(e, t) {
                var n = this._curveExtremes(e[0][t], e[1][t], e[2][t], e[3][t]);
                return {
                    min: this._calculateCurveAt(n.min, t, e),
                    max: this._calculateCurveAt(n.max, t, e)
                }
            },
            _calculateCurveAt: function(e, t, n) {
                var i = 1 - e;
                return Z(i, 3) * n[0][t] + 3 * Z(i, 2) * e * n[1][t] + 3 * Z(e, 2) * i * n[2][t] + Z(e, 3) * n[3][t]
            },
            _curveExtremes: function(e, t, n, i) {
                var o, r, a = e - 3 * t + 3 * n - i,
                    s = -2 * (e - 2 * t + n),
                    l = e - t,
                    c = J.sqrt(s * s - 4 * a * l),
                    d = 0,
                    u = 1;
                return 0 === a ? 0 !== s && (d = u = -l / s) : isNaN(c) || (d = (-s + c) / (2 * a), u = (-s - c) / (2 * a)), o = J.max(J.min(d, u), 0), (0 > o || o > 1) && (o = 0), r = J.min(J.max(d, u), 1), (r > 1 || 0 > r) && (r = 1), {
                    min: o,
                    max: r
                }
            },
            _intersectionsTo: function(e, t) {
                var n;
                return n = this.controlOut() && e.controlIn() ? q.curveIntersectionsCount([this.anchor(), this.controlOut(), e.controlIn(), e.anchor()], t, this.bboxTo(e)) : q.lineIntersectionsCount(this.anchor(), e.anchor(), t)
            },
            _isOnCurveTo: function(e, t, n, i) {
                var o, r, a, s, l, c, d, u, h = this.bboxTo(e).expand(n, n);
                return h.containsPoint(t) ? (o = this.anchor(), r = this.controlOut(), a = e.controlIn(), s = e.anchor(), "start" == i && o.distanceTo(t) <= n ? !q.isOutOfEndPoint(o, r, t) : "end" == i && s.distanceTo(t) <= n ? !q.isOutOfEndPoint(s, a, t) : (l = q.hasRootsInRange, c = [o, r, a, s], l(c, t, "x", "y", n) || l(c, t, "y", "x", n) ? !0 : (d = q.transform().rotate(45, t), u = [o.transformCopy(d), r.transformCopy(d), a.transformCopy(d), s.transformCopy(d)], l(u, t, "x", "y", n) || l(u, t, "y", "x", n)))) : void 0
            },
            _isOnLineTo: function(e, t, n) {
                var i = this.anchor(),
                    o = e.anchor(),
                    r = ee.deg(J.atan2(o.y - i.y, o.x - i.x)),
                    a = new q.Rect([i.x, i.y - n / 2], [i.distanceTo(o), n]);
                return a.containsPoint(t.transformCopy(q.transform().rotate(-r, i)))
            },
            _isOnPathTo: function(e, t, n, i) {
                var o;
                return o = this.controlOut() && e.controlIn() ? this._isOnCurveTo(e, t, n / 2, i) : this._isOnLineTo(e, t, n)
            }
        }), r(R.fn, ["anchor", "controlIn", "controlOut"]), j(R.fn, ae), M = _e.extend({
            nodeType: "Path",
            init: function(e) {
                _e.fn.init.call(this, e), this.segments = new I, this.segments.addObserver(this), ie(this.options.stroke) || (this.stroke("#000"), ie(this.options.stroke.lineJoin) || this.options.set("stroke.lineJoin", "miter"))
            },
            moveTo: function(e, t) {
                return this.suspend(), this.segments.elements([]), this.resume(), this.lineTo(e, t), this
            },
            lineTo: function(e, t) {
                var n = ie(t) ? new G(e, t) : e,
                    i = new R(n);
                return this.segments.push(i), this
            },
            curveTo: function(e, t, n) {
                var i, o;
                return this.segments.length > 0 && (i = oe(this.segments), o = new R(n, t), this.suspend(), i.controlOut(e), this.resume(), this.segments.push(o)), this
            },
            arc: function(e, t, n, i, o) {
                var r, a, s, l, c;
                return this.segments.length > 0 && (r = oe(this.segments), a = r.anchor(), s = ee.rad(e), l = new G(a.x - n * J.cos(s), a.y - i * J.sin(s)), c = new q.Arc(l, {
                    startAngle: e,
                    endAngle: t,
                    radiusX: n,
                    radiusY: i,
                    anticlockwise: o
                }), this._addArcSegments(c)), this
            },
            arcTo: function(e, t, n, i, o) {
                var r, a, s;
                return this.segments.length > 0 && (r = oe(this.segments), a = r.anchor(), s = q.Arc.fromPoints(a, e, t, n, i, o), this._addArcSegments(s)), this
            },
            _addArcSegments: function(e) {
                var t, n;
                for (this.suspend(), t = e.curvePoints(), n = 1; t.length > n; n += 3) this.curveTo(t[n], t[n + 1], t[n + 2]);
                this.resume(), this.geometryChange()
            },
            close: function() {
                return this.options.closed = !0, this.geometryChange(), this
            },
            rawBBox: function() {
                return this._bbox()
            },
            _containsPoint: function(e) {
                var t, n, i, o = this.segments,
                    r = o.length,
                    a = 0;
                for (i = 1; r > i; i++) t = o[i - 1], n = o[i], a += t._intersectionsTo(n, e);
                return !this.options.closed && o[0].anchor().equals(o[r - 1].anchor()) || (a += q.lineIntersectionsCount(o[0].anchor(), o[r - 1].anchor(), e)), a % 2 !== 0
            },
            _isOnPath: function(e, t) {
                var n, i = this.segments,
                    o = i.length;
                if (t = t || this.options.stroke.width, o > 1) {
                    if (i[0]._isOnPathTo(i[1], e, t, "start")) return !0;
                    for (n = 2; o - 2 >= n; n++)
                        if (i[n - 1]._isOnPathTo(i[n], e, t)) return !0;
                    if (i[o - 2]._isOnPathTo(i[o - 1], e, t, "end")) return !0
                }
                return !1
            },
            _bbox: function(e) {
                var t, n, i, o, r = this.segments,
                    a = r.length;
                if (1 === a) n = r[0].anchor().transformCopy(e), t = new q.Rect(n, $.ZERO);
                else if (a > 0)
                    for (i = 1; a > i; i++) o = r[i - 1].bboxTo(r[i], e), t = t ? q.Rect.union(t, o) : o;
                return t
            }
        }), Q.mixins.Paintable.extend(M.fn), Q.mixins.Measurable.extend(M.fn), M.fromRect = function(e, t) {
            return new M(t).moveTo(e.topLeft()).lineTo(e.topRight()).lineTo(e.bottomRight()).lineTo(e.bottomLeft()).close()
        }, M.fromPoints = function(e, t) {
            var n, i, o;
            if (e) {
                for (n = new M(t), i = 0; e.length > i; i++) o = G.create(e[i]), o && (0 === i ? n.moveTo(o) : n.lineTo(o));
                return n
            }
        }, M.fromArc = function(e, t) {
            var n = new M(t),
                i = e.startAngle,
                o = e.pointAt(i);
            return n.moveTo(o.x, o.y), n.arc(i, e.endAngle, e.radiusX, e.radiusY, e.anticlockwise), n
        }, F = _e.extend({
            nodeType: "MultiPath",
            init: function(e) {
                _e.fn.init.call(this, e), this.paths = new I, this.paths.addObserver(this), ie(this.options.stroke) || this.stroke("#000")
            },
            moveTo: function(e, t) {
                var n = new M;
                return n.moveTo(e, t), this.paths.push(n), this
            },
            lineTo: function(e, t) {
                return this.paths.length > 0 && oe(this.paths).lineTo(e, t), this
            },
            curveTo: function(e, t, n) {
                return this.paths.length > 0 && oe(this.paths).curveTo(e, t, n), this
            },
            arc: function(e, t, n, i, o) {
                return this.paths.length > 0 && oe(this.paths).arc(e, t, n, i, o), this
            },
            arcTo: function(e, t, n, i, o) {
                return this.paths.length > 0 && oe(this.paths).arcTo(e, t, n, i, o), this
            },
            close: function() {
                return this.paths.length > 0 && oe(this.paths).close(), this
            },
            _bbox: function(e) {
                return t(this.paths, !0, e)
            },
            rawBBox: function() {
                return t(this.paths, !1)
            },
            _containsPoint: function(e) {
                var t, n = this.paths;
                for (t = 0; n.length > t; t++)
                    if (n[t]._containsPoint(e)) return !0;
                return !1
            },
            _isOnPath: function(e) {
                var t, n = this.paths,
                    i = this.options.stroke.width;
                for (t = 0; n.length > t; t++)
                    if (n[t]._isOnPath(e, i)) return !0;
                return !1
            },
            _clippedBBox: function(e) {
                return n(this.paths, this.currentTransform(e))
            }
        }), Q.mixins.Paintable.extend(F.fn), Q.mixins.Measurable.extend(F.fn), z = _e.extend({
            nodeType: "Image",
            init: function(e, t, n) {
                _e.fn.init.call(this, n), this.src(e), this.rect(t || new q.Rect)
            },
            src: function(e) {
                return ie(e) ? (this.options.set("src", e), this) : this.options.get("src")
            },
            bbox: function(e) {
                var t = K(this.currentTransform(e));
                return this._rect.bbox(t)
            },
            rawBBox: function() {
                return this._rect.bbox()
            },
            _containsPoint: function(e) {
                return this._rect.containsPoint(e)
            },
            _hasFill: function() {
                return this.src()
            }
        }), i(z.fn, ["rect"]), P = U.extend({
            init: function(e, t, n) {
                this.options = new X({
                    offset: e,
                    color: t,
                    opacity: ie(n) ? n : 1
                }), this.options.addObserver(this)
            }
        }), s(P.fn, ["offset", "color", "opacity"]), j(P.fn, ae), P.create = function(e) {
            if (ie(e)) {
                var t;
                return t = e instanceof P ? e : e.length > 1 ? new P(e[0], e[1], e[2]) : new P(e.offset, e.color, e.opacity)
            }
        }, B = S.extend({
            _change: function() {
                this.optionsChange({
                    field: "stops"
                })
            }
        }), L = U.extend({
            nodeType: "gradient",
            init: function(e) {
                this.stops = new B(this._createStops(e.stops)), this.stops.addObserver(this), this._userSpace = e.userSpace, this.id = c()
            },
            userSpace: function(e) {
                return ie(e) ? (this._userSpace = e, this.optionsChange(), this) : this._userSpace
            },
            _createStops: function(e) {
                var t, n = [];
                for (e = e || [], t = 0; e.length > t; t++) n.push(P.create(e[t]));
                return n
            },
            addStop: function(e, t, n) {
                this.stops.push(new P(e, t, n))
            },
            removeStop: function(e) {
                var t = this.stops.indexOf(e);
                t >= 0 && this.stops.splice(t, 1)
            }
        }), j(L.fn, ae, {
            optionsChange: function(e) {
                this.trigger("optionsChange", {
                    field: "gradient" + (e ? "." + e.field : ""),
                    value: this
                })
            },
            geometryChange: function() {
                this.optionsChange()
            }
        }), H = L.extend({
            init: function(e) {
                e = e || {}, L.fn.init.call(this, e), this.start(e.start || new G), this.end(e.end || new G(1, 0))
            }
        }), r(H.fn, ["start", "end"]), N = L.extend({
            init: function(e) {
                e = e || {}, L.fn.init.call(this, e), this.center(e.center || new G), this._radius = ie(e.radius) ? e.radius : 1, this._fallbackFill = e.fallbackFill
            },
            radius: function(e) {
                return ie(e) ? (this._radius = e, this.geometryChange(), this) : this._radius
            },
            fallbackFill: function(e) {
                return ie(e) ? (this._fallbackFill = e, this.optionsChange(), this) : this._fallbackFill
            }
        }), r(N.fn, ["center"]), O = _e.extend({
            nodeType: "Rect",
            init: function(e, t) {
                _e.fn.init.call(this, t), this.geometry(e || new q.Rect), ie(this.options.stroke) || this.stroke("#000")
            },
            _bbox: function(e) {
                return this._geometry.bbox(e)
            },
            rawBBox: function() {
                return this._geometry.bbox()
            },
            _containsPoint: function(e) {
                return this._geometry.containsPoint(e)
            },
            _isOnPath: function(e) {
                return this.geometry()._isOnPath(e, this.options.stroke.width / 2)
            }
        }), Q.mixins.Paintable.extend(O.fn), Q.mixins.Measurable.extend(O.fn), i(O.fn, ["geometry"]), V = T.extend({
            init: function(e, t) {
                T.fn.init.call(this, W.deepExtend({}, this._defaults, t)), this._rect = e, this._fieldMap = {}
            },
            _defaults: {
                alignContent: me,
                justifyContent: me,
                alignItems: me,
                spacing: 0,
                orientation: ve,
                lineSpacing: 0,
                wrap: !0
            },
            rect: function(e) {
                return e ? (this._rect = e, this) : this._rect
            },
            _initMap: function() {
                var e = this.options,
                    t = this._fieldMap;
                e.orientation == ve ? (t.sizeField = "width", t.groupsSizeField = "height", t.groupAxis = "x", t.groupsAxis = "y") : (t.sizeField = "height", t.groupsSizeField = "width", t.groupAxis = "y", t.groupsAxis = "x")
            },
            reflow: function() {
                var e, t, n, i, o, r, a, s, l, c, d, u, h, f, p, m, g, v, _, b, w, y, x, S, T, D;
                if (this._rect && 0 !== this.children.length) {
                    for (this._initMap(), this.options.transform && this.transform(null), e = this.options, t = this._fieldMap, n = this._rect, i = this._initGroups(), o = i.groups, r = i.groupsSize, a = t.sizeField, s = t.groupsSizeField, l = t.groupAxis, c = t.groupsAxis, d = k(r, n, e.alignContent, c, s), u = new G, h = new G, f = new q.Size, b = 0; o.length > b; b++) {
                        for (v = o[b], u[l] = p = k(v.size, n, e.justifyContent, l, a), u[c] = d, f[a] = v.size, f[s] = v.lineSize, _ = new q.Rect(u, f), w = 0; v.bboxes.length > w; w++) g = v.elements[w], m = v.bboxes[w], h[l] = p, h[c] = k(m.size[s], _, e.alignItems, c, s), C(h, m, g), p += m.size[a] + e.spacing;
                        d += v.lineSize + e.lineSpacing
                    }!e.wrap && v.size > n.size[a] && (y = n.size[a] / _.size[a], x = _.topLeft().scale(y, y), S = _.size[s] * y, T = k(S, n, e.alignContent, c, s), D = q.transform(), "x" === l ? D.translate(n.origin.x - x.x, T - x.y) : D.translate(T - x.x, n.origin.y - x.y), D.scale(y, y), this.transform(D))
                }
            },
            _initGroups: function() {
                var e, t, n, i = this.options,
                    o = this.children,
                    r = i.lineSpacing,
                    a = this._fieldMap.sizeField,
                    s = -r,
                    l = [],
                    c = this._newGroup(),
                    d = function() {
                        l.push(c), s += c.lineSize + r
                    };
                for (n = 0; o.length > n; n++) t = o[n], e = o[n].clippedBBox(), t.visible() && e && (i.wrap && c.size + e.size[a] + i.spacing > this._rect.size[a] ? 0 === c.bboxes.length ? (this._addToGroup(c, e, t), d(), c = this._newGroup()) : (d(), c = this._newGroup(), this._addToGroup(c, e, t)) : this._addToGroup(c, e, t));
                return c.bboxes.length && d(), {
                    groups: l,
                    groupsSize: s
                }
            },
            _addToGroup: function(e, t, n) {
                e.size += t.size[this._fieldMap.sizeField] + this.options.spacing, e.lineSize = Math.max(t.size[this._fieldMap.groupsSizeField], e.lineSize), e.bboxes.push(t), e.elements.push(n)
            },
            _newGroup: function() {
                return {
                    lineSize: 0,
                    size: -this.options.spacing,
                    bboxes: [],
                    elements: []
                }
            }
        }), j(Q, {
            align: d,
            Arc: E,
            Circle: A,
            Element: _e,
            ElementsArray: S,
            fit: v,
            Gradient: L,
            GradientStop: P,
            Group: T,
            Image: z,
            Layout: V,
            LinearGradient: H,
            MultiPath: F,
            Path: M,
            RadialGradient: N,
            Rect: O,
            Segment: R,
            stack: h,
            Text: D,
            vAlign: u,
            vStack: f,
            vWrap: m,
            wrap: p
        })
    }(window.kendo.jQuery)
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
    (n || t)()
}),
    function (e, define) {
        define("drawing/html.min", ["kendo.color.min", "drawing/shapes.min", "util/main.min", "util/text-metrics.min"], e)
    }(function () {
        ! function (e, t, n) {
            "use strict";

            function i(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : Array.isArray(e) ? {
                    x: e[0],
                    y: e[1]
                } : {
                            x: e.x,
                            y: e.y
                        }
            }

            function o(n, o) {
                function a(t) {
                    var n = new se.Group,
                        i = t.getBoundingClientRect();
                    return M(n, [u.x, 0, 0, u.y, -i.left * u.x, -i.top * u.y]), me._clipbox = !1, me._matrix = le.Matrix.unit(), me._stackingContext = {
                        element: t,
                        group: n
                    }, me._avoidLinks = o.avoidLinks === !0 ? "a" : o.avoidLinks, e(t).addClass("k-pdf-export"), te(t, n), e(t).removeClass("k-pdf-export"), n
                }

                function s(t) {
                    return null != t ? ("string" == typeof t && (t = kendo.template(t.replace(/^\s+|\s+$/g, ""))), "function" == typeof t ? function (n) {
                        var i = t(n);
                        return i ? ("string" == typeof i && (i = i.replace(/^\s+|\s+$/g, "")), e(i)[0]) : void 0
                    } : function () {
                        return e(t).clone()[0]
                    }) : void 0
                }

                function l(t) {
                    var n, i, o, r, a = t.cloneNode(!1);
                    if (1 == t.nodeType) {
                        n = e(t), i = e(a), r = n.data();
                        for (o in r) i.data(o, r[o]);
                        if (/^canvas$/i.test(t.tagName)) a.getContext("2d").drawImage(t, 0, 0);
                        else if (/^input$/i.test(t.tagName)) t.removeAttribute("name");
                        else
                            for (o = t.firstChild; o; o = o.nextSibling) a.appendChild(l(o))
                    }
                    return a
                }

                function c(n, i, o, r, a, c, d) {
                    function u() {
                        function e() {
                            f(S, function () {
                                n({
                                    pages: S,
                                    container: D
                                })
                            })
                        }
                        var t, i;
                        ("-" != o || a) && m(T), t = _(), T.parentNode.insertBefore(t, T), t.appendChild(T), x ? (i = S.length, S.forEach(function (t, n) {
                            var o = x({
                                element: t,
                                pageNum: n + 1,
                                totalPages: S.length
                            });
                            o && (t.appendChild(o), p(o, function () {
                                0 === --i && e()
                            }))
                        })) : e()
                    }

                    function h(e) {
                        return d.keepTogether && e.is(d.keepTogether) && e.height() <= a - A ? !0 : e.data("kendoChart") || /^(?:img|tr|thead|th|tfoot|iframe|svg|object|canvas|input|textarea|select|video|h[1-6])/i.test(e[0].tagName)
                    }

                    function m(n) {
                        var i, r, s, l, c = y(n),
                            d = t(k(c, "padding-bottom")),
                            u = t(k(c, "border-bottom-width")),
                            f = A;
                        for (A += d + u, i = !0, r = n.firstChild; r; r = r.nextSibling)
                            if (1 == r.nodeType) {
                                if (i = !1, s = e(r), s.is(o)) {
                                    v(r);
                                    continue
                                }
                                if (!a) {
                                    m(r);
                                    continue
                                }
                                if (!/^(?:static|relative)$/.test(k(y(r), "position"))) continue;
                                l = b(r), 1 == l ? v(r) : l && h(s) ? v(r) : m(r)
                            } else 3 == r.nodeType && a && (w(r, i), i = !1);
                        A = f
                    }

                    function g(e) {
                        var t = e.parentNode,
                            n = t.firstChild;
                        if (e === n) return !0;
                        if (e === t.children[0]) {
                            if (7 == n.nodeType || 8 == n.nodeType) return !0;
                            if (3 == n.nodeType) return !/\S/.test(n.data)
                        }
                        return !1
                    }

                    function v(t) {
                        var n, i, o, r, a, s, l;
                        return 1 == t.nodeType && t !== T && g(t) ? v(t.parentNode) : (n = e(t).closest("table"), i = n.find("colgroup:first"), d.repeatHeaders && (o = n.find("thead:first"), r = e(t).closest('.k-grid[data-role="grid"]'), r[0] && r[0].querySelector(".k-auto-scrollable") && (a = r.find(".k-grid-header:first"))), s = _(), l = C.createRange(), l.setStartBefore(T), l.setEndBefore(t), s.appendChild(l.extractContents()), T.parentNode.insertBefore(s, T), n[0] && (n = e(t).closest("table"), d.repeatHeaders && o[0] && o.clone().prependTo(n), i[0] && i.clone().prependTo(n)), void (d.repeatHeaders && a && a[0] && (r = e(t).closest('.k-grid[data-role="grid"]'), a[0] && a.clone().prependTo(r))))
                    }

                    function _() {
                        var t = C.createElement("KENDO-PDF-PAGE");
                        return e(t).css({
                            display: "block",
                            boxSizing: "content-box",
                            width: r || "auto",
                            padding: c.top + "px " + c.right + "px " + c.bottom + "px " + c.left + "px",
                            position: "relative",
                            height: a || "auto",
                            overflow: a || r ? "hidden" : "visible",
                            clear: "both"
                        }), d && d.pageClassName && (t.className = d.pageClassName), S.push(t), t
                    }

                    function b(e) {
                        var t, n, i = e.getBoundingClientRect();
                        return 0 === i.width || 0 === i.height ? 0 : (t = T.getBoundingClientRect().top, n = a - A, i.height > n ? 3 : i.top - t > n ? 1 : i.bottom - t > n ? 2 : 0)
                    }

                    function w(e, t) {
                        var n, i, o, r, a;
                        /\S/.test(e.data) && (n = e.data.length, i = C.createRange(), i.selectNodeContents(e), o = b(i), o && (r = e, 1 == o ? v(t ? e.parentNode : e) : (! function s(t, n, o) {
                            return i.setEnd(e, n), t == n || n == o ? n : b(i) ? s(t, t + n >> 1, n) : s(n, n + o >> 1, o)
                        }(0, n >> 1, n), !/\S/.test("" + i) && t ? v(e.parentNode) : (r = e.splitText(i.endOffset), a = _(), i.setStartBefore(T), a.appendChild(i.extractContents()), T.parentNode.insertBefore(a, T))), w(r)))
                    }
                    var x = s(d.template),
                        C = i.ownerDocument,
                        S = [],
                        T = d._destructive ? i : l(i),
                        D = C.createElement("KENDO-PDF-DOCUMENT"),
                        A = 0;
                    e(T).find("tfoot").each(function () {
                        this.parentNode.appendChild(this)
                    }), e(T).find("ol").each(function () {
                        e(this).children().each(function (e) {
                            this.setAttribute("kendo-split-index", e)
                        })
                    }), e(D).css({
                        display: "block",
                        position: "absolute",
                        boxSizing: "content-box",
                        left: "-10000px",
                        top: "-10000px"
                    }), r && (e(D).css({
                        width: r,
                        paddingLeft: c.left,
                        paddingRight: c.right
                    }), e(T).css({
                        overflow: "hidden"
                    })), i.parentNode.insertBefore(D, i), D.appendChild(T), d.beforePageBreak ? setTimeout(function () {
                        d.beforePageBreak(D, u)
                    }, 15) : setTimeout(u, 15)
                }
                var d, u;
                if (o || (o = {}), d = e.Deferred(), n = e(n)[0], !n) return d.reject("No element to export");
                if ("function" != typeof window.getComputedStyle) throw Error("window.getComputedStyle is missing.  You are using an unsupported browser, or running in IE8 compatibility mode.  Drawing HTML is supported in Chrome, Firefox, Safari and IE9+.");
                return kendo.pdf && kendo.pdf.defineFont(r(n.ownerDocument)), u = i(o.scale || 1), p(n, function () {
                    var e, t = o && o.forcePageBreak,
                        i = o && o.paperSize && "auto" != o.paperSize,
                        r = kendo.pdf.getPaperOptions(function (e, t) {
                            return "paperSize" == e ? i ? o[e] : "A4" : e in o ? o[e] : t
                        }),
                        s = i && r.paperSize[0],
                        l = i && r.paperSize[1],
                        h = o.margin && r.margin,
                        f = !!h;
                    t || l ? (h || (h = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }), s && (s /= u.x), l && (l /= u.y), h.left /= u.x, h.right /= u.x, h.top /= u.y, h.bottom /= u.y, e = new se.Group({
                        pdf: {
                            multiPage: !0,
                            paperSize: i ? r.paperSize : "auto",
                            _ignoreMargin: f
                        }
                    }), c(function (t) {
                        if (o.progress) {
                            var n = !1,
                                i = 0;
                            ! function r() {
                                if (t.pages.length > i) {
                                    var s = a(t.pages[i]);
                                    e.append(s), o.progress({
                                        page: s,
                                        pageNum: ++i,
                                        totalPages: t.pages.length,
                                        cancel: function () {
                                            n = !0
                                        }
                                    }), n ? t.container.parentNode.removeChild(t.container) : setTimeout(r)
                                } else t.container.parentNode.removeChild(t.container), d.resolve(e)
                            }()
                        } else t.pages.forEach(function (t) {
                            e.append(a(t))
                        }), t.container.parentNode.removeChild(t.container), d.resolve(e)
                    }, n, t, s ? s - h.left - h.right : null, l ? l - h.top - h.bottom : null, h, o)) : d.resolve(a(n))
                }), d.promise()
            }

            function r(e) {
                function t(e) {
                    if (e) {
                        var t = null;
                        try {
                            t = e.cssRules
                        } catch (n) { }
                        t && i(e, t)
                    }
                }

                function n(e) {
                    var t, n = k(e.style, "src");
                    return n ? re(n).reduce(function (e, t) {
                        var n = ae(t);
                        return n && e.push(n), e
                    }, []) : (t = ae(e.cssText), t ? [t] : [])
                }

                function i(e, i) {
                    var r, a, s, l, c, d, u;
                    for (r = 0; i.length > r; ++r) switch (a = i[r], a.type) {
                        case 3:
                            t(a.styleSheet);
                            break;
                        case 5:
                            s = a.style, l = re(k(s, "font-family")), c = /^([56789]00|bold)$/i.test(k(s, "font-weight")), d = "italic" == k(s, "font-style"), u = n(a), u.length > 0 && o(e, l, c, d, u[0])
                    }
                }

                function o(e, t, n, i, o) {
                    /^data:/i.test(o) || /^[^\/:]+:\/\//.test(o) || /^\//.test(o) || (o = (e.href + "").replace(/[^\/]*$/, "") + o), t.forEach(function (e) {
                        e = e.replace(/^(['"]?)(.*?)\1$/, "$2"), n && (e += "|bold"), i && (e += "|italic"), r[e] = o
                    })
                }
                var r, a;
                for (null == e && (e = document), r = {}, a = 0; e.styleSheets.length > a; ++a) t(e.styleSheets[a]);
                return r
            }

            function a(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function s(e) {
                return e = "_counter_" + e, me[e]
            }

            function l(e) {
                var t = [],
                    n = me;
                for (e = "_counter_" + e; n;) a(n, e) && t.push(n[e]), n = Object.getPrototypeOf(n);
                return t.reverse()
            }

            function c(e, t) {
                var n = me;
                for (e = "_counter_" + e; n && !a(n, e);) n = Object.getPrototypeOf(n);
                n || (n = me._root), n[e] = (n[e] || 0) + (null == t ? 1 : t)
            }

            function d(e, t) {
                e = "_counter_" + e, me[e] = null == t ? 0 : t
            }

            function u(e, n, i) {
                var o, r, a;
                for (o = 0; e.length > o;) r = e[o++], a = t(e[o]), isNaN(a) ? n(r, i) : (n(r, a), ++o)
            }

            function h(e, t) {
                var n = kendo.parseColor(e);
                return n && (n = n.toRGB(), t ? n = n.toCssRgba() : 0 === n.a && (n = null)), n
            }

            function f(e, t) {
                function n() {
                    --i <= 0 && t()
                }
                var i = 0;
                e.forEach(function (e) {
                    var t, o, r = e.querySelectorAll("img");
                    for (t = 0; r.length > t; ++t) o = r[t], o.complete || (i++ , o.onload = o.onerror = n)
                }), i || n()
            }

            function p(e, t) {
                function n(e) {
                    pe[e] || (pe[e] = !0, r.push(e))
                }

                function i() {
                    --o <= 0 && t()
                }
                var o, r = [];
                ! function a(e) {
                    /^img$/i.test(e.tagName) && n(e.src), oe(k(y(e), "background-image")).forEach(function (e) {
                        "url" == e.type && n(e.url)
                    }), e.children && ce.call(e.children).forEach(a)
                }(e), o = r.length, 0 === o && i(), r.forEach(function (e) {
                    var t = pe[e] = new Image;
                    /^data:/i.test(e) || (t.crossOrigin = "Anonymous"), t.src = e, t.complete ? i() : (t.onload = i, t.onerror = function () {
                        pe[e] = null, i()
                    })
                })
            }

            function m(e) {
                var t, i = "";
                do t = e % 26, i = String.fromCharCode(97 + t) + i, e = n.floor(e / 26); while (e > 0);
                return i
            }

            function g(e, t, n) {
                var i, o;
                me = Object.create(me), me[e.tagName.toLowerCase()] = {
                    element: e,
                    style: t
                }, i = k(t, "text-decoration"), i && "none" != i && (o = k(t, "color"), i.split(/\s+/g).forEach(function (e) {
                    me[e] || (me[e] = o)
                })), w(t) && (me._stackingContext = {
                    element: e,
                    group: n
                })
            }

            function v() {
                me = Object.getPrototypeOf(me)
            }

            function _(e) {
                if (null != me._clipbox) {
                    var t = e.bbox(me._matrix);
                    me._clipbox = me._clipbox ? le.Rect.intersect(me._clipbox, t) : t
                }
            }

            function b() {
                var e = me._clipbox;
                return null == e ? !0 : e ? 0 === e.width() || 0 === e.height() : void 0
            }

            function w(e) {
                function t(t) {
                    return k(e, t)
                }
                return "none" != t("transform") || "static" != t("position") && "auto" != t("z-index") || t("opacity") < 1 ? !0 : void 0
            }

            function y(e, t) {
                return window.getComputedStyle(e, t || null)
            }

            function k(e, t) {
                var n = e.getPropertyValue(t);
                return null != n && "" !== n || (de.webkit ? n = e.getPropertyValue("-webkit-" + t) : de.mozilla ? n = e.getPropertyValue("-moz-" + t) : de.opera ? n = e.getPropertyValue("-o-" + t) : de.msie && (n = e.getPropertyValue("-ms-" + t))), n
            }

            function x(e, t, n, i) {
                e.setProperty(t, n, i), de.webkit ? e.setProperty("-webkit-" + t, n, i) : de.mozilla ? e.setProperty("-moz-" + t, n, i) : de.opera ? e.setProperty("-o-" + t, n, i) : de.msie && (e.setProperty("-ms-" + t, n, i), t = "ms" + t.replace(/(^|-)([a-z])/g, function (e, t, n) {
                    return t + n.toUpperCase()
                }), e[t] = n)
            }

            function C(e, n) {
                return n = "border-" + n, {
                    width: t(k(e, n + "-width")),
                    style: k(e, n + "-style"),
                    color: h(k(e, n + "-color"), !0)
                }
            }

            function S(e, t) {
                var n = e.style.cssText,
                    i = t();
                return e.style.cssText = n, i
            }

            function T(e, n) {
                var i = k(e, "border-" + n + "-radius").split(/\s+/g).map(t);
                return 1 == i.length && i.push(i[0]), P({
                    x: i[0],
                    y: i[1]
                })
            }

            function D(e) {
                var t = e.getBoundingClientRect();
                return t = A(t, "border-*-width", e), t = A(t, "padding-*", e)
            }

            function A(e, n, i) {
                var o, r, a, s, l;
                return "string" == typeof n ? (o = y(i), r = t(k(o, n.replace("*", "top"))), a = t(k(o, n.replace("*", "right"))), s = t(k(o, n.replace("*", "bottom"))), l = t(k(o, n.replace("*", "left")))) : "number" == typeof n && (r = a = s = l = n), {
                    top: e.top + r,
                    right: e.right - a,
                    bottom: e.bottom - s,
                    left: e.left + l,
                    width: e.right - e.left - a - l,
                    height: e.bottom - e.top - s - r
                }
            }

            function E(e) {
                var n, i, o = k(e, "transform");
                return "none" == o ? null : (n = /^\s*matrix\(\s*(.*?)\s*\)\s*$/.exec(o), n ? (i = k(e, "transform-origin"), n = n[1].split(/\s*,\s*/g).map(t), i = i.split(/\s+/g).map(t), {
                    matrix: n,
                    origin: i
                }) : void 0)
            }

            function I(e) {
                return 180 * e / n.PI % 360
            }

            function R(e) {
                var i = t(e);
                return /grad$/.test(e) ? n.PI * i / 200 : /rad$/.test(e) ? i : /turn$/.test(e) ? n.PI * i * 2 : /deg$/.test(e) ? n.PI * i / 180 : void 0
            }

            function M(e, t) {
                return t = new le.Matrix(t[0], t[1], t[2], t[3], t[4], t[5]), e.transform(t), t
            }

            function F(e, t) {
                e.clip(t)
            }

            function z(e, t, n, i) {
                for (var o = new le.Arc([t, n], i).curvePoints(), r = 1; o.length > r;) e.curveTo(o[r++], o[r++], o[r++]);
            }

            function P(e) {
                return (0 >= e.x || 0 >= e.y) && (e.x = e.y = 0), e
            }

            function B(e, t, i, o, r) {
                var a = n.max(0, t.x),
                    s = n.max(0, t.y),
                    l = n.max(0, i.x),
                    c = n.max(0, i.y),
                    d = n.max(0, o.x),
                    u = n.max(0, o.y),
                    h = n.max(0, r.x),
                    f = n.max(0, r.y),
                    p = n.min(e.width / (a + l), e.height / (c + u), e.width / (d + h), e.height / (f + s));
                return 1 > p && (a *= p, s *= p, l *= p, c *= p, d *= p, u *= p, h *= p, f *= p), {
                    tl: {
                        x: a,
                        y: s
                    },
                    tr: {
                        x: l,
                        y: c
                    },
                    br: {
                        x: d,
                        y: u
                    },
                    bl: {
                        x: h,
                        y: f
                    }
                }
            }

            function L(e, n, i) {
                var o, r, a, s, l, c, d, u, h = y(e),
                    f = T(h, "top-left"),
                    p = T(h, "top-right"),
                    m = T(h, "bottom-left"),
                    g = T(h, "bottom-right");
                return "padding" != i && "content" != i || (o = C(h, "top"), r = C(h, "right"), a = C(h, "bottom"), s = C(h, "left"), f.x -= s.width, f.y -= o.width, p.x -= r.width, p.y -= o.width, g.x -= r.width, g.y -= a.width, m.x -= s.width, m.y -= a.width, "content" == i && (l = t(k(h, "padding-top")), c = t(k(h, "padding-right")), d = t(k(h, "padding-bottom")), u = t(k(h, "padding-left")), f.x -= u, f.y -= l, p.x -= c, p.y -= l, g.x -= c, g.y -= d, m.x -= u, m.y -= d)), "number" == typeof i && (f.x -= i, f.y -= i, p.x -= i, p.y -= i, g.x -= i, g.y -= i, m.x -= i, m.y -= i), H(n, f, p, g, m)
            }

            function H(e, t, n, i, o) {
                var r = B(e, t, n, i, o),
                    a = r.tl,
                    s = r.tr,
                    l = r.br,
                    c = r.bl,
                    d = new se.Path({
                        fill: null,
                        stroke: null
                    });
                return d.moveTo(e.left, e.top + a.y), a.x && z(d, e.left + a.x, e.top + a.y, {
                    startAngle: -180,
                    endAngle: -90,
                    radiusX: a.x,
                    radiusY: a.y
                }), d.lineTo(e.right - s.x, e.top), s.x && z(d, e.right - s.x, e.top + s.y, {
                    startAngle: -90,
                    endAngle: 0,
                    radiusX: s.x,
                    radiusY: s.y
                }), d.lineTo(e.right, e.bottom - l.y), l.x && z(d, e.right - l.x, e.bottom - l.y, {
                    startAngle: 0,
                    endAngle: 90,
                    radiusX: l.x,
                    radiusY: l.y
                }), d.lineTo(e.left + c.x, e.bottom), c.x && z(d, e.left + c.x, e.bottom - c.y, {
                    startAngle: 90,
                    endAngle: 180,
                    radiusX: c.x,
                    radiusY: c.y
                }), d.close()
            }

            function N(e, n) {
                var i = t(e) + "";
                switch (n) {
                    case "decimal-leading-zero":
                        return 2 > i.length && (i = "0" + i), i;
                    case "lower-roman":
                        return ue(e).toLowerCase();
                    case "upper-roman":
                        return ue(e).toUpperCase();
                    case "lower-latin":
                    case "lower-alpha":
                        return m(e - 1);
                    case "upper-latin":
                    case "upper-alpha":
                        return m(e - 1).toUpperCase();
                    default:
                        return i
                }
            }

            function O(e, t) {
                function n(e, t, n) {
                    return n ? (n = n.replace(/^\s*(["'])(.*)\1\s*$/, "$2"), l(e).map(function (e) {
                        return N(e, t)
                    }).join(n)) : N(s(e) || 0, t)
                }
                var i, o = re(t, /^\s+/),
                    r = [];
                return o.forEach(function (t) {
                    var o;
                    (i = /^\s*(["'])(.*)\1\s*$/.exec(t)) ? r.push(i[2].replace(/\\([0-9a-f]{4})/gi, function (e, t) {
                        return String.fromCharCode(parseInt(t, 16))
                    })) : (i = /^\s*counter\((.*?)\)\s*$/.exec(t)) ? (o = re(i[1]), r.push(n(o[0], o[1]))) : (i = /^\s*counters\((.*?)\)\s*$/.exec(t)) ? (o = re(i[1]), r.push(n(o[0], o[2], o[1]))) : r.push((i = /^\s*attr\((.*?)\)\s*$/.exec(t)) ? e.getAttribute(i[1]) || "" : t)
                }), r.join("")
            }

            function V(e) {
                var t, n;
                if (e.cssText) return e.cssText;
                for (t = [], n = 0; e.length > n; ++n) t.push(e[n] + ": " + k(e, e[n]));
                return t.join(";\n")
            }

            function W(e, t) {
                function n(t, n) {
                    var o, r = y(e, t);
                    r.content && "normal" != r.content && "none" != r.content && "0px" != r.width && (o = e.ownerDocument.createElement(fe), o.style.cssText = V(r), o.textContent = O(e, r.content), e.insertBefore(o, n), i.push(o))
                }
                var i, o;
                return e.tagName == fe ? void U(e, t) : (i = [], n(":before", e.firstChild), n(":after", null), o = e.className, e.className += " kendo-pdf-hide-pseudo-elements", U(e, t), e.className = o, void i.forEach(function (t) {
                    e.removeChild(t)
                }))
            }

            function U(i, o) {
                function r(e) {
                    var t, n, o, r, a, s;
                    if (/^td$/i.test(i.tagName) && (t = me.table, t && "collapse" == k(t.style, "border-collapse"))) {
                        if (n = C(t.style, "left").width, o = C(t.style, "top").width, 0 === n && 0 === o) return e;
                        if (r = t.element.getBoundingClientRect(), a = t.element.rows[0].cells[0], s = a.getBoundingClientRect(), s.top == r.top || s.left == r.left) return ce.call(e).map(function (e) {
                            return {
                                left: e.left + n,
                                top: e.top + o,
                                right: e.right + n,
                                bottom: e.bottom + o,
                                height: e.height,
                                width: e.width
                            }
                        })
                    }
                    return e
                }

                function a(e, t, i, r, a, s, l, c) {
                    function d(t, o, r) {
                        var a = n.PI / 2 * t / (t + i),
                            s = {
                                x: o.x - t,
                                y: o.y - i
                            },
                            l = new se.Path({
                                fill: {
                                    color: e
                                },
                                stroke: null
                            }).moveTo(0, 0);
                        M(l, r), z(l, 0, o.y, {
                            startAngle: -90,
                            endAngle: -I(a),
                            radiusX: o.x,
                            radiusY: o.y
                        }), s.x > 0 && s.y > 0 ? (l.lineTo(s.x * n.cos(a), o.y - s.y * n.sin(a)), z(l, 0, o.y, {
                            startAngle: -I(a),
                            endAngle: -90,
                            radiusX: s.x,
                            radiusY: s.y,
                            anticlockwise: !0
                        })) : s.x > 0 ? l.lineTo(s.x, i).lineTo(0, i) : l.lineTo(s.x, i).lineTo(s.x, 0), h.append(l.close())
                    }
                    if (!(0 >= i)) {
                        var u, h = new se.Group;
                        M(h, c), o.append(h), P(s), P(l), u = new se.Path({
                            fill: {
                                color: e
                            },
                            stroke: null
                        }), h.append(u), u.moveTo(s.x ? n.max(s.x, r) : 0, 0).lineTo(t - (l.x ? n.max(l.x, a) : 0), 0).lineTo(t - n.max(l.x, a), i).lineTo(n.max(s.x, r), i).close(), s.x && d(r, s, [-1, 0, 0, 1, s.x, 0]), l.x && d(a, l, [1, 0, 0, 1, t - l.x, 0])
                    }
                }

                function s(t) {
                    var n, r, a = new se.Group;
                    for (F(a, H(t, U, G, K, $)), o.append(a), "A" == i.tagName && i.href && !/^#?$/.test(e(i).attr("href")) && (me._avoidLinks && e(i).is(me._avoidLinks) || (a._pdfLink = {
                        url: i.href,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left
                    })), X && (n = new se.Path({
                        fill: {
                            color: X.toCssRgba()
                        },
                        stroke: null
                    }), n.moveTo(t.left, t.top).lineTo(t.right, t.top).lineTo(t.right, t.bottom).lineTo(t.left, t.bottom).close(), a.append(n)), r = u.length; --r >= 0;) l(a, t, u[r], f[r % f.length], p[r % p.length], g[r % g.length], v[r % v.length])
                }

                function l(e, o, r, a, s, l, c) {
                    function d(e, o, r, d, u) {
                        function h() {
                            for (; _.origin.x > o.left;) _.origin.x -= r
                        }

                        function f() {
                            for (; _.origin.y > o.top;) _.origin.y -= d
                        }

                        function p() {
                            for (; o.right > _.origin.x;) u(e, _.clone()), _.origin.x += r
                        }
                        var m, g, v, _, b, w = r / d,
                            y = o;
                        if ("content-box" == l ? (y = A(y, "border-*-width", i), y = A(y, "padding-*", i)) : "padding-box" == l && (y = A(y, "border-*-width", i)), /^\s*auto(\s+auto)?\s*$/.test(c) || ("contain" == c ? (m = n.min(y.width / r, y.height / d), r *= m, d *= m) : "cover" == c ? (m = n.max(y.width / r, y.height / d), r *= m, d *= m) : (g = c.split(/\s+/g), r = /%$/.test(g[0]) ? y.width * t(g[0]) / 100 : t(g[0]), d = 1 == g.length || "auto" == g[1] ? r / w : /%$/.test(g[1]) ? y.height * t(g[1]) / 100 : t(g[1]))), v = (s + "").split(/\s+/), 1 == v.length && (v[1] = "50%"), v[0] = /%$/.test(v[0]) ? t(v[0]) / 100 * (y.width - r) : t(v[0]), v[1] = /%$/.test(v[1]) ? t(v[1]) / 100 * (y.height - d) : t(v[1]), _ = new le.Rect([y.left + v[0], y.top + v[1]], [r, d]), "no-repeat" == a) u(e, _);
                        else if ("repeat-x" == a) h(), p();
                        else if ("repeat-y" == a)
                            for (f(); o.bottom > _.origin.y;) u(e, _.clone()), _.origin.y += d;
                        else if ("repeat" == a)
                            for (h(), f(), b = _.origin.clone(); o.bottom > _.origin.y;) _.origin.x = b.x, p(), _.origin.y += d
                    }
                    if (r && "none" != r)
                        if ("url" == r.type) {
                            if (/^url\(\"data:image\/svg/i.test(r.url)) return;
                            var u = pe[r.url];
                            u && u.width > 0 && u.height > 0 && d(e, o, u.width, u.height, function (e, t) {
                                e.append(new se.Image(r.url, t))
                            })
                        } else {
                            if ("linear" != r.type) return;
                            d(e, o, o.width, o.height, j(r))
                        }
                }

                function c() {
                    function e(e) {
                        S(i, function () {
                            i.style.position = "relative";
                            var t = i.ownerDocument.createElement(fe);
                            t.style.position = "absolute", t.style.boxSizing = "border-box", "outside" == n ? (t.style.width = "6em", t.style.left = "-6.8em", t.style.textAlign = "right") : t.style.left = "0px", e(t), i.insertBefore(t, i.firstChild), te(t, o), i.removeChild(t)
                        })
                    }

                    function t(e) {
                        var t, n = i.parentNode.children,
                            o = i.getAttribute("kendo-split-index");
                        if (null != o) return e(0 | o, n.length);
                        for (t = 0; n.length > t; ++t)
                            if (n[t] === i) return e(t, n.length)
                    }
                    var n, r = k(R, "list-style-type");
                    if ("none" != r) switch (n = k(R, "list-style-position"), r) {
                        case "circle":
                        case "disc":
                        case "square":
                            e(function (e) {
                                e.style.fontSize = "60%", e.style.lineHeight = "200%", e.style.paddingRight = "0.5em", e.style.fontFamily = "DejaVu Serif", e.innerHTML = {
                                    disc: "●",
                                    circle: "◯",
                                    square: "■"
                                }[r]
                            });
                            break;
                        case "decimal":
                        case "decimal-leading-zero":
                            e(function (e) {
                                t(function (t) {
                                    ++t, "decimal-leading-zero" == r && 2 > (t + "").length && (t = "0" + t), e.innerHTML = t + "."
                                })
                            });
                            break;
                        case "lower-roman":
                        case "upper-roman":
                            e(function (e) {
                                t(function (t) {
                                    t = ue(t + 1), "upper-roman" == r && (t = t.toUpperCase()), e.innerHTML = t + "."
                                })
                            });
                            break;
                        case "lower-latin":
                        case "lower-alpha":
                        case "upper-latin":
                        case "upper-alpha":
                            e(function (e) {
                                t(function (t) {
                                    t = m(t), /^upper/i.test(r) && (t = t.toUpperCase()), e.innerHTML = t + "."
                                })
                            })
                    }
                }

                function d(e, t, n) {
                    function r(e) {
                        return {
                            x: e.y,
                            y: e.x
                        }
                    }
                    var l, c, d, u, h, f, p, m;
                    if (0 !== e.width && 0 !== e.height && (s(e), l = W.width > 0 && (t && "ltr" == Q || n && "rtl" == Q), c = O.width > 0 && (n && "ltr" == Q || t && "rtl" == Q), 0 !== N.width || 0 !== W.width || 0 !== O.width || 0 !== V.width)) {
                        if (N.color == O.color && N.color == V.color && N.color == W.color && N.width == O.width && N.width == V.width && N.width == W.width && l && c) return e = A(e, N.width / 2), d = L(i, e, N.width / 2), d.options.stroke = {
                            color: N.color,
                            width: N.width
                        }, void o.append(d);
                        if (0 === U.x && 0 === G.x && 0 === K.x && 0 === $.x && 2 > N.width && 2 > W.width && 2 > O.width && 2 > V.width) return N.width > 0 && o.append(new se.Path({
                            stroke: {
                                width: N.width,
                                color: N.color
                            }
                        }).moveTo(e.left, e.top + N.width / 2).lineTo(e.right, e.top + N.width / 2)), V.width > 0 && o.append(new se.Path({
                            stroke: {
                                width: V.width,
                                color: V.color
                            }
                        }).moveTo(e.left, e.bottom - V.width / 2).lineTo(e.right, e.bottom - V.width / 2)), l && o.append(new se.Path({
                            stroke: {
                                width: W.width,
                                color: W.color
                            }
                        }).moveTo(e.left + W.width / 2, e.top).lineTo(e.left + W.width / 2, e.bottom)), void (c && o.append(new se.Path({
                            stroke: {
                                width: O.width,
                                color: O.color
                            }
                        }).moveTo(e.right - O.width / 2, e.top).lineTo(e.right - O.width / 2, e.bottom)));
                        u = B(e, U, G, K, $), h = u.tl, f = u.tr, p = u.br, m = u.bl, a(N.color, e.width, N.width, W.width, O.width, h, f, [1, 0, 0, 1, e.left, e.top]), a(V.color, e.width, V.width, O.width, W.width, p, m, [-1, 0, 0, -1, e.right, e.bottom]), a(W.color, e.height, W.width, V.width, N.width, r(m), r(h), [0, -1, 1, 0, e.left, e.bottom]), a(O.color, e.height, O.width, N.width, V.width, r(f), r(p), [0, 1, -1, 0, e.right, e.top])
                    }
                }
                var u, f, p, g, v, b, w, x, D, E, R = y(i),
                    N = C(R, "top"),
                    O = C(R, "right"),
                    V = C(R, "bottom"),
                    W = C(R, "left"),
                    U = T(R, "top-left"),
                    G = T(R, "top-right"),
                    $ = T(R, "bottom-left"),
                    K = T(R, "bottom-right"),
                    Q = k(R, "direction"),
                    X = k(R, "background-color");
                if (X = h(X), u = oe(k(R, "background-image")), f = re(k(R, "background-repeat")), p = re(k(R, "background-position")), g = re(k(R, "background-origin")), v = re(k(R, "background-size")), de.msie && 10 > de.version && (p = re(i.currentStyle.backgroundPosition)), b = A(i.getBoundingClientRect(), "border-*-width", i), function () {
                    var e, n, i, r, a, s, l, c = k(R, "clip"),
                        d = /^\s*rect\((.*)\)\s*$/.exec(c);
                    d && (e = d[1].split(/[ ,]+/g), n = "auto" == e[0] ? b.top : t(e[0]) + b.top, i = "auto" == e[1] ? b.right : t(e[1]) + b.left, r = "auto" == e[2] ? b.bottom : t(e[2]) + b.top, a = "auto" == e[3] ? b.left : t(e[3]) + b.left, s = new se.Group, l = (new se.Path).moveTo(a, n).lineTo(i, n).lineTo(i, r).lineTo(a, r).close(), F(s, l), o.append(s), o = s, _(l))
                }(), E = k(R, "display"), "table-row" == E)
                    for (w = [], x = 0, D = i.children; D.length > x; ++x) w.push(D[x].getBoundingClientRect());
                else w = i.getClientRects(), 1 == w.length && (w = [i.getBoundingClientRect()]);
                for (w = r(w), x = 0; w.length > x; ++x) d(w[x], 0 === x, x == w.length - 1);
                return w.length > 0 && "list-item" == E && c(w[0]),
                    function () {
                        function e() {
                            var e = L(i, b, "padding"),
                                t = new se.Group;
                            F(t, e), o.append(t), o = t, _(e)
                        }
                        Y(i) ? e() : /^(hidden|auto|scroll)/.test(k(R, "overflow")) ? e() : /^(hidden|auto|scroll)/.test(k(R, "overflow-x")) ? e() : /^(hidden|auto|scroll)/.test(k(R, "overflow-y")) && e()
                    }(), q(i, o) || J(i, o), o
            }

            function j(e) {
                return function (i, o) {
                    var r, a, s, l, c, d, u, h, f, p, m, g, v, _ = o.width(),
                        b = o.height();
                    switch (e.type) {
                        case "linear":
                            switch (r = null != e.angle ? e.angle : n.PI, e.to) {
                                case "top":
                                    r = 0;
                                    break;
                                case "left":
                                    r = -n.PI / 2;
                                    break;
                                case "bottom":
                                    r = n.PI;
                                    break;
                                case "right":
                                    r = n.PI / 2;
                                    break;
                                case "top left":
                                case "left top":
                                    r = -n.atan2(b, _);
                                    break;
                                case "top right":
                                case "right top":
                                    r = n.atan2(b, _);
                                    break;
                                case "bottom left":
                                case "left bottom":
                                    r = n.PI + n.atan2(b, _);
                                    break;
                                case "bottom right":
                                case "right bottom":
                                    r = n.PI - n.atan2(b, _)
                            }
                            e.reverse && (r -= n.PI), r %= 2 * n.PI, 0 > r && (r += 2 * n.PI), a = n.abs(_ * n.sin(r)) + n.abs(b * n.cos(r)), s = n.atan(_ * n.tan(r) / b), l = n.sin(s), c = n.cos(s), d = n.abs(l) + n.abs(c), u = d / 2 * l, h = d / 2 * c, r > n.PI / 2 && 3 * n.PI / 2 >= r && (u = -u, h = -h), f = [], p = 0, m = e.stops.map(function (n, i) {
                                var o, r = n.percent;
                                return r ? r = t(r) / 100 : n.length ? r = t(n.length) / a : 0 === i ? r = 0 : i == e.stops.length - 1 && (r = 1), o = {
                                    color: n.color.toCssRgba(),
                                    offset: r
                                }, null != r ? (p = r, f.forEach(function (e, t) {
                                    var n = e.stop;
                                    n.offset = e.left + (p - e.left) * (t + 1) / (f.length + 1)
                                }), f = []) : f.push({
                                    left: p,
                                    stop: o
                                }), o
                            }), g = [.5 - u, .5 + h], v = [.5 + u, .5 - h], i.append(se.Path.fromRect(o).stroke(null).fill(new se.LinearGradient({
                                start: g,
                                end: v,
                                stops: m,
                                userSpace: !1
                            })));
                            break;
                        case "radial":
                            window.console && window.console.log && window.console.log("Radial gradients are not yet supported in HTML renderer")
                    }
                }
            }

            function q(t, n) {
                var i, o, r, a;
                return t.getAttribute(kendo.attr("role")) && (i = kendo.widgetInstance(e(t)), i && (i.exportDOMVisual || i.exportVisual)) ? (o = i.exportDOMVisual ? i.exportDOMVisual() : i.exportVisual()) ? (r = new se.Group, r.children.push(o), a = t.getBoundingClientRect(), r.transform(le.transform().translate(a.left, a.top)), n.append(r), !0) : !1 : void 0
            }

            function G(e, t, n) {
                var i = D(e),
                    o = new le.Rect([i.left, i.top], [i.width, i.height]),
                    r = new se.Image(t, o);
                F(r, L(e, i, "content")), n.append(r)
            }

            function $(e, n) {
                var i = y(e),
                    o = y(n),
                    r = t(k(i, "z-index")),
                    a = t(k(o, "z-index")),
                    s = k(i, "position"),
                    l = k(o, "position");
                return isNaN(r) && isNaN(a) ? /static|absolute/.test(s) && /static|absolute/.test(l) ? 0 : "static" == s ? -1 : "static" == l ? 1 : 0 : isNaN(r) ? 0 === a ? 0 : a > 0 ? -1 : 1 : isNaN(a) ? 0 === r ? 0 : r > 0 ? 1 : -1 : t(r) - t(a)
            }

            function Y(e) {
                return /^(?:textarea|select|input)$/i.test(e.tagName)
            }

            function K(e) {
                return e.selectedOptions && e.selectedOptions.length > 0 ? e.selectedOptions[0] : e.options[e.selectedIndex]
            }

            function Q(e, t) {
                var i = y(e),
                    o = k(i, "color"),
                    r = e.getBoundingClientRect();
                "checkbox" == e.type ? (t.append(se.Path.fromRect(new le.Rect([r.left + 1, r.top + 1], [r.width - 2, r.height - 2])).stroke(o, 1)), e.checked && t.append((new se.Path).stroke(o, 1.2).moveTo(r.left + .22 * r.width, r.top + .55 * r.height).lineTo(r.left + .45 * r.width, r.top + .75 * r.height).lineTo(r.left + .78 * r.width, r.top + .22 * r.width))) : (t.append(new se.Circle(new le.Circle([(r.left + r.right) / 2, (r.top + r.bottom) / 2], n.min(r.width - 2, r.height - 2) / 2)).stroke(o, 1)), e.checked && t.append(new se.Circle(new le.Circle([(r.left + r.right) / 2, (r.top + r.bottom) / 2], n.min(r.width - 8, r.height - 8) / 2)).fill(o).stroke(null)))
            }

            function X(e, t) {
                var n, i, o, r, a, s = e.tagName.toLowerCase();
                if ("input" == s && ("checkbox" == e.type || "radio" == e.type)) return Q(e, t);
                if (n = e.parentNode, i = e.ownerDocument, o = i.createElement(fe), o.style.cssText = V(y(e)), "input" == s && (o.style.whiteSpace = "pre"), "select" != s && "textarea" != s || (o.style.overflow = "auto"), "select" == s)
                    if (e.multiple)
                        for (a = 0; e.options.length > a; ++a) r = i.createElement(fe), r.style.cssText = V(y(e.options[a])), r.style.display = "block", r.textContent = e.options[a].textContent, o.appendChild(r);
                    else r = K(e), r && (o.textContent = r.textContent);
                else o.textContent = e.value;
                n.insertBefore(o, e), o.scrollLeft = e.scrollLeft, o.scrollTop = e.scrollTop, e.style.display = "none", J(o, t), e.style.display = "", n.removeChild(o)
            }

            function J(e, t) {
                var n, i, o, r, a, s, l, c, d;
                switch (me._stackingContext.element === e && (me._stackingContext.group = t), e.tagName.toLowerCase()) {
                    case "img":
                        G(e, e.src, t);
                        break;
                    case "canvas":
                        try {
                            G(e, e.toDataURL("image/png"), t)
                        } catch (u) { }
                        break;
                    case "textarea":
                    case "input":
                    case "select":
                        X(e, t);
                        break;
                    default:
                        for (n = [], i = [], o = [], r = [], a = e.firstChild; a; a = a.nextSibling) switch (a.nodeType) {
                            case 3:
                                /\S/.test(a.data) && Z(e, a, t);
                                break;
                            case 1:
                                s = y(a), l = k(s, "display"), c = k(s, "float"), d = k(s, "position"), "static" != d ? r.push(a) : "inline" != l ? "none" != c ? i.push(a) : n.push(a) : o.push(a)
                        }
                        he(n, $).forEach(function (e) {
                            te(e, t)
                        }), he(i, $).forEach(function (e) {
                            te(e, t)
                        }), he(o, $).forEach(function (e) {
                            te(e, t)
                        }), he(r, $).forEach(function (e) {
                            te(e, t)
                        })
                }
            }

            function Z(e, i, o) {
                function r(e) {
                    var t, i, o, r;
                    if (de.msie || de.chrome) {
                        for (t = e.getClientRects(), i = {
                            top: +(1 / 0),
                            right: -(1 / 0),
                            bottom: -(1 / 0),
                            left: +(1 / 0)
                        }, o = 0; t.length > o; ++o) r = t[o], 1 >= r.width || r.bottom === D || (i.left = n.min(r.left, i.left), i.top = n.min(r.top, i.top), i.right = n.max(r.right, i.right), i.bottom = n.max(r.bottom, i.bottom));
                        return i.width = i.right - i.left, i.height = i.bottom - i.top, i
                    }
                    return e.getBoundingClientRect()
                }

                function a() {
                    var e, t, o, a, l, c, f, p = u,
                        m = d.substr(u).search(/\S/);
                    if (u += m, 0 > m || u >= h) return !0;
                    if (v.setStart(i, u), v.setEnd(i, u + 1), e = r(v), t = !1, w && (m = d.substr(u).search(/\s/), m >= 0 && (v.setEnd(i, u + m), o = r(v), o.bottom == e.bottom && (e = o, t = !0, u += m))), !t) {
                        if (m = function g(t, n, o) {
                            v.setEnd(i, n);
                            var a = r(v);
                            return a.bottom != e.bottom && n > t ? g(t, t + n >> 1, n) : a.right != e.right ? (e = a, o > n ? g(n, n + o >> 1, o) : n) : n
                        }(u, n.min(h, u + T), h), m == u) return !0;
                        if (u = m, m = ("" + v).search(/\s+$/), 0 === m) return;
                        m > 0 && (v.setEnd(i, v.startOffset + m), e = r(v))
                    }
                    if (de.msie && (e = v.getClientRects()[0]), a = "" + v, /^(?:pre|pre-wrap)$/i.test(x)) {
                        if (/\t/.test(a)) {
                            for (l = 0, m = p; v.startOffset > m; ++m) c = d.charCodeAt(m), 9 == c ? l += 8 - l % 8 : 10 == c || 13 == c ? l = 0 : l++;
                            for (;
                                (m = a.search("	")) >= 0;) f = "        ".substr(0, 8 - (l + m) % 8), a = a.substr(0, m) + f + a.substr(m + 1)
                        }
                    } else a = a.replace(/\s+/g, " ");
                    t || (D = e.bottom), s(a, e)
                }

                function s(e, t) {
                    var n, i, r;
                    de.msie && !isNaN(p) && (n = kendo.util.measureText(e, {
                        font: m
                    }), i = (t.top + t.bottom - n.height) / 2, t = {
                        top: i,
                        right: t.right,
                        bottom: i + n.height,
                        left: t.left,
                        height: n.height,
                        width: t.right - t.left
                    }), r = new ie(e, new le.Rect([t.left, t.top], [t.width, t.height]), {
                        font: m,
                        fill: {
                            color: g
                        }
                    }), o.append(r), l(t)
                }

                function l(e) {
                    function t(t, n) {
                        var i, r;
                        t && (i = f / 12, r = new se.Path({
                            stroke: {
                                width: i,
                                color: t
                            }
                        }), n -= i, r.moveTo(e.left, n).lineTo(e.right, n), o.append(r))
                    }
                    t(me.underline, e.bottom), t(me["line-through"], e.bottom - e.height / 2.7), t(me.overline, e.top)
                }
                var c, d, u, h, f, p, m, g, v, _, w, x, C, S, T, D;
                if (!b() && (c = y(e), !(t(k(c, "text-indent")) < -500) && (d = i.data, u = 0, h = d.search(/\S\s*$/) + 1, h && (f = k(c, "font-size"), p = k(c, "line-height"), m = [k(c, "font-style"), k(c, "font-variant"), k(c, "font-weight"), f, k(c, "font-family")].join(" "), f = t(f), p = t(p), 0 !== f)))) {
                    for (g = k(c, "color"), v = e.ownerDocument.createRange(), _ = k(c, "text-align"), w = "justify" == _, x = k(c, "white-space"), de.msie && (C = c.textOverflow, "ellipsis" == C && (S = e.style.textOverflow, e.style.textOverflow = "clip")), T = e.getBoundingClientRect().width / f * 5, 0 === T && (T = 500), D = null; !a(););
                    de.msie && "ellipsis" == C && (e.style.textOverflow = S)
                }
            }

            function ee(e, n, i) {
                var o, r, a, s, l, c;
                for ("auto" != i ? (o = me._stackingContext.group, i = t(i)) : (o = n, i = 0), r = o.children, a = 0; r.length > a && !(null != r[a]._dom_zIndex && r[a]._dom_zIndex > i); ++a);
                return s = new se.Group, o.insertAt(s, a), s._dom_zIndex = i, o !== n && me._clipbox && (l = me._matrix.invert(), c = me._clipbox.transformCopy(l), F(s, se.Path.fromRect(c))), s
            }

            function te(e, n) {
                var i, o, r, a, s, l, h, f = y(e),
                    p = k(f, "counter-reset");
                p && u(re(p, /^\s+/), d, 0), i = k(f, "counter-increment"), i && u(re(i, /^\s+/), c, 1), /^(style|script|link|meta|iframe|svg|col|colgroup)$/i.test(e.tagName) || null != me._clipbox && (o = t(k(f, "opacity")), r = k(f, "visibility"), a = k(f, "display"), 0 !== o && "hidden" != r && "none" != a && (s = E(f), h = k(f, "z-index"), (s || 1 > o) && "auto" == h && (h = 0), l = ee(e, n, h), 1 > o && l.opacity(o * l.opacity()), g(e, f, l), s ? S(e, function () {
                    var t, n, i, o;
                    x(e.style, "transform", "none", "important"), x(e.style, "transition", "none", "important"), "static" == k(f, "position") && x(e.style, "position", "relative", "important"), t = e.getBoundingClientRect(), n = t.left + s.origin[0], i = t.top + s.origin[1], o = [1, 0, 0, 1, -n, -i], o = ne(o, s.matrix), o = ne(o, [1, 0, 0, 1, n, i]), o = M(l, o), me._matrix = me._matrix.multiplyCopy(o), W(e, l)
                }) : W(e, l), v()))
            }

            function ne(e, t) {
                var n = e[0],
                    i = e[1],
                    o = e[2],
                    r = e[3],
                    a = e[4],
                    s = e[5],
                    l = t[0],
                    c = t[1],
                    d = t[2],
                    u = t[3],
                    h = t[4],
                    f = t[5];
                return [n * l + i * d, n * c + i * u, o * l + r * d, o * c + r * u, a * l + s * d + h, a * c + s * u + f]
            }
            var ie, oe, re, ae, se = kendo.drawing,
                le = kendo.geometry,
                ce = Array.prototype.slice,
                de = kendo.support.browser,
                ue = kendo.util.arabicToRoman,
                he = kendo.util.mergeSort,
                fe = "KENDO-PSEUDO-ELEMENT",
                pe = {},
                me = {};
            me._root = me, ie = se.Text.extend({
                nodeType: "Text",
                init: function (e, t, n) {
                    se.Text.fn.init.call(this, e, t.getOrigin(), n), this._pdfRect = t
                },
                rect: function () {
                    return this._pdfRect
                },
                rawBBox: function () {
                    return this._pdfRect
                }
            }), se.drawDOM = o, o.getFontFaces = r, oe = function () {
                function e(e) {
                    function p() {
                        var t = s.exec(e);
                        t && (e = e.substr(t[1].length))
                    }

                    function m(t) {
                        p();
                        var n = t.exec(e);
                        return n ? (e = e.substr(n[1].length), n[1]) : void 0
                    }

                    function g() {
                        var t, o, r = kendo.parseColor(e, !0);
                        return r ? (e = e.substr(r.match[0].length), r = r.toRGB(), (t = m(i)) || (o = m(n)), {
                            color: r,
                            length: t,
                            percent: o
                        }) : void 0
                    }

                    function v(t) {
                        var i, a, s, u, h, f, p = [],
                            v = !1;
                        if (m(l)) {
                            for (i = m(r), i ? (i = R(i), m(d)) : (a = m(o), "to" == a ? a = m(o) : a && /^-/.test(t) && (v = !0), s = m(o), m(d)), /-moz-/.test(t) && null == i && null == a && (u = m(n), h = m(n), v = !0, "0%" == u ? a = "left" : "100%" == u && (a = "right"), "0%" == h ? s = "top" : "100%" == h && (s = "bottom"), m(d)); e && !m(c) && (f = g());) p.push(f), m(d);
                            return {
                                type: "linear",
                                angle: i,
                                to: a && s ? a + " " + s : a ? a : s ? s : null,
                                stops: p,
                                reverse: v
                            }
                        }
                    }

                    function _() {
                        if (m(l)) {
                            var e = m(h);
                            return e = e.replace(/^['"]+|["']+$/g, ""), m(c), {
                                type: "url",
                                url: e
                            }
                        }
                    }
                    var b, w = e;
                    return a(f, w) ? f[w] : ((b = m(t)) ? b = v(b) : (b = m(u)) && (b = _()), f[w] = b || {
                        type: "none"
                    })
                }
                var t = /^((-webkit-|-moz-|-o-|-ms-)?linear-gradient\s*)\(/,
                    n = /^([-0-9.]+%)/,
                    i = /^([-0-9.]+px)/,
                    o = /^(left|right|top|bottom|to|center)\W/,
                    r = /^([-0-9.]+(deg|grad|rad|turn))/,
                    s = /^(\s+)/,
                    l = /^(\()/,
                    c = /^(\))/,
                    d = /^(,)/,
                    u = /^(url)\(/,
                    h = /^(.*?)\)/,
                    f = {},
                    p = {};
                return function (t) {
                    return a(p, t) ? p[t] : p[t] = re(t).map(e)
                }
            }(), re = function () {
                var e = {};
                return function (t, n) {
                    function i(e) {
                        return h = e.exec(t.substr(c))
                    }

                    function o(e) {
                        return e.replace(/^\s+|\s+$/g, "")
                    }
                    var r, s, l, c, d, u, h;
                    if (n || (n = /^\s*,\s*/), r = t + n, a(e, r)) return e[r];
                    for (s = [], l = 0, c = 0, d = 0, u = !1; t.length > c;) !u && i(/^[\(\[\{]/) ? (d++ , c++) : !u && i(/^[\)\]\}]/) ? (d-- , c++) : !u && i(/^[\"\']/) ? (u = h[0], c++) : "'" == u && i(/^\\\'/) ? c += 2 : '"' == u && i(/^\\\"/) ? c += 2 : "'" == u && i(/^\'/) ? (u = !1, c++) : '"' == u && i(/^\"/) ? (u = !1, c++) : i(n) ? (!u && !d && c > l && (s.push(o(t.substring(l, c))), l = c + h[0].length), c += h[0].length) : c++;
                    return c > l && s.push(o(t.substring(l, c))), e[r] = s
                }
            }(), ae = function () {
                var e = {};
                return function (t) {
                    var n, i = e[t];
                    return i || ((n = /url\((['"]?)([^'")]*?)\1\)\s+format\((['"]?)truetype\3\)/.exec(t)) ? i = e[t] = n[2] : (n = /url\((['"]?)([^'")]*?\.ttf)\1\)/.exec(t)) && (i = e[t] = n[2])), i
                }
            }()
        }(window.kendo.jQuery, parseFloat, Math)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("kendo.drawing.min", ["kendo.color.min", "util/main.min", "util/text-metrics.min", "util/base64.min", "mixins/observers.min", "drawing/geometry.min", "drawing/core.min", "drawing/mixins.min", "drawing/html.min"], e)
    }(function () { }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("pdf/core.min", ["kendo.core.min", "util/main.min"], e)
    }(function () {
        ! function (e, t, n) {
            "use strict";

            function i() {
                function e() {
                    var t, o, r;
                    for (t = 0; arguments.length > t; ++t) {
                        if (o = arguments[t], o === n) throw Error("Cannot output undefined to PDF");
                        if (o instanceof y) o.beforeRender(e), o.render(e);
                        else if (V(o)) m(o, e);
                        else if (p(o)) g(o, e);
                        else if ("number" == typeof o) {
                            if (isNaN(o)) throw Error("Cannot output NaN to PDF");
                            r = o.toFixed(7), r.indexOf(".") >= 0 && (r = r.replace(/\.?0+$/, "")), "-0" == r && (r = "0"), i.writeString(r)
                        } else /string|boolean/.test(typeof o) ? i.writeString(o + "") : "function" == typeof o.get ? i.write(o.get()) : "object" == typeof o && (o ? e(new G(o)) : i.writeString("null"))
                    }
                }
                var t = 0,
                    i = F();
                return e.writeData = function (e) {
                    i.write(e)
                }, e.withIndent = function (n) {
                    ++t, n(e), --t
                }, e.indent = function () {
                    e(ie, u("", 2 * t, "  ")), e.apply(null, arguments)
                }, e.offset = function () {
                    return i.offset()
                }, e.toString = function () {
                    throw Error("FIX CALLER")
                }, e.get = function () {
                    return i.get()
                }, e.stream = function () {
                    return i
                }, e
            }

            function o(e, t) {
                var n = e.beforeRender,
                    i = e.render;
                e.beforeRender = function () { }, e.render = function (e) {
                    e(t, " 0 R")
                }, e.renderFull = function (o) {
                    e._offset = o.offset(), o(t, " 0 obj "), n.call(e, o), i.call(e, o), o(" endobj")
                }
            }

            function r(e) {
                var t, n, i;
                if ("function" != typeof e && (t = e, e = function (e, n) {
                    return e in t ? t[e] : n
                }), n = e("paperSize", ae.a4), !n) return {};
                if ("string" == typeof n && (n = ae[n.toLowerCase()], null == n)) throw Error("Unknown paper size");
                return n[0] = w(n[0]), n[1] = w(n[1]), e("landscape", !1) && (n = [Math.max(n[0], n[1]), Math.min(n[0], n[1])]), i = e("margin"), i && ("string" == typeof i || "number" == typeof i ? (i = w(i, 0), i = {
                    left: i,
                    top: i,
                    right: i,
                    bottom: i
                }) : i = {
                    left: w(i.left, 0),
                    top: w(i.top, 0),
                    right: w(i.right, 0),
                    bottom: w(i.bottom, 0)
                }, e("addMargin") && (n[0] += i.left + i.right, n[1] += i.top + i.bottom)), {
                        paperSize: n,
                        margin: i
                    }
            }

            function a(e) {
                function t(t, n) {
                    return e && null != e[t] ? e[t] : n
                }
                var n, a, s = this,
                    l = i(),
                    c = 0,
                    d = [];
                s.getOption = t, s.attach = function (e) {
                    return d.indexOf(e) < 0 && (o(e, ++c), d.push(e)), e
                }, s.pages = [], s.FONTS = {}, s.IMAGES = {}, s.GRAD_COL_FUNCTIONS = {}, s.GRAD_OPC_FUNCTIONS = {}, s.GRAD_COL = {}, s.GRAD_OPC = {}, n = s.attach(new Y), a = s.attach(new K), n.setPages(a), s.addPage = function (e) {
                    var t, n, o, l = r(function (t, n) {
                        return e && null != e[t] ? e[t] : n
                    }),
                        c = l.paperSize,
                        d = l.margin,
                        u = c[0],
                        h = c[1];
                    return d && (u -= d.left + d.right, h -= d.top + d.bottom), t = new $(i(), null, !0), n = {
                        Contents: s.attach(t),
                        Parent: a,
                        MediaBox: [0, 0, c[0], c[1]]
                    }, o = new Z(s, n), o._content = t, a.addPage(s.attach(o)), o.transform(1, 0, 0, -1, 0, c[1]), d && (o.translate(d.left, d.top), o.rect(0, 0, u, h), o.clip()), s.pages.push(o), o
                }, s.render = function () {
                    var e, i;
                    for (l("%PDF-1.4", ie, "%ÂÁÚÏÎ", ie, ie), e = 0; d.length > e; ++e) d[e].renderFull(l), l(ie, ie);
                    for (i = l.offset(), l("xref", ie, 0, " ", d.length + 1, ie), l("0000000000 65535 f ", ie), e = 0; d.length > e; ++e) l(h(d[e]._offset, 10), " 00000 n ", ie);
                    return l(ie), l("trailer", ie), l(new G({
                        Size: d.length + 1,
                        Root: n,
                        Info: new G({
                            Producer: new W(t("producer", "Kendo UI PDF Generator v." + te.version)),
                            Title: new W(t("title", "")),
                            Author: new W(t("author", "")),
                            Subject: new W(t("subject", "")),
                            Keywords: new W(t("keywords", "")),
                            Creator: new W(t("creator", "Kendo UI PDF Generator v." + te.version)),
                            CreationDate: t("date", new Date)
                        })
                    }), ie, ie), l("startxref", ie, i, ie), l("%%EOF", ie), l.stream().offset(0)
                }
            }

            function s(t, n) {
                function i() {
                    e.console && (e.console.error ? e.console.error("Cannot load URL: %s", t) : e.console.log("Cannot load URL: %s", t)), n(null)
                }
                var o = new XMLHttpRequest, byteString, ab, byteArrays, tt, fileURL = t;
                tt = t.replace("data:application/font-ttf;charset=utf-8;base64,", "");
                if(t != tt){
                    byteString = atob(tt);
                    ab = new ArrayBuffer(byteString.length);
                    byteArrays = new Uint8Array(ab);
                    for (var fidaa = 0; fidaa < byteString.length; fidaa++) {
                        byteArrays[fidaa] = byteString.charCodeAt(fidaa);
                    }
                fileURL = URL.createObjectURL(new Blob([byteArrays], { type: 'application/font-ttf' }));
                }
                o.open("GET", fileURL, !0), ne && (o.responseType = "arraybuffer"), o.onload = function () {
                    200 == o.status || 304 == o.status ? n(ne ? new Uint8Array(o.response) : new VBArray(o.responseBody).toArray()) : i()
                }, o.onerror = i, o.send(null)
            }

            function l(e, t) {
                var n = se[e];
                n ? t(n) : s(e, function (n) {
                    if (null == n) throw Error("Cannot load font from " + e);
                    var i = new te.pdf.TTFFont(n);
                    se[e] = i, t(i)
                })
            }

            function c(e, t) {
                function i(e) {
                    c.src = e, c.complete && !te.support.browser.msie ? r() : (c.onload = r, c.onerror = o)
                }

                function o() {
                    t(le[e] = "TAINTED")
                }

                function r() {
                    var i, r, l, d, u, h, f, p, m, g, v, _;
                    if (s && /^image\/jpe?g$/i.test(s.type)) return i = new FileReader, i.onload = function () {
                        c = new C(c.width, c.height, F(new Uint8Array(this.result))), URL.revokeObjectURL(a), t(le[e] = c)
                    }, i.readAsArrayBuffer(s), n;
                    r = document.createElement("canvas"), r.width = c.width, r.height = c.height, l = r.getContext("2d"), l.drawImage(c, 0, 0);
                    try {
                        d = l.getImageData(0, 0, c.width, c.height)
                    } catch (b) {
                        return o()
                    } finally {
                        a && URL.revokeObjectURL(a)
                    }
                    for (u = !1, h = F(), f = F(), p = d.data, m = 0; p.length > m;) h.writeByte(p[m++]), h.writeByte(p[m++]), h.writeByte(p[m++]), g = p[m++], 255 > g && (u = !0), f.writeByte(g);
                    u ? c = new S(c.width, c.height, h, f) : (v = r.toDataURL("image/jpeg"), v = v.substr(v.indexOf(";base64,") + 8), _ = F(), _.writeBase64(v), _.offset(0), c = new C(c.width, c.height, _)), t(le[e] = c)
                }
                var a, s, l, c = le[e];
                c ? t(c) : (c = new Image, /^data:/i.test(e) || (c.crossOrigin = "Anonymous"), ne && !/^data:/i.test(e) ? (l = new XMLHttpRequest, l.onload = function () {
                    s = l.response, a = URL.createObjectURL(s), i(a)
                }, l.onerror = o, l.open("GET", e, !0), l.responseType = "blob", l.send()) : i(e))
            }

            function d(e) {
                return function (t, n) {
                    var i = t.length,
                        o = i;
                    if (0 === i) return n();
                    for (; o-- > 0;) e(t[o], function () {
                        0 === --i && n()
                    })
                }
            }

            function u(e, t, n) {
                for (; t > e.length;) e = n + e;
                return e
            }

            function h(e, t) {
                return u(e + "", t, "0")
            }

            function f(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function p(e) {
                return e instanceof Date
            }

            function m(e, t) {
                t("["), e.length > 0 && t.withIndent(function () {
                    for (var n = 0; e.length > n; ++n) n > 0 && n % 8 === 0 ? t.indent(e[n]) : t(" ", e[n])
                }), t(" ]")
            }

            function g(e, t) {
                t("(D:", h(e.getUTCFullYear(), 4), h(e.getUTCMonth() + 1, 2), h(e.getUTCDate(), 2), h(e.getUTCHours(), 2), h(e.getUTCMinutes(), 2), h(e.getUTCSeconds(), 2), "Z)")
            }

            function v(e) {
                return e * (72 / 25.4)
            }

            function _(e) {
                return v(10 * e)
            }

            function b(e) {
                return 72 * e
            }

            function w(e, n) {
                var i, o;
                if ("number" == typeof e) return e;
                if ("string" == typeof e && (i = /^\s*([0-9.]+)\s*(mm|cm|in|pt)\s*$/.exec(e), i && (o = t(i[1]), !isNaN(o)))) return "pt" == i[2] ? o : {
                    mm: v,
                    cm: _,
                    "in": b
                }[i[2]](o);
                if (null != n) return n;
                throw Error("Can't parse unit: " + e)
            }

            function y() { }

            function k(e, t, n) {
                n || (n = y), e.prototype = new n;
                for (var i in t) f(t, i) && (e.prototype[i] = t[i]);
                return e
            }

            function x(e) {
                return f(q, e) ? q[e] : q[e] = new j(e)
            }

            function C(e, t, n) {
                this.asStream = function () {
                    var i = new $(n, {
                        Type: x("XObject"),
                        Subtype: x("Image"),
                        Width: e,
                        Height: t,
                        BitsPerComponent: 8,
                        ColorSpace: x("DeviceRGB"),
                        Filter: x("DCTDecode")
                    });
                    return i._resourceName = x("I" + ++oe), i
                }
            }

            function S(e, t, n, i) {
                this.asStream = function (o) {
                    var r = new $(i, {
                        Type: x("XObject"),
                        Subtype: x("Image"),
                        Width: e,
                        Height: t,
                        BitsPerComponent: 8,
                        ColorSpace: x("DeviceGray")
                    }, !0),
                        a = new $(n, {
                            Type: x("XObject"),
                            Subtype: x("Image"),
                            Width: e,
                            Height: t,
                            BitsPerComponent: 8,
                            ColorSpace: x("DeviceRGB"),
                            SMask: o.attach(r)
                        }, !0);
                    return a._resourceName = x("I" + ++oe), a
                }
            }

            function T(e) {
                return e.map(function (e) {
                    return V(e) ? T(e) : "number" == typeof e ? (Math.round(1e3 * e) / 1e3).toFixed(3) : e
                }).join(" ")
            }

            function D(e, t, n, i, o, r, a) {
                var s = T([t, n, i, o, r, a]),
                    l = e.GRAD_COL_FUNCTIONS[s];
                return l || (l = e.GRAD_COL_FUNCTIONS[s] = e.attach(new G({
                    FunctionType: 2,
                    Domain: [0, 1],
                    Range: [0, 1, 0, 1, 0, 1],
                    N: 1,
                    C0: [t, n, i],
                    C1: [o, r, a]
                }))), l
            }

            function A(e, t, n) {
                var i = T([t, n]),
                    o = e.GRAD_OPC_FUNCTIONS[i];
                return o || (o = e.GRAD_OPC_FUNCTIONS[i] = e.attach(new G({
                    FunctionType: 2,
                    Domain: [0, 1],
                    Range: [0, 1],
                    N: 1,
                    C0: [t],
                    C1: [n]
                }))), o
            }

            function E(e, t) {
                function n(e) {
                    return 1 == e.length ? e[0] : {
                        FunctionType: 3,
                        Functions: e,
                        Domain: [0, 1],
                        Bounds: u,
                        Encode: h
                    }
                }
                var i, o, r, a, s, l = !1,
                    c = [],
                    d = [],
                    u = [],
                    h = [];
                for (i = 1; t.length > i; ++i) o = t[i - 1], r = t[i], a = o.color, s = r.color, d.push(D(e, a.r, a.g, a.b, s.r, s.g, s.b)), (1 > a.a || 1 > s.a) && (l = !0), u.push(r.offset), h.push(0, 1);
                if (l)
                    for (i = 1; t.length > i; ++i) o = t[i - 1], r = t[i], a = o.color, s = r.color, c.push(A(e, a.a, s.a));
                return u.pop(), {
                    hasAlpha: l,
                    colors: n(d),
                    opacities: l ? n(c) : null
                }
            }

            function I(e, t, n, i, o, r) {
                var a, s, l;
                return r || (l = [t].concat(i), n.forEach(function (e) {
                    l.push(e.offset, e.color.r, e.color.g, e.color.b)
                }), s = T(l), a = e.GRAD_COL[s]), a || (a = new G({
                    Type: x("Shading"),
                    ShadingType: t ? 3 : 2,
                    ColorSpace: x("DeviceRGB"),
                    Coords: i,
                    Domain: [0, 1],
                    Function: o,
                    Extend: [!0, !0]
                }), e.attach(a), a._resourceName = "S" + ++oe, s && (e.GRAD_COL[s] = a)), a
            }

            function R(e, t, n, i, o, r) {
                var a, s, l;
                return r || (l = [t].concat(i), n.forEach(function (e) {
                    l.push(e.offset, e.color.a)
                }), s = T(l), a = e.GRAD_OPC[s]), a || (a = new G({
                    Type: x("ExtGState"),
                    AIS: !1,
                    CA: 1,
                    ca: 1,
                    SMask: {
                        Type: x("Mask"),
                        S: x("Luminosity"),
                        G: e.attach(new $("/a0 gs /s0 sh", {
                            Type: x("XObject"),
                            Subtype: x("Form"),
                            FormType: 1,
                            BBox: r ? [r.left, r.top + r.height, r.left + r.width, r.top] : [0, 1, 1, 0],
                            Group: {
                                Type: x("Group"),
                                S: x("Transparency"),
                                CS: x("DeviceGray"),
                                I: !0
                            },
                            Resources: {
                                ExtGState: {
                                    a0: {
                                        CA: 1,
                                        ca: 1
                                    }
                                },
                                Shading: {
                                    s0: {
                                        ColorSpace: x("DeviceGray"),
                                        Coords: i,
                                        Domain: [0, 1],
                                        ShadingType: t ? 3 : 2,
                                        Function: o,
                                        Extend: [!0, !0]
                                    }
                                }
                            }
                        }))
                    }
                }), e.attach(a), a._resourceName = "O" + ++oe, s && (e.GRAD_OPC[s] = a)), a
            }

            function M(e, t, n) {
                var i = "radial" == t.type,
                    o = E(e, t.stops),
                    r = i ? [t.start.x, t.start.y, t.start.r, t.end.x, t.end.y, t.end.r] : [t.start.x, t.start.y, t.end.x, t.end.y],
                    a = I(e, i, t.stops, r, o.colors, t.userSpace && n),
                    s = o.hasAlpha ? R(e, i, t.stops, r, o.opacities, t.userSpace && n) : null;
                return {
                    hasAlpha: o.hasAlpha,
                    shading: a,
                    opacity: s
                }
            }

            function F(t) {
                function n() {
                    return T >= D
                }

                function i() {
                    return D > T ? t[T++] : 0
                }

                function o(e) {
                    y(T), t[T++] = 255 & e, T > D && (D = T)
                }

                function r() {
                    return i() << 8 | i()
                }

                function a(e) {
                    o(e >> 8), o(e)
                }

                function s() {
                    var e = r();
                    return e >= 32768 ? e - 65536 : e
                }

                function l(e) {
                    a(0 > e ? e + 65536 : e)
                }

                function c() {
                    return 65536 * r() + r()
                }

                function d(e) {
                    a(e >>> 16 & 65535), a(65535 & e)
                }

                function u() {
                    var e = c();
                    return e >= 2147483648 ? e - 4294967296 : e
                }

                function h(e) {
                    d(0 > e ? e + 4294967296 : e)
                }

                function f() {
                    return c() / 65536
                }

                function p(e) {
                    d(Math.round(65536 * e))
                }

                function m() {
                    return u() / 65536
                }

                function g(e) {
                    h(Math.round(65536 * e))
                }

                function v(e) {
                    return w(e, i)
                }

                function _(e) {
                    return String.fromCharCode.apply(String, v(e))
                }

                function b(e) {
                    for (var t = 0; e.length > t; ++t) o(e.charCodeAt(t))
                }

                function w(e, t) {
                    for (var n = Array(e), i = 0; e > i; ++i) n[i] = t();
                    return n
                }
                var y, k, x, C, S, T = 0,
                    D = 0;
                return null == t ? t = ne ? new Uint8Array(256) : [] : D = t.length, y = ne ? function (e) {
                    if (e >= t.length) {
                        var n = new Uint8Array(Math.max(e + 256, 2 * t.length));
                        n.set(t, 0), t = n
                    }
                } : function () { }, k = ne ? function () {
                    return new Uint8Array(t.buffer, 0, D)
                } : function () {
                    return t
                }, x = ne ? function (e) {
                    if ("string" == typeof e) return b(e);
                    var n = e.length;
                    y(T + n), t.set(e, T), T += n, T > D && (D = T)
                } : function (e) {
                    if ("string" == typeof e) return b(e);
                    for (var t = 0; e.length > t; ++t) o(e[t])
                }, C = ne ? function (e, n) {
                    if (t.buffer.slice) return new Uint8Array(t.buffer.slice(e, e + n));
                    var i = new Uint8Array(n);
                    return i.set(new Uint8Array(t.buffer, e, n)), i
                } : function (e, n) {
                    return t.slice(e, e + n)
                }, S = {
                    eof: n,
                    readByte: i,
                    writeByte: o,
                    readShort: r,
                    writeShort: a,
                    readLong: c,
                    writeLong: d,
                    readFixed: f,
                    writeFixed: p,
                    readShort_: s,
                    writeShort_: l,
                    readLong_: u,
                    writeLong_: h,
                    readFixed_: m,
                    writeFixed_: g,
                    read: v,
                    write: x,
                    readString: _,
                    writeString: b,
                    times: w,
                    get: k,
                    slice: C,
                    offset: function (e) {
                        return null != e ? (T = e, S) : T
                    },
                    skip: function (e) {
                        T += e
                    },
                    toString: function () {
                        throw Error("FIX CALLER.  BinaryStream is no longer convertible to string!")
                    },
                    length: function () {
                        return D
                    },
                    saveExcursion: function (e) {
                        var t = T;
                        try {
                            return e()
                        } finally {
                            T = t
                        }
                    },
                    writeBase64: function (t) {
                        e.atob ? b(e.atob(t)) : x(re.decode(t))
                    },
                    base64: function () {
                        return re.encode(k())
                    }
                }
            }

            function z(e) {
                return e.replace(/^\s*(['"])(.*)\1\s*$/, "$2")
            }

            function P(e) {
                var t, n = /^\s*((normal|italic)\s+)?((normal|small-caps)\s+)?((normal|bold|\d+)\s+)?(([0-9.]+)(px|pt))(\/(([0-9.]+)(px|pt)|normal))?\s+(.*?)\s*$/i,
                    i = n.exec(e);
                return i ? (t = i[8] ? parseInt(i[8], 10) : 12, {
                    italic: i[2] && "italic" == i[2].toLowerCase(),
                    variant: i[4],
                    bold: i[6] && /bold|700/i.test(i[6]),
                    fontSize: t,
                    lineHeight: i[12] ? "normal" == i[12] ? t : parseInt(i[12], 10) : null,
                    fontFamily: i[14].split(/\s*,\s*/g).map(z)
                }) : {
                        fontSize: 12,
                        fontFamily: "sans-serif"
                    }
            }

            function B(e) {
                function t(t) {
                    return e.bold && (t += "|bold"), e.italic && (t += "|italic"), t.toLowerCase()
                }
                var n, i, o, r = e.fontFamily;
                if (r instanceof Array)
                    for (o = 0; r.length > o && (n = t(r[o]), !(i = ee[n])); ++o);
                else i = ee[r.toLowerCase()];
                for (;
                    "function" == typeof i;) i = i();
                return i || (i = "Times-Roman"), i
            }

            function L(e, t) {
                e = e.toLowerCase(), ee[e] = function () {
                    return ee[t]
                }, ee[e + "|bold"] = function () {
                    return ee[t + "|bold"]
                }, ee[e + "|italic"] = function () {
                    return ee[t + "|italic"]
                }, ee[e + "|bold|italic"] = function () {
                    return ee[t + "|bold|italic"]
                }
            }

            function H(e, t) {
                if (1 == arguments.length)
                    for (var n in e) f(e, n) && H(n, e[n]);
                else switch (e = e.toLowerCase(), ee[e] = t, e) {
                    case "dejavu sans":
                        ee["sans-serif"] = t;
                        break;
                    case "dejavu sans|bold":
                        ee["sans-serif|bold"] = t;
                        break;
                    case "dejavu sans|italic":
                        ee["sans-serif|italic"] = t;
                        break;
                    case "dejavu sans|bold|italic":
                        ee["sans-serif|bold|italic"] = t;
                        break;
                    case "dejavu serif":
                        ee.serif = t;
                        break;
                    case "dejavu serif|bold":
                        ee["serif|bold"] = t;
                        break;
                    case "dejavu serif|italic":
                        ee["serif|italic"] = t;
                        break;
                    case "dejavu serif|bold|italic":
                        ee["serif|bold|italic"] = t;
                        break;
                    case "dejavu mono":
                        ee.monospace = t;
                        break;
                    case "dejavu mono|bold":
                        ee["monospace|bold"] = t;
                        break;
                    case "dejavu mono|italic":
                        ee["monospace|italic"] = t;
                        break;
                    case "dejavu mono|bold|italic":
                        ee["monospace|bold|italic"] = t
                }
            }

            function N(e, t) {
                var n = e[0],
                    i = e[1],
                    o = e[2],
                    r = e[3],
                    a = e[4],
                    s = e[5],
                    l = t[0],
                    c = t[1],
                    d = t[2],
                    u = t[3],
                    h = t[4],
                    f = t[5];
                return [n * l + i * d, n * c + i * u, o * l + r * d, o * c + r * u, a * l + s * d + h, a * c + s * u + f]
            }

            function O(e) {
                return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5]
            }
            var V, W, U, j, q, G, $, Y, K, Q, X, J, Z, ee, te = e.kendo,
                ne = !!e.Uint8Array,
                ie = "\n",
                oe = 0,
                re = function () {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    return {
                        decode: function (t) {
                            for (var n, i, o, r, a, s, l, c = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""), d = 0, u = c.length, h = []; u > d;) n = e.indexOf(c.charAt(d++)), i = e.indexOf(c.charAt(d++)), o = e.indexOf(c.charAt(d++)), r = e.indexOf(c.charAt(d++)), a = n << 2 | i >>> 4, s = (15 & i) << 4 | o >>> 2, l = (3 & o) << 6 | r, h.push(a), 64 != o && h.push(s), 64 != r && h.push(l);
                            return h
                        },
                        encode: function (t) {
                            for (var n, i, o, r, a, s, l, c = 0, d = t.length, u = ""; d > c;) n = t[c++], i = t[c++], o = t[c++], r = n >>> 2, a = (3 & n) << 4 | i >>> 4, s = (15 & i) << 2 | o >>> 6, l = 63 & o, c - d == 2 ? s = l = 64 : c - d == 1 && (l = 64), u += e.charAt(r) + e.charAt(a) + e.charAt(s) + e.charAt(l);
                            return u
                        }
                    }
                }(),
                ae = {
                    a0: [2383.94, 3370.39],
                    a1: [1683.78, 2383.94],
                    a2: [1190.55, 1683.78],
                    a3: [841.89, 1190.55],
                    a4: [595.28, 841.89],
                    a5: [419.53, 595.28],
                    a6: [297.64, 419.53],
                    a7: [209.76, 297.64],
                    a8: [147.4, 209.76],
                    a9: [104.88, 147.4],
                    a10: [73.7, 104.88],
                    b0: [2834.65, 4008.19],
                    b1: [2004.09, 2834.65],
                    b2: [1417.32, 2004.09],
                    b3: [1000.63, 1417.32],
                    b4: [708.66, 1000.63],
                    b5: [498.9, 708.66],
                    b6: [354.33, 498.9],
                    b7: [249.45, 354.33],
                    b8: [175.75, 249.45],
                    b9: [124.72, 175.75],
                    b10: [87.87, 124.72],
                    c0: [2599.37, 3676.54],
                    c1: [1836.85, 2599.37],
                    c2: [1298.27, 1836.85],
                    c3: [918.43, 1298.27],
                    c4: [649.13, 918.43],
                    c5: [459.21, 649.13],
                    c6: [323.15, 459.21],
                    c7: [229.61, 323.15],
                    c8: [161.57, 229.61],
                    c9: [113.39, 161.57],
                    c10: [79.37, 113.39],
                    executive: [521.86, 756],
                    folio: [612, 936],
                    legal: [612, 1008],
                    letter: [612, 792],
                    tabloid: [792, 1224]
                },
                se = {
                    "Times-Roman": !0,
                    "Times-Bold": !0,
                    "Times-Italic": !0,
                    "Times-BoldItalic": !0,
                    Helvetica: !0,
                    "Helvetica-Bold": !0,
                    "Helvetica-Oblique": !0,
                    "Helvetica-BoldOblique": !0,
                    Courier: !0,
                    "Courier-Bold": !0,
                    "Courier-Oblique": !0,
                    "Courier-BoldOblique": !0,
                    Symbol: !0,
                    ZapfDingbats: !0
                },
                le = {},
                ce = d(l),
                de = d(c);
            a.prototype = {
                loadFonts: ce,
                loadImages: de,
                getFont: function (e) {
                    var t = this.FONTS[e];
                    if (!t) {
                        if (t = se[e], !t) throw Error("Font " + e + " has not been loaded");
                        t = this.attach(t === !0 ? new Q(e) : new X(this, t)), this.FONTS[e] = t
                    }
                    return t
                },
                getImage: function (e) {
                    var t = this.IMAGES[e];
                    if (!t) {
                        if (t = le[e], !t) throw Error("Image " + e + " has not been loaded");
                        if ("TAINTED" === t) return null;
                        t = this.IMAGES[e] = this.attach(t.asStream(this))
                    }
                    return t
                },
                getOpacityGS: function (e, n) {
                    var i, o, r, a = t(e).toFixed(3);
                    return e = t(a), a += n ? "S" : "F", i = this._opacityGSCache || (this._opacityGSCache = {}), o = i[a], o || (r = {
                        Type: x("ExtGState")
                    }, n ? r.CA = e : r.ca = e, o = this.attach(new G(r)), o._resourceName = x("GS" + ++oe), i[a] = o), o
                },
                dict: function (e) {
                    return new G(e)
                },
                name: function (e) {
                    return x(e)
                },
                stream: function (e, t) {
                    return new $(t, e)
                }
            }, V = Array.isArray || function (e) {
                return e instanceof Array
            }, y.prototype.beforeRender = function () { }, W = k(function (e) {
                this.value = e
            }, {
                    render: function (e) {
                        var t, n = "",
                            i = this.escape();
                        for (t = 0; i.length > t; ++t) n += String.fromCharCode(255 & i.charCodeAt(t));
                        e("(", n, ")")
                    },
                    escape: function () {
                        return this.value.replace(/([\(\)\\])/g, "\\$1")
                    },
                    toString: function () {
                        return this.value
                    }
                }), U = k(function (e) {
                    this.value = e
                }, {
                        render: function (e) {
                            e("<");
                            for (var t = 0; this.value.length > t; ++t) e(h(this.value.charCodeAt(t).toString(16), 4));
                            e(">")
                        }
                    }, W), j = k(function (e) {
                        this.name = e
                    }, {
                            render: function (e) {
                                e("/" + this.escape())
                            },
                            escape: function () {
                                return this.name.replace(/[^\x21-\x7E]/g, function (e) {
                                    return "#" + h(e.charCodeAt(0).toString(16), 2)
                                })
                            },
                            toString: function () {
                                return this.name
                            }
                        }), q = {}, j.get = x, G = k(function (e) {
                            this.props = e
                        }, {
                                render: function (e) {
                                    var t = this.props,
                                        n = !0;
                                    e("<<"), e.withIndent(function () {
                                        for (var i in t) f(t, i) && !/^_/.test(i) && (n = !1, e.indent(x(i), " ", t[i]))
                                    }), n || e.indent(), e(">>")
                                }
                            }), $ = k(function (e, t, n) {
                                if ("string" == typeof e) {
                                    var i = F();
                                    i.write(e), e = i
                                }
                                this.data = e, this.props = t || {}, this.compress = n
                            }, {
                                    render: function (t) {
                                        var n = this.data.get(),
                                            i = this.props;
                                        this.compress && e.pako && "function" == typeof e.pako.deflate && (i.Filter ? i.Filter instanceof Array || (i.Filter = [i.Filter]) : i.Filter = [], i.Filter.unshift(x("FlateDecode")), n = e.pako.deflate(n)), i.Length = n.length, t(new G(i), " stream", ie), t.writeData(n), t(ie, "endstream")
                                    }
                                }), Y = k(function (e) {
                                    e = this.props = e || {}, e.Type = x("Catalog")
                                }, {
                                        setPages: function (e) {
                                            this.props.Pages = e
                                        }
                                    }, G), K = k(function () {
                                        this.props = {
                                            Type: x("Pages"),
                                            Kids: [],
                                            Count: 0
                                        }
                                    }, {
                                            addPage: function (e) {
                                                this.props.Kids.push(e), this.props.Count++
                                            }
                                        }, G), Q = k(function (e) {
                                            this.props = {
                                                Type: x("Font"),
                                                Subtype: x("Type1"),
                                                BaseFont: x(e)
                                            }, this._resourceName = x("F" + ++oe)
                                        }, {
                                                encodeText: function (e) {
                                                    return new W(e + "")
                                                }
                                            }, G), X = k(function (e, t, n) {
                                                var i, o;
                                                n = this.props = n || {}, n.Type = x("Font"), n.Subtype = x("Type0"), n.Encoding = x("Identity-H"), this._pdf = e, this._font = t, this._sub = t.makeSubset(), this._resourceName = x("F" + ++oe), i = t.head, this.name = t.psName, o = this.scale = t.scale, this.bbox = [i.xMin * o, i.yMin * o, i.xMax * o, i.yMax * o], this.italicAngle = t.post.italicAngle, this.ascent = t.ascent * o, this.descent = t.descent * o, this.lineGap = t.lineGap * o, this.capHeight = t.os2.capHeight || this.ascent, this.xHeight = t.os2.xHeight || 0, this.stemV = 0, this.familyClass = (t.os2.familyClass || 0) >> 8, this.isSerif = this.familyClass >= 1 && 7 >= this.familyClass, this.isScript = 10 == this.familyClass, this.flags = (t.post.isFixedPitch ? 1 : 0) | (this.isSerif ? 2 : 0) | (this.isScript ? 8 : 0) | (0 !== this.italicAngle ? 64 : 0) | 32
                                            }, {
                                                    encodeText: function (e) {
                                                        return new U(this._sub.encodeText(e + ""))
                                                    },
                                                    getTextWidth: function (e, t) {
                                                        var n, i, o = 0,
                                                            r = this._font.cmap.codeMap;
                                                        for (n = 0; t.length > n; ++n) i = r[t.charCodeAt(n)], o += this._font.widthOfGlyph(i || 0);
                                                        return o * e / 1e3
                                                    },
                                                    beforeRender: function () {
                                                        var e, t, n, o, r = this,
                                                            a = r._sub,
                                                            s = a.render(),
                                                            l = new $(F(s), {
                                                                Length1: s.length
                                                            }, !0),
                                                            c = r._pdf.attach(new G({
                                                                Type: x("FontDescriptor"),
                                                                FontName: x(r._sub.psName),
                                                                FontBBox: r.bbox,
                                                                Flags: r.flags,
                                                                StemV: r.stemV,
                                                                ItalicAngle: r.italicAngle,
                                                                Ascent: r.ascent,
                                                                Descent: r.descent,
                                                                CapHeight: r.capHeight,
                                                                XHeight: r.xHeight,
                                                                FontFile2: r._pdf.attach(l)
                                                            })),
                                                            d = a.ncid2ogid,
                                                            u = a.firstChar,
                                                            h = a.lastChar,
                                                            f = [];
                                                        ! function p(e, t) {
                                                            if (h >= e) {
                                                                var n = d[e];
                                                                null == n ? p(e + 1) : (t || f.push(e, t = []), t.push(r._font.widthOfGlyph(n)), p(e + 1, t))
                                                            }
                                                        }(u), e = new G({
                                                            Type: x("Font"),
                                                            Subtype: x("CIDFontType2"),
                                                            BaseFont: x(r._sub.psName),
                                                            CIDSystemInfo: new G({
                                                                Registry: new W("Adobe"),
                                                                Ordering: new W("Identity"),
                                                                Supplement: 0
                                                            }),
                                                            FontDescriptor: c,
                                                            FirstChar: u,
                                                            LastChar: h,
                                                            DW: Math.round(r._font.widthOfGlyph(0)),
                                                            W: f,
                                                            CIDToGIDMap: r._pdf.attach(r._makeCidToGidMap())
                                                        }), t = r.props, t.BaseFont = x(r._sub.psName), t.DescendantFonts = [r._pdf.attach(e)], n = new J(u, h, a.subset), o = new $(i(), null, !0), o.data(n), t.ToUnicode = r._pdf.attach(o)
                                                    },
                                                    _makeCidToGidMap: function () {
                                                        return new $(F(this._sub.cidToGidMap()), null, !0)
                                                    }
                                                }, G), J = k(function (e, t, n) {
                                                    this.firstChar = e, this.lastChar = t, this.map = n
                                                }, {
                                                        render: function (e) {
                                                            e.indent("/CIDInit /ProcSet findresource begin"), e.indent("12 dict begin"), e.indent("begincmap"), e.indent("/CIDSystemInfo <<"), e.indent("  /Registry (Adobe)"), e.indent("  /Ordering (UCS)"), e.indent("  /Supplement 0"), e.indent(">> def"), e.indent("/CMapName /Adobe-Identity-UCS def"), e.indent("/CMapType 2 def"), e.indent("1 begincodespacerange"), e.indent("  <0000><ffff>"), e.indent("endcodespacerange");
                                                            var t = this;
                                                            e.indent(t.lastChar - t.firstChar + 1, " beginbfchar"), e.withIndent(function () {
                                                                var n, i, o, r;
                                                                for (n = t.firstChar; t.lastChar >= n; ++n) {
                                                                    for (i = t.map[n], o = te.util.ucs2encode([i]), e.indent("<", h(n.toString(16), 4), ">", "<"), r = 0; o.length > r; ++r) e(h(o.charCodeAt(r).toString(16), 4));
                                                                    e(">")
                                                                }
                                                            }), e.indent("endbfchar"), e.indent("endcmap"), e.indent("CMapName currentdict /CMap defineresource pop"), e.indent("end"), e.indent("end")
                                                        }
                                                    }), Z = k(function (e, t) {
                                                        this._pdf = e, this._rcount = 0, this._textMode = !1, this._fontResources = {}, this._gsResources = {}, this._xResources = {}, this._patResources = {}, this._shResources = {}, this._opacity = 1, this._matrix = [1, 0, 0, 1, 0, 0], this._annotations = [], this._font = null, this._fontSize = null, this._contextStack = [], t = this.props = t || {}, t.Type = x("Page"), t.ProcSet = [x("PDF"), x("Text"), x("ImageB"), x("ImageC"), x("ImageI")], t.Resources = new G({
                                                            Font: new G(this._fontResources),
                                                            ExtGState: new G(this._gsResources),
                                                            XObject: new G(this._xResources),
                                                            Pattern: new G(this._patResources),
                                                            Shading: new G(this._shResources)
                                                        }), t.Annots = this._annotations
                                                    }, {
                                                            _out: function () {
                                                                this._content.data.apply(null, arguments)
                                                            },
                                                            transform: function (e, t, n, i, o, r) {
                                                                O(arguments) || (this._matrix = N(arguments, this._matrix), this._out(e, " ", t, " ", n, " ", i, " ", o, " ", r, " cm"), this._out(ie))
                                                            },
                                                            translate: function (e, t) {
                                                                this.transform(1, 0, 0, 1, e, t)
                                                            },
                                                            scale: function (e, t) {
                                                                this.transform(e, 0, 0, t, 0, 0)
                                                            },
                                                            rotate: function (e) {
                                                                var t = Math.cos(e),
                                                                    n = Math.sin(e);
                                                                this.transform(t, n, -n, t, 0, 0)
                                                            },
                                                            beginText: function () {
                                                                this._textMode = !0, this._out("BT", ie)
                                                            },
                                                            endText: function () {
                                                                this._textMode = !1, this._out("ET", ie)
                                                            },
                                                            _requireTextMode: function () {
                                                                if (!this._textMode) throw Error("Text mode required; call page.beginText() first")
                                                            },
                                                            _requireFont: function () {
                                                                if (!this._font) throw Error("No font selected; call page.setFont() first")
                                                            },
                                                            setFont: function (e, t) {
                                                                this._requireTextMode(), null == e ? e = this._font : e instanceof X || (e = this._pdf.getFont(e)), null == t && (t = this._fontSize), this._fontResources[e._resourceName] = e, this._font = e, this._fontSize = t, this._out(e._resourceName, " ", t, " Tf", ie)
                                                            },
                                                            setTextLeading: function (e) {
                                                                this._requireTextMode(), this._out(e, " TL", ie)
                                                            },
                                                            setTextRenderingMode: function (e) {
                                                                this._requireTextMode(), this._out(e, " Tr", ie)
                                                            },
                                                            showText: function (e, t) {
                                                                var n, i;
                                                                this._requireFont(), e.length > 1 && t && this._font instanceof X && (n = this._font.getTextWidth(this._fontSize, e), i = t / n * 100, this._out(i, " Tz ")), this._out(this._font.encodeText(e), " Tj", ie)
                                                            },
                                                            showTextNL: function (e) {
                                                                this._requireFont(), this._out(this._font.encodeText(e), " '", ie)
                                                            },
                                                            addLink: function (e, t) {
                                                                var n = this._toPage({
                                                                    x: t.left,
                                                                    y: t.bottom
                                                                }),
                                                                    i = this._toPage({
                                                                        x: t.right,
                                                                        y: t.top
                                                                    });
                                                                this._annotations.push(new G({
                                                                    Type: x("Annot"),
                                                                    Subtype: x("Link"),
                                                                    Rect: [n.x, n.y, i.x, i.y],
                                                                    Border: [0, 0, 0],
                                                                    A: new G({
                                                                        Type: x("Action"),
                                                                        S: x("URI"),
                                                                        URI: new W(e)
                                                                    })
                                                                }))
                                                            },
                                                            setStrokeColor: function (e, t, n) {
                                                                this._out(e, " ", t, " ", n, " RG", ie)
                                                            },
                                                            setOpacity: function (e) {
                                                                this.setFillOpacity(e), this.setStrokeOpacity(e), this._opacity *= e
                                                            },
                                                            setStrokeOpacity: function (e) {
                                                                if (1 > e) {
                                                                    var t = this._pdf.getOpacityGS(this._opacity * e, !0);
                                                                    this._gsResources[t._resourceName] = t, this._out(t._resourceName, " gs", ie)
                                                                }
                                                            },
                                                            setFillColor: function (e, t, n) {
                                                                this._out(e, " ", t, " ", n, " rg", ie)
                                                            },
                                                            setFillOpacity: function (e) {
                                                                if (1 > e) {
                                                                    var t = this._pdf.getOpacityGS(this._opacity * e, !1);
                                                                    this._gsResources[t._resourceName] = t, this._out(t._resourceName, " gs", ie)
                                                                }
                                                            },
                                                            gradient: function (e, t) {
                                                                var n, i, o;
                                                                this.save(), this.rect(t.left, t.top, t.width, t.height), this.clip(), e.userSpace || this.transform(t.width, 0, 0, t.height, t.left, t.top), n = M(this._pdf, e, t), i = n.shading._resourceName, this._shResources[i] = n.shading, n.hasAlpha && (o = n.opacity._resourceName, this._gsResources[o] = n.opacity, this._out("/" + o + " gs ")), this._out("/" + i + " sh", ie), this.restore()
                                                            },
                                                            setDashPattern: function (e, t) {
                                                                this._out(e, " ", t, " d", ie)
                                                            },
                                                            setLineWidth: function (e) {
                                                                this._out(e, " w", ie)
                                                            },
                                                            setLineCap: function (e) {
                                                                this._out(e, " J", ie)
                                                            },
                                                            setLineJoin: function (e) {
                                                                this._out(e, " j", ie)
                                                            },
                                                            setMitterLimit: function (e) {
                                                                this._out(e, " M", ie)
                                                            },
                                                            save: function () {
                                                                this._contextStack.push(this._context()), this._out("q", ie)
                                                            },
                                                            restore: function () {
                                                                this._out("Q", ie), this._context(this._contextStack.pop())
                                                            },
                                                            moveTo: function (e, t) {
                                                                this._out(e, " ", t, " m", ie)
                                                            },
                                                            lineTo: function (e, t) {
                                                                this._out(e, " ", t, " l", ie)
                                                            },
                                                            bezier: function (e, t, n, i, o, r) {
                                                                this._out(e, " ", t, " ", n, " ", i, " ", o, " ", r, " c", ie)
                                                            },
                                                            bezier1: function (e, t, n, i) {
                                                                this._out(e, " ", t, " ", n, " ", i, " y", ie)
                                                            },
                                                            bezier2: function (e, t, n, i) {
                                                                this._out(e, " ", t, " ", n, " ", i, " v", ie)
                                                            },
                                                            close: function () {
                                                                this._out("h", ie)
                                                            },
                                                            rect: function (e, t, n, i) {
                                                                this._out(e, " ", t, " ", n, " ", i, " re", ie)
                                                            },
                                                            ellipse: function (e, t, n, i) {
                                                                function o(t) {
                                                                    return e + t
                                                                }

                                                                function r(e) {
                                                                    return t + e
                                                                }
                                                                var a = .5522847498307936;
                                                                this.moveTo(o(0), r(i)), this.bezier(o(n * a), r(i), o(n), r(i * a), o(n), r(0)), this.bezier(o(n), r(-i * a), o(n * a), r(-i), o(0), r(-i)), this.bezier(o(-n * a), r(-i), o(-n), r(-i * a), o(-n), r(0)), this.bezier(o(-n), r(i * a), o(-n * a), r(i), o(0), r(i))
                                                            },
                                                            circle: function (e, t, n) {
                                                                this.ellipse(e, t, n, n)
                                                            },
                                                            stroke: function () {
                                                                this._out("S", ie)
                                                            },
                                                            nop: function () {
                                                                this._out("n", ie)
                                                            },
                                                            clip: function () {
                                                                this._out("W n", ie)
                                                            },
                                                            clipStroke: function () {
                                                                this._out("W S", ie)
                                                            },
                                                            closeStroke: function () {
                                                                this._out("s", ie)
                                                            },
                                                            fill: function () {
                                                                this._out("f", ie)
                                                            },
                                                            fillStroke: function () {
                                                                this._out("B", ie)
                                                            },
                                                            drawImage: function (e) {
                                                                var t = this._pdf.getImage(e);
                                                                t && (this._xResources[t._resourceName] = t, this._out(t._resourceName, " Do", ie))
                                                            },
                                                            comment: function (e) {
                                                                var t = this;
                                                                e.split(/\r?\n/g).forEach(function (e) {
                                                                    t._out("% ", e, ie)
                                                                })
                                                            },
                                                            _context: function (e) {
                                                                return null == e ? {
                                                                    opacity: this._opacity,
                                                                    matrix: this._matrix
                                                                } : (this._opacity = e.opacity, this._matrix = e.matrix, n)
                                                            },
                                                            _toPage: function (e) {
                                                                var t = this._matrix,
                                                                    n = t[0],
                                                                    i = t[1],
                                                                    o = t[2],
                                                                    r = t[3],
                                                                    a = t[4],
                                                                    s = t[5];
                                                                return {
                                                                    x: n * e.x + o * e.y + a,
                                                                    y: i * e.x + r * e.y + s
                                                                }
                                                            }
                                                        }, G), ee = {
                                                            serif: "Times-Roman",
                                                            "serif|bold": "Times-Bold",
                                                            "serif|italic": "Times-Italic",
                                                            "serif|bold|italic": "Times-BoldItalic",
                                                            "sans-serif": "Helvetica",
                                                            "sans-serif|bold": "Helvetica-Bold",
                                                            "sans-serif|italic": "Helvetica-Oblique",
                                                            "sans-serif|bold|italic": "Helvetica-BoldOblique",
                                                            monospace: "Courier",
                                                            "monospace|bold": "Courier-Bold",
                                                            "monospace|italic": "Courier-Oblique",
                                                            "monospace|bold|italic": "Courier-BoldOblique",
                                                            zapfdingbats: "ZapfDingbats",
                                                            "zapfdingbats|bold": "ZapfDingbats",
                                                            "zapfdingbats|italic": "ZapfDingbats",
                                                            "zapfdingbats|bold|italic": "ZapfDingbats"
                                                        }, L("Times New Roman", "serif"), L("Courier New", "monospace"), L("Arial", "sans-serif"), L("Helvetica", "sans-serif"), L("Verdana", "sans-serif"), L("Tahoma", "sans-serif"), L("Georgia", "sans-serif"), L("Monaco", "monospace"), L("Andale Mono", "monospace"), te.pdf = {
                                                            Document: a,
                                                            BinaryStream: F,
                                                            defineFont: H,
                                                            parseFontDef: P,
                                                            getFontURL: B,
                                                            loadFonts: ce,
                                                            loadImages: de,
                                                            getPaperOptions: r,
                                                            TEXT_RENDERING_MODE: {
                                                                fill: 0,
                                                                stroke: 1,
                                                                fillAndStroke: 2,
                                                                invisible: 3,
                                                                fillAndClip: 4,
                                                                strokeAndClip: 5,
                                                                fillStrokeClip: 6,
                                                                clip: 7
                                                            }
                                                        }
        }(window, parseFloat)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("pdf/ttf.min", ["pdf/core.min", "util/main.min"], e)
    }(function () {
        ! function (e) {
            "use strict";

            function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function n(e) {
                return Object.keys(e).sort(function (e, t) {
                    return e - t
                }).map(parseFloat)
            }

            function i(e) {
                var t, n, i;
                for (this.raw = e, this.scalerType = e.readLong(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), t = this.tables = {}, n = 0; this.tableCount > n; ++n) i = {
                    tag: e.readString(4),
                    checksum: e.readLong(),
                    offset: e.readLong(),
                    length: e.readLong()
                }, t[i.tag] = i
            }

            function o(e) {
                function n(e, t) {
                    this.definition = t, this.length = t.length, this.offset = t.offset, this.file = e, this.rawData = e.raw, this.parse(e.raw)
                }
                n.prototype.raw = function () {
                    return this.rawData.slice(this.offset, this.length)
                };
                for (var i in e) t(e, i) && (n[i] = n.prototype[i] = e[i]);
                return n
            }

            function r() {
                var e, t = "",
                    n = _ + "";
                for (e = 0; n.length > e; ++e) t += String.fromCharCode(n.charCodeAt(e) - 48 + 65);
                return ++_, t
            }

            function a(e) {
                this.font = e, this.subset = {}, this.unicodes = {}, this.ogid2ngid = {
                    0: 0
                }, this.ngid2ogid = {
                    0: 0
                }, this.ncid2ogid = {}, this.next = this.firstChar = 1, this.nextGid = 1, this.psName = r() + "+" + this.font.psName
            }

            function s(e, t) {
                var n, i, o, r = this,
                    a = r.contents = w(e);
                if ("ttcf" == a.readString(4)) {
                    if (!t) throw Error("Must specify a name for TTC files");
                    for (a.readLong(), n = a.readLong(), i = 0; n > i; ++i)
                        if (o = a.readLong(), a.saveExcursion(function () {
                            a.offset(o), r.parse()
                        }), r.psName == t) return;
                    throw Error("Font " + t + " not found in collection")
                }
                a.offset(0), r.parse()
            }
            var l, c, d, u, h, f, p, m, g, v, _, b = e.kendo.pdf,
                w = b.BinaryStream;
            i.prototype = {
                readTable: function (e, t) {
                    var n = this.tables[e];
                    if (!n) throw Error("Table " + e + " not found in directory");
                    return this[e] = n.table = new t(this, n)
                },
                render: function (e) {
                    var n, i, o, r, a, s, l, c, d = Object.keys(e).length,
                        u = Math.pow(2, Math.floor(Math.log(d) / Math.LN2)),
                        h = 16 * u,
                        f = Math.floor(Math.log(u) / Math.LN2),
                        p = 16 * d - h,
                        m = w();
                    m.writeLong(this.scalerType), m.writeShort(d), m.writeShort(h), m.writeShort(f), m.writeShort(p), n = 16 * d, i = m.offset() + n, o = null, r = w();
                    for (a in e)
                        if (t(e, a))
                            for (s = e[a], m.writeString(a), m.writeLong(this.checksum(s)), m.writeLong(i), m.writeLong(s.length), r.write(s), "head" == a && (o = i), i += s.length; i % 4;) r.writeByte(0), i++;
                    return m.write(r.get()), l = this.checksum(m.get()), c = 2981146554 - l, m.offset(o + 8), m.writeLong(c), m.get()
                },
                checksum: function (e) {
                    e = w(e);
                    for (var t = 0; !e.eof();) t += e.readLong();
                    return 4294967295 & t
                }
            }, l = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readLong(), this.revision = e.readLong(), this.checkSumAdjustment = e.readLong(), this.magicNumber = e.readLong(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.read(8), this.modified = e.read(8), this.xMin = e.readShort_(), this.yMin = e.readShort_(), this.xMax = e.readShort_(), this.yMax = e.readShort_(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort_(), this.indexToLocFormat = e.readShort_(), this.glyphDataFormat = e.readShort_()
                },
                render: function (e) {
                    var t = w();
                    return t.writeLong(this.version), t.writeLong(this.revision), t.writeLong(0), t.writeLong(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.write(this.created), t.write(this.modified), t.writeShort_(this.xMin), t.writeShort_(this.yMin), t.writeShort_(this.xMax), t.writeShort_(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort_(this.fontDirectionHint), t.writeShort_(e), t.writeShort_(this.glyphDataFormat), t.get()
                }
            }), c = o({
                parse: function (e) {
                    e.offset(this.offset);
                    var t = this.file.head.indexToLocFormat;
                    this.offsets = 0 === t ? e.times(this.length / 2, function () {
                        return 2 * e.readShort()
                    }) : e.times(this.length / 4, e.readLong)
                },
                offsetOf: function (e) {
                    return this.offsets[e]
                },
                lengthOf: function (e) {
                    return this.offsets[e + 1] - this.offsets[e]
                },
                render: function (e) {
                    var t, n = w(),
                        i = e[e.length - 1] > 65535;
                    for (t = 0; e.length > t; ++t) i ? n.writeLong(e[t]) : n.writeShort(e[t] / 2);
                    return {
                        format: i ? 1 : 0,
                        table: n.get()
                    }
                }
            }), d = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readLong(), this.ascent = e.readShort_(), this.descent = e.readShort_(), this.lineGap = e.readShort_(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort_(), this.minRightSideBearing = e.readShort_(), this.xMaxExtent = e.readShort_(), this.caretSlopeRise = e.readShort_(), this.caretSlopeRun = e.readShort_(), this.caretOffset = e.readShort_(), e.skip(8), this.metricDataFormat = e.readShort_(), this.numOfLongHorMetrics = e.readShort()
                },
                render: function (e) {
                    var t = w();
                    return t.writeLong(this.version), t.writeShort_(this.ascent), t.writeShort_(this.descent), t.writeShort_(this.lineGap), t.writeShort(this.advanceWidthMax), t.writeShort_(this.minLeftSideBearing), t.writeShort_(this.minRightSideBearing), t.writeShort_(this.xMaxExtent), t.writeShort_(this.caretSlopeRise), t.writeShort_(this.caretSlopeRun), t.writeShort_(this.caretOffset), t.write([0, 0, 0, 0, 0, 0, 0, 0]), t.writeShort_(this.metricDataFormat), t.writeShort(e.length), t.get()
                }
            }), u = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readLong(), this.numGlyphs = e.readShort(), this.maxPoints = e.readShort(), this.maxContours = e.readShort(), this.maxComponentPoints = e.readShort(), this.maxComponentContours = e.readShort(), this.maxZones = e.readShort(), this.maxTwilightPoints = e.readShort(), this.maxStorage = e.readShort(), this.maxFunctionDefs = e.readShort(), this.maxInstructionDefs = e.readShort(), this.maxStackElements = e.readShort(), this.maxSizeOfInstructions = e.readShort(), this.maxComponentElements = e.readShort(), this.maxComponentDepth = e.readShort()
                },
                render: function (e) {
                    var t = w();
                    return t.writeLong(this.version), t.writeShort(e.length), t.writeShort(this.maxPoints), t.writeShort(this.maxContours), t.writeShort(this.maxComponentPoints), t.writeShort(this.maxComponentContours), t.writeShort(this.maxZones), t.writeShort(this.maxTwilightPoints), t.writeShort(this.maxStorage), t.writeShort(this.maxFunctionDefs), t.writeShort(this.maxInstructionDefs), t.writeShort(this.maxStackElements), t.writeShort(this.maxSizeOfInstructions), t.writeShort(this.maxComponentElements), t.writeShort(this.maxComponentDepth), t.get()
                }
            }), h = o({
                parse: function (e) {
                    var t, n, i;
                    e.offset(this.offset), t = this.file, n = t.hhea, this.metrics = e.times(n.numOfLongHorMetrics, function () {
                        return {
                            advance: e.readShort(),
                            lsb: e.readShort_()
                        }
                    }), i = t.maxp.numGlyphs - t.hhea.numOfLongHorMetrics, this.leftSideBearings = e.times(i, e.readShort_)
                },
                forGlyph: function (e) {
                    var t = this.metrics,
                        n = t.length;
                    return n > e ? t[e] : {
                        advance: t[n - 1].advance,
                        lsb: this.leftSideBearings[e - n]
                    }
                },
                render: function (e) {
                    var t, n, i = w();
                    for (t = 0; e.length > t; ++t) n = this.forGlyph(e[t]), i.writeShort(n.advance), i.writeShort_(n.lsb);
                    return i.get()
                }
            }), f = function () {
                function e(e) {
                    this.raw = e
                }

                function n(e) {
                    var t, n, o;
                    for (this.raw = e, t = this.glyphIds = [], n = this.idOffsets = []; ;) {
                        if (o = e.readShort(), n.push(e.offset()), t.push(e.readShort()), !(o & a)) break;
                        e.skip(o & i ? 4 : 2), o & l ? e.skip(8) : o & s ? e.skip(4) : o & r && e.skip(2)
                    }
                }
                var i, r, a, s, l;
                return e.prototype = {
                    compound: !1,
                    render: function () {
                        return this.raw.get()
                    }
                }, i = 1, r = 8, a = 32, s = 64, l = 128, n.prototype = {
                    compound: !0,
                    render: function (e) {
                        var t, n, i = w(this.raw.get());
                        for (t = 0; this.glyphIds.length > t; ++t) n = this.glyphIds[t], i.offset(this.idOffsets[t]), i.writeShort(e[n]);
                        return i.get()
                    }
                }, o({
                    parse: function () {
                        this.cache = {}
                    },
                    glyphFor: function (i) {
                        var o, r, a, s, l, c, d, u, h, f, p, m = this.cache;
                        return t(m, i) ? m[i] : (o = this.file.loca, r = o.lengthOf(i), 0 === r ? m[i] = null : (a = this.rawData, s = this.offset + o.offsetOf(i), l = w(a.slice(s, r)), c = l.readShort_(), d = l.readShort_(), u = l.readShort_(), h = l.readShort_(), f = l.readShort_(), p = m[i] = -1 == c ? new n(l) : new e(l), p.numberOfContours = c, p.xMin = d, p.yMin = u, p.xMax = h, p.yMax = f, p))
                    },
                    render: function (e, t, n) {
                        var i, o, r, a = w(),
                            s = [];
                        for (i = 0; t.length > i; ++i) o = t[i], r = e[o], s.push(a.offset()), r && a.write(r.render(n));
                        return s.push(a.offset()), {
                            table: a.get(),
                            offsets: s
                        }
                    }
                })
            }(), p = function () {
                function e(e, t) {
                    this.text = e, this.length = e.length, this.platformID = t.platformID, this.platformSpecificID = t.platformSpecificID, this.languageID = t.languageID, this.nameID = t.nameID
                }
                return o({
                    parse: function (t) {
                        var n, i, o, r, a, s, l;
                        for (t.offset(this.offset), t.readShort(), n = t.readShort(), i = this.offset + t.readShort(), o = t.times(n, function () {
                            return {
                                platformID: t.readShort(),
                                platformSpecificID: t.readShort(),
                                languageID: t.readShort(),
                                nameID: t.readShort(),
                                length: t.readShort(),
                                offset: t.readShort() + i
                            }
                        }), r = this.strings = {}, a = 0; o.length > a; ++a) s = o[a], t.offset(s.offset), l = t.readString(s.length), r[s.nameID] || (r[s.nameID] = []), r[s.nameID].push(new e(l, s));
                        this.postscriptEntry = r[6][0], this.postscriptName = this.postscriptEntry.text.replace(/[^\x20-\x7F]/g, "")
                    },
                    render: function (n) {
                        var i, o, r, a, s, l, c = this.strings,
                            d = 0;
                        for (i in c) t(c, i) && (d += c[i].length);
                        o = w(), r = w(), o.writeShort(0), o.writeShort(d), o.writeShort(6 + 12 * d);
                        for (i in c)
                            if (t(c, i))
                                for (a = 6 == i ? [new e(n, this.postscriptEntry)] : c[i], s = 0; a.length > s; ++s) l = a[s], o.writeShort(l.platformID), o.writeShort(l.platformSpecificID), o.writeShort(l.languageID), o.writeShort(l.nameID), o.writeShort(l.length), o.writeShort(r.offset()), r.writeString(l.text);
                        return o.write(r.get()), o.get()
                    }
                })
            }(), m = function () {
                var e = ".notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent ampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash zero one two three four five six seven eight nine colon semicolon less equal greater question at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z bracketleft backslash bracketright asciicircum underscore grave a b c d e f g h i j k l m n o p q r s t u v w x y z braceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis Udieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave ecircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve ocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent sterling section bullet paragraph germandbls registered copyright trademark acute dieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu partialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash questiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft guillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash quotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis fraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered quotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis Egrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute Ucircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla hungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth eth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior onehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla Cacute cacute Ccaron ccaron dcroat".split(/\s+/g);
                return o({
                    parse: function (e) {
                        var t, n;
                        switch (e.offset(this.offset), this.format = e.readLong(), this.italicAngle = e.readFixed_(), this.underlinePosition = e.readShort_(), this.underlineThickness = e.readShort_(), this.isFixedPitch = e.readLong(), this.minMemType42 = e.readLong(), this.maxMemType42 = e.readLong(), this.minMemType1 = e.readLong(), this.maxMemType1 = e.readLong(), this.format) {
                            case 65536:
                            case 196608:
                                break;
                            case 131072:
                                for (t = e.readShort(), this.glyphNameIndex = e.times(t, e.readShort), this.names = [], n = this.offset + this.length; e.offset() < n;) this.names.push(e.readString(e.readByte()));
                                break;
                            case 151552:
                                t = e.readShort(), this.offsets = e.read(t);
                                break;
                            case 262144:
                                this.map = e.times(this.file.maxp.numGlyphs, e.readShort)
                        }
                    },
                    glyphFor: function (t) {
                        switch (this.format) {
                            case 65536:
                                return e[t] || ".notdef";
                            case 131072:
                                var n = this.glyphNameIndex[t];
                                return e.length > n ? e[n] : this.names[n - e.length] || ".notdef";
                            case 151552:
                            case 196608:
                                return ".notdef";
                            case 262144:
                                return this.map[t] || 65535
                        }
                    },
                    render: function (t) {
                        var n, i, o, r, a, s, l;
                        if (196608 == this.format) return this.raw();
                        for (n = w(this.rawData.slice(this.offset, 32)), n.writeLong(131072), n.offset(32), i = [], o = [], r = 0; t.length > r; ++r) a = t[r], s = this.glyphFor(a), l = e.indexOf(s), l >= 0 ? i.push(l) : (i.push(e.length + o.length), o.push(s));
                        for (n.writeShort(t.length), r = 0; i.length > r; ++r) n.writeShort(i[r]);
                        for (r = 0; o.length > r; ++r) n.writeByte(o[r].length), n.writeString(o[r]);
                        return n.get()
                    }
                })
            }(), g = function () {
                function t(t, n, i) {
                    var o = this;
                    o.platformID = t.readShort(), o.platformSpecificID = t.readShort(), o.offset = n + t.readLong(), t.saveExcursion(function () {
                        var n, r, a, s, l, c, d, u, h, f, p, m, g, v, _, b, w;
                        switch (t.offset(o.offset), o.format = t.readShort()) {
                            case 0:
                                for (o.length = t.readShort(), o.language = t.readShort(), r = 0; 256 > r; ++r) i[r] = t.readByte();
                                break;
                            case 4:
                                for (o.length = t.readShort(), o.language = t.readShort(), a = t.readShort() / 2, t.skip(6), s = t.times(a, t.readShort), t.skip(2), l = t.times(a, t.readShort), c = t.times(a, t.readShort_), d = t.times(a, t.readShort), u = (o.length + o.offset - t.offset()) / 2, h = t.times(u, t.readShort), r = 0; a > r; ++r)
                                    for (f = l[r], p = s[r], n = f; p >= n; ++n) 0 === d[r] ? m = n + c[r] : (g = d[r] / 2 - (a - r) + (n - f), m = h[g] || 0, 0 !== m && (m += c[r])), i[n] = 65535 & m;
                                break;
                            case 6:
                                for (o.length = t.readShort(), o.language = t.readShort(), n = t.readShort(), v = t.readShort(); v-- > 0;) i[n++] = t.readShort();
                                break;
                            case 12:
                                for (t.readShort(), o.length = t.readLong(), o.language = t.readLong(), _ = t.readLong(); _-- > 0;)
                                    for (n = t.readLong(), b = t.readLong(), w = t.readLong(); b >= n;) i[n++] = w++;
                                break;
                            default:
                                e.console && e.console.error("Unhandled CMAP format: " + o.format)
                        }
                    })
                }

                function i(e, t) {
                    function i(n) {
                        return t[e[n]]
                    }
                    var o, r, a, s, l, c, d, u, h, f, p, m, g, v, _, b, y, k = n(e),
                        x = [],
                        C = [],
                        S = null,
                        T = null;
                    for (o = 0; k.length > o; ++o) r = k[o], a = i(r), s = a - r, null != S && s === T || (S && C.push(S), x.push(r), T = s), S = r;
                    for (S && C.push(S), C.push(65535), x.push(65535), l = x.length, c = 2 * l, d = 2 * Math.pow(2, Math.floor(Math.log(l) / Math.LN2)), u = Math.log(d / 2) / Math.LN2, h = c - d, f = [], p = [], m = [], o = 0; l > o; ++o) {
                        if (g = x[o], v = C[o], 65535 == g) {
                            f.push(0), p.push(0);
                            break
                        }
                        if (_ = i(g), g - _ >= 32768)
                            for (f.push(0), p.push(2 * (m.length + l - o)), b = g; v >= b; ++b) m.push(i(b));
                        else f.push(_ - g), p.push(0)
                    }
                    return y = w(), y.writeShort(3), y.writeShort(1), y.writeLong(12), y.writeShort(4), y.writeShort(16 + 8 * l + 2 * m.length), y.writeShort(0), y.writeShort(c), y.writeShort(d), y.writeShort(u), y.writeShort(h), C.forEach(y.writeShort), y.writeShort(0), x.forEach(y.writeShort), f.forEach(y.writeShort_), p.forEach(y.writeShort), m.forEach(y.writeShort), y.get()
                }
                return o({
                    parse: function (e) {
                        var n, i = this,
                            o = i.offset;
                        e.offset(o), i.codeMap = {}, i.version = e.readShort(), n = e.readShort(), i.tables = e.times(n, function () {
                            return new t(e, o, i.codeMap)
                        })
                    },
                    render: function (e, t) {
                        var n = w();
                        return n.writeShort(0), n.writeShort(1), n.write(i(e, t)), n.get()
                    }
                })
            }(), v = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readShort(), this.averageCharWidth = e.readShort_(), this.weightClass = e.readShort(), this.widthClass = e.readShort(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort_(), this.ySubscriptYSize = e.readShort_(), this.ySubscriptXOffset = e.readShort_(), this.ySubscriptYOffset = e.readShort_(), this.ySuperscriptXSize = e.readShort_(), this.ySuperscriptYSize = e.readShort_(), this.ySuperscriptXOffset = e.readShort_(), this.ySuperscriptYOffset = e.readShort_(), this.yStrikeoutSize = e.readShort_(), this.yStrikeoutPosition = e.readShort_(), this.familyClass = e.readShort_(), this.panose = e.times(10, e.readByte), this.charRange = e.times(4, e.readLong), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort_(), this.descent = e.readShort_(), this.lineGap = e.readShort_(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = e.times(2, e.readLong), this.version > 1 && (this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort()))
                },
                render: function () {
                    return this.raw()
                }
            }), _ = 1e5, a.prototype = {
                use: function (e) {
                    var t, n, i, o = this;
                    return "string" == typeof e ? kendo.util.ucs2decode(e).reduce(function (e, t) {
                        return e + String.fromCharCode(o.use(t))
                    }, "") : (t = o.unicodes[e], t || (t = o.next++ , o.subset[t] = e, o.unicodes[e] = t, n = o.font.cmap.codeMap[e], n && (o.ncid2ogid[t] = n, null == o.ogid2ngid[n] && (i = o.nextGid++ , o.ogid2ngid[n] = i, o.ngid2ogid[i] = n))), t)
                },
                encodeText: function (e) {
                    return this.use(e)
                },
                glyphIds: function () {
                    return n(this.ogid2ngid)
                },
                glyphsFor: function (e, t) {
                    var n, i, o;
                    for (t || (t = {}), n = 0; e.length > n; ++n) i = e[n], t[i] || (o = t[i] = this.font.glyf.glyphFor(i), o && o.compound && this.glyphsFor(o.glyphIds, t));
                    return t
                },
                render: function () {
                    var e, i, o, r, a, s, l, c, d = this.glyphsFor(this.glyphIds());
                    for (e in d) t(d, e) && (e = parseInt(e, 10), null == this.ogid2ngid[e] && (i = this.nextGid++ , this.ogid2ngid[e] = i, this.ngid2ogid[i] = e));
                    return o = n(this.ngid2ogid), r = o.map(function (e) {
                        return this.ngid2ogid[e]
                    }, this), a = this.font, s = a.glyf.render(d, r, this.ogid2ngid), l = a.loca.render(s.offsets), this.lastChar = this.next - 1, c = {
                        cmap: g.render(this.ncid2ogid, this.ogid2ngid),
                        glyf: s.table,
                        loca: l.table,
                        hmtx: a.hmtx.render(r),
                        hhea: a.hhea.render(r),
                        maxp: a.maxp.render(r),
                        post: a.post.render(r),
                        name: a.name.render(this.psName),
                        head: a.head.render(l.format),
                        "OS/2": a.os2.render()
                    }, this.font.directory.render(c)
                },
                cidToGidMap: function () {
                    var e, t, n, i = w(),
                        o = 0;
                    for (e = this.firstChar; this.next > e; ++e) {
                        for (; e > o;) i.writeShort(0), o++;
                        t = this.ncid2ogid[e], t ? (n = this.ogid2ngid[t], i.writeShort(n)) : i.writeShort(0), o++
                    }
                    return i.get()
                }
            }, s.prototype = {
                parse: function () {
                    var e = this.directory = new i(this.contents);
                    this.head = e.readTable("head", l), this.loca = e.readTable("loca", c), this.hhea = e.readTable("hhea", d), this.maxp = e.readTable("maxp", u), this.hmtx = e.readTable("hmtx", h), this.glyf = e.readTable("glyf", f), this.name = e.readTable("name", p), this.post = e.readTable("post", m), this.cmap = e.readTable("cmap", g), this.os2 = e.readTable("OS/2", v), this.psName = this.name.postscriptName, this.ascent = this.os2.ascent || this.hhea.ascent, this.descent = this.os2.descent || this.hhea.descent, this.lineGap = this.os2.lineGap || this.hhea.lineGap, this.scale = 1e3 / this.head.unitsPerEm
                },
                widthOfGlyph: function (e) {
                    return this.hmtx.forGlyph(e).advance * this.scale
                },
                makeSubset: function () {
                    return new a(this)
                }
            }, b.TTFFont = s
        }(window)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("pdf/drawing.min", ["kendo.core.min", "kendo.color.min", "kendo.drawing.min", "pdf/core.min"], e)
    }(function () {
        ! function (e, t) {
            "use strict";

            function n(t, n) {
                function i(e, t, n) {
                    return n || (n = d), n.pdf && null != n.pdf[e] ? n.pdf[e] : t
                }

                function o() {
                    function o(e) {
                        var t, n, o, r, l, c = e.options,
                            d = T(e),
                            u = d.bbox;
                        e = d.root, t = i("paperSize", i("paperSize", "auto"), c), n = !1, "auto" == t && (u ? (o = u.getSize(), t = [o.width, o.height], n = !0, r = u.getOrigin(), d = new D.Group, d.transform(new A.Matrix(1, 0, 0, 1, -r.x, -r.y)), d.append(e), e = d) : t = "A4"), l = a.addPage({
                            paperSize: t,
                            margin: i("margin", i("margin"), c),
                            addMargin: n,
                            landscape: i("landscape", i("landscape", !1), c)
                        }), s(e, l, a)
                    }
                    if (!(--r > 0)) {
                        var a = new e.pdf.Document({
                            producer: i("producer"),
                            title: i("title"),
                            author: i("author"),
                            subject: i("subject"),
                            keywords: i("keywords"),
                            creator: i("creator"),
                            date: i("date")
                        });
                        u ? t.children.forEach(o) : o(t), n(a.render(), a)
                    }
                }
                var r, l = [],
                    c = [],
                    d = t.options,
                    u = i("multiPage");
                t.traverse(function (t) {
                    a({
                        Image: function (e) {
                            c.indexOf(e.src()) < 0 && c.push(e.src())
                        },
                        Text: function (t) {
                            var n = e.pdf.parseFontDef(t.options.font),
                                i = e.pdf.getFontURL(n);
                            l.indexOf(i) < 0 && l.push(i)
                        }
                    }, t)
                }), r = 2, e.pdf.loadFonts(l, o), e.pdf.loadImages(c, o)
            }

            function i(e, t) {
                n(e, function (e) {
                    t("data:application/pdf;base64," + e.base64())
                })
            }

            function o(e, t) {
                n(e, function (e) {
                    t(new Blob([e.get()], {
                        type: "application/pdf"
                    }))
                })
            }

            function r(t, n, r, a) {
                window.Blob && !e.support.browser.safari ? o(t, function (t) {
                    e.saveAs({
                        dataURI: t,
                        fileName: n
                    }), a && a(t)
                }) : i(t, function (t) {
                    e.saveAs({
                        dataURI: t,
                        fileName: n,
                        proxyURL: r
                    }), a && a(t)
                })
            }

            function a(e, t) {
                var n = e[t.nodeType];
                return n ? n.call.apply(n, arguments) : t
            }

            function s(e, t, n) {
                var i, o, r;
                e.options._pdfDebug && t.comment("BEGIN: " + e.options._pdfDebug), i = e.transform(), o = e.opacity(), t.save(), null != o && 1 > o && t.setOpacity(o), l(e, t, n), c(e, t, n), i && (r = i.matrix(), t.transform(r.a, r.b, r.c, r.d, r.e, r.f)), d(e, t, n), a({
                    Path: g,
                    MultiPath: v,
                    Circle: _,
                    Arc: b,
                    Text: w,
                    Image: k,
                    Group: y,
                    Rect: x
                }, e, t, n), t.restore(), e.options._pdfDebug && t.comment("END: " + e.options._pdfDebug)
            }

            function l(e, t) {
                var n, i, o, r, a, s, l = e.stroke && e.stroke();
                if (l) {
                    if (n = l.color) {
                        if (n = S(n), null == n) return;
                        t.setStrokeColor(n.r, n.g, n.b), 1 != n.a && t.setStrokeOpacity(n.a)
                    }
                    if (i = l.width, null != i) {
                        if (0 === i) return;
                        t.setLineWidth(i)
                    }
                    o = l.dashType, o && t.setDashPattern(I[o], 0), r = l.lineCap, r && t.setLineCap(R[r]), a = l.lineJoin, a && t.setLineJoin(M[a]), s = l.opacity, null != s && t.setStrokeOpacity(s)
                }
            }

            function c(e, t) {
                var n, i, o = e.fill && e.fill();
                if (o && !(o instanceof D.Gradient)) {
                    if (n = o.color) {
                        if (n = S(n), null == n) return;
                        t.setFillColor(n.r, n.g, n.b), 1 != n.a && t.setFillOpacity(n.a)
                    }
                    i = o.opacity, null != i && t.setFillOpacity(i)
                }
            }

            function d(e, t, n) {
                var i = e.clip();
                i && (m(i, t, n), t.clip())
            }

            function u(e) {
                return e && (e instanceof D.Gradient || e.color && !/^(none|transparent)$/i.test(e.color) && (null == e.width || e.width > 0) && (null == e.opacity || e.opacity > 0))
            }

            function h(e, t, n, i) {
                var o, r, a, s, l, c, d, u, h = e.fill();
                return h instanceof D.Gradient ? (i ? t.clipStroke() : t.clip(), o = h instanceof D.RadialGradient, o ? (r = {
                    x: h.center().x,
                    y: h.center().y,
                    r: 0
                }, a = {
                    x: h.center().x,
                    y: h.center().y,
                    r: h.radius()
                }) : (r = {
                    x: h.start().x,
                    y: h.start().y
                }, a = {
                    x: h.end().x,
                    y: h.end().y
                }), s = h.stops.elements().map(function (e) {
                    var t, n = e.offset();
                    return n = /%$/.test(n) ? parseFloat(n) / 100 : parseFloat(n), t = S(e.color()), t.a *= e.opacity(), {
                        offset: n,
                        color: t
                    }
                }), s.unshift(s[0]), s.push(s[s.length - 1]), l = {
                    userSpace: h.userSpace(),
                    type: o ? "radial" : "linear",
                    start: r,
                    end: a,
                    stops: s
                }, c = e.rawBBox(), d = c.topLeft(), u = c.getSize(), c = {
                    left: d.x,
                    top: d.y,
                    width: u.width,
                    height: u.height
                }, t.gradient(l, c), !0) : void 0
            }

            function f(e, t, n) {
                u(e.fill()) && u(e.stroke()) ? h(e, t, n, !0) || t.fillStroke() : u(e.fill()) ? h(e, t, n, !1) || t.fill() : u(e.stroke()) ? t.stroke() : t.nop()
            }

            function p(e, t) {
                var n, i, o, r = e.segments;
                if (4 == r.length && e.options.closed) {
                    for (n = [], i = 0; r.length > i; ++i) {
                        if (r[i].controlIn()) return !1;
                        n[i] = r[i].anchor()
                    }
                    if (o = n[0].y == n[1].y && n[1].x == n[2].x && n[2].y == n[3].y && n[3].x == n[0].x || n[0].x == n[1].x && n[1].y == n[2].y && n[2].x == n[3].x && n[3].y == n[0].y) return t.rect(n[0].x, n[0].y, n[2].x - n[0].x, n[2].y - n[0].y), !0
                }
            }

            function m(e, t, n) {
                var i, o, r, a, s, l, c = e.segments;
                if (0 !== c.length && !p(e, t, n)) {
                    for (o = 0; c.length > o; ++o) r = c[o], a = r.anchor(), i ? (s = i.controlOut(), l = r.controlIn(), s && l ? t.bezier(s.x, s.y, l.x, l.y, a.x, a.y) : t.lineTo(a.x, a.y)) : t.moveTo(a.x, a.y), i = r;
                    e.options.closed && t.close()
                }
            }

            function g(e, t, n) {
                m(e, t, n), f(e, t, n)
            }

            function v(e, t, n) {
                var i, o = e.paths;
                for (i = 0; o.length > i; ++i) m(o[i], t, n);
                f(e, t, n)
            }

            function _(e, t, n) {
                var i = e.geometry();
                t.circle(i.center.x, i.center.y, i.radius), f(e, t, n)
            }

            function b(e, t, n) {
                var i, o = e.geometry().curvePoints();
                for (t.moveTo(o[0].x, o[0].y), i = 1; o.length > i;) t.bezier(o[i].x, o[i++].y, o[i].x, o[i++].y, o[i].x, o[i++].y);
                f(e, t, n)
            }

            function w(t, n) {
                var i, o = e.pdf.parseFontDef(t.options.font),
                    r = t._position;
                t.fill() && t.stroke() ? i = E.fillAndStroke : t.fill() ? i = E.fill : t.stroke() && (i = E.stroke), n.transform(1, 0, 0, -1, r.x, r.y + o.fontSize), n.beginText(), n.setFont(e.pdf.getFontURL(o), o.fontSize), n.setTextRenderingMode(i), n.showText(t.content(), t._pdfRect ? t._pdfRect.width() : null), n.endText()
            }

            function y(e, t, n) {
                var i, o;
                for (e._pdfLink && t.addLink(e._pdfLink.url, e._pdfLink), i = e.children, o = 0; i.length > o; ++o) s(i[o], t, n)
            }

            function k(e, t) {
                var n, i, o, r = e.src();
                r && (n = e.rect(), i = n.getOrigin(), o = n.getSize(), t.transform(o.width, 0, 0, -o.height, i.x, i.y + o.height), t.drawImage(r))
            }

            function x(e, t, n) {
                var i = e.geometry();
                t.rect(i.origin.x, i.origin.y, i.size.width, i.size.height), f(e, t, n)
            }

            function C(e, n) {
                var i, o = t.Deferred();
                for (i in n) "margin" == i && e.options.pdf && e.options.pdf._ignoreMargin || e.options.set("pdf." + i, n[i]);
                return D.pdf.toDataURL(e, o.resolve), o.promise()
            }

            function S(t) {
                var n = e.parseColor(t, !0);
                return n ? n.toRGB() : null
            }

            function T(e) {
                function t(e) {
                    return l = !0, e
                }

                function n(e) {
                    return e.visible() && e.opacity() > 0 && (u(e.fill()) || u(e.stroke()))
                }

                function i(e) {
                    var t, n, i = [];
                    for (t = 0; e.length > t; ++t) n = s(e[t]), null != n && i.push(n);
                    return i
                }

                function o(e, t) {
                    var n, i = c,
                        o = d;
                    e.transform() && (d = d.multiplyCopy(e.transform().matrix())), n = e.clip(), n && (n = n.bbox(), n && (n = n.bbox(d), c = c ? A.Rect.intersect(c, n) : n));
                    try {
                        return t()
                    } finally {
                        c = i, d = o
                    }
                }

                function r(e) {
                    if (null == c) return !1;
                    var t = e.rawBBox().bbox(d);
                    return c && t && (t = A.Rect.intersect(t, c)), t
                }

                function s(s) {
                    return o(s, function () {
                        if (!(s instanceof D.Group || s instanceof D.MultiPath)) {
                            var o = r(s);
                            if (!o) return t(null);
                            h = h ? A.Rect.union(h, o) : o
                        }
                        return a({
                            Path: function (e) {
                                return 0 !== e.segments.length && n(e) ? e : t(null)
                            },
                            MultiPath: function (e) {
                                if (!n(e)) return t(null);
                                var o = new D.MultiPath(e.options);
                                return o.paths = i(e.paths), 0 === o.paths.length ? t(null) : o
                            },
                            Circle: function (e) {
                                return n(e) ? e : t(null)
                            },
                            Arc: function (e) {
                                return n(e) ? e : t(null)
                            },
                            Text: function (e) {
                                return /\S/.test(e.content()) && n(e) ? e : t(null)
                            },
                            Image: function (e) {
                                return e.visible() && e.opacity() > 0 ? e : t(null)
                            },
                            Group: function (n) {
                                var o = new D.Group(n.options);
                                return o.children = i(n.children), o._pdfLink = n._pdfLink, n === e || 0 !== o.children.length || n._pdfLink ? o : t(null)
                            },
                            Rect: function (e) {
                                return n(e) ? e : t(null)
                            }
                        }, s)
                    })
                }
                var l, c = !1,
                    d = A.Matrix.unit(),
                    h = null;
                do l = !1, e = s(e); while (e && l);
                return {
                    root: e,
                    bbox: h
                }
            }
            var D = e.drawing,
                A = e.geometry,
                E = e.pdf.TEXT_RENDERING_MODE,
                I = {
                    dash: [4],
                    dashDot: [4, 2, 1, 2],
                    dot: [1, 2],
                    longDash: [8, 2],
                    longDashDot: [8, 2, 1, 2],
                    longDashDotDot: [8, 2, 1, 2, 1, 2],
                    solid: []
                },
                R = {
                    butt: 0,
                    round: 1,
                    square: 2
                },
                M = {
                    miter: 0,
                    round: 1,
                    bevel: 2
                };
            e.deepExtend(D, {
                exportPDF: C,
                pdf: {
                    toDataURL: i,
                    toBlob: o,
                    saveAs: r,
                    toStream: n
                }
            })
        }(window.kendo, window.kendo.jQuery)
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    }),
    function (e, define) {
        define("kendo.pdf.min", ["kendo.core.min", "pdf/core.min", "pdf/ttf.min", "pdf/drawing.min", "kendo.drawing.min"], e)
    }(function () {
        return function (e, t) {
            e.PDFMixin = {
                extend: function (e) {
                    e.events.push("pdfExport"), e.options.pdf = this.options, e.saveAsPDF = this.saveAsPDF, e._drawPDF = this._drawPDF, e._drawPDFShadow = this._drawPDFShadow
                },
                options: {
                    fileName: "Export.pdf",
                    proxyURL: "",
                    paperSize: "auto",
                    allPages: !1,
                    landscape: !1,
                    margin: null,
                    title: null,
                    author: null,
                    subject: null,
                    keywords: null,
                    creator: "Kendo UI PDF Generator v." + e.version,
                    date: null
                },
                saveAsPDF: function () {
                    var n, i = new t.Deferred,
                        o = i.promise(),
                        r = {
                            promise: o
                        };
                    if (!this.trigger("pdfExport", r)) return n = this.options.pdf, n.multiPage = n.multiPage || n.allPages, this._drawPDF(i).then(function (t) {
                        return e.drawing.exportPDF(t, n)
                    }).done(function (t) {
                        e.saveAs({
                            dataURI: t,
                            fileName: n.fileName,
                            proxyURL: n.proxyURL,
                            forceProxy: n.forceProxy,
                            proxyTarget: n.proxyTarget
                        }), i.resolve()
                    }).fail(function (e) {
                        i.reject(e)
                    }), o
                },
                _drawPDF: function (n) {
                    var i = new t.Deferred;
                    return e.drawing.drawDOM(this.wrapper).done(function (e) {
                        var t = {
                            page: e,
                            pageNumber: 1,
                            progress: 1,
                            totalPages: 1
                        };
                        n.notify(t), i.resolve(t.page)
                    }).fail(function (e) {
                        i.reject(e)
                    }), i
                },
                _drawPDFShadow: function (n, i) {
                    var o, r, a;
                    return n = n || {}, o = this.wrapper, r = t("<div class='k-pdf-export-shadow'>"), n.width && r.css({
                        width: n.width,
                        overflow: "visible"
                    }), o.before(r), r.append(n.content || o.clone(!0, !0)), a = t.Deferred(), setTimeout(function () {
                        var t = e.drawing.drawDOM(r, i);
                        t.always(function () {
                            r.remove()
                        }).then(function () {
                            a.resolve.apply(a, arguments)
                        }).fail(function () {
                            a.reject.apply(a, arguments)
                        }).progress(function () {
                            a.progress.apply(a, arguments)
                        })
                    }, 15), a.promise()
                }
            }
        }(kendo, window.kendo.jQuery), kendo
    }, "function" == typeof define && define.amd ? define : function (e, t, n) {
        (n || t)()
    });
