import Message from "../Message";

export default interface DirectMessage extends Message {
    m: "dm";

    message: string;
    _id: string;
    reply_to: string;
}
