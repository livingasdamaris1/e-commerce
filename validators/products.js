import Joi from "joi";

export const addProductValidator = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    // image: Joi.string().required(),
    quantity: Joi.number().required(),
    pictures: Joi.array().items(Joi.string())
})