import React, { Component } from "react";
import React from "react";
class Client extends Component {
    render() {
        return
        <div>
            <li> {this.props.details.nom} {" "}
                <button onClick={() => this.handleDelete(this.props.id)}>
                    X</button>
            </li>
        </div>
    }
}