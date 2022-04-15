import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './frontend/components/layout/Navbar';
import Sidebar from './frontend/components/layout/Sidebar';
import ContentWrapper from './frontend/components/layout/ContentWrapper';
import Container from './frontend/components/layout/Container';

import Relatorios from './frontend/components/pages/Relatorios';

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
