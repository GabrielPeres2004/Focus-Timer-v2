import * as actions from './actions.js'
import * as el from './elements.js'

export function registercontrols() {
    el.controls.addEventListener('click', (event) => {
        let action = event.target.dataset.action
        if (typeof actions[action]() != "function") {
            return
        }

        actions[action]
    })

}

export function audiocontrols() {
    el.audioControls.addEventListener('click', (event) => {
        let action = event.target.dataset.action
        if (typeof actions[action]() != "function") {
            return
        }

        actions[action]
    })

}

