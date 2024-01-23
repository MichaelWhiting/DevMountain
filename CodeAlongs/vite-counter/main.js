import setupCounter from './src/counter.js';
import './styles.css';

console.log('Hello from main.js');

document.querySelector('#app').innerHTML = `
  <h1>Counter App</h1>

  <p>Click the button to increase the counter.</p>

  <div id="counter"></div>
`;

setupCounter(document.querySelector('#counter'));