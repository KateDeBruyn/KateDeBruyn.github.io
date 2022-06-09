/* TUTORIAL BY EASY TUTOTIALS: https://www.youtube.com/watch?v=sGQSz22U8VM&t=33 */

function sendEmail() {
    Email.send({
      SecureToken: "d81df1d7-7308-4764-92aa-83d9c4ca5e97",
      To: "katierosedb@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New Contact Form Enquiry",
      Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(message => alert("Message Sent Success: " + message));
  }

