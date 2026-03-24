function Input({ type, id, placeholder, text, value, onChange }) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={id}>{text}</label>
      <input
        className="bg-slate-200 p-2 rounded-lg outline-none"
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
