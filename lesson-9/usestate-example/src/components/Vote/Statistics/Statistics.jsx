const Statistics = ({democrats, republicans, total}) => {
    return (
        <div>
            <p>Отданно голосов за демократов: {democrats}</p>
            <p>Отданно голосов за республиканцев: {republicans}</p>
            <p>Всего отданно голосов: {total}</p>
        </div>
    )
};

export default Statistics;