import joi  from 'joi';

const cakeSchema = joi.object ({
    name: joi.string().min(2).required(),
    price: joi.number().min(0.01).precision(2).required(),
    image: joi.string().uri().required(),
    description: joi.string().optional()
});

export default cakeSchema;