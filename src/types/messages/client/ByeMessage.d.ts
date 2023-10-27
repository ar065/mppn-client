import Message from "../Message";

export default interface ByeMessage extends Message {
	m: "bye";
}
