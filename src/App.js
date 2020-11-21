import { Provider } from 'react-redux';
import {store} from './redux/store';
import Calc from './components/Calc';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Calc />
    </div>
    </Provider>
  );
}

export default App;
