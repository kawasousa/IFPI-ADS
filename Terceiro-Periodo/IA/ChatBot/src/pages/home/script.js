import { addOnChange, addOnClick, addOnSubmit, createElement, createQueryContainer } from "../../helpers/dom-helpers.js";
import { get } from "../../helpers/getters.js"


const inputTextField = get("input-text-field");
const inputAttachmentField = get("input-file-attachment");
const formInputField = get("form-input-field");

const divChatMessages = get("div-chat-messages");
const divAttachmentIcon = get("div-attachment-icon");

addOnSubmit(formInputField, submitQuery);
addOnChange(inputAttachmentField, addAttachmentIcon);
addOnClick(divAttachmentIcon, removeAttachmentIcon);

function submitQuery(event) {
    event.preventDefault();

    const queryText = inputTextField.value;
    const queryFile = inputAttachmentField.files[0];

    if (queryText === "") { return };

    const messageField = createQueryContainer(queryText);
    divChatMessages.appendChild(messageField);

    formInputField.reset()
}

function addAttachmentIcon(event){
    const files = event.target.files;

    for(const file of files){
        const img = createElement("img");
        img.setAttribute("src", URL.createObjectURL(file));
        img.setAttribute("id", URL.createObjectURL(file));
        divAttachmentIcon.appendChild(img);
    }
}

function removeAttachmentIcon(event){
    const element = get(event.target.id);
    element.remove();    
}