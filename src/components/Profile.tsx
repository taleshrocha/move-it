import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){

    const { level } = useContext( ChallengesContext );
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/taleshrocha.png" alt="" />
            <div>
                <strong>Tales Rocha</strong>
                <p> <img src="icons/level-up.svg" alt="Level" /> Level { level }</p>
            </div>
        </div>
    );
}
