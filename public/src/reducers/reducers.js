import initialState from '../initialState';

import {
    TOGGLE_SETTING,
} from '../actions/actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SETTING:
            return Object.assign({}, state, {
                setting: !state.setting
            });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
