import { Typography } from 'antd';
const { Text } = Typography;

export default function Display (props) {
    console.log(props);
    return(
        <Text id='display' type="success" strong className="display-text">
            {
            props.display.reduce((acc,cur) => {
                return acc +''+cur;
            },'')
            }
        </Text>
    );
}