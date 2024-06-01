import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleMode() {
    state.IsRunning = document.documentElement.classList.toggle('running')
    sounds.buttonPress.play()
    timer.countDown()
}

export function reset() {
    state.IsRunning = false
    document.documentElement.classList.remove('running')

    el.minutes.textContent = String(state.minutes).padStart(2, '0')
    el.seconds.textContent = String(state.seconds).padStart(2, '0')

    sounds.buttonPress.play()

}

export function decrement() {
    sounds.buttonPress.play()

    state.minutes = state.minutes - 5

    if (state.minutes < 0) {
        state.minutes = 0
    }

    timer.updateDisplay()
}

export function increase() {
    sounds.buttonPress.play()

    state.minutes = state.minutes + 5

    if (state.minutes > 60) {
        state.minutes = 60
    }

    timer.updateDisplay()
}

export function soundTree() {

    state.IsMute = el.tree.classList.toggle('button-click')
    el.fire.classList.remove('button-click')
    el.rain.classList.remove('button-click')
    el.market.classList.remove('button-click')

    if (state.IsMute) {
        sounds.florest.play()
        sounds.rain.pause()
        sounds.fire.pause()
        sounds.market.pause()
        return
    }

    sounds.florest.pause()

}

export function soundRain() {

    state.IsMute = el.rain.classList.toggle('button-click')
    el.fire.classList.remove('button-click')
    el.tree.classList.remove('button-click')
    el.market.classList.remove('button-click')

    if (state.IsMute) {
        sounds.rain.play()
        sounds.florest.pause()
        sounds.fire.pause()
        sounds.market.pause()
        return
    }

    sounds.rain.pause()

}


export function soundFire() {

    state.IsMute = el.fire.classList.toggle('button-click')
    el.rain.classList.remove('button-click')
    el.tree.classList.remove('button-click')
    el.market.classList.remove('button-click')

    if (state.IsMute) {
        sounds.fire.play()
        sounds.florest.pause()
        sounds.rain.pause()
        sounds.market.pause()
        return
    }

    sounds.fire.pause()

}

export function soundMarket() {

    state.IsMute = el.market.classList.toggle('button-click')
    el.fire.classList.remove('button-click')
    el.tree.classList.remove('button-click')
    el.rain.classList.remove('button-click')


    if (state.IsMute) {
        sounds.market.play()
        sounds.florest.pause()
        sounds.rain.pause()
        sounds.florest.pause()
        return
        return
    }

    sounds.market.pause()
}
