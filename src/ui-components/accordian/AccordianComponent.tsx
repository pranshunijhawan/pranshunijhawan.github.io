import { useState } from "react";
import Focus from "../animated/Focus";
import Bullet from "../Bullet";
import { AccordianContent, AccordianDescription, AccordianDescriptionContent, AccordianItem, AccordianTitle } from "./styles";

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
                                    <Focus key={index}>
                                        <AccordianDescriptionContent>
                                            <Bullet color='var(--first-color)' />
                                            <AccordianDescription>{desc}</ AccordianDescription>
                                        </AccordianDescriptionContent>
                                    </Focus>
                        ))}
                    </AccordianContent>
        </AccordianItem>
    )
}

export default AccordianComponent;