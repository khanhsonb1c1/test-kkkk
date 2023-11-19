import React, { useEffect, useState } from 'react';


function InputFieldSelect(props: any) {
  const [selectValue, setSelectValue] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    setSelectValue(props.selected);
  }, [props.selected]);


  return (
    <div className='input-select input-field'>
      <select value={selectValue} onChange={handleSelectChange}>

        {
          props.options.map((el: any) => {
            return (
              <option value={el.id} key={el.id}>{el.name}</option>
            )
          })
        }

      </select>

    </div>
  );
}

export default InputFieldSelect;
