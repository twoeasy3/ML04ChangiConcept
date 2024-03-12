import { useNavigate } from 'react-router-dom';

function UserProfileTemplate(){
    const navigate = useNavigate();

    const handleLogOutClick = () => {
        navigate('/');
    };
    
    const profilDescription = "It's all about the BOOM! Who's ready for story time with Adam Cole Bay Bay? Let me tell you why I betrayed MJF at Worlds' End... Lorem Ipsum dolor sit amet, test test test";
    const mostPlayedGame = "Counter Strike 2"

    return (
        <div className="bg-hero bg-cover bg-center  min-h-screen">
            <div className="flex">
                <div className = "flex-1 flex-col justify-center">
                    <div className = "flex TOPBAR">
                        <input className="max-h-14 min-w-3/4 mt-5 ml-5 mb-8 px-4 py-2 rounded-3xl text-grey bg-white focus: outline-none" placeholder='Search'/>
                        <h1 className="mb-2 mt-5 text-4xl ">⚙️</h1>                    
                        <div className="flex-1 flex-row items-center ">
                            <h1 className="mt-5 mb-2 text-4xl text-white text-center font-extrabold ">Profile</h1>
                        </div>
                    </div>
                    <div className="PROFILE_PARENT_CONTAINER flex flex-col justify-center items-center">
                        <div className="PROFILE_ROW flex justify-center items-center">   
                            <img className="object-contain rounded-full w-40 h-40 border-4 border-[#2d44f5be]" src="../public/profile.jpg"></img>
                            <div className="PROFILE_USERNAME_BOX ml-5 flex justify-center items-center rounded-2xl p-2 bg-[#2d44f5be]">
                                <h2 className="ml-5 mt-5 mb-5 text-4xl text-[#f7a72f] text-center font-extrabold ">Username: </h2> 
                                <h2 className="mr-5 mt-5 mb-5 text-4xl pl-4 text-white text-center font-extrabold ">A_Cole_BayBay</h2> 
                            </div>
                        </div>
                        <div className="PROFILE_INFO w-4/5 mt-5 flex flex-col justify-center items-center rounded-2xl p-4 text-xl bg-[#2d44f5be]"> 
                            <div className = "PROFILE_ABOUTME flex justify-center items-center">
                                <h5 className="mr-5 mt-5 mb-5  text-white text-center font-extrabold text-wrap ">
                                    <span className= "mr-5 mt-5 mb-5  text-[#f7a72f] text-center font-extrabold ">About Me:</span>
                                    {profilDescription}</h5>
                            </div>
                            <div className = "PROFILE_MOSTPLAYED flex justify-center items-center">
                                <h5 className="mr-5 mt-5 mb-5  text-white text-center font-extrabold text-wrap ">
                                    <span className= "mr-5 mt-5 mb-5  text-[#f7a72f] text-center font-extrabold ">Most Played:</span>
                                    {mostPlayedGame}</h5>
                            </div>
                    </div>
                </div>

            </div>                       
                <div className="RIGHTSIDEBAR h-screen w-1/5 bg-[#48385e] flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-center items-center">
                        <button className="mt-6 w-full bg-[#2D44F5] hover:bg-[#2d44f5be] text-white font-bold py-2 px-8 rounded-3xl">Create Listing</button>
                        <button className="mt-6 w-full bg-[#2D44F5] hover:bg-[#2d44f5be] text-white font-bold py-2 px-8 rounded-3xl">View My Listings</button>
                        <button className="mt-6 w-full bg-[#2D44F5] hover:bg-[#2d44f5be] text-white font-bold py-2 px-8 rounded-3xl">Requests</button>
                        <button className="mt-6 w-full bg-[#2D44F5] hover:bg-[#2d44f5be] text-white font-bold py-2 px-8 rounded-3xl"
                                onClick={() => {navigate('/EditProfile')}}>Edit Profile</button> 
                                              
                    </div>  
                    <div className="LOGOUT flex-col justify-center items-center">
                        <button className="w-full mb-10 bg-[#FF0000] hover:bg-[#FF0000] text-white font-bold py-2 px-8 rounded-3xl"
                                onClick={handleLogOutClick}>Log Out</button>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default UserProfileTemplate

