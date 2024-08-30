import React, { useEffect, useState } from 'react'
import { SD_Status } from '../../Utility/SD'
import MainLoader from '../../Components/common/MainLoader'
import OrderList from './OrderList/OrderList'
import { useGetAllOrderQuery } from '../../Apis/orderApi'
import withAdminAuth from '../../HOC/withAdminAuth'
import { useSelector } from 'react-redux'
import inputHelper from '../../Helper/inputHelper'

const filterOptions = [
    "All",
    SD_Status.CONFIRMED,
    SD_Status.BEING_COOKED,
    SD_Status.READY_FOR_PICKUP,
    SD_Status.CANCELLED,
]


const AllOrders = () => {
    const userId = useSelector((state) => state.userAuthStore.id);
    const [filters, setFilters] = useState({ searchString: "", status: "" });
    const [totalRecords, setTotalRecords] = useState(0)
    const [pageOptions, setPageOptions] = useState({
        pageNumber: 1,
        pageSize: 5,
    })
    const [currentPageSize, setCurrentPageSize] = useState(pageOptions.pageSize)
    const [apiFilters, setApiFilters] = useState({
        searchString: "",
        status: "",
    })
    const { data, isLoading } = useGetAllOrderQuery({
        searchString: apiFilters.searchString,
        status: apiFilters.status,
        pageNumber: pageOptions.pageNumber,
        pageSize: pageOptions.pageSize,
    });
    
    const [orderData, setOrderData] = useState([]);

    const handleChange = (e) => {
        const tempValue = inputHelper(e, filters);
        setFilters(tempValue);
    }

    const handleFilters = () => {
        setApiFilters({
            searchString: filters.searchString,
            status: filters.status,
        })
    };

    useEffect(() => {
        if (data) {
            const { TotalRecords } = JSON.parse(data.totalRecords)
            setOrderData(data.apiResonse.result)
            setTotalRecords(TotalRecords);
        }
    }, [data])
    const getPageDetails = () => {
        const dataStartNumber = (pageOptions.pageNumber - 1) * pageOptions.pageSize + 1;
        const dataEndNumber = pageOptions.pageNumber * pageOptions.pageSize;

        return `
            ${dataStartNumber} - ${dataEndNumber < totalRecords ? dataEndNumber : totalRecords} of ${totalRecords}
        `
    }
    const handlePageOptionChange = (direction, pageSize) => {
        if (direction === "prev") {
            setPageOptions({ pageSize: 5, pageNumber: pageOptions.pageNumber - 1 })
        } else if (direction === "next") {
            setPageOptions({ pageSize: 5, pageNumber: pageOptions.pageNumber + 1 })
        } else if (direction === "change") {
            setPageOptions({
                pageSize: pageSize ? pageSize : 5,
                pageNumber: 1,
            })
        }
    }

    return (
        <>
            {isLoading && <MainLoader />}

            {!isLoading && (
                <>
                    <div className='d-flex align-items-center justify-content-between mx-5 mt-5'>
                        <h1 className='text-success'>All Orders</h1>
                        <div className='d-flex' style={{ width: "40%" }}>
                            <input type="text"
                                className='form-control mx-2'
                                placeholder='Search Name or mobile'
                                onChange={handleChange}
                                name="searchString"
                            />
                            <select className='form-select w-50 mx-2'
                                onChange={handleChange}
                                name="status"
                            >

                                {filterOptions.map((item, index) => (
                                    <option key={index} value={item === "All" ? "" : item}>{item} </option>
                                ))}

                            </select>
                            <button className='btn btn-outline-success' onClick={handleFilters}>Filters</button>
                        </div>
                    </div>
                    <OrderList isLoading={isLoading} orderData={orderData} />
                    <div className='d-flex mx-5 justify-content-end align-items-center'>
                        <div>Rows per page:</div>
                        <div>
                            <select className='form-select mx-2'
                                onChange={(e) => {
                                    handlePageOptionChange("change", Number(e.target.value));
                                    setCurrentPageSize(Number(e.target.value));
                                }}
                                style={{ width: "80px" }}
                                value={currentPageSize}
                            >
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                        </div>
                        <div className='mx-2'>{getPageDetails()}</div>
                        <button
                            onClick={() => handlePageOptionChange("prev")}
                            disabled={pageOptions.pageNumber === 1}
                            className='btn btn-outline-primary px-3 mx-2'>
                            <i className='bi bi-chevron-left'></i>
                        </button>
                        <button
                            onClick={() => handlePageOptionChange("next")}
                            disabled={pageOptions.pageNumber * pageOptions.pageSize >= totalRecords}
                            className='btn btn-outline-primary px-3 mx-2'>
                            <i className='bi bi-chevron-right'></i>
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default withAdminAuth(AllOrders)