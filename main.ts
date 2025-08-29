basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 50) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
