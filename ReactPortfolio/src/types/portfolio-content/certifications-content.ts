import { CertificationsProps } from "../../sections/certifications/Certifications";

const certificationsContent: CertificationsProps = {
    sectionTitle: 'Certifications',
    certificateProps: {
        certificateMetaData: [
            {
                imageProps: {
                    height: 270,
                    width: 270,
                    source: process.env.PUBLIC_URL + '/img/azure-developer-associate-600x600.png'
                },
                buttonProps: {
                    link: process.env.PUBLIC_URL + '/pdf/Microsoft Azure Certified Developer - Associate.pdf',
                    name: 'View'
                },
                title: 'Microsoft Azure Certified Developer - Associate'
            },
            {
                imageProps: {
                    height: 270,
                    width: 270,
                    source: process.env.PUBLIC_URL + '/img/AWS-Developer-Associate-2020.png'
                },
                buttonProps: {
                    link: process.env.PUBLIC_URL + '/pdf/AWS Certified Developer - Associate certificate.pdf',
                    name: 'View'
                },
                title: 'AWS Certified Developer - Associate'
            }
        ]
    }
}

export default certificationsContent;