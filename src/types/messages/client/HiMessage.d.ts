import Message from "../Message";

export default interface HiMessage extends Message {
    m: "hi";

    token: string;

    login?: {
        type: string;
        code: string;
    }
}
