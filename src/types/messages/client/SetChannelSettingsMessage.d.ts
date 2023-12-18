import ChannelSettings from "../../ChanneSettings";
import Message from "./Message";

export default interface SetChannelSettingsMessage extends Message {
    m: "chset";

    set: ChannelSettings;
}
