import Intro from '@/components/Intro';
import { Helmet } from 'react-helmet-async';

// axios.defaults.baseURL = 'https://localhost/api';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Intro />
    </>
  );
}
