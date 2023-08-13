"use client";

import Loading from '../Loading/Loading';
import styles from './AIContainer.module.scss';
import { useEffect, useState } from 'react';

export default function() {
  const [output, setOutput] = useState('');
  const [fullText, setFullText] = useState('');
  const [loading, setLoading] = useState(false);
  const [typed, setTyped] = useState(true);

  useEffect(() => {
    typeText(0);
  }, [fullText]);


  const handleGenerate = async () => {
    try {
      setOutput('');
      setLoading(true);
      const response = await fetch("/api/ai");

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setLoading(false);
      setTyped(false);
      setFullText(data.result);
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  };

  const typeText = (currentIndex) => {
    if (currentIndex <= fullText.length) {
      setTimeout(() => {
        setOutput(fullText.substring(0, currentIndex));
        typeText(currentIndex + 1);
      }, Math.floor(Math.random() * 100));
    } else {
      setTyped(true);
    }
  };

  return (
    <div className={styles.outer}>
      <h1 className={styles.title}>For when you can't reach me</h1>
      <button className={`${styles.button} ${!typed || loading ? styles.disabled : ''}`} onClick={handleGenerate}>Click here!</button>
      <p className={styles.output}>
        {loading ? <Loading /> : ''}
        {output}
      </p>
    </div>
  );
}