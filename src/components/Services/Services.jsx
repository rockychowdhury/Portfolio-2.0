import { Database,PanelsTopLeft,Code } from 'lucide-react';
const Services = () => {
    return (
        <div>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-action"></span>
                <span className="shrink-0 px-6 bg-marble py-2 text-black rounded-full font-medium text-lg -rotate-12">Services</span>
                <span className="h-px flex-1 bg-action"></span>
            </span>
            <div>
                <div className="py-12 ">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Full Stack Developer */}
                            <div className="bg-marble shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
                                <div className="flex justify-center items-center bg-blue-100 text-blue-500 w-16 h-16 rounded-full mx-auto">
                                    <Code size={30} />
                                </div>
                                <h3 className="text-xl font-semibold text-center text-gray-700 mt-4">
                                    Full Stack Developer
                                </h3>
                                <p className="text-center text-gray-600 mt-2">
                                    Build seamless solutions from the database to user interface.
                                </p>
                            </div>

                            {/* Frontend Developer */}
                            <div className="bg-marble shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
                                <div className="flex justify-center items-center bg-green-100 text-green-500 w-16 h-16 rounded-full mx-auto">
                                    <PanelsTopLeft size={30} />
                                </div>
                                <h3 className="text-xl font-semibold text-center text-gray-700 mt-4">
                                    Frontend Developer
                                </h3>
                                <p className="text-center text-gray-600 mt-2">
                                    Craft interactive, responsive, and user-friendly web interfaces.
                                </p>
                            </div>

                            {/* Backend Developer */}
                            <div className="bg-marble shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
                                <div className="flex justify-center items-center bg-red-100 text-red-500 w-16 h-16 rounded-full mx-auto">
                                    <Database size={30} />
                                </div>
                                <h3 className="text-xl font-semibold text-center text-gray-700 mt-4">
                                    Backend Developer
                                </h3>
                                <p className="text-center text-gray-600 mt-2">
                                    Design secure, scalable APIs and optimize server performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;