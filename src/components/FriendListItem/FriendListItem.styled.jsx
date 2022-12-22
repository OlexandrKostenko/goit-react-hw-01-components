import styled from 'styled-components'

export const Item = styled.li`
list-style-type:none;
display: flex;
align-items: center;
padding: ${props => props.theme.space[4]}px;
margin-bottom: ${props => props.theme.space[4]}px;
box-shadow: 8px 7px 23px 5px rgba(0,0,0,0.5);
border-radius: ${props => props.theme.radii.normal};
`;

export const IsOnlineSpan = styled.span`
width: ${props => props.theme.space[4]}px;
height: ${props => props.theme.space[4]}px;
border-radius: ${props => props.theme.radii.round};
background-color: ${props => (props.OnlineStatus ? 'green' : 'red')};

`;

export const FriendAvatar = styled.img`
padding: ${props => props.theme.space[4]}px;
`;

export const FriendName = styled.p`
margin: 0;
font-weight: ${props => props.theme.fontWeights.bold};
padding: ${props => props.theme.space[4]}px;
`;