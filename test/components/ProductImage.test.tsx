import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components'
import { product2 } from '../data/product';

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizado', () => {
        const wrapper = renderer.create(
            <ProductImage img='http://hola.jpg' className='custom-class' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrarel componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})