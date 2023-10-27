import Message from "../Message";
import ChatMessage from "./ChatMessage";

export default interface ChatHistoryMessage extends Message {
	m: "c";

	c: Array<ChatMessage>;
}
