import React, { useEffect, useState } from 'react'
import { useSearchModelsQuery } from '../../app/services/furnitureModelApi'
import ModelCard, { furnitureData } from '../../components/UI/ModelCard/ModelCard'
import styles from './TablePage.module.css'

const TablePage: React.FC = () => {
  const { data: fetchedTables, error, isLoading } = useSearchModelsQuery('стол')
  const [tables, setTables] = useState<furnitureData[]>([])

  useEffect(() => {
    if (fetchedTables) {
      setTables(fetchedTables)
    }
  }, [fetchedTables])

  const handleRemoveModel = (id: number) => {
    setTables((prevTables) => prevTables.filter(table => table.id != id))
  }

  return (
    <div
      className={styles.TablePageContainer}
    >
      <div className={styles.ModelCardContainer}>
        {tables.map((table) =>
          <ModelCard key={table.id} furnitureData={table} onRemove={handleRemoveModel} />
        )}
      </div>
      
    </div>
  )
}

export default TablePage