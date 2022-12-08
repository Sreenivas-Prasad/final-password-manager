import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwords: 0,
    newList: [],
    website1: '',
    username1: '',
    password1: '',
    isChecked: false,
    searchInput: '',
  }

  websiteInput = event => {
    this.setState({website1: event.target.value})
  }

  userInput = event => {
    this.setState({username1: event.target.value})
  }

  passwordInput = event => {
    this.setState({password1: event.target.value})
  }

  searchInputCall = event => {
    this.setState({searchInput: event.target.value})
  }

  submitFormOk = event => {
    event.preventDefault()
    const {website1, username1, password1} = this.state
    const newObjectFor = {
      id: uuidv4(),
      website1,
      username1,
      password1,
    }
    this.setState(prevState1 => ({
      newList: [...prevState1.newList, newObjectFor],
      website1: '',
      username1: '',
      password1: '',
    }))
  }

  showPasswords = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  getId = id => {
    const {newList} = this.state
    const filteredList = newList.filter(each2 => each2.id !== id)
    this.setState({newList: filteredList})
  }

  render() {
    const {
      newList,
      website1,
      username1,
      password1,
      isChecked,
      searchInput,
    } = this.state
    console.log(isChecked)
    let {passwords} = this.state
    const filteredList1 = newList.filter(each3 =>
      each3.website1.toLowerCase().includes(searchInput.toLowerCase()),
    )
    passwords = filteredList1.length

    return (
      <div className="pm-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="form-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="pm-img"
            alt="password manager"
          />
          <form className="form" onSubmit={this.submitFormOk}>
            <h2 className="form-heading">Add New Password</h2>
            <div className="input-img-con">
              <div className="img-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="input-img"
                  alt="website"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.websiteInput}
                value={website1}
              />
            </div>
            <div className="input-img-con">
              <div className="img-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="input-img"
                  alt="username"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.userInput}
                value={username1}
              />
            </div>
            <div className="input-img-con">
              <div className="img-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="input-img"
                  alt="password"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.passwordInput}
                value={password1}
              />
            </div>
            <button type="submit" className="pm-button">
              Add
            </button>
          </form>
        </div>
        <div className="result-bg1">
          <div className="result-bg2">
            <div className="no-of-passwords">
              <h2 className="pass-para">Your Passwords</h2>
              <div className="border-pass">
                <p>{passwords}</p>
              </div>
            </div>
            <div className="input-img-con2">
              <div className="img-con2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="input-img2"
                  alt="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="input2"
                onChange={this.searchInputCall}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="checkbox-para">
            <input
              type="checkbox"
              className="checkbox"
              onChange={this.showPasswords}
              checked={isChecked}
              id="checkbox"
            />
            <label htmlFor="checkbox" className="check-para">
              Show Passwords
            </label>
          </div>
          {passwords === 0 ? (
            <div className="no-pass-con">
              <img
                className="no-pass"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="forUl">
              {filteredList1.map(each1 => (
                <PasswordItem
                  newList={each1}
                  getId={this.getId}
                  isChecked={isChecked}
                  key={each1.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
