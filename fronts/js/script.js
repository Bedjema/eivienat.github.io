
$('.rap_grat').each(function() {
    $(this).magnificPopup({
        type: "inline",
        items: { src: "#rapp-grat" },
        closeOnBgClick: !1,
        preloader: !0,
        modal: !0,
        callbacks: {
            open: function() {
                $(".filter-bg").css("filter", "blur(8px)");
            },
            close: function() {
                $(".filter-bg").css("filter", "blur(0px)");
            },
        },
    });
});
    
    $(".demande-devis-btn").each(function() {
        $(this).click(function() {
            $("html, body").animate({ scrollTop: $("#form-devis").offset().top },
                    900
                ),
                $("input:text:visible:first").focus(),
                $("#form-devis")
                .addClass("light")
                .delay(2e3)
                .queue(function() {
                    $("#form-devis").removeClass("light").dequeue();
                });
        });
    }),
    $(".rappel-gratuit-btn").each(function() {
        $(this).click(function() {
            $("html, body").animate({ scrollTop: $("#rappel-gratuit").offset().top },
                900
            );
        });
    }),
    function(e) {
        "use strict";
        e.validator.addMethod(
                "noSpace",
                function(t, o) {
                    return !e(o).attr("required") || 0 == t.search(/^(?! *$)[^]+$/);
                },
                "Veuillez remplir ce champ vide."
            ),
            e.validator.addClassRules({ "form-control": { noSpace: !0 } });
        e(".form_tel_mask").inputmask({
                mask: [{ mask: "##.##.##.##.##" }],
                greedy: !1,
                definitions: { "#": { validator: "[0-9]", cardinality: 1 } },
            }),
            e(".validation-form").each(function() {
                e(this).validate({
                    rules: {
                        hiddenRecaptcha: {
                            required: function() {
                                if (grecaptcha.getResponse() == '') {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }
                    },
                    errorPlacement: function(e, t) {
                        "radio" == t.attr("type") || "checkbox" == t.attr("type") ?
                            e.appendTo(t.closest(".form-group")) :
                            t.is("select") && t.closest(".custom-select-2") ?
                            e.appendTo(t.closest(".form-group")) :
                            t.closest(".form-group").length ?
                            e.appendTo(t.closest(".form-group")) :
                            e.insertAfter(t);
                    },
                    submitHandler: function(t) {
                        var o = e(this.submitButton);
                        o.val();
                        o
                            .val(
                                o.data("loading-text") ?
                                o.data("loading-text") :
                                "En traitement..."
                            )
                            .attr("disabled", !0),
                            e("body").addClass("loading-overlay-showing"),
                            t.submit();
                    },
                });
            });
    }.apply(this, [jQuery]);
$(".dropdown").click(function() {
    var dropdown = $(this).closest(".dropdown");
    dropdown.find(".dropdown-menu").toggle();
});

window.info = {}, window.info.fn = { getOptions: function(t) { if ("object" == typeof t) return t; if ("string" != typeof t) return {}; try { return JSON.parse(t.replace(/'/g, '"').replace(";", "")) } catch (t) { return {} } } },function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { accX: 0, accY: -80, delay: 100, duration: "750ms", minWindowWidth: 767, forceAnimation: !1 }, i.prototype = {initialize: function(t, e) { return t.data("__animate") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) },setData: function() { return this.$el.data("__animate", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() { var t = this; return e("body").hasClass("loading-overlay-showing") ? e(window).on("loading.overlay.ready", function() { t.animate() }) : t.animate(), this },animate: function() {var t = this,i = this.options.wrapper,s = 0,n = this.options.duration,a = i.offset().top,o = e(window).scrollTop();return i.addClass("appear-animation animated"), !e("html").hasClass("no-csstransitions") && e(window).width() > t.options.minWindowWidth && a >= o || 1 == t.options.forceAnimation ? i.appear(function() { i.one("animation:show", function(e) { s = i.attr("data-appear-animation-delay") ? i.attr("data-appear-animation-delay") : t.options.delay, "750ms" != (n = i.attr("data-appear-animation-duration") ? i.attr("data-appear-animation-duration") : t.options.duration) && i.css("animation-duration", n), i.css("animation-delay", s + "ms"), i.addClass(i.attr("data-appear-animation") + " appear-animation-visible") }), i.trigger("animation:show") }, { accX: t.options.accX, accY: t.options.accY }) : i.addClass("appear-animation-visible"), this}}, e.extend(t, { PluginAnimate: i }), e.fn.infoPluginAnimate = function(t) { return this.map(function() { var s = e(this); return s.data("__animate") ? s.data("__animate") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { animationName: "fadeIn", animationSpeed: 50, startDelay: 500, minWindowWidth: 768, letterClass: "" }, i.prototype = {initialize: function(t, e) { if (t.data("__animatedLetters")) return this; var i = this; return this.$el = t, this.initialText = t.text(), i.$el.closest(".owl-carousel").get(0) ? (i.$el.closest(".owl-carousel").on("initialized.owl.carousel", function() { i.setData().setOptions(e).build().events() }), this) : (this.setData().setOptions(e).build().events(), this) },setData: function() { return this.$el.data("__animatedLetters", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() {var t = this,i = t.$el.text().split("");return e(window).width() < t.options.minWindowWidth ? this : (t.$el.addClass("initialized"), t.setMinHeight(), t.$el.text(""), setTimeout(function() {for (var e = 0; e < i.length; e++) {var s = i[e];t.$el.append('<span class="letter ' + (t.options.letterClass ? t.options.letterClass + " " : "") + t.options.animationName + ' animated" style="animation-delay: ' + e * t.options.animationSpeed + 'ms;">' + s + "</span>")}}, t.options.startDelay), this)},setMinHeight: function() { return this.$el.closest(".owl-carousel").get(0) ? (this.$el.closest(".owl-carousel").addClass("d-block"), this.$el.css("min-height", this.$el.height()), this.$el.closest(".owl-carousel").removeClass("d-block")) : this.$el.css("min-height", this.$el.height()), this },destroy: function() { return this.$el.html(this.initialText).css("min-height", ""), this },events: function() { var t = this; return t.$el.on("animated.letters.destroy", function() { t.destroy() }), t.$el.on("animated.letters.initialize", function() { t.build() }), this }}, e.extend(t, { PluginAnimatedLetters: i }), e.fn.infoPluginAnimatedLetters = function(t) { return this.map(function() { var s = e(this); return s.data("__animatedLetters") ? s.data("__animatedLetters") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = {}, i.prototype = { initialize: function(t, e) { return t.data("__datepicker") ? this : (this.$el = t, this.setVars().setData().setOptions(e).build(), this) }, setVars: function() { return this.skin = this.$el.data("plugin-skin"), this }, setData: function() { return this.$el.data("__datepicker", this), this }, setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t), this }, build: function() { return this.$el.bootstrapDP(this.options), this.skin && void 0 !== this.$el.data("datepicker").picker && this.$el.data("datepicker").picker.addClass("datepicker-" + this.skin), this } }, e.extend(t, { PluginDatePicker: i }), e.fn.infoPluginDatePicker = function(t) { return this.each(function() { var s = e(this); return s.data("__datepicker") ? s.data("__datepicker") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {"use strict";t = t || {};var i = !1;e.extend(t, {Nav: {defaults: { wrapper: e("#mainNav"), scrollDelay: 600, scrollAnimation: "easeOutQuad" },initialize: function(t, e) { return i ? this : (i = !0, this.$wrapper = t || this.defaults.wrapper, this.setOptions(e).build().events(), this) },setOptions: function(t) { return this },build: function() {var t, i = e("html"),s = e(".header");return s.find(".dropdown-toggle:not(.notification-icon), .dropdown-submenu > a").append(e("<i />").addClass("fas fa-caret-down")), this.$wrapper.find("a[data-thumb-preview]").each(function() { t = e("<span />").addClass("thumb-info thumb-info-preview").append(e("<span />").addClass("thumb-info-wrapper").append(e("<span />").addClass("thumb-info-image").css("background-image", "url(" + e(this).data("thumb-preview") + ")"))), e(this).append(t) }), i.hasClass("side-header-right") && s.find(".dropdown").addClass("dropdown-reverse"), this},events: function() {var t = this,i = e(".header"),s = e(window);return i.find('a[href="#"]').on("click", function(t) { t.preventDefault() }), i.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-caret-down, .dropdown-submenu a[href!="#"] .fa-caret-down').on("click", function(t) { t.preventDefault(), s.width() < 992 && e(this).closest("li").toggleClass("showed") }), "ontouchstart" in document.documentElement && i.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])').on("touchstart click", function(t) { if (s.width() > 991) { if (t.stopPropagation(), t.preventDefault(), !0 === t.handled) return !1; var i = e(this).closest("li"); return i.hasClass("tapped") && (location.href = e(this).attr("href")), i.addClass("tapped"), t.handled = !0, !1 } }).on("blur", function(t) { e(this).closest("li").removeClass("tapped") }), i.find("[data-collapse-nav]").on("click", function(t) { e(this).parents(".collapse").removeClass("in") }), e("[data-hash]").each(function() {var i = e(this).attr("href"),s = e(this).is("[data-hash-offset]") ? e(this).data("hash-offset") : 0;e(i).get(0) && e(this).on("click", function(n) { n.preventDefault(), e(this).parents(".collapse.in").removeClass("in"), t.scrollToTarget(i, s) })}), this},scrollToTarget: function(t, i) { return e("body").addClass("scrolling"), e("html, body").animate({ scrollTop: e(t).offset().top - i }, this.options.scrollDelay, this.options.scrollAnimation, function() { e("body").removeClass("scrolling") }), this }}})}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = {}, i.prototype = { initialize: function(t, e) { return t.data("__maskedInput") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) }, setData: function() { return this.$el.data("__maskedInput", this), this }, setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t), this }, build: function() { return this.$el.mask(this.$el.data("input-mask"), this.options), this } }, e.extend(t, { PluginMaskedInput: i }), e.fn.infoPluginMaskedInput = function(t) { return this.each(function() { var s = e(this); return s.data("__maskedInput") ? s.data("__maskedInput") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {}, e.extend(t, {PluginScrollToTop: {defaults: { wrapper: e("body"), offset: 150, buttonClass: "scroll-to-top", iconClass: "fas fa-chevron-up", delay: 500, visibleMobile: !1, label: !1 },initialize: function(t) { return initialized = !0, this.setOptions(t).build().events(), this },setOptions: function(t) { return this.options = e.extend(!0, {}, this.defaults, t), this },build: function() { var t; return t = e("<a />").addClass(this.options.buttonClass).attr({ href: "#" }).append(e("<i />").addClass(this.options.iconClass)), this.options.visibleMobile || t.addClass("hidden-mobile"), this.options.label && t.append(e("<span />").html(this.options.label)), this.options.wrapper.append(t), this.$el = t, this },events: function() {var t = this,i = !1;return t.$el.on("click", function(i) { return i.preventDefault(), e("body, html").animate({ scrollTop: 0 }, t.options.delay), !1 }), e(window).scroll(function() { i || (i = !0, e(window).scrollTop() > t.options.offset ? (t.$el.stop(!0, !0).addClass("visible"), i = !1) : (t.$el.stop(!0, !0).removeClass("visible"), i = !1)) }), this}}})}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = {}, i.prototype = { initialize: function(t, e) { return this.$el = t, this.setData().setOptions(e).build(), this }, setData: function() { return this.$el.data("__beforeafter", this), this }, setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this }, build: function() { return e.isFunction(e.fn.twentytwenty) ? (this.options.wrapper.twentytwenty(this.options), this) : this } }, e.extend(t, { PluginBeforeAfter: i }), e.fn.infoPluginBeforeAfter = function(t) { return this.map(function() { var s = e(this); return s.data("__beforeafter") ? s.data("__beforeafter") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { loop: !0, responsive: { 0: { items: 1 }, 479: { items: 1 }, 768: { items: 2 }, 979: { items: 3 }, 1199: { items: 4 } }, navText: [], refresh: !1 }, i.prototype = {initialize: function(t, i) {if (t.data("__carousel")) return this;if (this.$el = t, t.find("[data-icon]").get(0)) {var s = this;return e(window).on("icon.rendered", function() {if (t.data("__carousel")) return this;setTimeout(function() { s.setData().setOptions(i).build() }, 1e3)}), this}return this.setData().setOptions(i).build(), this},setData: function() { return this.$el.data("__carousel", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() {if (!e.isFunction(e.fn.owlCarousel)) return this;var i = this,s = this.options.wrapper;if (s.addClass("owl-eco"), s.addClass("owl-loading"), "rtl" == e("html").attr("dir") && (this.options = e.extend(!0, {}, this.options, { rtl: !0 })), 1 == this.options.items && (this.options.responsive = {}), this.options.items > 4 && (this.options = e.extend(!0, {}, this.options, { responsive: { 1199: { items: this.options.items } } })), this.options.autoHeight) {var n = [];s.find(".owl-item").each(function() { e(this).hasClass("active") && n.push(e(this).height()) }), e(window).on("load", function() { s.find(".owl-stage-outer").height(Math.max.apply(null, n)) })}if (s.owlCarousel(this.options).addClass("owl-carousel-init animated fadeIn"), setTimeout(function() { s.removeClass("animated fadeIn") }, 1e3), s.closest(".owl-carousel-wrapper").get(0) && setTimeout(function() { s.closest(".owl-carousel-wrapper").css({ height: "" }) }, 500), i.navigationOffsets(), s.hasClass("nav-outside") && (e(window).on("owl.carousel.nav.outside", function() { e(window).width() < 992 ? (i.options.stagePadding = 40, s.addClass("stage-margin")) : (i.options.stagePadding = 0, s.removeClass("stage-margin")), s.owlCarousel("destroy").owlCarousel(i.options), i.navigationOffsets() }), e(window).trigger("owl.carousel.nav.outside")), s.hasClass("nav-svg-arrows-1") && s.find(".owl-next, .owl-prev").append('<svg version="1.1" viewBox="0 0 15.698 8.706" width="17" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon stroke="#212121" stroke-width="0.1" fill="#212121" points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "/></svg>'), s.attr("data-sync") && s.on("change.owl.carousel", function(t) {if (t.namespace && "position" === t.property.name) {var i = t.relatedTarget.relative(t.property.value, !0);e(s.data("sync")).owlCarousel("to", i, 300, !0)}}), s.hasClass("carousel-center-active-item")) {var a = s.find(".owl-item.active"),o = Math.floor((s.find(".owl-item.active").length - 1) / 2);a.eq(o).addClass("current"), s.on("change.owl.carousel", function(t) {s.find(".owl-item").removeClass("current"), setTimeout(function() {var t = s.find(".owl-item.active"),e = Math.floor((s.find(".owl-item.active").length - 1) / 2);t.eq(e).addClass("current")}, 100)}), s.trigger("refresh.owl.carousel")}return (i.options.animateIn || i.options.animateOut) && (s.on("change.owl.carousel", function(t) { s.find("[data-appear-animation], [data-plugin-animated-letters]").addClass("d-none"), s.find("[data-plugin-animated-letters]").trigger("animated.letters.destroy"), s.find(".owl-item:not(.active) [data-carousel-onchange-show]").removeClass("d-none") }), s.on("changed.owl.carousel", function(i) {setTimeout(function() {s.find(".owl-item.cloned [data-appear-animation]").get(0) && s.find(".owl-item.cloned [data-appear-animation]").each(function() {var i, s = e(this),n = t.fn.getOptions(s.data("plugin-options"));n && (i = n), s.infoPluginAnimate(i)}), s.find(".owl-item.active [data-appear-animation], [data-plugin-animated-letters]").removeClass("d-none"), s.find(".owl-item.active [data-plugin-animated-letters]").trigger("animated.letters.initialize"), s.find(".owl-item.cloned.active [data-plugin-video-background]").trigger("video.background.initialize")}, 1e3)})), s.find("[data-plugin-video-background]").get(0) && e(window).resize(), s.removeClass("owl-loading"), s.css("height", "auto"), i.carouselNavigate(), i.options.refresh && s.owlCarousel("refresh"), this},navigationOffsets: function() {var t = this.options.wrapper,e = "none" != t.find(".owl-nav").css("transform"),i = "none" != t.find(".owl-dots").css("transform");return this.options.navHorizontalOffset && !this.options.navVerticalOffset && (e ? t.find(".owl-nav").css({ left: this.options.navHorizontalOffset }) : t.find(".owl-nav").css({ transform: "translate3d(" + this.options.navHorizontalOffset + ", 0, 0)" })), this.options.navVerticalOffset && !this.options.navHorizontalOffset && (e ? t.find(".owl-nav").css({ top: "calc( 50% - " + this.options.navVerticalOffset + " )" }) : t.find(".owl-nav").css({ transform: "translate3d(0, " + this.options.navVerticalOffset + ", 0)" })), this.options.navVerticalOffset && this.options.navHorizontalOffset && (e ? t.find(".owl-nav").css({ top: "calc( 50% - " + this.options.navVerticalOffset + " )", left: this.options.navHorizontalOffset }) : t.find(".owl-nav").css({ transform: "translate3d(" + this.options.navHorizontalOffset + ", " + this.options.navVerticalOffset + ", 0)" })), this.options.dotsHorizontalOffset && !this.options.dotsVerticalOffset && t.find(".owl-dots").css({ transform: "translate3d(" + this.options.dotsHorizontalOffset + ", 0, 0)" }), this.options.dotsVerticalOffset && !this.options.dotsHorizontalOffset && (i ? t.find(".owl-dots").css({ top: "calc( 50% - " + this.options.dotsVerticalOffset + " )" }) : t.find(".owl-dots").css({ transform: "translate3d(0, " + this.options.dotsVerticalOffset + ", 0)" })), this.options.dotsVerticalOffset && this.options.dotsHorizontalOffset && t.find(".owl-dots").css({ transform: "translate3d(" + this.options.dotsHorizontalOffset + ", " + this.options.dotsVerticalOffset + ", 0)" }), this},carouselNavigate: function() {var t = this.options.wrapper,i = t.data("owl.carousel");return e("[data-carousel-navigate]").get(0) && (e('[data-carousel-navigate-id="#' + t.attr("id") + '"]').each(function() {var t = e(this),s = e(t.data("carousel-navigate-id")).get(0),n = t.data("carousel-navigate-to");s && t.on("click", function() { i.to(parseInt(n) - 1) })}), t.on("change.owl.carousel", function() { e('[data-carousel-navigate-id="#' + t.attr("id") + '"]').removeClass("active") }), t.on("changed.owl.carousel", function(i) { e('[data-carousel-navigate-id="#' + t.attr("id") + '"][data-carousel-navigate-to="' + (i.item.index + 1) + '"]').addClass("active") })), this}}, e.extend(t, { PluginCarousel: i }), e.fn.infoPluginCarousel = function(t) { return this.map(function() { var s = e(this); return s.data("__carousel") ? s.data("__carousel") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { accX: 0, accY: 0, appendWrapper: !1, prependWrapper: !1, speed: 3e3, refreshInterval: 100, decimals: 0, onUpdate: null, onComplete: null }, i.prototype = {initialize: function(t, e) { return t.data("__counter") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) },setData: function() { return this.$el.data("__counter", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() {if (!e.isFunction(e.fn.countTo)) return this;var t = this,i = this.options.wrapper;return e.extend(t.options, {onComplete: function() {if (i.data("append"))if (t.options.appendWrapper) {var s = e(t.options.appendWrapper);s.append(i.data("append")), i.html(i.html() + s[0].outerHTML)} else i.html(i.html() + i.data("append"));if (i.data("prepend"))if (t.options.prependWrapper) {var n = e(t.options.prependWrapper);n.append(i.data("prepend")), i.html(i.html() + n[0].outerHTML)} else i.html(i.data("prepend") + i.html())}}), i.appear(function() { i.countTo(t.options) }, { accX: t.options.accX, accY: t.options.accY }), this}}, e.extend(t, { PluginCounter: i }), e.fn.infoPluginCounter = function(t) { return this.map(function() { var s = e(this); return s.data("__counter") ? s.data("__counter") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {"use strict";t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { startPos: "top", speed: 3, horizontal: !1, isInsideSVG: !1, transition: !1, transitionDelay: 0, transitionDuration: 500 }, i.prototype = {initialize: function(t, e) { return t.data("__floatElement") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) },setData: function() { return this.$el.data("__floatElement", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() {var t, i = this,s = this.options.wrapper,n = e(window);return i.options.style && s.attr("style", i.options.style), n.width() > 767 && ("none" == i.options.startPos ? t = "" : "top" == i.options.startPos ? (s.css({ top: 0 }), t = "") : (s.css({ bottom: 0 }), t = "-"), i.options.transition && s.css({ transition: "ease-out transform " + i.options.transitionDuration + "ms " + i.options.transitionDelay + "ms" }), i.movement(t), n.on("scroll", function() { i.movement(t) })), this},movement: function(t) {var i = this.options.wrapper,s = e(window),n = s.scrollTop(),a = i.offset().top - n,o = (this.options.isInsideSVG ? 2 : 100) * a / s.height();i.visible(!0) && (this.options.horizontal ? i.css({ transform: "translate3d(" + t + o / this.options.speed + "%, " + t + o / this.options.speed + "%, 0)" }) : i.css({ transform: "translate3d(0, " + t + o / this.options.speed + "%, 0)" }))}}, e.extend(t, { PluginFloatElement: i }), e.fn.infoPluginFloatElement = function(t) { return this.map(function() { var s = e(this); return s.data("__floatElement") ? s.data("__floatElement") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { effect: "show", appearEffect: "", imgFluid: !0, appear: function(t, e) {}, load: function(t, i) { e(this).addClass(e.trim("lazy-load-loaded " + i.appearEffect)).css({ "animation-duration": "1s" }) } }, i.prototype = { initialize: function(t, e) { return t.data("__lazyload") ? this : (this.$el = t, this.setData().setOptions(e).build().events(), this) }, setData: function() { return this.$el.data("__lazyload", this), this }, setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this }, build: function() { return e.isFunction(e.fn.lazyload) ? (this.options.wrapper.attr("height") && this.options.wrapper.height(this.options.wrapper.attr("height")), this.options.wrapper.lazyload(this.options), this) : this }, events: function() { var t = this; return t.options.imgFluid && t.options.wrapper.is("img") && t.options.wrapper.on("appear", function() { setTimeout(function() { t.options.wrapper.addClass("img-fluid"), setTimeout(function() { t.options.wrapper.css("height", ""), t.options.wrapper.closest(".isotope-item") && t.options.wrapper.closest(".isotope-item").closest(".sort-destination").isotope("layout") }, 700) }, 500) }), this } }, e.extend(t, { PluginLazyLoad: i }), e.fn.infoPluginLazyLoad = function(t) { return this.map(function() { var s = e(this); return s.data("__lazyload") ? s.data("__lazyload") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.updateModals = function() { i.updateBootstrapModal() }, i.updateBootstrapModal = function() {if (void 0 === e.fn.modal || void 0 === e.fn.modal.Constructor || void 0 === e.fn.modal.Constructor.prototype || void 0 === e.fn.modal.Constructor.prototype.enforceFocus) return !1;var t = e.fn.modal.Constructor.prototype.enforceFocus;e.fn.modal.Constructor.prototype.enforceFocus = function() {t.apply(this);var i = this.$element.find(".scrollable");i && (e.isFunction(e.fn.infoPluginScrollable) && i.infoPluginScrollable(), e.isFunction(e.fn.nanoScroller) && i.nanoScroller())}}, i.defaults = { contentClass: "scrollable-content", paneClass: "scrollable-pane", sliderClass: "scrollable-slider", alwaysVisible: !0, preventPageScrolling: !0 }, i.prototype = { initialize: function(t, e) { return t.data("__scrollable") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) }, setData: function() { return this.$el.data("__scrollable", this), this }, setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this }, build: function() { return this.options.wrapper.nanoScroller(this.options), this } }, e.extend(t, { PluginScrollable: i }), e.fn.infoPluginScrollable = function(t) { return this.each(function() { var s = e(this); return s.data("__scrollable") ? s.data("__scrollable") : new i(s, t) }) }, e(function() { i.updateModals() })}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { minWidth: 991, activeClass: "sticky-active" }, i.prototype = {initialize: function(t, e) { return t.data("__sticky") ? this : (this.$el = t, this.setData().setOptions(e).build().events(), this) },setData: function() { return this.$el.data("__sticky", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() {if (!e.isFunction(e.fn.pin)) return this;if (e(window), this.options.wrapper.pin(this.options), this.options.wrapper.hasClass("sticky-wrapper-transparent") && this.options.wrapper.parent().addClass("position-absolute w-100"), this.options.wrapper.find("img").attr("data-change-src")) {var t = this.options.wrapper.find("img"),i = t.attr("src"),s = t.attr("data-change-src");this.changeLogoSrc = function(e) { e ? t.attr("src", s) : t.attr("src", i) }}return this},events: function() {var t = this,i = e(window),s = t.options.wrapper.find("img"),n = !0,a = !1,o = t.options.wrapper.hasClass("sticky-wrapper-effect-1") ? "sticky-effect-active" : "sticky-active";i.on("scroll sticky.effect.active", function() { t.options.wrapper.hasClass(o) ? n && (s.attr("data-change-src") && t.changeLogoSrc(!0), n = !1, a = !0) : a && (s.attr("data-change-src") && t.changeLogoSrc(!1), a = !1, n = !0) });var r = !1;t.options.stickyStartEffectAt && (t.options.stickyStartEffectAt < i.scrollTop() && (t.options.wrapper.addClass("sticky-effect-active"), i.trigger("sticky.effect.active")), i.on("scroll", function() { t.options.stickyStartEffectAt < i.scrollTop() ? (t.options.wrapper.addClass("sticky-effect-active"), r = !0, i.trigger("sticky.effect.active")) : (r && (t.options.wrapper.find(".sticky-body").addClass("position-fixed"), r = !1), 0 == i.scrollTop() && t.options.wrapper.find(".sticky-body").removeClass("position-fixed"), t.options.wrapper.removeClass("sticky-effect-active")) })), e('[data-toggle="collapse"]').get(0) && e('[data-toggle="collapse"]').on("click", function() { setTimeout(function() { t.build(), e(window).trigger("scroll") }, 1e3) })}}, e.extend(t, { PluginSticky: i }), e.fn.infoPluginSticky = function(t) { return this.map(function() { var s = e(this); return s.data("__sticky") ? s.data("__sticky") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = function(t, e) { return this.initialize(t, e) };i.defaults = { duration: 350, isAccordion: !1 }, i.prototype = {initialize: function(t, e) { return t.data("__toggle") ? this : (this.$el = t, this.setData().setOptions(e).build(), this) },setData: function() { return this.$el.data("__toggle", this), this },setOptions: function(t) { return this.options = e.extend(!0, {}, i.defaults, t, { wrapper: this.$el }), this },build: function() {var t = this,i = this.options.wrapper.find("> .toggle"),s = null;return i.each(function() {(s = e(this)).hasClass("active") && (s.find("> p").addClass("preview-active"), s.find("> .toggle-content").slideDown(t.options.duration)), t.events(s)}), t.options.isAccordion && (t.options.duration = t.options.duration / 2), this},events: function(t) {var i = this,s = 0,n = 0,a = null;t.find("> label, > .toggle-title").click(function(t) {var o = e(this),r = o.parent(),d = o.parents(".toggle"),l = null,h = null;i.options.isAccordion && void 0 !== t.originalEvent && (h = d.find(".toggle.active > label, .toggle.active > .toggle-title"))[0] == o[0] || (r.toggleClass("active"), r.find("> p").get(0) && (l = r.find("> p"), s = l.css("height"), l.css("height", "auto"), n = l.css("height"), l.css("height", s)), a = r.find("> .toggle-content"), r.hasClass("active") ? (e(l).animate({ height: n }, i.options.duration, function() { e(this).addClass("preview-active") }), a.slideDown(i.options.duration, function() { h && h.trigger("click") })) : (e(l).animate({ height: 0 }, i.options.duration, function() { e(this).removeClass("preview-active") }), a.slideUp(i.options.duration)))})}}, e.extend(t, { PluginToggle: i }), e.fn.infoPluginToggle = function(t) { return this.map(function() { var s = e(this); return s.data("__toggle") ? s.data("__toggle") : new i(s, t) }) }}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {}, e.extend(t, {PluginValidation: {defaults: { formClass: "needs-validation", validator: { highlight: function(t) { e(t).addClass("is-invalid").removeClass("is-valid").parent().removeClass("has-success").addClass("has-danger") }, success: function(t, i) { e(i).removeClass("is-invalid").addClass("is-valid").parent().removeClass("has-danger").addClass("has-success").find("label.error").remove() }, errorPlacement: function(t, e) { "radio" == e.attr("type") || "checkbox" == e.attr("type") ? t.appendTo(e.parent().parent()) : t.insertAfter(e) } } },initialize: function(t) { return initialized = !0, this.setOptions(t).build(), this },setOptions: function(t) { return this.options = e.extend(!0, {}, this.defaults, t), this },build: function() { return e.isFunction(e.validator) ? (this.addMethods(), this.setMessageGroups(), e.validator.setDefaults(this.options.validator), e("." + this.options.formClass).validate(), this) : this },addMethods: function() {},setMessageGroups: function() {e(".checkbox-group[data-msg-required], .radio-group[data-msg-required]").each(function() {var t = e(this).data("msg-required");e(this).find("input").attr("data-msg-required", t)})}}})}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var s = !1;e.extend(t, {Nav: {defaults: { wrapper: e("#mainNav"), scrollDelay: 600, scrollAnimation: "easeOutQuad" },initialize: function(t, e) { return s ? this : (s = !0, this.$wrapper = t || this.defaults.wrapper, this.setOptions(e).build().events(), this) },setOptions: function(i) { return this.options = e.extend(!0, {}, this.defaults, i, t.fn.getOptions(this.$wrapper.data("plugin-options"))), this },build: function() {var t, s = this,n = e("html"),a = e("#header"),o = e("#header .header-nav-main");if (s.$wrapper.find("a[data-thumb-preview]").each(function() { t = e("<span />").addClass("thumb-info thumb-info-preview").append(e("<span />").addClass("thumb-info-wrapper").append(e("<span />").addClass("thumb-info-image").css("background-image", "url(" + e(this).data("thumb-preview") + ")"))), e(this).append(t) }), n.hasClass("side-header") || n.hasClass("side-header-hamburguer-sidebar") ? (n.hasClass("side-header-right") || n.hasClass("side-header-hamburguer-sidebar-right")) && (n.hasClass("side-header-right-no-reverse") || a.find(".dropdown-submenu").addClass("dropdown-reverse")) : (s.checkReverse = function() { s.$wrapper.find(".dropdown, .dropdown-submenu").removeClass("dropdown-reverse"), s.$wrapper.find(".dropdown:not(.manual):not(.dropdown-mega), .dropdown-submenu:not(.manual)").each(function() {}) }, s.checkReverse(), e(window).on("resize", function() { s.checkReverse() })), o.hasClass("header-nav-main-clone-items") && o.find("nav > ul > li > a").each(function() {var t = e(this).parent(),i = e(this).clone(),s = e(this).clone(),n = e('<span class="wrapper-items-cloned"></span>');e(this).addClass("item-original"), s.addClass("item-two"), t.prepend(n), n.append(i).append(s)}), e("#header.header-floating-icons").get(0) && e(window).width() > 991 && {$menuFloating: e("#header.header-floating-icons .header-container > .header-row"),build: function() { this.init() },init: function() {var t = this,i = 0;e(window).scroll(function() {var s = 100 * e(window).scrollTop() / (e(document).height() - e(window).height()),n = e(this).scrollTop();i = e(document).height() / e(window).height(), t.$menuFloating.find(".header-column > .header-row").css({ transform: "translateY( calc(" + s + "vh - " + n / i + "px) )" })})}}.build(), e(".header-nav-links-vertical-slide").get(0)) {var r = {$mainNav: e("#mainNav"),$mainNavItem: e("#mainNav li"),build: function() { this.menuNav() },menuNav: function() {this.$mainNavItem.on("click", function(t) {var s = e(this),n = e(this).parent(),a = e(this).find("ul").first(),o = e(this).closest(".next-menu"),r = s.hasClass("dropdown") || s.hasClass("dropdown-submenu"),d = s.hasClass("back-button"),l = a.find("> li").length * a.find("> li").outerHeight() - a.outerHeight(),h = o.find("> li").length * o.find("> li").outerHeight() - o.outerHeight();if (r) {for (n.addClass("next-menu"), a.addClass("visible"), n.css({ overflow: "visible", "overflow-y": "visible" }), l > 0 && a.css({ overflow: "hidden", "overflow-y": "scroll" }), i = 0; i < a.find("> li").length; i++) a.outerHeight() < e(".header-row-side-header").outerHeight() - 100 && a.css({ height: a.outerHeight() + a.find("> li").outerHeight() });a.css({ "padding-top": l + "px" })}d && (n.parent().parent().removeClass("next-menu"), n.removeClass("visible"), h > 0 && o.css({ overflow: "hidden", "overflow-y": "scroll" })), t.stopPropagation()})}};e(window).trigger("resize"), e(window).width() > 991 && r.build()}return e(".header-nav-main-mobile-dark").get(0) && e("#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)").addClass("header-no-border-bottom"), e(window).width() > 991 && this.focusMenuWithChildren(), this},focusMenuWithChildren: function() {var t, e, i, s = document.querySelector("html:not(.side-header):not(.side-header-hamburguer-sidebar):not(.side-header-overlay-full-screen) .header-nav-main > nav");if (!s) return !1;for (e = 0, i = (t = s.getElementsByTagName("a")).length; e < i; e++) t[e].addEventListener("focus", n, !0), t[e].addEventListener("blur", n, !0);function n() { for (var t = this; - 1 === t.className.indexOf("header-nav-main");) "li" === t.tagName.toLowerCase() && (-1 !== t.className.indexOf("open") ? t.className = t.className.replace(" open", "") : t.className += " open"), t = t.parentElement }},events: function() {var i = this,s = e("html"),n = e("#header"),a = e(window),o = e(".header-body").outerHeight();n.find('a[href="#"]').on("click", function(t) { t.preventDefault() }), s.hasClass("side-header-hamburguer-sidebar") ? n.find(".dropdown-toggle, .dropdown-submenu > a").append('<!--<i class="fas fa-chevron-down fa-chevron-right"></i>-->') : n.find(".dropdown-toggle, .dropdown-submenu > a").append('<!--<i class="fas fa-chevron-down"></i>-->'), n.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down').on("click", function(i) {if (i.preventDefault(), a.width() < 992) {e(this).closest("li").toggleClass("open");var r = n.hasClass("header-effect-shrink") && s.hasClass("sticky-header-active") ? t.StickyHeader.options.stickyHeaderContainerHeight : o;e(".header-body").animate({ height: e(".header-nav-main nav").outerHeight(!0) + r + 10 }, 0)}}), n.find("li a.active").addClass("current-page-active"), n.find('.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i').on("click", function(t) {if (!e("html").hasClass("side-header-hamburguer-sidebar") && a.width() > 991 && (t.preventDefault(), t.stopPropagation()), a.width() > 991) {if (t.preventDefault(), t.stopPropagation(), n.find("li a.active").removeClass("active"), "I" == e(this).prop("tagName") ? e(this).parent().addClass("active") : e(this).addClass("active"), e(this).closest("li").hasClass("open")) e(this).closest("li").removeClass("open"), n.find("li a.active").removeClass("active"), n.find("li a.current-page-active").addClass("active");else {var i = e(this).closest("li"),s = !1;e(this).parent().hasClass("dropdown-submenu") && (s = !0), e(this).closest(".dropdown-menu").find(".dropdown-submenu.open").removeClass("open"), e(this).parent(".dropdown").parent().find(".dropdown.open").removeClass("open"), s || e(this).parent().find(".dropdown-submenu.open").removeClass("open"), i.addClass("open"), e(document).off("click.nav-click-to-open").on("click.nav-click-to-open", function(t) { i.is(t.target) || 0 !== i.has(t.target).length || (i.removeClass("open"), i.parents(".open").removeClass("open"), n.find("li a.active").removeClass("active"), n.find("li a.current-page-active").addClass("active")) })}a.trigger({ type: "resize", from: "header-nav-click-to-open" })}}), n.find("[data-collapse-nav]").on("click", function(t) { e(this).parents(".collapse").removeClass("show") }), n.find(".header-nav-features-toggle").on("click", function(t) {t.preventDefault();var i = e(this).parent();if (e(this).siblings(".header-nav-features-dropdown").hasClass("show")) e(this).siblings(".header-nav-features-dropdown").removeClass("show");else {var s = e(this).siblings(".header-nav-features-dropdown");e(".header-nav-features-dropdown.show").removeClass("show"), s.addClass("show"), e(document).off("click.header-nav-features-toggle").on("click.header-nav-features-toggle", function(t) { i.is(t.target) || 0 !== i.has(t.target).length || e(".header-nav-features-dropdown.show").removeClass("show") }), e(this).attr("data-focus") && e("#" + e(this).attr("data-focus")).focus()}});var r = e(".hamburguer-btn:not(.side-panel-toggle)"),d = e("#header.side-header, #header.side-header-overlay-full-screen");if (r.on("click", function() { "false" != e(this).attr("data-set-active") && e(this).toggleClass("active"), d.toggleClass("side-header-hide"), s.toggleClass("side-header-hide"), a.trigger("resize") }), e(".hamburguer-close:not(.side-panel-toggle)").on("click", function() { e(".hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)").trigger("click") }), e(".header-nav-main nav").on("show.bs.collapse", function() { e(this).removeClass("closed"), e("html").addClass("mobile-menu-opened"), e(".header-body").animate({ height: e(".header-body").outerHeight() + e(".header-nav-main nav").outerHeight(!0) + 10 }), e("#header").is(".header-bottom-slider, .header-below-slider") && !e("html").hasClass("sticky-header-active") && i.scrollToTarget(e("#header"), 0) }), e(".header-nav-main nav").on("hide.bs.collapse", function() { e(this).addClass("closed"), e("html").removeClass("mobile-menu-opened"), e(".header-body").animate({ height: e(".header-body").outerHeight() - e(".header-nav-main nav").outerHeight(!0) }, function() { e(this).height("auto") }) }), a.on("stickyHeader.activate", function() { a.width() < 992 && n.hasClass("header-effect-shrink") && "true" == e(".header-btn-collapse-nav").attr("aria-expanded") && e(".header-body").animate({ height: e(".header-nav-main nav").outerHeight(!0) + t.StickyHeader.options.stickyHeaderContainerHeight + (e(".header-nav-bar").get(0) ? e(".header-nav-bar").outerHeight() : 0) }) }), a.on("stickyHeader.deactivate", function() { a.width() < 992 && n.hasClass("header-effect-shrink") && "true" == e(".header-btn-collapse-nav").attr("aria-expanded") && e(".header-body").animate({ height: o + e(".header-nav-main nav").outerHeight(!0) + 10 }) }), a.on("resize.removeOpen", function(t) { "header-nav-click-to-open" != t.from && setTimeout(function() { a.width() > 991 && n.find(".dropdown.open").removeClass("open") }, 100) }), e(document).ready(function() {if (a.width() > 991) {var t = !1;a.on("resize", function(i) { "header-nav-click-to-open" != i.from && (n.find(".dropdown.open").removeClass("open"), a.width() < 992 && 0 == t && (o = e(".header-body").outerHeight(), t = !0, setTimeout(function() { t = !1 }, 500))) })}}), s.hasClass("side-header") && a.width() < 992 && n.css({ height: e(".header-body .header-container").outerHeight() + (parseInt(e(".header-body").css("border-top-width")) + parseInt(e(".header-body").css("border-bottom-width"))) }), e("[data-hash]").each(function() {var t = e(this).attr("href"),n = e(this).is("[data-hash-offset]") ? e(this).data("hash-offset") : 0; - 1 != t.indexOf("#") && e(t).get(0) && e(this).on("click", function(o) {if (o.preventDefault(), !e(o.target).is("i") && (e(this).parents(".collapse.show").collapse("hide"), d.addClass("side-header-hide"), s.addClass("side-header-hide"), a.trigger("resize"), i.scrollToTarget(t, n), e(this).data("hash-trigger-click"))) {var r = e(e(this).data("hash-trigger-click")),l = e(this).data("hash-trigger-click-delay") ? e(this).data("hash-trigger-click-delay") : 0;r.get(0) && setTimeout(function() { r.trigger("click") }, l)}})}), e("#header.header-floating-icons").get(0) && e("#header.header-floating-icons [data-hash]").off().each(function() {var t = e(this).attr("href"),i = e(this).is("[data-hash-offset]") ? e(this).data("hash-offset") : 0;e(t).get(0) && e(this).on("click", function(s) { s.preventDefault(), e("html, body").animate({ scrollTop: e(t).offset().top - i }, 600, "easeOutQuad", function() {}) })}), e(".side-panel-toggle").get(0)) {var l = e("html").attr("class");e(".side-panel-toggle").on("click", function(t) {var i = e(this).data("extra-class"),s = i ? 100 : 0;if (t.preventDefault(), e(this).hasClass("active")) return e("html").removeClass("side-panel-open"), e(".hamburguer-btn.side-panel-toggle:not(.side-panel-close)").removeClass("active"), !1;i && (e(".side-panel-wrapper").css("transition", "none"), e("html").removeClass().addClass(l).addClass(i)), setTimeout(function() { e(".side-panel-wrapper").css("transition", ""), e("html").toggleClass("side-panel-open") }, s)}), e(document).on("click", function(t) { e(t.target).closest(".side-panel-wrapper").get(0) || e(t.target).hasClass("side-panel-toggle") || (e(".hamburguer-btn.side-panel-toggle:not(.side-panel-close)").removeClass("active"), e("html").removeClass("side-panel-open")) })}return this},scrollToTarget: function(t, i) { return e("body").addClass("scrolling"), e("html, body").animate({ scrollTop: e(t).offset().top - i }, this.options.scrollDelay, this.options.scrollAnimation, function() { e("body").removeClass("scrolling") }), this }}})}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = !1;e.extend(t, {Newsletter: {defaults: { wrapper: e("#newsletterForm") },initialize: function(t, e) { return i ? this : (i = !0, this.$wrapper = t || this.defaults.wrapper, this.setOptions(e).build(), this) },setOptions: function(i) { return this.options = e.extend(!0, {}, this.defaults, i, t.fn.getOptions(this.$wrapper.data("plugin-options"))), this },build: function() {if (!e.isFunction(e.fn.validate)) return this;var t = this,i = t.$wrapper.find("#newsletterEmail"),tk = t.$wrapper.find("#token_nl_g"),s = e("#newsletterSuccess"),n = e("#newsletterError");return t.$wrapper.validate({ submitHandler: function(a) { $("body").addClass("loading-overlay-showing"), e.ajax({ type: "POST", url: t.$wrapper.attr("action"), data: { email: i.val(), token_nl_g: tk.val() }, dataType: "json", success: function(t) { $("body").removeClass("loading-overlay-showing"), "success" == t.response ? (s.removeClass("d-none"), n.addClass("d-none"), i.val("").blur().closest(".control-group").removeClass("success").removeClass("error"), e("#newsletterEmail").removeClass("is-invalid")) : (n.html(t.message), n.removeClass("d-none"), s.addClass("d-none"), i.blur().closest(".control-group").removeClass("success").addClass("error")) } }) }, rules: { newsletterEmail: { required: !0, email: !0 } }, errorPlacement: function(t, e) {} }), this}}})}.apply(this, [window.info, jQuery]),function(t, e) {t = t || {};var i = !1;e.extend(t, {StickyHeader: {defaults: { wrapper: e("#header"), headerBody: e("#header .header-body"), stickyEnabled: !0, stickyEnableOnBoxed: !0, stickyEnableOnMobile: !0, stickyStartAt: 0, stickyStartAtElement: !1, stickySetTop: 0, stickyEffect: "", stickyHeaderContainerHeight: !1, stickyChangeLogo: !1, stickyChangeLogoWrapper: !0 },initialize: function(t, e) { return i ? this : (i = !0, this.$wrapper = t || this.defaults.wrapper, this.setOptions(e).build().events(), this) },setOptions: function(i) { return this.options = e.extend(!0, {}, this.defaults, i, t.fn.getOptions(this.$wrapper.data("plugin-options"))), this },build: function() {if (!this.options.stickyEnableOnBoxed && e("html").hasClass("boxed") || e("html").hasClass("side-header-hamburguer-sidebar") || !this.options.stickyEnabled) return this;var i = this,s = e("html"),n = e(window),a = s.hasClass("side-header"),o = i.options.wrapper.find(".header-top").outerHeight(),r = i.options.wrapper.find(".header-container").outerHeight();if (s.addClass("sticky-header-enabled"), parseInt(i.options.stickySetTop) < 0 && s.addClass("sticky-header-negative"), e(".notice-top-bar").get(0) && (1 != parseInt(i.options.stickySetTop) && "shrink" != i.options.stickyEffect || e(".body").on("transitionend webkitTransitionEnd oTransitionEnd", function() { setTimeout(function() { s.hasClass("sticky-header-active") || i.options.headerBody.animate({ top: e(".notice-top-bar").outerHeight() }, 300, function() { s.hasClass("sticky-header-active") && i.options.headerBody.css("top", 0) }) }, 0) })), i.options.stickyStartAtElement) {var d = e(i.options.stickyStartAtElement);e(window).on("scroll resize", function() { i.options.stickyStartAt = d.offset().top }), e(window).trigger("resize")}i.options.wrapper.find(".header-top").get(0), a || (e(".header-logo-sticky-change").get(0) ? n.on("stickyChangeLogo.loaded", function() { i.options.wrapper.css("height", i.options.headerBody.outerHeight()) }) : i.options.wrapper.css("height", i.options.headerBody.outerHeight()), "shrink" == i.options.stickyEffect && (e(document).ready(function() { n.scrollTop() >= i.options.stickyStartAt ? i.options.wrapper.find(".header-container").on("transitionend webkitTransitionEnd oTransitionEnd", function() { i.options.headerBody.css("position", "fixed") }) : i.options.headerBody.css("position", "fixed") }), i.options.wrapper.find(".header-container").css("height", r), i.options.wrapper.find(".header-top").css("height", o))), i.options.stickyHeaderContainerHeight && i.options.wrapper.find(".header-container").css("height", i.options.wrapper.find(".header-container").outerHeight()), s.hasClass("boxed") && "shrink" == i.options.stickyEffect && (0 == parseInt(i.options.stickyStartAt) && n.width() > 991 && (i.options.stickyStartAt = 30), i.options.headerBody.css("position", "absolute"), n.on("scroll", function() { n.scrollTop() > e(".body").offset().top ? i.options.headerBody.css({ position: "fixed", top: 0 }) : i.options.headerBody.css({ position: "absolute", top: 0 }) }));var l = !0,h = !1,c = i.options.stickyStartAt;if (i.checkStickyHeader = function() {var t = e(".notice-top-bar");if (t.get(0) ? i.options.stickyStartAt = t.data("sticky-start-at") ? t.data("sticky-start-at") : e(".notice-top-bar").outerHeight() : i.options.stickyStartAt = c, n.width() > 991 && s.hasClass("side-header")) return s.removeClass("sticky-header-active"), void(l = !0);n.scrollTop() >= parseInt(i.options.stickyStartAt) ? l && (i.activateStickyHeader(), l = !1, h = !0) : h && (i.deactivateStickyHeader(), h = !1, l = !0)}, i.activateStickyHeader = function() {if (n.width() < 430) { if (!i.options.stickyEnableOnMobile) return void i.deactivateStickyHeader() } else if (a) return void i.deactivateStickyHeader();if (s.addClass("sticky-header-active"), "reveal" == i.options.stickyEffect && (i.options.headerBody.css("top", "-" + i.options.stickyStartAt + "px"), i.options.headerBody.animate({ top: i.options.stickySetTop }, 400, function() {})), "shrink" == i.options.stickyEffect)if (i.options.wrapper.find(".header-top").get(0) && i.options.wrapper.find(".header-top").css({ height: 0, "min-height": 0, overflow: "hidden" }), i.options.stickyHeaderContainerHeight) i.options.wrapper.find(".header-container").css({ height: i.options.stickyHeaderContainerHeight, "min-height": 0 });else {i.options.wrapper.find(".header-container").css({ height: r / 3 * 2, "min-height": 0 });var o = r - r / 3 * 2;e(".main").css({ transform: "translate3d(0, -" + o + "px, 0)", transition: "ease transform 300ms" }).addClass("has-sticky-header-transform"), s.hasClass("boxed") && i.options.headerBody.css("position", "fixed")}i.options.headerBody.css("top", i.options.stickySetTop), i.options.stickyChangeLogo && i.changeLogo(!0), e("[data-sticky-header-style]").each(function() {var i = e(this),s = t.fn.getOptions(i.data("sticky-header-style-active")),a = t.fn.getOptions(i.data("sticky-header-style"));n.width() > a.minResolution && i.css(s)}), e.event.trigger({ type: "stickyHeader.activate" })}, i.deactivateStickyHeader = function() {s.removeClass("sticky-header-active"), "shrink" == i.options.stickyEffect && (s.hasClass("boxed") ? (i.options.headerBody.css("position", "absolute"), n.scrollTop() > e(".body").offset().top && i.options.headerBody.css("position", "fixed")) : i.options.headerBody.css("position", "fixed"), i.options.wrapper.find(".header-top").get(0) && i.options.wrapper.find(".header-top").css({ height: o, overflow: "visible" }), i.options.wrapper.find(".header-container").css({ height: r })), i.options.headerBody.css("top", 0), i.options.stickyChangeLogo && i.changeLogo(!1), e("[data-sticky-header-style]").each(function() {var i = e(this),s = t.fn.getOptions(i.data("sticky-header-style-deactive")),a = t.fn.getOptions(i.data("sticky-header-style"));n.width() > a.minResolution && i.css(s)}), e.event.trigger({ type: "stickyHeader.deactivate" })}, parseInt(i.options.stickyStartAt) <= 0 && i.activateStickyHeader(), i.options.stickyChangeLogo) {var p = i.options.wrapper.find(".header-logo"),u = p.find("img"),f = u.attr("width"),g = u.attr("height"),v = parseInt(u.attr("data-sticky-top") ? u.attr("data-sticky-top") : 0),m = parseInt(u.attr("data-sticky-width") ? u.attr("data-sticky-width") : "auto"),w = parseInt(u.attr("data-sticky-height") ? u.attr("data-sticky-height") : "auto");i.options.stickyChangeLogoWrapper && p.css({ width: u.outerWidth(!0), height: u.outerHeight(!0) }), i.changeLogo = function(t) { t ? u.css({ top: v, width: m, height: w }) : u.css({ top: 0, width: f, height: g }) }, e.event.trigger({ type: "stickyChangeLogo.loaded" })}var y, b = !1;return i.checkSideHeader = function() { n.width() < 992 && 0 == b && (y = i.options.headerBody.height(), b = !0), 0 == i.options.stickyStartAt && a && i.options.wrapper.css("min-height", 0), i.options.stickyStartAt > 0 && a && n.width() < 992 && i.options.wrapper.css("min-height", y) }, this},events: function() { var t = this; return !this.options.stickyEnableOnBoxed && e("body").hasClass("boxed") || e("html").hasClass("side-header-hamburguer-sidebar") || !this.options.stickyEnabled ? this : (t.options.alwaysStickyEnabled ? t.activateStickyHeader() : e(window).on("scroll resize", function() { t.checkStickyHeader() }), e(window).on("load resize", function() { t.checkSideHeader() }), this) }}})}.apply(this, [window.info, jQuery]),function(t, e) { void 0 !== t.PluginScrollToTop && t.PluginScrollToTop.initialize() }.apply(this, [window.info, jQuery]);




!function(t){var n=function(i,o){this.$element=t(i),this.options=t.extend({},n.DEFAULTS,this.dataOptions(),o),this.init()};n.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,n){return t.toFixed(n.decimals)},onUpdate:null,onComplete:null},n.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},n.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},n=Object.keys(t);for(var i in n){var o=n[i];void 0===t[o]&&delete t[o]}return t},n.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},n.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},n.prototype.restart=function(){this.stop(),this.init(),this.start()},n.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},n.prototype.stop=function(){this.interval&&clearInterval(this.interval)},n.prototype.toggle=function(){this.interval?this.stop():this.start()},t.fn.countTo=function(i){return this.each(function(){var o=t(this),e=o.data("countTo"),a="object"==typeof i?i:{},s="string"==typeof i?i:"start";e&&"object"!=typeof i||(e&&e.stop(),o.data("countTo",e=new n(this,a))),e[s].call(e)})}}(jQuery),function(t){"use strict";void 0!==info.PluginValidation&&info.PluginValidation.initialize()}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginAnimate)&&t(function(){t("[data-appear-animation]").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginAnimate(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginAnimatedLetters)&&t(function(){t("[data-plugin-animated-letters]:not(.manual), .animated-letters").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginAnimatedLetters(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginBeforeAfter)&&t(function(){t("[data-plugin-before-after]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginBeforeAfter(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginCarousel)&&t(function(){t("[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),t("body[data-loading-overlay]").get(0)?t(window).on("loading.overlay.ready",function(){i.infoPluginCarousel(n)}):i.infoPluginCarousel(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginCounter)&&t(function(){t("[data-plugin-counter]:not(.manual), .counters [data-to]").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginCounter(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginFloatElement)&&t(function(){t("[data-plugin-float-element]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginFloatElement(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginIcon)&&t(document).ready(function(){t(function(){t("[data-icon]:not(.svg-inline--fa)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginIcon(n)})})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginLazyLoad)&&t(function(){t("[data-plugin-lazyload]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginLazyLoad(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginLightbox)&&t(function(){t("[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginLightbox(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.nanoScroller)&&t(function(){t("[data-plugin-scrollable]").each(function(){var n=t(this),i={},o=n.data("plugin-options");o&&(i=o),n.infoPluginScrollable(i)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginSectionScroll)&&t(function(){t("[data-plugin-section-scroll]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginSectionScroll(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginSticky)&&t(function(){t("[data-plugin-sticky]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginSticky(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginToggle)&&t(function(){t("[data-plugin-toggle]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginToggle(n)})})}.apply(this,[jQuery]),function(t){"use strict";void 0!==info.StickyHeader&&info.StickyHeader.initialize(),void 0!==info.Nav&&info.Nav.initialize(),void 0!==info.Newsletter&&info.Newsletter.initialize()}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.bootstrapDP)&&t(function(){t("[data-plugin-datepicker]").each(function(){var n=t(this),i={},o=n.data("plugin-options");o&&(i=o),n.infoPluginDatePicker(i)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.mask)&&t(function(){t("[data-plugin-masked-input]").each(function(){var n=t(this),i={},o=n.data("plugin-options");o&&(i=o),n.infoPluginMaskedInput(i)})})}.apply(this,[jQuery]);

/* pre chargeur */
$("body").removeClass("loading-overlay-showing"), void 0 !== $.fn.datepicker && ($.fn.bootstrapDP = $.fn.datepicker.noConflict());

$(".collapse1").on('click', function(event) {
    $('html, body').animate({ scrollTop: $('#collapse1HeadingOne').offset().top - 100 }, 'slow');
    $("#collapse1HeadingOne").find('a').removeClass('collapsed');
    $('#collapse1One').addClass('show');
});

$(".collapse2").on('click', function(event) {
    $('html, body').animate({ scrollTop: $('#collapse1HeadingFive').offset().top - 100 }, 'slow');
    $("#collapse1HeadingFive").find('a').removeClass('collapsed');
    $('#collapse1Five').addClass('show');
});

$(".collapse3").on('click', function(event) {
    $('html, body').animate({ scrollTop: $('#collapse1HeadingSix').offset().top - 100 }, 'slow');
    $("#collapse1HeadingSix").find('a').removeClass('collapsed');
    $('#collapse1Six').addClass('show');
});

$(".collapse4").on('click', function(event) {
    $('html, body').animate({ scrollTop: $('#collapse1HeadingSeven').offset().top - 100 }, 'slow');
    $("#collapse1HeadingSeven").find('a').removeClass('collapsed');
    $('#collapse1Seven').addClass('show');
});

if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash == 'collapse1H') {
        $("#collapse1HeadingOne").find('a').removeClass('collapsed');
        $('#collapse1One').addClass('show');
        document.getElementById("collapse1HeadingOne").scrollIntoView();
    } else if (hash == 'collapse2H') {
        $("#collapse1HeadingFive").find('a').removeClass('collapsed');
        $('#collapse1Five').addClass('show');
        document.getElementById("collapse1HeadingFive").scrollIntoView();
    } else if (hash == 'collapse3H') {
        $("#collapse1HeadingSix").find('a').removeClass('collapsed');
        $('#collapse1Six').addClass('show');
        document.getElementById("collapse1HeadingSix").scrollIntoView();
    } else if (hash == 'collapse4H') {
        $("#collapse1HeadingSeven").find('a').removeClass('collapsed');
        $('#collapse1Seven').addClass('show');
        document.getElementById("collapse1HeadingSeven").scrollIntoView();
    }
}


$(".faq_pop").magnificPopup({
    type: "inline",
    items: {
        src: "#faq-pop"
    },
    closeOnBgClick: !1,
    preloader: !0,
    modal: !0,
    callbacks: {
        open: function() {
            $(".filter-bg").css("filter", "blur(8px)")
        },
        close: function() {
            $(".filter-bg").css("filter", "blur(0px)")
        }
    }
});

$(".contact_frm").magnificPopup({
    type: "inline",
    items: {
        src: "#contact-frm"
    },
    closeOnBgClick: !1,
    preloader: !0,
    modal: !0,
    callbacks: {
        open: function() {
            $(".filter-bg").css("filter", "blur(8px)")
        },
        close: function() {
            $(".filter-bg").css("filter", "blur(0px)")
        }
    }
});

$(".frm_rec").magnificPopup({
    type: "inline",
    items: {
        src: "#frm-rec"
    },
    closeOnBgClick: !1,
    preloader: !0,
    modal: !0,
    callbacks: {
        open: function() {
            $(".filter-bg").css("filter", "blur(8px)")
        },
        close: function() {
            $(".filter-bg").css("filter", "blur(0px)")
        }
    }
});

$(document).on("click", ".popup-faq-dismiss", function(e) {
    $.magnificPopup.close();
});


const btn = document.querySelector(".js-chat");
   const chatBox = document.querySelector(".js-chatbox");
   const form = document.querySelector(".js-chatbox__form");

   btn.addEventListener("click", () => {
      chatBox.classList.toggle("chatbox--is-visible");

      if (chatBox.classList.contains("chatbox--is-visible")) {
         $(".btn-c").addClass('hide-eff');
      } else {
        $(".btn-c").removeClass('hide-eff');
      }
   });

   $(document).on("click", ".chatbot-close", function(e) {
    chatBox.classList.toggle("chatbox--is-visible");
});

$(document).on("click", ".rap_grat_cb", function(e) {
    $(this).magnificPopup({
                type: "inline",
                items: { src: "#rapp-grat" },
                closeOnBgClick: !1,
                preloader: !0,
                modal: !0,
                callbacks: {
                    open: function() {
                        $(".filter-bg").css("filter", "blur(8px)");
                    },
                    close: function() {
                        $(".filter-bg").css("filter", "blur(0px)");
                    },
                },
            });
});

   function sendMessage() {
    var message = document.getElementById("message").value;

    return false;
 }

 $(document).ready(function() {

    window.bot_response = {
       offset: -1
    };

    $("#send-btn").on("click", function() {

       var message = $("#message").val();

       if (message == '') return;

       $('.form').append('<div class="user-inbox inbox"><div class="v-cb">Vous</div><div class="msg-header"><p>' + message + '</p></div></div>');

       $.ajax({
        type: 'POST',
        url: './actions/chatbot.html',
        data: { text:message },
        dataType: 'json',
        cache:false,
       success: function (data) {
            if(data.length == 1) {
            $.each(data, function(i, item) {

                if(typeof item.ans !== 'undefined' && item.ans != '') {
                    replay = '<div class="bot-inbox inbox"><div class="icon"><img src="fronts/images/logo/logo-0.png" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ans + '</p></div></div>';
       
                    $('.form').append(replay);
                    $(".form").scrollTop($(".form")[0].scrollHeight);
                }

                if(typeof item.ex_ans !== 'undefined' && item.ex_ans != '') {
                    
                    setTimeout(
                        function() 
                        {
                    replay_ex = '<div class="bot-inbox inbox"><div class="icon"><img src="fronts/images/logo/logo-0.png" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ex_ans + '</p></div></div>';
       
                    $('.form').append(replay_ex);
                    $(".form").scrollTop($(".form")[0].scrollHeight);
                }, 5000);
                }
                $('#message').val('');
            });
            }
        }
    });

    });

    $(document).on('click', '.ans-btn', function() {

       var message = $(this).text();

       if (message == '') return;

       $('.form').append('<div class="user-inbox inbox"><div class="v-cb">Vous</div><div class="msg-header"><p>' + message + '</p></div></div>');

          $.ajax({
            type: 'POST',
            url: './actions/chatbot.html',
            data: { text:message },
            dataType: 'json',
            cache:false,
           success: function (data) {
                if(data.length == 1) {
                $.each(data, function(i, item) {

                    if(typeof item.ans !== 'undefined' && item.ans != '') {
                        replay = '<div class="bot-inbox inbox"><div class="icon"><img src="fronts/images/logo/logo-0.png" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ans + '</p></div></div>';
           
                        $('.form').append(replay);
                        $(".form").scrollTop($(".form")[0].scrollHeight);
                    }

                    if(typeof item.ex_ans !== 'undefined' && item.ex_ans != '') {
                        setTimeout(
                            function() 
                            {
                        $('.typ_dots').show();
                    }, 2000);
                        setTimeout(
                            function() 
                            {
                        replay_ex = '<div class="bot-inbox inbox"><div class="icon"><img src="fronts/images/logo/logo-0.png" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ex_ans + '</p></div></div>';
           
                        $('.form').append(replay_ex);
                        $(".form").scrollTop($(".form")[0].scrollHeight);
                        $('.typ_dots').hide();
                    }, 5000);
                    }
                    $('#message').val('');
                });
                }
            }
        });
    });
 });

 $("#form_submit_rapp").validate({
        submitHandler: function (form, event) {
        $("#form_submit_rapp_btn").prop("disabled",true);
        event.preventDefault();
        var nom_prenom = $('#nom_prenom').val();
        var numero_tel = $('#numero_tel').val();
        $.ajax({
            type: "POST",
            url:$("#form_submit_rapp").attr('action'),
            data:{
                'nom_prenom': nom_prenom,
                'numero_tel': numero_tel
            },
            success:function(data) {
                $('#rapp-grat').children('#form_dem_content').hide();
                $('.title-rapp').addClass('text-success').removeClass('text-primary');
                $('.title-rapp').text('DEMANDE DE RAPPEL BIEN ENREGISTREE.');
                if($('#rapp-grat').length) {
                $('#rapp-grat').append('<div class="text-nt text-center mt-3"><p class="font-weight-bold text-color-black">Un de nos conseillers vous rappellera dans quelques instants.</p><br><p class="text-success font-weight-bold">Merci pour votre confiance.</p></div>');
                }
                $('#numero_tel').val('');
            },
            error:function(data) {
                $('#rapp-grat').children('#form_dem_content').hide();
                $('.title-rapp').addClass('text-danger').removeClass('text-primary');
                $('.title-rapp').text('DESOLE');
                if($('#rapp-grat').length) {
                $('#rapp-grat').append('<div class="text-nt text-center mt-3"><p class="font-weight-bold text-color-black">Une erreur est survenue nous ne pouvons pas donner suite à votre demande.</p><br><p class="text-danger font-weight-bold">Merci de réessayer plus tard.</p></div>');
                }
                $('#numero_tel').val('');
            }
        });
        }
});

$(document).on("click", ".popup-rapp-grat-dismiss", function(e) {
    $("#form_submit_rapp_btn").prop("disabled",false);
    $('#rapp-grat').children('#form_dem_content').show();
    $('.title-rapp').text('Veuillez saisir votre numéro de téléphone');
    $('.title-rapp').removeClass('text-success').addClass('text-primary');
    $(".text-nt").remove();
    $.magnificPopup.close(),
        $("#nom_prenom").removeClass("error"),
        $("#numero_tel").removeClass("error"),
        $("label.error").remove(),
        $("#nom_prenom").val(""),
        $("#numero_tel").val("");
});

$("#form_submit_faq").validate({
    submitHandler: function (form, event) {
    event.preventDefault();
    var search_faq = $('#search_faq').val();
    $.ajax({
        type: "POST",
        url:$("#form_submit_faq").attr('action'),
        data:{
            'search_faq': search_faq,
        },
        beforeSend: function() {
            $('#faq-resultat').html('<div class="text-center"><img src="./fronts/images/icons/ic_loading.gif" width="200" /></div>');
        },
        success:function(data) {
            $('#faq-pop').children('.faq-b-c').hide();
            $('#faq-pop').children('.faq-b-c-c').hide();
            $('#faq-pop').children('.faq-n-c').show();
            $('#faq-search-ttl').text('Résultat de la recherche : “ '+ search_faq +' ”');
            $('#faq-resultat').html(data);
        },
        error:function(data) {
            $('#faq-pop').children('.faq-b-c').hide();
            $('#faq-pop').children('.faq-b-c-c').hide();
            $('#faq-pop').children('.faq-n-c').show();
            $('#faq-resultat').html('<h2 class="text-5 text-danger text-center font-weight-bold mb-2">DESOLE</h2><div class="text-nt text-center mt-3"><p class="font-weight-bold text-color-black">Une erreur est survenue, merci de réessayer plus tard.</p></div>');
        }
    });
    }
});

$('.voir-plus').click(function() {
    var row = Number($('#line').val());
    var allcount = Number($('#tous').val());
    var rowperpage = 6;
    row = row + rowperpage;

    if (row <= allcount) {
        $("#line").val(row);

        $.ajax({
            url: './actions/charger-actualites.html',
            type: 'post',
            data: { row: row },
            beforeSend: function() {
                $(".voir-plus").html('<div class="bounce-loader position-unset py-3"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
            },
            success: function(response) {

                setTimeout(function() {
                    $(".actualite:last").after(response).show().fadeIn("slow");

                    var rowno = row + rowperpage;

                    if (rowno > allcount) {

                        $(".voir-plus").html('');
                    } else {
                        $(".voir-plus").html('<label class="btn btn-primary btn-xl btn-rounded">Voir plus</label>');
                    }
                }, 2000);

            }
        });
    } else {
        $('.voir-plus').html('<div class="bounce-loader position-unset py-3"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');

        setTimeout(function() {

            $('.actualite:nth-child(3)').nextAll('.actualite').remove();

            $("#line").val(0);

            $(".voir-plus").html('<label class="btn btn-primary btn-xl btn-rounded">Voir plus</label>');

        }, 2000);

    }

});

$(document).on("click", ".f-1", function(e) {
    $(".formule-1").toggle();
    $(".formule-2").hide();
    $(".formule-3").hide();
});

$(document).on("click", ".f-2", function(e) {
    $(".formule-2").toggle();
    $(".formule-1").hide();
    $(".formule-3").hide();
});

$(document).on("click", ".f-3", function(e) {
    $(".formule-3").toggle();
    $(".formule-2").hide();
    $(".formule-1").hide();
});

function openNav() {

    if ($(window).width() > 960) {
        document.getElementById("mySidenav").style.width = "560px";
        $("body").append('<div class="mfp-bg mfp-ready" id="cart-bg"></div>');
     }
     else {
        window.location.href = "./Panier.html";
     }

}

function userNav() {

    if (localStorage.getItem('se_connecter') == "T") {
        window.location.href = "./Tableau-de-bord.html";
     }
     else {
        window.location.href = "./se-connecter.html";
     }

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("#cart-bg").remove();
}

function showside() {
if ($(window).width() > 960) {
    document.getElementById("mySidenav").style.width = "560px";
    $("body").append('<div class="mfp-bg mfp-ready" id="cart-bg"></div>');
 }
 else {
    window.location.href = "./Panier.html";
 }
}