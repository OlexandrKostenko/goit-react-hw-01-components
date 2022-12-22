import styled from 'styled-components'

export const Title = styled.h2`
text-transform: uppercase;
text-align: center;
background-color: ${props => props.theme.colors.white};
`;

export const StatList = styled.ul`
display: flex;
margin: 0;
padding: 0;
`;

export const StatListItem = styled.li`
list-style-type: none;
display: flex;
flex-direction: column;
padding: ${props => props.theme.space[4]}px;

`;

export const LabelItem = styled.span`
color: ${props => props.theme.colors.white};
`;

export const PercentageItem = styled.span`
color: ${props => props.theme.colors.white};
font-weight: ${props => props.theme.fontWeights.bold};
`;

