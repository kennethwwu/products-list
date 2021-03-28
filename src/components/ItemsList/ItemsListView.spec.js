import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ItemsListView from './ItemsListView'
import data from '../../store/data.json'

test('ItemsListView has 2 rows', async () => {
    await act(async () => render(<ItemsListView data={data}/>))
    const { getAllByRole } = screen
    const imgs = getAllByRole('img')
    expect(imgs.length).toBe(8);
    const rows = getAllByRole('row')
    expect(rows.length).toBe(2);
})

test('ItemsListView has 1 rows', async () => {
    const [one, two, three] = data
    await act(async () => render(<ItemsListView data={[one, two, three]}/>))
    const { getAllByRole } = screen
    const imgs = getAllByRole('img')
    expect(imgs.length).toBe(3);
    const rows = getAllByRole('row')
    expect(rows.length).toBe(1);
})

test('ItemsListView has no data', async () => {
    await act(async () => render(<ItemsListView data={null}/>))
    const { getByText } = screen
    const noDataTxt = getByText(/^no data/i)
    expect(noDataTxt).toBeTruthy()
})