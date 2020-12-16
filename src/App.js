import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            newitem:"",
            list:[]
        }
    }
    
    updateInput(key, value){
        this.setState({
            [key]:value
        });
    }

    addItem(){
        const newitem={
            id: 1+Math.random(),
            value: this.state.newitem.slice()
        };

        const list =[...this.state.list];

        list.push(newitem);

        this.setState({
            list,
            newitem:""
        })
    }

    deleteItem(id){
        const list = [...this.state.list];

        const updatedList = list.filter(item =>item.id !==id);

        this.setState({list: updatedList});
    }

    render(){
        return(
            <div className="App">
                <div>
                    Shopping List
                    <br/>
                    <br/>
                    Input your Shopping item
                    <br/>
                    <input
                        type="text"
                        placeholder="Type item here..."
                        vale={this.state.newitem}
                        onChange={e =>this.updateInput("newitem", e.target.value)}
                    />
                    <button onClick={()=> this.addItem()}> Post </button>
                    <br/>
                    <ul>
                        {this.state.list.map(item=>{
                            return(
                                <li key={item.id}>
                                    {item.value}
                                    <button onClick={() =>this.deleteItem(item.id)}> X </button> 
                                </li>
                            )
                        })}
                    </ul>
                    <br/>
                    Delet after you shop.
                </div>
              
            </div>
        );
    }
}

export default App;