import { Area } from '../types';

// Nests the data
export function nestData (data: Area[]) {

    let regionData: Area[] = [];

    for (let r of data.filter((d: any) => d.level === "region")) {

      let stateData: Area[] = [];

      for (let s of data.filter((d: any) => d.level === "state" && d.parent == r.id)) {

        stateData.push(
          {'id': s.id,
          'name': s.name,
          'level': s.level,
          'parent': s.parent,
          'children': data.filter((d: any) => d.parent === s.id)}
          )
      }

      regionData.push(
        {'id': r.id,
        'name': r.name,
        'level': r.level,
        'parent': r.parent,
        'children': stateData}
        )
    }

    return regionData;
}
