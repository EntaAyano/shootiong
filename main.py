def on_button_pressed_a():
    global agent_x
    if 1 <= agent_x:
        led.unplot(agent_x, 4)
        agent_x = agent_x - 1
        led.plot(agent_x, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global j_, point
    for j in range(4):
        j_ = j * -1
        if led.point(invader_x, j_ + 3):
            led.unplot(invader_x, j_ + 3)
            point += 1
            break
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global agent_x
    if agent_x <= 3:
        led.unplot(agent_x, 4)
        agent_x = agent_x + 1
        led.plot(agent_x, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

i_ = 0
invader_x = 0
j_ = 0
agent_x = 0
point = 0
agent_x = 2
led.plot(agent_x, 4)

def on_every_interval():
    global invader_x
    invader_x = randint(0, 4)
    led.plot_brightness(invader_x, 0, 50)
loops.every_interval(1000, on_every_interval)

def on_every_interval2():
    global i_, j_
    for i in range(5):
        led.unplot(i, 3)
    for k in range(5):
        for l in range(3):
            i_ = k * -1
            j_ = l * -1
            if led.point(i_ + 4, j_ + 2):
                led.unplot(i_ + 4, j_ + 2)
                led.plot_brightness(i_ + 4, j_ + 3, 50)
loops.every_interval(1000, on_every_interval2)
