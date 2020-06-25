import React from "react";
import Spinner from "../spinner/spinner";
import "./item-list.css";
import ErrorMessage from "../error-message/error-message";



export default class ItemList extends React.Component {

    state = {
        itemList: null,
        error: false
    };

    componentDidMount() {
        this.props.getData()
            .then((itemList) => {
                this.setState({ itemList })
            })
            .catch(() => {
                this.setState({ error: true });
            });
    };

    renderName(arr) {
        return arr.map((item) => {
            const idRegExp = /\/([0-9]*)\/$/;
            const id = item.url.match(idRegExp)[1];
            return (
                <li className="list-group-item bgColor"
                    key={item.name}
                    onClick={() => this.props.onItemSelected(id)}>
                    {item.name}</li>
            );
        });
    };


    render() {
        const { itemList, error } = this.state;

        if (error) {
            return <ErrorMessage />
        };

        if (!itemList) {
            return <Spinner />
        };

        const element = this.renderName(itemList);
        return (
            <ul className="Item-List list-group mb-4">
                {element}
            </ul>
        );
    };
};
