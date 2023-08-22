'use client'

import axios from 'axios';

import { useState, useEffect } from 'react';
import { Box, Button, Stack, SvgIcon, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import DataTable from '@/components/DataTable';
import IVehicleType from '@/interfaces/IVehicleType';

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90, },
  {
    field: 'name',
    headerName: 'Tipo',
    width: 200,
  },
  {
    field: 'seat',
    headerName: 'Assentos',
    width: 100,
    
  },
];

const VehiclesTypes = () => {

  const [rows, setRows] = useState([]);

  const getAllVehiclesTypes = async () => {
    try{
      const { data } = await axios.get('/api/vehicles-types')
  
      const rows = data.map((item: IVehicleType, index: number) =>{

        return {
          id: index,
          name: item.name,
          seat: item.seat
        }
      })

      console.log(rows)
      setRows(rows);
    }
    catch(error: any){
      console.log('Erro ao lista tipos de veículos', error.message);
    }
  }
  
  useEffect(() =>{
    getAllVehiclesTypes();
  },[])
  
  return (
    <>   
      <title>
        Tipos
      </title>
    
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4" className='title-bold'>
                  Tipos de veículos
                </Typography>
              </Stack>
              <Link href={'/vehicles/vehicles-types/register'}>
                <Button
                  variant="contained"
                  startIcon={(
                    <SvgIcon>
                      <AddIcon/>
                    </SvgIcon>
                  )}
                  sx={{
                    borderRadius: '4px',
                  }}
                  >
                  Novo 
                </Button>
              </Link> 
            </Stack>
            <DataTable rows={rows} columns={columns}/>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default VehiclesTypes