import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import { store } from '@/store'
import './App.css'
import HomePage from '@/pages/HomePage'
import ColumnPage from '@/pages/ColumnPage'
import RecordPage from '@/pages/RecordPage'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'antd/dist/antd.css';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div style={{ minHeight: '100vh' }}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/record">
            <RecordPage />
          </Route>
          <Route exact path="/column">
            <ColumnPage />
          </Route>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
