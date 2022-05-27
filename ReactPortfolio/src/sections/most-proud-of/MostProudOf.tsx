import BaseSectionProps from "../../types/base-section-props";
import Accordian from "../../ui-components/accordian/Accordian";
import { AccordianComponentProps } from "../../ui-components/accordian/AccordianComponent";
import Slide from "../../ui-components/animated/Slide";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import { MostProudOfContainer } from "./styles";

export interface MostProudOfProps extends BaseSectionProps {
    content: AccordianComponentProps[];
}

const MostProudOf = ({ sectionTitle, content }: MostProudOfProps) => {
    return (
        <Section id='mostproudof'>
                <SectionTitle content={sectionTitle} />
                <Slide>
                    <MostProudOfContainer>
                        <Accordian content={content} />
                    </MostProudOfContainer>
                </Slide>
        </Section>
    )
}

export default MostProudOf;