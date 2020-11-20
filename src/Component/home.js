import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { hundleInitialQustions } from '../actions/shared'
import {setPoll} from '../actions/Poll'

class home extends Component{
    state={
         Click : 0
    }
    componentDidMount() {
        this.props.dispatch(hundleInitialQustions())
        console.log(this.props.questions);
      }
      render(){
        const { questions } = this.props
        const {author} = this.props
        const {user} = this.props
        var user1 ={}
        var Unanswered=[]
        var Answered=[]
    
        console.log(" home compocnen");
        console.log(questions);
        console.log(author);
        console.log("user");
        console.log(user);
        questions.map((q)=>{
            user.map((u)=>{
                if(u.id===author){
                    user1=u
                    if (q.id in u.answers){
                         Answered.push(q);
                    }else{
                        Unanswered.push(q);
                    } }
            return Answered})
        return Unanswered})
            var byDateU = Unanswered.slice(0);
            byDateU.sort(function(a,b) {
            return b.timestamp - a.timestamp;
            });
            var byDateA = Answered.slice(0);
            byDateA.sort(function(a,b) {
            return b.timestamp - a.timestamp;
            });

            return (<div>
               { author===" " || author===null ?(<div> <p>Please login first</p> <br/><button>< Link to='/'>login</Link></button></div>):(
                <div className='center'>
                    <ul>
                       <li>< Link to='/home'> home </Link></li>
                       <li>< Link to='/newQustion'> New Qustion </Link></li> 
                        <li>< Link to='/leader'> leader </Link></li>
                        <li>< Link to='/'> logout </Link></li>
                        <li ><img alt="img" src={user1.avatarURL}></img></li> 
                        <li style={{ marginRight: '2%'}}><p>Hello {user1.name}</p></li>
                    </ul>
                    <div className='content'>
                        <button onClick={(()=>this.setState({ Click: 0}))}>Unanswered questions</button>
                        <button onClick={(()=>this.setState({ Click: 1}))}>Answered questions</button>
                        {this.state.Click === 1 ? (<div> {
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
    console.log('map is called');
    return {
        user: Object.values(state.user),
       questions: Object.values(state.questions),
       author:state.autheduser
    }
  }
export default connect(mapStateToProps)(home);
