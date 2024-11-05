import { useState, useEffect } from "react";

function Form(props){

    const [formData, setFormData] = useState({
        searchterm: "",
    })

    function handleChange(e){
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        props.moviesearch(formData.searchterm);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm} /> 
            <input type="submit" value="submit" />
        </form>
        </>
    )
}

export default Form;