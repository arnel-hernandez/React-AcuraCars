import React, { Component } from 'react'

import Cars from './Cars'

export default class Home extends Component {

    state = {
        cars: [
            {id:11, brand: 'Acura', model: 'ILX', year:'2019', imgName: 'AcuraILX'},
            {id:22, brand: 'Acura', model: 'TLX', year:'2019', imgName: 'AcuraTLX'},
            {id:33, brand: 'Acura', model: 'RDX', year:'2019', imgName: 'AcuraRDX'}
        ],
        description: '',
        showImage: true,
        showCars: true
    }

    nameChangeHandler = (e, id) => {
        const carIndex = this.state.cars.findIndex(car => {
            return car.id === id
        })


        const car = {
            ...this.state.cars[carIndex]
        }

        car.brand = e.target.value

        const cars = [...this.state.cars]

        cars[carIndex] = car

        this.setState({cars: cars})
            // cars: [
            //     {id: 1, brand: e.target.value, model: 'ILX', year:'2019', imgName: 'AcuraILX'},
            //     {id: 2, brand: e.target.value, model: 'TLX', year:'2019', imgName: 'AcuraTLX'},
            //     {id: 3, brand: e.target.value, model: 'RDX', year:'2019', imgName: 'AcuraRDX'}
            // ]
    }

    nameChangeHandler2 = (e) => {
        const description = e.target.value
        this.setState({
            description: description});
    }

    showImageHandler = () => {
        const willShowImage = this.state.showImage
        this.setState({
            showImage: !willShowImage
        })
    }

    deleteCarHandler = (carid) => {
        //ES5
        // const cars = this.state.cars.slice()
        //ES6
        const cars = [...this.state.cars]
        //
        cars.splice(carid, 1)
        this.setState({cars: cars})
    }

    render() {
        //KEY ID DOESNT WORK WITH THIS
        const {description} = this.state
        // const viewALLCar = cars.map((car, carid) => {
        //     return(
        //     <div>
        //     {
        //     //ELVIS OPERATOR. If true show JSX, if false show null ... ? JSX : null
        //     this.state.showImage === true ?
        //     <div>
        //         <Cars 
        //         key={car.id}
        //         year={car.year}
        //         brand={car.brand}
        //         model={car.model}
        //         imgName={car.imgName}
        //         click={() => this.deleteCarHandler(carid)}
        //         changed={(e) => this.nameChangeHandler(e, cars.id)}
        //         changed2={this.nameChangeHandler2}
        //         />
        //     </div> : null 
        //     }
        //     <h3>{comment}</h3>
        //     </div>
        // )});

        let cars = null
        
        if ( this.state.showImage){
            cars = (
                <div>
                    {this.state.cars.map((car, index) => {
                        return <Cars 
                        key={car.id}
                        year={car.year}
                        brand={car.brand}
                        model={car.model}
                        imgName={car.imgName}
                        description={description}
                        click={() => this.deleteCarHandler(index)}
                        changed={(e) => this.nameChangeHandler(e, car.id)}
                        changed2={this.nameChangeHandler2} />
                    })}
                </div>
            )
        }

        return (
            <div>
                <button style={{marginBottom: 10}} onClick={this.showImageHandler}>View/Hide Cars</button>
                {cars}
            </div>
        )
    }
}

//ALTERNATIVES

// <h1 onClick={() => this.deleteCarHandler(carid)}>{car.year} {car.brand} {car.model}</h1>

// {cars[0].year} {cars[0].brand} {cars[0].model}

// <div>
//     Change Default Brand: <input type="text" style={style} onChange={(e) => this.nameChangeHandler(e, cars.id)}/>
// </div>

// <div>
//     Add Description: <input type="text" style={style} onChange={this.nameChangeHandler2}/>
// </div>

// let cars = null
// if ( this.state.showImage){
//     cars = (
//         <div>
//             {this.state.cars.map(car => {
//                 return <Cars 
//                 key={cars.id}
//                 year={cars.year}
//                 brand={cars.brand}
//                 model={cars.model}
//                 click={() => this.deleteCarHandler(carid)}
//                 changed={(e) => this.nameChangeHandler(e, cars.id)}
//                 changed2={this.nameChangeHandler2}
//                 />
//             })}
//         </div>
//     )
// }