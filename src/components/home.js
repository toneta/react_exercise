import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Viki from '../viki.jpg';

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            });
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Viki} alt="sladkoto Viki" / >
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'>No posts yet</div>
        );
        return (
            <div className="container">
                <h1 className="center">This is the home</h1>
    
                <div>{postList}</div>
            </div>
        );
    }
}

export default Home