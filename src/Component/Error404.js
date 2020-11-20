import React , {Component} from 'react'
import '../style.css'
import { Link } from 'react-router-dom'


class Error404 extends Component{
    
    render(){
       
        return (
            <div>
               <h1>Error 404</h1>  
                <p>Page not found</p>
                <button>< Link to='/home'> home</Link></button>
            </div>
        )
    }
}

export default (Error404);
