import BaseSectionProps from "../../types/base-section-props";
import Contact, { ContactProps } from "../../ui-components/contact/Contact";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import { ContactMeContainer, CopyRightContainer, CopyRightMessage } from "./styles";

export interface ContactMeProps extends BaseSectionProps {
    contactMetaData: ContactProps[]
}

const ContactMe = ({ sectionTitle, contactMetaData }: ContactMeProps) => {

    return (
        <Section id='contactme'>
                <SectionTitle content={sectionTitle} />
                <ContactMeContainer>
                    {contactMetaData && contactMetaData.map((item, index) => (
                        <div key={index}>
                            <Contact icon={item.icon} content={item.content} href={item.href} />
                        </div>
                    ))}
                </ContactMeContainer>
                <CopyRightContainer>
                    <CopyRightMessage>Built With ❤️ By Pranshu! © {new Date().getFullYear()}</CopyRightMessage>
                </CopyRightContainer>
        </Section>
    )
}

export default ContactMe;