import Message from "../Message";

export default interface ChatMessage extends Message {
	m: "a";

	message: string;

	reply_to?: string;
}
