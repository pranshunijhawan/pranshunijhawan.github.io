import { useState } from "react";
import AboutSection from "./sections/about/About"
import Certifications from "./sections/certifications/Certifications";
import ContactMe from "./sections/contact-me/ContactMe";
import { EmailIcon, LinkedInIcon, LocationIcon, PhoneIcon } from "./sections/contact-me/styles";
import EducationalQualifications from "./sections/educational-qualifications/EducationalQualifications";
import Header from "./sections/header/Header";
import HomeSection from "./sections/home/Home";
import Intro from "./sections/intro/IntroLogo";
import MostProudOf from "./sections/most-proud-of/MostProudOf";
import ProfessionalExperience from "./sections/professional-experience/ProfessionalExperience";
import { BackEndIcon, CloudIcon, DatabaseIcon, DataEngineeringIcon, FrontEndIcon } from "./sections/technology-proficiency/styles";
import TechnologyProficiencyProps from "./sections/technology-proficiency/TechnologyProficiency";
import Testimonials from "./sections/testimonials/Testimonials";
import aboutSectionContent from './types/portfolio-content/about-section-content';
import certificationsContent from "./types/portfolio-content/certifications-content";
import contactMeContent from "./types/portfolio-content/contact-me-content";
import educationalQualificationsContent from "./types/portfolio-content/educational-qualifications-content";
import homeSectionProps from './types/portfolio-content/home-section-content';
import introProps from "./types/portfolio-content/intro-content";
import mostProudOfProps from './types/portfolio-content/most-proud-of-section-content';
import professionalExperienceContent from "./types/portfolio-content/professional-experience-content";
import technologyProficiencyProps from "./types/portfolio-content/technology-proficiency-content";
import testimonialsContent from "./types/portfolio-content/testimonials-content";



const Portfolio = () => {

    technologyProficiencyProps.skills[0].icon = <FrontEndIcon />
    technologyProficiencyProps.skills[1].icon = <BackEndIcon />
    technologyProficiencyProps.skills[2].icon = <DatabaseIcon />
    technologyProficiencyProps.skills[3].icon = <CloudIcon />
    technologyProficiencyProps.skills[4].icon = <DataEngineeringIcon />

    contactMeContent.contactMetaData[0].icon = <PhoneIcon />
    contactMeContent.contactMetaData[1].icon = <EmailIcon />
    contactMeContent.contactMetaData[2].icon = <LocationIcon />
    contactMeContent.contactMetaData[3].icon = <LinkedInIcon />

    const [isEnter, setIsEnter] = useState(true);
    const [visibility, setVisibility] = useState(false);
    const [hideIntro, setHideIntro] = useState(false);

    setTimeout(() => {
        setIsEnter(false);
    }, 2000);

    setTimeout(() => {
      setHideIntro(true);
    }, 2900);

    setTimeout(() => {
      setVisibility(true);
    }, 2950);
    
    return (
      <>
        {!hideIntro && <Intro imageProps={introProps.imageProps} isEnter={isEnter} />}
        {visibility && <>
                        <Header visibility={visibility} />
                        <HomeSection name={homeSectionProps.name}
                            designation={homeSectionProps.designation}
                            headline={homeSectionProps.headline}
                            buttonProps={homeSectionProps.buttonProps}
                            imageProps={homeSectionProps.imageProps} />
                        <AboutSection 
                            sectionTitle={aboutSectionContent.sectionTitle} 
                            content={aboutSectionContent.content}
                            buttonProps={aboutSectionContent.buttonProps} />
                        <MostProudOf sectionTitle={mostProudOfProps.sectionTitle}
                            content={mostProudOfProps.content} />
                        <TechnologyProficiencyProps skills={technologyProficiencyProps.skills} sectionTitle={technologyProficiencyProps.sectionTitle} />
                          <EducationalQualifications title={educationalQualificationsContent.title} timeline={educationalQualificationsContent.timeline} />
                        <ProfessionalExperience title={professionalExperienceContent.title} timeline={professionalExperienceContent.timeline} />
                        <Certifications sectionTitle={certificationsContent.sectionTitle} certificateProps={certificationsContent.certificateProps} />
                        <Testimonials quoteProps={testimonialsContent.quoteProps} sectionTitle={testimonialsContent.sectionTitle} />
                        <ContactMe sectionTitle={contactMeContent.sectionTitle} contactMetaData={contactMeContent.contactMetaData} />
                      </>}
      </>
    )
  }
  
  export default Portfolio