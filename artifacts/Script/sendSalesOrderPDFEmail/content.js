const data = req.body; // request data body.

log.info(data);

// Convert the base64 PDF to a buffer
var base64Pdf = data.attachments.pdf;
var pdfBuffer = Buffer.from(base64Pdf, "base64");

const attachments = {
    filename: data.attachments.filename,
    content: pdfBuffer,
    encoding: "base64",
};

log.info(attachments);

//Recipient Email
var toEmail = data.email;

//Sender Email
var fromEmail = data.email; //you can change the sender to any other email

//Please check the ID in the Email Template tool
//Email template name is: sendEmailWithSalesOrderPDFAttachment
var emailTemplateID = "BCABA81E-80DC-EE11-85FA-000D3AB233F4";

//variables to send to the email template
var values = { user: data.email };

//Format of the function sendEmail
//await sendEmail(toEmail, subject, html, fromEmail, emailTemplateID, values, attachments, cc, bcc);

var send = await sendEmail(toEmail, null, null, fromEmail, emailTemplateID, values, attachments);

var message;

log.info(send.status);

if (send.status === "error") {
    log.info(send.error.message);
    message = send.error.message;
} else {
    message = "Email sent successfully!"
}

result = {
    status: send.status,
    message: message
};

complete();