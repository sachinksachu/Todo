import React, { Component } from 'react'

export class TodoInput extends Component {
  render() {
    const {item, onChangeText, onSubmitText ,edit, onSearchText,search } = this.props;
    return (
      <div className="container col-12 col-sm-6">
        <form className="form form-group">
          <div className="row">
              <div className="col-12 col-sm-12">

                <input type="text" placeholder="Enter item" onChange={onChangeText}/>
                <button className="btn-sm btn-warning m-2" onClick={onSearchText}>{search? "Search ON" : "Search OFF"}</button>
                
              </div>
              
              </div>
          <button onClick={onSubmitText} type="button" className={edit ? "btn btn-block btn-success m-auto col-5 col-sm-3"  : "btn btn-block btn-primary m-auto col-5 col-sm-3"}>
          {edit? "edit item" : "add item"}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoInput
