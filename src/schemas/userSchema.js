const Joi = require('@hapi/joi')

module.exports = {
    // User schema validator for POST
  userCreateSchema: Joi.object({
    UserName: Joi.string().required(),
    UserLastName: Joi.string().required(),
    UserEmail: Joi.string().email().required(),
    UserPassword: Joi.string().min(8).required(),
    UserRol: Joi.alternatives().try(
        Joi.string().valid('admin'), 
        Joi.string().valid('user'),
        Joi.string().valid('teacher'),
        Joi.string().valid('student'),
    ).required(),
    UserActive: Joi.boolean().required()
  })
}