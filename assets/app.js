/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application

import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
console.log('fuck yo');
class App extends React.Component {
    clientInput = React.createRef();
    state = {
        clients: [
            { id: 1, nom: "Mamdia Diallo" },
            { id: 2, nom: "Jonnatan Bamba" }
        ],

    };

    handleDelete = (id) => {
        const clients = this.state.clients.slice();
        const index = clients.findIndex(client => client.id === id
        );
        clients.splice(index, 1);
        this.setState({ clients: clients });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime()
        const value = this.clientInput.current.value;
        console.log(value);
        const nomd = value;
        const client = { id: id, nom: nomd };
        const clients = this.state.clients.slice();
        clients.push(client);
        this.setState({ clients: clients });
    }

    handleClick = () => {
        const clients = this.state.clients.slice();
        clients.push({ id: 4, nom: "Sofi Dupont" });

        this.setState({ clients: clients });
    }



    render() {
        const title = "liste des clients";
        const element = <li> Test varible</li>


        return (

            <div>
                <HashRouter />


                <h1> {title}</h1>
                <button onClick={this.handleClick.bind(this)}>click moi</button>
                <ul>
                    <li>{this.state.compteur}</li>
                    {this.state.clients.map((client) =>
                        <li> {client.nom} {" "}
                            <button onClick={() => this.handleDelete(client.id)}>X</button></li>
                    )}
                </ul>
                <bouton> X</bouton>
                <form onSubmit={this.handleSubmit}>
                    <input

                        ref={this.clientInput} type="text" placeholder="Ajourter un client" />
                    <button>Confirmer </button>
                </form>

            </div >
        );
    }
}

const rotel = document.getElementById("root");
ReactDOM.render(<App />, rotel);