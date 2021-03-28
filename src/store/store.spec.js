import React, { useContext } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { createStore, dataContext, filterContext, searchContext } from './index';


const Store = createStore();

const TestComponent = () => {
    const data = useContext(dataContext)
    const changeType = useContext(filterContext)
    const changeSearchContent = useContext(searchContext)

    return(
        <>
        { (data && data.length>0)
            ?data.map(i => <span key={i.index}>{`item ${i.productName}`}</span>)
            :'No Found'}
        <input type="text" name="filter" data-testid="filter" onChange={changeType} />
        <input type="text" name="search" data-testid="search" onChange={changeSearchContent} />
        </>
    )
}

test('Store', async () => {
    await act(async () => render(<Store><TestComponent /></Store>))
    const { getAllByText } = screen
    const spanEls = getAllByText(/^item/i)
    expect(spanEls).toBeTruthy();
    expect(spanEls.length).toBe(8)
})

test('filter by type', async () => {
    await act(async () => render(<Store><TestComponent /></Store>))
    const { getByTestId ,getAllByText } = screen
    const typeInput = getByTestId('filter')
    await act( async () => fireEvent.change(typeInput, { target: { value: "Beer"}}))
    const spanEls = getAllByText(/^item/i)
    expect(spanEls.length).toBe(4)
})

test('search by name', async () => {
    await act(async () => render(<Store><TestComponent /></Store>))
    const { getByTestId ,getAllByText } = screen
    const searchInput = getByTestId('search')
    await act( async () => fireEvent.change(searchInput, { target: { value: "Victoria"}}))
    const spanEls = getAllByText(/^item/i)
    expect(spanEls.length).toBe(1)
})
