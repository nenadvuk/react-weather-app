import React from 'react'

const DateTime = () => {
  const date = new Date()
  return (
    <div>
      <div className="date-time">
        {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
      </div>
    </div>
  )
}

export default DateTime
