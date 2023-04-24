import { useLocation } from 'react-router-dom';
import { BackLink, Container } from './TweetsPage.styled';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTweets } from 'services/fetch';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';

const TweetsPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTweets()
      .then(data => setUsers(data), setIsLoading(true))
      .catch(error => error.message)
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      <Container>
        <BackLink as={Link} to={location.state?.from ?? '/'}>
          Go back
        </BackLink>
        {isLoading && <Loader />}
        {users && <TweetsList users={users} />}
      </Container>
    </>
  );
};

export default TweetsPage;
