import { useState } from "react";
import AboutSection from "./sections/about/About"
import Certifications from "./sections/certifications/Certifications";
import ContactMe from "./sections/contact-me/ContactMe";
import EducationalQualifications from "./sections/educational-qualifications/EducationalQualifications";
import Header from "./sections/header/Header";
import NavigationMenu from "./sections/header/NavigationMenu";
import HomeSection from "./sections/home/Home";
import Intro from "./sections/intro/IntroLogo";
import MostProudOf from "./sections/most-proud-of/MostProudOf";
import ProfessionalExperience from "./sections/professional-experience/ProfessionalExperience";
import TechnologyProficiencyProps from "./sections/technology-proficiency/TechnologyProficiency";
import Testimonials from "./sections/testimonials/Testimonials";
import aboutSectionContent from './types/portfolio-content/about-section-content';
import certificationsContent from "./types/portfolio-content/certifications-content";
import contactMeContent from "./types/portfolio-content/contact-me-content";
import educationalQualificationsContent from "./types/portfolio-content/educational-qualifications-content";
import homeSectionProps from './types/portfolio-content/home-section-content';
import introProps from "./types/portfolio-content/intro-content";
import mostProudOfProps from './types/portfolio-content/most-proud-of-section-content';
import navigationMenuContent from "./types/portfolio-content/navigation-menu-content";
import professionalExperienceContent from "./types/portfolio-content/professional-experience-content";
import technologyProficiencyProps from "./types/portfolio-content/technology-proficiency-content";
import testimonialsContent from "./types/portfolio-content/testimonials-content";

interface PortfolioProps {
  themeHandler: any
}

const Portfolio = ({ themeHandler }: PortfolioProps) => {
    const [isEnter, setIsEnter] = useState(true);
    const [hideIntro, setHideIntro] = useState(false);
    const [headerVisibility, setHeaderVisibility] = useState(false);
    const [visibility, setVisibility] = useState(false);

    setTimeout(() => {
        setIsEnter(false);
    }, 1500);

    setTimeout(() => {
      setHideIntro(true);
    }, 2400);

    setTimeout(() => {
      setHeaderVisibility(true);
    }, 2400);

    setTimeout(() => {
      setVisibility(true);
    }, 2800);
    
    return (
      <>
        {!hideIntro && <Intro imageProps={introProps.imageProps} isEnter={isEnter} />}
        {headerVisibility && <Header visibility={headerVisibility} />}
        {visibility && <>
                        <NavigationMenu navigationMenus={navigationMenuContent.navigationMenus} />
                        <HomeSection name={homeSectionProps.name}
                            designation={homeSectionProps.designation}
                            headline={homeSectionProps.headline}
                            buttonProps={homeSectionProps.buttonProps}
                            themeHandler={themeHandler} />
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