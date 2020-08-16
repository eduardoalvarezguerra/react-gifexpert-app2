import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';
// import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]); // arreglo vacío por defecto

    const state = useFetchGifs(category);

    console.log(state);
    console.log('El valor de state.data es: ');
    console.log('El valor de state es: ');
    console.log(state.data);
    console.log('El valor de state.loading es: ');
    console.log(state.loading);
    return (
        <div>
            <h3> { category } </h3>
            {/* // Antes */}
            {/* {state.loading ? 'Loading...' : 'Data cargada'} */}
            {state.loading && <p>Loading</p>}
            <div className = 'card-grid'>
                {
                    state.data.map(img => (
                        <GifGridItem 
                            key = {img.id} 
                            {...img}
                        />
                    ))
                }                 
            </div>
        </div>
    )
}

