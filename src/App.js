import './App.css';
import Header from './Header';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Login from './Login'
import Register from './Register'
import Protected from './Protected';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/add_product' element={<Protected Cmp={AddProduct}/>}/>
      <Route path='/update_product' element={<Protected Cmp={UpdateProduct}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
