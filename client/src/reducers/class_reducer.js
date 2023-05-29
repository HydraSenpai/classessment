import {
  HANDLE_CHANGE,
  GET_CLASS_SUCCESS,
  GET_CLASS_BEGIN,
  CREATE_CLASS_ERROR,
  CREATE_CLASS_SUCCESS,
  CREATE_CLASS_BEGIN,
  GET_SINGLECLASS_SUCCESS,
  GET_SINGLECLASS_BEGIN,
  GET_SINGLECLASS_ERROR,
  CHANGE_CLASS_OPTION,
  CREATED_NEW_CLASS,
  CREATED_NEW_CLASS_PROCESSED,
  CREATE_EXISTING_CLASS_ERROR,
} from '../actions';

const class_reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    return { ...state, [action.payload.name]: action.payload.value };
  }
  if (action.type === GET_CLASS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_CLASS_SUCCESS) {
    return {
      ...state,
      classes: action.payload.classes,
      totalClasses: action.payload.totalClasses,
      isLoading: false,
    };
  }
  if (action.type === CREATE_CLASS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_CLASS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === CREATE_CLASS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_SINGLECLASS_SUCCESS) {
    console.log(action.payload);
    return { ...state, currentClass: action.payload, isLoading: false };
  }
  if (action.type === GET_SINGLECLASS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_SINGLECLASS_ERROR) {
    return {
      ...state,
      isLoading: false,
      //showAlert: true,
      //alertType: 'danger',
      //alertText: action.payload.msg,
    };
  }
  if (action.type === CHANGE_CLASS_OPTION) {
    return { ...state, classOption: action.payload };
  }
  if (action.type === CREATED_NEW_CLASS) {
    return { ...state, createdClass: true };
  }
  if (action.type === CREATED_NEW_CLASS_PROCESSED) {
    return { ...state, createdClass: false };
  }
  if (action.type === CREATE_EXISTING_CLASS_ERROR)
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Class name already exists',
    };
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default class_reducer;
