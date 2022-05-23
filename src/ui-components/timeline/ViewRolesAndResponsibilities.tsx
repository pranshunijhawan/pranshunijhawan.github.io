import { useState } from "react";
import RolesAndResponsibilities from "./RolesAndResponsibilities";
import { ViewRandR, ViewRandRContainer } from "./styles";

interface ViewRolesAndResponsibilitiesProps {
    description: string[];
}

const ViewRolesAndResponsibilities = ({ description }: ViewRolesAndResponsibilitiesProps) => {

    const [isOpenState, setIsOpen] = useState(false);

    const handleAccordianClickEvent = () => {
        setIsOpen(!isOpenState);
    }

    return(
        <>
            {description && description.length > 0 && 
            <>
                <ViewRandRContainer onClick={handleAccordianClickEvent}>
                    <ViewRandR>View Roles and Responsibilities</ViewRandR>
                </ViewRandRContainer>
                <RolesAndResponsibilities description={description} isOpenState={isOpenState} />
            </>}
        </>
    )
}

export default ViewRolesAndResponsibilities;