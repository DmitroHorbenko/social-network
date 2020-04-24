import React, {Component} from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../asset/img/user.jpg'

class Users extends Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={s.item}>
                <h3>Users: </h3>
                {this.props.users.map((u) => {
                    return (
                        <div>
                            <div>
                                <img src={u.urlAvatar ? u.urlAvatar : userPhoto} alt={'dfasda'}/>
                                <button>{u.followed ? 'unfollow' : 'follov'}</button>
                            </div>
                            <div>
                                <div>{u.name}</div>
                                <div>{" u.location.cityName"}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

// const Users = (props) => {
//     let gettUsers = () => {
//         if (props.users.length === 0) {
//
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//     return (
//         <div className={s.item}>
//             <button onClick={gettUsers} >Get Users</button>
//             <h3>Users: </h3>
//             {props.users.map((u) => {
//                 return (
//                         <div>
//                             <div>
//                                 <img src={u.urlAvatar ? u.urlAvatar : userPhoto } alt={'dfasda'} />
//                                 <button>{ u.followed ? 'unfollow' : 'follov' }</button>
//                             </div>
//                             <div>
//                                 <div>{ u.name }</div>
//                                 <div>{" u.location.cityName" }</div>
//                             </div>
//                         </div>
//                     )
//
//             })}
//         </div>
//     );
// }

export default Users;
