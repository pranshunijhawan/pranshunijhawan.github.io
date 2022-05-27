import { ProfessionalExperienceProps } from "../../sections/professional-experience/ProfessionalExperience";

const professionalExperienceContent: ProfessionalExperienceProps = {
    title: 'Professional Experience',
    timeline: [
        {
            title: 'Senior Engineer',
            subTitle: 'McKinsey & Company',
            date: 'March 2022 - Present',
            description: [
                'Design and Development of Products in Marketing & Sales practice, building Enterprise Pricing Strategy and Promotion Optimisation, that transform business operations of large Retail and CPG clients worldwide.',
                'Build modern GraphQL Microservices using Node.JS and Typescript with both SQL & Non-SQL Data Stores that transcend high performance, customised, stable and scalable results.',
                'Manage and Build highly optimised and re-usable UI components and fragments using React with Typescript based on Micro-Frontends Architecture.',
                'Design and Build highly complex and scalable Data Processing Pipelines for Batch/Stream Processes using various Data Transformation tools architected using Azure Databricks (Apache Spark) and Azure Stream Analytics, managed and orchestrated by Azure DataFactory.'
            ]
        },
        {
            title: 'Principal Engineer',
            subTitle: 'Condeco',
            date: 'April 2021 - March 2022',
            description: [
                'Apply high-impact technical solutions to translate Business Requirements into robust applications that transcend high performance, stable and scalable results.',
                'Responsible for Prototyping and Formulating \'Proof of Concepts\' (POCs) to ensure best possible solutions and transform them into Production Level design following Best-Practices and Clean Code Architecture.',
                'Managing complete Application Lifecycle including Requirement Analysis, Pre-Development, Development, Testing and Deployment with occasional Post-Release improvements and maintenance.',
                'Understand product requirements, formulating Estimate Document including End-To-End Delivery Timelines with Release Phases and supporting information.',
                'Responsible for Prototyping Skeletal UI Mockups for the design team to implement Actual Wireframes.'
            ]
        },
        {
            title: 'Senior Engineer',
            subTitle: 'Nagarro',
            date: 'December 2019 – April 2021',
            description: [
                'Design and Development of Web and Cloud based applications for clients associated with Nagarro – with expertise in various domains like E-Commerce, Employee Management, Inventory System etc.',
                'Building Modern Hybrid Front-End applications for Web/Mobile using Angular and Ionic framework to deliver a seamless Cross-Platform User Experience.',
                'Building Applications from ground zero based on Microservices Design Architecture, using .NET Core meeting robust standards following Best-Practices by adapting Modular Approach in designing the Services following SOLID Design Principles.',
                'Construct End-To-End CI/CD pipelines using Modern Cloud Computing concepts based on PaaS Ideology involving Resource Provisioning, Building and Deployment of the Application with support of Automated Scaling, Robust Monitoring, Automated Alert Systems etc.',
                'Designing Database Architecture based on Code-First/DB-First Approach following the Repository Pattern using EF Core and SQL Scripts for Creating Tables Schema structure, Stored Procedures (SPs) etc.'
            ]
        },
        {
            title: 'Software Engineer',
            subTitle: 'Condeco',
            date: 'September 2018 – December 2019',
            description: [
                'Design and Development of Condeco’s Workspace Management Platform, Condeco Enterprise – a suite of connected workplace tools integrates meeting room software and desk booking software, together with elegant touch screens for a truly pioneering solution that will transform your workplace today.',
                'Building Highly Scalable and Extendible Microservices using both Serveless and Traditonal Paridigms.',
                'Responsible for DevOps Infrastructure Creation/Maintenance including CI/CD Pipelines using YAML, ARM Templates, Power shell and Azure CLI.',
                'Responsible for Documenting all the Application Level Changes and Enhancements including Data-Flow-Diagrams (DFDs).',
                'SQL Architecture Design: Writing Stored Procedures (SPs) and building SQL agent jobs.'
            ]
        },
        {
            title: 'Associate Software Engineer',
            subTitle: 'Gartner',
            date: 'May 2017 – August 2018',
            description: [
                'Design and Development of CEB, now Gartner’s Survey Platform ClearForce – a next generation employee engagement survey and reporting SaaS product suite using Microsoft Technologies.',
                'Involved in various bug fixes and responsible for enhancements in both UI and Functional areas.',
                'SQL Architecture Design: Writing Stored Procedures (SPs), building SQL agent jobs to automate certain key aspects of interaction between the Tool and Database.'
            ],
            last: true
        }
    ]
}

export default professionalExperienceContent;