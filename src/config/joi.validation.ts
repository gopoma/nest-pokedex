import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.string().default('dev'),
  MONGODB: Joi.required(),
  PORT: Joi.number().default(4000),
  DEFAULT_LIMIT: Joi.number().default(10),
});
