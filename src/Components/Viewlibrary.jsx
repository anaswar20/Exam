import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Addlibrary from './Addlibrary';

const Viewstudents = () => {
  var [update, setUpdate] = useState(false)
  var [selected, setSelected] = useState([])
  var [library, setLibrary] = useState([])
  useEffect(() => {
    axios.get(" http://localhost:3005/library/")
      .then(response => {
        setLibrary(library = response.data)
        console.log(library)
      })
      .catch(error => console.log(error))

  }, [])
  const updateValues = (value) => {
    setSelected(value);
    setUpdate(true);
  }
  const deleteValues = (id) => {
    console.log("delete clicked" + id)
    axios.delete(" http://localhost:3005/library/" + id)
      .then((response) => {
        console.log(response.idvalue);

      })
  }
  var finalJSX = <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>bname</TableCell>
          <TableCell>genre</TableCell>
          <TableCell>author</TableCell>
          <TableCell>add</TableCell>
          <TableCell>update</TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
        {library.map((value, index) => {
          return <TableRow key={index}>
            <TableCell>{value.bname}</TableCell>
            <TableCell>{value.genre}</TableCell>
            <TableCell>{value.author}</TableCell>
            <TableCell>{value.add}</TableCell>
            <TableCell>{value.update}</TableCell>
            <TableCell>
              <Button
                color='error'
                onClick={() => deleteValues(value.bname)}>delete</Button>
            </TableCell>
            <TableCell>
              <Button
                color='error'
                onClick={() => updateValues(value.bname)}>update</Button>
            </TableCell>
          </TableRow>

        })}
      </TableBody>
    </Table>
  </TableContainer>
  if(update)
  finalJSX=<Addlibrary data={selected} method="put" />
  return (
    <div>
      <br></br>
      <br></br>
      <br>
      </br>
      {finalJSX}

    </div>
  )
}

export default Viewstudents
