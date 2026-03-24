function Button({ text, onClick }) {
  return (
    <button
      className="bg-slate-400 w-28 text-white rounded-lg cursor-pointer hover:scale-105 duration-300 md:p-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
