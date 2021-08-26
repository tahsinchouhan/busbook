import {
    SET_DM_DATA,
    CREATE_DM_PASS,
    SET_DM_PASS_ID,
    DM_PASS_DETAILS
} from "../actions";

export const setDmData = (lbl,value) => ({
    type: SET_DM_DATA,
    payload: {lbl,value},
});

export const setDmPassId = (value) => ({
    type: SET_DM_PASS_ID,
    payload: value
});

export const createDmPass = (values) => {
    return {
      type: CREATE_DM_PASS,
      payload: values
    };
};
  
export const DmPassDetails = (values) => {
    return {
      type: DM_PASS_DETAILS,
      payload: values
    };
};