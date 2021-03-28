import React from 'react'
import Content from './Content'
import Header from './Header'

function Layout({ children }) {
    return (
        <div className="container px-0">
                { children }
        </div>
    )
}

export { Layout, Header, Content }