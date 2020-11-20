import React , {Component} from 'react'
import { Link  } from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux'
import { hundleInitialQustions } from '../actions/shared'
import {handleToggleQuestion} from '../actions/Questions'
import {handleToggleUser} from '../actions/users'

class Poll extends Component{
    componentDidMount() {
        this.props.dispatch(hundleInitialQustions())
    }

    handelchange(qid, authedUser, answer){
        this.props.dispatch(handleToggleQuestion({qid, authedUser, answer}))
        this.props.dispatch(handleToggleUser({qid, authedUser, answer}))
    }
    render(){
        const { questions } = this.props
        const { poll } = this.props
        const {author} = this.props
        const {user} = this.props
        var answered = false
        var answeredis = ""

        var percentage=0
        var percentage1=0
        var Urlfouser = ""

        var user1={}
        var countOne=0
        var countTwo =0
        var users =0

        user.map((u)=>{
            if(u.id==poll.author){
                Urlfouser=u.avatarURL
            }
            if(u.id===author){
                user1 =u
            }
            users++
            if (u.answers.hasOwnProperty(poll.id)){
                if(u.answers[poll.id]==='optionOne')
                    countOne++
                else
                if (u.answers[poll.id]==='optionTwo')
                    countTwo++
            }
            if(u.id===author){
                if (poll.id in u.answers){
                    answered=true
                    answeredis =u.answers[poll.id]
            }}
            percentage= (100 * countOne) / users
            percentage1=(100 * countTwo) / users
            return users
        })
        return (<div>
            { author===" " || author===null ?(<div> <p>Please login first</p> <br/><button>< Link to='/'>login</Link></button></div>):(
                <div className='center'>
                    {poll.id in questions ? (<div>
                            Error 404
                        </div>
                        ):(<div>  
                            <ul>
                                <li>< Link to='/home'> home </Link></li>
                                <li>< Link to='/add'> New Qustion </Link></li> 
                                <li>< Link to='/leader'> leader </Link></li>
                                <li>< Link to='/'> logout </Link></li>
                                <li ><img alt="img" src={user1.avatarURL} ></img></li> 
                                <li style={{ marginRight: '2%'}}><p>Hello {user1.name}</p></li>
                            </ul>
                            <div className='Poll'>  
                                <img alt="" src={Urlfouser} ></img>
                                <div className='PollBoxInfo' >
                                    <p>{ user1.author} asks:</p>
                                    <p>Would you rather </p>
                                    {answered === true ? ( 
                                    <div>
                                        <div className='Forbutton' style={{color:  answeredis=== 'optionOne' ? '#86797e' : 'black', textDecoration: answeredis=== 'optionOne' ? 'underline' : 'non'}}>
                                        <div className='ForbuttonB' style={{ width:percentage+"%" }} >{parseInt(percentage)}% </div>{poll.optionOne.text} </div>
                                        <p>{countOne} out of {users}</p>
                                        <div className='Forbutton' style={{color:  answeredis=== 'optionTwo' ? '#86797e' : 'black',textDecoration: answeredis=== 'optionTwo' ? 'underline' : 'non'}}>
                                        <div className='ForbuttonB'  style={{ width:percentage1+"%"}}>{parseInt(percentage1)}%</div>{poll.optionTwo.text}</div>
                                        <p> {countTwo} out of {users}</p>
                                    </div>
                                    ):(
                                    <div>
                                        <button value={'optionOne'} onClick={(event)=>this.handelchange(poll.id,author,event.target.value)}>{poll.optionOne.text}</button>
                                        <button value={'optionTwo'} onClick={(event)=>this.handelchange(poll.id,author,event.target.value)}>{poll.optionTwo.text}</button></div>)
                                    }
                                </div>
                            </div>
                     </div>)}

                </div>
        )}</div>
        )
    }
}
function mapStateToProps (state) {
    return {
        user: Object.values(state.user),
        poll: state.poll,
        author:state.autheduser,
        questions: Object.values(state.questions),
    }
}
export default connect(mapStateToProps)(Poll);
