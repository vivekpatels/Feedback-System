// import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const { feedback} =  useContext(FeedbackContext)

    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, '') //fixes to one decimal places & regular expression to remove trailing zeros if it s not floating number

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats