import React, {useState} from 'react'
import data from "../assets/DATA.json"
import DataTable from 'react-data-table-component'

const Table = () => {
const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    {
        name: 'Last name',
        selector: row => row.surname,
        sortable: true
    },
    {
        name: 'Participation',
        selector: row => row.participation,
        sortable: true

    }
]
// const data = []
  
return (
    <>
        <div className="container-fluid p-5 justify-content-center">
            {/* <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table> */}
            <DataTable 
                columns={columns}
                data={data}>
            </DataTable>
        </div>
    </>
)
}
export default Table