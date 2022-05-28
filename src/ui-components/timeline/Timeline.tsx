import Slide from "../animated/Slide";
import { TimelineContainer, TimelineContentContainer, TimelineDataContainer, TimeLineDate, TimelineEndLine, TimelineRounder, TimelineRounderLine, TimeLineSubTitle, TimelineTitle } from "./styles";
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
                    <Slide><TimelineRounder /></Slide>
                    {!last && <TimelineRounderLine />}
                </div>
                <TimelineContentContainer>
                    <TimelineTitle>{title}</TimelineTitle>
                    <TimeLineSubTitle>{subTitle}</TimeLineSubTitle>
                    <TimeLineDate>📅 {'\u00A0'} {date}</TimeLineDate>
                    <ViewRolesAndResponsibilities description={description || []} />
                </TimelineContentContainer>
            </TimelineDataContainer>
        </TimelineContainer>
    )
}

export default Timeline;