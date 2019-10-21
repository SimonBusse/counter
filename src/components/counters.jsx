import  React, {Component} from "react";
import Counter  from "./counter";

class Counters extends Component{
    state = {
        counters:[
            {id:1,value:52},
            {id:2,value:2},
            {id:3,value:2}
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters});
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete ={() => this.handleDelete(counter.id)}
                        counter={counter}/>
                    )}
            </div>
        );
    }
}

export default Counters;