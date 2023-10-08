const Home = () => {

    return (

        <div className="bg-white">

            <div className="bg-white p-3 w-full"></div>

            <div className="bg-gradient-to-r from-amber-400 to-amber-600 flex flex-col space-y-2 justify-center items-center h-72">
                
                <div className="p-1 w-40 rounded-full border-4 border-white">

                    <img className="rounded-full w-40" src="https://cdn.beacons.ai/user_content/OqItlDYD19gYOg4u6L8mhN9SDaP2/profile_yani69.png?q=1696284043.5340288" alt="profile image" />
    
                </div>
                
                <h1 className="font-bold text-white text-2xl">Yanira</h1>

            </div>

            <div className="flex flex-col space-y-2 rounded-xl drop-shadow-lg w-3/4 md:w-1/2 mx-auto bg-white p-4 -translate-y-8">

                <a className="p-4 text-center text-amber-500 hover:text-amber-800 rounded-xl border-2 border-amber-400 hover:border-amber-600" href="https://onlyfans.com/yadpa" target="_blank">
                    Onlyfans
                </a>
                <a className="p-4 text-center text-amber-500 hover:text-amber-800 rounded-xl border-2 border-amber-400 hover:border-amber-600" href="https://www.instagram.com/tp_fitne/" target="_blank">
                    <i className="mr-2 uil uil-instagram"></i>
                    Instagram
                </a>
                <a className="p-4 text-center text-amber-500 hover:text-amber-800 rounded-xl border-2 border-amber-400 hover:border-amber-600" href="https://t.me/laflacatineo" target="_blank">
                    <i className="mr-2 uil uil-telegram-alt"></i>
                    +18 Telegram
                </a>

            </div>
            
        </div>
        
    );

}


export default Home;