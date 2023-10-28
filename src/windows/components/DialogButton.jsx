const DialogButton = ({ name }) => {
  return (
    <button
      className="bg-[#010a13] cursor-pointer border-none p-0 outline-none"
      id="dialog-button"
    >
      <div className="dialog-btn px-2 py-1 hover:border">
        <span>{name}</span>
      </div>
    </button>
  );
};

export default DialogButton;
