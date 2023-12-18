import Message from "../Message";

export default interface KickbanMessage extends Message {
    m: "kickban";

    _id: string;
    ms: number;
}
