import {useParams} from 'react-router-dom';
import { hashCode,fetchStatus} from '../bin/HashAndGenerate';


function BaggageClaim(){
    const Barcode: string = JSON.stringify(useParams());
    console.log(Barcode);
    const Hash: any = hashCode(Barcode);
    const Status: number = fetchStatus(Hash);
    const TimeNumber: number[] = 
    [25,20,15,10,5,0,0];
    const ReadyTime: Date = new Date()
    ReadyTime.setMinutes(ReadyTime.getMinutes() + TimeNumber[Status])
    const TimeNow: Date = new Date();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="TOPBAR w-full flex flex-row justify-between bg-[#0e8c25]">
                <h2 className="mt-4 ml-3 text-center mb-8 text-2xl text-left text-white font-semibold">Baggage Tracker</h2>
                <div className = "SCANTIME flex flex-col">
                    <h2 className="mt-1 mr-3 text-center text-2xl text-left text-white font-semibold">{String(TimeNow.getHours()).padStart(2, '0')}:{String(TimeNow.getMinutes()).padStart(2, '0')} GMT+8   </h2>
                    <h2 className="mr-3 text-center text-xl text-left text-white font-semibold">Scanned Time </h2>
                </div>
            </div>
            <div className = "DISCOURAGE_MESSAGE mt-3 justify-center text-center">
                <h2 className="ml-2 mr-2 text-2xl text-black font-semibold ">Thank you for confirming your baggage claim</h2>
                <h2 className="ml-2 mr-2 mb-2 text-xk text-black font-semibold text-wrap">You have been entered into our lucky draws</h2>
        </div>  
        </div>
    )
}

export default BaggageClaim

