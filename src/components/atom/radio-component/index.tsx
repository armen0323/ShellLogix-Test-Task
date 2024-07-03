import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import {ForwardedRef, forwardRef} from "react";

const RadioInput = forwardRef(({value, label, ...rest}, ref: ForwardedRef<Element>) => {
    return <FormControlLabel value={value} control={<Radio/>} label={label} {...rest}/>
})
export default RadioInput