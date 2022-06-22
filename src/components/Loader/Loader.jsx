import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {

    return (
        <div>
            <div className="text-center" >
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        </div>
    )
}

export default Loader