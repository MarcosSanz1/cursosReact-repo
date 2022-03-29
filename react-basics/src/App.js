import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cuotas from './components/Cuotas';
import Header from './components/layout/Header';
import AddCuota from './components/AddCuota';
import About from './components/pages/About';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


class App extends Component {
  // Cuando trabajas con backend la mayoría de veces vamos a crear una ID única
  // uuid es para ids aleatorios
  state = {
    cuotas: []
  }

  // El método de ciclo de vida que desea usar es el montaje inactivo del componente, que se 
  // ejecutará justo después de que el componente se monte.
  componentDidMount() {
    // Aquí vamos a hacer solicitudes de obtención, detrás de la url podemos poner ?_limit=10,
    // para limitar los objetos que trae de la API a 10
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ cuotas: res.data }))
  }
  
  // Toogle Complete
  markComplete = (id) => {
    //console.log(id)
    this.setState({ cuotas: this.state.cuotas.map(cuota => {
      if(cuota.id === id) {
        cuota.completed = !cuota.completed
      }
      return cuota;
    }) });
  }

  // Delete Cuota
  // (operador de programación: ...) -> para mantener lo que habia dentro del array
  // El array se queda todos los objetos que cumplan la condicion del filter
  delCuota = (id) => {
    //console.log(id)
    // Como estamos usando una API, para borrar alguna cuota usamos el delete y dentro la url + id
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ cuotas: [...this.state.cuotas.filter(cuota => cuota.id !== id)]}));
    
    console.log(this.state.cuotas);
  }

  // Add Cuota
  // Esta función añade una nueva cuota al array, con el título que le hayamos pasado por el input de tipo texto
  addCuota = (title) => {
    // Ya no necesitamos el uuid, ni una estructura, directamente usamos axios.post y la url de la API donde queremos
    // añadir y coger cuotas.
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ cuotas: [...this.state.cuotas, this.addCuota]}));
  }

  render() {
  // Sacamos la lista de cuotas por consola
  // Con la función markComplete sacamos el número de eventos "en este caso los que se lanzan al seleccionar algún input"
    //console.log(this.state.cuotas);
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Routes>
              <Route path="/" render={props => (
                <React.Fragment>
                  <AddCuota addCuota={this.addCuota} />
                  <Cuotas cuotas={this.state.cuotas} markComplete={this.markComplete} delCuota={this.delCuota}/>
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;