import {useParams} from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import { hashCode, fetchName,fetchPlane,fetchStatus } from '../bin/HashAndGenerate';



function Result(){
    const Barcode: string = JSON.stringify(useParams());
    console.log(Barcode);
    const Hash: any = hashCode(Barcode);
    const Name: string = fetchName(Hash);
    const Plane: string = fetchPlane(Hash);
    const Status: number = fetchStatus(Hash);


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="TOPBAR w-full flex flex-col bg-[#0e8c25]">
                <h2 className="mt-4 text-center mb-8 text-2xl text-white font-semibold">Baggage Tracker</h2>
            </div>
            <div className="TICKETINFO mt-5 w-fit flex flex-col border-4 border-black rounded-3xl ">
                <h2 className="ml-2 mr-2 text-m text-black font-semibold">Baggage Info</h2>
                <h2 className="ml-2 mr-2 text-m text-black">{Name}</h2>
                <h2 className="ml-2 mr-2 text-m text-black">{Plane}</h2>
                <h2 className="ml-2 mr-2 text-m text-black">LON to JAC</h2>
                <h2 className="ml-2 mr-2 text-m text-black">Scheduled to land 1400</h2>
                <h2 className="ml-2 mr-2 text-m text-black">Checked in 1x baggage</h2>

            </div>
            
            <div className="w-4/5 mt-8 border-2 border-gray-300 rounded-3xl">
                <div className = "TEXTINFO flex flex-row justify-between">
                    <div className = "BAGGAGESTATUS">
                        <h2 className="ml-2 mr-2 mb-2 text-m text-black">Baggage Status</h2>
                        <h2 className="ml-2 mr-2 text-xl text-black font-semibold">Deplaned</h2>
                        <h2 className="ml-2 mr-2 mb-2 text-sm text-gray-300 font-semibold">Next: Sorting</h2>
                    </div>    
                    <div className = "ETA justify-end">
                        <h2 className="ml-2 mr-2 text-m text-black ">ETA:</h2>
                        <h2 className="ml-2 mr-2 text-xl text-black font-semibold">15 minutes</h2>
                        <h2 className="ml-2 mr-2 mb-2 text-sm text-black font-semibold">at Belt 57</h2>
                    </div>
                </div>     
                <ProgressBar currentStep={Status} />
            </div>

        </div>
    )
}

export default Result

