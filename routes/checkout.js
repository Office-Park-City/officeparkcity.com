const express = require('express');
const checkoutRouter = express.Router();
const chargeCard = require('../helpers/stripe-helper').chargeCard;
const emailHelper = require('../helpers/email-helper');

const { addToNewsletter, sendConfirmationEmail } = emailHelper;

const checkout = async (req, res, next) => {

	await chargeCard(req.body);

	return next();
}

const postCheckoutMail = async (req, res, next) => {

	return new Promise((resolve, reject) => reject(new Error('testing throwing error'))).catch(err => next(err));

	const { email, name } = req.body;

	await Promise.all([
		sendConfirmationEmail(email, name, [{name: 'Book', price: 1200}]),
		addToNewsletter(email, name, {})
	]);

	return next();
}

checkoutRouter.post('/', global.asyncMiddleware(checkout), global.asyncMiddleware(postCheckoutMail), (req, res) => {

	res.json({
		status: 'succeeded'
	});
});

module.exports = checkoutRouter;
