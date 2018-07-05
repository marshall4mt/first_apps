import React, { Component}  from 'react';

class Maincontent extends Component {

  constructor (props) {

    super(props)
    this.state = {
      data: [
        {
          list: 'กาแฟเย็น'
        },
        {
          list: 'ชานมไข่มุก'
        }
      ]
    }

  }
  addTodoList = () => {
    let input = this.refs.todoList
    if(input.value) {
      this.state.data.push({ list: input.value })
      this.setState({data: this.state.data})  
    }
    // clear input
     input.value = "";
  }
  addTodoEnter = (e) => {
    if(e.keyCode  === 13){
      this.addTodoList()
    }
  }
  // document.ready in jquery
  componentDidMount(){
    this.refs.todoList.focus(); 
  }

  render() {
    return (
      <div className="main-content container">

        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-info" role="alert">
              this main page
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
                <label for="exampleInputEmail1">เพิ่มรายการ</label>
                <input type="text" ref="todoList" className="form-control" onKeyDown={this.addTodoEnter} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someting"></input>
            </div>
            <button className="btn btn-primary" onClick={this.addTodoList}  >Add</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
          <br/>

          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col" width="100">#</th>
                <th scope="col" width="auto">First</th>
              </tr>
            </thead>
            <tbody>  
              {this.state.data.map((item, id) => <TableRow key={id} data={item.list} />)}
            </tbody>
          </table>
            
          </div>
        </div>

        <hr/>
      </div>

    );
  }

}

class TableRow extends Component {

  render() {
    return (
      <tr>
        <th></th>
        <td>{this.props.data}</td>
      </tr>
    );
  }

}




export default Maincontent;