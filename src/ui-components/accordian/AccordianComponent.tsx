import { useState } from "react";
import Focus from "../animated/Focus";
import Bullet from "../Bullet";
import { AccordianContent, AccordianDescription, AccordianDescriptionContent, AccordianItem, AccordianTitle, AccordianTitleContainer, CrossIconContainer, PlusIcon } from "./styles";

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
        <AccordianItem key={id} onClick={handleAccordianClickEvent} isOpen={isOpenState}>
                    <AccordianTitleContainer>
                        <CrossIconContainer>
                            <PlusIcon isOpen={isOpenState}>+</PlusIcon>
                        </CrossIconContainer>
                        <div>
                            <AccordianTitle isOpen={isOpenState}>{title}</AccordianTitle>
                        </div>
                    </AccordianTitleContainer>
                    {isOpenState && <AccordianContent>
                        {content.map((desc, index) => (
                                    <Focus key={index}>
                                        <AccordianDescriptionContent>
                                            <Bullet color='var(--first-color)' />
                                            <AccordianDescription>{desc}</ AccordianDescription>
                                        </AccordianDescriptionContent>
                                    </Focus>
                        ))}
                    </AccordianContent>}
        </AccordianItem>
    )
}

export default AccordianComponent;