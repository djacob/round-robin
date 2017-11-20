import React, {Component} from 'react';
import RoundRobinPool from "../components/RoundRobinPool";

class RoundRobinPoolContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            errors: undefined,
            pool: undefined
        };
    }

    componentDidMount() {
        const poolId = this.props.match.params.id;
        const query = `
        {
            pool(id: "${poolId}") {
                type, 
                competitors {
                    id, 
                    firstName, 
                    lastName 
                }
            }
        }
        `;
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query}),
        };
        fetch(`/graphql`, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then(result => {
                this.setState({
                    pool: result.data.pool,
                    loading: false
                });
            })
            .catch(result => {
                result.then(error => {
                    this.setState({
                        loading: false,
                        errors: error.errors
                    })
                });
            });
    }

    render() {
        if (this.state.pool) {
            return <RoundRobinPool pool={this.state.pool}/>;
        } else if (this.state.loading) {
            return (
                <div>
                    Loading
                </div>
            );
        } else if (this.state.errors) {
            return (
                <div>
                    {this.state.errors.map((error, index) => <div key={index}>{error.message}</div>)}
                </div>
            );
        } else {
            return (
                <div>
                    Pool {this.props.match.params.id} does not exist
                </div>
            );
        }
    }
}

export default RoundRobinPoolContainer;