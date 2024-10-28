import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isClickedFname: false,
    isClickedLname: false,
  }

  firstName = () => {
    this.setState(prevState => ({isClickedFname: !prevState.isClickedFname}))
  }

  lastName = () => {
    this.setState(prevState => ({isClickedLname: !prevState.isClickedLname}))
  }

  render() {
    const {isClickedFname, isClickedLname} = this.state

    const firstNameEle = isClickedFname ? (
      <div className="name-card">
        <p>Joe</p>
      </div>
    ) : null
    const lastNameEle = isClickedLname ? (
      <div className="name-card">
        <p>Jonas</p>
      </div>
    ) : null

    return (
      <div className="bg-container">
        <h1 className="heading-ele">Show/Hide</h1>
        <div className="full-name-container">
          <div className="fullname-card">
            <button className="btn-ele" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstNameEle}
          </div>
          <div className="fullname-card">
            <button className="btn-ele" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastNameEle}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
