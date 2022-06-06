import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({ saludo }) {

    function onAdd(cantidad){
        console.log(cantidad);
    }
    
    return (
        <div>
            <header className="App-header">            
               <p>
                    {saludo}
                </p> 
                <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
            </header>
        </div>
    )
}

export default ItemListContainer