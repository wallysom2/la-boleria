import joi  from 'joi';

const cakeSchema = joi.object ({
    name: joi.string().required(),
    price: joi.number().required(),
    image: joi.string().uri().required(),
    description: joi.string().required()
});

export default cakeSchema;