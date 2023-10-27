import Position from "./Position";
import Tag from "./Tag";

export default interface Participant extends Position {
	id?: string;
	_id: string;
	name: string;
	color: string;

	afk: boolean;

	tag?: Tag;
	vanished?: boolean;

	// Og server
	codename?: string;
	motd?: string;
	v?: string;
}
