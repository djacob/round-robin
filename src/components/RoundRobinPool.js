import React, {Component} from 'react';

class RoundRobinPool extends Component {

    componentDidMount() {
        const poolId = this.props.match.params.id;
        fetch(`/api/pool/${poolId}`).then(result => {
            console.log('result', result);
        });
    }

    render() {
        return (
            <div>
                Pool
            </div>
        );
    }
};

export default RoundRobinPool;