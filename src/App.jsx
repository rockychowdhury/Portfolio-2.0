import Navbar from './components/common/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Stacks from './components/Stacks/Stacks';
import Journey from './components/Journey/Journey';
import bg from '../src/assets/bg1.jpg'
import bg1 from '../src/assets/bg2.jpg'
import InvertedSecondaryBg from './components/common/InvertedSecondaryBg';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/common/Footer';
import SecondaryBg from './components/common/SecondaryBg';
import PrimaryBG from './components/common/PrimaryBG';
function App() {
  return (
    <section className='font-poppins text-darkText bg-darkBg'>
      <div className='h-fit bg-dark-gradient'>
        <div className='border-b border-darkCard rounded-b-[100px] backdrop-blur-sm'>
          <div className='absolute inset-0 bg-glow-gradient pointer-events-none'></div>
          <header className='relative z-10'>
            <section className='container '>
              <Navbar></Navbar>
              <HeroSection>
              </HeroSection>
            </section>
          </header>
        </div>
      </div>




      <main className='relative z-[10]'>
        <div>
          <Stacks></Stacks>
        </div>
        <div >
          <Journey></Journey>
        </div>
        <div>
          <InvertedSecondaryBg>
            <div className='h-96 container py-10'>
              <Services></Services>
            </div>
          </InvertedSecondaryBg>
        </div>
        <div>
          <Projects></Projects>
        </div>
        <div >
          <InvertedSecondaryBg>
            <div>
              <Education></Education>
            </div>
          </InvertedSecondaryBg>
        </div>
        <div className=''>
          <PrimaryBG><Contact></Contact></PrimaryBG>
        </div>
      </main>





      <footer>
        <Footer></Footer>
      </footer>
    </section>
  )
}

export default App