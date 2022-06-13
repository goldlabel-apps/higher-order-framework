import * as React from 'react'
import {
    useAppSelector,
    selectCms,
    Icon,
} from '../../listingslab-shared'
import { 
    Box,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'
import { 
    DataGrid, 
    GridColDef, 
    GridValueGetterParams, 
} from '@mui/x-data-grid'

export default function Data() {

    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data) return null
    const { shape, list } = data
    let defaultExpanded = true
    defaultExpanded = false
    

    let fields: GridColDef[] = []
    for (const property in shape) {
      console.warn(`${property}: ${shape[property]}`)
      fields.push({
        field: property,
        headerName: property,
      })
    }

    // let dataList = []

    return (
        <Accordion defaultExpanded={ defaultExpanded }>
            <AccordionSummary
                id="formAccordion"
                expandIcon={<Icon icon="acc" />}>
                <Typography variant="body2" color="secondary" sx={{}}>
                    Data
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box sx={{ height: 380, width: '100%' }}>
                <DataGrid
                    // sx={{ border: "none" }}
                    columns={fields}
                    rows={ list }
                    pageSize={ 5 }
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
              </Box>
            </AccordionDetails>

        </Accordion>
    )
}

/*
{
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
*/