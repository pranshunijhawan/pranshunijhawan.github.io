import IconType from "../../types/enums/IconTypes"
import { BackEndIcon, CertificateRightIcon, CloudIcon, ContactIcon, DatabaseIcon, DataEngineeringIcon, DownloadIcon, EmailIcon, FrontEndIcon, LinkedInIcon, LocationIcon, PhoneIcon } from "./styles"

interface IconProps {
    iconType: IconType
}

const Icon = ({ iconType }: IconProps) => {

    switch(iconType) {
        case IconType.Frontend:
            return <FrontEndIcon />
        case IconType.Backend:
            return <BackEndIcon />
        case IconType.Database:
            return <DatabaseIcon />
        case IconType.Cloud:
            return <CloudIcon />
        case IconType.DataEngineering:
            return <DataEngineeringIcon />
        case IconType.Phone:
            return <PhoneIcon />
        case IconType.Email:
            return <EmailIcon />
        case IconType.Location:
            return <LocationIcon />
        case IconType.LinkedIn:
            return <LinkedInIcon />
        case IconType.Contact:
            return <ContactIcon />
        case IconType.CertificateRightIcon:
            return <CertificateRightIcon />
        case IconType.Download:
            return <DownloadIcon />
    }

    return null;
}

export default Icon