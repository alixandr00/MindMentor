import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material'

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein }
}

const rows = [
   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
   createData('Cupcake', 305, 3.7, 67, 4.3),
   createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function DenseTable() {
   return (
      <StylePaper sx={{ width: '60%' }}>
         <TableContainer component={Paper}>
            <Table aria-label="a dense table">
               <StyledTableHead>
                  <TableRow>
                     <TableCell align="left" colSpan={7}>
                        Dessert (100g serving)
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>Dessert (100g serving)</TableCell>
                     <TableCell align="right">Calories</TableCell>
                     <TableCell align="right">Fat&nbsp;(g)</TableCell>
                     <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                     <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
               </StyledTableHead>
               <StyledTableBody>
                  {rows.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <StyledTableCell align="right">
                           {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {row.protein}
                        </StyledTableCell>
                     </TableRow>
                  ))}
               </StyledTableBody>
            </Table>
         </TableContainer>
      </StylePaper>
   )
}

const StyledTableBody = styled(TableBody)(({ ...props }) => ({
   backgroundColor: props.backgroundColor || '#2B2D31',
}))
const StyledTableCell = styled(TableCell)(({ theme }) => ({
   '&:hover': {
      backgroundColor: props.DenseTable
      
      ,
   },
   '&.Mui-selected': {
      backgroundColor: theme.palette.action.selected,
   },
}))
const StylePaper = styled(Paper)(({ theme }) => ({
   marginTop: '5rem',
   marginLeft: '5rem',
   borderRadius: theme.spacing(1),
   boxShadow: theme.shadows[4],
}))

const StyledTableHead = styled(TableHead)({
   '& .MuiTableHead-root': {},
})
