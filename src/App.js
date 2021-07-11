import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer'
import FooterContainer from './containers/FooterContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
      <FooterContainer /> 
    </div>
  );
}

export default App;
