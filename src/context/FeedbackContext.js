import { useState, createContext, useEffect } from "react";
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
   
    const [isLoading, setLoading] = useState(true)
    const [feedback, setFeedback] = useState([])


const [feedbackEdit, setFeedbackEdit] = useState({   // feedbackEdit is not a function here 
    item: {},
    edit: false
})

useEffect(() => {
    fetchFeedback()
}, [])

const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')

    const data = await response.json()

    setFeedback(data)
    setLoading(false)
}

// Add Feedback
const addFeedback = async (newfeedback) => {
    const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newfeedback)
    })

    const data = await response.json()

    setFeedback([data, ...feedback]);
  };

// Delete Feedback
const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure want to delete this item?")) {
        await fetch(`/feedback/${id}`, {method: 'DELETE'})
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

  const updateFeedback = async (id, updatedItem) =>{

   const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
    })

    const data = await response.json()
    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, 
       ...data } : item))
    )
  }

return (
    <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            isLoading,
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