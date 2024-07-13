import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleSubmit = value => {
    setSearchParams({query: value});
  };

  useEffect(() => {
    const region = searchParams.get('query');
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
  }, [searchParams]);

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
