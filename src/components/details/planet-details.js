import React from "react";
import "./details.css";
import GetData from "../../services/get-data";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";



export default class PlanetDetails extends React.Component {
    data = new GetData();

    state = {
        planet: null,
        error: false,
        loading: false
    };

    componentDidMount() {
        this.getItemData();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.getItemData();
            this.setState({ loading: true });
        };
    };

    getItemData() {
        this.data.getPlanet(this.props.itemId)
            .then((planet) => {
                this.setState({ planet, loading: false });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    };



    render() {
        const { error, planet, loading } = this.state;

        if (error) {
            return (
                <ErrorMessage />
            );
        };

        if (loading || !planet) {
            return <Spinner />
        };

        const { name, rotation_period, orbital_period, diameter, climate,
            gravity, terrain, population } = this.state.planet;

        return (
            <div className="PlanetDetails bgColor rounded d-flex mb-4">
                <img className="img-fluid rounded m-3"
                    src={`https://starwars-visualguide.com/assets/img/planets/${this.props.itemId}.jpg`}
                    alt="Planet">
                </img>
                <ul className="m-3 pl-0">
                    <h4>{name}</h4>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Rotation period:</span> {rotation_period} days
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Orbital period:</span> {orbital_period} days
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Diameter:</span> {diameter} km
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Climate:</span> {climate}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Gravity:</span> {gravity}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Terrain:</span> {terrain}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Population:</span> {population}
                    </li>
                </ul>
            </div>
        );
    };
};
