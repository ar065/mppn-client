import ByeMessage from "../../types/messages/server/ByeMessage";
import MessageHandler from "../MessageHandler";

export default function handleByeMessage(
	messageHandler: MessageHandler,
	message: ByeMessage,
) {
	// TODO
	const participant = message.p;
}
