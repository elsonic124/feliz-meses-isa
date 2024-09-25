import '../App.css'

export function Page(props){
    return(
        <>
        <div className="page-main">
            <h1>{props.title}</h1>
            {props.primaryImage &&
                <img src={props.primaryImage}></img>}
            <p>{props.content}</p>
            {props.secondaryImage &&
                <img src={props.secondaryImage}></img>}
            <p>{props.footer}</p>
        </div>
        </>
    )
}