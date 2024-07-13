import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const onHandleSubmit = value => {
    setRegion(value);
    console.log(value);
  };

  useEffect(() => {
    if (!region) return;
    setLoading(true);

    const fetchCountries = async () => {
      try {
        const response = await fetchByRegion(region);
        setCountries(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [region]);

  console.log(countries);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        <CountryList countries={countries} />
        {error && <p>Error {error}</p>}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
