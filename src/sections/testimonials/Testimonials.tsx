import BaseSectionProps from "../../types/base-section-props";
import Slide from "../../ui-components/animated/Slide";
import Quote, { QuoteProps } from "../../ui-components/quote/Quote";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import { TestimonialsContainer } from "./styles";

export interface TestimonialProps extends BaseSectionProps {
    quoteProps: QuoteProps
}

const Testimonials = ({ sectionTitle, quoteProps }: TestimonialProps) => {

    return (
        <Section id='testimonials'>
                <SectionTitle content={sectionTitle} />
                <Slide>
                    <TestimonialsContainer>
                        <Quote quoteMetaData={quoteProps.quoteMetaData} />
                    </TestimonialsContainer>
                </Slide>
        </Section>
    )
}

export default Testimonials;