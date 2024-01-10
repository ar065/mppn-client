import Participant from "../../Participant";
import Message from "../Message";

export default interface ParticipantUpdateMessage extends Message, Participant {
	m: "p";
}
