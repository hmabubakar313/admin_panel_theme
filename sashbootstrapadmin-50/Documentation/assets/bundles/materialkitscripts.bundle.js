! function(a) {
    function b(a) {
        return "undefined" == typeof a.which || "number" == typeof a.which && a.which > 0 && (!a.ctrlKey && !a.metaKey && !a.altKey && 8 != a.which && 9 != a.which && 13 != a.which && 16 != a.which && 17 != a.which && 20 != a.which && 27 != a.which)
    }

    function c(b) {
        var c = a(b);
        c.prop("disabled") || c.closest(".form-group").addClass("is-focused")
    }

    function d(b) {
        b.closest("label").hover(function() {
            var b = a(this).find("input");
            b.prop("disabled") || c(b)
        }, function() {
            e(a(this).find("input"))
        })
    }

    function e(b) {
        a(b).closest(".form-group").removeClass("is-focused")
    }
    a.expr[":"].notmdproc = function(b) {
        return !a(b).data("mdproc")
    }, a.material = {
        options: {
            validate: !0,
            input: !0,
            ripples: !0,
            checkbox: !0,
            togglebutton: !0,
            radio: !0,
            arrive: !0,
            autofill: !1,
            withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".footer a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple", ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),
            inputElements: "input.form-control, textarea.form-control, select.form-control",
            checkboxElements: ".checkbox > label > input[type=checkbox]",
            togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
            radioElements: ".radio > label > input[type=radio]"
        },
        checkbox: function(b) {
            var c = a(b ? b : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class='checkbox-material'><span class='check'></span></span>");
            d(c)
        },
        togglebutton: function(b) {
            var c = a(b ? b : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class='toggle'></span>");
            d(c)
        },
        radio: function(b) {
            var c = a(b ? b : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class='circle'></span><span class='check'></span>");
            d(c)
        },
        input: function(b) {
            a(b ? b : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                var b = a(this),
                    c = b.closest(".form-group");
                0 === c.length && (b.wrap("<div class='form-group'></div>"), c = b.closest(".form-group")), b.attr("data-hint") && (b.after("<p class='help-block'>" + b.attr("data-hint") + "</p>"), b.removeAttr("data-hint"));
                var d = {
                    "input-lg": "form-group-lg",
                    "input-sm": "form-group-sm"
                };
                if (a.each(d, function(a, d) {
                        b.hasClass(a) && (b.removeClass(a), c.addClass(d))
                    }), b.hasClass("floating-label")) {
                    var e = b.attr("placeholder");
                    b.attr("placeholder", null).removeClass("floating-label");
                    var f = b.attr("id"),
                        g = "";
                    f && (g = "for='" + f + "'"), c.addClass("label-floating"), b.after("<label " + g + "class='control-label'>" + e + "</label>")
                }(null === b.val() || "undefined" == b.val() || "" === b.val()) && c.addClass("is-empty"), c.append("<span class='material-input'></span>"), c.find("input[type=file]").length > 0 && c.addClass("is-fileinput")
            })
        },
        attachInputEventHandlers: function() {
            var d = this.options.validate;
            a(document).on("change", ".checkbox input[type=checkbox]", function() {
                a(this).blur()
            }).on("keydown paste", ".form-control", function(c) {
                b(c) && a(this).closest(".form-group").removeClass("is-empty")
            }).on("keyup change", ".form-control", function() {
                var b = a(this),
                    c = b.closest(".form-group"),
                    e = "undefined" == typeof b[0].checkValidity || b[0].checkValidity();
                "" === b.val() ? c.addClass("is-empty") : c.removeClass("is-empty"), d && (e ? c.removeClass("has-error") : c.addClass("has-error"))
            }).on("focus", ".form-control, .form-group.is-fileinput", function() {
                c(this)
            }).on("blur", ".form-control, .form-group.is-fileinput", function() {
                e(this)
            }).on("change", ".form-group input", function() {
                var b = a(this);
                if ("file" != b.attr("type")) {
                    var c = b.closest(".form-group"),
                        d = b.val();
                    d ? c.removeClass("is-empty") : c.addClass("is-empty")
                }
            }).on("change", ".form-group.is-fileinput input[type='file']", function() {
                var b = a(this),
                    c = b.closest(".form-group"),
                    d = "";
                a.each(this.files, function(a, b) {
                    d += b.name + ", "
                }), d = d.substring(0, d.length - 2), d ? c.removeClass("is-empty") : c.addClass("is-empty"), c.find("input.form-control[readonly]").val(d)
            })
        },
        ripples: function(b) {
            a(b ? b : this.options.withRipples).ripples()
        },
        autofill: function() {
            var b = setInterval(function() {
                a("input[type!=checkbox]").each(function() {
                    var b = a(this);
                    b.val() && b.val() !== b.attr("value") && b.trigger("change")
                })
            }, 100);
            setTimeout(function() {
                clearInterval(b)
            }, 1e4)
        },
        attachAutofillEventHandlers: function() {
            var b;
            a(document).on("focus", "input", function() {
                var c = a(this).parents("form").find("input").not("[type=file]");
                b = setInterval(function() {
                    c.each(function() {
                        var b = a(this);
                        b.val() !== b.attr("value") && b.trigger("change")
                    })
                }, 100)
            }).on("blur", ".form-group input", function() {
                clearInterval(b)
            })
        },
        init: function(b) {
            this.options = a.extend({}, this.options, b);
            var c = a(document);
            a.fn.ripples && this.options.ripples && this.ripples(), this.options.input && (this.input(), this.attachInputEventHandlers()), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && (this.autofill(), this.attachAutofillEventHandlers()), document.arrive && this.options.arrive && (a.fn.ripples && this.options.ripples && c.arrive(this.options.withRipples, function() {
                a.material.ripples(a(this))
            }), this.options.input && c.arrive(this.options.inputElements, function() {
                a.material.input(a(this))
            }), this.options.checkbox && c.arrive(this.options.checkboxElements, function() {
                a.material.checkbox(a(this))
            }), this.options.radio && c.arrive(this.options.radioElements, function() {
                a.material.radio(a(this))
            }), this.options.togglebutton && c.arrive(this.options.togglebuttonElements, function() {
                a.material.togglebutton(a(this))
            }))
        }
    }
}(jQuery),
function(a, b, c, d) {
    "use strict";

    function e(b, c) {
        g = this, this.element = a(b), this.options = a.extend({}, h, c), this._defaults = h, this._name = f, this.init()
    }
    var f = "ripples",
        g = null,
        h = {};
    e.prototype.init = function() {
        var c = this.element;
        c.on("mousedown touchstart", function(d) {
            if (!g.isTouch() || "mousedown" !== d.type) {
                c.find(".ripple-container").length || c.append('<div class="ripple-container"></div>');
                var e = c.children(".ripple-container"),
                    f = g.getRelY(e, d),
                    h = g.getRelX(e, d);
                if (f || h) {
                    var i = g.getRipplesColor(c),
                        j = a("<div></div>");
                    j.addClass("ripple").css({
                            left: h,
                            top: f,
                            "background-color": i
                        }), e.append(j),
                        function() {
                            return b.getComputedStyle(j[0]).opacity
                        }(), g.rippleOn(c, j), setTimeout(function() {
                            g.rippleEnd(j)
                        }, 500), c.on("mouseup mouseleave touchend", function() {
                            j.data("mousedown", "off"), "off" === j.data("animating") && g.rippleOut(j)
                        })
                }
            }
        })
    }, e.prototype.getNewSize = function(a, b) {
        return Math.max(a.outerWidth(), a.outerHeight()) / b.outerWidth() * 2.5
    }, e.prototype.getRelX = function(a, b) {
        var c = a.offset();
        return g.isTouch() ? (b = b.originalEvent, 1 === b.touches.length && b.touches[0].pageX - c.left) : b.pageX - c.left
    }, e.prototype.getRelY = function(a, b) {
        var c = a.offset();
        return g.isTouch() ? (b = b.originalEvent, 1 === b.touches.length && b.touches[0].pageY - c.top) : b.pageY - c.top
    }, e.prototype.getRipplesColor = function(a) {
        var c = a.data("ripple-color") ? a.data("ripple-color") : b.getComputedStyle(a[0]).color;
        return c
    }, e.prototype.hasTransitionSupport = function() {
        var a = c.body || c.documentElement,
            b = a.style,
            e = b.transition !== d || b.WebkitTransition !== d || b.MozTransition !== d || b.MsTransition !== d || b.OTransition !== d;
        return e
    }, e.prototype.isTouch = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, e.prototype.rippleEnd = function(a) {
        a.data("animating", "off"), "off" === a.data("mousedown") && g.rippleOut(a)
    }, e.prototype.rippleOut = function(a) {
        a.off(), g.hasTransitionSupport() ? a.addClass("ripple-out") : a.animate({
            opacity: 0
        }, 100, function() {
            a.trigger("transitionend")
        }), a.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            a.remove()
        })
    }, e.prototype.rippleOn = function(a, b) {
        var c = g.getNewSize(a, b);
        g.hasTransitionSupport() ? b.css({
            "-ms-transform": "scale(" + c + ")",
            "-moz-transform": "scale(" + c + ")",
            "-webkit-transform": "scale(" + c + ")",
            transform: "scale(" + c + ")"
        }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : b.animate({
            width: 2 * Math.max(a.outerWidth(), a.outerHeight()),
            height: 2 * Math.max(a.outerWidth(), a.outerHeight()),
            "margin-left": -1 * Math.max(a.outerWidth(), a.outerHeight()),
            "margin-top": -1 * Math.max(a.outerWidth(), a.outerHeight()),
            opacity: .2
        }, 500, function() {
            b.trigger("transitionend")
        })
    }, a.fn.ripples = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        })
    }
}(jQuery, window, document),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return b.apply(a)
    }) : "object" == typeof exports ? module.exports = b.call(a) : a.Waves = b.call(a)
}("object" == typeof global ? global : this, function() {
    "use strict";

    function a(a) {
        return null !== a && a === a.window
    }

    function b(b) {
        return a(b) ? b : 9 === b.nodeType && b.defaultView
    }

    function c(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }

    function d(a) {
        return c(a) && a.nodeType > 0
    }

    function e(a) {
        var b = m.call(a);
        return "[object String]" === b ? l(a) : c(a) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b) && a.hasOwnProperty("length") ? a : d(a) ? [a] : []
    }

    function f(a) {
        var c, d, e = {
                top: 0,
                left: 0
            },
            f = a && a.ownerDocument;
        return c = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = b(f), {
            top: e.top + d.pageYOffset - c.clientTop,
            left: e.left + d.pageXOffset - c.clientLeft
        }
    }

    function g(a) {
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
        return b
    }

    function h(a, b, c) {
        if (c) {
            c.classList.remove("waves-rippling");
            var d = c.getAttribute("data-x"),
                e = c.getAttribute("data-y"),
                f = c.getAttribute("data-scale"),
                h = c.getAttribute("data-translate"),
                i = Date.now() - Number(c.getAttribute("data-hold")),
                j = 350 - i;
            j < 0 && (j = 0), "mousemove" === a.type && (j = 150);
            var k = "mousemove" === a.type ? 2500 : o.duration;
            setTimeout(function() {
                var a = {
                    top: e + "px",
                    left: d + "px",
                    opacity: "0",
                    "-webkit-transition-duration": k + "ms",
                    "-moz-transition-duration": k + "ms",
                    "-o-transition-duration": k + "ms",
                    "transition-duration": k + "ms",
                    "-webkit-transform": f + " " + h,
                    "-moz-transform": f + " " + h,
                    "-ms-transform": f + " " + h,
                    "-o-transform": f + " " + h,
                    transform: f + " " + h
                };
                c.setAttribute("style", g(a)), setTimeout(function() {
                    try {
                        b.removeChild(c)
                    } catch (a) {
                        return !1
                    }
                }, k)
            }, j)
        }
    }

    function i(a) {
        if (q.allowEvent(a) === !1) return null;
        for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
            if (c.classList.contains("waves-effect") && !(c instanceof SVGElement)) {
                b = c;
                break
            }
            c = c.parentElement
        }
        return b
    }

    function j(a) {
        var b = i(a);
        if (null !== b) {
            if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled")) return;
            if (q.registerEvent(a), "touchstart" === a.type && o.delay) {
                var c = !1,
                    d = setTimeout(function() {
                        d = null, o.show(a, b)
                    }, o.delay),
                    e = function(e) {
                        d && (clearTimeout(d), d = null, o.show(a, b)), c || (c = !0, o.hide(e, b))
                    },
                    f = function(a) {
                        d && (clearTimeout(d), d = null), e(a)
                    };
                b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)
            } else o.show(a, b), n && (b.addEventListener("touchend", o.hide, !1), b.addEventListener("touchcancel", o.hide, !1)), b.addEventListener("mouseup", o.hide, !1), b.addEventListener("mouseleave", o.hide, !1)
        }
    }
    var k = k || {},
        l = document.querySelectorAll.bind(document),
        m = Object.prototype.toString,
        n = "ontouchstart" in window,
        o = {
            duration: 750,
            delay: 200,
            show: function(a, b, c) {
                if (2 === a.button) return !1;
                b = b || this;
                var d = document.createElement("div");
                d.className = "waves-ripple waves-rippling", b.appendChild(d);
                var e = f(b),
                    h = 0,
                    i = 0;
                "touches" in a && a.touches.length ? (h = a.touches[0].pageY - e.top, i = a.touches[0].pageX - e.left) : (h = a.pageY - e.top, i = a.pageX - e.left), i = i >= 0 ? i : 0, h = h >= 0 ? h : 0;
                var j = "scale(" + b.clientWidth / 100 * 3 + ")",
                    k = "translate(0,0)";
                c && (k = "translate(" + c.x + "px, " + c.y + "px)"), d.setAttribute("data-hold", Date.now()), d.setAttribute("data-x", i), d.setAttribute("data-y", h), d.setAttribute("data-scale", j), d.setAttribute("data-translate", k);
                var l = {
                    top: h + "px",
                    left: i + "px"
                };
                d.classList.add("waves-notransition"), d.setAttribute("style", g(l)), d.classList.remove("waves-notransition"), l["-webkit-transform"] = j + " " + k, l["-moz-transform"] = j + " " + k, l["-ms-transform"] = j + " " + k, l["-o-transform"] = j + " " + k, l.transform = j + " " + k, l.opacity = "1";
                var m = "mousemove" === a.type ? 2500 : o.duration;
                l["-webkit-transition-duration"] = m + "ms", l["-moz-transition-duration"] = m + "ms", l["-o-transition-duration"] = m + "ms", l["transition-duration"] = m + "ms", d.setAttribute("style", g(l))
            },
            hide: function(a, b) {
                b = b || this;
                for (var c = b.getElementsByClassName("waves-rippling"), d = 0, e = c.length; d < e; d++) h(a, b, c[d])
            }
        },
        p = {
            input: function(a) {
                var b = a.parentNode;
                if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
                    var c = document.createElement("i");
                    c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);
                    var d = window.getComputedStyle(a, null),
                        e = d.color,
                        f = d.backgroundColor;
                    c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);")
                }
            },
            img: function(a) {
                var b = a.parentNode;
                if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
                    var c = document.createElement("i");
                    b.replaceChild(c, a), c.appendChild(a)
                }
            }
        },
        q = {
            touches: 0,
            allowEvent: function(a) {
                var b = !0;
                return /^(mousedown|mousemove)$/.test(a.type) && q.touches && (b = !1), b
            },
            registerEvent: function(a) {
                var b = a.type;
                "touchstart" === b ? q.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function() {
                    q.touches && (q.touches -= 1)
                }, 500)
            }
        };
    return k.init = function(a) {
        var b = document.body;
        a = a || {}, "duration" in a && (o.duration = a.duration), "delay" in a && (o.delay = a.delay), n && (b.addEventListener("touchstart", j, !1), b.addEventListener("touchcancel", q.registerEvent, !1), b.addEventListener("touchend", q.registerEvent, !1)), b.addEventListener("mousedown", j, !1)
    }, k.attach = function(a, b) {
        a = e(a), "[object Array]" === m.call(b) && (b = b.join(" ")), b = b ? " " + b : "";
        for (var c, d, f = 0, g = a.length; f < g; f++) c = a[f], d = c.tagName.toLowerCase(), ["input", "img"].indexOf(d) !== -1 && (p[d](c), c = c.parentElement), c.className.indexOf("waves-effect") === -1 && (c.className += " waves-effect" + b)
    }, k.ripple = function(a, b) {
        a = e(a);
        var c = a.length;
        if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c)
            for (var d, g, h, i = {}, j = 0, k = {
                    type: "mousedown",
                    button: 1
                }, l = function(a, b) {
                    return function() {
                        o.hide(a, b)
                    }
                }; j < c; j++)
                if (d = a[j], g = b.position || {
                        x: d.clientWidth / 2,
                        y: d.clientHeight / 2
                    }, h = f(d), i.x = h.left + g.x, i.y = h.top + g.y, k.pageX = i.x, k.pageY = i.y, o.show(k, d), b.wait >= 0 && null !== b.wait) {
                    var m = {
                        type: "mouseup",
                        button: 1
                    };
                    setTimeout(l(m, d), b.wait)
                }
    }, k.calm = function(a) {
        a = e(a);
        for (var b = {
                type: "mouseup",
                button: 1
            }, c = 0, d = a.length; c < d; c++) o.hide(b, a[c])
    }, k.displayEffect = function(a) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), k.init(a)
    }, k
});