import ChannelSettings from "../../ChanneSettings";
import Message from "../Message";

export default interface ChangeChannelMessage extends Message {
	m: "ch";
	_id: string;
	set: ChannelSettings;
}
