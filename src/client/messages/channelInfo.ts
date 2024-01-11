import ChannelInfoMessage from "../../types/messages/server/ChannelInfoMessage";
import MessageHandler from "../MessageHandler";

export default function handleChannelInfoMessage(
	messageHandler: MessageHandler,
	message: ChannelInfoMessage,
) {
	const client = messageHandler.client;

	client.channel = message.ch;

	if (message.p) {
		if (!client.participant) {
			client.emit("error", "Client participant does not exist.");
			return;
		}

		client.participant.id = message.p;
	}

	client.setParticipants(message.ppl);
}
