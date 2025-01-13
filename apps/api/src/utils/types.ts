import { z } from 'zod';

export type Dto<T extends Record<string, z.AnyZodObject>> = {
  [key in keyof T]: z.infer<T[key]>;
};
