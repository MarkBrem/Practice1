import { Event } from "Event/Event";
import { PageStyled } from "./PageBoard.styled";


export const PageBoard = ({events})=>{
    return <PageStyled>
        {events.map((event)=>{
            return <Event 
    name = {event.name}
    location={event.location}
    speaker={event.speaker}
    start={event.time.start}
    end={event.time.end}
    type={event.type}
     />
        })}
    </PageStyled> 
}