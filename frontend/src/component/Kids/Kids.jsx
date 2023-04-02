import React, { useEffect, useState } from 'react'
import "./Kids.css"
import Card from './Card'
// import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getReduxData } from '../../redux/action'

const Kids = () => {
    const [search, setSearch] = useState("")
    const [box, setBox] = useState(null)
    const dispatch = useDispatch()
    const store = useSelector(store => store.storeData)

    useEffect(() => {
        if (box) {
            dispatch(getReduxData(`kid${box}`))
        }
    }, [box])
    const handleButton = () => {
        dispatch(getReduxData(`kid${search}`))
        setSearch("")
    }
    useEffect(() => {
        dispatch(getReduxData("kids"))
    }, [])

    return (
        <div className='kids-cont'>
            <div className="kids-wrapper">
                <div className='kids-left'>
                    {/* <div>
                        Refined By
                    </div> */}
                    <div className="filter-div">
                        <div className='filter-category'>
                            <li>- Gender</li>
                            <ul>
                                <li>
                                    <input onChange={(e) => setBox("girl")} type="checkbox" />
                                    <label htmlFor="#">Girls</label>
                                </li>
                                <li>
                                    <input onChange={(e) => setBox("boy")} type="checkbox" />
                                    <label htmlFor="#">Boys</label>
                                </li>
                                <li>
                                    <input onChange={(e) => setBox("infant")} type="checkbox" />
                                    <label htmlFor="#">Infants</label>
                                </li>

                            </ul>
                        </div>
                        {/* <hr /> */}
                        <div className='filter-category'>
                            <li>- Category</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">T-Shirt</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Dresses</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Sweater</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Track Pants</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Trousers & Pants</label>
                                </li>
                            </ul>

                        </div>
                        {/* <hr /> */}

                        <div className='filter-category'>
                            <li>- Price</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 500</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 500-1000</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 1001-1500</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 1501-2000</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Below Rs 2001-2500</label>
                                </li>
                            </ul>

                        </div>

                        <div className='filter-category'>
                            <li>- Brands</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">3pin</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">5elements</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">612 League</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">A Little fable</label>
                                </li>

                            </ul>

                        </div>

                        {/* <hr /> */}

                        <div className='filter-category'>
                            <li>- Occation</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Active</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">Casual</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">CASUAL</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">EVENING</label>
                                </li>
                            </ul>

                        </div>

                        {/* <hr /> */}

                        <div className='filter-category'>
                            <li>- Discount</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">0-20%</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">21%-30%</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">31%-40%</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">41%-50%</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">51%-80%</label>
                                </li>
                            </ul>

                        </div>

                        {/* <hr /> */}

                        <div className='filter-category'>
                            <li>- Size & Fit</li>
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">5-6Y</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">7-8Y</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">9-10Y</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">3-4Y</label>
                                </li>

                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="#">4-5Y</label>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className='kids-right'>

                    <div className='right-head'>
                        <div>Starting at Rs 129</div>
                        <div>
                            <ul>
                                <li>{store.length}0 Items Found</li>
                            </ul>
                            <ul>
                                <input placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
                                <button onClick={handleButton}>Search</button>
                            </ul>
                            <ul>
                                <label htmlFor="">Sort By </label>
                                <select name="" id="">
                                    <option value="">Relevent</option>
                                    <option value="">Price (Lowest First)</option>
                                    <option value="">Price (Highest First)</option>
                                    <option value="">Discount</option>
                                </select>
                            </ul>
                        </div>

                    </div>
                    <div className='kids-content-wrapper'>
                        <div className='kids-content'>
                            {store?.map((item) => <Card {...item} />)}



                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Kids