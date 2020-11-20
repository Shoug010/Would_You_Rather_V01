import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { hundleInitialQustions } from '../actions/shared'
import {handleAddQuestin} from '../actions/Questions'
import { handleInitialuser } from '../actions/shared'
import {setAuthedUser} from '../actions/authedUser'

class NewQuestion extends Component{

    componentDidMount() {
        this.props.dispatch(hundleInitialQustions())
        this.props.dispatch(handleInitialuser())
    }
    render(){
        const {user} = this.props
        const {author} = this.props
        var user1={}
        var selected = ""
        var New = {
        author: author,
        optionOneText: ' ',
        optionTwoText : ' '
        }
        user.map((u)=>{
            if(u.id===author){
                user1 =u
            }
            return user1
        })
        return (<div>
            { author==="" || author===null ?(<div> 
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
                    <option value={id.id} key={id.id}>{id.name}</option>
                    ))} </select>
                    <br></br>
                    <br></br>
                    <button>< Link to='/home'> home</Link></button>
                </div>
            </div>):(
            <div className='center'>
                <ul>
                    <li>< Link to='/home'> home </Link></li>
                    <li>< Link to='/add'> New Qustion </Link></li> 
                    <li>< Link to='/leader'> leader </Link></li>
                    <li>< Link to='/'> logout </Link></li>
                    <li ><img alt="img" src={user1.avatarURL} ></img></li> 
                    <li style={{ marginRight: '2%'}}><p>Hello {user1.name}</p></li>
                </ul>
                <div className="newQuestion">
                    <div className="row">
                        <div className="col-25">
                            <p>First Qustion</p>
                        </div>
                        <div className="col-75">
                            <input type="text" id="QuestionOne" name="QuestionOne" onChange={(event)=>{New.optionTwoText=event.target.value}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <p>Secound Qustion</p>
                        </div>
                        <div className="col-75">
                            <input type="text" id="QuestionTwo" name="QuestionTwo" onChange={(event)=>New.optionOneText=event.target.value}/>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" value="Submit" onClick={(()=>{
                            this.props.dispatch(handleAddQuestin(New))
                        })}>< Link to='/home'> Submit</Link></button>
                    </div>
                </div>
            </div>
            )}</div>
        )
        }
}
function mapStateToProps (state) {
    return {
        user: Object.values(state.user),
        questions: Object.values(state.questions),
        author:state.autheduser
    }
}
export default connect(mapStateToProps)(NewQuestion);
