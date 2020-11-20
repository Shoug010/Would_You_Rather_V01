import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { hundleInitialQustions } from '../actions/shared'
import {handleAddQuestin} from '../actions/Questions'

class NewQuestion extends Component{

    componentDidMount() {
        this.props.dispatch(hundleInitialQustions())
    }
    render(){
        const {user} = this.props
        const {author} = this.props
        var user1={}
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
            { author===" " || author===null ?(<div> <p>Please login first</p> <br/><button>< Link to='/'>login</Link></button></div>):(
            <div className='center'>
                <ul>
                    <li>< Link to='/home'> home </Link></li>
                    <li>< Link to='/newQustion'> New Qustion </Link></li> 
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
                        })}>< Link to='/home'> home</Link></button>
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
