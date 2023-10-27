import AccountInfo from "../../AccountInfo";
import Participant from "../../Participant";
import Message from "../Message";

export default interface HiMessage extends Message {
	m: "hi";

	t: number;

	u: Participant;

	permissions?: object;

	token?: string;

	accountInfo?: AccountInfo;
}
