oApp.setBusy(false);

var data = xhr.responseJSON;

// Use MessageToast
sap.m.MessageToast.show(data.message);