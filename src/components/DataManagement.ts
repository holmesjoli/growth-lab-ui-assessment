import { Area, AreaData } from '../types';

// Nests the data
export function nestData (data: Area[]) {

    let regionData: AreaData[] = [];

    for (let r of data.filter((d: any) => d.level === "region")) {

      let stateData: AreaData[] = [];

      for (let s of data.filter((d: any) => d.level === "state" && d.parent == r.id)) {

        stateData.push(
          {'id': s.id,
          'name': s.name,
          'level': s.level,
          'children': data.filter((d: any) => d.parent === s.id)}
          )
      }

      regionData.push(
        {'id': r.id,
        'name': r.name,
        'level': r.level,
        'children': stateData}
        )
    }

    return regionData;
}
