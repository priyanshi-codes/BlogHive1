# BlogHive
MegaBlog is a blogging platform built with React, Redux, Appwrite, and TailwindCSS. This project demonstrates user authentication, post creation, editing, deletion, and file uploads using Appwrite.

## Project Structure
MegaBlog/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── conf.js
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AuthLayout.jsx
│   │   ├── Button.jsx
│   │   ├── container/
│   │   │   └── Container.jsx
│   │   ├── footer/
│   │   │   └── Footer.jsx
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── LogoutBtn.jsx
│   │   ├── index.js
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Logo.jsx
│   │   ├── PostCard.jsx
│   │   ├── postForm/
│   │   │   └── PostForm.jsx
│   │   ├── RT.jsx
│   │   ├── Select.jsx
│   │   ├── Signup.jsx
│   ├── conf/
│   │   └── config.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── AddPost.jsx
│   │   ├── AllPosts.jsx
│   │   ├── EditPost.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Post.jsx
│   │   ├── Signup.jsx
│   ├── store/
│   │   ├── authSlice.js
│   │   └── store.js
├── tailwind.config.js
└── vite.config.js

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/megablog.git
cd megablog
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file in the MegaBlog directory and add your Appwrite configuration:
```bash
VITE_APPWRITE_URL=<your-appwrite-url>
VITE_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
VITE_APPWRITE_KEY_ID=<your-appwrite-key-id>
VITE_APPWRITE_DATABASE_ID=<your-appwrite-database-id>
VITE_APPWRITE_COLLECTION_ID=<your-appwrite-collection-id>
```
4. Start the development server:
```bash
npm run dev
```
## Project Details
- The main component of the application. It handles user authentication state and renders the header, footer, and main content.

- Contains the AuthService class which handles user authentication with Appwrite. It includes methods for creating an account, logging in, getting the current user, and logging out.

- Contains the Service class which handles interactions with Appwrite's database and storage. It includes methods for creating, updating, deleting, and fetching posts, as well as uploading and deleting files.

#### components/
- AuthLayout.jsx: Protects routes based on authentication status.
- Button.jsx: A reusable button component.
container/Container.jsx: A container component for consistent layout.
- footer/Footer.jsx: The footer component.
header/Header.jsx: The header component with navigation links.
- header/LogoutBtn.jsx: A button for logging out.
- index.js: Exports all components for easy import.
- Input.jsx: A reusable input component.
- Login.jsx: The login form component.
- Logo.jsx: A logo component.
- PostCard.jsx: A component to display a post card.
- postForm/PostForm.jsx: A form component for creating and editing posts.
- RT.jsx: A rich text editor component using TinyMCE.
- Select.jsx: A reusable select component.
- Signup.jsx: The signup form component.
config.js
- Contains the configuration for Appwrite, including URLs and project IDs.

### pages/
- AddPost.jsx: The page for adding a new post.
- AllPosts.jsx: The page for displaying all posts.
- EditPost.jsx: The page for editing an existing post.
- Home.jsx: The home page displaying a list of posts.
- Login.jsx: The login page.
- Post.jsx: The page for displaying a single post.
- Signup.jsx: The signup page.
store/
- authSlice.js: Contains the Redux slice for authentication state.
- store.js: Configures the Redux store.
- tailwind.config.js
- Configuration for TailwindCSS.

### vite.config.js
- Configuration for Vite.

### Scripts
- npm run dev: Starts the development server.
- npm run build: Builds the project for production.
- npm run lint: Runs ESLint to check for code quality issues.
- npm run preview: Previews the production build.

### Aunthentication in appwrite

Make a class name as authservice and export it so that when user use it then it can 
directly access by .dot keyword and make access of all methods of all the filters...

```js
export class AuthService{}

const authservice = new AuthService()

export default authservice
```

This README provides a comprehensive overview of the MegaBlog project, including its structure, installation instructions, and details about each component and file.









