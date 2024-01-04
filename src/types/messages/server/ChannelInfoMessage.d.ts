import ChannelInfo from "../../ChannelInfo";
import Participant from "../../Participant";
import Message from "../Message";

export default interface ChannelInfoMessage extends Message {
	m: "ch";

	ch: ChannelInfo;
	ppl: Participant[];

	p?: string;
}
