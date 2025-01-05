
import Navbar from './components/common/Navbar';
import PrimaryBG from './components/common/PrimaryBG';
import SecondaryBg from './components/common/SecondaryBg';
import HeroSection from './components/HeroSection/HeroSection';
import Stacks from './components/Stacks/Stacks';
import Journey from './components/Journey/Journey';
import bg from '../src/assets/bg1.jpg'
import bg1 from '../src/assets/bg2.jpg'
function App() {
  return (
    <section className='font-poppins text-natural'>
      {/* <Menu>
      </Menu> */}
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
      </main>
      <footer>

      </footer>
    </section>
  )
}

export default App