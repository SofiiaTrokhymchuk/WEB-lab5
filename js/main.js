import { submitForm, validateForm } from "./formValidation.js";
import { createTable, handleTableActions } from "./tableHandler.js";

function main(){
    submitForm();
    validateForm();
    createTable();
    handleTableActions();
}

main();
