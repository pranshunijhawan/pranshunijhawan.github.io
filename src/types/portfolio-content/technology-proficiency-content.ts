import { TechnologyProficiencyProps } from "../../sections/technology-proficiency/TechnologyProficiency";
import IconType from "../enums/IconTypes";


const technologyProficiencyProps: TechnologyProficiencyProps = {
    sectionTitle: 'Technology Proficiency',
    skills: [
        {
            icon: IconType.Frontend,
            category: 'Frontend',
            skills: [
                {
                    name: 'React',
                    percentage: 90,
                },
                {
                    name: 'Angular',
                    percentage: 100
                },
                {
                    name: 'JavaScript',
                    percentage: 100
                },
                {
                    name: 'TypeScript',
                    percentage: 90
                },
                {
                    name: 'Ionic Framework',
                    percentage: 60
                }
            ],
        },
        {
            icon: IconType.Backend,
            category: 'Backend',
            skills: [
                {
                    name: 'C#',
                    percentage: 100
                },
                {
                    name: '.NET Core',
                    percentage: 100
                },
                {
                    name: 'Node.Js',
                    percentage: 80
                },
                {
                    name: 'Microservices',
                    percentage: 100
                },
                {
                    name: 'GraphQL',
                    percentage: 80
                }
            ]
        },
        {
            icon: IconType.Database,
            category: 'Database',
            skills: [
                {
                    name: 'SQL',
                    percentage: 100
                },
                {
                    name: 'NoSQL',
                    percentage: 90
                }
            ]
        },
        {
            icon: IconType.Cloud,
            category: 'Cloud',
            skills: [
                {
                    name: 'Microsoft Azure',
                    percentage: 90
                },
                {
                    name: 'Amazon Web Services (AWS)',
                    percentage: 80
                }
            ]
        },
        {
            icon: IconType.DataEngineering,
            category: 'Data Engineering',
            skills: [
                {
                    name: 'Azure Databricks (Apache Spark)',
                    percentage: 60
                },
                {
                    name: 'Azure Datafactory',
                    percentage: 80
                },
                {
                    name: 'Azure Stream Analytics',
                    percentage: 70
                }
            ]
        }
    ]
}

export default technologyProficiencyProps;