import * as React from 'react';
import { resetCounter } from '../utils/counter';

interface CounterProps {

}
export default class Counter extends React.Component {

    constructor(props: CounterProps) {
        super(props);
    }

    componentDidMount() {
        resetCounter();
    }

    render() {
        return ( <div> hello </div>);
    }
}