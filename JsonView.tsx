import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import React from 'react';
import data from "./assets/sample.json"

const JsonViewComponent = () => {
    return (
        <DataTable
            data={data}
            colNames={['Name of Company', 'Tagline']}
            colSettings={[{ name: 'Name of Company', type: COL_TYPES.STRING }, {name: 'Tagline', type: COL_TYPES.STRING}]}
            noOfPages={1} //number
        />
    );
}

export default JsonViewComponent;