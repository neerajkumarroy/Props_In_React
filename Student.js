function Student(props)
{
    console.log(props);
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>Hello {props.name} </h1>
            <h2>Email:{props.email}</h2>
            <h3>Address:{props.other.address}</h3>
        
        
        </div>
        
    )
}
export default Student;

