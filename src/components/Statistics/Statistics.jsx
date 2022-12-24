import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatListItem, StatList, Title, LabelItem, PercentageItem } from './Statistics.syled';


export function Statistics ({ title ="Upload stats", stats }) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
<Box borderRadius={8} display="flex" flexDirection="column" mx="auto" my={4}>
  {title && <Title>{title}</Title>}
  
  <StatList>
    {stats.map(({id, label, percentage}) =>
    (
    <StatListItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <LabelItem>{label}</LabelItem>
      <PercentageItem>{percentage}%</PercentageItem>
    </StatListItem>
    ))}
  </StatList>
</Box>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape ({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}
