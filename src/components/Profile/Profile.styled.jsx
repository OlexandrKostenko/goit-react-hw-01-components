import styled from 'styled-components'


export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: ${props => props.theme.borders.normal} ${props => props.theme.colors.text};
`;

export const UserAvatar = styled.img`
border-radius: ${props => props.theme.radii.round};
margin-top: ${props => props.theme.space[4]}px;
`;

export const UserName = styled.p`
color: ${props => props.theme.colors.black};
font-weight: ${props => props.theme.fontWeights.bold};
margin-top: ${props => props.theme.space[3]}px;
margin-bottom: ${props => props.theme.space[3]}px;
`;

export const UserTag = styled.p`
color: ${props => props.theme.colors.text};
margin-top: ${props => props.theme.space[3]}px;
margin-bottom: ${props => props.theme.space[3]}px;
`;

export const UserLocation = styled.p`
color: ${props => props.theme.colors.text};
margin-top: ${props => props.theme.space[3]}px;
margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Stats = styled.ul`
display: flex;
padding: 0;
margin: 0;
`;

export const ItemStats = styled.li`
list-style-type: none;
background-color: ${props => props.theme.colors.secondaryBackground};
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
padding: ${props => props.theme.space[4]}px;
width: 100%;
border-right: ${props => props.theme.borders.normal} ${props => props.theme.colors.text};
`;

export const LabelSpan = styled.span`
padding: ${props => props.theme.space[3]}px;
color: ${props => props.theme.colors.text};
`;

export const QuantitySpan = styled.span`
padding: ${props => props.theme.space[3]}px;
color: ${props => props.theme.colors.black};
font-weight: ${props => props.theme.fontWeights.bold};
`;