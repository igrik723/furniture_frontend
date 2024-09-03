import React, { useEffect, useState } from 'react'
import { useSearchModelsQuery } from '../../app/services/furnitureModelApi'
import ModelCard, { furnitureData } from '../../components/UI/ModelCard/ModelCard'
import styles from './CabinetPage.module.css'

const CupboardPage = () => {
  const { data: fetchedCabinets, error, isLoading } = useSearchModelsQuery('тумба')
  const [cabinets, setCabinets] = useState<furnitureData[]>([])

  useEffect(() => {
    if (fetchedCabinets) {
      setCabinets(fetchedCabinets)
    }
  }, [fetchedCabinets])

  const handleRemoveModel = (id: number) => {
    setCabinets((prevCabinets) => prevCabinets.filter(cabinet => cabinet.id !== id))
  }
 
  return (
    <div
      className={styles.CabinetPageContainer}
    >
      {cabinets.map(cabinet => 
       <ModelCard furnitureData={cabinet} onRemove={handleRemoveModel}/>
     )}
    </div>
  )
}

export default CupboardPage