import React from 'react'
import styles from './SearchList.module.css'
import confirm from '../../../assets/check-mark-button.webp'
import { useDispatch } from 'react-redux'
import { addModelToBasket } from '../../../features/furniture/basketSlice'

interface SearchList {
    id: number;
    furnitureName: string;
    furnitureType: string;
    Property: string;
    Price: number;
    count: number;
    imageUrl: string;
}

interface SearchListProps {
    results: SearchList[];
    isLoading: boolean;
    isError: boolean;
}
const SearchList: React.FC<SearchListProps> = ({ results, isLoading, isError }) => {
    const dispatch = useDispatch()

    const handleClick = (model: SearchList) => {
        dispatch(addModelToBasket(model))
    }
    if (isLoading) return <div>Загрузка</div>
    if (isError) return <div>Ошибка при загрузке данных</div>
    if(results.length === 0) return <div>Нет результатов</div>

    return (
        <div className={styles.listContainer}>
            {results.map((model) => 
                <div
                    key={model.id}
                    className={styles.itemContainer}
                    onClick={() => handleClick(model)}
                >
                    <div>
                        <span className={styles.property}>Название: {model.furnitureName}</span>
                        <span className={styles.property}>Тип: {model.furnitureType}</span>
                        <span className={styles.property}>Свойства: {model.Property}</span>
                        <span className={styles.property}>Цена: {model.Price}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchList