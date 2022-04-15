import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import ContentWrapper from './components/layout/ContentWrapper';
import Container from './components/layout/Container';

import Relatorios from './components/pages/Relatorios';
import Horas from './components/pages/Horas';
import Emails from './components/pages/Emails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ContentWrapper>
          <Sidebar />
          <Container>
            <Routes>
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/horas" element={<Horas />} />
              <Route path="/emails" element={<Emails />} />
            </Routes>
          </Container>
        </ContentWrapper>
      </Router>
    </div>
  );
}

export default App;
