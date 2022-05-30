import React from 'react'

function ItemListContainer({ saludo }) {
    return (
        <div>
            <header className="App-header">            
                <p>
                    {saludo}
                </p>
            </header>
        </div>
    )
}

export default ItemListContainer