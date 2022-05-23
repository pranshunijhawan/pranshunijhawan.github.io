import { HomeSectionProps } from "../../sections/home/Home";

const homeSectionProps: HomeSectionProps = {
    name: 'Pranshu',
    designation: 'Full Stack Developer & Cloud SME',
    headline: 'I am an Experienced Full-Stack Developer and Cloud SME with High-Level Proficiency and Experience in Spearheading the Planning, Design, Development, Implementation and Management of complex software solutions.',
    buttonProps: {
        link: 'https://www.pranshunijhawan.dev/assets/pdf/Resume%2C%20Pranshu%20Nijhawan.pdf',
        name: 'Contact Me'
    },
    imageProps: {
        height: 150,
        width: 150,
        source: process.env.PUBLIC_URL + '/img/PN-logo-Fav-Icon.png'
    }
}

export default homeSectionProps;