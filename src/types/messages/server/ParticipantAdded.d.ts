import Participant from "../../Participant";
import Message from "./Message";

export default interface ParticipantAdded extends Message, Participant {
	m: "p";
}
