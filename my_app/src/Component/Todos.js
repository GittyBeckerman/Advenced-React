import React, { useState, useEffect } from 'react';
import { getData } from '../fetchFunctions';

export function compareAB(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

export function compare(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

function Todos() {

  const [todoslist, setTodoList] = useState([]);
  const [sort, setsort] = useState('serial');

  useEffect(() => {

    let User = JSON.parse(localStorage.getItem('user'))
    getData('https://jsonplaceholder.typicode.com/todos?userId=' + User[0].id)
      .then(todosArr => {
        setTodoList(todosArr);
      })
  }, []);

  function sortId(e) {
    setsort(e.target.value)

    switch (e.target.value) {
      case 'random':
        random()
        break;
      case 'serial':

        todoslist.sort(compare);
        break;
      case 'Alphabetical':

        todoslist.sort(compareAB);
        break;
      case 'Performance':
        function compareTask(a, b) {
          if (a.completed < b.completed) {
            return 1;
          }
          if (a.completed > b.completed) {
            return -1;
          }
          return 0;
        }
        todoslist.sort(compareTask);
    }
  }

  function random() {
    let array = todoslist;
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setTodoList(array);
  }

  return (
    <div>
      <select value={sort} name="" id="" onChange={(e) => sortId(e)}   >
        <option value="Performance">Performance</option>
        <option value="serial">serial</option>
        <option value="random">random</option>
        <option value="Alphabetical">Alphabetical</option>
      </select>
      {todoslist.map(item => {
        return (<><br /><input type="checkbox"
          checked={item.completed} /><label>{item.title}</label><label>{item.id}</label></>)
      })}
    </div>
  )
}

export default Todos;