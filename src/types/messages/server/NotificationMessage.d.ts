import Message from "./Message";

export default interface NotificationMessage extends Message {
	m: "notification";
	duration: number;
	title: string;
	target: string;
	text: string;
}
