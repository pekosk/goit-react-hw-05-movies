import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import PageWrapper from '../../shared/wrapper';
import ReviewInfo from "../../client/ReviewInfo";

import {ApiService} from "../../shared/service";

import {initialState} from "./initialState"

const ReviewPage = ()=> {
    const [state, setState] = useState(initialState);

    const {id} = useParams();

    useEffect(()=> {
        const fetchMovie = async()=> {
            try {
                const {data} = await ApiService.getReviews(id);
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
            {data && <ReviewInfo {...data} />} 
        </PageWrapper>
    )
}

export default ReviewPage;