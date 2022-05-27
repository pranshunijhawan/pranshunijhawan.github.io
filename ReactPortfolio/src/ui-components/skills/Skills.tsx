import { useState } from "react";
import Skill, { SkillProps } from "./Skill";
import { DownIcon, SkillCategory, SkillsContainer, SkillsHeaderContainer } from "./styles";

export interface SkillsProps {
    category: string;
    skills: SkillProps[];
    icon?: JSX.Element;
}

const Skills = ({ category, skills, icon }: SkillsProps) => {

    const [isOpenState, setIsOpen] = useState(false);

    const handleAccordianClickEvent = () => {
        setIsOpen(!isOpenState);
    }

    return (
        <div onClick={handleAccordianClickEvent}>
           <SkillsHeaderContainer>
                {icon}
                <SkillCategory>{category}</SkillCategory>
                <DownIcon isOpen={isOpenState} />
            </SkillsHeaderContainer>
            <SkillsContainer isOpen={isOpenState}>
                {skills.map((item, index) => (
                            <Skill name={item.name}
                            percentage={item.percentage} key={index} />
                ))}
            </ SkillsContainer>
        </div>
    )
}

export default Skills;