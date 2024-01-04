import Message from "../Message";

export default interface CustomMessage extends Message {
	m: "custom";

	data: unknown;
	p: string;
}
