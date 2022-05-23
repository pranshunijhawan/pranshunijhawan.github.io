import { useState } from "react";
import Bullet from "../Bullet";
import { AccordianContent, AccordianDescription, AccordianItem, AccordianTitle } from "./styles";

export interface AccordianComponentProps {
    id: number;
    title: string;
    content: string[];
}

const AccordianComponent = ({ id, title, content }: AccordianComponentProps) => {

    const [isOpenState, setIsOpen] = useState(false);

    const handleAccordianClickEvent = () => {
        setIsOpen(!isOpenState);
    }
    
    return (
        <AccordianItem key={id} onClick={handleAccordianClickEvent}>
                    <AccordianTitle>{title}</AccordianTitle>
                    <AccordianContent isOpen={isOpenState}>
                        {content.map((desc, index) => (
                                    
                                    <AccordianDescription key={index}><Bullet color='var(--first-color)' />  {desc}</ AccordianDescription>
                        ))}
                    </AccordianContent>
        </AccordianItem>
    )
}

export default AccordianComponent;