import Button, { ButtonProps } from "../../ui-components/Button";
import { Section } from "../../ui-components/Section";
import { HomeContainer, HomeContent, Name, Designation, Headline } from "./styles";
import Slide from "../../ui-components/animated/Slide";
import IconType from "../../types/enums/IconTypes";
import Toggle from "./Toggle";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    themeHandler?: any;
}

const HomeSection = ({
    name,
    designation,
    headline,
    buttonProps,
    themeHandler,
  }: HomeSectionProps) => {

    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }
    
    return (
        <Section id="home">
                <Slide>
                    <Toggle themeHandler={themeHandler}></Toggle>
                    <HomeContainer>
                        <HomeContent>
                            <Name>Hi, I'm {name}</Name>
                            <Designation>{designation}</Designation>
                        </HomeContent>
                        <HomeContent>
                            <Headline>{headline}</Headline>
                            <Button clickHandler={scrollToBottom}
                                    name={buttonProps.name} 
                                    icon={IconType.Contact}
                                    target={buttonProps.target} />
                        </HomeContent>
                    </HomeContainer>
                </Slide>
        </Section>
    )
  }
  
  export default HomeSection