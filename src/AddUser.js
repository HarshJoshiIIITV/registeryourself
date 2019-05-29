import React,{Component} from 'react';
import 'tachyons';

class AddUser extends Component {
state={
  name:null,
  age:null,
  color:null
}
handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
}

handleSubmit=(e)=>{
  e.preventDefault();
  this.props.addUser(this.state);
}


render(){
  return (
    <div className="App ba bw1 mt2 pa3 bg-light-green  b--light-purple">
      <div className="b pa2 calisto f3 ">Enter Details</div>
      <form onSubmit={this.handleSubmit}>
        <br />
        <label  htmlFor="name">Name:</label>
        <input className="b pa2 br3 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="name" onChange={this.handleChange} />
        <br />
        <label  htmlFor="name">Age:</label>
        <input className="b pa2 ml2 mt3 br3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="age" onChange={this.handleChange} />
        <br />
        <label  htmlFor="name">Color:</label>
        <input className="b pa2 br3 ml2 mt3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="color" onChange={this.handleChange} />
        <br />
        <button className="bw0 br2 bg-light-purple mt3 pa3 white fw1 tc ttu tracked">Submit</button>
      </form>
    </div>
  );
}
}
export default AddUser;
