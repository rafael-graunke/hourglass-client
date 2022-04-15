import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import ContentWrapper from './components/layout/ContentWrapper';
import Container from './components/layout/Container';

import Relatorios from './components/pages/Relatorios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentWrapper>
        <Sidebar />
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<Relatorios />} />
            </Routes>
          </Container>
        </Router>
      </ContentWrapper>
    </div>
  );
}

export default App;
