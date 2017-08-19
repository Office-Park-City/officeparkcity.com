const STRIPE_API_KEY = require('../config').STRIPE_API_KEY;
var stripe = require('stripe')(STRIPE_API_KEY);

module.exports = {

  chargeCard: async (options, callback) => {

    const { amount, description, exp_month, exp_year, number, cvc } = options;

    try {
        const charge = await stripe.charges.create({
        	amount,
        	description,
        	currency: 'usd',
        	source: {
        		object: 'card',
        		// number,
        		number: '4242424242424242', // testing
        		cvc,
        		exp_month,
        		exp_year
        	},
        	statement_descriptor: description
        });

        return callback();
    } catch (err) {

        return callback(err);
    }
  }
}