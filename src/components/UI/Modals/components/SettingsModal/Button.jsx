const Button = ({ icon, click, disabled }) => {
  return (
    <button
      className="bg-[#010a13] cursor-pointer border-none p-0 outline-none flex flex-row gap-0.5"
      disabled={disabled}
      onClick={click}
    >
      <div className="btn px-2 py-1 hover:border">
        {icon}
      </div>
    </button>
  )
}

export default Button;