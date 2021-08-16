import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import Content from '../Content';
import Footer from '../Footer';
import Header from "../Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
