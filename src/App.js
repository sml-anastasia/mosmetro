import './App.css';
import { Route, Routes } from 'react-router-dom';
import EventCardFull from './components/EventCardFull';
import EventCardList from './pages/EventCardList';
import MyEvents from './pages/MyEvents';
import Layout from './features/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventCardList />} />
          <Route path="/events" element={<EventCardList />} />
          <Route path="/calendar" element={<MyEvents />} />
          <Route path="/events/:id" element={<EventCardFull />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
