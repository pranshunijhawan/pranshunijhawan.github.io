import BaseSectionProps from "../../types/base-section-props";
import IconType from "../../types/enums/IconTypes";
import Focus from "../../ui-components/animated/Focus";
import Slide from "../../ui-components/animated/Slide";
import Contact, { ContactProps } from "../../ui-components/contact/Contact";
import Icon from "../../ui-components/icon/Icon";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import { ContactMeContainer, CopyRightContainer, CopyRightMessage, FlexContainer, HeartIconContainer } from "./styles";

export interface ContactMeProps extends BaseSectionProps {
    contactMetaData: ContactProps[]
}

const ContactMe = ({ sectionTitle, contactMetaData }: ContactMeProps) => {

    return (
        <Section id='contactme'>
                <SectionTitle content={sectionTitle} />
                <ContactMeContainer>
                    {contactMetaData && contactMetaData.map((item, index) => (
                        <Slide key={index}>
                            <Contact icon={item.icon} content={item.content} href={item.href} />
                        </Slide>
                    ))}
                </ContactMeContainer>
                <CopyRightContainer>
                    <FlexContainer>
                        <Focus><CopyRightMessage>Designed & Built With </CopyRightMessage></Focus>
                        <Focus><HeartIconContainer><Icon iconType={IconType.Heart} /></HeartIconContainer></Focus>
                        <Focus><CopyRightMessage> By Pranshu! © {new Date().getFullYear()}</CopyRightMessage></Focus>
                    </FlexContainer>
                </CopyRightContainer>
        </Section>
    )
}

export default ContactMe;