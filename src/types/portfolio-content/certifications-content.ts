import { CertificationsProps } from "../../sections/certifications/Certifications";

const certificationsContent: CertificationsProps = {
    sectionTitle: 'Licenses & Certifications',
    certificateProps: {
        certificateMetaData: [
            {
                imageProps: {
                    height: 270,
                    width: 270,
                    source: process.env.PUBLIC_URL + '/img/azure-data-engineer-associate-600x600.png'
                },
                buttonProps: {
                    link: process.env.PUBLIC_URL + '/pdf/Microsoft Certified - Azure Data Engineer Associate.pdf',
                    name: 'Credential'
                },
                title: 'Microsoft Certified: Azure Data Engineer Associate'
            },
            {
                imageProps: {
                    height: 270,
                    width: 270,
                    source: process.env.PUBLIC_URL + '/img/azure-developer-associate-600x600.png'
                },
                buttonProps: {
                    link: process.env.PUBLIC_URL + '/pdf/Microsoft Azure Certified Developer - Associate.pdf',
                    name: 'Credential'
                },
                title: 'Microsoft Certified: Azure Developer Associate'
            },
            {
                imageProps: {
                    height: 200,
                    width: 200,
                    source: process.env.PUBLIC_URL + '/img/AWS-Developer-Associate-2020.png'
                },
                buttonProps: {
                    link: process.env.PUBLIC_URL + '/pdf/AWS Certified Developer - Associate certificate.pdf',
                    name: 'Credential'
                },
                title: 'AWS Certified: Developer Associate'
            }
        ]
    }
}

export default certificationsContent;