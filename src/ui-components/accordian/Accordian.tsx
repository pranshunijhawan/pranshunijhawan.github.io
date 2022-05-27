import { AccordianContainer } from "./styles";
import AccordianComponent, { AccordianComponentProps } from './AccordianComponent';
import Scale from "../animated/Scale";

export interface AccordianProps {
    content: AccordianComponentProps[];
}

const Accordian = ({ content }: AccordianProps) => {
    
    return (
        <AccordianContainer>
            {content.map((item, index) => (
                <Scale><AccordianComponent id={item.id} content={item.content} title={item.title} key={index} /></Scale>
            ))}
        </AccordianContainer>
    )
}

export default Accordian;