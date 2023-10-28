const Warning = ({ state }) => {
  return (
    <div role="alert" className="bg-red-500 w-[95%] p-2">
      <h2>Warning!</h2>
      <p className="text-xs">
        Please set a configuration for all files or enable the "Set this
        configuration for all files" option.
      </p>
    </div>
  );
};

export default Warning;
