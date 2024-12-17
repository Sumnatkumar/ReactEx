import './message.css'
let Message = () =>{
    let msg="GM"
    let tag_styles={color:'pink',backgroundColor:'green'}
    return <div>
                <h1 style={{color:'red',backgroundColor:'yellow'}}>Message Component</h1>

                <h2 style={tag_styles}>Welcome to React World!</h2>

                <h3 style={tag_styles}></h3>
                <h4 className='msgStyle'>{msg}</h4>
           </div>
}

export default Message