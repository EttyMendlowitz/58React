import React from 'react';

class SelectedNumbersRow extends React.Component{

onLockClick = () => {
    this.props.onLockClick(this.props.number);
}

    render(){
const {number, isLocked} = this.props;

        return(<ul className="list-group">
        <li className="list-group-item">{number}
        <button className="ms-5 btn btn-primary" onClick={this.onLockClick}>{isLocked ? `unlock` : `lock`}</button></li>
        </ul>

        )
    }
}
export default SelectedNumbersRow