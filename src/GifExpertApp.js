import React, {useState} from 'react';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    console.log(categories);
    return (
        <div>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    // Así estaba antes: sin llamar al componente, sino manejando directamente al array
                    // categories.map(category => {
                    //     return <li key={category} > {category} </li>
                    // })
                    
                    // al llamar al componente , se elimina el return, ya que lo tiene el componente
                    categories.map(category => 
                       <GifGrid 
                            key={category} //el key hace falta porque el ol requiere una key
                            category = {category} 
                       />
                    )
                }

            </ol>
        </div>
    )
}





