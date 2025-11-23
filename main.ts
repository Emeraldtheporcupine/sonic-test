namespace SpriteKind {
    export const FortyFiveSlopeR = SpriteKind.create()
    export const Collsion = SpriteKind.create()
    export const FortyFiveSlopeL = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sonic.vy < 6 && Sonic.vy > -1) {
        Sonic.vy += -150
    }
})
let Direction = 0
let Sonic: Sprite = null
scene.setBackgroundImage(assets.image`ABG`)
Sonic = sprites.create(assets.image`SonicIdleR`, SpriteKind.Player)
transformSprites.rotateSprite(Sonic, 0)
let mySprite2 = sprites.create(assets.image`SlopeUpRight`, SpriteKind.FortyFiveSlopeR)
let mySprite3 = sprites.create(assets.image`SlopeUpLeft`, SpriteKind.FortyFiveSlopeL)
mySprite2.setPosition(60, 71)
mySprite3.setPosition(104, 71)
scene.cameraFollowSprite(Sonic)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
Sonic.setPosition(18, 60)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    Sonic.vy += 5
    if (Sonic.x < 0) {
        Sonic.x = 0
        Sonic.vx = 0
    }
    if (Sonic.x > 250) {
        Sonic.x = 250
        Sonic.vx = 0
    }
    if (Sonic.y > 69) {
        Sonic.y = 69
        Sonic.vy = 0
    }
    if (controller.right.isPressed()) {
        Direction = 1
        Sonic.vx += 2
    } else if (controller.left.isPressed()) {
        Direction = -1
        Sonic.vx += -2
    } else {
        Sonic.vx += Sonic.vx * -0.15
    }
    if (Direction == 1) {
        Sonic.setImage(assets.image`SonicIdleR`)
    } else if (Direction == -1) {
        Sonic.setImage(assets.image`SonicIdleL`)
    }
    if (Sonic.overlapsWith(mySprite2)) {
        Sonic.y += -2
        Sonic.vy = 0
    } else if (Sonic.overlapsWith(mySprite3)) {
        Sonic.y += -2
        Sonic.vy = 0
    }
})
