const express = require('express');
const checkoutRouter = express.Router();
const chargeCard = require('../helpers/stripe-helper').chargeCard;
const emailHelper = require('../helpers/email-helper');
const awaitRoute = require('../helpers/route-helper').awaitHandlerFactory;

const { addToNewsletter, sendConfirmationEmail } = emailHelper;

const stripeCheckout = async (req, res, next) => {

	await chargeCard(req.body);

	return next();
}

const postCheckoutMail = async (req, res, next) => {

	const { email, name } = req.body;

	await Promise.all([
		sendConfirmationEmail(email, name, [{name: 'Book', price: 1200}]),
		addToNewsletter(email, name, {})
	]);

	return next();
}

checkoutRouter.post('/', awaitRoute(stripeCheckout), awaitRoute(sendConfirmationEmail), awaitRoute(postCheckoutMail), (req, res) => {

	res.json({
		status: 'succeeded'
	});
});

module.exports = checkoutRouter;
