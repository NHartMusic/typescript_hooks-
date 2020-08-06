import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { StoreProvider } from './Store'
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './components/HomePage'
import FavePage from './components/FavePage'

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavePage />} path='/faves' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)


