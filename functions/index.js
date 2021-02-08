const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { key } = require('./config')
// SandGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(key);

admin.initializeApp();

const sendSendGridMail = async (snap) => {
  try {
    const docId = snap.id;
    const name = snap.data().name;
    const email = snap.data().email;
    const fname = name.split(" ")[0];
    let info = await sgMail
      .send({
        from: "WTM India <no-iwdindia.in>",
        dynamicTemplateData: { name: fname },
        to: email,
        templateId: "d-b3066ceb7daa4299aa858fddd22be4e0",
      })
      .then((res) => {
        console.log("Called");
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    admin
      .firestore()
      .collection("edata")
      .doc(docId)
      .update({
        status: "Email Sent",
        eventConfirmation: 'Email Sent'
      });
  } catch (e) {
    console.log(e);
  }
};

exports.sendConfirmationEmail = functions.firestore
  .document("edata/{id}")
  .onCreate((snap, context) => {
    sendSendGridMail(snap);
});