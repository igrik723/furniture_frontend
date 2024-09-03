import React, { useEffect, useState } from 'react'
import { useSearchModelsQuery } from '../../app/services/furnitureModelApi'
import ModelCard, { furnitureData } from '../../components/UI/ModelCard/ModelCard'
import styles from './Cupboard.module.css'

const CupboardPage = () => {
  const { data: fetchedCupboard, error, isLoading } = useSearchModelsQuery('шкаф')
  const [cupboards, setCupboards] = useState<furnitureData[]>([])

  useEffect(() => {
    if (fetchedCupboard) {
      setCupboards(fetchedCupboard)
    }
  }, [fetchedCupboard])

  const handleRemoveNModel = (id: number) => {
    setCupboards((prevCupboards) => prevCupboards.filter(cupboard => cupboard.id !== id))
  } 

  return (
    <div
      className={styles.CupboardPageContainer}
    >
      {cupboards.map(cupboard => 
        <ModelCard key={cupboard.id} furnitureData={cupboard} onRemove={handleRemoveNModel}/>
      )}
    </div>
  )
}

export default CupboardPage