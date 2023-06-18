import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <AboutIcon />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;

// function App () {
//     const title = "Feedback App"
//     const body = "This is First Feedback App"
//     const comments = [
//         {id: 1, text: 'Comment One'},
//         {id: 2, text: 'Comment Two'},
//         {id: 3, text: 'Comment Three'},
//     ]

// // Conditionals
//     const loading = false;
//     if(loading) return <h1>Loading....</h1>

//     const comment = true;

//     const commentsBlock = (
//         <div className="comments">
//         <h3>
//         Comments ({comments.length})
//         </h3>
//         <ul>
//           {comments.map((comment, index) => (
//             <li key={index}>{comment.text}</li>
//           ))}
//         </ul>
//     </div>
//     )

//     return (
//         <div className="container">
//             <h1>{title}</h1>
//             <p>{body}</p>

//             {/*  ternary Conditionals - if true return commentBlock else Null */}

//         {/* {comment ? commentsBlock : ''} */}
//         {/* short circuit - either true return or nothing */}
//         {comment && commentsBlock}

//         </div>

//     )
// }

// export default App;

// below is react written in purely JS

// import React from "react";

// function App() {
//     return React.createElement(
//         'div',
//          {className: 'container'},
//         React.createElement('h1', {}, 'My App')
//     )
// }

// export default App;
