import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {setAuthedUser} from '../actions/authedUser'

class login extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    var selected = ""
    return (
      <div className='login'>
        <h1>Welcome to 'Would you rather' game </h1>
        <p> please Select a user :</p>
        <select defaultValue="select user"onChange={(event)=>{
        selected = " "
        selected = event.target.value
        this.props.dispatch(setAuthedUser(selected))
        console.log(selected);
        }
        }>
        <option value ="select user" disabled > select user...</option>
        {this.props.user.map((id) => (
        <option value={id} key={id}>{id}</option>
        ))} </select>
        <br></br>
        <br></br>
        <button>< Link to='/home'> home</Link></button>
      </div>
    )
  }
}
function mapStateToProps ({user}) {
  return {
    user: Object.keys(user)
  }
}
export default connect(mapStateToProps)(login);