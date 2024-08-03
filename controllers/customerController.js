const bcrypt = require('bcrypt');
const Customer = require('../models/customerSchema.js');
const { createNewToken } = require('../utils/token.js');

const customerRegister = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const customer = new Customer({
            ...req.body,
            password: hashedPass
        });

        const existingcustomerByEmail = await Customer.findOne({ email: req.body.email });

        if (existingcustomerByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else {
            let result = await customer.save();
            result.password = undefined;
            const token = createNewToken(result._id)
            result = {
                ...result._doc, 
                token: token
            };
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const customerLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let customer = await Customer.findOne({ email: req.body.email });
        // if (!customer) 
        if(customer) // If customer exist 
        {
            const validated = await bcrypt.compare(req.body.password, customer.password);
            // if (!validated)
            if(validated) // If password is correct 
            {
                customer.password = undefined;

                const token = createNewToken(customer._id)

                customer = {
                    ...customer._doc,
                    token: token
                };

                res.send(customer);
            } else {
                res.send({ message: "Invalid password" });
            }
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "Email and password are required" });
    }
};

const getCartDetail = async (req, res) => {
    try {
        // let customer = await Customer.findBy(req.params.id) // No function findBy
        let customer = await Customer.findById(req.params.id)  // findById is used to get doc
        if (customer) {
            // res.get(customer.cartDetails); // no function get on response object
            res.send(customer.cartDetails); // sending response
        }
        else {
            res.send({ message: "No customer found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const cartUpdate = async (req, res) => {
    try {

        let customer = await Customer.findByIdAndUpdate(req.params.id, req.body,
            { new: false })
        // return res.send(customer.cartDetails);
        
        // if customer exist 
        if(customer)
        {
            // return response
            return res.send(customer.cartDetails);
        }
        else
        {
            res.send({ message: "No customer found" });
        }

    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    customerRegister,
    customerLogIn,
    getCartDetail,
    cartUpdate,
};
