var options = {
    parameters: {
        "where": JSON.stringify({"id" : oText.getText()}) // Optional 
    },
    data: {
        "STATUS": "Rejected"
    }
};

apioRestAPIPostOrder(options);

sap.m.MessageToast.show("Order Rejected");

oDialogOrder.close();



setTimeout(function() {

    oButtonRefresh.firePress();


}, 600);