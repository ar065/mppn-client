import Storage from "../../Storage";
import AntiBotMessage from "../../types/messages/server/AntibotMessage";
import MessageHandler from "../MessageHandler";

export default function handleAntiBotMessage(
	messageHandler: MessageHandler,
	message: AntiBotMessage,
) {
	const code = message.code;

	//? Eventually this won't have to be here since we will be using a httpOnly cookie (hopefully...)
	const token = Storage.get("token");

	const loginInfo = messageHandler.client.loginInfo;

	// TODO:
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
