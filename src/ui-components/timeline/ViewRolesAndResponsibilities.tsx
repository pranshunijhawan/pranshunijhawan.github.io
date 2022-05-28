import { useState } from "react";
import RolesAndResponsibilities from "./RolesAndResponsibilities";
import { ViewRandR, ViewRandRContainer } from "./styles";

interface ViewRolesAndResponsibilitiesProps {
    description: string[];
}

const ViewRolesAndResponsibilities = ({ description }: ViewRolesAndResponsibilitiesProps) => {

    const [isOpenState, setIsOpen] = useState(false);
    const [rolesAndResponsibilitiesMessage, setRolesAndResponsibilitiesMessage] = useState('View Roles and Responsibilities');

    const handleAccordianClickEvent = () => {
        setIsOpen(!isOpenState);
        if (isOpenState) {
            setRolesAndResponsibilitiesMessage('View Roles and Responsibilities')
        } else {
            setRolesAndResponsibilitiesMessage('Hide Roles and Responsibilities')
        }
    }

    return(
        <>
            {description && description.length > 0 && 
            <>
                <ViewRandRContainer onClick={handleAccordianClickEvent}>
                    <ViewRandR>{rolesAndResponsibilitiesMessage}</ViewRandR>
                </ViewRandRContainer>
                <RolesAndResponsibilities description={description} isOpenState={isOpenState} />
            </>}
        </>
    )
}

export default ViewRolesAndResponsibilities;