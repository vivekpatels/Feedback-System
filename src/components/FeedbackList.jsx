// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }

    return isLoading ? (
    <Spinner />
    ) : (
    <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0}}
                    animate = {{ opacity: 1}}
                    exit={{ opacity: 0 }}
                >

                <FeedbackItem 
                key={item.id} 
                item={item}
                /> 
                </motion.div>

            ))}
            
            </AnimatePresence>
        </div>
    )




//   return (
//     <div className="feedback-list">
//         {feedback.map((item) => (
//             <FeedbackItem 
//             key={item.id} 
//             item={item}
//             handleDelete = {deleteFeedback} 
            
//             /> 
//         ))}
//     </div>
//   )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList


//deleteFeedback is prop drilling used as it needs further one more level up to delete the item from App.js