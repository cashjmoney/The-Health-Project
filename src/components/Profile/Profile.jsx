 function MainScreen(props)
{
    return(
    <div className="MainScreen">
        <h1>{props.title}</h1>
        {props.children}
    </div>
    );
}
export default MainScreen
