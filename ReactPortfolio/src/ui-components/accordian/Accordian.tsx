import { AccordianContainer } from "./styles";
import AccordianComponent, { AccordianComponentProps } from './AccordianComponent';

export interface AccordianProps {
    content: AccordianComponentProps[];
}

const Accordian = ({ content }: AccordianProps) => {
    
    return (
        <AccordianContainer>
            {content.map((item, index) => (
                <AccordianComponent id={item.id} content={item.content} title={item.title} key={index} />
            ))}
        </AccordianContainer>
    )
}

export default Accordian;