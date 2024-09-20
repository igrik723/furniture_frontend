import React, { useEffect, useState } from 'react'
import { useSearchModelsQuery } from '../../app/services/furnitureModelApi'
import ModelCard, { furnitureData } from '../../components/UI/ModelCard/ModelCard'
import styles from './CabinetPage.module.css'
import { RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { setCabinets } from '../../features/furniture/cabinetSlice'


const CupboardPage = () => {
  const { data: fetchedCabinets, error, isLoading } = useSearchModelsQuery('тумба')
  const typeOfModel = 'cabinet'
  const cabinets = useSelector((state: RootState) => state.cabinets.cabinets)
  const dispatch = useDispatch()



  useEffect(() => {
    if (fetchedCabinets) {
      dispatch(setCabinets(fetchedCabinets))
    }
  }, [fetchedCabinets])



  return (
    <div
      className={styles.CabinetPageContainer}
    >
      {cabinets.map((cabinet) =>
        <ModelCard
          key={cabinet.id}
          furnitureData={cabinet}
          typeOfModel='cabinet'
        />
      )}
    </div>
  )
}

export default CupboardPage