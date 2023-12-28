import Intro from '@/components/Intro/Intro';
import Main from '@/layout/Main';

// axios.defaults.baseURL = 'https://localhost/api';

export default function Home() {
  return (
    <>
      <header>
        <Intro />
      </header>
      <Main />
    </>
  );
}
