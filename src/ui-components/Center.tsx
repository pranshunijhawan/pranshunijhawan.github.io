import styled from "styled-components";

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
`

interface CenterProps {
    children: React.ReactNode;
}

const Center = ({ children }: CenterProps) => {

    return <CenterContainer>{children}</CenterContainer>
}

export default Center;