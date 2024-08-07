import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(({ id, country, flag }) => {
        return (
          <GridItem key={id}>
            <Link to={`/country/${id}`} state={{ from: location }}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
