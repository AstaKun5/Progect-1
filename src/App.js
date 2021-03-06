import React, { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
 
function App() {
  const [password, setPassword] = useState('');
 
  return (
    <div className="App">
      
      <h3>Password Strength</h3>
      
      <div className="pwd-container">
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <PasswordStrengthBar password={password} />
      </div>
    </div>
  );
}
 
export default App;