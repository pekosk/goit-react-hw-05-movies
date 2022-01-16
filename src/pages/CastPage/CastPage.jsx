import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import PageWrapper from '../../shared/wrapper';
import CastInfo from "../../client/CastInfo";
import {ApiService} from "../../shared/service";
import {initialState} from "./initialState"

const CastPage = ()=> {
    const [state, setState] = useState(initialState);

    const {id} = useParams();

    useEffect(()=> {
        const fetchMovie = async()=> {
            try {
                const {data} = await ApiService.getCredits(id);
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
            {data && <CastInfo {...data} />} 
        </PageWrapper>
    )
}

export default CastPage;