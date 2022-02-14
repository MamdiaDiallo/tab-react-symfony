
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
const Client = props => {
    const [utilisateurs, setUtilisateurs] = useState([]);
    useEffect(() => {
        axios.
            get("https://localhost:8000/api/utilisateurs")
            .then(response => response.data["hydra:member"])
            .then(data => setUtilisateurs(data));
    }, [])

    return (
        <>
            < h1 > liste des clients  </h1 >
            <table classNane="table table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>email</th>
                        <th>adresse</th>
                        <th>tel</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {utilisateurs.map(utilsateur => <tr key={utilsateur.id}>

                        <td>maine</td>
                        <td>tkd</td>
                        <td>lfj</td>
                        <td>jqlkj</td>
                        <td>lmjqml</td>
                        <td>qjml</td>
                    </tr>)}
                </tbody>
            </table >
        </>
    )
}

export default Client;