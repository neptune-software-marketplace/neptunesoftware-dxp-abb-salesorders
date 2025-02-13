var email = modelDialogSendEmail.oData.email;

if (email === "" || email === null || email === undefined) {
    InputEmail.setValueState("Error");
    InputEmail.setValueStateText("Email field is empty");
    return;
}

App.setBusy(true);

DialogSendEmail.close();
InputEmail.setValue();

var filename = "SalesOrderNr" + pdfSalesOrderID + ".pdf";

var options = {
    data: {
        email: email,
        attachments: { filename: filename, pdf: pdfAttachment },
    },
};

apioRestAPISendEmail(options);