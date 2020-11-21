export default function Display (props) {
    console.log(props);
    return(
        <h1>   
            {
            props.display.reduce((acc,cur) => {
                return acc +''+cur;
            },'')
            }
        </h1>
    );
}