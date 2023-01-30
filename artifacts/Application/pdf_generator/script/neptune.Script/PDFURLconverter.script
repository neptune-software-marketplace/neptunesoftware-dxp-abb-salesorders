function createDataURL(pdf){
    //Register BLOBs on the application.
    jQuery.sap.addUrlWhitelist("blob");
    //convert the base64 to binary and insert it in a byte array.
    var decodedPdfContent = atob(pdf);
    var byteArray = new Uint8Array(decodedPdfContent.length)
    for(var i=0; i<decodedPdfContent.length; i++){
        byteArray[i] = decodedPdfContent.charCodeAt(i);
    }
    //create a BLOB and a URL
    var blob = new Blob([byteArray.buffer], { type: 'application/pdf' });
    var pdfurl = URL.createObjectURL(blob);

    return pdfurl;
}