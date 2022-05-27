import Bullet from "../Bullet";
import { DescriptionContainer, TimeLineDescription } from "./styles";

interface RolesAndResponsibilitiesProps {
    description: string[];
    isOpenState: boolean;
}

const RolesAndResponsibilities = ({ description, isOpenState }: RolesAndResponsibilitiesProps) => {

    return (
        <DescriptionContainer isOpen={isOpenState}>
                {description && description.length > 0 && description.map((item, index) => (
                    <TimeLineDescription key={index}><Bullet color='var(--first-color)' />{item}</TimeLineDescription>
                ))}
            </DescriptionContainer>
    )
}

export default RolesAndResponsibilities;