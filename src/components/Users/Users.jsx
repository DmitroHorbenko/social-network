import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../asset/img/user.jpg";

let Users = (props) => {
    let pageCount = Math.ceil(props.usersCount / props.pageSize);
    let arrPages = []
    for (let i=1; i<=pageCount; i++ ) {
        arrPages.push(i)
    }
debugger
    return <div>
        <div>
            {arrPages.map( p => {
                return <span className={ props.currentPage === p && s.SelectedPage}
                    // on Event to Page number
                             onClick={ (e) => {props.onPageChanged(p) }}>{' ' + p }</span>

            } )}
        </div>
        <div>

            {props.users.map((u) => {
                return (
                    <div className={s.item}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'dsfd'} />
                            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{"u.address.city"}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default Users
