import ChannelInfoMessage from "../types/messages/server/ChannelInfoMessage";
import HiMessage from "../types/messages/server/HiMessage";
import ServerMessage from "../types/messages/server/SevrverMessage";
import Client from "./Client";

export default class MessageHandler {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	#handleHi(message: HiMessage) {
		this.client.participant = message.u;
		this.client.connectedAt = message.t;

		if (message.accountInfo) this.client.accountInfo = message.accountInfo;
		if (message.permissions) this.client.permissions = message.permissions;
		if (message.token) this.client.token = message.token;
	}

	#handleChannelInfo(message: ChannelInfoMessage) {}

	handleMessages(messages: Array<ServerMessage>) {
		for (const message of messages) {
			switch (message.m) {
				case "hi":
					this.#handleHi(message);
					break;
				default:
					this.client.emit("unsupportedMessageType", message);
					break;
			}
		}
	}
}
