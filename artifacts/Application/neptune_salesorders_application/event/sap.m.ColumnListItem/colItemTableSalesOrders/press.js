DialogOrder.open();


setTimeout(function() {

    HTMLObject1.setContent("<canvas id='signature-pad' class='signature-pad' style='border:1px solid'></canvas>");
    //oNUIOffcanvasDetails.setPlacement("Bottom");
    var canvas = document.getElementById('signature-pad');
    //console.log(canvas);
    signaturePad = new SignaturePad(canvas);
    

}, 500);



var context = oEvent.oSource.getBindingContext();  

var data = context.getObject();

//console.log(data);


Text.setText(data.id);
TextSD_Doc.setText(data.ORDERNUMBER);
TextMaterial.setText(data.MATERIAL);
TextName.setText(data.ITEMNAME);

TextITM_Number.setText(data.ITEMNUMBER);
TextDescription.setText(data.DESCRIPTION);
TextDOC_Type.setText(data.DOCTYPE);

TextDivision.setText(data.DIVISION);
TextSales_Unit.setText(data.SALESUNIT);
TextCurrency.setText(data.CURRENCY);

