import styled from 'styled-components'
import IconType from '../types/enums/IconTypes';
import Focus from './animated/Focus';
import Icon from './icon/Icon';

export interface ButtonProps {
    link?: string;
    name: string;
    icon?: IconType
    target?: string;
    clickHandler?: any;
}

const ButtonComponent = styled.a`
    display: inline-flex;
    align-items: center;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
    cursor: pointer;

    &:hover {
        background-color: var(--first-color-alt);
    }
`

const Button = ({ link, name, icon, target, clickHandler }: ButtonProps) => {

    const buttonTarget = target && target === 'none' ? '' : '_blank';

    return (
        <Focus><ButtonComponent onClick={clickHandler} target={buttonTarget} href={link}>{name} {icon && <Icon iconType={icon} />}</ButtonComponent></Focus>
    )
}

export default Button