const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tdgroup12.Team@gmail.com',
        pass: "TowerDefence"
    }
});

module.exports = {
    sendMail : function(req, res){ 
        const { firstname, lastname, mail, message } = req.body;

        console.log(req.body);

        const subject = 'Nowa wiadomość od ' + firstname + ' ' + lastname + '.';

        const mailOptions = {
            from: mail,
            to: 'tdgroup12.Team@gmail.com',
            subject: subject, 
            html: '<p>Imię i nazwisko: <strong>' + firstname + ' ' + lastname + '</strong>.</p>' 
            + '<p>Email: <strong>' + mail +'<strong></p> <br/>'
            + '<p>' + message + '</p>'
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if(err)
                console.log('Send Mail error: ' + err);
            else
                console.log('Send mail succes: ' + info);
        });
    },

    addMail : function(req, res) {

    },

    getMail : function(req, res) {

    },

    getAllMails : function(req, res) {
        
    }
}