let direction = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(255)
let leds = [
true,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
false
]
basic.forever(function () {
    for (let index = 0; index <= leds.length; index++) {
        if (leds[index] == true) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        }
    }
    strip.show()
    basic.pause(100)
    strip.clear()
    if (leds[0] == true) {
        direction = 1
    } else if (leds[23] == true) {
        direction = 0
    } else if (leds[11] == true) {
        game.addScore(1)
    }
    if (direction == 1) {
        leds.unshift(leds.pop())
    } else {
        leds.insertAt(23, leds.shift())
    }
})
