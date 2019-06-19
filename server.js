let XLSX = require('xlsx');
const workbook = XLSX.readFile(filename);
const sheet_name_list = workbook.SheetNames;
let jsonPagesArray = [];
sheet_name_list.forEach(function(sheet) {
        const jsonPage = {
            name: sheet,
            content: JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{defval:""})))
        };
        jsonPagesArray.push(jsonPage);
    });

console.log(jsonPagesArray[0].content);
