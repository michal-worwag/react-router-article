import { Routes, Route } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import Layout from './layouts/layout';
import NotFound from './pages/not-found';

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
