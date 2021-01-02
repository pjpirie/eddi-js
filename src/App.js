import { Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header.layout';
import Footer from './components/layout/Footer.layout';
import Sidebar from './components/layout/Sidebar.layout';
import Editor from './components/app/Editor.app';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="mainContent">
        <Editor />
        <Sidebar />
      </div>
      <Footer />

    </div>
  );
}

export default App;
