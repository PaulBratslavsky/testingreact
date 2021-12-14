import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button exists', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: "Change Color" });
  expect(button).toBeInTheDocument();
});

test('button has initial color', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toHaveStyle('background-color: blue');
}) 

test('button has initial text', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Change Color');
})

test('button turns red on click', () => {
  render(<App />);
  const button = screen.getByRole('button');
  fireEvent.click(button); // or can use button.click();
  expect(button).toHaveStyle('background-color: red');
})
