import products from './products.json';
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import uuid from 'react-uuid';

type Product = {
    name: string,
    description: string,
    image: string,
    flyer?: string
}

export const EquipmentPage = () => {
    const [ header, setHeader ] = useState<string>('A/C Machines')
    const [ selectedProducts, setSelectedProducts ] = useState<Product[]>(products[0].equipment);

    const changeSelection: MouseEventHandler<HTMLHeadingElement> = (e) => {
        e.preventDefault();
        let newSelection = products.filter((p) => p.type === e.currentTarget.innerHTML);
        setHeader(newSelection[0].type);
        setSelectedProducts(newSelection[0].equipment);
    }

    const applyFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        let newSelection = products.filter((p) => p.type === e.target.value);
        // console.log(e.target.value)
        setHeader(newSelection[0].type);
        setSelectedProducts(newSelection[0].equipment);
    };

    return (
        <main id={'equipment'}>
            <aside>
                <div className={'call-box'}>
                    <p>
                        Give us a call to inquire about pricing, financing options, or to place an order.
                    </p>
                    <p>
                        <a href="tel:4153098160">(415) 309-8160</a>
                    </p>
                </div>

                <div className={'selectors'}>
                    {products.map((e, index) => (
                        <h2 className={'link'} key={uuid()} onClick={changeSelection}>{e.type}</h2>
                    ))}
                </div>

                <div className={'dropdown'}>
                    <FontAwesomeIcon className={'faChevronDown'} icon={faChevronDown}/>
                    <select onChange={applyFilter}>
                        <option>A/C Machines</option>
                        <option>Tools</option>
                        <option>Accessories</option>
                        <option>Consumables</option>
                    </select>
                </div>
            </aside>

            <div>
                <div>
                    <h1>{header}</h1>
                </div>
                <div className={'equipment-list'}>
                    {selectedProducts.map((p: Product) => (
                        <div className={'product-card'} key={uuid()}>
                            <img src={p.image} alt={p.name} />
                            <div>
                                <h3>{p.name}</h3>
                                <p>{p.description}</p>
                                {p.flyer && <a href={p.flyer} download>Download flyer</a>}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}