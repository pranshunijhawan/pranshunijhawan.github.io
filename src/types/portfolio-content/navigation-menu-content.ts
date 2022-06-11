import { NavigationMenuProps } from "../../sections/header/NavigationMenu";
import IconType from "../enums/IconTypes";

const navigationMenuContent: NavigationMenuProps = {
    navigationMenus: [
        {
            iconType: IconType.NavigationAbout,
            href: '#about'
        },
        {
            iconType: IconType.NavigationTechnologyProficiency,
            href: '#technologyproficiency'
        },
        {
            iconType: IconType.NavigationEducationalQualifications,
            href: '#educationalqualifications'
        },
        {
            iconType: IconType.NavigationProfessionalExperience,
            href: '#professionalexperience'
        },
        {
            iconType: IconType.NavigationCertifications,
            href: '#certifications'
        },
        {
            iconType: IconType.NavigationTestimonials,
            href: '#testimonials'
        },
        {
            iconType: IconType.NavigationContact,
            href: '#contactme'
        }
    ]
}

export default navigationMenuContent;