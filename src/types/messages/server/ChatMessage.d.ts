import Participant from "../../Participant";
import Message from "../Message";

export default interface ChatMessage extends Message {
	m: "a";

	id: string;
	t: number;
	a: string;
	p: Participant;

	r?: string;
}
