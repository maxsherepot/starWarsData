import React from "react";
import "./details.css";
import GetData from "../../services/get-data";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";



export default class SpeciesDetails extends React.Component {
    data = new GetData();

    state = {
        species: null,
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
        this.data.getSpecies(this.props.itemId)
            .then((species) => {
                this.setState({ species, loading: false });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    };



    render() {
        const { error, species, loading } = this.state;

        if (error) {
            return (
                <ErrorMessage />
            );
        };

        if (loading || !species) {
            return <Spinner />
        };

        const { name, classification, designation, hair_colors, skin_colors,
            eye_colors, average_height, average_lifespan } = this.state.species;

        return (
            <div className="SpeciesDetails bgColor rounded d-flex mb-4">
                <img className="img-fluid rounded m-3"
                    src={`https://starwars-visualguide.com/assets/img/species/${this.props.itemId}.jpg`}
                    alt="Species">
                </img>
                <ul className="m-3 pl-0">
                    <h4>{name}</h4>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Classification:</span> {classification}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Designation:</span> {designation}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Hair colors:</span> {hair_colors}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Skin colors:</span> {skin_colors}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Eye colors:</span> {eye_colors}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Average height:</span> {average_height} cm
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Average lifespan:</span> {average_lifespan} years
                    </li>
                </ul>
            </div>
        );
    };
};
