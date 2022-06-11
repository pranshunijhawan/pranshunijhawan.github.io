import { SkillBar, SkillContent, SkillName, SkillPercentageBar, SkillPerentage } from "./styles";

export interface SkillProps {
    name: string;
    percentage: number;
}

const Skill = ({ name, percentage }: SkillProps) => {

    return (
        <>
            <SkillContent>
                <SkillName>{name}</SkillName>
                <SkillPerentage>{percentage} %</SkillPerentage>
            </SkillContent>
            <SkillBar>
                <SkillPercentageBar width={percentage} />
            </SkillBar>
        </>
    )
}

export default Skill;