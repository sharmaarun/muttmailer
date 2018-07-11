
import { sideBarVisibility } from "../actions/actions";
import {TOGGLE_SIDEBAR} from "../actions/actions";

const sidebar = (state = {barState: sideBarVisibility.HIDE}, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {...state,barState:action.barState}
            
        default:
            return state;

    }
}

export default sidebar;