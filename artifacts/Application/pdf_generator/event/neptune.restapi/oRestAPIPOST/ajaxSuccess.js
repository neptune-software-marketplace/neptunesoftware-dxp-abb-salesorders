// Parse the response
var salesOrderBAPIResponse = JSON.parse(xhr.responseText);

// Function to generate a random numeric key
function generateRandomNumericKey(length) {
    let characters = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let template = "elearning_pdf_demo";
var pdfUrl = "/pdf/" + template;
let objKey = generateRandomNumericKey(8);
let securityKey = generateRandomNumericKey(8);
pdfUrl += "?objectkey=" + objKey + "&securitykey=" + securityKey;

// Prepare PDFData with the updated final_data
var PDFData = {data: final_data};

$.ajax({
    type: "POST",
    url: pdfUrl,
    data: PDFData,
    success: function (data) {
        // Show PDF after decoding into Base64
        console.log("data:application/pdf;base64," + data);

        var temp = data;

        pdfAttachment = data; // This will be used to send it as an attachment via email

        oApp.setBusy(false);

        var pdfurl = createDataURL(temp);
        console.log(pdfurl);
        oPDFViewer.setSource(pdfurl);
    },
    error: function (result, status) {
        if (result.responseJSON && result.responseJSON.status) {
            console.error(result.responseJSON.status);
        }
    },
});

console.log("PDFData:");
console.log(PDFData);

// Options for further use
var options = {
    data: PDFData,
};
