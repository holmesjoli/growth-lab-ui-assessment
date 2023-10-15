import { Area } from '../types';

export function OptionGroup (area: any) {
    return(
        <optgroup label={area.name}> 
            {
            area.children.forEach((d: any) =>  {return <option value={d.id}>{d.name}</option>} )
            }
        </optgroup> 
    )
}