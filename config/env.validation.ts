import * as Joi from 'joi'

export const envValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),

  // Configuración de PostgreSQL
  DB_HOST: Joi.string().required(),
  BD_PORT: Joi.number().default(5432),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),

  // Configuración de Redis
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),

  // Configuración de LocalStack / AWS
  LOCALSTACK_PORT: Joi.number().default(4566),
  AWS_REGION: Joi.string().default('us-east-1'),
})