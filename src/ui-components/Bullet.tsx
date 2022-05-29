import styled from "styled-components";

const BulletComponent = styled.span<{
    color: string;
}>`
    color: ${({ color }) => color};
    margin-right: var(--mb-0-5);
`

interface BulletProps {
    color: string
}

const Bullet = ({ color }: BulletProps) => {
    
    return(
        <BulletComponent color={color}>➡️</BulletComponent>
    )
}

export default Bullet;