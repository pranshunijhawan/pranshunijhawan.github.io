import BaseSectionProps from "../../types/base-section-props";
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
                <TestimonialsContainer>
                    <Quote quoteMetaData={quoteProps.quoteMetaData} />
                </TestimonialsContainer>
        </Section>
    )
}

export default Testimonials;