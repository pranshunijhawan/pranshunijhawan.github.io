import BaseSectionProps from '../../types/base-section-props';
import { Section } from '../../ui-components/Section';
import SectionTitle from '../../ui-components/SectionTitle';
import { AboutContainer, AboutButtons, AboutDescription } from './styles';
import Button, { ButtonProps } from '../../ui-components/Button';
import Slide from '../../ui-components/animated/Slide';
import IconType from '../../types/enums/IconTypes';

export interface AboutSectionProps extends BaseSectionProps {
    content: string[];
    buttonProps: ButtonProps
}

const AboutSection = ({
    sectionTitle,
    content,
    buttonProps
  }: AboutSectionProps) => {
    
    return (
        <Section id='about'>
                <SectionTitle content={sectionTitle} />
                <AboutContainer>
                        {content.map((item, index) => (
                            <Slide key={index}>
                                <AboutDescription>{item}</AboutDescription>
                            </Slide>
                        ))}
                    </AboutContainer>
                <AboutButtons>
                    <Button
                        link={buttonProps.link} 
                        name={buttonProps.name}
                        icon={IconType.Download}
                    />
                </AboutButtons>
        </Section>
    )
  }
  
  export default AboutSection