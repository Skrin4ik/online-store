import HomePage from "../HomePage";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from "../Header";
import ProductListPage from "../ProductListPage";
import Footer from "../Footer";
import './style.css';

const App = () => {

  return (
    <Router>
      <Header />
      <main className="main">
        <div className="container">

          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/product/:id" exact component={ProductListPage}/>
            <Redirect to="/error-page"/>
          </Switch>

        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;