import Message from "../Message";

export default interface UnsubscribeFromCustomMessage extends Message {
    m: "-custom";
}
