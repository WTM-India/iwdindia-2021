const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sd = require('./config')
// SandGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(sd.getKey());

admin.initializeApp();

const sendSendGridMail = async (snap) => {
  // console.log('api key ', sd.getKey())
  try {
    const docId = snap.id;
    const name = snap.data().name;
    const email = snap.data().email;
    const fname = name.split(" ")[0];
    let info = await sgMail
      .send({
        from: "WTM India <no-reply@iwdindia.in>",
        dynamicTemplateData: { name: fname },
        to: email,
        templateId: "d-2509b29dc6ca44a3bf9b6f37a080a444",
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