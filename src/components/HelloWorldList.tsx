import * as React from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

export interface HelloWorldListProps {
}

export interface HelloWorldListState {
    greetings: string[];
}

class HelloWorldList extends React.Component<HelloWorldListProps, HelloWorldListState> {
    constructor(props: HelloWorldListProps) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Bender'] };
    }

    addGreeting(newName: string) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName: string) {
        const filteredGreetings = this.state.greetings.filter(name => {
            return name !== removeName;
        });

        this.setState({ greetings: filteredGreetings });
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld
                key={name}
                name={name}
                removeGreeting={(removeName: string) => this.removeGreeting(removeName)}
            />
        ));
    }

    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={(newName: string) => this.addGreeting(newName)} />
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;
