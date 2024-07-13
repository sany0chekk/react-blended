import { Container, CountryList, Heading, Section } from "components";
import { useEffect, useState } from "react";
import { getCountries } from "service/countryApi";

const Home = () => {
  const [countries, setCounties] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCountries = async () => {
      try {
        const response = await getCountries();
        setCounties(response);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default Home;
