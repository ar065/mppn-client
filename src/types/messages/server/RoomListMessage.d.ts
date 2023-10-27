import ChannelInfo from "../../ChannelInfo";
import Message from "./Message";

export default interface RoomListMessage extends Message {
	m: "ls";

	c: boolean;
	u: Array<ChannelInfo>;
}
