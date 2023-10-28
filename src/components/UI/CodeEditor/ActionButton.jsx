const ActionButton = ({
  icon,
  ariaLabel,
  click
}: {
  icon: JSX.Element;
  ariaLabel: string;
  click: () => void;
}) => {
  return (
    <button
      className="bg-[#010a13] cursor-pointer border-none p-0 outline-none"
      aria-label={ariaLabel}
      id="action-button"
      onClick={click}
    >
      <div className="menu-bar-btn hover:border">{icon}</div>
    </button>
  );
};

export default ActionButton;
