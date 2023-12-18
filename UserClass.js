import React from "react";

class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(props);

        this.state = {
            count:0,
            count2:2,
        }
    }
    render()
    {
       const  {name, location} = this.props;
       const {count,count2 } = this.state;

        return ( <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
        
        <button onClick={ ()=>{
            this.setState(
                {
                    count:this.state.count+1,
                    count2:this.state.count2+1,
                }
            );
        }
    }
    >
        Count Increase
    </button>

        <h3>Name : {name}</h3>
        <h4>Location : {location} </h4>
        <h5>Contact : 90099</h5>
    </div>
        );
    }
}

export default UserClass;
