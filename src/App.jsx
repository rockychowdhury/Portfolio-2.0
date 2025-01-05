import Navbar from './components/common/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Stacks from './components/Stacks/Stacks';
import Journey from './components/Journey/Journey';
import bg from '../src/assets/bg1.jpg'
import bg1 from '../src/assets/bg2.jpg'
import InvertedSecondaryBg from './components/common/InvertedSecondaryBg';
import Services from './components/Services/Services';
function App() {
  return (
    <section className='font-poppins text-natural'>
      <div className='h-fit pb-2' style={{ backgroundImage: `url(${bg1})` }}>
        <div className='border-b  bg-center rounded-b-[100px]  shadow' style={{ backgroundImage: `url(${bg})` }}>
          <header className=''>
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
      </main>





      <footer>

      </footer>
    </section>
  )
}

export default App