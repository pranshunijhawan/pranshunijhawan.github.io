import BaseSectionProps from '../../types/base-section-props';
import { Section } from '../../ui-components/Section';
import SectionTitle from '../../ui-components/SectionTitle';
import { AboutContainer, AboutButtons, AboutDescription, DownloadIcon } from './styles';
import Button, { ButtonProps } from '../../ui-components/Button';
import Slide from '../../ui-components/animated/Slide';

export interface AboutSectionProps extends BaseSectionProps {
    content: string[];
    buttonProps: ButtonProps
}

const downloadIcon = <DownloadIcon />

const AboutSection = ({
    sectionTitle,
    content,
    buttonProps
  }: AboutSectionProps) => {
    
    return (
        <Section id='about'>
                <SectionTitle content={sectionTitle} />
                <Slide>
                    <AboutContainer>
                        {content.map((item, index) => (
                            <AboutDescription key={index}>{item}</AboutDescription>
                        ))}
                    </AboutContainer>
                </Slide>
                <AboutButtons>
                    <Button
                        link={buttonProps.link} 
                        name={buttonProps.name}
                        icon={downloadIcon}
                    />
                </AboutButtons>
        </Section>
    )
  }
  
  export default AboutSection