// eslint-disable-next-line react/prop-types
function FeatureBox({ title, icon, desc }) {
  return (
    <div className="text-white flex-col text-center element-center">
      <img
        src={`/src/assets/images/${icon}`}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
}

export default FeatureBox;
