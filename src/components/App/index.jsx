import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../Content';
import Footer from '../Footer';
import Header from "../Header";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
