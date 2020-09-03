import React,{Component} from 'react'

// class TestClassContainer extends Component{ 
//     constructor(){
//         super();

//         this.state = {
//             message : "user"
//         }
//     }

//         ChangeMessage(){
//             this.setState({
//                 message : "sachin"
//             })
//         }

//     render(){
//         return(
//             <div>
//             <h1>Hello {this.state.message}</h1>
//             <button onClick={() => this.ChangeMessage()}>Check User</button>
//             </div>
//         )
//     }
    
// }

class TestClassContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { values: [] };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    createU(){
       return this.state.values.map((el, i) => 
           <div key={i}>
              <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
              <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
           </div>          
       )
    }
  
    handleChange(i, event) {
       let values = [...this.state.values];
       values[i] = event.target.value;
       this.setState({ values });
    }
    
    addClick(){
      this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
    
    removeClick(i){
       let values = [...this.state.values];
       values.splice(i,1);
       this.setState({ values });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.values.join(', '));
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            {this.createU()}        
            <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
            <input type="submit" value="Submit" />
            </div>
      );
    }
  }

export default TestClassContainer //props.children to acess inner tag passed as props