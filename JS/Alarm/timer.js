import state from './state.js'
import * as el from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export function countDown(){
    clearTimeout(state.countDownId)

    if(!state.IsRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
        
    }

    if(minutes < 0){
        actions.reset()
        sounds.alarm.play()
        return
    }
    




    updateDisplay(minutes, seconds)
    state.countDownId = setTimeout(() => countDown(), 1000)

}



export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")



}