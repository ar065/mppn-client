import Note from "../../Note";
import Message from "./Message";

export default interface NoteMessage extends Message {
	m: "n";
	t: number;

	n: Array<Note>;
	p: string;
}
