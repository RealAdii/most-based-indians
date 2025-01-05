import { Builder } from './types';
import { developers } from './developers';
import { designers } from './designers';
import { growth } from './growth';

export const builders: Builder[] = [
  ...developers,
  ...designers,
  ...growth
];