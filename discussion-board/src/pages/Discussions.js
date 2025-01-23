import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Discussions = () => {
    const [discussions, setDiscussions] = useState([]);
    const [likes, setLikes] = useState({});
    const [dislikes, setDislikes] = useState({});
    const [isLinkHovered, setLinkHovered] = useState(false);

    // Load discussions, likes, and dislikes from localStorage
    useEffect(() => {
        const storedDiscussions = JSON.parse(localStorage.getItem('discussions')) || [];
        setDiscussions(storedDiscussions);

        const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
        const storedDislikes = JSON.parse(localStorage.getItem('dislikes')) || {};
        setLikes(storedLikes);
        setDislikes(storedDislikes);
    }, []);

    // Handle like action
    const handleLike = (id) => {
        const updatedLikes = { ...likes, [id]: (likes[id] || 0) + 1 };
        setLikes(updatedLikes);
        localStorage.setItem('likes', JSON.stringify(updatedLikes));
    };

    // Handle dislike action
    const handleDislike = (id) => {
        const updatedDislikes = { ...dislikes, [id]: (dislikes[id] || 0) + 1 };
        setDislikes(updatedDislikes);
        localStorage.setItem('dislikes', JSON.stringify(updatedDislikes));
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Discussions</h1>
            <Link
                to="/new-discussion"
                className={`btn ${isLinkHovered ? 'btn-danger' : 'btn-primary'} mb-4`}
                onMouseOver={() => setLinkHovered(true)}
                onMouseOut={() => setLinkHovered(false)}
            >
                Post a New Discussion
            </Link>
            <div className="row">
                {discussions.map((discussion) => (
                    <div key={discussion.id} className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{discussion.title}</h5>
                                <p className="card-text">{discussion.content}</p>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-outline-success me-2"
                                        onClick={() => handleLike(discussion.id)}
                                    >
                                        
                                        Like ({likes[discussion.id] || 0})
                                    </button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDislike(discussion.id)}
                                    >
                                        
                                        Dislike ({dislikes[discussion.id] || 0})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discussions;