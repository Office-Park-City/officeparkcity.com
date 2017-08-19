const express = require('express');
const mailRouter = express.Router();
const emailHelper = require('../helpers/email-helper');

const { addToNewsletter } = emailHelper;

const newsletterSignup = (req, res, next) => {

	const { email, name } = req.body;

	return addToNewsletter(email, name, {}, next);
}

mailRouter.post('/newsletter', newsletterSignup, function (req, res) {

	res.json({
		status: 'succeeded'
	});
});

module.exports = mailRouter;