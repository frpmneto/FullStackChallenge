import React, {useState} from 'react'

const NavBar = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [participation, setParticipation] = useState('')
    const participationAsNumber = Number(participation)


function clicked(){
    console.log('clicou')
    setName('')
    setSurname('')
    setParticipation('')
    // setPrintValue(true)
}

return (
    <div className="container-fluid bg-info p-5">
        <form>

                <div className='row justify-content-center'>
                    <div className="col-2">
                        {/* <label className="sr-only">Name</label> */}
                        <input type="text" className="form-control" id="inlineFormInput" 
                        value={name} onChange={e => setName(e.target.value)} placeholder='Name'/>
                    </div>

                    <div className="col-2">
                        {/* <label className="sr-only">Surname</label> */}
                        <input type="text" className="form-control " id="inlineFormInputGroup" 
                        value={surname} onChange={e => setSurname(e.target.value)} placeholder='Last name'/>
                    </div>

                    <div className="col-2">
                        {/* <label className="sr-only">Participation</label> */}
                        <input type="text" className="form-control " id="inlineFormInputGroup"
                        value={participation} onChange={e => setParticipation(e.target.value)} placeholder='Participation (hours)'/>
                    </div>

                    <div className="col-1">
                        <button type="submit" className="btn btn-primary btn-outline-light px-4"
                        >Submit</button>
                    </div>
                </div>
            
        </form>
    </div>
)

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">

                <>
                {/* {printValue?<h1>{name} {surname} {participation}</h1>:<h1>No Data</h1>} */}
                
                <input type="text" aria-label="Username" className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder='Name'></input>
                <input type="text"  className="form-control" value={surname} onChange={e => setSurname(e.target.value)}placeholder='Surname'></input>
                <input type="number"  className="form-control" value={participation} onChange={e => setParticipation(e.target.value)}placeholder='Participation (hours)'></input>
                <button onClick={clicked}>Send</button>
                <h1>{name} {surname} {participationAsNumber > 0 && participationAsNumber}</h1>
                </>
                
            </div>
        </nav>
    </div>
  )
}

export default NavBar