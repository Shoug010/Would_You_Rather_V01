import React , {Component} from 'react'
import { Link  } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { handleInitialuser } from '../actions/shared'
import {setAuthedUser} from '../actions/authedUser'

class Leader extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitialuser())
    }

    render(){
        const {author} = this.props
        const {user} = this.props
        var user1={}
        var selected = ""
        user.map((u)=>{
            if(u.id===author){
                user1 =u
            }
            return user1
        })

        var byDateA = user.slice(0);
        byDateA.sort(function(a,b) {
            return (Object.keys(b.questions).length+Object.keys(b.answers).length) - (Object.keys(a.questions).length+Object.keys(a.answers).length);
        });

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
                </div>
    )
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
                {byDateA.map((u)=>{
                    var countQ ,countA, sum =0
                    countQ=Object.keys(u.questions).length
                    countA=Object.keys(u.answers).length
                    sum = countQ+countA

                    return(
                    <div className='Poll' key={u.id}>  
                        <img alt="" src={u.avatarURL} ></img>
                        <div className='PollBoxInfo' >
                            <p>{u.name} </p>
                            <p>Answer Question {countA} </p>
                            <p>Created Question {countQ} </p>
                            <p>score: {sum} </p>
                        </div>
                    </div>)
                })}

            </div>)}

            </div>
        )
    }
}
function mapStateToProps (state) {
    console.log('map poll is called');
    return {
        user: Object.values(state.user),
        poll: state.poll,
        author:state.autheduser
    }
}
export default connect(mapStateToProps)(Leader);
