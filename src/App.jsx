/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';

export default function App({ loading }) {
  return (
    <>
      {/* Hero Section */}
      <Hero loading={loading} />

      {/* About Section */}
      <About />

      {/* Certificates Section */}
      <Certificates />

      {/* Projects Section */}
      <Projects />
    </>
  );
}
