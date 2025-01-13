import { Dto } from 'src/utils/types';
import { z } from 'zod';

const LoginSchemas = {
  login: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),

  recover_password: z.object({
    email: z.string().email(),
  }),

  reset_password: z.object({
    password: z.string().min(8),
  }),
};

type LoginDto = Dto<typeof LoginSchemas>;

export { LoginSchemas, LoginDto };
