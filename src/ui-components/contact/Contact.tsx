import IconType from "../../types/enums/IconTypes";
import Icon from "../icon/Icon";
import { ContactContainer, ContactData } from "./styles";

export interface ContactProps {
    content: string;
    href: string;
    icon: IconType;
}

const Contact = ({ content, href, icon }: ContactProps) => {

    return (
        <ContactContainer>
            <Icon iconType={icon} />
            <ContactData>
                <a target='_blank' rel='noreferrer' href={href}>{content}</a>
            </ContactData>
        </ContactContainer>
    )
}

export default Contact;