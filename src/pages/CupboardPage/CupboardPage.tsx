import React, { useEffect, useState } from 'react'
import { useSearchModelsQuery } from '../../app/services/furnitureModelApi'
import ModelCard, { furnitureData } from '../../components/UI/ModelCard/ModelCard'
import styles from './Cupboard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setCupboards } from '../../features/furniture/cupboardSlice'

const CupboardPage = () => {
  const { data: fetchedCupboard, error, isLoading } = useSearchModelsQuery('шкаф')
  const cupboards = useSelector((state: RootState) => state.cupboards.cupboards)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchedCupboard) {
      dispatch(setCupboards(fetchedCupboard))
    }
  }, [fetchedCupboard])



  return (
    <div
      className={styles.CupboardPageContainer}
    >
      {cupboards.map((cupboard) =>
        <ModelCard
          key={cupboard.id}
          furnitureData={cupboard}
          typeOfModel='cupboard'
        />
      )}
    </div>
  )
}

export default CupboardPage