import React, { Component}  from 'react';

class Maincontent extends Component {

  constructor () {

    super()
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

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-info" role="alert">
              this main page & {this.props.test}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="test" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someting"></input>
            </div>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
          <br/>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
              </tr>
            </thead>
            <tbody>  
              {this.state.data.map((item, id) => <TableRow key={id} data={item.list} />)}
            </tbody>
          </table>

            
          </div>
        </div>

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