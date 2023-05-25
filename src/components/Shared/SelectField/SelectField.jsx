import React from 'react';
import Select from 'react-select';
import s from './SelectField.module.scss';

const customStyles = {
  placeholder: provided => ({
    ...provided,
    position: 'absolute',
    top: '1px',
    left: '1px',
    display: 'inline-block',
    marginTop: '17px',
    fontSize: '16px',
    color: 'var(--second-text-color)',
    transition: '0.25s',
    pointerEvents: 'none',
  }),
};

const SelectField = ({
  name,
  value,
  handleChange,
  placeholder,
  required,
  options,
}) => {
  return (
    <label className={s.label}>
      <Select
        className={s.select}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        options={options.map(option => ({ value: option, label: option }))}
        styles={customStyles}
      />
    </label>
  );
};

export default SelectField;
// import s from './SelectField.module.scss';

// const SelectField = ({
//   name,
//   value,
//   handleChange,
//   placeholder,
//   required,
//   options,
// }) => {
//   return (
//     <label className={s.label}>
//       <select
//         className={s.select}
//         name={name}
//         value={value}
//         onChange={handleChange}
//         required={required}
//       >
//         <option value="" disabled hidden>
//           <span className={s.span}>{placeholder}</span>
//         </option>
//         {options.map(option => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// };

// export default SelectField;
