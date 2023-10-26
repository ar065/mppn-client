import AccountInfo from "../AccountInfo";
import Message from "./Message";

export default interface Hi extends Message {
    m: "hi"

    t: number

    u: object
    permissions: object // TODO: Permissions type?

    token?: string
    
    accountInfo?: AccountInfo
}