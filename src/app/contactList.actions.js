export const DELETE_CONTACT = "DELETE_CONTACT";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

const createAction = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};
export const DeleteContact = (payload) => {
  return createAction(DELETE_CONTACT, payload);
};

export const CreateContact = (payload) => {
  return createAction(CREATE_CONTACT, payload);
};

export const EditContact = (payload) => {
  return createAction(EDIT_CONTACT, payload);
};
