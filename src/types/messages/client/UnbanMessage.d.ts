import Message from "./Message";

export default interface UnbanMessage extends Message {
    m: "unban";

    _id: string;
}
