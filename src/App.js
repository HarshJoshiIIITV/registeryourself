import React,{Component} from 'react';
import AddUser from './AddUser';
import Users from './Users';
import './App.css';
import 'tachyons';

class App extends Component {

state={
  users:[
    {name:'Harsh',age:30,color:'black',id:1},
    {name:'Himanshu',age:27,color:'brown',id:2},
    {name:'Ikbal',age:26,color:'white',id:3},
  ]
}
addUser=(user)=>{
  user.id=Math.random();
  let users=[...this.state.users,user];
  this.setState({
    users:users
  })
}

deleteUser=(id)=>{
  let users=this.state.users.filter(user=>{
    return user.id!==id;
});
  this.setState({
    users:users
  })
}


render(){
  return (
    <div className="App">
      <div className=" b bg-light-green mt0 pa4 calisto  ">
      <h1>Register Here!</h1>
      </div>
      <Users deleteUser={this.deleteUser} users={this.state.users}/>
      <AddUser addUser={this.addUser}/>
    </div>
  );
}
}
export default App;
