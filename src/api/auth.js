// src/api/auth.js

export const login = (username, password) => {
    // Replace with your login implementation
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'password') {
        // Simulate a successful login
        setTimeout(() => {
          resolve({ username });
        }, 1000);
      } else {
        // Simulate a failed login
        setTimeout(() => {
          reject(new Error('Invalid username or password'));
        }, 1000);
      }
    });
  };
  
  export const register = (username, password) => {
    // Replace with your register implementation
    return new Promise((resolve, reject) => {
      // Simulate a successful registration
      setTimeout(() => {
        resolve({ username });
      }, 1000);
    });
  };
  