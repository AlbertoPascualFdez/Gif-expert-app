import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) =>{
        //console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const trimedValue = inputValue.trim();

        console.log(inputValue)



        if(trimedValue.length <= 1) return;

        //setCategories(cat => [inputValue, ...cat])
        onNewCategory(trimedValue);

        setInputValue("");
    }
    

    return (
        <form onSubmit={ onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange}/>
        </form>
        
    )
}
