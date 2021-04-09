import Head from 'next/head'
import styles from '../styles/Chessboard.module.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Home() {
    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;

            if (number % 2 === 0) {
                board.push(
                    <div className={styles.blackTile}>[{horizontalAxis[i]}{verticalAxis[j]}]</div>
                );
            } else {
                board.push(
                    <div className={styles.whiteTile}>[{horizontalAxis[i]}{verticalAxis[j]}]</div>
                );
            }
        }
    }
    return (
        <div className={styles.chessboard}>{board}</div>
    );
}
