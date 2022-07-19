export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_TOTAL = "CLEAR_TOTAL";
export const ADD_MEMORY = "ADD_MEMORY";
export const UTILIZE_MEMORY = "UTILIZE_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearTotal = () => {
  return { type: CLEAR_TOTAL };
};

export const addMemory = () => {
  return { type: ADD_MEMORY };
};

export const utilizeMemory = () => {
  return { type: UTILIZE_MEMORY };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};