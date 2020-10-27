import React from 'react'

import Select from 'react-select'


const options = [{value:"short_term",label:"Le dernier mois"},{value:"medium_term",label:"Les 6 derniers mois"},{value:"long_term",label:"Depuis toujours"}]
export default ({handleChange})=>(
    <Select
        isClearable={false}
        isSearchable={false}
        options={options}
        defaultValue={options[0]}
        onChange={(option)=>handleChange(option.value)}
    />
)