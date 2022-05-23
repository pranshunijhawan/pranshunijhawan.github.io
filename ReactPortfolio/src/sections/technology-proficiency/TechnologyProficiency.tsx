import BaseSectionProps from "../../types/base-section-props";
import Motion from "../../ui-components/Motion";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import Skills, { SkillsProps } from "../../ui-components/skills/Skills";
import { SkillsContainer } from "./styles";

export interface TechnologyProficiencyProps extends BaseSectionProps {
    skills: SkillsProps[];
}

const TechnologyProficiencyProps = ({ sectionTitle, skills }: TechnologyProficiencyProps) => {
    return (
        <Motion>
            <Section id='technologyproficiency'>
                <SectionTitle content={sectionTitle} />
                <SkillsContainer>
                {skills.map((item, index) => (
                            <Skills category={item.category} skills={item.skills} icon={item.icon} key={index} />
                        ))}
                </SkillsContainer>
            </Section>
        </Motion>
    )
}

export default TechnologyProficiencyProps;