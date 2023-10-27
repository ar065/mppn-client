import Crown from "./Crown";
import Participant from "./Participant";

export default interface ChannelInfo {
	settings: {
		chat: string;
		color: string;
		color2: string;
		visible: boolean;
		limit: string;
		crownsolo: boolean;
		"no cussing": boolean;
		minOnlineTime: number;
	};

	_id: string;
	id: string;
	count: number;

	crown: Crown;

	ppl: Array<Participant>;
}
