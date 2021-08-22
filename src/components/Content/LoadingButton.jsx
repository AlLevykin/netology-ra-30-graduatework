import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';

const LoadingButton = () => {

    const { hasMoreData, loading, error } = useSelector(
        (state) => ({ hasMoreData: state.catalog.hasMoreData, ...state.loading.models.catalog })
    )

    useEffect(() => {
        if (error) {
            store.dispatch.log.addMessage({
                type: 'danger',
                caption: 'Каталог',
                text: `Во время загрузки данных произошла ошибка (${error}). Попробуйте обновить страницу позже.`
            });
        }
    }, [error]);    

    const onClickHandler = () => {
        store.dispatch.catalog.getItems();
    }

    return (
        <>            
            {
                hasMoreData &&
                <div className="text-center my-3">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onClickHandler}
                    >
                        {
                            loading &&
                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                        }
                        Загрузить ещё
                    </button>
                </div>
            }
        </>
    );
}

export default LoadingButton;