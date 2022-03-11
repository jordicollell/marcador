function restar () {
    marcador = marcador - 1
    if (marcador == -1) {
        marcador = 0
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(marcador)
            basic.pause(100)
        }
    } else {
        basic.showNumber(marcador)
    }
}
input.onButtonPressed(Button.A, function () {
    sumar()
})
input.onButtonPressed(Button.AB, function () {
    marcador = marcador - 0
    basic.showNumber(marcador)
})
function sumar () {
    marcador = marcador + 1
    if (marcador == 10) {
        marcador = 9
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(marcador)
            basic.pause(100)
        }
    } else {
        basic.showNumber(marcador)
    }
}
input.onButtonPressed(Button.B, function () {
    restar()
})
let marcador = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
