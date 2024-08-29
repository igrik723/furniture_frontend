import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from "./Input.module.css"
import clear from '../../../assets/крестик.png';

interface InputProps {
    onSearchChange: (searchTerm: string) => void;
}

const Input: React.FC<InputProps> = ({ onSearchChange}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [debouncedSearchTerm, setDebounceSearchTerm] = useState(searchTerm)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearchTerm(searchTerm)
        }, 300);

        return () => {
            clearTimeout(handler)
        };
    }, [searchTerm]);

    useEffect(() => {
        onSearchChange(debouncedSearchTerm);
    }, [debouncedSearchTerm, onSearchChange]);

  return (
      <div className={styles.InputContainer}>
          <input
              className={styles.Input}
              placeholder="поиск"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
              onClick={() => setSearchTerm('')}
          >
              <img src={clear} className={styles.searchIcon} alt="Search" />
          </button>
      </div>
  )
}

export default Input

