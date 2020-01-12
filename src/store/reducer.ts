import { Action } from "redux";

const initialState = {
    audioSrc: 'https://vk.com/doc2351807_488765951'
}

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
};
