export type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string,
    payload: Array<IEpisode>
}

export interface IEpisodeProps {
    episodes: Array<IEpisode>
    store: { state: IState, dispatch: Dispatch }
    toggleFaveAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction
    favourites: Array<IEpisode>
}

export interface IEpisode {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: { medium: string, original: string }
    name: string
    number: number
    runtime: string
    season: number
    summary: string
    url: string
}

