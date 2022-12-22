import styled from 'styled-components'

export const TransactionHistoryTable = styled.table`
margin: ${props => props.theme.space[5]}px auto;
background-color: ${props => props.theme.colors.secondaryBackground};
text-align: center;
width: 600px;
`;

export const THead = styled.thead`
background-color: ${props => props.theme.colors.accent};
color: ${props => props.theme.colors.white};
padding: ${props => props.theme.space[3]}px;
border: ${props => props.theme.borders.normal} ${props => props.theme.colors.text};
`;

export const TrColumn = styled.tr`
padding: ${props => props.theme.space[3]}px;
border: ${props => props.theme.borders.normal} ${props => props.theme.colors.text};
:nth-of-type(even) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const TdString = styled.td`
padding: ${props => props.theme.space[3]}px;
border: ${props => props.theme.borders.normal} ${props => props.theme.colors.text};
`;
