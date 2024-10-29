const TextInput = ({ name, label, value, onChange, ...rest }) => {
  return (
    <div className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
