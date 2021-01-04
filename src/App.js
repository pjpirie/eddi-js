import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
import Header from './components/layout/Header.layout';
import Footer from './components/layout/Footer.layout';
import Sidebar from './components/layout/Sidebar.layout';
import Editor from './components/app/Editor.app';

const ENDPOINT = "http://localhost:4001";

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', data => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="mainContent">
        <Editor />
        <Sidebar />
        <h1>{response}</h1>
      </div>
      <Footer />

    </div>
  );
}

export default App;
