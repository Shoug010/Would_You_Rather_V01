import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { hundleInitialQustions } from '../actions/shared'
import {setPoll} from '../actions/Poll'
import {setAuthedUser} from '../actions/authedUser'
import { handleInitialuser } from '../actions/shared'

class home extends Component{
    state={
        Answered : false
    }
    componentDidMount() {
        this.props.dispatch(hundleInitialQustions())
        this.props.dispatch(handleInitialuser())

    }
    render(){
        const { questions } = this.props
        const {author} = this.props
        const {user} = this.props
        var user1 ={}
        var Unanswered=[]
        var Answered=[]
        var selected = ""

        questions.map((q)=>{
            user.map((u)=>{
                if(u.id===author){
                    user1=u
                    if (q.id in u.answers){
                        Answered.push(q);
                    }else{
                        Unanswered.push(q);
                    } }
                return Answered
            })
            return Unanswered
        })
        var byDateU = Unanswered.slice(0);
        byDateU.sort(function(a,b) {
            return b.timestamp - a.timestamp;
        });
        var byDateA = Answered.slice(0);
        byDateA.sort(function(a,b) {
            return b.timestamp - a.timestamp;
        });

        return (
            <div>
                { author===" " || author===null ?(<div>
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
                    </div>
                </div>):(
                <div className='center'>
                    <ul>
                        <li>< Link to='/home'> home </Link></li>
                        <li>< Link to='/add'> New Qustion </Link></li> 
                        <li>< Link to='/leader'> leader </Link></li>
                        <li>< Link to='/'> logout </Link></li>
                        <li ><img alt="img" src={user1.avatarURL}></img></li> 
                        <li style={{ marginRight: '2%'}}><p>Hello {user1.name}</p></li>
                    </ul>
                    <div className='content'>
                        <button onClick={(()=>this.setState({ Answered: false}))}>Unanswered questions</button>
                        <button onClick={(()=>this.setState({ Answered: true}))}>Answered questions</button>
                        {this.state.Answered === true ? (<div> {
                            byDateA.map((A)=>{
                                user.map((u)=>{
                                    if(A.author===u.id){
                                        user1=u
                                    }
                                    return user1
                                })
                                return(
                                    <div className='supPoll' key={A.id}> 
                                        <img alt="" src={user1.avatarURL} ></img>
                                        <div className='contentBoxInfo' key={A.id}>
                                            <p>{user1.name} asks:</p>
                                            <p>Would you rather </p>
                                            <p> ... {A.optionOne.text}...</p>
                                            <button onClick={(()=>this.props.dispatch(setPoll(A)))}>< Link to={'/questions/'+A.id }> Poll </Link></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>):(<div>{
                            byDateU.map((A)=>{
                                user.map((u)=>{
                                    if(A.author===u.id){
                                        user1=u
                                    }
                                    return user1
                                })
                                return(
                                    <div className='supPoll' key={A.id}> 
                                        <img alt="" src={user1.avatarURL} ></img>
                                        <div className='contentBoxInfo' key={A.id}>
                                            <p>{user1.name} asks:</p>
                                            <p>Would you rather </p>
                                            <p> ... {A.optionOne.text}...</p>
                                            <button onClick={(()=>this.props.dispatch(setPoll(A)))}>< Link to={'/questions/'+A.id }> Poll </Link></button>
                                        </div>
                                    </div>
                                )
                            })
                        } </div>)}

                    </div>
                </div>
                )}
            </div>
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
export default connect(mapStateToProps)(home);
