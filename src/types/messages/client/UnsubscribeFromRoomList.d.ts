import Message from "../Message";

export default interface UnsubscribeFromRoomList extends Message {
    m: "-ls";
}
