import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Router from './Router';

function App() {
  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Tu Mesa es mi Mesa</h1>
        <Router></Router>
      </div>
    </>
  );
}

export default App;