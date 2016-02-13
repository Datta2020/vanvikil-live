import fetch from 'isomorphic-fetch';

export const REQUEST_FEED = 'REQUEST_POSTS';
export const RECEIVE_FEED = 'RECEIVE_POSTS';

export function requestFeed(feed) {
    return {
        type: REQUEST_FEED,
        feed
    };
}

export function receiveFeed(feed, json) {
    return {
        type: RECEIVE_FEED,
        feed,
        json
    };
}

export function fetchFeed(feed, loading = true) {
    return (dispatch, getState) => {
        if (loading) dispatch(requestFeed(feed));
        const { options: { APIROOT } } = getState();
        return fetch(`${APIROOT}/${feed}`)
            .then((response) => response.json())
            .then((json) => dispatch(receiveFeed(feed, json)))
            .catch((err) => dispatch(receiveFeed(feed, err)));
    };
}
