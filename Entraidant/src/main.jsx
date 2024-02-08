import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App/App";
import QuiSommesNous from './pages/QuiSommesNous/QuiSommesNous';
import Specialiste from './pages/Specialiste/specialiste';


async function initializeApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/specialiste" element={<Specialiste />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/demarches" element={<Demarches />} /> */}
          {/* <Route path="/messagerie" element={<Messagerie/>} /> */}
        </Routes>
      </BrowserRouter>
    );
  }


  root.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}


initializeApp();
