import React from 'react'

const Cars = (props) => {
    const style = {
        marginBottom: 10,
        marginTop: 10,
        // '@media (min-width: 500px)': {
        //     width: '450px'
        // }

    }
    return (
        <div className="Cars" style={style}>
                <div>
                    <h1>{props.year} {props.brand} {props.model}</h1>
                    <p>{props.description}</p>
                </div>
                <div>
                    <img className="card-img-top" style={{width: 400}} src={require(`../img/${props.imgName}.jpg`)} alt={props.imgName} />
                </div>
                <div>
                    Change Default Brand: <input type="text" style={style} onChange={props.changed}/>
                </div>
                <div>
                    Add Description: <input type="text" style={style} onChange={props.changed2}/>
                </div>
                <button onClick={props.click} style={style}>Remove</button>
        </div>
    )
}

export default Cars
