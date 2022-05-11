import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import { getData } from '../fetchFunctions'
import { async } from 'q';



export default function Photos(props) {

    const { id } = useParams();
    const [PhotosList, setPhotosList] = useState([]);
    const [Start, setStart] = useState(0);
    function setS() {
        setStart(Start + 10);
    }
    let srcArr = []
    useEffect(() => {
        getData(`http://jsonplaceholder.typicode.com/photos?albumId=${parseInt(id)}&_start=${Start}&_limit=10`)
            .then(allPhotos => {
                allPhotos.forEach(element => {
                    srcArr.push(element.thumbnailUrl);
                });
                let a = srcArr;
                setPhotosList(prev =>
                    [...prev, ...a]);
            })
    }, [Start])

    return (
        <>
            <div>{ }</div>
            {PhotosList.map(item => {
                return (<>
                    <img src={item} />
                </>)
            })}
            <button onClick={() => setS()}>Load more </button>
            <h1>{props.location.state.title}</h1>
        </>
    )
}