import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import PageWrapper from '../../shared/wrapper';
import MovieInfo from "../../client/MovieInfo";

import {ApiService} from "../../shared/service";

import {initialState} from "./initialState"

const MovieInfoPage = ()=> {
    const [state, setState] = useState(initialState);

    const {id} = useParams();

    useEffect(()=> {
        const fetchMovie = async()=> {
            try {
                const {data} = await ApiService.getDetails(id);
                setState({...state, data });
            } catch (error) {
                setState({...state, error })
            }

        };
        setState({...state, loading: true})
        fetchMovie();
    }, []);

    const {data} = state;
    
    return (
        <PageWrapper>
            {data && <MovieInfo {...data} />} 
        </PageWrapper>
    )
}

export default MovieInfoPage;