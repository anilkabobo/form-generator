export const UPDATE_FORM_CONFIGS = 'UPDATE_FORM_CONFIGS';
export const UPDATE_FIELD_VALUE = 'UPDATE_FORM_VALUE';
export const RESET_FORM = 'RESET_FORM';

export const updateFormConfigs = (config) => {
  return {
    type: UPDATE_FORM_CONFIGS,
    payload: config
  }
}

export const updateFieldValue = (name, value) => {
  return {
    type: UPDATE_FIELD_VALUE,
    payload: {name, value}
  }
}

export const resetForm = () => {
  return {
    type: RESET_FORM,
  }
}

export const submitForm = (formValues) => {
  console.log(formValues)
  return {
    type: RESET_FORM,
  }
}