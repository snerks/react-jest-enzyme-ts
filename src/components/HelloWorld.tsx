import * as React from 'react';

export interface HelloWorldProps {
    name: string;
    removeGreeting?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

export interface HelloWorldState {
    frenchName: string;
}

class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {

    constructor(props: HelloWorldProps) {
        super();

        this.state = {
            frenchName: ''
        };
    }

    frenchify() {
        this.setState({
            frenchName: 'Bonjour'
        });
    }

    render() {
        return (
            <div>
                {this.props.name}
                {this.state.frenchName}
                <button className="frenchify" onClick={() => this.frenchify()}>Frenchify!</button>
                <br />
                <button className="remove" onClick={this.props.removeGreeting}>Remove Me!</button>
            </div>
        );
    }
}

export default HelloWorld;
