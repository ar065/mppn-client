import Message from "../Message";

export default interface SubscribeToRoomlist extends Message {
    m: "+ls";
}
