namespace SpriteKind {
    export const FortyFiveSlopeR = SpriteKind.create()
    export const Collsion = SpriteKind.create()
    export const FortyFiveSlopeL = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy < 6 && mySprite.vy > -1) {
        mySprite.vy += -150
    }
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`ABG`)
mySprite = sprites.create(assets.image`SonicIdleR`, SpriteKind.Player)
transformSprites.rotateSprite(mySprite, 0)
let mySprite2 = sprites.create(assets.image`SlopeUpRight`, SpriteKind.FortyFiveSlopeR)
let mySprite3 = sprites.create(assets.image`SlopeUpLeft`, SpriteKind.FortyFiveSlopeL)
mySprite2.setPosition(60, 71)
mySprite3.setPosition(120, 71)
scene.cameraFollowSprite(mySprite)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
mySprite.setPosition(18, 60)
game.onUpdate(function () {
    mySprite.vy += 5
    if (mySprite.x < 0) {
        mySprite.x = 0
        mySprite.vx = 0
    }
    if (mySprite.x > 250) {
        mySprite.x = 250
        mySprite.vx = 0
    }
    if (mySprite.y > 69) {
        mySprite.y = 69
        mySprite.vy = 0
    }
    if (controller.right.isPressed()) {
        mySprite.vx += 2
    } else if (controller.left.isPressed()) {
        mySprite.vx += -2
    } else {
        mySprite.vx += mySprite.vx * -0.15
    }
    if (mySprite.overlapsWith(mySprite2)) {
        transformSprites.rotateSprite(mySprite, -45)
        mySprite.y += -1
        mySprite.vy = 1
    } else if (mySprite.overlapsWith(mySprite3)) {
        transformSprites.rotateSprite(mySprite, 45)
        mySprite.y += -1
        mySprite.vy = 1
    } else {
        transformSprites.rotateSprite(mySprite, 0)
    }
})
