import Motion from "../../ui-components/Motion";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import Timeline, { TimelineProps } from "../../ui-components/timeline/Timeline";

export interface ProfessionalExperienceProps {
    title: string;
    timeline: TimelineProps[]
}

const ProfessionalExperience = ({ title, timeline }: ProfessionalExperienceProps) => {
    return (
        <Motion>
            <Section id="professionalexperience">
                <SectionTitle content={title} />
                {timeline.map((item, index) => (
                    <Timeline title={item.title} subTitle={item.subTitle} date={item.date} description={item.description} key={index} last={item.last} />
                ))}
            </Section>
        </Motion>
    )
}

export default ProfessionalExperience;