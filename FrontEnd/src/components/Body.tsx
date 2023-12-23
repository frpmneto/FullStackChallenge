import React, {useState} from 'react'
import Graph from './Graph'
import Table from './Table'

const Body = () => {
const title = 'DATA'
const description = 'blablabla'
  
return (
    <>
        <div className='row pt-3 justify-content-center'>
                <h1 className='text-center'>{title}</h1>
                <p className='text-center'>{description}</p>
        </div>
        
        <div className="pt-3 row justify-content-center">
            <div className='col-6 pb-5'
            >
                <Table></Table>
            </div>
            <div className='col-4 py-5'
            >
                <Graph></Graph>
            </div>
        </div>
    </>
)
}
export default Body