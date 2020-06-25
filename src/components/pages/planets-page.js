import React from "react";
import ItemList from "../item-list/item-list";
import GetData from "../../services/get-data";
import { withRouter } from "react-router-dom";



const PlanetsPage = ({ history }) => {
    const data = new GetData();

    return (
        <ItemList
            getData={data.getAllPlanets}
            onItemSelected={(Id) => history.push(Id)}>
        </ItemList>
    );
};


export default withRouter(PlanetsPage);