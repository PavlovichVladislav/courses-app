import ReactDOM from 'react-dom';
import Counter from './components/Counter';

const App = () => {
  return (
    <Counter/>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));