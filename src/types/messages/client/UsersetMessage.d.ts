import Message from "./Message";

export default interface UsersetMessage extends Message {
    m: "userset";

    set: {
        name?: string;
        color?: string;
    }
}
