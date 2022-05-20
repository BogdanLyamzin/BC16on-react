import styles from "./vote-options.module.css";

const VoteOptions = ({options, onLeaveVote}) => {
    const elements = options.map((option, index) => (
        <p key={index}><button className={styles.btn} onClick={() => onLeaveVote(option)}>{option}</button></p>
    ));

    return (
        <div>
            {elements}
        </div>
    )
}

export default VoteOptions;