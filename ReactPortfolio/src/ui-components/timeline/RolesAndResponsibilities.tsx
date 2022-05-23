import Bullet from "../Bullet";
import Motion from "../Motion";
import { DescriptionContainer, TimeLineDescription } from "./styles";

interface RolesAndResponsibilitiesProps {
    description: string[];
    isOpenState: boolean;
}

const RolesAndResponsibilities = ({ description, isOpenState }: RolesAndResponsibilitiesProps) => {

    return (
        <DescriptionContainer isOpen={isOpenState}>
                {description && description.length > 0 && description.map((item, index) => (
                    <Motion key={index}>
                        <TimeLineDescription><Bullet color='var(--first-color)' />{item}</TimeLineDescription>
                    </Motion>
                ))}
            </DescriptionContainer>
    )
}

export default RolesAndResponsibilities;