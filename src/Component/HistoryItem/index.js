import './index.css'

const HistoryItem = props => {
  const {historyItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <div className="logo-title-style">
        <img src={logoUrl} alt="domain logo" className="logo-img" />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
