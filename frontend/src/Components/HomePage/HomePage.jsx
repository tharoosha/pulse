import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import MealPlanForm from '../MealPlan/MealPlanForm'
import MealPlanList from '../MealPlan/MealPlanList'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'

function HomePage() {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
              <Navigation />

        </Grid>
        <Grid item xs={12} lg={6} className='px-5 lg:px-5 hidden lg:block w-full relative'>

              {/* <p className='text-center'>middle part</p> */}
              <HomeSection/>

              {/* <h1 className="text-3xl font-bold underline text-center my-4"> */}
                {/* Social Meal Plans */}
              {/* </h1> */}
              {/* <MealPlanForm/> */}
              {/* <MealPlanList /> */}

      
        </Grid>
        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>

            <RightPart />

            
        </Grid>
    </Grid>

  )
}

export default HomePage