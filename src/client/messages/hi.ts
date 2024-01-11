import Storage from "../../Storage";
import HiMessage from "../../types/messages/server/HiMessage";
import MessageHandler from "../MessageHandler";

export default function handleHiMessage(
	messageHandler: MessageHandler,
	message: HiMessage,
) {
	/* 
    TODO: Receive server time (`message.t`)
	TODO: Set client to proper channel if they have a channel already set to go to
    */
	const client = messageHandler.client;

	client.participant = message.u;
	client.connectedAt = Date.now();

	if (message.accountInfo) client.accountInfo = message.accountInfo;
	if (message.permissions) client.permissions = message.permissions;
	if (message.token) {
		client.token = message.token;

		/* 
        TODO: This should be done via httpOnly cookies instead, and requires a server update to work.
        */
		Storage.set("token", message.token);
	}
}
