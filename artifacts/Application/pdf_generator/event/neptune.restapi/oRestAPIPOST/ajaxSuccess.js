console.log(JSON.parse(xhr.responseText));

var salesOrderBAPIResponse = JSON.parse(xhr.responseText)


var PDFData = { data: final_data};


$.ajax({
    type: "POST",
    url: "/pdf/elearning_pdf_demo",
    data: PDFData,
    success: function(data) {
        // elem.src = "data:application/pdf;base64," + data;
        // Show PDF after decode into base 64
        console.log("data:application/pdf;base64," + data)

        var temp = data

        pdfAttachment = data; //This will be used to send it as an attachment via email

        oApp.setBusy(false);

        var pdfurl = createDataURL(temp);
        console.log(pdfurl)
        oPDFViewer.setSource(pdfurl);

        
           },
    error: function(result, status) {
        if (data.responseJSON && result.responseJSON.status)
 console.error(data.responseJSON.status);
    }});

console.log("PDFData:")
console.log(PDFData)
var options = {
    data: PDFData
};

