import Storage from "../Storage";
import ClientHiMessage from "../types/messages/client/HiMessage";
import AntiBotMessage from "../types/messages/server/AntibotMessage";
import ByeMessage from "../types/messages/server/ByeMessage";
import ChannelInfoMessage from "../types/messages/server/ChannelInfoMessage";
import ServerHiMessage from "../types/messages/server/HiMessage";
import MouseMessage from "../types/messages/server/MouseMessage";
import ParticipantUpdateMessage from "../types/messages/server/ParticipantUpdateMessage";
import PongMessage from "../types/messages/server/PongMessage";
import ServerMessage from "../types/messages/server/SevrverMessage";
import Client from "./Client";
import handleAntiBotMessage from "./messages/antiBot";
import handleChannelInfoMessage from "./messages/channelInfo";
import handleHiMessage from "./messages/hi";
import handlePongMessage from "./messages/pong";

export default class MessageHandler {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	handleMessages(messages: ServerMessage[]) {
		for (const message of messages) {
			const m = message.m;
			if (m === "hi") return handleHiMessage(this, message);
			if (m === "t") return handlePongMessage(this, message);
			if (m === "ch") return handleChannelInfoMessage(this, message);
			if (m === "b") return handleAntiBotMessage(this, message);

			this.client.emit("unsupportedMessageType", message);
			// switch (message.m) {
			// 	case "hi":
			// 		handleHiMessage(this, message);
			// 		break;
			// 	case "t":
			// 		handlePongMessage(this, message);
			// 		break;
			// 	case "ch":
			// 		handleChannelInfoMessage(this, message);
			// 		break;
			// 	case "b":
			// 		handleAntiBotMessage(this, message);
			// 		break;
			// 	default:
			// 		this.client.emit("unsupportedMessageType", message);
			// 		break;
			// }
		}
	}
}
