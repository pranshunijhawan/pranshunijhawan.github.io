import { AboutSectionProps } from "../../sections/about/About";

const aboutSectionContent: AboutSectionProps = {
    sectionTitle: 'About Me',
    content: [
        'A Dynamic IT Professional responsible for assisting in the establishment of an IT Architecture practice, and the adoption of an architecture and standard methodology.',
        'Passionate about designing highly stable and scalable Software Solutions that transcend high performance ranging from traditional Mobile, Web to IoT Management System.',
        'If you stick till the end of this page, you can have a glimpse of what I\'m most proud of, the skills I possess and the Experience I hold.',
        'Note: This is just a glimpse, I\'m constantly improving and evolving! 👨‍💻'
    ],
    buttonProps: {
        link: process.env.PUBLIC_URL + '/pdf/Resume, Pranshu Nijhawan.pdf',
        name: 'Download Resume'
    }
}

export default aboutSectionContent;