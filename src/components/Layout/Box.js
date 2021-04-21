import {
    space,
    color,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
    system,
} from 'styled-system';
import styled from 'styled-components';

const cursor = system({
    cursor: {
        property: 'cursor',
    },
});
const Box = styled.div(
    {
        boxSizing: 'border-box',
    },
    space,
    color,
layout,
flexbox,
grid,
background,
border,
position,
shadow,
cursor
);
export default Box;