import IconType from "../../types/enums/IconTypes"
import { BackEndIcon, CalendarIcon, CertificateRightIcon, CloudIcon, ContactIcon, DatabaseIcon, DataEngineeringIcon, DownloadIcon, EmailIcon, FrontEndIcon, HeartIcon, LinkedInIcon, LocationIcon, NavigationAbout, NavigationCertifications, NavigationContact, NavigationEducationalQualifications, NavigationProfessionalExperience, NavigationTechnologyProficiency, NavigationTestimonials, PhoneIcon } from "./styles"

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
        case IconType.Calendar:
            return <CalendarIcon />
        case IconType.Heart:
            return <HeartIcon />
        case IconType.NavigationAbout:
            return <NavigationAbout />
        case IconType.NavigationTechnologyProficiency:
            return <NavigationTechnologyProficiency />
        case IconType.NavigationEducationalQualifications:
            return <NavigationEducationalQualifications />
        case IconType.NavigationProfessionalExperience:
            return <NavigationProfessionalExperience />
        case IconType.NavigationCertifications:
            return <NavigationCertifications />
        case IconType.NavigationTestimonials:
            return <NavigationTestimonials />
        case IconType.NavigationContact:
            return <NavigationContact />
    }

    return null;
}

export default Icon