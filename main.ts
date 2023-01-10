let roll = 0
input.onGesture(Gesture.Shake, function () {
    roll = randint(0, 6)
    if (roll == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (roll == 5) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `)
    } else if (roll == 4) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    } else if (roll == 3) {
        basic.showLeds(`
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            `)
    } else if (roll == 2) {
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    } else if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
