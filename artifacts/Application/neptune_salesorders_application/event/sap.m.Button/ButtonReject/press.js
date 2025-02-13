var options = {
    parameters: {
        "where": JSON.stringify({"id" : Text.getText()}) // Optional 
    },
    data: {
        "STATUS": "Rejected"
    }
};

apiRestAPIPostOrder(options);

sap.m.MessageToast.show("Order Rejected");

DialogOrder.close();



setTimeout(function() {

    ButtonRefresh.firePress();


}, 600);