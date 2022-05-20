import { Component } from "react";

import Notificaton from "../Notification";

import VoteSection from "./VoteSection";
import VoteOptions from "./VoteOptions";
import Statistics from "./Statistics";

import styles from "./vote.module.css";

const options = ["democrats", "republicans"];

class Vote extends Component {
    state = {
        democrats: 0,
        republicans: 0
    }

    addVote = (propertyName) => {
        this.setState(prevState => {
            return {
                [propertyName]: prevState[propertyName] + 1
            }
        })
     }

     countTotalVote() {
         const {democrats, republicans} = this.state;
         return democrats + republicans;
     }

    render() {
        const { democrats, republicans } = this.state;
        const { addVote } = this;

        const total = this.countTotalVote();
    
        return (
            <div className={styles.container}>
                <VoteSection title="Please leave vote">
                    <VoteOptions options={options} onLeaveVote={addVote} />
                </VoteSection>
                <VoteSection title="Statistics">
                    {/* {total > 0 ? <Statistics democrats={democrats} republicans={republicans} total={total} /> : <Notificaton message="No vote given" />} */}
                    {!total && <Notificaton message="No vote given" />}
                    {total > 0 && <Statistics democrats={democrats} republicans={republicans} total={total} /> }
                </VoteSection>
            </div>
        )
    }
}

export default Vote;