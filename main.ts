controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    chocolate = sprites.createProjectileFromSprite(assets.image`chocolate`, cat, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.fire, 100)
    info.changeScoreBy(1)
})
let enemySprite: Sprite = null
let chocolate: Sprite = null
let cat: Sprite = null
game.splash("Move The Buttons Supa Fast To Get A Lot Of Cats!", "GAME BY LIAM JACKSON")
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 288
    export const ARCADE_SCREEN_HEIGHT = 360
}
scene.setBackgroundColor(13)
cat = sprites.create(assets.image`cat`, SpriteKind.Player)
cat.setPosition(73, 90)
controller.moveSprite(cat, 100, 0)
cat.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(assets.image`dog`, SpriteKind.Enemy)
    enemySprite.setPosition(randint(10, 160), 0)
    enemySprite.setVelocity(0, 50)
})
