import './History.scss';

function History(props) {
    const { history, displayHistory } = props;
    // console.log(history)

    return (
        <>
            <ul className='history-container'>
                {
                    history.length ?
                        history.map((record, idx) => (
                            <li key={`history-${idx}`}>
                                <button onClick={() => displayHistory(idx)}>
                                {record.method && record.method.toUpperCase()}: {record.url}
                                </button>
                            </li>
                        ))
                        : ''
                }
            </ul>
        </>
    )
}


export default History;