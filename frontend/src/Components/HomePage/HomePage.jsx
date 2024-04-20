import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import MealPlanForm from '../MealPlan/MealPlanForm'
import MealPlanList from '../MealPlan/MealPlanList'

function HomePage() {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
              <Navigation />

        </Grid>
        <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>

              <p className='text-center'>middle part</p>

              <h1 className="text-3xl font-bold underline text-center my-4">
                Social Meal Plans
              </h1>
              <MealPlanForm/>
              {/* <MealPlanList /> */}

      
        </Grid>
        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>

            <p className='text-center'>right part</p>

            
        </Grid>
    </Grid>

  )
}

export default HomePage