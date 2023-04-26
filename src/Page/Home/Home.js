import { Link } from 'react-router-dom';
import { Container, TweetLink } from './Home.styled';

const Home = () => {
  return (
    <Container>
      Follow Tweets
      <TweetLink as={Link} to="/tweets">
        Find tweets
      </TweetLink>
    </Container>
  );
};

export default Home;
