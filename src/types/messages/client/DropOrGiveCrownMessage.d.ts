import Message from "./Message";

export default interface DropOrGiveCrownMessage extends Message {
    m: "chown";

    id?: string;
}
