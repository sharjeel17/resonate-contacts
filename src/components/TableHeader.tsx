import useWindowDimensions from "../hooks/useWindowDimensions";

const TableHeader = () => {
    const { width } = useWindowDimensions();
    const justify = width > 1023 ? "justify-start" : "justify-around";
    
    return (
        <div className={`w-full h-8 bg-[#c2c1c1] rounded-md flex ${justify} font-semibold`}>
            <div className='w-1/6 self-center'>
                <h3 className="lg:ml-3">Name</h3>
            </div>
            <div className='w-1/5 self-center'>
                <h3 className="lg:ml-3">Username</h3>
            </div>
            <div className='w-1/4 self-center'>
                <h3>Phone</h3>
            </div>
            { width > 1023 && (
                <div className='w-1/4 self-center'>
                <h3>Email</h3>
            </div>
            )}
        </div>
    )
}

export default TableHeader;