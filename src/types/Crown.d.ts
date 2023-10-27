import Position from "./Position";

export default interface Crown {
	startPos: Position;
	endPos: Position;
	userId: string;
	time: number;
	participantId: string;
}
