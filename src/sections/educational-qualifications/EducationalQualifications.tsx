import Slide from "../../ui-components/animated/Slide";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import Timeline, { TimelineProps } from "../../ui-components/timeline/Timeline";

export interface EducationalQualificationsProps {
    title: string;
    timeline: TimelineProps[]
}

const EducationalQualifications = ({ title, timeline }: EducationalQualificationsProps) => {
    return (
        <Section id="educationalqualifications">
                <SectionTitle content={title} />
                {timeline.map((item, index) => (
                    <Slide key={index}>
                        <Timeline title={item.title} subTitle={item.subTitle} date={item.date} description={item.description} last={item.last} />
                    </Slide>
                ))}
        </Section>
    )
}

export default EducationalQualifications;