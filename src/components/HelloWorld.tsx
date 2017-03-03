import * as React from 'react';
import './HelloWorld.css';

export interface HelloWorldProps {
    name: string;
    removeGreeting: Function;
}

export interface HelloWorldState {
    greeting: string;
}

class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {

    constructor(props: HelloWorldProps) {
        super();

        this.state = { greeting: 'Hello' };
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br />
                <button className="frenchify" onClick={() => this.frenchify()}>Frenchify!</button>
                <br />
                <button className="remove" onClick={() => this.removeGreeting()}>Remove Me!</button>
            </div>
        );
    }
}

export default HelloWorld;
