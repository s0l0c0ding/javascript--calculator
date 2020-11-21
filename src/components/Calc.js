
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Popover,Button } from 'antd';
import Display from './Display';
import {operatorAction, insertAction, calcAction, clearAction} from '../redux/actions';

class Calc extends React.Component {
    render(){
    const displayValue = this.props.display;
    return (
        <div>
        <Row justify='center'>
            <Display display = {displayValue}/>
        </Row>    
       <Row justify='center'>
        <Col span={18}>
        <Button shape="circle" id="zero"  onClick={() => this.props.insertAction(0)}>0</Button>
        <Button shape="circle" id="one" onClick={() => this.props.insertAction(1)}>1</Button>
        <Button shape="circle" id="two" onClick={() => this.props.insertAction(2)}>2</Button>
        <Button shape="circle" id="three" onClick={() => this.props.insertAction(3)}>3</Button>
        <Button shape="circle" id="four" onClick={() => this.props.insertAction(4)}>4</Button>
        <Button shape="circle" id="five" onClick={() => this.props.insertAction(5)}>5</Button>
        <Button shape="circle" id="six" onClick={() => this.props.insertAction(6)}>6</Button>
        <Button shape="circle" id="seven" onClick={() => this.props.insertAction(7)}>7</Button>
        <Button shape="circle" id="eight" onClick={() => this.props.insertAction(8)}>8</Button>
        <Button shape="circle" id="nine" onClick={() => this.props.insertAction(9)}>9</Button>
        <Button shape="circle" id="" onClick={() => this.props.insertAction('.')}>.</Button>
        </Col>
        <Col span={6}>
        <Button shape="circle" id="add" onClick={() => this.props.operatorAction('+')}>+</Button>
        <Button shape="circle" id="subtract" onClick={() => this.props.operatorAction('-')}>-</Button>
        <Button shape="circle" id="multiply" onClick={() => this.props.operatorAction('*')}>*</Button>
        <Button shape="circle" id="divide" onClick={() => this.props.operatorAction('/')}>/</Button>
        <Button shape="circle" id="equals" onClick={() => this.props.calcAction()}>=</Button>
        <Button shape="circle" id="equals" onClick={() => this.props.clearAction()}>AC</Button>
        </Col>
       </Row>
       </div>
    );
    }
  }
  
const mapStateToProps =  (state) => {
    return state;
}

const mapDispatchToProps = {
    operatorAction, insertAction, calcAction, clearAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Calc);