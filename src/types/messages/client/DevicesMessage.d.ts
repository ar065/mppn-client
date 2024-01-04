import DeviceInfo from "../../DevicesInfo";
import Message from "../Message";

export default interface DevicesMessage extends Message {
    m: "devices";

    list: DeviceInfo[];
}
