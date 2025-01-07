oApp.backToPage(oPage);
oButtonRefresh.firePress();
oButtonViewSalesOrderPDF.setVisible(false);
oButtonCreate.setVisible(true);
sap.m.MessageToast.show("SAP List updated");