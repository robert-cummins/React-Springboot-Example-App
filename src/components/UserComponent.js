import React from 'react'
import UserService from '../services/UserService'


class UserComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        // UserService.getUsers().then((response) => {
        //     this.setState({users: response.data})
        // })

    }

    render(){
        return(
            <div>
                {this.state.users.length == 0 ?
                <div className="border border-light p-3 mb-4 button-div d-flex align-items-center justify-content-center button-div">
                    <button type="button" className="btn btn-primary btn-lg btn-block">Get Users</button>
                </div>
                :
                <>
                <h1 className="text-center">Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                return(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </table>
                </>
                }
            </div>
        )
    }

}

export default UserComponent