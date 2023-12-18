import Message from "./Message";

export default interface PongMessage extends Message {
	m: "t";

	t: number;

	e?: number;
}
