import Duration from './Duration'

function Details(props){
    return(
        <div className="Details">
            name:{props.name}
            <br></br>
            mentor:{props.mentor}
            <br></br>
            <Duration duration={props.duration}/>
        </div>
    )
}

export default Details;