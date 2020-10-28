import React from 'react'

import Select from 'react-select'

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: '#1db954',
      color:'white',
      fontWeight:'600',
      borderBottom:'2px solid #333333',
      "&:hover":{cursor:'pointer'}
      
      
    }),
    control: (provided) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      backgroundColor: '#1db954',
      color:'white',
      width: 300,
      border:'none'
    }),
    singleValue: (provided, state) => {
      
  
      return { ...provided,width:300,color:'white',fontWeight:'600'};
    },
    container: (provided)=>({
        ...provided,
        border:'none'
    }),
    menuList: (provided)=>({
        ...provided,
        border:'2px solid #333333',
        padding:0
    })
  }

const options = [{value:"short_term",label:"Le dernier mois"},{value:"medium_term",label:"Les 6 derniers mois"},{value:"long_term",label:"Depuis toujours"}]
export default ({handleChange})=>(
        <Select
            isClearable={false}
            isSearchable={false}
            options={options}
            styles={customStyles}
            defaultValue={options[0]}
            onChange={(option)=>handleChange(option.value)}
        />
    
)