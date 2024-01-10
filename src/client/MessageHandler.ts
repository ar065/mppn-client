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

export default class MessageHandler {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	private handleHiMessage(message: ServerHiMessage) {
		/* 
		TODO: 
			- Receive server time (`message.t`)
			- Set client to proper channel if they have a channel already set to go to
		*/

		this.client.participant = message.u;
		this.client.connectedAt = Date.now();

		if (message.accountInfo) this.client.accountInfo = message.accountInfo;
		if (message.permissions) this.client.permissions = message.permissions;
		if (message.token) {
			this.client.token = message.token;
			Storage.set("token", message.token);
		}
	}

	// TODO
	private handlePongMessage(message: PongMessage) {
		// NOTE: Receive server time in here
		const time = message.t;
		const echo = message.e;
	}

	private handleChannelInfoMessage(message: ChannelInfoMessage) {
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

	// TODO
	private handleParticipantUpdateMessage(message: ParticipantUpdateMessage) {
		// message.
	}

	// TODO
	private handleMouseMessage(message: MouseMessage) {
		const x = message.x;
		const y = message.y;
		const id = message.id;
	}

	// TODO
	private handleByeMessage(message: ByeMessage) {
		const participant = message.p;
	}

	private handleAntiBotMessage(message: AntiBotMessage) {
		const code = message.code;

		const token = Storage.get("token");
		const loginInfo = this.client.loginInfo;

		// let hiMessage = { m: "hi" }

		// if (loginInfo) {
		// 	hiMessage.login = loginInfo;
		// }
		// this.client.loginInfo = {}; // Reset

		// try {
		// 	if (code.startsWith('~')) {
		// 		hiMessage.code = Function(code.substring(1))();
		// 	} else {
		// 		hiMessage.code = Function(code)();
		// 	}
		// } catch (error) {
		// 	hiMessage.code = "broken";
		// }

		// if (token) hiMessage.token = token;
	}

	handleMessages(messages: Array<ServerMessage>) {
		for (const message of messages) {
			switch (message.m) {
				case "hi":
					this.handleHiMessage(message);
					break;
				case "ch":
					this.handleChannelInfoMessage(message);
					break;
				case "b":
					this.handleAntiBotMessage(message);
					break;
				default:
					this.client.emit("unsupportedMessageType", message);
					break;
			}
		}
	}
}
