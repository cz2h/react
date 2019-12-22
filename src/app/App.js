import './components/css/App.css';
import Nav from './components/Navbar';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// Main pages
import Graph from './components/Graph';
import Login from './components/Login';
import About from './components/About';
import Welcome from './components/Welcome';
import Post from './components/Post';
import axios from 'axios';

var React = require('react');
// var Nav = require('./components/Navbar');

class App extends React.Component {
  state = {
    posts: [],
    curPost: null
  }

  componentDidMount() {
    console.log('App mounted');
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (res) => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 10)
        })
      });

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Updated: App');
  }



  render() {
    console.log('App rendered');

    const { posts } = this.state;
    const poList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id}>
            <Link to={"/" + post.id}>
              {post.id} : {post.title}
            </Link>
          </div>
        )
      })
    ) : (
        <div>No Post</div>
      );
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/graph" component={Graph}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/:post_id" component={Post}></Route>
        </Switch>
        <h2> Accouncements </h2>
        {poList}
      </BrowserRouter>
    );
  }
}
export default App;
