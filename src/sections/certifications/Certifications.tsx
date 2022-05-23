import BaseSectionProps from "../../types/base-section-props";
import Certificate, { CertificateProps } from "../../ui-components/certificate/Certificate";
import Motion from "../../ui-components/Motion";
import { Section } from "../../ui-components/Section";
import SectionTitle from "../../ui-components/SectionTitle";
import { CertificationsContainer } from "./styles";

export interface CertificationsProps extends BaseSectionProps {
    certificateProps: CertificateProps;
}

const Certifications = ({ sectionTitle, certificateProps }: CertificationsProps) => {

    return (
        <Motion>
            <Section id='certifications'>
                <SectionTitle content={sectionTitle} />
                <CertificationsContainer>
                    <Certificate certificateMetaData={certificateProps.certificateMetaData} />
                </CertificationsContainer>
            </Section>
        </Motion>
    )
}

export default Certifications;