import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteItem = (id) => {
    if(window.confirm(`Delete feedback item ${id}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }

  return(
    <>
      <Header date={new Date(Date.now()).toDateString()}/>
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteItem}/>
      </div>
    </>

  )
  
}

export default App