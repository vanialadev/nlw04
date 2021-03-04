import styles from "../styles/components/Countdown.module.css"
import {useEffect, useState} from "react";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const [hasFineshed, setHasFineshed] = useState(false);

  function startCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(true);
    setTime(25 * 60);
  }

  function resetCountdown() {
    setIsActive(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFineshed(true);
      setIsActive(false);
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFineshed ? (
        <button
          disabled
          type="button"
          className={styles.countdownButton}
          onClick={resetCountdown}>
          Ciclo encerraod
        </button>
      ) : (
        <>
          {isActive ? (
              <button type="button"
                      className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                      onClick={resetCountdown}>
                Abandonar ciclo
              </button>
            ) :
            (
              <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                Iniciar um ciclo
              </button>
            )}</>
      )}


    </div>
  )
}
