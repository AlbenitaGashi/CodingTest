import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Rotues from './routes/router';
import "./style/style.scss"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {console.log(location.pathname)}
      {location.pathname.toLowerCase() != "/login" ? <Header /> : ''}
      <Rotues />
    </div>
  );
}

export default App;
