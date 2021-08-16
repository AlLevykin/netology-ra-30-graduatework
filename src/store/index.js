import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import models from '../models';

const store = init(
    {
        models,
        plugins: [
            createLoadingPlugin({ type: 'full' })
        ]
    }
);

export default store;