import React, { useState } from 'react';
import './about.style.css';

class InnerAbout extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            num: 0
        }
        console.log('child constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps call', props, state);

        if (state.num != props.value) {
            return {
                num: props.value
            }
        }
        return null;

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('child shouldComponentUpdate');

        if (this.state.num != nextProps.value) {
            return true;
        }
        return false;

    }

    componentDidMount() {
        console.log('child componentDidMount');
    }

    render() {
        console.log('child render')
        return (
            <div>
                <div>Children countr : {this.props.value} </div>
                <div>State : {this.state.num}</div>
            </div>
        )
    }

}


const About = React.memo(() => {

    const [counter, setCounter] = useState(0);

    let increment = () => {
        setCounter(Math.floor(Math.random() * 3));        
    }
    console.log('Parent render')
    return (
        <div>
            <div>Count : {counter}</div>
            <button onClick={increment} >Increment</button>
            <InnerAbout value={counter} />
        </div>
    )
});


// class About extends React.PureComponent {
//     state = {
//         counter: 0
//     }
//     increment = () => {
//         this.setState({
//             counter: Math.floor(Math.random() * 3)
//         })
//     }
//     render() {
//         console.log('Parent render');
//         return (
//             < div >
//                 <div>Count : {this.state.counter}</div>
//                 <button onClick={this.increment} >Increment</button>
//                 <InnerAbout value={this.state.counter} />
//             </div >
//         )
//     }
// }

export default About;

