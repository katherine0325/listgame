import { combineReducers } from 'redux'

import list from "./list"
import project from "./project"
import piechart from "./piechart"
import spiderchart from "./spiderchart"
import histogram from './histogram'

const gameApp = combineReducers({
    list,
    project,
    piechart,
    spiderchart,
    histogram
})

export default gameApp
