import React from 'react'
import { Store } from './Store'
import { IAction, IEpisode } from './interfaces'

const EpisodeList = React.lazy<any>(() => import('./episodeList'))

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    }

    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }

    return dispatch(dispatchObj)
  }

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites
  }

  console.log(state.favourites.length)
  return (
    <>
      <header className='header'>
        <h1>Rick and Morty</h1>
        <div>
          <p>Pick your favourite episode!</p>
          <p>You have selected {state.favourites.length} favourites</p>
        </div>
      </header>
      <React.Suspense fallback={<>Loading...</>}>
        <section className='episode-layout'>
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  )
}



