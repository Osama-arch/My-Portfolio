import Contacts from './components/Contacts';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className=' relative mx-auto'>
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
