import { BUTTONS_LABEL, MENU_ITEMS, WORK_TYPES } from './constants';

export function isUndefined(value) {
  return value !== undefined;
}
export function isString(value) {
  return typeof value === 'string';
}
export function isPageValid(page) {
  return MENU_ITEMS.includes(page);
}
export function isLabelValid(label) {
  return BUTTONS_LABEL.includes(label) && isString(label);
}
export function isWorkTypeValid({ type }) {
  return WORK_TYPES.includes(type) && isString(type);
}
