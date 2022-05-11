import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getData } from '../fetchFunctions';

export default function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory()

    function logHandler(e) {
        e.preventDefault();
        getData("https://jsonplaceholder.typicode.com/users?username=" + name).then(user => {
            if (user != null) {
                const pass = user[0].address.geo.lat.substr(4, 7);
                if (pass === password) {
                    alert('hello! you enterrd auccesfuly...');
                    localStorage.setItem('user', JSON.stringify(user));
                    setName('');
                    setPassword('');
                    history.push('/home');
                    props.setLogdIn(true);
                }
            }

            else {
                alert('try again! ');
                setName('');
                setPassword('');
                history.push('/Login');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <form>
                <input type="text" value={name} name="userName" placeholder="User name" onChange={(e) => { setName(e.target.value) }} />
                <br />
                <input type="password" value={password} name="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <button type="submit" value="Log-in" name="Button" onClick={(e) => logHandler(e)}>Log-in</button>
            </form>
        </>
    )
}