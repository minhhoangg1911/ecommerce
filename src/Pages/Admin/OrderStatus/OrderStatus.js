import React, { useState } from 'react'
import { Flex, Progress } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Product from '../Product/Product';
import { useGetOrderStatusQuery } from '../../../Apis/orderStatusApi';
import './style.css'
import { useGetOrderProductQuery } from '../../../Apis/orderProductApi';
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);



const rangePresets = [
    {
        label: 'Last 7 Days',
        value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
        label: 'Last 14 Days',
        value: [dayjs().add(-14, 'd'), dayjs()],
    },
    {
        label: 'Last 30 Days',
        value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
        label: 'Last 90 Days',
        value: [dayjs().add(-90, 'd'), dayjs()],
    },
];



const OrderStatus = () => {

    const [date, setDate] = useState({ startDate: '', endDate: '' })
    const { data } = useGetOrderStatusQuery({
        startDate: date.startDate,
        endDate: date.endDate,
    });
    const {data: orderProduct} = useGetOrderProductQuery({
        startDate: date.startDate,
        endDate: date.endDate,
    })


    return (
        <div className='revenue'>
            <div className='date text-center'>
                <Space direction="vertical" size={12}>

                    <RangePicker
                        presets={[
                            {
                                label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
                                value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
                            },
                            ...rangePresets,
                        ]}
                        showTime
                        format="YYYY/MM/DD HH:mm:ss"
                        onChange={(value) => {
                            console.log(value)
                            if (value !== null) {
                                const newValue = value.map((item) => {
                                    return item.format()
                                })
                                
                                setDate({
                                    ...date,
                                    startDate: newValue[0],
                                    endDate: newValue[1],
                                })

                            }


                        }}

                    />
                </Space>

            </div>
            <div className='d-flex row mt-4 mb-4 container'>
                <div className='card p-1 col-sm-4 col-12 border-0 p-3' style={{
                    boxShadow: '0px 3px 14px rgba(226, 225, 225, 0.75)',
                    overflow:'hidden'
                }}>
                    <Flex gap="small" vertical >
                        <div className='fs-4 fw-bold'>Average Rate (%)</div>
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='fs-6 fw-bold'>Referral Program Budget</div>
                            <div className=' fs-6 fw-bold'>27%</div>
                        </div>
                        <Progress
                            percent={30}
                            percentPosition={{
                                align: 'center',
                                type: 'inner',
                            }}
                            size={[400, 20]}
                            strokeColor="#001342"
                        />
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='fs-6 fw-bold'>Referral Rate by Campaign</div>
                            <div className=' fs-6 fw-bold'>27%</div>
                        </div>
                        <Progress
                            percent={100}
                            percentPosition={{
                                align: 'center',
                                type: 'inner',
                            }}
                            size={[400, 20]}
                        />
                    </Flex>
                </div>
                <div className='d-sm-flex gap-5 col-8'>
                    {data?.$values.map((item, index) => {
                        return (
                            <div className="card col-sm-2 col-12 p-3 h-100 border-0" key={index} style={{
                                boxShadow: '0px 3px 14px rgba(226, 225, 225, 0.75)'
                            }}>
                                <div className="d-flex justify-content-between card-item">
                                    <div className={`icon p-3 bg-danger text-white rounded ${item.status}`}>
                                        <i className="bi bi-calendar-check-fill"></i>
                                    </div>
                                    <i className={`bi bi-three-dots-vertical`}></i>
                                </div>
                                <div>
                                    <h6 className='fw-bold mt-2'>{item.status}</h6>
                                </div>
                                <div className='mt-2'>
                                    <span className='fs-6 fw-bold' >{item.orderCount}</span>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
            <Product orderProduct={orderProduct} />

        </div>
    )
}

export default OrderStatus