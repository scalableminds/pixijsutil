###
###

Putil =

  TARGET_RATIO : 1.5
  BASE_HEIGHT : 320
  BASE_WIDTH : 480
  FONT_SIZE_SAMPLER : 1000

  width : null
  height : null
  ratio : null

  stageWidth : null
  stageHeight : null

  windowWidth : null
  windowHeight : null



  # 0-1 relative to whole visible screen
  relativeXToAbsolute : (relativeX) ->

    relativeX * Putil.width / 100


  relativeYToAbsolute : (relativeY) ->

    relativeY * Putil.height / 100


  # 0 - 480
  xToAbsolute : (x) ->

    (Putil.width - Putil.BASE_WIDTH * Putil.resolutionFactor) / 2 + x * Putil.resolutionFactor


  # 0 - 320
  yToAbsolute : (y) ->

    (Putil.height - Putil.BASE_HEIGHT * Putil.resolutionFactor) / 2 + y * Putil.resolutionFactor


  widthToAbsolute : (x) ->

    @xToAbsolute(x) - @xToAbsolute(0)


  heightToAbsolute : (y) ->

    @yToAbsolute(y) - @yToAbsolute(0)


  init : ->

    # getting window size
    @windowWidth = window.innerWidth * window.devicePixelRatio
    @windowHeight = window.innerHeight * window.devicePixelRatio


    # ratio
    @ratio = @windowWidth / @windowHeight


    # define assets resolutionFactor
    if @windowHeight <= 320 or @windowWidth <= 480
      @resolutionFactor = 1
    else if @windowHeight <= 640 or @windowWidth <= 960
      @resolutionFactor = 2
    else
      @resolutionFactor = 4


    # setting resolutionFactor according to ratio and resolutionFactor
    if @ratio < @TARGET_RATIO
      @width = @BASE_WIDTH * @resolutionFactor
      @height = @width / @ratio
      @scale = @windowHeight / @height

      @wScale = @windowWidth / @width
      @hScale = @windowHeight / @height
    else
      @height = @BASE_HEIGHT * @resolutionFactor
      @width = @height * @ratio
      @scale = @windowWidth / @width

      @wScale = @windowWidth / @width
      @hScale = @windowHeight / @height


    # basicFontSize * YOUR_FONT_SIZE == font size for the text
    @basicFontSize = @widthToAbsolute(480) / @FONT_SIZE_SAMPLER

Putil.init()

Putil