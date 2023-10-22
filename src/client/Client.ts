import ClientOptions from "../types/ClientOptions";

// TODO: Emit events, duh!
export default class Client {
	uri: string;
	socket: WebSocket | null;

	constructor(options: ClientOptions) {
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
		const messages = this.parseMessages(event.data);
		if (messages) {
			messages.forEach((message) => {});
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
