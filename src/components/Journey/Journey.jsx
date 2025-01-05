import PrimaryBG from "../common/PrimaryBG";
import Timeline from './Timeline';

const Journey = () => {
    return (
        <PrimaryBG>
            <div className="py-10 flex items-start container">
                <div className=" text-center sticky top-44 w-96 h-44">
                    <h1 className="font-bold text-4xl">Journey</h1>
                </div>
                <Timeline></Timeline>
            </div>
        </PrimaryBG>
    );
};

export default Journey;