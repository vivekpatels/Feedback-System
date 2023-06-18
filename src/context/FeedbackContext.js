import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
   
    const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This item is from Feedback 1',
        rating: 9
    },
    {
        id: 2,
        text: 'This item is from Feedback 2',
        rating: 10
    },
    {
        id: 3,
        text: 'This item is from Feedback 3',
        rating: 7
    }

])

const [feedbackEdit, setFeedbackEdit] = useState({   // feedbackEdit is not a function here 
    item: {},
    edit: false
})

// Add Feedback
const addFeedback = (newfeedback) => {
    newfeedback.id = uuidv4;
    setFeedback([newfeedback, ...feedback]);
  };

// Delete Feedback
const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Edit Feedback
  const editFeedback = (item) =>{   // editFeedback is function 
    setFeedbackEdit({
        item,
        edit: true
    })
  }

  //Update Feedback

  const updateFeedback = (id, updatedItem) =>{
    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, 
       ...updatedItem } : item))
    )
  }

return (
    <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}
    >
        {children}
    </FeedbackContext.Provider>
)
    
}

export default FeedbackContext