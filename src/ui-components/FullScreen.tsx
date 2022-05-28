import styled from "styled-components";

const FullScreenContainer = styled.div<{
    backgroundColor?: string
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    margin-top: -5rem;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'var(--body-color)' };
`

interface FullScreenProps {
    children: React.ReactNode;
    backgroundColor?: string;
}

const FullScreen = ({ children, backgroundColor }: FullScreenProps) => {

    return (
        <FullScreenContainer backgroundColor={backgroundColor}>{children}</FullScreenContainer>
    )
}

export default FullScreen;