import Message from "./Message";

export default interface AntiBotMessage extends Message {
	m: "b";

	code: string;
}
