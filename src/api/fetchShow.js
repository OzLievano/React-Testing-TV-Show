import axios from 'axios';
import React, {useEffect} from 'react'


export const fetchShow = () =>{
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res=> {return res})
    .catch(err => {return err})
}