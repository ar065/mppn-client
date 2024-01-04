import Message from "../Message";

export default interface CustomMessage extends Message {
    m: "custom";

    data: unknown;

    target: {
        global?: boolean;
        mode: "subscribed" | "id" | "ids";
        id?: string;
        ids?: string[];
    }
}
