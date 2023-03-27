import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import InicioPage from './pages/InicioPage';
import PlataformaPage from './pages/PlataformaPage';
import TrailersPage from './pages/TrailersPage';

import { BrowserRouter as router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path='/' element={<InicioPage/>}/>
     <Route path='/contacto' element={<ContactoPage/>}/>
     <Route path='/plataformas' element={<PlataformaPage/>}/>
     <Route path='/trailers' element={<TrailersPage/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
