import styled from "styled-components";

const FullScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    margin-top: -5rem;
`

interface FullScreenProps {
    children: React.ReactNode;
}

const FullScreen = ({ children }: FullScreenProps) => {

    return (
        <FullScreenContainer>{children}</FullScreenContainer>
    )
}

export default FullScreen;