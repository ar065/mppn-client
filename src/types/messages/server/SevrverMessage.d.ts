import AntiBotMessage from "./AntibotMessage";
import ByeMessage from "./ByeMessage";
import ChannelInfoMessage from "./ChannelInfoMessage";
import ChatHistoryMessage from "./ChatHistoryMessage";
import ChatMessage from "./ChatMessage";
import CustomMessage from "./CustomMessage";
import DirectMessage from "./DirectMessage";
import HiMessage from "./HiMessage";
import MouseMessage from "./MouseMessage";
import NoteMessage from "./NoteMessage";
import NotequotaMessage from "./NotequotaMessage";
import NotificationMessage from "./NotificationMessage";
import ParticipantAdded from "./ParticipantAdded";
import PongMessage from "./PongMessage";
import RoomListMessage from "./RoomListMessage";

type ServerMessage =
	| AntiBotMessage
	| ByeMessage
	| ChannelInfoMessage
	| ChatHistoryMessage
	| ChatMessage
	| CustomMessage
	| DirectMessage
	| HiMessage
	| MouseMessage
	| NoteMessage
	| NotequotaMessage
	| NotificationMessage
	| ParticipantAdded
	| PongMessage
	| RoomListMessage;

export default ServerMessage;
