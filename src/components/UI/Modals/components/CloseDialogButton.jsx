const CloseDialogButton = ({ click }) => {
  return (
    <button
      className="block relative -top-[36px] left-80 z-[999]"
      id="dialog-close-btn"
      onClick={click}
    >
      <div
        className="w-7 h-7 rounded-[50%] flex items-center justify-center bg-dialog-close hover:bg-dialog-close-hover relative top-[1px] z-[9999]"
        id="button-wrapper"
      >
        <div
          className="w-6 h-6 rounded-[50%] bg-[#1e282d] transition-colors"
          id="contents"
        >
          <div className="w-[10px] h-[10px] bg-[#cdbe91]" id="x-icon"></div>
        </div>
      </div>
    </button>
  );
};

export default CloseDialogButton;
