import React from 'react'
import { Store } from '../Store'
import { toggleFaveAction } from '../Actions'
import { IEpisodeProps } from '../interfaces'

const EpisodeList = React.lazy<any>(() => import('./episodeList'))

export default function FavePage(): JSX.Element {
    const { state, dispatch } = React.useContext(Store)

    const props: IEpisodeProps = {
        episodes: state.favourites,
        store: { state, dispatch },
        toggleFaveAction,
        favourites: state.favourites
    }

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <div className='episode-layout'>
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    )
}
