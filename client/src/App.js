import React, { Component} from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';

class App extends Component{
constructor(){
  super();
  this.state ={
    todoList: []
  }
};

componentDidMount(){
  fetch('/api/todos')
    .then(res => res.json())
    .then(data => {console.log(data)
      this.setState({todoList: data.body})
    })
}



  render() {
    return (
      <Container fluid >
        <AppBar style={{
          backgroundColor: '#e70',
        }}>
          <ToolBar>
            <h4>Todo App</h4>
          </ToolBar>
        </AppBar>
        <Card style={{
          width: '50%',
          margin: 'auto',
          marginTop: 70,
        }}>
          <h2>My todos</h2>
          {
            this.state.todoList.map((todo, i) => (
              <div key={i}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
              </div>
            ))
          }
        </Card>
      </Container>
    )
  }
}

export default App;
