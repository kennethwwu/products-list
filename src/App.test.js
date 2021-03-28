import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  await act(async () => render(<App />))
  const { getAllByRole } = screen
  const imgs = getAllByRole('img')
  expect(imgs.length).toBe(8);
});

test('search bar', async () => {
  await act(async () => render(<App />))
  const { getByTestId } = screen
  const searchBar = getByTestId('search-bar')
  expect(searchBar).toBeTruthy();
});

test('filter', async () => {
  await act(async () => render(<App />))
  const { getByTestId } = screen
  const filter = getByTestId('select-element')
  expect(filter).toBeTruthy();
});
