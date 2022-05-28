import Focus from "../animated/Focus";
import Bullet from "../Bullet";
import { DescriptionContainer, DescriptionContentContainer, TimeLineDescription } from "./styles";

interface RolesAndResponsibilitiesProps {
    description: string[];
    isOpenState: boolean;
}

const RolesAndResponsibilities = ({ description, isOpenState }: RolesAndResponsibilitiesProps) => {

    return (
        <DescriptionContainer isOpen={isOpenState}>
                {description && description.length > 0 && description.map((item, index) => (
                    <Focus key={index}>
                        <DescriptionContentContainer>
                            <Bullet color='var(--first-color)' />
                            <TimeLineDescription>{item}</TimeLineDescription>
                        </DescriptionContentContainer>
                    </Focus>
                ))}
        </DescriptionContainer>
    )
}

export default RolesAndResponsibilities;