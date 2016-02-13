import assign from 'lodash/assign';
import {
    RECEIVE_FEED
} from '../actions';

export default function data(state = {}, action) {
    switch (action.type) {

    case RECEIVE_FEED:
        return assign({}, state, {
            [action.feed]: action.json
        });

    default:
        return state;
    }
}
