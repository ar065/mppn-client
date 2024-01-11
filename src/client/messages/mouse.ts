import MouseMessage from "../../types/messages/server/MouseMessage";
import MessageHandler from "../MessageHandler";

export default function handleMouseMessage(
	messageHandler: MessageHandler,
	message: MouseMessage,
) {
	// TODO
	const x = message.x;
	const y = message.y;
	const id = message.id;
}
