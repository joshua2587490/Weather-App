import React, { Fragment } from 'react';

import Error from '../Error';
import Forecast from '../Forecast';
import Form from '../Form';
import Header from '../Header';
import Loader from '../Loader';

import useForcast from '../../hooks/useForcast'
import styles from './Page.module.css';


const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForcast();

    const onSubmit = (value) => {
        submitRequest(value);
    }

    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>

    );
};

export default Page;
