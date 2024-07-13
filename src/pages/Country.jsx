import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';

const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { countryId } = useParams();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Go back</GoBackBtn>
        {loading && <Loader />}
        {error && <p>Opps! {error}</p>}
        <CountryInfo onInfo={country} />
      </Container>
    </Section>
  );
};

export default Country;
