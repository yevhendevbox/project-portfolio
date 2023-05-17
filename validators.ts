import { SkillInterface } from './types';

export function isSkillUndefined(skill: SkillInterface): boolean {
  return skill !== undefined;
}
export function isStringValid(str: string): boolean {
  return typeof str === 'string';
}
export function isPropNotUndefined(prop: any): boolean {
  return prop !== undefined;
}
