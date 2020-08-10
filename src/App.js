import React from 'react';
import './App.css';
import { LandingComponent } from './landing.component/landing.component';
import { HomeComponent } from './home.component/home.component';

function App() {
  return (
    <div className="App">
      <LandingComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
