import React from "react";
import "./details.css";
import GetData from "../../services/get-data";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";



export default class PersonDetails extends React.Component {
    data = new GetData();

    state = {
        person: null,
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
        this.data.getPerson(this.props.itemId)
            .then((person) => {
                this.setState({ person, loading: false });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    };



    render() {
        const { error, person, loading } = this.state;

        if (error) {
            return (
                <ErrorMessage />
            );
        };

        if (loading || !person) {
            return <Spinner />
        };

        const { name, gender, height, hair_color, skin_color,
            eye_color } = this.state.person;

        return (
            <div className="PersonDetails bgColor rounded d-flex mb-4">
                <img className="img-fluid rounded m-3"
                    src={`https://starwars-visualguide.com/assets/img/characters/${this.props.itemId}.jpg`}
                    alt="Person">
                </img>
                <ul className="m-3 pl-0">
                    <h4>{name}</h4>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Gender:</span> {gender}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Height:</span> {height} cm
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Hair color:</span> {hair_color}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Skin color:</span> {skin_color}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Eye color:</span> {eye_color}
                    </li>
                </ul>
            </div>
        );
    };
};
