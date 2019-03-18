import React, { Component } from 'react';
import { connect } from 'react-redux';


import {helloApp} from "../../actions/helloActions";


class Homepage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.helloApp('123');
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                         Handle your main content here ........
                    </p>
                    <p>
                        {this.props.message}
                    </p>
                    <p>
                        {this.props.message1}
                    </p>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state',state);
    return {
        message: state.getHelloMsg.message,
        message1: state.get_hello_call.message1,
    };
}


const mapDispatchToProps = dispatch => ({
    helloApp: (id) => dispatch(helloApp(id))
})

export default  connect(mapStateToProps,mapDispatchToProps)(Homepage);

