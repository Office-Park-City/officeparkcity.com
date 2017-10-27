const STRIPE_API_KEY = require('../config').STRIPE_API_KEY;
var stripe = require('stripe')(STRIPE_API_KEY);

module.exports = {

  async chargeCard(options) {

    const { amount, description, exp_month, exp_year, number, cvc } = options;

    return await stripe.charges.create({
    	amount,
    	description,
    	currency: 'usd',
    	source: {
    		object: 'card',
    		number: '4242424242424242', // testing
    		cvc,
    		exp_month,
    		exp_year
    	},
    	statement_descriptor: description
    });
  }
}
