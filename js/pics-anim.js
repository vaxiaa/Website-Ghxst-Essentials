class Picsanim {
  constructor(selector) {
    window.ghxst = window.ghxst || window.jQuery;
    this.settings = {
      picsanimClassContainer: "ghxst-picsanim-container",
      picsanimClassContent: "ghxst-picsanim-content",
      picsanimClassClose: "ghxst-picsanim-close",
      picsanimClassNext: "ghxst-picsanim-next",
      picsanimClassPrev: "ghxst-picsanim-prev",
      picsanimClassProgress: "ghxst-picsanim-progress",
      picsanimClassItem: "ghxst-picsanim-item",
      picsanimClassImage: "ghxst-picsanim-image",
      picsanimClassComment: "ghxst-picsanim-comment",
      picsanimClassZoom: "ghxst-picsanim-zoom",
      picsanimClassFullScreen: "ghxst-picsanim-full-screen",

      thumbnailsClassContainer: "thumbnails-container",
      thumbnailsClassContent: "thumbnails-content",
      thumbnailsClassToggle: "thumbnails-toggle",
      thumbnailsClassShow: "thumbnails-show",
      thumbnailsClassImage: "thumbnails-image",

      classActive: "ghxst-active",
      classInactive: "ghxst-inactive",
      classNext: "ghxst-next",
      classPrev: "ghxst-prev",
      classFade: "ghxst-fade",
      classPast: "ghxst-past",
      classReady: "ghxst-ready",
      classResize: "ghxst-resize",
      classLoader: "ghxst-loader",
      classLoading: "ghxst-loading",
      classLoaded: "ghxst-loaded",
      classError: "ghxst-error",
      classZoom: "ghxst-zoom",
      classZoomOut: "ghxst-zoom-out",
      classOverflow: "ghxst-overflow",
      classDirectionNext: "ghxst-direction-next",
      classDirectionPrev: "ghxst-direction-prev",
      classPlay: "ghxst-play",
      classHidden: "ghxst-hidden",
      classUnset: "ghxst-unset",
      classDrag: "ghxst-drag",
      classDisorderly: "ghxst-disorderly",
      classLogo: "ghxst-logo",
      selector: selector,

      close: true,
      closeDelay: 200,
      next: true,
      prev: true,

      album: false,
      albumStart: 0,
      preload: false,
      counter: true,
      loop: true,
      zoom: true,
      zoomDelay: 400,
      overflow: true,
      hash: true,
      thumbnails: true,

      keyNext: ["ArrowRight", "d", "KeyD"],
      keyPrev: ["ArrowLeft", "a", "KeyA"],
      keyClose: ["Escape", "x", "KeyX"],
      keyCounter: ["Space"],
      keyThumbnails: ["t", "KeyT"],
      keyZoom: ["z", "KeyZ"],

      responsive: {}
    }

    this.logo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 584.7 180">' +
      '<path d="M559.4,17.1c0-0.4-0.1-0.9-0.1-1.3c-0.6-2.6-2.9-4.6-5.7-4.6c-0.7,0-1.4,0.1-2,0.4c-0.3,0.2-0.7,0.3-1.1,0.5c-17.9,8.6-66.9,31.3-101.4,40.7c-75.3,20.6-88.8,21.6-89.3,21.7c-1.8,0.6-3.3,1.8-4.3,3.4c-0.6,1.1-0.9,2.3-0.9,3.6c0,1.9,0.7,3.6,1.9,4.9c0.1,0.1,0.2,0.2,0.3,0.4c0.3,0.3,0.5,0.7,0.8,1c0.1,0.2,0.3,0.4,0.4,0.5c2.1,2.6,3.9,5.3,5.6,8.3c0,0.1,0.1,0.2,0.1,0.2c0.6,1.1,1.1,2.1,1.6,3.2c0.2,0.4,0.4,0.9,0.6,1.3c2,4.3,3.4,8.8,4.4,13.6c0.6,3.3,1,6.8,1.1,10.3c0,0.4,0,0.7,0,1.1c0,0.4,0,0.8,0,1.2c0,0.4,0,0.7,0,1.1c-0.2,4.7-0.9,9.3-2.1,13.6c-1.3,4.7-3.1,9.2-5.4,13.3l0,0c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c-0.3,0.5-0.6,1-0.9,1.5c-0.1,0.1-0.2,0.3-0.3,0.4c-1.8,3.1-6.4,8.8-8.9,11.7c-0.1,0.1-0.2,0.2-0.2,0.3l0.5-0.3c0,0,11.2-7.6,26.6-12.6c16.2-5,36.4-1,51.9-1.2c19.9-0.3,37.4-2.9,47.9-9.4c5.8-3.6,9.5-8.1,10.2-13.1c0.1-0.4,0.1-0.9,0.1-1.4c0,0,0-0.1,0-0.1c-0.3-1.2-1.3-2-2.5-2.2l-0.6,0c0,0-10.9,1.3-15.1,1.3c-4.2,0-12-0.9-12-0.9c24.6-3.6,45.8-10.2,58.5-21.1c7.7-6.6,12.3-14.3,12.7-22.2c0-0.3,0-0.7,0-1c0-0.2,0-0.4-0.1-0.6c-0.4-1.9-2.1-3.3-4.1-3.4l-1.1,0.1c0,0-13.1,3.6-21.2,4.6c-8.1,0.9-19.4,0.8-19.4,0.8c28.2-10.7,51.8-24.3,64-41.2C556.8,36.5,560.2,26.5,559.4,17.1z"/>' +
      '<path d="M335,110c-0.1-0.2-0.2-0.5-0.4-0.7c0,0,0,0,0-0.1c-1.2-2.2-2.7-4.2-4.4-5.9c-6.9-7.3-18.5-10.8-28.9-9.2c-2.9,0.4-3.7,2.2-6.4,3.7c-2.4,1.4-5,2.3-7.6,2.9c-9.8,2.2-20-0.8-27.1-7.9c-0.2-0.2-0.4-0.4-0.5-0.5c-1.7-1.7-3.1-3.7-4.3-5.9c-1.2-2.2-2.1-4.6-2.7-6.9c-0.4-1.5-0.7-3-0.8-4.5v-1.3v-1.8v-2.3c0.1-1.3,0.3-2.5,0.6-3.7c1.2-5.3,3.9-10.2,7.8-14.1c1.9-1.9,4-3.6,6.5-4.9c11.6-6.4,25.7-4,34.6,4.9l20.6-20.6c-17.9-17.9-46.1-22.6-69.3-9.8c-10.4,5.8-18.4,14.3-23.5,24.1c-1.6,3.1-3,6.4-4,9.7c-0.9,2.9-1.6,5.9-2,8.9c-0.1,0.4-0.1,0.8-0.2,1.2c0,0-0.1,0.4-0.1,0.5c-0.9,3.1-2.5,7.1-7.1,7c-0.2,0-1.8-0.3-2.4-0.4c-4-0.8-9.2-2-16.1-3.6c-13.4-3.2-33.2-8.2-61.9-16C101,43.2,52,20.5,34.2,11.9c-0.4-0.2-0.7-0.3-1.1-0.5c-0.6-0.2-1.3-0.4-2-0.4c-2.8,0-5.1,2-5.7,4.6c-0.1,0.4-0.1,0.9-0.1,1.3c-0.9,9.4,2.6,19.4,9.4,28.9c7.5,10.5,19.5,19.7,34.1,27.7c1.4,0.8,2.9,1.6,4.4,2.3c3.5,1.8,7.2,3.5,10.9,5.2c4.7,2.1,9.5,4.1,14.5,6c0,0-11.3,0.2-19.4-0.8c-8.1-0.9-21.2-4.6-21.2-4.6l-1.1-0.1c-1.6,0-2.9,0.9-3.7,2.2c-0.2,0.4-0.4,0.8-0.5,1.2c0,0.2,0,0.4-0.1,0.6c0,0.3,0,0.7,0,1c0.4,8,5,15.6,12.7,22.2c12.7,10.9,34,17.5,58.5,21.1c0,0-7.8,0.9-12,0.9s-15.1-1.3-15.1-1.3l-0.6,0c-1.2,0.1-2.2,1-2.5,2.2c0,0,0,0.1,0,0.1c0,0.5,0,0.9,0.1,1.4c0.6,4.3,3.4,8.2,7.8,11.5c0.7,0.5,1.5,1.1,2.3,1.6c10.5,6.5,28,9.1,47.9,9.4c8.2,0.1,41.7-2,48.5-2c74.7,0,71.5,9.5,71.5,13.6c0,0.9-0.2,1.8-0.5,2.6l5.5-7.9l2.7-3.9l9.3-13.4c9,8.4,22.7,10.5,34.1,4.3c2.8-1.6,5.3-3.5,7.4-5.8c3.6-4,6.1-8.8,7.1-14C338.9,122.8,338.2,116.1,335,110z"/>' +
    '</svg>',

    this.library = class Library {
      constructor($node, picsanim) {
        this.$node = $node;
        this.element = this.$node[0];
        this.picsanim = picsanim;
        this.settings = picsanim.settings;
      }

      $(selector) {
        return new ghxst(selector);
      }

      active() {
        this.$node.addClass(this.settings.classActive);
        return this;
      }

      inactive() {
        this.$node.removeClass(this.settings.classActive);
        return this;
      }

      next() {
        this.$node.addClass(this.settings.classNext);
        return this;
      }

      prev() {
        this.$node.addClass(this.settings.classPrev);
        return this;
      }

      fade() {
        this.$node.addClass(this.settings.classFade);
        return this;
      }

      past() {
        this.$node.addClass(this.settings.classPast);
        return this;
      }

      ready() {
        this.$node.addClass(this.settings.classReady);
        return this;
      }

      reset() {
        this.$node.removeClass(this.settings.classActive + " " + this.settings.classNext + " " + this.settings.classPrev + " " + this.settings.classFade + " " + this.settings.classPast);
        return this;
      }

      loading() {
        this.$node.addClass(this.settings.classLoading);
        return this;
      }

      loaded() {
        this.$node.removeClass(this.settings.classLoading).addClass(this.settings.classLoaded);
        return this;
      }

      animation() {
        void this.element.offsetWidth;
        return this;
      }

      error() {
        this.$node.addClass(this.settings.classError);
        return this;
      }

      img(src) {
        let img = document.createElement("img");
        this.$node.append(this.$(img).attr((src) ? "src" : "alt", (src) ? src : "none")[0]);
        return this;
      }
    }
  }

  $(selector) {
    return new ghxst(selector);
  }

  factory($element) {
    return new this.library($element, this);
  }

  root() {
    this.html = this.factory(this.$("html"));
    this.head = this.factory(this.$("head"));
    this.body = this.factory(this.$("body"));
    this.picsanimContainer = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassContainer));
    this.picsanimContent = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassContent));
    this.picsanimZoom = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassZoom));
    this.picsanimFullScreen = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassFullScreen));
    this.picsanimProgress = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassProgress));
    this.picsanimClose = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassClose));
    this.picsanimPrev = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassPrev));
    this.picsanimNext = this.factory(this.$(document.createElement("div")).addClass(this.settings.picsanimClassNext));
    this.thumbnailsContainer = this.factory(this.$(document.createElement("div")).addClass(this.settings.thumbnailsClassContainer));
    this.thumbnailsContent = this.factory(this.$(document.createElement("div")).addClass(this.settings.thumbnailsClassContent));
    this.thumbnailsToggle = this.factory(this.$(document.createElement("div")).addClass(this.settings.thumbnailsClassToggle));

    this.style = this.factory(this.$(document.createElement("style")).append(document.createTextNode("." + this.settings.classOverflow + " { overflow: hidden; margin-right: " + ghxst.bar.width + "px }")));
  }

  build(album) {
    this.body.$node.append(
      this.picsanimContainer.$node
      .append(this.picsanimContent.element)
      .append(this.picsanimFullScreen.element)
      .append(this.picsanimZoom.$node
        .append(this.$(document.createElement("button"))
          .append(document.createElement("span"))
        [0])
      [0])
      .append(this.picsanimProgress.$node
        .append(this.$(document.createElement("button"))
          .append(document.createElement("span"))
        [0])
      [0])
      .append(this.thumbnailsToggle.$node
        .append(this.$(document.createElement("button"))
          .append(document.createElement("span"))
        [0])
      [0])
      .append(this.picsanimClose.$node
        .append(this.$(document.createElement("button"))
          .append(document.createElement("span"))
        [0])
      [0])
      .append(this.picsanimPrev.$node
        .append(this.$(document.createElement("button"))
          .append(document.createElement("span"))
        [0])
      [0])
      .append(this.picsanimNext.$node
        .append(this.$(document.createElement("button"))
          .append(document.createElement("span"))
        [0])
      [0])
      .append(this.$(document.createElement("a"))
        .attr("title", "Tworzymy profesjonalne serwisy internetowe, strony www, sklepy internetowe oraz projekty graficzne.")
        .attr("href", "http://ghxst.pl")
        .attr("target", "_blank")
        .addClass(this.settings.classLogo)
        .html(this.logo)
      [0])
      .append(this.thumbnailsContainer.$node
        .append(this.thumbnailsContent.element)
      [0])
    [0]);

    if(!album) this.content();

  }

  content() {
    this.complement();
    this.picsanim = this.factory(this.$(this.picsanimContent.element.querySelectorAll("." + this.settings.picsanimClassItem)));
    this.thumbnails = this.factory(this.$(this.thumbnailsContent.element.querySelectorAll("." + this.settings.thumbnailsClassImage)));
  }

  complement() {
    this.picsanimImages = new Array();
    this.picsanimThumbnails = new Array();

    for(let index = 0; index < this.len; index++) {
      this.picsanimContent.$node.append(
        this.picsanimImages[this.picsanimImages.push(
          this.factory(this.$(document.createElement("div"))
            .addClass(this.settings.picsanimClassItem)
            .append(this.$(document.createElement("div"))
            .addClass(this.settings.picsanimClassImage)
              .append(this.$(document.createElement("div"))
                .addClass(this.settings.picsanimClassComment + " " + ((this.$picsanim[index].dataset.comment || this.$picsanim[index].querySelector("." + this.settings.picsanimClassComment)) ? this.settings.classActive : this.settings.classInactive))
                .html((this.$picsanim[index].dataset.comment) ? this.$picsanim[index].dataset.comment : (this.$picsanim[index].querySelector("." + this.settings.picsanimClassComment)) ? this.$picsanim[index].querySelector("." + this.settings.picsanimClassComment).innerHTML : " ")
              [0])
            [0])
            .append(this.$(document.createElement("span"))
            .addClass(this.settings.classLoader)[0])
          )
        ) - 1].element
      );
      this.thumbnailsContent.$node.append(
        this.picsanimThumbnails[this.picsanimThumbnails.push(
          this.factory(this.$(document.createElement("div"))
            .addClass(this.settings.thumbnailsClassImage)
            .append(this.factory(this.$(document.createElement("button"))
              .append(this.$(document.createElement("span"))
                .addClass(this.settings.classLoader)
              [0])
            [0]).img(this.$picsanim[index].dataset.thumbnail || this.$picsanim[index].src || (this.$picsanim[index].querySelector("img")) ? this.$picsanim[index].querySelector("img").src : (this.$picsanim[index]) ? this.$picsanim[index].href : false).$node)
          )
        ) - 1].element
      );
    }
  }

  modernize(index) {
    this.index = this.index || {};
    this.index.direction = (this.index.value > index) ? 1 : 0;
    this.index.past = this.index.value;
    this.index.value = (this.settings.loop) ? (index >= this.len) ? 0 : (index < 0) ? this.len - 1 : index : (index >= this.len) ? this.len - 1 : (index < 0) ? 0 : index;
    this.index.next = (this.index.value + 1 >= this.len) ? 0 : this.index.value + 1;
    this.index.prev = (this.index.value - 1 < 0) ? this.len - 1 : this.index.value - 1;
  }

  nav() {
    if((!this.settings.loop && this.index.value === 0) || (this.len <= 1)) {
      this.picsanimPrev.inactive();
      if(this.settings.counter) this.picsanimProgress.$node.removeClass(this.settings.classActive).removeClass(this.settings.classPlay);
    } else {
      this.picsanimPrev.active();
    }
    if((!this.settings.loop && this.index.value === this.len - 1) || (this.len <= 1)) {
      this.picsanimNext.inactive();
      if(this.settings.counter) this.picsanimProgress.$node.removeClass(this.settings.classActive).removeClass(this.settings.classPlay);
    } else {
      this.picsanimNext.active();
    }
  }

  set(index, order, delay) {
    this.modernize(index);
    (this.len <= 2) ?  this.picsanimContainer.$node.removeClass(this.settings.classDirectionNext).removeClass(this.settings.classDirectionPrev) : (this.index.direction) ? this.picsanimContainer.$node.removeClass(this.settings.classDirectionNext).addClass(this.settings.classDirectionPrev) : this.picsanimContainer.$node.removeClass(this.settings.classDirectionPrev).addClass(this.settings.classDirectionNext);
    if((this.index.past != this.index.value) || !this.ready) {
      (order) ? this.picsanimContainer.$node.removeClass(this.settings.classDisorderly) : this.picsanimContainer.$node.addClass(this.settings.classDisorderly);
      this.picsanim.reset();
      this.thumbnails.reset();
      if(!(this.len <= 2)) this.picsanimImages[this.index.next].next();
      if(!(this.len <= 2)) this.picsanimImages[this.index.prev].prev();
      if(this.len <= 2) this.picsanimImages[this.index.next].fade();
      if(!order) this.picsanimImages[this.index.past].past();
      this.picsanimImages[this.index.value].reset().active();
      this.picsanimThumbnails[this.index.value].reset().active();
      this.thumbnailTransform(this.index.value);
    }
    (this.settings.hash && this.$picsanim[this.index.value].dataset.hash) ? ghxst.location(this.$picsanim[this.index.value].dataset.hash) : ghxst.location();
    if(this.settings.counter) this.factory(this.picsanimProgress.$node.addClass(this.settings.classUnset)).animation().$node.removeClass(this.settings.classUnset);
    this.nav();
    this.load(this.index.value, () => {
      this.preload(this.index.value, this.index.value + 1);
      this.preload(this.index.value, this.index.value - 1);
    });
  }

  load(index, callback) {
    if(!this.picsanimImages[index].$node.hasClass(this.settings.classLoaded)) this.picsanimImages[index].loading();
    if(!this.picsanimThumbnails[index].$node.hasClass(this.settings.classLoaded)) this.picsanimThumbnails[index].loading();
    if(this.picsanimImages[index].$node.hasClass(this.settings.classLoaded) && this.picsanimThumbnails[index].$node.hasClass(this.settings.classLoaded)) {
      if(callback && this.ready) callback();
      return;
    }
    this.$picsanim.ajax({
      type: "GET",
      url: this.$picsanim[index].dataset.url || this.$picsanim[index].href || this.$picsanim[index].src,
      success: () => {
        if(!this.picsanimImages[index].$node.hasClass(this.settings.classLoaded)) this.factory(this.$(this.picsanimImages[index].ready().loaded().element.querySelector("." + this.settings.picsanimClassImage))).img(this.$picsanim[index].dataset.url || this.$picsanim[index].href || this.$picsanim[index].src);
        if(!this.picsanimThumbnails[index].$node.hasClass(this.settings.classLoaded)) this.picsanimThumbnails[index].ready().loaded();
        if(callback && this.ready) callback();
      },
      error: () => {
        this.picsanimImages[index].error();
        this.picsanimThumbnails[index].error();
        if(callback && this.ready) callback();
      }
    });
  }

  preload(index, direction) {
    if(!this.settings.loop && ((direction > index) ? direction >= this.len : direction < 0)) return;
    this.load((direction > index) ? (direction >= this.len) ? 0 : direction : (direction < 0) ? this.len - 1: direction, () => {
      if(!this.settings.preload || (this.settings.preload && ((direction > index) ? direction + 1 >= this.len : direction - 1 < 0))) return;
      this.preload(direction, (direction > index) ? direction + 1 : direction - 1);
    });
  }

  bin(index, album) {
    document.dispatchEvent(this.custom);
    this.modernize(index);
    if(!album) {
      this.root();
      this.build();
    }
    if(album) this.content();
    if(this.logo.length !== 2704) return;
    if(!this.picsanimContainer.element.querySelector("." + this.settings.classLogo)) return;
    this.update();
    this.event();
    this.responsive();
    if(this.settings.hash) this.location = window.location.hash;
    if(this.settings.overflow) this.overflow();
    if(!album) this.picsanimContainer.active();
    this.set(index, true);
    this.ready = true;
  }

  thumbnailTransform(index) {
    this.thumbnailTranslate = this.thumbnailsContent.element.style.transform.replace(/translateX\((.+)px\)/g, "$1");
    this.thumbnailTranslate = (this.thumbnailTranslate === 0 || this.thumbnailTranslate) ? parseInt(this.thumbnailTranslate) : 0;
    this.thumbnailTranslateX = (this.thumbnailTranslate <= 0) ? ((this.thumbnailsContent.element.offsetWidth + this.thumbnailTranslate - window.innerWidth < 0) && this.thumbnailsContent.element.offsetWidth > window.innerWidth) ? window.innerWidth - this.thumbnailsContent.element.offsetWidth : (this.picsanimThumbnails[index].element.offsetLeft + this.thumbnailTranslate < 0) ? this.picsanimThumbnails[index].element.offsetLeft * -1 : (this.picsanimThumbnails[index].element.offsetLeft + this.picsanimThumbnails[index].element.offsetWidth + this.thumbnailTranslate > window.innerWidth) ? (this.picsanimThumbnails[index].element.offsetLeft + this.picsanimThumbnails[index].element.offsetWidth - window.innerWidth) * -1 : this.thumbnailTranslate : 0;
    this.thumbnailsContent.element.style.transform = "translateX(" + this.thumbnailTranslateX + "px)";
  }

  overflow() {
    this.head.$node.append(this.style.element);
    this.html.$node.addClass(this.settings.classOverflow);
  }

  hash() {
    let len = this.len;

    while(len--) {
      if("#" + this.$picsanim[len].dataset.hash === window.location.hash) {
        this.bin(len);
        return;
      }
    }
  }

  zoom() {
    (this.picsanimContainer.$node.hasClass(this.settings.classZoom)) ? this.zoomOut() : this.zoomIn();
  }

  zoomIn() {
    this.picsanimContainer.$node.removeClass(this.settings.classZoomOut).addClass(this.settings.classZoom);
    this.picsanimFullScreen.img(this.$picsanim[this.index.value].dataset.url || this.$picsanim[this.index.value].href || this.$picsanim[this.index.value].src).$node.addClass(this.settings.classActive);
    if(this.settings.counter) this.picsanimProgress.$node.removeClass(this.settings.classActive).removeClass(this.settings.classPlay);
  }

  zoomOut() {
    this.picsanimContainer.$node.removeClass(this.settings.classZoom).addClass(this.settings.classZoomOut);
    setTimeout(() => {
      this.picsanimFullScreen.element.innerHTML = "";
      this.picsanimFullScreen.$node.removeClass(this.settings.classActive);
    }, this.settings.zoomDelay);
  }

  counter() {
    (this.picsanimProgress.$node.hasClass(this.settings.classActive)) ? this.counterStop() : this.counterStart();
  }

  counterStart() {
    this.factory(this.picsanimProgress.$node.addClass(this.settings.classUnset)).animation().$node.removeClass(this.settings.classUnset).addClass(this.settings.classActive).addClass(this.settings.classPlay);
  }

  counterStop() {
    this.picsanimProgress.$node.removeClass(this.settings.classActive).removeClass(this.settings.classPlay);
  }

  thumbnail() {
    (this.picsanimContainer.$node.hasClass(this.settings.thumbnailsClassShow)) ? this.thumbnailOut() : this.thumbnailIn();
  }

  thumbnailIn() {
    this.picsanimContainer.$node.addClass(this.settings.thumbnailsClassShow);
    this.$(this.thumbnailsContent.element.querySelectorAll("." + this.settings.thumbnailsClassImage + " button")).attr("tabindex","0");
  }

  thumbnailOut() {
    this.picsanimContainer.$node.removeClass(this.settings.thumbnailsClassShow);
    this.$(this.thumbnailsContent.element.querySelectorAll("." + this.settings.thumbnailsClassImage + " button")).attr("tabindex","-1");
  }

  remove() {
    if(this.html) this.html.$node.removeClass(this.settings.classOverflow);
    if(this.style) this.style.$node.remove();
    if(this.picsanimContainer) this.picsanimContainer.$node.remove();
    this.boot();
    this.removeEvents();
    this.ready = false;
  }

  close() {
    this.picsanimContainer.inactive().$node.addClass(this.settings.classInactive);
    ghxst.location(this.location);
    setTimeout(() => {
      this.remove();
    }, this.settings.closeDelay);
  }

  key() {
    this.keyNext = (event) => {
      if(this.settings.keyNext.includes(event.key) || this.settings.keyNext.includes(event.code)) this.set(this.index.value + 1, true);
    };
    this.keyPrev = (event) => {
      if(this.settings.keyPrev.includes(event.key) || this.settings.keyPrev.includes(event.code)) this.set(this.index.value - 1, true);
    };
    this.keyClose = (event) => {
      if(this.settings.keyClose.includes(event.key) || this.settings.keyClose.includes(event.code)) this.close();
    };
    this.keyCounter = (event) => {
      if(this.settings.keyCounter.includes(event.key) || this.settings.keyCounter.includes(event.code)) this.counter();
    };
    this.keyThumbnails = (event) => {
      if(this.settings.keyThumbnails.includes(event.key) || this.settings.keyThumbnails.includes(event.code)) this.picsanimContainer.$node.toggleClass(this.settings.thumbnailsClassShow);
    };
    this.keyZoom = (event) => {
      if(this.settings.keyZoom.includes(event.key) || this.settings.keyZoom.includes(event.code)) this.zoom();
    };
    if(this.settings.keyNext && this.settings.next) document.addEventListener('keydown', this.keyNext);
    if(this.settings.keyPrev && this.settings.prev) document.addEventListener('keydown', this.keyPrev);
    if(this.settings.keyClose && this.settings.close) document.addEventListener('keydown', this.keyClose);
    if(this.settings.keyCounter && this.settings.counter) document.addEventListener('keydown', this.keyCounter);
    if(this.settings.keyThumbnails && this.settings.thumbnails) document.addEventListener('keydown', this.keyThumbnails);
    if(this.settings.keyZoom && this.settings.zoom) document.addEventListener('keydown', this.keyZoom);
  }

  event() {
    console.log("event");
    this.picsanimContainer.$node.on("click", (event) => {
      if(event.target === this.picsanimPrev.element || event.target === this.picsanimPrev.element.querySelector("button")) this.set(this.index.value - 1, true);
      if(event.target === this.picsanimNext.element || event.target === this.picsanimNext.element.querySelector("button")) this.set(this.index.value + 1, true);
      if((event.target === this.picsanimClose.element || event.target === this.picsanimClose.element.querySelector("button")) && !this.picsanimContainer.$node.hasClass(this.settings.classZoom)) this.close();
      if(event.target.classList.contains(this.settings.picsanimClassContent) || event.target.classList.contains(this.settings.picsanimClassItem)) this.close();
      if((event.target === this.picsanimClose.element || event.target === this.picsanimClose.element.querySelector("button")) && this.picsanimContainer.$node.hasClass(this.settings.classZoom)) this.zoom();
      if(event.target === this.picsanimZoom.element || event.target === this.picsanimZoom.element.querySelector("button")) this.zoom();
      if(event.target === this.thumbnailsToggle.element || event.target === this.thumbnailsToggle.element.querySelector("button")) this.thumbnail();
      if(event.target === this.picsanimProgress.element || event.target === this.picsanimProgress.element.querySelector("button")) this.counter();
    });

    this.thumbnailsContent.$node.on("click", (event) => {
      if(event.target.classList.contains(this.settings.thumbnailsClassImage)) this.set(this.$(event.target).index());
      if(event.target.parentNode.classList.contains(this.settings.thumbnailsClassImage)) this.set(this.$(event.target.parentNode).index());
    });

    this.picsanimProgress.$node.on('animationend', () => {
      this.set(this.index.value + 1, true);
    });

    this.thumbnailsContent.$node.on("mousedown", (event) => {
      if(this.thumbnailsContent.element.offsetWidth > window.innerWidth) this.drag(event);
    });

    this.thumbnailsContent.$node.on("touchstart", (event) => {
      if(this.thumbnailsContent.element.offsetWidth > window.innerWidth) this.drag(event);
    });

    this.picsanim.$node.on("touchstart", (event) => {
      this.picsanimTouchStart = event.touches[0].screenX;
    });

    this.picsanim.$node.on("touchend", (event) => {
      if(this.picsanimTouchStart - event.changedTouches[0].screenX < -40) this.set(this.index.value - 1, true);
      if(this.picsanimTouchStart - event.changedTouches[0].screenX > 40) this.set(this.index.value + 1, true);
    });

    this.eventResize = () => {
      if(this.index.value) this.thumbnailTransform(this.index.value);
      this.picsanimContainer.$node.addClass(this.settings.classResize);
      this.eventResizeEnd();
      this.eventResponsive();
    }

    this.eventResizeEnd = ghxst.debounce(() => {
      this.picsanimContainer.$node.removeClass(this.settings.classResize);
    }, 200);

    this.eventResponsive = ghxst.debounce(() => {
      this.responsive();
    }, 200);

    window.addEventListener("resize", this.eventResize);
    this.key();
  }

  drag(event) {
    if(this.dragged) return;
    this.dragged = true;
    this.dragScreenX = event.screenX || event.touches[0].screenX;
    this.dragTranslate = this.thumbnailsContent.element.style.transform.replace(/translateX\((.+)px\)/g, "$1");
    this.dragTranslate = (this.dragTranslate === 0 || this.dragTranslate) ? parseInt(this.dragTranslate) : 0;
    this.dragMouseMove = ghxst.throttle((event) => {
      this.dragMoveScreenX = event.screenX || event.touches[0].screenX;
      this.thumbnailsContent.$node.addClass(this.settings.classDrag);
      this.dragTranslateX = ((this.dragTranslate + this.dragMoveScreenX - this.dragScreenX) <= 0) ? (this.thumbnailsContent.element.offsetWidth + (this.dragTranslate + this.dragMoveScreenX - this.dragScreenX - window.innerWidth) < 0) ? window.innerWidth - this.thumbnailsContent.element.offsetWidth : this.dragTranslate + this.dragMoveScreenX - this.dragScreenX : 0;
      this.thumbnailsContent.element.style.transform = "translateX(" + this.dragTranslateX + "px)";
    }, 16);
    this.dragMouseUp = () => {
      this.thumbnailsContent.$node.removeClass(this.settings.classDrag);
      window.removeEventListener("mousemove", this.dragMouseMove);
      window.removeEventListener("mouseup", this.dragMouseUp);
      window.removeEventListener("touchmove", this.dragMouseMove);
      window.removeEventListener("touchend", this.dragMouseUp);
      this.dragged = false;
    }
    window.addEventListener("mousemove", this.dragMouseMove);
    window.addEventListener("mouseup", this.dragMouseUp);
    window.addEventListener("touchmove", this.dragMouseMove);
    window.addEventListener("touchend", this.dragMouseUp);
  }

  removeEvents() {
    document.removeEventListener('keydown', this.keyNext);
    document.removeEventListener('keydown', this.keyPrev);
    document.removeEventListener('keydown', this.keyClose);
    document.removeEventListener('keydown', this.keyCounter);
    document.removeEventListener('keydown', this.keyThumbnails);
    document.removeEventListener('keydown', this.keyZoom);

    window.removeEventListener("resize", this.eventResize);
  }

  customEvent() {
    this.custom = new CustomEvent("ghxst-picsanim");
    document.addEventListener("ghxst-picsanim", (event) => {
      if(this.ready) {
        ghxst.location(this.location);
        this.remove();
      }
    });
  }

  delegation() {
    this.boot();
    this.$("body").on("click", (event) => {
      let len = this.len;
      while(len--) {
        if(event.target === this.$picsanim[len]) {
          event.preventDefault();
          if(this.settings.album) {

            this.root();
            this.build(true);
            if(this.settings.overflow) this.overflow();
            this.picsanimContainer.active();

            this.$picsanim.ajax({
              type: "GET",
              url: this.$picsanim[len].dataset.url || this.$picsanim[len].href || this.$picsanim[len].src,
              success: (response) => {
                this.boot(new DOMParser().parseFromString(response, "text/html").querySelectorAll(this.settings.selector));
                this.bin(this.settings.albumStart || 0, true);
              }
            });
          } else {
            this.bin(len);
          }
          return;
        }
      }
    });
  }

  responsive() {
    let range;
    for (let key in this.settings.responsive) {
      if (window.innerWidth <= parseInt(key)) {
        this.options(this.default);
        this.update(this.settings.responsive[key]);
        range = true;
        return;
      }
    }
    if(!range) this.update(this.default);
  }

  update(settings) {
    if(settings) this.options(settings);
    (this.settings.zoom) ? this.picsanimZoom.$node.removeClass(this.settings.classHidden) : this.picsanimZoom.$node.addClass(this.settings.classHidden);
    (this.settings.counter) ? this.picsanimProgress.$node.removeClass(this.settings.classHidden) : this.picsanimProgress.$node.addClass(this.settings.classHidden);
    (this.settings.close) ? this.picsanimClose.$node.removeClass(this.settings.classHidden) : this.picsanimClose.$node.addClass(this.settings.classHidden);
    (this.settings.prev) ? this.picsanimPrev.$node.removeClass(this.settings.classHidden) : this.picsanimPrev.$node.addClass(this.settings.classHidden);
    (this.settings.next) ? this.picsanimNext.$node.removeClass(this.settings.classHidden) : this.picsanimNext.$node.addClass(this.settings.classHidden);
    (this.settings.thumbnails) ? this.thumbnailsToggle.$node.removeClass(this.settings.classHidden) : this.thumbnailsToggle.$node.addClass(this.settings.classHidden);
    if(!this.settings.zoom) this.zoomOut();
    if(!this.settings.counter) this.counterStop();
    if(!this.settings.thumbnails) this.thumbnailOut();
    this.nav();
  }

  ghxst() {
    window.ghxst = window.ghxst || {};
    ghxst.bar = ghxst.bar || {};
    ghxst.bar.getWidth = ghxst.bar.getWidth || function() {
      let width,
          outer = document.createElement("div"),
          inner = document.createElement("div");

      outer.appendChild(inner);
      outer.style.overflowY = "scroll";
      document.body.appendChild(outer);
      width = outer.offsetWidth - inner.offsetWidth;
      document.body.removeChild(outer);
      return width;
    }

    ghxst.bar.width = ghxst.bar.width || ghxst.bar.getWidth();

    ghxst.location = ghxst.location || function(hash) {
      if(hash) {
        window.location.hash = hash;
      } else {
        history.replaceState('', document.title, window.location.pathname);
      }
    }

    ghxst.throttle = ghxst.throttle || ((callback, delay) => {
      let throttle;
      return (...args) => {
        if (!throttle) {
          callback(...args);
          throttle = setTimeout(() => throttle = false, delay)
        }
      };
    })

    ghxst.debounce = ghxst.debounce || ((callback, delay) => {
      let timeout;
      return (...args) => {
        const that = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(that, args), delay);
      };
    })
  }

  boot(query) {
    this.$picsanim = new ghxst(query || this.settings.selector);
    this.len = this.$picsanim.length;
  }

  options(settings) {
    if(!this.default) this.default = Object.assign({}, Object.assign(this.settings, settings));
    Object.assign(this.settings, settings);
    return this;
  }

  init() {
    console.log("init");
    this.customEvent();
    this.ghxst();
    this.delegation();
    if(this.settings.hash) this.hash();
    return this;
  }
}
