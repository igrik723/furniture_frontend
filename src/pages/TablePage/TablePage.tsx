import React, { useEffect, useState } from 'react'
import { useSearchModelsQuery } from '../../app/services/furnitureModelApi'
import ModelCard, { furnitureData } from '../../components/UI/ModelCard/ModelCard'
import styles from './TablePage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setTables } from '../../features/furniture/tableSlice';


const TablePage: React.FC = () => {
  const { data: fetchedTables, error, isLoading } = useSearchModelsQuery('Стол')
  const typeOfModel = 'table'
  const tables = useSelector((state: RootState) => state.tables.tables)
  console.log(fetchedTables)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchedTables) {
      dispatch(setTables(fetchedTables))
    }
  }, [fetchedTables])



  return (
    <div
      className={styles.TablePageContainer}
    >
      <div className={styles.ModelCardContainer}>
  
        {tables.map((table) =>
          <ModelCard
            key={table.id}
            furnitureData={table}
            typeOfModel='table'
          />
        )}
      </div>
      
    </div>
  )
}

export default TablePage

