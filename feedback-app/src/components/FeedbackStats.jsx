import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

  let ratingAverage = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  },0) / feedback.length

  ratingAverage.toFixed(1)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length === 0 ? 'No' : feedback.length} Review{feedback.length !== 1 ? 's' : ''}</h4>
      <h4>Average Rating: {isNaN(ratingAverage) ? 0: ratingAverage}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  )
}

export default FeedbackStats