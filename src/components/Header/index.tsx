import React, { useContext } from 'react';
import { Container } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';


interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) =>{
    const { colors, title } = useContext(ThemeContext)

return (
    <Container>
        Hello World
        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.primary}
            offColor={shade(0.15, colors.secundary)}
        /> 
    </Container>
);

}

export default Header;