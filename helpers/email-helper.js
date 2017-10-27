const util = require('util');
const MAILGUN_API_KEY = require('../config').MAILGUN_API_KEY;
const mailgun = require('mailgun-js')({apiKey:'key-a61b6ad2a2889c476cd289df3f422209', domain:'officeparkcity.com'});

module.exports = {

  generateHTMLEmail(email, name, cart) {

    global.logger.log('cart: ', cart);

    const htmlContent = `
      <p>
      Thanks ${name},<br/><br/>
      Here are the items you have ordered:<br/>
      </p>
      <ul>
        ${cart.map(item => `<li>${item.name} | ${item.price}</li><br/>`)}
      </ul>
      <p>I'll be reaching out shortly to you about the delivery of your order.<br/><br/>
      Cheers,<br/>
      Gavin</p>
    `;

    return emailData = {
      from: 'info@officeparkcity.com',
      to: email,
      subject: 'Thanks for your order!',
      text: 'Thanks for your order.',
      html: htmlContent
    };
  },

  async sendConfirmationEmail(email, name, cart) {

    const emailData = module.exports.generateHTMLEmail(email, name, cart);

    console.log('sending confirm');

    return await mailgun.messages().send(emailData);
  },

  async addToNewsletter(address, name, vars = {}) {

    const member = {
      address,
      name,
      vars,
      subscribed: true,
      upsert: 'yes'
    };

    console.log('adding to news');

    return await mailgun.lists('newsletter@officeparkcity.com').members().create(member);
  }
}
