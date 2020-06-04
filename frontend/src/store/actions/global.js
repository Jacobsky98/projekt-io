export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
