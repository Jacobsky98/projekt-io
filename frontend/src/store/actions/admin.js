const SET_SHOW_USER_FORM = 'SET_SHOW_USER_FORM';

const setShowUserForm = (showUserForm) => {
  return {
    type: SET_SHOW_USER_FORM,
    showUserForm: showUserForm,
  };
};

export { SET_SHOW_USER_FORM, setShowUserForm };
