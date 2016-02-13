import assign from 'lodash/assign';
import {
    REQUEST_FEED,
    RECEIVE_FEED
} from '../actions';

const initialState = {
    loading: false,
    requestedFeeds: 0,
    APIROOT: 'http://live.vanvikil.no/api/v1'
};

export default function data(state = initialState, action) {
    switch (action.type) {

    case REQUEST_FEED:
        return assign({}, state, {
            requestedFeeds: state.requestedFeeds + 1,
            loading: true
        });

    case RECEIVE_FEED:
        const requestedFeeds = state.requestedFeeds > 0 ? state.requestedFeeds - 1 : 0;
        return assign({}, state, {
            requestedFeeds,
            loading: requestedFeeds === 0 ? false : true
        });

    default:
        return state;
    }
}
