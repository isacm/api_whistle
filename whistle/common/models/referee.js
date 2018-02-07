'use strict';
const FROM_EMAIL = 'WHISTLEAPP12@gmail.com';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function(Referee) {
  Referee.mail = function(req, res, cc) {
    try {
      const msg = {
        to: req.body.email,
        from: FROM_EMAIL,
        cc: FROM_EMAIL,
        subject: 'Registo na aplicação WHISTLE',
        text: 'username' + req.body.name + '\npassword' + req.body.password,
        html: '<strong> Username: </strong>' + req.body.name + '<br><strong>Password: </strong>' + req.body.password,
      };
      // msg.AddTo((new EmailAddress(req.mail, "Example User1")));
      return sgMail.send(msg);
    } catch (err) {
      cc(err);
    }
  };
  Referee.remoteMethod('mail', {
    returns: {root: true},
    accepts: [
          {arg: 'req', type: 'object', http: {source: 'req'}},
          {arg: 'res', type: 'object', http: {source: 'res'}},
    ],
    http: {path: '/mail', verb: 'post'},
  });
// Referee.mail = function(mail, password) {
//   Referee.findById(id)
//     .then(user => {
//       console.log(user);
//       mail = user.mail;
//       name = user.name;
//       pass = user.pass;
//     })
//     .then(() => {
//       const msg = {
//         to: mail,
//         from: FROM_EMAIL,
//         subject: 'Registo na aplicação WHISTLE',
//         text: 'username' + mail + ' password' + pass,
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//       };
//       sgMail.send(msg);
//     });
// };

// Referee.remoteMethod('mail', {
//   accepts: {arg: 'id', type: 'string'},
//   returns: {arg: 'id', type: 'string'},
//   http: {path: '/:id/mail', verb: 'post'},
// });
// };
};
