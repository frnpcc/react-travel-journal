/* eslint-disable react/prop-types */
import locatIcon from '/public/assets/location-icon.svg'

export default function Card(props) {
  
  return (
    <div className="card">
      <img className="card--img" src={`../assets/${props.imageUrl}`} alt="" />
      <div>
        <div className="card--top">
          <img src={locatIcon} alt="" />
          <p className="card--locat">{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps </a>
        </div>
        <h2>{props.title}</h2>
        <span className="bold">{props.startDate} - </span>
        <span className="bold">{props.endDate}</span>
        <p className="card-desc">{props.description}</p>
      </div>
    </div>
  )
}
