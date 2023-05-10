import React from 'react';
import NumberForm from './NumberForm'
import NumberRow from './NumberRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedNumbersRow from './SelectedNumbersRow';

class Numbers extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }


    onAddClick = () => {
        const copy = [this.RandomNumberGenerator(), ...this.state.numbers];
        this.setState({ numbers: copy });
    }

    onSelectClick = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(num => num !== n) })
        }
        else (
            this.setState({ selectedNumbers: [...selectedNumbers, n] })
        )

    }

    RandomNumberGenerator = () => {
        const min = 1;
        const max = 100;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        return randomNumber;
    }

    onLockClick = (number) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(number)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(num => num !== number) })
        }
        else (
            this.setState({ lockedNumbers: [...lockedNumbers, number] })
        )
    }

    render() {
        const {selectedNumbers} = this.state;
        return (<div className="container" style={{ marginTop: 60 }}>
            <NumberForm onAddClick={this.onAddClick} />

            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th style={{ width: 25 }}>Number</th>
                        <th>Add/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.numbers.map(n => <NumberRow
                        number={n}
                        isSelected={selectedNumbers.includes(n)}
                        onSelectClick={this.onSelectClick}
                        isDisabled={this.state.lockedNumbers.includes(n)}
                    />)}
                </tbody>
            </table>

{!!selectedNumbers.length && <div className="row p-5 rounded" style={{backgroundColor: 'lightgrey'}}>
    <div className="col-md-6 col-md-offset-3">
        <h3>Selected Numbers </h3>
            
        {selectedNumbers.map(n => <SelectedNumbersRow 
        number={n}
        onLockClick={this.onLockClick}
        isLocked={this.state.lockedNumbers.includes(n)}/>)}
            </div>
            </div>
}
            </div>
            

        
        )
    }
}

export default Numbers;