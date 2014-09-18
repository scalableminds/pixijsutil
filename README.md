PixiJSUtil
=========

PixiJSUtil is a small snippet that helps you scaling your PixiJS app.


Structure
----


```
renderer

                          stage
                            |
                       rootContainer
                            |
      ----------------------------------------------
      |                     |                      |
backgroundContainer    viewContainer1         viewContainer2 ...
      |                    |                       |
  ------------        centeredSprite             text
  |          |
 spriteA  spriteB

```

Idea
----
Basic Idea from http://v-play.net/doc/vplay-different-screen-sizes/

Separate actual screen from logical scene

![Alt text](http://v-play.net/doc/images/v-play-background-template-hd2-2280x1440.png)

The safe zone is 1920 x 1280 which means the background files are 2280 x 1440

In this exmaple all images are provided in three resolutions. This does not make sense in a lot of cases.

ResolutionFactor:
- 1 => 480 x 320
- 2 => 960 x 640
- 4 => 1920 x 1280

How to use it
----

``` CoffeeScript
renderer = PIXI.autoDetectRenderer(Putil.width * Putil.scale, Putil.height * Putil.scale ... )

stage = new PIXI.Stage(0x000000)


rootContainer = new PIXI.DisplayObjectContainer()
rootContainer.scale.x = Putil.scale
rootContainer.scale.y = Putil.scale

stage.addchild rootContainer


# backgroundContainer is for fullscreen images in the background
backgroundContainer = new PIXI.DisplayObjectContainer()
texture = PIXI.Texture.fromImage("images/bg_0@#{Putil.resolutionFactor}.jpg")
spriteA = new PIXI.Sprite texture


# regular view like a menu
viewContainer1 = new PIXI.DisplayObjectContainer()
rootContainer.addChild viewContainer1

texture = PIXI.Texture.fromImage("images/imageName@#{Putil.resolutionFactor}.png")
centeredSprite = new PIXI.Sprite texture

centeredSprite.position.x = Game.View.xToAbsolute(240)
centeredSprite.position.y = Game.View.yToAbsolute(160)
centeredSprite.anchor.x = 0.5
centeredSprite.anchor.y = 0.5

viewContainer1.addChild centeredSprite


# move a sprite 20 logical units to the right
centeredSprite.position.x += Game.View.widthToAbsolute(20)


# Text
fontSize = Putil.basicFontSize * YOUR_CAPTION_FONT_SIZE
text = new PIXI.Text("Your caption", {font: "#{fontSize}px #{YOUR_CAPTION_FONT}", ... })
```
