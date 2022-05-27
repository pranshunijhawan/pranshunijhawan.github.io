import { TimelineContainer, TimelineDataContainer, TimeLineDate, TimelineRounderLine, TimeLineSubTitle, TimelineTitle } from "./styles";
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
                    <TimelineTitle>{title}</TimelineTitle>
                    <TimeLineSubTitle>{subTitle}</TimeLineSubTitle>
                    <TimeLineDate>📅 {'\u00A0'} {date}</TimeLineDate>
                    <ViewRolesAndResponsibilities description={description || []} />
                </div>
            </TimelineDataContainer>
            <TimelineRounderLine />
        </TimelineContainer>
    )
}

export default Timeline;