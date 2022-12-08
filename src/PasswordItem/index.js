import './index.css'

const PasswordItem = props => {
  const {newList, getId, isChecked} = props
  const {id, website1, username1, password1} = newList
  const firstWord = website1.slice(0, 1).toUpperCase()

  const giveId = () => {
    getId(id)
  }

  return (
    <li className="pass-item">
      <div className="bg-first">{firstWord}</div>
      <div className="middle">
        <p className="pi-para">{website1}</p>
        <p className="pi-para2">{username1}</p>
        {isChecked ? (
          <p className="pi-para2">{password1}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button type="button" onClick={giveId} className="del-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
