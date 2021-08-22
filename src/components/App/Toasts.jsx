import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';

const Toasts = () => {

    useEffect(() => {
        setInterval(() => store.dispatch.log.refresh(), 1000);
    }, []);

    const log = useSelector(
        state => state.log
    )

    return (

        <div className="toast-container position-fixed p-3 bottom-0 end-0">
            {
                log.map(item =>
                    <div key={item.time} className={`toast show text-white bg-${item.type} border border-${item.type}`} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">{item.caption}</strong>
                            <small>{Math.floor((Date.now() - item.time) / 1000) + 1} сек. назад</small>                            
                        </div>
                        <div className="toast-body">
                            {item.text}
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default Toasts;