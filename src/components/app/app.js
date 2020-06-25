import "./app.css";
import React from "react";
import Navbar from "../navbar/navbar";
import RandomFilm from "../random-film/random-film";
import ErrorMessage from "../error-message/error-message"
import GetData from "../../services/get-data";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import SpeciesPage from "../pages/species-page";
import PersonDetails from "../details/person-details";
import PlanetDetails from "../details/planet-details";
import SpeciesDetails from "../details/species-details";
import { BrowserRouter as Router, Route } from "react-router-dom";



export default class App extends React.Component {
    data = new GetData();

    state = {
        selectedPerson: null,
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true })
    };

    onPersonSelected = (id) => {
        this.setState({ selectedPerson: id });
    };


    render() {
        if (this.state.error) {
            return <ErrorMessage />
        };

        return (
            <div className="container">
                <Router>
                    <Navbar />
                    <RandomFilm />
                    <Route path="/" exact render={() =>
                        <React.Fragment>
                            <h3>Welcome to SW Data!</h3>
                            <span>You may choose something from Top menu</span>
                        </React.Fragment>
                    } />

                    <Route path="/people" exact render={() => <PeoplePage />} />
                    <Route path="/people/:id" 
                    render={({ match }) => {
                        const { id } = match.params;
                        return <PersonDetails itemId={id} />
                    }} />

                    <Route path="/planets" exact render={() => <PlanetsPage />} />
                    <Route path="/planets/:id" render={({ match }) => {
                        const { id } = match.params;
                        return <PlanetDetails itemId={id} />
                    }} />

                    <Route path="/species" exact render={() => <SpeciesPage />} />
                    <Route path="/species/:id" render={({ match }) => {
                        const { id } = match.params;
                        return <SpeciesDetails itemId={id} />
                    }} />
                </Router>
            </div>
        );
    };
};
