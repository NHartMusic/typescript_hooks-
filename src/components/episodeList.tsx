import React from 'react'
import { IAction, IEpisode } from '../interfaces'

export default function EpisodesList(props: any): Array<JSX.Element> {
    const { episodes, toggleFaveAction, favourites, store } = props
    const { state, dispatch } = store
    return episodes.map((episode: IEpisode) => {
        return (
            <section key={episode.id} className='episode-box'>
                <img
                    src={episode.image.medium}
                    alt={`Rick and Morty ${episode.name}`}
                />
                <div>{episode.name}</div>
                <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>Season: {episode.season} Number: {episode.number}</div>
                    <button type='button' onClick={() => toggleFaveAction(state, dispatch, episode)}>
                        {favourites.find
                            ((fav: IEpisode) => fav.id === episode.id)
                            ? 'Un-Favourite'
                            : 'Favourite'
                        }
                    </button>
                </section>
            </section>
        )
    })
}
