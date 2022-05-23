import { ContactContainer, ContactData } from "./styles";

export interface ContactProps {
    content: string;
    href: string;
    icon?: JSX.Element;
}

const Contact = ({ content, href, icon }: ContactProps) => {

    return (
        <ContactContainer>
            {icon}
            <ContactData>
                <a target='_blank' href={href}>{content}</a>
            </ContactData>
        </ContactContainer>
    )
}

export default Contact;