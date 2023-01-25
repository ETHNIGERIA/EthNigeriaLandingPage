import image from "../constants/images"
export default function Events(){
    return(
        <section className="pt-32 bg-primary-100">
            <h1 className="text-center text-4xl font-bold hover:text-primary">Upcoming events</h1>
            <div className="p-5 rounded-lg">
                <div className="h-auto   w-full md:w-[60vw] mx-auto flex">
                    <div className="text-[#fff] w-full p-6 space-y-5 glassMorph">
                        <p className="text-sm">DATE: loading...</p>
                        <h1 className="text-5xl font-bold">Ethereum Nigeria Bootcamp</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae consectetur autem perferendis veritatis dolorum porro sequi aperiam vel saepe vero, incidunt impedit! Error aspernatur voluptate, non similique id eaque.</p>
                        <a href="/" className="block w-48 bg-[#fff] text-primary p-6 mx-auto rounded-md hover:bg-primary hover:text-[#fff]">Register to Attend</a>
                    </div>
                    <div className="w-full h-auto hidden md:block hover:opacity-[0.6]">
                        <img src={image.ethBtcmp} alt="" className=" w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl font-bold mt-24 hover:text-primary">Past  events</h1>
            <div className="p-5 rounded-lg">
                <div className="h-auto   w-full md:w-[60vw] mx-auto flex">
                    <div className="text-[#fff] w-full p-6 space-y-5 glassMorph">
                        <p className="text-sm">SAT, AUG 27, 2022, 10:30AM WEST</p>
                        <h1 className="text-5xl font-bold">Ethereum Merge Live Conference</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae consectetur autem perferendis veritatis dolorum porro sequi aperiam vel saepe vero, incidunt impedit! Error aspernatur voluptate, non similique id eaque.</p>
                        <a href="/" className="block w-48 bg-[#fff] text-primary p-6 mx-auto rounded-md hover:bg-primary hover:text-[#fff] opacity-10" disabled>Register to Attend</a>
                    </div>
                    <div className="w-full h-auto hidden md:block hover:opacity-[0.6]">
                        <img src={image.ethEvent} alt="" className=" w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}