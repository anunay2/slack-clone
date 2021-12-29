import React from 'react';
import styled from 'styled-components';
import {Avatar} from "@material-ui/core";

function Header() {
    return (
        <HeaderContainer>
            {/* HeaderLeft */}
            <h1>Test</h1>
            {/* HeaderMiddle */}

            {/* HeaderRight */}
           
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    background-color: green;

`;

const HeaderLeft = styled.div`

`;

const HeaderAvatar = styled(Avatar)``