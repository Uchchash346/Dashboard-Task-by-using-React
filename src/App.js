import './App.css';
import 'antd/dist/antd.css';
import Sidebar from './components/Pages/Sidebar';
import Header from './components/Pages/Header';
import ProposalStatus from './components/Pages/ProposalStatus';
import PriceFilter from './components/Pages/PriceFilter';
import VehicleCategory from './components/Pages/VehicleCategory';
import User from './components/Pages/User';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <ProposalStatus />
      <PriceFilter />
      <VehicleCategory />
      <User />
    </div>
  );
}

export default App;
