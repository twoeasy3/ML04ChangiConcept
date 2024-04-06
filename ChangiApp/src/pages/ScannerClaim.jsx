import {Html5QrcodePlugin} from "../components/Html5QrcodeScannerPlugin";
import { useNavigate  } from 'react-router-dom';

const ScannerClaim = (props) => {
  const navigate = useNavigate();

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText, decodedResult);
    // Navigate to "/Home" route
    navigate(`/baggageClaim`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
            <div className="TOPBAR w-full flex flex-col bg-[#0e8c25]">
                <h2 className="mt-4 text-center mb-8 text-2xl text-white font-semibold">Baggage Tracker</h2>
            </div>
            <h2 className="mt-4 text-center mb-8 text-2xl text-black font-semibold">Scan your baggage barcode:</h2>
          <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={onNewScanResult}
          />
    </div>

  );
};

export default ScannerClaim;