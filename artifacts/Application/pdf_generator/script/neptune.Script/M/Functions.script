var RESULT;


function showApproved(){
var binding = oTable1.getBinding("items");
var filter1 = new sap.ui.model.Filter("STATUS", "Contains", "Approved");
binding.filter([filter1]);
console.log(binding)
}


function showPending(){
var binding = oTable1.getBinding("items");
var filter1 = new sap.ui.model.Filter("STATUS", "Contains", "Pending");
binding.filter([filter1]);

}



function showRejected(){
var binding = oTable1.getBinding("items");
var filter1 = new sap.ui.model.Filter("STATUS", "Contains", "Rejected");
binding.filter([filter1]);
}



// Remove filter

function removeFilter() {
  var binding = oTable1.getBinding("items");
  binding.filter([""]);
}


// ----- 



var final_data = {}

function submit(){

    inoSimpleFormORDERNUMBER.setValueState("None");
    inoSimpleFormITEMNAME.setValueState("None");
    inoSimpleFormITEMQUANTITY.setValueState("None");
    inoSimpleFormMATERIAL.setValueState("None");
    inoSimpleFormDESCRIPTION.setValueState("None");
    inoSimpleFormDOCTYPE.setValueState("None");
    inoSimpleFormITEMNUMBER.setValueState("None");
    inoSimpleFormSALESUNIT.setValueState("None");
    inoSimpleFormCURRENCY.setValueState("None");
    inoSimpleFormDIVISION.setValueState("None");

    // // **** VALIDATION SECTION ******
    // //Return to get out of the script.

    if (inoSimpleFormORDERNUMBER.getValue() === ""){
        inoSimpleFormORDERNUMBER.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Order Number");
        return
    };

    if (inoSimpleFormITEMNAME.getValue() === ""){
        inoSimpleFormITEMNAME.setValueState("Error")
        sap.m.MessageToast.show("Please provide an Item Name");
        return
    };

    if (inoSimpleFormITEMNUMBER.getValue() === ""){
        inoSimpleFormITEMNUMBER.setValueState("Error")
        sap.m.MessageToast.show("Please provide an Item Number");
        return
    };

    if (inoSimpleFormITEMQUANTITY.getValue() === ""){
        inoSimpleFormITEMQUANTITY.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Quantity");
        return
    };

    if (inoSimpleFormMATERIAL.getValue() === ""){
        inoSimpleFormMATERIAL.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Material");
        return
    };

    if (inoSimpleFormDESCRIPTION.getValue() === ""){
        inoSimpleFormDESCRIPTION.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Description");
        return
    };

        if (inoSimpleFormDOCTYPE.getValue() === ""){
        inoSimpleFormDOCTYPE.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Doc Type");
        return
    };

    if (inoSimpleFormDIVISION.getValue() === ""){        
        inoSimpleFormDIVISION.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Division");
        return
    };

        if (inoSimpleFormSALESUNIT.getValue() === ""){        
        inoSimpleFormSALESUNIT.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Sales Unit");
        return
    };

        if (inoSimpleFormCURRENCY.getValue() === ""){        
        inoSimpleFormCURRENCY.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Currency");
        return
    };


    // Create the empty Object
    

    final_data.ORDERNUMBER = inoSimpleFormORDERNUMBER.getValue();
    final_data.ITEMNAME = inoSimpleFormITEMNAME.getValue();
    final_data.ITEMQUANTITY = inoSimpleFormITEMQUANTITY.getValue();
    final_data.MATERIAL = inoSimpleFormMATERIAL.getValue();
    final_data.DESCRIPTION = inoSimpleFormDESCRIPTION.getValue();
    final_data.DOCTYPE = inoSimpleFormDOCTYPE.getValue();
    final_data.ITEMNUBER = inoSimpleFormITEMNUMBER.getValue();
    final_data.DIVISION = inoSimpleFormDIVISION.getValue();
    final_data.SALESUNIT = inoSimpleFormSALESUNIT.getValue();
    final_data.CURRENCY = inoSimpleFormCURRENCY.getValue();
    final_data.STATUS = inoSimpleFormSTATUS.getValue();

    console.log("Final Data");
    console.log(final_data);

    oButtonCreate.setVisible(false);
    

    oButtonViewSalesOrderPDF.setVisible(true);
    oButtonViewSalesOrderPDF.setText("View Sales Order: "+ final_data.ORDERNUMBER)
    oButtonViewSalesOrderPDF.setTooltip(final_data.ORDERNUMBER);

    var options = 
        {
            data: final_data
        };

    apioRestAPIPOST(options);

    oApp.setBusy(false);
    
    //Web push notification
    Push.create("New Sales Order", {
        body: "Sales order: " + final_data.ORDERNUMBER + " has been successfully created!",
        icon: 'https://dxpdemo.neptune-software.cloud/media/root/PDF%20Generator%20App/neptune_logo.png',
        timeout: 6000,
        onClick: function () {
            window.focus();
            this.close();
        }
    });

    sap.m.MessageToast.show("Sales Order sucessfully created!");


}



function clearForm(){

    let getValcomponents = [
        inoSimpleFormORDERNUMBER,
        inoSimpleFormITEMNAME,
        inoSimpleFormITEMQUANTITY,
        inoSimpleFormMATERIAL,
        inoSimpleFormDESCRIPTION,
        inoSimpleFormDOCTYPE,
        inoSimpleFormITEMNUMBER,
        inoSimpleFormDIVISION,
        inoSimpleFormSALESUNIT,
        inoSimpleFormCURRENCY
    ];
    
    //Arrow function
    getValcomponents.forEach(component => component.setValue(""));
    
}