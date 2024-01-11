import PongMessage from "../../types/messages/server/PongMessage";
import MessageHandler from "../MessageHandler";

export default function handlePongMessage(
	messageHandler: MessageHandler,
	message: PongMessage,
) {
	// TODO: Receive server time
	const time = message.t;
	const echo = message.e;
}
