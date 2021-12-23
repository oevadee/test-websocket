import { render } from 'preact';
import { App } from './App';
import './index.css';

const el = document.getElementById('app');
if (el) {
  render(<App />, el);
}
