import IconType from "../../types/enums/IconTypes";
import Focus from "../animated/Focus";
import Icon from "../icon/Icon";
import { TimelineContainer, TimelineContentContainer, TimelineDataContainer, TimeLineDate, TimelineDateContainer, TimelineRounder, TimelineRounderLine, TimeLineSubTitle, TimelineTitle } from "./styles";
import ViewRolesAndResponsibilities from "./ViewRolesAndResponsibilities";

export interface TimelineProps {
    title: string;
    subTitle: string;
    date: string;
    description?: string[]
    last?: boolean;
}

const Timeline = ({ title, subTitle, date, description, last }: TimelineProps) => {

    return (
        <TimelineContainer>
            <TimelineDataContainer>
                <div>
                    <Focus><TimelineRounder /></Focus>
                    {!last && <TimelineRounderLine />}
                </div>
                <TimelineContentContainer>
                    <TimelineTitle>{title}</TimelineTitle>
                    <TimeLineSubTitle>{subTitle}</TimeLineSubTitle>
                    <TimelineDateContainer>
                        <Icon iconType={IconType.Calendar} />
                        <TimeLineDate>{date}</TimeLineDate>
                    </TimelineDateContainer>
                    <ViewRolesAndResponsibilities description={description || []} />
                </TimelineContentContainer>
            </TimelineDataContainer>
        </TimelineContainer>
    )
}

export default Timeline;