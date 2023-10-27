import ChannelInfo from "../../ChannelInfo";
import Message from "../Message";

export default interface ChannelInfoMessage extends Message {
	m: "ch";

	ch: ChannelInfo;
}
