import React from "react";
import "./random-film.css";
import GetData from "../../services/get-data";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";



export default class RandomFilm extends React.Component {
    data = new GetData();
    
    state = {
        error: false,
        id: null,
        title: null,
        director: null,
        producer: null,
        release_date: null
    };

    componentDidMount() {
        this.getFilmData()
    };

    getFilmData() {
        const number = Math.floor(Math.random() * 7) + 1;

        this.data.getFilm(number)
            .then((film) => {
                this.setState({
                    id: (film.episode_id - 3),
                    title: film.title,
                    director: film.director,
                    producer: film.producer,
                    release_date: film.release_date
                });

                if (number > 3) {
                    this.setState({ id: (film.episode_id + 3) });
                };

                if (this.state.id === 10) { this.setState({ id: 7 }) };
            })
            .catch(() => {
                this.setState({ error: true });
            });
    };


    render() {
        const { error, id, title, director, producer, release_date } = this.state;


        if (error) {
            return <ErrorMessage />;
        };

        if (!id) {
            return (
                <div className="bgColor rounded mb-4 py-5 d-flex justify-content-center">
                    <Spinner />
                </div>
            );
        };

        return (
            <div className="RandomFilm bgColor rounded d-flex mb-4" >
                <img className="img-fluid rounded m-3"
                    src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
                    alt="Film" >
                </img>
                <ul className="m-3 pl-0">
                    <h4>{title}</h4>
                    <li className="mb-1 mt-4">
                        <span className="font-weight-bold mr-2">Director:</span> {director}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Producer:</span> {producer}
                    </li>
                    <li className="mb-1">
                        <span className="font-weight-bold mr-2">Release date:</span> {release_date}
                    </li>
                </ul>
            </div>
        );
    };
};
