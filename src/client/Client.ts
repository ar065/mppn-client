import { EventEmitter } from "eventemitter3";
import AccountInfo from "../types/AccountInfo";
import ChannelInfo from "../types/ChannelInfo";
import ClientOptions from "../types/ClientOptions";
import Participant from "../types/Participant";
import ServerMessage from "../types/messages/server/SevrverMessage";
import MessageHandler from "./MessageHandler";

export default class Client extends EventEmitter {
	uri: string;
	token: string | undefined;
	socket: WebSocket | null;

	accountInfo: AccountInfo | null;
	permissions: object | null;
	participant: Participant | null;
	connectedAt: number | null;
	channel: ChannelInfo | null;

	messageHandler: MessageHandler;

	constructor(options: ClientOptions) {
		super();

		this.uri = options.uri;
		this.token = options.token;

		this.socket = null;

		this.permissions = null;
		this.accountInfo = null;
		this.participant = null;
		this.connectedAt = null;
		this.channel = null;

		this.messageHandler = new MessageHandler(this);
	}

	private parseMessages(data: string) {
		try {
			return JSON.parse(data);
		} catch (error) {
			return false;
		}
	}

	private onopen() {}
	private onclose() {}
	private onerror() {}

	private onmessage(event: MessageEvent) {
		const messages: Array<ServerMessage> = this.parseMessages(event.data);
		if (messages) {
			this.messageHandler.handleMessages(messages);
		} else {
			this.emit("parsingError", event.data);
		}
	}

	setParticipants(participants: Array<Participant>) {}

	start() {
		if (!this.socket) {
			this.socket = new WebSocket(this.uri);
			this.socket.binaryType = "arraybuffer";
			this.socket.onopen = this.onopen;
			this.socket.onclose = this.onclose;
			this.socket.onerror = this.onerror;
			this.socket.onmessage = this.onmessage;
		}
	}
}
