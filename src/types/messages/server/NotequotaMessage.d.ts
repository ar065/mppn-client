import Message from "../Message";

export default interface NotequotaMessage extends Message {
	m: "nq";

	maxHistLen: number;
	max: number;
	allowance: number;
}
