if (this.getSelectedKey() === "ALL") {
    removeFilter();
}
else if (this.getSelectedKey() === "APPROVED") {
    showApproved();
}
else if (this.getSelectedKey() === "PENDING"){
    showPending();
}
else if (this.getSelectedKey() === "REJECTED"){
    showRejected();
}