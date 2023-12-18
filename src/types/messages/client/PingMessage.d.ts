import Message from "./Message";

export default interface PingMessage extends Message {
    m: "t";

    t: number;
}
