import React, { useEffect, useState } from "react";
const axios = require('axios');

function SecretIngredients() {
    const [usedIngredients, getUsedIngredients] = useState("");

    useEffect(() => {
        getAllUsedIngredients();
    }, [])

    const getAllUsedIngredients = () => {
        axios.get("https://wiki.abakus.no/rest/api/content/14975020?expand=body.storage")
        .then((response) => {
            getUsedIngredients(response)
        })
        .catch(error => console.error(error))
    }



    return (
        <p>{usedIngredients}</p>
    )
}
export default SecretIngredients;