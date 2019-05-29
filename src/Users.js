import React,{Component} from 'react';
import 'tachyons';
const Users=({users,deleteUser})=>{
	return(
		<div className="user-list">
		{
			users.map(user=>{
				return user.age>20
				?
				(
					<div className="user b--light-purple bw1 bt pa2  f4 " key={user.id}>
						<div className="b pa2 calisto ">Name: {user.name}</div>
						<div className="pa2 calisto">Age: {user.age}</div>
						<div className="pa2 calisto">Color: {user.color}</div>
						<button  className="bw0 br2 bg-light-purple mt2 pa3 white f5 tc ttu tracked" onClick={()=>{deleteUser(user.id)}}>Delete User</button>
						<br />
					</div>
				)
				:
				null;
			})
		}
		</div>
		)

}

export default Users;