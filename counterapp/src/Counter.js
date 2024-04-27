import React from 'react'

class Counter extends React.Component{
    constructor(){
        super()
            this.state = {count:0}
            this.updateCount=this.updateCount.bind(this)
            this.decreaseCount=this.decreaseCount.bind(this)
            this.stop=this.stop.bind(this)
        
    }
    updateCount(){
        this.setState({count: this.state.count +1})
    }
    decreaseCount(){
        this.setState({count : this.state.count -1 })
    }
    stop(){
        this.setState({count: 0})
    }
    render(){
        return(
            <div>
                <h1>Counter Value : {this.state.count}</h1>
                
            <button onClick={this.updateCount}>Increase</button>
            
                <button onClick={this.decreaseCount}>Decrease</button>
            
                <button onClick={this.stop}>Stop</button>
            </div>
        )
    }
}
export default Counter