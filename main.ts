let reading = 0
let currentNote = -1

pins.setPull(DigitalPin.P0, PinPullMode.PullUp)

basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)

    if (reading > 1000) {
        music.stopAllSounds()
        basic.clearScreen()
        currentNote = -1
    } else {
        let zone = Math.floor(Math.map(reading, 0, 1000, 0, 6))

        if (zone != currentNote) {
            currentNote = zone
            let notes = [523, 587, 659, 698, 784, 880, 988]

            music.setVolume(255)
            music.ringTone(notes[currentNote])
            basic.pause(40)

            showCoolIcon(currentNote)

            for (let v = 255; v > 0; v -= 15) {
                music.setVolume(v)
                basic.pause(10)
            }
            music.stopAllSounds()
        }
    }
})

function showCoolIcon(noteIndex: number) {
    if (noteIndex == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (noteIndex == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (noteIndex == 2) {
        basic.showIcon(IconNames.Diamond)
    } else if (noteIndex == 3) {
        basic.showIcon(IconNames.Target)
    } else if (noteIndex == 4) {
        basic.showIcon(IconNames.Chessboard)
    } else if (noteIndex == 5) {
        basic.showIcon(IconNames.Pitchfork)
    } else if (noteIndex == 6) {
        basic.showIcon(IconNames.Diamond)
    }
}
