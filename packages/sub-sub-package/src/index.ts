import { ReallyAny } from '@mono/types';
import { subPackage } from '@mono/sub-package';

export const subSubPackage = (input: ReallyAny) => {
  return subPackage(input);
};