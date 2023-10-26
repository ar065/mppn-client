import Tag from "./Tag"

export default interface Participant {
    id: string
    _id: string
    name: string
    color: string
    x: string | number
    y: string | number

    afk: boolean

    tag?: Tag
    vanished?: boolean
}