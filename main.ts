input.onButtonPressed(Button.A, function () {
    marcador = marcador + 1
    basic.showNumber(marcador)
})
input.onButtonPressed(Button.AB, function () {
    marcador = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    marcador = marcador - 1
    basic.showNumber(marcador)
})
let marcador = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
