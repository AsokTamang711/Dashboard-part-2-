import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const NewDiscussion = () => {
    // I have used useState to manage the input fields for title and content.
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    // I have used useNavigate to redirect the user after submitting a discussion.
    const navigate = useNavigate();

    // I asked help from my friends for this part.
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload on form submission.

        // I have retrieved existing discussions from localStorage or initialized an empty array if none exist.
        const storedDiscussions = JSON.parse(localStorage.getItem('discussions')) || [];

        // I have created a new discussion object with a unique ID using Date.now().
        const newDiscussion = {
            id: Date.now(),
            title,
            content,
        };

        // I have added the new discussion to the existing discussions array.
        const updatedDiscussions = [...storedDiscussions, newDiscussion];

        // I have saved the updated discussions array back to localStorage.
        localStorage.setItem('discussions', JSON.stringify(updatedDiscussions));

        // I have used navigate to redirect the user back to the discussions page.
        navigate('/discussions');
    };

    return (
        <div className="container my-5">
            {/* I have added a heading to guide the user on posting a new discussion. */}
            <h1 className="text-center mb-4">Post a New Discussion</h1>
            <p className="text-center text-muted mb-4">Share your thoughts and engage with the community.</p>

            <div className="card shadow-sm">
                <div className="card-body">
                    {/* I have created a form that will take user input for title and content. */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            {/* I have used an input field for the discussion title, updating state on change. */}
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content:</label>
                            {/* I have used a textarea for the discussion content, updating state on change. */}
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                className="form-control"
                                rows="5"
                            />
                        </div>

                        {/* I have created a submit button that will trigger the handleSubmit function. */}
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                            Post Discussion
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewDiscussion;
