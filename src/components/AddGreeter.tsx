import * as React from 'react';
import './AddGreeter.css';

export interface AddGreeterProps {
    addGreeting: Function;
}

export interface AddGreeterState {
    greetingName: string;
}

class AddGreeter extends React.Component<AddGreeterProps, AddGreeterState> {
    constructor(props: AddGreeterProps) {
        super(props);

        this.state = { greetingName: '' };
    }

    handleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ greetingName: event.target.value });
    }

    addGreeting() {
        this.props.addGreeting(this.state.greetingName);
        this.setState({ greetingName: '' });
    }

    render() {
        return (
            <div className="AddGreeter">
                <input
                    type="text"
                    value={this.state.greetingName}
                    onChange={(e) => this.handleUpdate(e)}
                />
                &nbsp;&nbsp;
                <button onClick={() => this.addGreeting()}>Add</button>
            </div>
        );
    }
}

export default AddGreeter;
