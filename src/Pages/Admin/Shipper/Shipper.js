import React, { useState } from 'react'
import { useCreateShipperMutation } from '../../../Apis/shipperApi';
import inputHelper from '../../../Helper/inputHelper';
import MainLoader from '../../../Components/common/MainLoader';
import { toast } from "react-toastify";
const ShipperData = {
    name: "",
    phone: 0,
   
}

const Shipper = () => {
    const [loading, setLoading] = useState(false);
    const [createShipper] = useCreateShipperMutation();
    const [shipperInput,setShipperInput] = useState(ShipperData);

    const handleShipperInput = (e) => {
        const temData = inputHelper(e, shipperInput);
        setShipperInput(temData);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response= await createShipper({
            Name: shipperInput.name,
            Phone: shipperInput.phone,
        });
        if (response?.data) {
            toast.success("Shipper created successfully", "success")
            setLoading(false);
            setShipperInput({});
        } else {
            toast.error("Shipper No created", "error")
            setLoading(false);
        }
      
    
    }

  return (
    <div className='container border mt-5 p-5 '>
   {loading && <MainLoader />}
    <h3 className=' px-2 text-success'>
        Add Shipper
    </h3>
    <form method="post" encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className='row mt-3'>
            <div className='col-md-4'>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Enter Name'
                    required
                    name="name"
                    onChange={handleShipperInput}
                />
            
                <input type="number"
                    className='form-control mt-3'
                    placeholder='Enter Phone'
                    name="phone"
                    onChange={handleShipperInput}
                />

                <div className='row'>
                    <div className='col-12'>
                        <button
                            type='submit'
                            className='btn btn-success form-control mt-3'
                        >
                            Create
                        </button>
                    </div>
                </div>

            </div>
          
        </div>
    </form>
</div>
  )
}

export default Shipper