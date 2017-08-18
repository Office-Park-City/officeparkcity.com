var stripe = require("stripe")(
  "sk_test_bDlTYJ5AVwkzZHH7pLCPRILw"
);

module.exports = {

  chargeCard(options, callback) {

    const { amount, description, exp_month, exp_year, number, cvc } = options;

    return stripe.charges.create({
    	amount,
    	description,
    	currency: 'usd',
    	source: {
    		object: 'card',
    		// number, testing
    		number: '4242424242424242',
    		cvc,
    		exp_month,
    		exp_year
    	},
    	statement_descriptor: description
    }, (err, charge) => {

    	if (err) { return callback(err); }

    	return callback();
    });
  }
}