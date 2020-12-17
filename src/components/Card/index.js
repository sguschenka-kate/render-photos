function Card({ card, handleDelete }) {
  return (
    <li className="list-group-item">
      <div className="card" style={{ width: 17 + 'rem' }}>
        <img src={card.url} className="card-img-top" alt={card.title} />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title" style={{ minHeight: 100 + 'px' }}>{card.title}</h5>
          <button type="button" className="btn btn-danger" onClick={() => handleDelete(card.id)}>Delete</button>
        </div>
      </div>
    </li >
  )
}

export {
  Card
}