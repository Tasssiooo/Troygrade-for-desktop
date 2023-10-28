const DialogButton = ({ name, click }) => {
  return (
    <button
      className="bg-[#010a13] cursor-pointer border-none p-0 outline-none flex flex-row gap-0.5"
      id="dialog-button"
      onClick={click}
    >
      <div className="dialog-btn px-2 py-1 hover:border">
        <span>{name}</span>
      </div>
    </button>
  );
};

export default DialogButton;
