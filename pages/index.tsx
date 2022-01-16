import type { NextPage } from 'next'
import Header from '../src/components/Header'
import Footer from "../src/components/Footer";
import Hero from '../src/components/Home/Hero';
import RecentBlog from '../src/components/Home/RecentBlog';
import RecentWork from '../src/components/Home/RecentProjects';


const Home: NextPage = () => {
  return (
    <div>
      {/* Navigation section */}
      <Header />
      {/* Main sections */}
      <main>
        <Hero />
        <RecentWork />
        <RecentBlog />
      </main>
      {/* Footer sections */}
      <Footer />
    </div>
  )
}

export default Home
