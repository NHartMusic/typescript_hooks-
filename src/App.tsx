import React from 'react'
import { Link } from '@reach/router'
import { Store } from './Store'

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store)

  return (
    <>
      <header className='header'>
        <h1>Rick and Morty</h1>
        <div>
          <p>Pick your favourite episode!</p>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/faves'>
              <p>
                You have selected {state.favourites.length} {
                  ((state.favourites.length > 1) ? 'favourites' : 'favourite')
                }
              </p>
            </Link>
          </div>
        </div>
      </header>
      {props.children}
    </>
  )
}



