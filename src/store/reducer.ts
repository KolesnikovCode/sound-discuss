import { SET_SRC_TO_PLAYER } from './actions';

const initialState = {
    audioSrc: ''
};

interface IAction {
    type: string;
    payload?: any
};

export default function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case SET_SRC_TO_PLAYER:
            return {
                ...state,
                audioSrc: action.payload
            }
        default:
            return state;
    }
};
