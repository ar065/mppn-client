import Message from "../Message";

export default interface SubscribeToCustomMessage extends Message {
    m: "+custom";
}
