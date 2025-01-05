
const Stack = ({icon}) => {
    return (
        <div className="keen-slider__slide bg-marble border border-action flex flex-col gap-3 items-center justify-center p-5 rounded-4xl">
            <img className="w-20" src={icon} alt="" />
            <h3>name</h3>
        </div>
    );
};

export default Stack;




{/* <div>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200"
  >
    <span className="block h-3 rounded-full bg-indigo-600" style="width: 75%"></span>
  </span>
</div> */}