import Participant from "../../Participant";
import Message from "../Message";

export default interface DirectMessage extends Message {
	m: "dm";

	id: string;
	t: number;
	a: string;
	sender: Participant;
	recipant: Participant;
}
