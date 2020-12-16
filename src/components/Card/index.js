function Card({ card }) {
  return (
    <li className="list-group-item">
      <div className="card" style={{ width: 18 + 'rem' }}>
        <img src={card.url} className="card-img-top" alt={card.title} />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          {/* <a href={card.thumbnailUrl} className="btn btn-primary">Delete</a> */}
        </div>
      </div>
    </li >
  )
}

export {
  Card
}