import './App.css';
import Navbarhome from './components/Navbar';
import ProductsPage from './components/ProductsPage';
import Search from './components/search';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <>
    <Navbarhome />
    &nbsp;&nbsp;<span style={{'font-size':12}}> Medical Darpan{'>'} Search {'>'} <span style={{'font-weight':'700'}}> FabiFlu Tablet </span></span>
    <Search />
    <span style={{'font-size':26}}>&nbsp;&nbsp; Paracetamol </span><span> (128 products) </span> <span style={{'background-color':'teal','color':'white'}}> Aceclofenac <i class="fa-solid fa-xmark"></i> &nbsp;
     </span> &nbsp;<span style={{'background-color':'teal','color':'white'}}> 500 mg <i class="fa-solid fa-xmark"></i>&nbsp; </span><span style={{'color':'maroon','font-size':14}}>&nbsp;&nbsp;&nbsp; Remove All</span>
    <div className='container' >
      <Sidebar />
      <ProductsPage />
    </div>
    </>
  );
}

export default App;
