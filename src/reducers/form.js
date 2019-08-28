import { Record, Map } from 'immutable';
import { UPDATE_FORM_CONFIGS, UPDATE_FIELD_VALUE, RESET_FORM } from '../actions/form';
import formConfig from '../lib/exampleConfig';
import getDefaultValues from '../lib/getDefaultValues';

export const InitialState = Record({
  formConfig,
  values: new Map(getDefaultValues(formConfig))
});

const initialState = new InitialState();

export default function form(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  switch (action.type) {
  case UPDATE_FORM_CONFIGS:
    return state.set('formConfig', action.payload);
  case UPDATE_FIELD_VALUE:
    return state.setIn(['values', action.payload.name], action.payload.value);
  case RESET_FORM:
    return state.set('values', new Map(getDefaultValues(state.get('formConfig'))));
  default:
    return state;
  }
}