
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button, Divider } from 'antd';
import Display from './Display';
import { operatorAction, insertAction, calcAction, clearAction } from '../redux/actions';

const styCenter = {
    'text-align': 'center'
}

class Calc extends React.Component {
    render() {
        const displayValue = this.props.display;
        return (
            <>
                <Card bordered={true} headStyle={styCenter} >
                    <Row justify='end'>
                        <Display display={displayValue} />
                        <Divider />
                    </Row>
                    <Row justify='end' gutter={[5,5]}>
                        <Col span={12}>
                            <Button type="primary" shape="round" size="large" id="clear" onClick={() => this.props.clearAction()} block>AC</Button>
                        </Col>
                    </Row>
                    <Row justify='center' gutter={[5,5]}>
                        <Col span={6}>
                            <Button shape="round" size="large" id="seven" onClick={() => this.props.insertAction(7)} block>7</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="eight" onClick={() => this.props.insertAction(8)} block>8</Button>

                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="nine" onClick={() => this.props.insertAction(9)} block>9</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="divide" onClick={() => this.props.operatorAction('/')} block>/</Button>
                        </Col>
                    </Row>
                    <Row justify='center' gutter={[5,5]}>
                        <Col span={6}>
                            <Button shape="round" size="large" id="four" onClick={() => this.props.insertAction(4)} block>4</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="five" onClick={() => this.props.insertAction(5)} block>5</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="six" onClick={() => this.props.insertAction(6)} block>6</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="subtract" onClick={() => this.props.operatorAction('-')} block>-</Button>
                        </Col>
                    </Row>
                    <Row justify='center' gutter={[5,5]}>
                        <Col span={6}>
                            <Button shape="round" size="large" id="one" onClick={() => this.props.insertAction(1)} block>1</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="two" onClick={() => this.props.insertAction(2)} block>2</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="three" onClick={() => this.props.insertAction(3)} block>3</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="add" onClick={() => this.props.operatorAction('+')} block>+</Button>
                        </Col>
                    </Row>
                    <Row justify='center' gutter={[5,5]}>
                        <Col span={6}>
                            <Button shape="round" size="large" id="zero" onClick={() => this.props.insertAction(0)} block>0</Button>

                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="decimal" onClick={() => this.props.insertAction('.')} block>.</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="equals" onClick={() => this.props.calcAction()} block>=</Button>
                        </Col>
                        <Col span={6}>
                            <Button shape="round" size="large" id="multiply" onClick={() => this.props.operatorAction('*')} block>*</Button>
                        </Col>
                    </Row>
                </Card>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    operatorAction, insertAction, calcAction, clearAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc);