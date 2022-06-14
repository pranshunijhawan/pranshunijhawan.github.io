import Focus from "../animated/Focus";
import Slide from "../animated/Slide";
import Bullet from "../Bullet";
import { DescriptionContainer, DescriptionContentContainer, TimeLineDescription } from "./styles";

interface RolesAndResponsibilitiesProps {
    description: string[];
    isOpenState: boolean;
}

const RolesAndResponsibilities = ({ description, isOpenState }: RolesAndResponsibilitiesProps) => {

    return (
        <DescriptionContainer isopen={isOpenState}>
                {description && description.length > 0 && description.map((item, index) => (
                    <Focus key={index}>
                        <Slide>
                            <DescriptionContentContainer>
                                <Bullet color='var(--first-color)' />
                                <TimeLineDescription>{item}</TimeLineDescription>
                            </DescriptionContentContainer>
                        </Slide>
                    </Focus>
                ))}
        </DescriptionContainer>
    )
}

export default RolesAndResponsibilities;