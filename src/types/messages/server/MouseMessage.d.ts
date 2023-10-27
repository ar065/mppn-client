import Message from "./Message";

export default interface MouseMessage extends Message, Position {
	m: "m";
	id: string;
}
