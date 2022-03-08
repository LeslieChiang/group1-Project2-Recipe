import React from 'react'
import './App.css';
// import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <div className="App container">
      {/* <FormikContainer /> */}
      <LoginForm />
      <RecipeForm />
  
    </div>
  );
}

export default App;
