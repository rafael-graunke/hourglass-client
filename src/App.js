import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import ContentWrapper from './components/layout/ContentWrapper';
import Container from './components/layout/Container';

import Relatorios from './components/pages/Relatorios';
import Horas from './components/pages/Horas';
import Emails from './components/pages/Emails';

function App() {
  const [entity, setEntity] = useState(1);

  return (
    <div className="App">
      <Router>
        <Navbar handleSelect={setEntity} />
        <ContentWrapper>
          <Sidebar />
          <Container>
            <Routes>
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/horas" element={<Horas entity={entity} />} />
              <Route path="/emails" element={<Emails entity={entity} />} />
            </Routes>
          </Container>
        </ContentWrapper>
      </Router>
    </div>
  );
}

export default App;
