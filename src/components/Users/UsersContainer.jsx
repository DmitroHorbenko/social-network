// import s from './Dilogs.module.css'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import React, {Component} from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends Component {

    componentDidMount() {
    debugger
        // https://jsonplaceholder.typicode.com/users
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                //response.data
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged (pageNumber) {
    debugger
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <Users users={this.props.users }
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged.bind(this)}
                   usersCount={this.props.usersCount}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}


            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (idUser) => {
            dispatch(followAC(idUser))
        },
        unfollow: (idUser) => {
            dispatch(unfollowAC(idUser))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
