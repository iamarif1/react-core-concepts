import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Arif', 'Jisan', 'Madhu', 'Jahangir', 'Shahin'];
  const jobs = ['Js Developer', 'React Developer', 'Laraval Developer'];
  const products = [
    {name: 'Iphone', price: '$500' },
    {name: 'MI', price: '$300'},
    {name: ' Tecno', price: '$900'},
    {name: 'Lenevo', price: '$200'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <Todo></Todo>
        <Post></Post>
          <ul>
            {
            names.map(name => <li>{name}</li> )
            }
          </ul>
          {
            products.map(pd =><Products product={pd}></Products>)
          }
        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products> */}
        <FriendsName name={names[1]} job={jobs[1]}></FriendsName>
        <FriendsName name= {names[3]} job={jobs[2]}></FriendsName>
      </header>
    </div>
  );
}

function FriendsName (props) {
  const style = {
    border: '2px solid yellow', 
    width: '600px', 
    margin: '10px'
  }
   return(
     <div style= {style}>
       <h2>Name: {props.name} </h2>
       <h3>Profession: {props.job} </h3>
     </div>
   );
}

function Products (props) {
  const ProductStyle = {
    border: '2px solid yellow',
    borderRadius: '10px',
    backgroundColor: '',
    width: '400px',
    margin: '10px',
    padding: '20px'
  }
  const {name, price} = props.product;
    return (
      <div style={ProductStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    );
}

function  Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Minus--</button>
      <button onClick = {()=> setCount(count + 1)}>Plus++</button>
    </div>
  )
}
const StyleUser = {
  border: '2px solid yellow',

}
function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [])
  return(
    <div style = {StyleUser}>
      <h2>Daynamic User: {users.length}</h2>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
      <ul>
        {users.map(user => <li>{user.email}</li>)}
      </ul>
    </div>
  )
}
function Todo(){
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => res.json())
    .then(data => setTodo(data))
  })
  return (
    <div>
      <h2>User Todos: {todos.length} </h2>
      {
        todos.map(todo => <li>{todo.title}</li>)
      }
    </div>
  )
}

function Post() {
  const [posts, setPost] = useState([]);
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [])
  return (
    <div>
      <h3>Count Post: {posts.length} </h3>
      {
        posts.map(post => <li>{post.body}</li>)
      }
    </div>
  )
}
export default App;
