import { ContactMeProps } from "../../sections/contact-me/ContactMe";
import IconType from "../enums/IconTypes";

const contactMeContent: ContactMeProps = {
    sectionTitle: 'Contact Me',
    contactMetaData: [
        {
            icon: IconType.Phone,
            content: '+91-9999966272',
            href: 'tel:+91-9999966272'
        },
        {
            icon: IconType.Email,
            content: 'mail@pranshunijhawan.dev',
            href: 'mailto:mail@pranshunijhawan.dev'
        },
        {
            icon: IconType.Location,
            content: 'Gurgaon, Haryana. India',
            href: 'http://maps.google.com/?q=Gurgaon, Haryana. India'
        },
        {
            icon: IconType.LinkedIn,
            content: '@pranshunijhawan',
            href: 'https://www.linkedin.com/in/pranshunijhawan/'
        }
    ]
}

export default contactMeContent;