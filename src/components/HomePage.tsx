import React from 'react'
import { IEpisodeProps } from '../interfaces'
import { Store } from '../Store'
import { fetchDataAction, toggleFaveAction } from '../Actions'

const EpisodeList = React.lazy<any>(() => import('./episodeList'))

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store)

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    })

    const props: IEpisodeProps = {
        episodes: state.episodes,
        store: { state, dispatch },
        toggleFaveAction,
        favourites: state.favourites
    }

    return (
        <>
            <React.Suspense fallback={<>Loading...</>}>
                <section className='episode-layout'>
                    <EpisodeList {...props} />
                </section>
            </React.Suspense>
        </>
    )
}
