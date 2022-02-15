import React, {Component} from 'react'


export default class PetLove extends Component{

state = {dogs:[{name:'Tulio', breed:'Chiwawa', age:'5 years'},
{name:'Pipoca', breed:'SRD', age:'9 years'},
{name:'Spike', breed:'Pastor', age:'2 years'}],
cats:[{name:'Oliver', breed:'angorá', age:'10 years'},
{name:'Lola', breed:'persa', age:'12 years'},
{name:'Garfield', breed:'malandro', age:'7 years'}],
list:[]

}


dogs = ()=>{
    this.setState({list: this.state.dogs.map((item) => (
        <div>
            <h1>DOG'S NAME : {item.name}, age : {item.age}</h1>
        </div>
    ))})
}


cats =()=>{
    this.setState({list: this.state.cats.map((item) =>(
        <div>
            <h1>CAT'S NAME : {item.name}</h1>
        </div>
    ))})
}

    render(){
        return(
            <div>
            <button onClick={this.dogs}>DOGS</button>
            <button onClick={this.cats}>CATS</button>
            <button>CLEAR</button>
            <h2>{this.state.list}</h2>
            </div>
        )
    }
}