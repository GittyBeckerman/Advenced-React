import React from 'react';

function name() {
    const response = (JSON.parse(localStorage.getItem("user")));
    if (response) return response[0].name;
    return '';
}

export default function Home() {
    return (<>

        <h2>hello {name()}</h2>
    </>
    )
}