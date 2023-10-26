import ClientOptions from "../types/ClientOptions";
import { EventEmitter } from "eventemitter3";
import Message from "../types/messages/Message";

export default class Client extends EventEmitter {
	uri: string;
	socket: WebSocket | null;

	constructor(options: ClientOptions) {
		super();

		this.uri = options.uri;

		this.socket = null;
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
		const messages: Array<Message> = this.parseMessages(event.data);
		if (messages) {
			for (const message of messages) {
				switch (message.m) {
					case "hi":
						
						break;
				
					default:
						break;
				}
			}
		}
	}

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
