
export default function Card(props) {


  return (
    <div className="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.eventTitle}</h5>
        <p className="card-text">{props.eventDescription}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Volunteers Needed: {props.volunteersNeeded}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Leave a comment</a>
      </div>
    </div>
  )
};
