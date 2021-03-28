import React, { createContext, useState, useCallback, useEffect } from 'react'
import data from './data.json'

const dataContext = createContext();
const filterContext = createContext();
const searchContext = createContext();

const defaultFilterFunc = (type, search) => data.filter(item => type ? item.type === type : true).filter(i => {
    const regex = new RegExp(search, 'i');
    return regex.test(i.productName)
})

const createStore = (initial = data, filterFunc = defaultFilterFunc) => ({ children }) => {
    const [data, setData] = useState(initial)
    const [type, setType] = useState('');
    const [search, setSearch] = useState('')

    const changeType = useCallback(
        (event) => {
            setType(event.target.value)
        },
        [setType],
    )

    const changeSearchContent = useCallback( event => {
        const next = event.target.value
        setSearch(next)
    },[setSearch])

    useEffect(() => {
        setData([...filterFunc(type, search)])
    }, [type, search, setData])


    return (
        <dataContext.Provider value={data}>
            <filterContext.Provider value={changeType}>
                <searchContext.Provider value={changeSearchContent}>
                    {children}
                </searchContext.Provider>
            </filterContext.Provider >
        </dataContext.Provider>

    )
}

export { createStore, dataContext, filterContext, searchContext }