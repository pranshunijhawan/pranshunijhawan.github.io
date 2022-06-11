import BaseSectionProps from "../../types/base-section-props";
import Slide from "../../ui-components/animated/Slide";
import Certificate, { CertificateProps } from "../../ui-components/certificate/Certificate";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import { CertificationsContainer } from "./styles";

export interface CertificationsProps extends BaseSectionProps {
    certificateProps: CertificateProps;
}

const Certifications = ({ sectionTitle, certificateProps }: CertificationsProps) => {

    return (
        <Section id='certifications'>
                <SectionTitle content={sectionTitle} />
                <Slide>
                    <CertificationsContainer>
                        <Certificate certificateMetaData={certificateProps.certificateMetaData} />
                    </CertificationsContainer>
                </Slide>
        </Section>
    )
}

export default Certifications;