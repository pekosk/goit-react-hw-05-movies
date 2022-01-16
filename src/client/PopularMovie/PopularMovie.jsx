import { useState, useEffect } from "react";
import PopularMovieItem from "./PopularMovieItem";
import { ApiService } from '../../shared/service';
import { initialState } from "./initialState";

const PopularMovie = () => {
    const [state, setState] = useState({ ...initialState });

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const { data } = await ApiService.getPopular();

                setState(({ items }) => {
                    const newState = {
                        ...state,
                        items: [...items, ...data.results],
                    };

                    return newState
                })
            } catch (error) {
                setState({ ...state, error })
            }
        }

        setState({ ...state });
        fetchMovie();
    }, [state.error]);


    const { items, error } = state;

    const elements = items.map(item => <PopularMovieItem key={item.id} {...item} />)

    return (
        <div>
            {error && <p>Не удалось загрузить фильм</p>}
            {!error && (<ul>
                {elements}
            </ul>)}
        </div>
    )
}

export default PopularMovie;