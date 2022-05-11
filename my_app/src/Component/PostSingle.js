import React from 'react';
import Comments from '../Component/Comments';

export default function PostSingle(props) {
    return (
        <>
            <h3>{props.item.body}</h3>
            <p>{props.item.title}</p>
            <button onClick={() => props.handleClick(props.item.id)}>Comments</button>
            {
                <div>{props.item.id == props.commentsManage && <Comments postId={props.item.id} />} </div>
            }
        </>
    )
}