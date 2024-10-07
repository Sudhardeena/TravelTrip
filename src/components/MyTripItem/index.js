import './index.css'

const MyTripItem = props => {
  const {tripDetails} = props
  const {endLocation, startDate, endDate} = tripDetails
  return (
    <li className="my-trip-list-item">
      <h1 className="my-trip-item-name">{endLocation}</h1>
      <div className="my-trip-date-info-container">
        <p className="date-text">Date</p>
        <p className="start-end-date-text">
          {startDate} to {endDate}
        </p>
      </div>
      <button type="button" className="trip-cancel-btn">
        cancel
      </button>
    </li>
  )
}

export default MyTripItem
