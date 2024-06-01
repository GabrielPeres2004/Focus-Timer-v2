import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function Start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    events.audiocontrols()
    events.registercontrols()
    timer.updateDisplay()

}