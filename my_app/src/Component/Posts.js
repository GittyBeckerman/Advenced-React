import React, { useState, useEffect } from 'react';
import { getData } from '../fetchFunctions';
import UserPost from '../Component/UserPost';
import Comments from '../Component/Comments';
import { compare } from '../Component/Todos';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostSingle from './PostSingle';

export default function Posts() {
  const [postsList, setPostList] = useState([]);
  // const [commentsManage, setCommentsManage] = useState(null);

  useEffect(() => {
    const currentUserId = JSON.parse(localStorage.getItem('user'));
    getData("http://jsonplaceholder.typicode.com/posts?userId=" + currentUserId[0].id)
      .then(userPosts => {
        setPostList(userPosts);
      })
  }, [])

  postsList.sort(compare);


  return (
    <>

      {postsList.map(item => {
        return (<>
          <Link to={`/Posts/UserPost${item.id}`}>{item.title}</Link>
          <br />
          <Switch>
            <Route path={`/Posts/UserPost${item.id}`} ><UserPost item={item} /></Route>
          </Switch>
        </>)
      })}
    </>
  )
}