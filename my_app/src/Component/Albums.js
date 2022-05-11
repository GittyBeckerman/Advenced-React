import React, { useState, useEffect } from 'react';
import { getData } from '../fetchFunctions';
import { compareAB } from '../Component/Todos';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Photos from '../Component/Photos'


export default function Albums() {
    const [AlbumsList, setAlbumsList] = useState([]);


    useEffect(() => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        const arr = [];
        getData('http://jsonplaceholder.typicode.com/albums?userId=' + currentUser[0].id)
            .then(allAlbums => {
                allAlbums.forEach(element => {
                    arr.push(element);
                });
                arr.sort(compareAB);
                setAlbumsList(arr);
            })
    }, [])
    return (
        <>
            {AlbumsList.map(item => {
                return (<>
                    <Link to={{
                        pathname: `/Photos/${item.id}`,
                        state: item
                    }}>{item.title} </ Link>
                    <br />
                </>)
            })}
        </>
    )

}