const mailgun = require('mailgun-js')({apiKey:'key-a61b6ad2a2889c476cd289df3f422209', domain:'officeparkcity.com'});
const mailcomposer = require('mailcomposer');

module.exports = {

  generateHTMLEmail(email, name, cart) {
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

    return mailcomposer({
      from: 'info@officeparkcity.com',
      to: email,
      subject: 'Thanks for your order!',
      text: 'Thanks for your order.',
      html: htmlContent
    });
  },

  sendConfirmationEmail: (email, name, cart, callback) => {

    const htmlMIME = module.exports.generateHTMLEmail(email, name, cart);

    htmlMIME.build((err, message) => {

      const dataToSend = {
          to: email,
          message: message.toString('ascii')
      };

      return mailgun.messages().sendMime(dataToSend, (err, body) => {

        if(err) { callback(err); }
      });
    });
  },

  addToNewsletter: async (address, name, vars = {}, callback) => {

    const member = {
      address,
      name,
      vars,
      subscribed: true
    };

    try {
      const body = await mailgun.lists('newsletter@officeparkcity.com').members().create(member);

      return callback();
    } catch (err) {

      return callback(err);
    }
  }
}