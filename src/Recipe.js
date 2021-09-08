import React from 'react';
import style from './Recipe.module.css';
export const Recipe = ({title,calories,im,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
           {console.log(ingredients)} 
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={im} />

        </div>
    )
}

export default Recipe; 

