### Paul Vega

## Ejemplo 

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```
<ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    // maxCount: 10
                }}
            >
                {
                    ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
                        <>
                        <ProductImage/>
                        <ProductTitle />
                        <ProductButtons/>
                        </>
                    )
                }
            </ProductCard>
```