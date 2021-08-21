import { useSelector } from 'react-redux';
import store from '../../store';

const LoadingButton = () => {

    const { hasMoreData, loading, error } = useSelector(
        (state) => ({ hasMoreData: state.catalog.hasMoreData, ...state.loading.models.catalog })
    )

    const onClickHandler = () => {
        store.dispatch.catalog.getItems();
    }

    return (
        <>
            {
                error &&
                <div className="row justify-content-center">
                    <div className="alert alert-danger" role="alert">
                        {`Во время загрузки данных произошла ошибка (${error}). Повторите загрузку позже.`}
                    </div>
                </div>
            }            
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
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                        }
                        Загрузить ещё
                    </button>
                </div>
            }
        </>
    );
}

export default LoadingButton;