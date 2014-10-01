(function() {
  define([], function() {
    var Putil;
    Putil = {
      TARGET_RATIO: 1.5,
      BASE_HEIGHT: 320,
      BASE_WIDTH: 480,
      FONT_SIZE_SAMPLER: 1000,
      width: null,
      height: null,
      ratio: null,
      stageWidth: null,
      stageHeight: null,
      windowWidth: null,
      windowHeight: null,
      relativeXToAbsolute: function(relativeX) {
        return relativeX * Putil.width / 100;
      },
      relativeYToAbsolute: function(relativeY) {
        return relativeY * Putil.height / 100;
      },
      xToAbsolute: function(x) {
        return (Putil.width - Putil.BASE_WIDTH * Putil.resolutionFactor) / 2 + x * Putil.resolutionFactor;
      },
      yToAbsolute: function(y) {
        return (Putil.height - Putil.BASE_HEIGHT * Putil.resolutionFactor) / 2 + y * Putil.resolutionFactor;
      },
      widthToAbsolute: function(x) {
        return this.xToAbsolute(x) - this.xToAbsolute(0);
      },
      heightToAbsolute: function(y) {
        return this.yToAbsolute(y) - this.yToAbsolute(0);
      },
      init: function() {
        this.windowWidth = window.innerWidth * window.devicePixelRatio;
        this.windowHeight = window.innerHeight * window.devicePixelRatio;
        this.ratio = this.windowWidth / this.windowHeight;
        if (this.windowHeight <= 320 || this.windowWidth <= 480) {
          this.resolutionFactor = 1;
        } else if (this.windowHeight <= 640 || this.windowWidth <= 960) {
          this.resolutionFactor = 2;
        } else {
          this.resolutionFactor = 4;
        }
        if (this.ratio < this.TARGET_RATIO) {
          this.width = this.BASE_WIDTH * this.resolutionFactor;
          this.height = this.width / this.ratio;
          this.scale = this.windowHeight / this.height;
          this.wScale = this.windowWidth / this.width;
          this.hScale = this.windowHeight / this.height;
        } else {
          this.height = this.BASE_HEIGHT * this.resolutionFactor;
          this.width = this.height * this.ratio;
          this.scale = this.windowWidth / this.width;
          this.wScale = this.windowWidth / this.width;
          this.hScale = this.windowHeight / this.height;
        }
        return this.basicFontSize = this.widthToAbsolute(480) / this.FONT_SIZE_SAMPLER;
      }
    };
    Putil.init();
    return Putil;
  });

}).call(this);
