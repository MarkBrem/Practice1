import { ItemStyled } from "./Event.styled"
import { ItemTitle } from "./Event.styled"
import { ItemText } from "./Event.styled"
import { SlPaperPlane } from "react-icons/sl";
export const Event = ({name, start, end, location, speaker, type})=>{
    return <ItemStyled >
        <ItemTitle>{name}</ItemTitle>
        <ItemText><SlPaperPlane />{location}</ItemText>
        <ItemText>{speaker}</ItemText>
        <ItemText>{start}</ItemText>
        <ItemText>{end}</ItemText>
        <span>{type}</span>
    </ItemStyled >
}
