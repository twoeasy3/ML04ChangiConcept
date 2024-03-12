import {useParams} from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import { hashCode, fetchName,fetchPlane,fetchStatus,fetchBelt, fetchAirport} from '../bin/HashAndGenerate';
import { DiscourageMessage, EncourageMessage, HurryMessage } from '../components/InfluenceMessage';


function Result(){
    const Barcode: string = JSON.stringify(useParams());
    console.log(Barcode);
    const Hash: any = hashCode(Barcode);
    const Name: string = fetchName(Hash);
    const Plane: string = fetchPlane(Hash);
    const Status: number = fetchStatus(Hash);
    const Belt:number = fetchBelt(Hash);    
    const Airport:string = fetchAirport(Hash);
    const StatusTexts: string[] = 
    ["On Plane", "Deplaned", "Sorting", "Security", "Final Mile", "Claim","Pick up :)"];
    const TimeRemaining: string[] = 
    ['25 minutes','20 minutes','15 minutes','10 minutes','5 minutes',"Ready!","Ready!"];
    const TimeNumber: number[] = 
    [25,20,15,10,5,0,0];
    const ReadyTime: Date = new Date()
    ReadyTime.setMinutes(ReadyTime.getMinutes() + TimeNumber[Status])
    const TimeNow: Date = new Date();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="TOPBAR w-full flex flex-col bg-[#0e8c25]">
                <h2 className="mt-4 text-center mb-8 text-2xl text-white font-semibold">Baggage Tracker</h2>
            </div>
            <div className="TICKETINFO mt-5 w-fit flex flex-col border-4 border-black rounded-3xl ">
                <h2 className="ml-2 mr-2 text-m text-black font-semibold">Baggage Info</h2>
                <h2 className="ml-2 mr-2 text-m text-black">{Name}</h2>
                <h2 className="ml-2 mr-2 text-m text-black">{Plane}</h2>
                <h2 className="ml-2 mr-2 text-m text-black">{Airport} to SIN</h2>
                <h2 className="ml-2 mr-2 text-m text-black">Checked in 1x baggage</h2>

            </div>
            
            <div className="w-4/5 mt-8 border-2 border-gray-300 rounded-3xl">
                <div className = "TEXTINFO flex flex-row justify-between">
                    <div className = "BAGGAGESTATUS">
                        <h2 className="ml-2 mr-2 mb-2 text-m text-black">Baggage Status</h2>
                        <h2 className="ml-2 mr-2 text-xl text-black font-semibold">{StatusTexts[Status]}</h2>
                        <h2 className="ml-2 mr-2 mb-2 text-sm text-gray-300 font-semibold">Next: {StatusTexts[Status+1]}</h2>
                    </div>    
                    <div className = "ETA justify-end">
                        <h2 className="ml-2 mr-2 text-m text-black ">ETA:</h2>
                        <h2 className="ml-2 mr-2 text-xl text-black font-semibold">{TimeRemaining[Status]}  
                        {ReadyTime <= TimeNow ? ` (Now)` :
                       ` (${String(ReadyTime.getHours()).padStart(2, '0')}:${String(ReadyTime.getMinutes()).padStart(2, '0')})`}</h2>
                        <h2 className="ml-2 mr-2 mb-2 text-sm text-black font-semibold">at Belt {Belt}</h2>
                    </div>
                </div>     
                <ProgressBar currentStep={Status} />
            </div>
            {Status <= 3 ? <DiscourageMessage/>: Status == 4 ? <EncourageMessage/> : <HurryMessage/>}
        </div>
    )
}

export default Result

