import React, { use, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
//       <p>this movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing!']} />
    <StarRating maxRating={10} color='red' size={24} defaultRating={3} /> */}
  </React.StrictMode>
);
