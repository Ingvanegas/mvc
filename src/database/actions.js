const fs = require('fs');

const rutaJson = '';

export function create(data) {
    fs.writeFileSync(rutaJson, data);
}

export function update(data) {
    const previousData = fs.readFileSync(rutaJson);
    fs.writeFileSync(rutaJson, previousData + data);
}

export function deletes(data) {
    const previousData = fs.readFileSync(rutaJson);
    fs.writeFileSync(rutaJson, previousData);
}

export function get(data) {
    if(data) {
        return fs.readFileSync(rutaJson);
    }
    return fs.readFileSync(rutaJson);
}

