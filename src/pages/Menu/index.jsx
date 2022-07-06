import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Tabs } from '../../components/Tabs';
import { fetchProducts, selectAllProducts } from '../../stores/menu/productsSlice';

const Menu = () => {
    const dispatch = useDispatch();
    const productStatus = useSelector(state => state.products.status);
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, productStatus]);

    return (
        <Tabs list={['breakfast', 'brunch']} />
    )
}

export default Menu;