const express = require('express');
const mailRouter = express.Router();
const emailHelper = require('../helpers/email-helper');

const { addToNewsletter } = emailHelper;

const newsletterSignup = async (req, res, next) => {

	const { email, name } = req.body;

	await addToNewsletter(email, name, {});

	return next();
}

mailRouter.post('/newsletter', global.asyncMiddleware(newsletterSignup), function (req, res) {

	res.json({
		status: 'succeeded'
	});
});

module.exports = mailRouter;
