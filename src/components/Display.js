export default function Display (props) {
    console.log(props);
    return(
        <div id='display'>
        <h1>   
            {
            props.display.reduce((acc,cur) => {
                return acc +''+cur;
            },'')
            }
        </h1>
        </div>
    );
}