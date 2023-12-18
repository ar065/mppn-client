import Note from "../../Note";
import Message from "./Message";

export default interface NotesMessage extends Message {
    m: "n";

    t: number;
    n: Note[];
}
