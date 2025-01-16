import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Discussions = () => {
    const [discussions, setDiscussions] = useState([]);
    const [likes, setLikes] = useState({});
    const [dislikes, setDislikes] = useState({});
    const [isLinkHovered, setLinkHovered] = useState(false);
    const [isLikeHovered, setLikeHovered] = useState(false);
    const [isDislikeHovered, setDislikeHovered] = useState(false);

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

    // Handle hover for link and buttons
    const handleLinkHover = (isHovered) => setLinkHovered(isHovered);
    const handleButtonHover = (isLike, isHovered) => {
        if (isLike) setLikeHovered(isHovered);
        else setDislikeHovered(isHovered);
    };

    // Styles
    const styles = {
        container: {
            maxWidth: '900px',
            margin: '50px auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        header: {
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#444',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        },
        link: {
            display: 'inline-block',
            padding: '12px 24px',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: isLinkHovered ? '#FF6347' : '#007bff',
            borderRadius: '30px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: isLinkHovered ? '0 0 10px rgba(255, 99, 71, 0.5)' : 'none',
            marginBottom: '30px',
        },
        list: {
            listStyle: 'none',
            padding: '0',
            width: '100%',
        },
        listItem: {
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '12px',
            textTransform: 'capitalize',
        },
        content: {
            fontSize: '16px',
            color: '#555',
            marginBottom: '20px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
        },
        likeButton: {
            backgroundColor: isLikeHovered ? '#32CD32' : '#28a745',
            color: '#fff',
        },
        dislikeButton: {
            backgroundColor: isDislikeHovered ? '#FF6347' : '#dc3545',
            color: '#fff',
        },
        hoverEffect: {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Discussions</h1>
            <Link
                to="/new-discussion"
                style={styles.link}
                onMouseOver={() => handleLinkHover(true)}
                onMouseOut={() => handleLinkHover(false)}
            >
                Post a New Discussion
            </Link>
            <ul style={styles.list}>
                {discussions.map((discussion) => (
                    <li
                        key={discussion.id}
                        style={{
                            ...styles.listItem,
                            ...(likes[discussion.id] > 0 || dislikes[discussion.id] > 0) && styles.hoverEffect,
                        }}
                    >
                        <h2 style={styles.title}>{discussion.title}</h2>
                        <p style={styles.content}>{discussion.content}</p>
                        <button
                            style={{ ...styles.button, ...styles.likeButton }}
                            onMouseOver={() => handleButtonHover(true, true)}
                            onMouseOut={() => handleButtonHover(true, false)}
                            onClick={() => handleLike(discussion.id)}
                        >
                            Like ({likes[discussion.id] || 0})
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.dislikeButton }}
                            onMouseOver={() => handleButtonHover(false, true)}
                            onMouseOut={() => handleButtonHover(false, false)}
                            onClick={() => handleDislike(discussion.id)}
                        >
                            Dislike ({dislikes[discussion.id] || 0})
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Discussions;
