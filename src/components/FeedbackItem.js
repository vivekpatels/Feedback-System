
import PropTypes from 'prop-types'
import { useContext } from 'react'

import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes className='purple'  />
        </button>
        <button onClick={() => editFeedback(item) } className='edit'>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default FeedbackItem

// Event handling - while onClick, you can directly give named function like onClick={handleClick}
// to do something -- or if passing some id or anything you can use arrow function like onClick={() => handleClick(item.id)} 
// to catch id in the above handleclick function