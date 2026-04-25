import './App.css';
import NavBar from './homePage/NavBar.tsx';
import {Footer} from './homePage/NavBar.tsx';
import './homePage/NavBar.css';

import './homePage/TheGraph.css';
import './homePage/mca.css';

import { Routes, Route } from 'react-router-dom';
import About from './pages/about.tsx';
import CONTACT from './pages/contact.tsx';
import DETAILS from './pages/details.tsx';
import MCA from './pages/mca.tsx';
import SORTING from './pages/Sorting.tsx';

import HomePageCharts from './homePage/HomePageChart.tsx';

export default function App() {
  return (
    <div className='body-wrap'>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<HomePageCharts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<CONTACT />} />
          <Route path="/details" element={<DETAILS />} />
          <Route path="/mca" element={<MCA />} />
          <Route path="/sorting" element={<SORTING />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
