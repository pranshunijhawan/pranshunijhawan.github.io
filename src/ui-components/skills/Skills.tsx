import { useState } from "react";
import IconType from "../../types/enums/IconTypes";
import Focus from "../animated/Focus";
import Slide from "../animated/Slide";
import Icon from "../icon/Icon";
import Skill, { SkillProps } from "./Skill";
import { DownIcon, SkillCategory, SkillsContainer, SkillsHeaderContainer } from "./styles";

export interface SkillsProps {
    category: string;
    skills: SkillProps[];
    icon: IconType;
}

const Skills = ({ category, skills, icon }: SkillsProps) => {

    const [isOpenState, setIsOpen] = useState(false);

    const handleAccordianClickEvent = () => {
        setIsOpen(!isOpenState);
    }

    return (
        <div onClick={handleAccordianClickEvent}>
           <SkillsHeaderContainer>
                <Icon iconType={icon} />
                <SkillCategory>{category}</SkillCategory>
                <DownIcon isOpen={isOpenState} />
            </SkillsHeaderContainer>
            <SkillsContainer isOpen={isOpenState}>
                {skills.map((item, index) => (
                            <Focus key={index}>
                                <Slide>
                                    <Skill name={item.name}
                                        percentage={item.percentage} />
                                </Slide>
                            </Focus>
                ))}
            </ SkillsContainer>
        </div>
    )
}

export default Skills;