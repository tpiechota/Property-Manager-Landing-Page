function empty(e) {
    if ("number" == typeof e || "boolean" == typeof e)return !1;
    if ("undefined" == typeof e || null === e)return !0;
    if ("undefined" != typeof e.length)return 0 === e.length;
    var t = 0;
    for (var i in e)Object.prototype.hasOwnProperty.call(e, i) && t++;
    return 0 === t
}
function extend(e, t) {
    for (var i in t)t.hasOwnProperty(i) && (e[i] = t[i]);
    return e
}
function hasParent(e, t) {
    if (!e)return !1;
    for (var i = e.target || e.srcElement || e || !1; i && i.id != t;)i = i.parentNode || !1;
    return i !== !1
}
function mobilecheck() {
    var e = !1;
    return function (t) {
        (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}
function setQueryParameter(e, t, i) {
    var a = new RegExp("([?|&])" + t + "=.*?(&|$)", "i");
    return separator = -1 !== e.indexOf("?") ? "&" : "?", e.match(a) ? e.replace(a, "$1" + t + "=" + i + "$2") : e + separator + t + "=" + i
}
function isElementInViewport(e) {
    e instanceof jQuery && (e = e[0]);
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
}
function getIOSVersion(e) {
    return e = e || navigator.userAgent, parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(e) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1
}
var phone, touch, ltie9, dh, ar, fonts, ieMobile, ua = navigator.userAgent, winLoc = window.location.toString(), is_webkit = ua.match(/webkit/i), is_firefox = ua.match(/gecko/i), is_newer_ie = ua.match(/msie (9|([1-9][0-9]))/i), is_older_ie = ua.match(/msie/i) && !is_newer_ie, is_ancient_ie = ua.match(/msie 6/i), is_ie = is_ancient_ie || is_older_ie || is_newer_ie, is_mobile_ie = -1 !== navigator.userAgent.indexOf("IEMobile"), is_mobile = ua.match(/mobile/i), is_OSX = ua.match(/(iPad|iPhone|iPod|Macintosh)/g) ? !0 : !1, iOS = getIOSVersion(ua), is_EDGE = /Edge\/12./i.test(navigator.userAgent);
is_EDGE && jQuery("body").addClass("is-edge");
var nua = navigator.userAgent, is_android = -1 !== nua.indexOf("Mozilla/5.0") && -1 !== nua.indexOf("Android ") && -1 !== nua.indexOf("AppleWebKit") && -1 === nua.indexOf("Chrome"), isAndroid = ua.indexOf("android") > -1, useTransform = !0, use2DTransform = ua.match(/msie 9/i) || winLoc.match(/transform\=2d/i), transform, prefixes = {
    webkit: "webkitTransform",
    firefox: "MozTransform",
    ie: "msTransform",
    w3c: "transform"
};
useTransform && (is_webkit ? transform = prefixes.webkit : is_firefox ? transform = prefixes.firefox : is_newer_ie && (transform = prefixes.ie));
var windowWidth = window.innerWidth, windowHeight = window.innerHeight, globalDebug = !1, timestamp, gifImages;
!function (e, t, i) {
    function a() {
        wh = e(t).height(), ww = e(t).width(), dh = e(document).height(), ar = ww / wh
    }

    function o() {
        e.support.touch = "ontouchend" in document;
        {
            var i = navigator.userAgent.toLowerCase(), a = navigator.platform.toLowerCase(), o = a.indexOf("iphone"), n = a.indexOf("ipod"), r = a.indexOf("android"), s = -1 != i.indexOf("safari") && -1 == i.indexOf("chrome") ? !0 : !1;
            t.SVGAngle ? !0 : !1, document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? !0 : !1, /gecko/i.test(i) && /rv:1.9/i.test(i) ? !0 : !1
        }
        ieMobile = navigator.userAgent.match(/Windows Phone/i) ? !0 : !1, phone = o > -1 || n > -1 || r > -1 ? !0 : !1, touch = e.support.touch ? !0 : !1, ltie9 = e.support.leadingWhitespace ? !1 : !0;
        var l = e("body");
        touch && e("html").addClass("touch"), ieMobile && e("html").addClass("is--winmob"), is_android && e("html").addClass("is--ancient-android"), s && l.addClass("safari"), phone && l.addClass("phone")
    }

    function n() {
        globalDebug && console.log("Magnific Popup - Init"), e(".js-post-gallery").each(function () {
            e(this).magnificPopup({
                tPrev: objectl10n.tPrev,
                tNext: objectl10n.tNext,
                tCounter: objectl10n.tCounter,
                delegate: 'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]',
                type: "image",
                closeOnContentClick: !1,
                closeBtnInside: !1,
                removalDelay: 500,
                mainClass: "mfp-fade",
                image: {
                    markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',
                    titleSrc: function (e) {
                        var t = "";
                        return "undefined" != typeof e.el.attr("data-alt") && "" !== e.el.attr("data-alt") && (t += "<small>" + e.el.attr("data-alt") + "</small>"), t
                    }
                },
                gallery: {enabled: !0, navigateByImgClick: !0},
                callbacks: {
                    elementParse: function (t) {
                        this.currItem != i && (t = this.currItem);
                        var a = "";
                        "undefined" != typeof t.el.attr("data-alt") && "" !== t.el.attr("data-alt") && (a += "<small>" + t.el.attr("data-alt") + "</small>"), e(".mfp-title").html(a)
                    }, change: function (t) {
                        var i = "";
                        "undefined" != typeof t.el.attr("data-alt") && "" !== t.el.attr("data-alt") && (i += "<small>" + t.el.attr("data-alt") + "</small>"), e(".mfp-title").html(i)
                    }
                }
            })
        })
    }

    function r(t) {
        globalDebug && console.log("Royal Slider - Init"), t = "undefined" != typeof t ? t : e("body"), t.find(".wp-gallery").each(function () {
            l(e(this))
        }), t.find(".js-pixslider").each(function () {
            s(e(this))
        })
    }

    function s(t) {
        t.find("img").removeClass("invisible");
        var i = e(this).children(), a = "undefined" != typeof t.data("arrows"), o = "undefined" != typeof t.data("bullets") ? "bullets" : "none", n = "undefined" != typeof t.data("autoheight"), r = !1, s = t.data("autoscalesliderwidth"), l = t.data("autoscalesliderheight"), c = "undefined" != typeof t.data("customarrows"), p = "undefined" != typeof t.data("slidesspacing") ? parseInt(t.data("slidesspacing")) : 0, u = "undefined" != typeof t.data("fullscreen"), h = t.data("imagescale"), m = "undefined" != typeof t.data("visiblenearby") ? !0 : !1, f = "undefined" != typeof t.data("imagealigncenter"), g = "undefined" != typeof t.data("slidertransition") && "" != t.data("slidertransition") ? t.data("slidertransition") : "move", v = "undefined" != typeof t.data("sliderautoplay") ? !0 : !1, w = "undefined" != typeof t.data("sliderdelay") && "" != t.data("sliderdelay") ? t.data("sliderdelay") : "1000", y = !0, b = "undefined" != typeof t.data("showcaptions") ? !0 : !1, x = t.hasClass("header--slideshow") ? !0 : !1, _ = "undefined" != typeof t.data("hoverarrows");
        1 == i.length && (a = !1, o = "none", c = !1, u = !1, y = !1, g = "fade", c = !1), c && (arrows = !1);
        var T = {
            autoHeight: n,
            autoScaleSlider: r,
            loop: !0,
            autoScaleSliderWidth: s,
            autoScaleSliderHeight: l,
            imageScaleMode: h,
            imageAlignCenter: f,
            slidesSpacing: p,
            arrowsNav: a,
            controlNavigation: o,
            keyboardNavEnabled: u,
            arrowsNavAutoHide: !1,
            sliderDrag: y,
            transitionType: g,
            autoPlay: {enabled: v, stopAtAction: !0, pauseOnHover: !0, delay: w},
            globalCaption: b,
            numImagesToPreload: 4
        };
        m && (T.visibleNearby = {
            enabled: !0,
            center: !0,
            breakpoint: 0,
            navigateByCenterClick: !1
        }), t.royalSlider(T), t.addClass("slider--loaded");
        var S = t.data("royalSlider"), C = S.numSlides;
        if (t.closest(".article__content").length && S.ev.on("rsAfterSlideChange", function () {
                P.initialize(), j.initialize()
            }), S && c) {
            var k = "";
            x && (k = "slider-arrows-header"), _ && !Modernizr.touch && (k += " arrows--hover ");
            var z = e('<div class="' + k + '"><div class="rsArrow rsArrowLeft js-arrow-left" style="display: block;"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight js-arrow-right" style="display: block;"><div class="rsArrowIcn"></div></div></div>');
            "left" == t.data("customarrows") && z.addClass("gallery-control--left"), z.insertBefore(t), z.on("click", ".js-arrow-left", function (e) {
                e.preventDefault(), S.prev()
            }), z.on("click", ".js-arrow-right", function (e) {
                e.preventDefault(), S.next()
            })
        }
        _ && !Modernizr.touch && d(e(".slider-arrows-header .rsArrow")), 1 == C && t.addClass("single-slide"), t.addClass("slider--loaded")
    }

    function l(t) {
        var i = t, a = t.data(), o = i.find("img"), n = e('<div class="pixslider js-pixslider">');
        o.prependTo(n).addClass("rsImg"), e.each(a, function (e, t) {
            n.attr("data-" + e, t)
        }), i.replaceWith(n)
    }

    function d(t) {
        function i(t) {
            var i, o;
            t.mousemove(function (e) {
                i = e.pageX - t.offset().left - 40, o = e.pageY - t.offset().top - 40
            });
            var n = t.find(".rsArrowIcn");
            a = setInterval(function () {
                pixGS.TweenMax.to(n, 0, {x: i, y: o, z: .01})
            }, 10), t.mouseleave(function () {
                e(this).removeClass("visible"), clearInterval(a)
            })
        }

        t.mouseenter(function () {
            e(this).addClass("visible"), i(e(this))
        });
        var a
    }

    function c(e, t) {
        var i = t.split("?")[1];
        if ("undefined" == typeof i)return i;
        i = i.split("&");
        for (var a = 0; a < i.length; a++) {
            var o = i[a].split("=");
            if (o[0] == e)return o[1]
        }
    }

    function p(e) {
        var t, i, a = {};
        return t = e.split("!3d"), a.latitude = t[1], t = t[0].split("!2d"), a.longitude = t[1], t = t[0].split("!1d"), i = t[1], a.zoom = 21 - Math.round(Math.log(Math.round(i / 218), 2)), a
    }

    function u(e) {
        var t = {};
        return e = e.split("@")[1], e = e.split("z/")[0], e = e.split(","), t.latitude = e[0], t.longitude = e[1], t.zoom = e[2], t.zoom.indexOf("z") >= 0 && (t.zoom = t.zoom.substring(0, t.zoom.length - 1)), t
    }

    function h(e) {
        var t, i = {};
        return t = c("ll", e), "undefined" == typeof t && (t = c("sll", e)), "undefined" == typeof t ? t : (t = t.split(","), i.latitude = t[0], i.longitude = t[1], i.zoom = c("z", e), "undefined" == typeof i.zoom && (i.zoom = 10), i)
    }

    function m(t) {
        var i;
        i = "undefined" != typeof t ? t.find(".gmap") : e(".gmap"), i.length && "undefined" != typeof google && (globalDebug && console.log("GMap Init"), i.each(function () {
            var t, i = e(this), a = i.data("url"), o = "undefined" != typeof i.data("customstyle") ? "style1" : google.maps.MapTypeId.ROADMAP, n = [], r = i.data("markercontent");
            a && (t = h(a), "undefined" == typeof variables && (t = a.split("!3d")[0] !== a ? p(a) : u(a)), "undefined" != typeof t && t.latitude && t.longitude && n.push({
                latLng: [t.latitude, t.longitude],
                options: {content: '<div class="map__marker-wrap"><div class="map__marker">' + r + "</div></div>"}
            })),
            n.length && i.gmap3({
                map: {
                    options: {
                        center: new google.maps.LatLng(t.latitude, t.longitude),
                        zoom: parseInt(t.zoom),
                        mapTypeId: o,
                        mapTypeControlOptions: {mapTypeIds: []},
                        scrollwheel: !1,
                        panControl: !0,
                        panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        scaleControl: !0,
                        streetViewControl: !0,
                        streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}
                    }
                },
                overlay: {values: n},
                styledmaptype: {
                    id: "style1",
                    options: {name: "Style 1"},
                    styles: [
                        {
                            stylers: [
                                {saturation: -100},
                                {gamma: 3},
                                {visibility: "simplified"}
                            ]
                        },
                        {
                            featureType: "road",
                            stylers: [
                                {hue: e("body").data("color") ? e("body").data("color") : "#ffaa00"},
                                {saturation: 48},
                                {gamma: .4},
                                {visibility: "on"}
                            ]
                        },
                        {
                            featureType: "administrative",
                            stylers: [
                                {visibility: "on"}
                            ]
                        }
                    ]
                }
            })
        }))
    }

    function f(t) {
        var i;
        i = "undefined" != typeof t ? t.find(".gmap--multiple-pins") : e(".gmap--multiple-pins"), i.empty(), $imageMarkup = e(".js-map-pin"), $imageMarkup.length > 0 && ($imageMarkup = e($imageMarkup[0]).html()), i.length && "undefined" != typeof google && (globalDebug && console.log("GMap Multiple Pins Init"), i.each(function () {
            var t, i = e(this), a = "undefined" != typeof i.data("customstyle") ? "style1" : google.maps.MapTypeId.ROADMAP, o = [], n = 10;
            if (t = i.data("pins"), e.each(t, function (e, t) {
                    var i;
                    t && (i = h(t), "undefined" == typeof variables && (i = t.split("!3d")[0] !== t ? p(t) : u(t)), "undefined" != typeof i && i.latitude && i.longitude && o.push({
                        latLng: [i.latitude, i.longitude],
                        options: {content: '<div class="gmap__marker"><div class="gmap__marker__btn">' + e + "</div>" + $imageMarkup + "</div>"}
                    }))
                }), o.length) {
                1 == i.data("initialized") && i.gmap3("destroy").empty(), i.data("initialized", !0), i.gmap3({
                    map: {
                        options: {
                            zoom: n,
                            mapTypeId: a,
                            mapTypeControl: !1,
                            panControl: !0,
                            panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                            zoomControl: !0,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle.LARGE,
                                position: google.maps.ControlPosition.LEFT_CENTER
                            },
                            scaleControl: !0,
                            streetViewControl: !0,
                            streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                            scrollwheel: !1
                        }
                    },
                    overlay: {values: o},
                    styledmaptype: {
                        id: "style1",
                        options: {name: "Style 1"},
                        styles: [{stylers: [{saturation: -100}, {gamma: 3}, {visibility: "simplified"}]}, {
                            featureType: "road",
                            stylers: [{hue: e("body").data("color") ? e("body").data("color") : "#ffaa00"}, {saturation: 48}, {gamma: .4}, {visibility: "on"}]
                        }, {
                            featureType: "administrative",
                            stylers: [{saturation: -30}, {gamma: .6}, {visibility: "on"}]
                        }, {featureType: "administrative.neighborhood", stylers: [{visibility: "off"}]}]
                    }
                }, "autofit");
                var r = i.gmap3("get");
                google.maps.event.addListenerOnce(r, "idle", function () {
                    "undefined" != typeof r && r.setZoom(1 < o.length ? r.getZoom() - 1 : n)
                })
            }
        }))
    }

    function g() {
        var t = ".site-header", i = e(t), a = i.outerHeight(), o = e(".article__header"), n = o.length ? o.first().outerHeight() : 0;
        i.headroom({
            tolerance: 15, offset: n - a - 1, onPin: function () {
            }, onUnpin: function () {
                e("html").hasClass("navigation--is-visible")
            }
        })
    }

    function v() {
        globalDebug && console.log("NiceScroll Init");
        {
            var a = e("body").data("smoothscrolling") !== i;
            document.documentElement
        }
        if (a && !is_EDGE && !Modernizr.touch && !is_mobile_ie && !is_OSX) {
            var o = e(t);
            o.on("mousewheel DOMMouseScroll", function (e) {
                var t, i, a = 400;
                "mousewheel" == e.type ? i = e.originalEvent.wheelDelta / 120 : "DOMMouseScroll" == e.type && (i = -e.originalEvent.detail / 3), t = Q - i * a, t && (e.preventDefault(), pixGS.TweenMax.to(o, .6, {
                    scrollTo: {
                        y: t,
                        autoKill: !0
                    }, ease: pixGS.Power1.easeOut, autoKill: !0, overwrite: 5
                }))
            })
        }
    }

    function w(i, a) {
        a = "undefined" == typeof a ? 1 : a;
        var o = Math.abs(Q - i), n = a * o / 2e3;
        pixGS.TweenMax.to(e(t), n, {scrollTo: {y: i, autoKill: !0, ease: pixGS.Quint.easeInOut}})
    }

    function y() {
        e(".js-nav-trigger").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var i = e("html");
            i.hasClass("navigation--is-visible") ? (e("body").css("overflow", ""), i.removeClass("navigation--is-visible")) : (e("body").css({overflow: "hidden"}), i.addClass("navigation--is-visible"), i.is(".is--ancient-android, .is--winmob, .is--ie") && e(".navigation--main").height(windowHeight))
        })
    }

    function b() {
        var t = e("iframe, video");
        t.each(function () {
            e(this).data("aspectRatio", this.width / this.height).removeAttr("height").removeAttr("width")
        }), e("iframe").each(function () {
            var t = e(this).attr("src");
            empty(t) || e(this).attr("src", setQueryParameter(t, "wmode", "transparenartt"))
        })
    }

    function x() {
        var t = e("iframe, video");
        t.each(function () {
            var t = e(this), i = t.data("aspectRatio"), a = t.css("width", "100%").width(), o = a / i;
            t.height(o)
        })
    }

    function _() {
        globalDebug && console.group("Init"), touch = !1, ("undefined" != typeof isIe || !t.ActiveXObject && "ActiveXObject" in t) && e("html").addClass("is--ie"), a(), o(), G(), (is_android || t.opera) && e("html").addClass("android-browser").removeClass("no-android-browser");
        var i = D();
        (i || Modernizr.touch) && e("body").addClass("is_iexplore  no-scroll-effect");
        var n = t.retina || t.devicePixelRatio > 1;
        n && e(".site-logo--image-2x").length && e(".site-logo--image-2x").children("img").each(function () {
            "undefined" != typeof e(this).data("logo2x") && (e(this).attr("src", e(this).data("logo2x")), e(".site-logo--image-2x").addClass("using-retina-logo"))
        }), T(), S();
        var r = jQuery(".border-waves").not(".site-footer");
        r.removeClass("border-waves"), r.each(function (t, i) {
            var a = e(i);
            a.prevAll(".article__header").first().find(".article__parallax").addClass("border-waves-top"), a.nextAll(".article__header").first().find(".article__parallax").addClass("border-waves-bottom"), a.next(".site-footer").addClass("border-waves-bottom")
        }), e(".site-footer.border-waves").prevAll("article__header").first().find(".article__parallax").addClass("border-waves-top border-waves-top--dark"), e(".js-pixslider").not(".article__parallax .js-pixslider").each(function (t, i) {
            s(e(i))
        }), globalDebug && console.groupEnd()
    }

    function T() {
        globalDebug && console.group("Event Handlers Once"), y(), globalDebug && console.groupEnd()
    }

    function S() {
        globalDebug && console.group("Event Handlers"), e("body").off("click", ".js-arrow-popup-prev", C).on("click", ".js-arrow-popup-prev", C), e("body").off("click", ".js-arrow-popup-next", k).on("click", ".js-arrow-popup-next", k), e(document).on("spam.wpcf7 invalid.wpcf7 mailsent.wpcf7 mailfailed.wpcf7", function () {
            setTimeout(function () {
                P.initialize(), j.initialize()
            }, 300)
        });
        var t;
        t = touch ? "click" : "hover", ieMobile && (t = "click"), e(".pix-dropdown").on(t, function (t) {
            t.stopPropagation(), e(this).toggleClass("active")
        }), e(".tabs__nav").find("li > a").click(function () {
            setTimeout(function () {
                P.update()
            }, 300)
        }), globalDebug && console.groupEnd()
    }

    function C(t) {
        globalDebug && console.log("Magnific Popup Prev"), t.preventDefault();
        var i = e.magnificPopup.instance;
        return i.prev(), !1
    }

    function k(t) {
        globalDebug && console.log("Magnific Popup Next"), t.preventDefault();
        var i = e.magnificPopup.instance;
        return i.next(), !1
    }

    function z(e, t, i) {
        var a = (Q - t) / (i - t);
        return 0 > a ? void e.progress(0) : a > 1 ? void e.progress(1) : void e.progress(a)
    }

    function O() {
        q = !1, P.update(), j.update(), R.update(), L.update(), $.update()
    }

    function M() {
        q || requestAnimationFrame(O), q = !0
    }

    function D() {
        var e = t.navigator.userAgent, i = e.indexOf("MSIE ");
        if (i > 0)return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
        var a = e.indexOf("Trident/");
        if (a > 0) {
            var o = e.indexOf("rv:");
            return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10)
        }
        var n = e.indexOf("Edge/");
        return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : !1
    }

    function A() {
        return gifImages[Math.floor(Math.random() * gifImages.length)]
    }

    function E() {
        e(".error404").css("background-image", "url(" + A() + ")")
    }

    function G() {
        t.addthis && (globalDebug && console.log("AddThis Load Script"), addthis.addEventListener("addthis.ready", I), addthis.init())
    }

    function I() {
        globalDebug && console.log("AddThis Ready"), H()
    }

    function H() {
        t.addthis && (globalDebug && console.log("AddThis Toolbox INIT"), addthis.toolbox(".addthis_toolbox"))
    }

    Math.log = function () {
        var e = Math.log;
        return function (t, i) {
            return e(t) / (i ? e(i) : 1)
        }
    }();
    var P = {
        selector: ".article__parallax",
        covers: e([]),
        amount: 0,
        initialized: !1,
        start: 0,
        stop: 0,
        initialize: function () {
            var t = this;
            return B = e(document).height(), !Modernizr.touch && !D() || this.initialized ? (this.stop = B - windowHeight, this.amount = W.data("parallax-speed") || .5, this.initialized = !0, e(".covers").empty(), void e(".article__parallax").each(function (i, a) {
                var o, n, s, l, d, c = e(a), p = c.parent(), u = c.clone(!0).wrap("div.article__header"), h = u.find(".article__parallax__img"), g = u.find(".article__parallax__slider"), v = p.outerHeight(), w = p.offset(), y = c.children(), b = u.children(".article__parallax__img, .article__parallax__slider, .gmap--multiple-pins, .gmap"), x = y.outerWidth(), _ = y.outerHeight(), T = (parseInt(N.css("marginTop")), t.amount), S = {
                    "static": 0,
                    slow: .25,
                    medium: .5,
                    fast: .75,
                    fixed: 1
                };
                c.removeAttr("style"), u.data("source", c).appendTo(".covers").show(), u.css("height", v), "undefined" != typeof parallax_speeds && e.each(S, function (e, t) {
                    "undefined" != typeof parallax_speeds[e] && p.is(parallax_speeds[e]) && (T = t)
                }), o = windowWidth / x, n = (v + (windowHeight - v) * T) / _, s = Math.max(o, n), l = parseInt(x * s), d = (windowHeight - v) * T, b.css("height", v + d), h.css({
                    width: l,
                    height: "auto"
                });
                var C = {
                    start: w.top - windowHeight - d / 2,
                    end: w.top + v + d / 2,
                    timeline: new pixGS.TimelineMax({paused: !0})
                }, k = {start: 0, end: B, timeline: new pixGS.TimelineMax({paused: !0})};
                C.timeline.fromTo(b, 1, {y: "-=" + v * T}, {
                    y: "+=" + v * T * 2,
                    ease: pixGS.Linear.easeNone,
                    force3D: !0
                }), C.timeline.fromTo(g.find(".hero__content, .hero__caption"), 1, {y: "+=" + windowHeight * T}, {
                    y: "-=" + windowHeight * T * 2,
                    ease: pixGS.Linear.easeNone,
                    force3D: !0
                }, "-=1"), k.timeline.fromTo(u, 1, {y: "+=" + w.top}, {
                    y: "-=" + B,
                    ease: pixGS.Linear.easeNone
                }), u.data("parallax", C).data("parallax2", k), t.update(), r(u), m(u), f(u), t.initialized && pixGS.TweenMax.to(u, .3, {opacity: 1})
            })) : void e(".article__parallax").each(function (t, i) {
                var a = e(i).closest(".article__header"), o = a.children(".article__parallax"), n = o.find(".article__parallax__img");
                if (o.show(), n.length) {
                    var s = n.css("width", "auto").outerWidth(), l = n.outerHeight(), d = a.outerHeight(), c = windowWidth / s;
                    scaleY = windowHeight / l, scale = Math.max(c, scaleY), newWidth = parseInt(s * scale), newHeight = scale * l, n.css({
                        position: "absolute",
                        "max-width": "none",
                        width: newWidth,
                        top: (d - newHeight) / 2,
                        left: (windowWidth - newWidth) / 2,
                        opacity: 1
                    })
                }
                pixGS.TweenMax.to(o, .3, {opacity: 1}), a.hasClass("half-height") ? a.css("min-height", windowHeight / 2) : a.hasClass("two-thirds-height") ? a.css("min-height", 2 * windowHeight / 3) : a.css("min-height", windowHeight), r(o), m(o), f(o)
            })
        },
        update: function () {
            Modernizr.touch || is_ie || Q > this.stop || Q < this.start || e(".covers .article__parallax").each(function (t, i) {
                var a = e(i), o = a.data("parallax"), n = a.data("parallax2"), r = (Q - o.start) / (o.end - o.start), s = (Q - n.start) / (n.end - n.start);
                r = 0 > r ? 0 : r, r = r > 1 ? 1 : r, s = 0 > s ? 0 : s, s = s > 1 ? 1 : s, o.timeline.progress(r), n.timeline.progress(s)
            })
        }
    }, $ = {
        selector: ".down-arrow",
        $arrow: null,
        timeline: null,
        start: 0,
        end: 0,
        bubble: !1,
        initialize: function () {
            var t = this;
            this.$arrow = e(this.selector), empty(this.$arrow) || (this.start = 0, this.end = this.start + 300, this.timeline = new pixGS.TimelineMax({paused: !0}), this.$next = this.$arrow.closest(".article__header").nextAll(".article__header, .article--page").first(), empty(this.$next) || (this.nextTop = this.$next.offset().top, this.nextHeight = this.$next.outerHeight()), this.$arrow.hasClass("down-arrow--bubble") ? (this.timeline.to(this.$arrow, .2, {
                y: 10,
                opacity: 0,
                ease: pixGS.Linear.easeNone,
                overwrite: "none"
            }), this.timeline.to(".blurp--top", .3, {
                scaleY: 0,
                ease: pixGS.Linear.easeNone,
                overwrite: "none"
            }), this.bubble = !0) : this.timeline.to(this.$arrow, 1, {
                y: 100,
                opacity: 0,
                ease: pixGS.Linear.easeNone,
                overwrite: "none"
            }), this.$arrow.on("click", function (i) {
                i.preventDefault(), empty(t.$next) || w(t.$next.is(".article__header") ? t.nextTop - windowHeight / 2 + t.nextHeight / 2 : t.nextTop - e(".site-header").outerHeight())
            }))
        },
        update: function () {
            return empty(this.$arrow) || this.bubble ? void 0 : Modernizr.touch && is_OSX ? void this.timeline.progress(0) : void z(this.timeline, this.start, this.end)
        }
    }, L = {
        start: 0, end: 0, timeline: null, played: !1, initialize: function () {
            {
                var t = e(".btn--top"), i = t.offset().top;
                e(".copyright-area").outerHeight()
            }
            empty(t) || (t.data("offsetTop", i), this.timeline = new pixGS.TimelineMax({paused: !0}), this.timeline.fromTo(".blurp--bottom", .6, {
                y: 40,
                scale: .5
            }, {
                y: 0,
                scale: 1,
                ease: pixGS.Power3.easeOut,
                force3D: !0
            }), this.timeline.fromTo(e(".btn__arrow--top"), .4, {y: 15, opacity: 0}, {
                y: 0,
                scale: 1,
                opacity: 1,
                ease: pixGS.Back.easeOut
            }, "-=0.1"), this.timeline.fromTo(e(".btn__arrow--bottom"), .4, {y: 15, opacity: 0}, {
                y: 0,
                scale: 1,
                opacity: 1,
                ease: pixGS.Back.easeOut
            }, "-=0.25"), t.on("click", function (e) {
                e.preventDefault(), w(0)
            }), this.update())
        }, update: function () {
            var t = e(".btn--top"), i = t.data("offsetTop"), a = e(".copyright-area").outerHeight(), o = i - windowHeight + 3 * a / 4;
            if (!empty(t) && null != this.timeline)return Modernizr.touch && is_OSX ? void this.timeline.progress(1) : void(Q > o ? this.played || (this.timeline.play(), this.played = !0) : this.played && (this.timeline.reverse(), this.played = !1))
        }
    }, j = {
        selector: ".article__header", initialized: !1, animated: !1, initialize: function () {
            if (!is_EDGE) {
                var t = this;
                e(this.selector).each(function (i, a) {
                    var o = e(a), n = o.find(".article__headline"), r = new pixGS.TimelineMax({paused: !0}), s = n.find(".headline__primary"), l = n.find(".headline__secondary"), d = n.find(".headline__description"), c = n.find(".star"), p = n.find(".line"), u = d.find(".arrow"), h = d.find("hr"), m = o.offset().top, f = o.outerHeight();
                    o.find(".pixcode--separator").width(s.width()), d.css({opacity: 1}), d = d.children().not(".pixcode--separator"), d.css({opacity: 0}), r.fromTo(s, .72, {
                        "letter-spacing": "1em",
                        "margin-right": "-0.9em"
                    }, {
                        "letter-spacing": "0.2em",
                        "margin-right": "-0.1em",
                        ease: pixGS.Expo.easeOut
                    }), r.fromTo(s, .89, {opacity: 0}, {
                        opacity: 1,
                        ease: pixGS.Expo.easeOut
                    }, "-=0.72"), r.fromTo(s, 1, {y: 30}, {
                        y: 0,
                        ease: pixGS.Expo.easeOut
                    }, "-=0.89"), r.fromTo(l, .65, {opacity: 0}, {
                        opacity: 1,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.65"), r.fromTo(l, .9, {y: 30}, {
                        y: 0,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.65"), r.fromTo(c, .15, {opacity: 0}, {
                        opacity: 1,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.6"), r.fromTo(c, .55, {rotation: -270}, {
                        rotation: 0,
                        ease: pixGS.Back.easeOut
                    }, "-=0.5"), r.fromTo(p, .6, {width: 0}, {
                        width: "42%",
                        opacity: 1,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.55"), r.fromTo(h, .6, {width: 0}, {
                        width: "100%",
                        opacity: 1,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.6"), r.fromTo(u, .2, {opacity: 0}, {
                        opacity: 1,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.27"), r.fromTo(d, .5, {opacity: 0}, {
                        opacity: 1,
                        ease: pixGS.Quint.easeOut
                    }, "-=0.28"), r.fromTo(d, .75, {y: -20}, {y: 0}, "-=0.5"), r.addLabel("animatedIn"), r.fromTo(s, 1.08, {y: 0}, {
                        opacity: 0,
                        y: -60,
                        ease: pixGS.Quad.easeIn
                    }), r.to(d, 1.08, {y: 60, opacity: 0, ease: pixGS.Quad.easeIn}, "-=1.08"), r.to(l, 1.08, {
                        opacity: 0,
                        y: -90,
                        ease: pixGS.Quad.easeIn
                    }, "-=1.08"), r.to(p, .86, {
                        width: 0,
                        opacity: 0,
                        ease: pixGS.Quad.easeIn
                    }, "-=0.94"), r.to(h, .86, {
                        width: 0,
                        opacity: 0,
                        ease: pixGS.Quad.easeIn
                    }, "-=0.86"), r.to(c, 1, {rotation: 180}, "-=1.08"), r.to(c, .11, {opacity: 0}, "-=0.03"), r.to(u, .14, {opacity: 0}, "-=1.08"), r.addLabel("animatedOut");
                    var g, v, w = r.getLabelTime("animatedIn"), y = r.getLabelTime("animatedOut"), b = m + f / 2 - wh / 2, x = b + f / 2;
                    0 == i && (b = m, x = b + windowHeight / 2), g = w / y, v = 1 - g, t.initialized || (r.tweenTo("animatedIn", {
                        onComplete: function () {
                            Modernizr.touch && n.data("animated", !0)
                        }
                    }), Modernizr.touch || r.tweenTo("animatedOut", {
                        onComplete: function () {
                            n.data("animated", !0)
                        }, onUpdate: function () {
                            var e = 1 / (x - b) * (Q - b), t = 0 > e ? g : g + v * e, i = r.progress();
                            Math.abs(t - i) < .01 && (n.data("animated", !0), this.kill())
                        }
                    })), n.data("tween", {timeline: r, ab: g, bc: v, start: b, end: x})
                }), t.initialized = !0, t.update()
            }
        }, update: function () {
            if (!is_EDGE) {
                e(this.selector).each(function (t, i) {
                    var a = e(i).find(".article__headline"), o = a.data("tween"), n = 0;
                    if (!empty(o) && o.end - o.start !== 0) {
                        n = 1 / (o.end - o.start) * (Q - o.start);
                        var r = o.ab + o.bc * n;
                        if (a.data("progress", r), !a.data("animated"))return;
                        if (0 > n && (r = o.ab), 1 > r)return void o.timeline.progress(r);
                        o.timeline.progress(1)
                    }
                })
            }
        }
    }, R = {
        $el: e('<div class="navigator"></div>'),
        sectionSelector: ".article__header",
        scrollDuration: 300,
        currentSelected: 0,
        lastSelected: 0,
        isWhite: !0,
        wasWhite: !0,
        initialized: !1,
        timeline: new pixGS.TimelineMax({paused: !0}),
        nextTop: 0,
        footer: null,
        footerTop: 0,
        initialize: function () {
            var t = this, i = this.$el;
            var menuItems = document.getElementById("menu-main-menu-2");
            var currentMenuItem = " current-menu-item";
            var currentPageItem = " current_page_item";
            if (this.initialized = !0, this.$sections = e(t.sectionSelector), this.footer = e(".sidebar--footer__dark"), this.footer.length && (this.footerTop = this.footer.offset().top), !(this.$sections.length < 2)) {
                for (var a = 0; a < this.$sections.length; a++) {
                    var o = e(t.$sections[a]), n = o.offset().top, r = o.outerHeight(), s = e('<a href="#" class="navigator__item"><div class="bullet"></div></a>');
                    if ("none" == o.css("display")) {
                        if (!o.next().is(".article--page")) {
                            t.$sections.splice(a, 1), a--;
                            continue
                        }
                        n = t.nextTop
                    } else t.nextTop += r;
                    o.next().is(".article--page") && (t.nextTop += o.next().outerHeight()), s.appendTo(i), s.data("scrollTo", n - windowHeight / 2 + r / 2), o.data("offsetTop", n), function (e) {
                        e.on("click", function (t) {
                            return t.preventDefault(), t.stopPropagation(), w(e.data("scrollTo")), !1
                        })
                    }(s)
                }
                this.$selected = e('<div class="navigator__item  navigator__item--selected"><div class="bullet"></div></div>').appendTo(i), this.$selectedBullet = this.$selected.find(".bullet"), this.timeline.add(pixGS.TweenMax.to(t.$selectedBullet, 0, {})), this.timeline.add(pixGS.TweenMax.to(t.$selectedBullet, .1, {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    scaleY: 2,
                    scaleX: .6
                })), this.timeline.add(pixGS.TweenMax.to(t.$selectedBullet, .1, {
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    scaleY: 1,
                    scaleX: 1
                })), this.timeline.add(pixGS.TweenMax.to(t.$selectedBullet, 0, {scale: 1.2})), i.css({"margin-top": -1 * i.height() / 2}).prependTo("body"), this.update(), e(".navigator__item").each(function (t, i) {
                    var a = e(".navigator__item").length, o = 3e3 + 400 * t, n = e(i);
                    n.is(".navigator__item--selected") && (o += 100 * a), setTimeout(function () {
                        pixGS.TweenMax.fromTo(n, 1, {opacity: 0, scale: .7}, {
                            opacity: 1.25,
                            scale: 1,
                            ease: pixGS.Elastic.easeOut
                        })
                    }, o)
                }), i.hasClass("navigator--transparent") ? pixGS.TweenMax.to(i, 2, {opacity: .2}) : pixGS.TweenMax.to(i, .3, {opacity: 1})
            }
            if (menuItems.hasChildNodes) {
                for (var a = 0; a < menuItems.children.length; a++) {
                    menuItems.children[a].className = menuItems.children[a].className.replace(currentMenuItem, "");
                    menuItems.children[a].className = menuItems.children[a].className.replace(currentPageItem, "");
                }
                menuItems.children[t.currentSelected].className = menuItems.children[t.currentSelected].className + currentMenuItem;
                menuItems.children[t.currentSelected].className = menuItems.children[t.currentSelected].className + currentPageItem;
            }
        },
        update: function () {
            var t = this, i = this.$el;
            var menuItems = document.getElementById("menu-main-menu-2");
            var currentMenuItem = " current-menu-item";
            var currentPageItem = " current_page_item";
            this.initialized && (this.$sections.each(function (i, a) {
                var o = e(a), n = o.data("offsetTop"), r = n + o.outerHeight(), s = Q + windowHeight / 2;
                ("none" != o.css("display") || (r = n, o.next().is(".article--page"))) && s > n && (t.currentSelected = i, t.isWhite = !0, s > r && (t.isWhite = !1))
            }), 0 != this.footerTop && this.footerTop < Q + windowHeight / 2 && (this.isWhite = !0), this.lastSelected != this.currentSelected && (this.lastSelected = this.currentSelected, pixGS.TweenMax.to(this.$selected, .3, {top: 24 * t.currentSelected}), t.timeline.tweenFromTo(0, .3)), this.wasWhite != this.isWhite && (this.wasWhite = this.isWhite, i.toggleClass("navigator--black", !t.isWhite)));
            /*Custom code*/
            if (menuItems.hasChildNodes) {
                for (var a = 0; a < menuItems.children.length; a++) {
                    menuItems.children[a].className = menuItems.children[a].className.replace(currentMenuItem, "");
                    menuItems.children[a].className = menuItems.children[a].className.replace(currentPageItem, "");
                }
                menuItems.children[t.currentSelected].className = menuItems.children[t.currentSelected].className + currentMenuItem;
                menuItems.children[t.currentSelected].className = menuItems.children[t.currentSelected].className + currentPageItem;
            }
        }
    }, W = e("body"), N = e("html"), F = (e(t), e(document)), B = F.height();
    e(document).ready(function () {
        globalDebug && console.group("OnDocumentReady"), _(), globalDebug && console.groupEnd()
    }), e(t).load(function () {
        if (globalDebug && console.group("OnWindowLoad"), g(), is_mobile_ie && e("html").addClass("mobile-ie"), e("textarea").length && e("textarea").autosize(), e(".pixcode--tabs").organicTabs(), e("html").is(".ie9, .lt-ie9") ? setTimeout(function () {
                P.initialize(), j.initialize()
            }, 400) : setTimeout(function () {
                P.initialize(), j.initialize()
            }, 600), v(), M(), r(e(".article__content"), !0), n(), b(), x(), !empty(e("#date-otreservations"))) {
            var t = e("#date-otreservations").closest(".otw-wrapper").children(".txtDateFormat").attr("value").toUpperCase();
            new Pikaday({
                field: document.getElementById("date-otreservations"),
                format: t,
                minDate: moment().toDate(),
                defaultDate: moment().toDate(),
                setDefaultDate: !0
            })
        }
        e(".pixcode--tabs").organicTabs(), $.initialize(), setTimeout(function () {
            R.initialize(), L.initialize()
        }, 60)
    }), e(t).on("debouncedresize", function () {
        globalDebug && console.group("OnResize"), windowWidth = e(t).width(), windowHeight = e(t).height(), x(), r(e(".js-pixslider").not(".article__parallax .js-pixslider")), L.initialize(), P.initialize(), j.initialize()
    }), e(t).on("organicTabsChange", function () {
        L.initialize(), P.initialize(), j.initialize()
    }), e(t).on("orientationchange", function () {
        setTimeout(function () {
            P.initialize(), j.initialize()
        }, 300)
    });
    var Q = e("body").scrollTop() || e("html").scrollTop(), q = !1;
    if (e(t).on("scroll", function () {
            Q = e("body").scrollTop() || e("html").scrollTop(), M()
        }), navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && t.innerHeight != document.documentElement.clientHeight) {
        var X = function () {
            e("html, body").outerHeight(t.innerHeight)
        };
        t.addEventListener("scroll", X, !1), t.addEventListener("orientationchange", X, !1), X()
    }
    e(function () {
        var t = e(".site-header"), i = parseInt(t.outerHeight(), 10), a = e("html");
        e(".site-header a[href*=#]:not([href=#])").click(function () {
            var t = 0;
            if (a.hasClass("navigation--is-visible") && (e("body").css("overflow", ""), a.removeClass("navigation--is-visible"), t = 600), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var o = e(this.hash);
                if (o = o.length ? o : e("[name=" + this.hash.slice(1) + "]"), o.length)return setTimeout(function () {
                    e("html,body").animate({scrollTop: o.offset().top - i}, 1e3)
                }, t), !1
            }
        })
    }), gifImages = ["http://i.imgur.com/ShiZM6m.gif", "http://i.imgur.com/8ZYNp.gif", "http://i.imgur.com/Xb4fq.gif", "http://i.imgur.com/UYPLKwN.gif", "http://media.tumblr.com/d9e792a91d5391b8a7aa22689d4e2555/tumblr_inline_mwq1hmelce1qmoozl.gif", "http://www.teen.com/wp-content/uploads/2013/10/world-without-jennifer-lawrence-gifs-food-uproxx-2.gif"], e(t).on("load", function () {
        e(".error404").length && E()
    }), e(t).keydown(function (e) {
        32 == e.keyCode && E()
    }), Date.now || (Date.now = function () {
        return (new Date).getTime()
    }), function () {
        "use strict";
        for (var e = ["webkit", "moz"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) {
            var a = e[i];
            t.requestAnimationFrame = t[a + "RequestAnimationFrame"], t.cancelAnimationFrame = t[a + "CancelAnimationFrame"] || t[a + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) || !t.requestAnimationFrame || !t.cancelAnimationFrame) {
            var o = 0;
            t.requestAnimationFrame = function (e) {
                var t = Date.now(), i = Math.max(o + 16, t);
                return setTimeout(function () {
                    e(o = i)
                }, i - t)
            }, t.cancelAnimationFrame = clearTimeout
        }
    }()
}(jQuery, window);