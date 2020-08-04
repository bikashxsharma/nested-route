import React from 'react';
import { BrowserRouter as Router, Route, Link, useLocation, useParams } from 'react-router-dom'
import posts from './postData.js'
import './App.css';




const Home = () => {
  return (<h1>Home</h1>)
}
const Body = () => {
  const { postId } = useParams()
  const post = posts.filter((post) => post.id === parseInt(postId))[0]
  return (<p>{post.body}</p>)
}
const Post = () => {
  const { postId } = useParams()
  const location = useLocation()
  console.log(location)
  const post = posts.filter((post) => post.id === parseInt(postId))[0]

  return (<Router>
    <h2>{post.title}</h2>
    <p><Link to={`${location.pathname}/${post.id}`}>Read more..</Link></p>
    <Route path={`${location.pathname}/:postId`} component={Body} />
  </Router>
  )
}

const Posts = () => {
  return (
    <Router>
      <h1>Post</h1>
      <ul>
        {posts.map(({ title, id }) => (
          <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
        ))}
      </ul>
      <hr />
      <Route path={`/posts/:postId`} component={Post} />
    </Router>)
}


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
        <hr />
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
      </div>
    </Router>
  );
}

export default App;
