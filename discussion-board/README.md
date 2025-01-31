readme_content = """
# Discussion Forum

I created this simple discussion forum using React and Bootstrap. My goal was to allow users to create discussions, like or dislike posts, and engage with the community easily.

## Features
- I implemented a feature to view discussions.
- I added functionality to create new discussions.
- Users can like and dislike discussions, which I managed using localStorage.
- I ensured the UI is responsive and user-friendly.

## Pages and Their Functions
### Home Page (`/`)
- I designed this page to display all discussions.
- Users can like or dislike posts here.
- There is a button to navigate to create a new discussion, making it user-friendly.

### Discussions Page (`/discussions`)
- I built this page to list all discussions stored in localStorage.
- Users can interact with posts through likes and dislikes.

### New Discussion Page (`/new-discussion`)
- I created a form here that allows users to start a new discussion.
- The page takes user input for discussion title and content.
- Once submitted, discussions are saved to localStorage, and users are redirected back to the discussions page.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/discussion-forum.git
   ```
2. Navigate to the project directory:
   ```sh
   cd discussion-forum
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
- I made it simple for users to post a new discussion by clicking "Post a New Discussion."
- Users can easily like or dislike discussions.
- Discussions persist using localStorage, so I ensured that data isn't lost on refresh.
- Navigation between pages is seamless, thanks to React Router.

## Dependencies
- React
- React Router
- Bootstrap
- FontAwesome


