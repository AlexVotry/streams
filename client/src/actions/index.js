import streams from '../apis/streams';
import history from '../history';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STEAM,
    EDIT_STREAM
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
   
    dispatch({ type: CREATE_STREAM, payload: response.data });
    // the following line adds the root as last route to history. this puts
    // us back to the root after this completes.
    history.push('/');
}

export const fetchAllStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data })
}
export const fetchOneStream = id => async dispatch => {
    const response = await streams.get(`streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`streams/${id}`);

    dispatch({ type: DELETE_STEAM, payload: id });
    history.push('/');
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
}