import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <h1>category</h1>
        </Route>
        <Route exact path="/product">
          <h1>product</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
