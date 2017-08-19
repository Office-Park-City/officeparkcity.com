const express = require('express');
const checkoutRouter = express.Router();
const chargeCard = require('../helpers/stripe-helper').chargeCard;
const emailHelper = require('../helpers/email-helper');

const { addToNewsletter, sendConfirmationEmail } = emailHelper;

const stripeCheckout = function (req, res, next) {

	chargeCard(req.body, next);
}

const postCheckoutMail = async function (req, res, next) {

	const { email, name } = req.body;

	const confirmationEmail = await sendConfirmationEmail(email, name, [{name: 'Book', price: 1200}], next);

	return addToNewsletter(email, name, {}, next);
}

checkoutRouter.post('/', stripeCheckout, sendConfirmationEmail, postCheckoutMail, function (req, res) {

	res.json({
		status: 'succeeded'
	});
});

module.exports = checkoutRouter;