const express = require('express');
const checkoutRouter = express.Router();
const stripe = require('stripe')("sk_test_bDlTYJ5AVwkzZHH7pLCPRILw");
const chargeCard = require('../helpers/stripe-helper').chargeCard;

const stripeCheckout = function (req, res, next) {

	chargeCard(req.body, next);
}

checkoutRouter.post('/', stripeCheckout,  function (req, res) {

	res.json({
		status: 'succeeded'
	});
});

module.exports = checkoutRouter;