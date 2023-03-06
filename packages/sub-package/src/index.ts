import { ReallyAny } from '@mono/types';
import { isString } from '@mono/helpers';

export const subPackage = (input: ReallyAny) => {
  const isValid = isString(input);
  return isValid;
};