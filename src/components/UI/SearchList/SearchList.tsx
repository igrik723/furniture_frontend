import React from 'react'
import styles from './SearchList.module.css'
import confirm from '../../../assets/check-mark-button.webp'
import { useDispatch } from 'react-redux'
import { addModel } from '../../../features/furniture/furnitureSlice'

interface SearchList {
    id: number;
    furnitureName: string;
    furnitureType: string;
    Property: string;
    Price: number
}

interface SearchListProps {
    results: SearchList[];
    isLoading: boolean;
    isError: boolean;
}
const SearchList: React.FC<SearchListProps> = ({ results, isLoading, isError }) => {
    const dispatch = useDispatch()

    const handleClick = (model: SearchList) => {
        dispatch(addModel(model))
    }
    if (isLoading) return <div>Загрузка</div>
    if (isError) return <div>Ошибка при загрузке данных</div>
    if(results.length === 0) return <div>Нет результатов</div>

    return (
        <div className={styles.listContainer}>
            {results.map((model) => 
                <div key={model.id} className={styles.itemContainer}>
                    <div>
                        <div>Название: {model.furnitureName}</div>
                        <div>Тип: {model.furnitureType}</div>
                        <div>Свойства: {model.Property}</div>
                        <div>Цена: {model.Price}</div>
                    </div>
                    <button
                        onClick={() => handleClick(model)}
                        className={styles.confirmBtn}
                    >
                        <img
                            className={styles.confirmImg}
                            src={confirm}
                        />
                    </button>
                </div>
            )}
        </div>
    )
}

export default SearchList