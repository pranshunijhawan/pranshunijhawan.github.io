import { CaptionContainer, GivenBy, GivenBySubTitle, QuoteContainer, QuoteIcon, QuoteIconContainer, QuoteText, Source } from "./styles";

interface QuoteMetaData {
    quote: string;
    givenBy: string;
    subTitleGivenBy: string;
    source: string;
}

export interface QuoteProps {
    quoteMetaData: QuoteMetaData[]
}

const Quote = ({ quoteMetaData }: QuoteProps) => {

    return (
        <>
            {quoteMetaData && quoteMetaData.map((item, index) => (
                <QuoteContainer key={index}>
                        <QuoteIconContainer>
                            <QuoteIcon />
                        </QuoteIconContainer>
                        <CaptionContainer>
                            <QuoteText>{item.quote}</QuoteText>
                        </CaptionContainer>
                        <GivenBy>{item.givenBy}</GivenBy>
                        <GivenBySubTitle>{item.subTitleGivenBy}</GivenBySubTitle>
                        <Source>Source: {item.source}</Source>
                </QuoteContainer>
            ))}
        </>
    )
}

export default Quote