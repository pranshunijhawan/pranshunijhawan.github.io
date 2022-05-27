import { ButtonProps } from "../../ui-components/Button";
import Focus from "../../ui-components/animated/Focus";
import { ImageProps } from "../../ui-components/Image";
import { Section } from "../../ui-components/Section";
import { HomeContainer, HomeContent, Name, Designation, HomeIcon, Headline, LogoContainer } from "./styles";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    imageProps: ImageProps;
}


const HomeSection = ({
    name,
    designation
  }: HomeSectionProps) => {
    
    return (
        <Section id="home" style={{'marginBottom': '-2rem'}}>
                <HomeContainer>
                    <HomeContent>
                        <Focus><Name>Hi, I'm {name}</Name></Focus>
                        <Focus><Designation>{designation}</Designation></Focus>
                        </HomeContent>
                </HomeContainer>
        </Section>
    )
  }
  
  export default HomeSection