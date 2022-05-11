import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function UserPost(props) {

    return (<>
        <div style={{justifyContent: "center", border: "3px solid red" }}>
            <div style={{textAlign: "center", backgroundColor: "lightblue", fontSize: "90px" }}>{props.item.title}</div>
            <div style={{ textAlign: "center", color: "lightblue", fontSize: "70px" }}>{props.item.body}</div>
            <Link style={{margin: "0px",  textAlign: "center", border: "1px solid red", backgroundColor: "lightblue", fontSize: "50px" }} to={{ pathname: `/Comments/${props.item.id}`, state: props.item.id }}> Show comments </ Link>
            <br />
        </div>
    </>)
}