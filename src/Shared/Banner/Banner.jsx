
const Banner = () => {
    return (
        <div className="mt-[95px]">
            <div className="hero min-h-[93vh] mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/vL5KM5r/Banner2.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">Welcome To <span className="text-[#F3A847]">Book House</span>  </h1>
                        <p className="mb-5">A Huge Collection of Books</p>
                        {/* <button className="btn btn-primary bg-[#f86306] font-bold border-none">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;