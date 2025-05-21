import RestaurantItem from './RestaurantItem';
import PropTypes from 'prop-types';
import Grid from './styled/Grid';
 
function RestaurantList({ restaurants }) {
  return (
    <Grid gap='1.03rem'>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </Grid>
  );
}
 
RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};
 
export default RestaurantList;