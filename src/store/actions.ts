export const SET_SRC_TO_PLAYER = "SET_SRC_TO_PLAYER";

export const setNewSrcToPlayerAction = (payload: string) => {
    return {
        type: SET_SRC_TO_PLAYER,
        payload
    }
};
