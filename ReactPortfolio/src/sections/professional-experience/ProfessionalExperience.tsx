import Slide from "../../ui-components/animated/Slide";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import Timeline, { TimelineProps } from "../../ui-components/timeline/Timeline";

export interface ProfessionalExperienceProps {
    title: string;
    timeline: TimelineProps[]
}

const ProfessionalExperience = ({ title, timeline }: ProfessionalExperienceProps) => {
    return (
        <Section id="professionalexperience">
                <SectionTitle content={title} />
                {timeline.map((item, index) => (
                    <Slide>
                        <Timeline title={item.title} subTitle={item.subTitle} date={item.date} description={item.description} key={index} last={item.last} />
                    </Slide>
                ))}
        </Section>
    )
}

export default ProfessionalExperience;