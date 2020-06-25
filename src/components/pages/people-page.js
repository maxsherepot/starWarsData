import React from "react";
import ItemList from "../item-list/item-list";
import GetData from "../../services/get-data";
import { withRouter } from "react-router-dom";



const PeoplePage = ({ history }) => {
    const data = new GetData();

    return (
        <ItemList
            getData={data.getAllPeople}
            onItemSelected={(Id) => history.push(Id)}>
        </ItemList>
    );
};


export default withRouter(PeoplePage);