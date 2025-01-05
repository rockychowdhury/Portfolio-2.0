
const Navbar = () => {
    return (
        <div className="py-8 flex items-center justify-between">
            <div className="flex gap-8">
                <div className="flex border rounded-full w-fit items-center drop-shadow-md ">
                    <h2 className="font-medium text-lg px-4">rocky20809@gmail.com</h2>
                    <button className="bg-marble  px-6 py-2 rounded-full font-semibold" >Copy</button>
                </div>
                <div className="">
                    <button className="bg-marble px-6 py-2 rounded-full font-semibold" >Resume</button>
                </div>
            </div>
            <div>
                <h1>LinkedIn / GitHub / LeetCode</h1>
            </div>
        </div>
    );
};

export default Navbar;