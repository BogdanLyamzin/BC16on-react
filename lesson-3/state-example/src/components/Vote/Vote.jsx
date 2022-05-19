import { Component } from "react";

import styles from "./vote.module.css";

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

    render() {
        const { democrats, republicans } = this.state;
        const { addVote } = this;

        return (
            <div className={styles.container}>
                <div>
                    <p><button onClick={()=> addVote("democrats")}>За демократов!</button></p>
                    <p><button onClick={()=> addVote("republicans")}>За республиканцев!</button></p>
                </div>
                <div>
                    <p>Отданно голосов за демократов: {democrats}</p>
                    <p>Отданно голосов за республиканцев: {republicans}</p>
                </div>
            </div>
        )
    }
}

export default Vote;