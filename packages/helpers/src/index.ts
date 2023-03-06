import { ReallyAny } from '@mono/types';

export const isString = (value: ReallyAny): value is string => typeof value === 'string';