input.onButtonPressed(Button.A, function () {
    if (1 <= agent_x) {
        led.unplot(agent_x, 4)
        agent_x = agent_x - 1
        led.plot(agent_x, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let j = 0; j <= 3; j++) {
        j_ = j * -1
        if (led.point(invader_x, j_ + 3)) {
            led.unplot(invader_x, j_ + 3)
            point += 1
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (agent_x <= 3) {
        led.unplot(agent_x, 4)
        agent_x = agent_x + 1
        led.plot(agent_x, 4)
    }
})
let i_ = 0
let point = 0
let invader_x = 0
let j_ = 0
let agent_x = 0
let カウンター = 0
agent_x = 2
led.plot(agent_x, 4)
loops.everyInterval(1000, function () {
    for (let i = 0; i <= 4; i++) {
        led.unplot(i, 3)
    }
    for (let k = 0; k <= 4; k++) {
        for (let l = 0; l <= 2; l++) {
            i_ = k * -1
            j_ = l * -1
            if (led.point(i_ + 4, j_ + 2)) {
                led.unplot(i_ + 4, j_ + 2)
                led.plotBrightness(i_ + 4, j_ + 3, 50)
            }
        }
    }
})
loops.everyInterval(1000, function () {
    カウンター += 1
    invader_x = randint(0, 4)
    led.plotBrightness(invader_x, 0, 50)
    if (カウンター == 0) {
        basic.showString("" + (point))
        basic.showString("point")
    }
})
