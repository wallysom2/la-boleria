import joi  from 'joi';

const clientSchema = joi.object ({
    name: joi.string().min(1).required(),
    address: joi.string().min(1).required(),
    phone: joi.string().min(10).max(11).pattern(/^[0-9]+$/).required()
});

export default clientSchema;