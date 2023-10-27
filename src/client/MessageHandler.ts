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

	#handleChannelInfo(message: ChannelInfoMessage) {
		this.client.channel = message.ch;

		if (message.p) {
			if (!this.client.participant) {
				this.client.emit(
					"error",
					"Somehow the client's participant does not exist!",
				);
				return;
			}

			this.client.participant.id = message.p;
		}

		this.client.setParticipants(message.ppl);
	}

	handleMessages(messages: Array<ServerMessage>) {
		for (const message of messages) {
			switch (message.m) {
				case "hi":
					this.#handleHi(message);
					break;
				case "ch":
					this.#handleChannelInfo(message);
					break;
				default:
					this.client.emit("unsupportedMessageType", message);
					break;
			}
		}
	}
}
