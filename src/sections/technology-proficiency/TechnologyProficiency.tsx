import BaseSectionProps from "../../types/base-section-props";
import Slide from "../../ui-components/animated/Slide";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import Skills, { SkillsProps } from "../../ui-components/skills/Skills";
import { SkillsContainer } from "./styles";

export interface TechnologyProficiencyProps extends BaseSectionProps {
    skills: SkillsProps[];
}

const TechnologyProficiencyProps = ({ sectionTitle, skills }: TechnologyProficiencyProps) => {
    return (
        <Section id='technologyproficiency'>
                <SectionTitle content={sectionTitle} />
                <SkillsContainer>
                {skills.map((item, index) => (
                            <Slide key={index}><Skills category={item.category} skills={item.skills} icon={item.icon} /></Slide>
                        ))}
                </SkillsContainer>
        </Section>
    )
}

export default TechnologyProficiencyProps;