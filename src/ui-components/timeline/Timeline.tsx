import { Calendar, TimelineContainer, TimelineDataContainer, TimeLineDate, TimeLineDateContainer, TimelineRounder, TimelineRounderLine, TimeLineSubTitle, TimelineTitle } from "./styles";
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
                    <TimelineRounder />
                    {!last && <TimelineRounderLine />}
                </div>
                <div>
                    <TimelineTitle>{title}</TimelineTitle>
                    <TimeLineSubTitle>{subTitle}</TimeLineSubTitle>
                    <TimeLineDate>📅 {'\u00A0'} {date}</TimeLineDate>
                    <ViewRolesAndResponsibilities description={description || []} />
                </div>
            </TimelineDataContainer>
        </TimelineContainer>
    )
}

export default Timeline;