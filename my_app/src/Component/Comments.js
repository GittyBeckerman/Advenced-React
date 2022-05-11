import React, { useState, useEffect } from 'react';
import { getData } from '../fetchFunctions';
import { useHistory, useParams } from 'react-router-dom'
export default function Comments(props) {
    const [comment, setComment] = useState([]);
    const temp = props.location.state;

    useEffect(() => {
        let tempArr = [];
        getData("http://jsonplaceholder.typicode.com/comments?postId=" + temp)
            .then(data => {
                data.forEach(element => {
                    tempArr.push(element);
                });
                setComment(tempArr)
            })
    }, []);

    return (
        <>
            {comment.map(item => {
                return (<>
                    <p style={{ border: "2px solid red" }}>
                        <p>Name:</p>
                        <div>{item.name}</div>
                        <p>Email:</p>
                        <div>{item.email}</div>
                        <p>Body:</p>
                        <div>{item.body}</div>
                    </p>
                </>)
            })}
        </>
    )
}