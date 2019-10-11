const path = require('path');
const fs = require('fs');
const transliteration = require('transliteration');
const tr = transliteration.transliterate;
const request = require('request');

let getData = () => {
    const url = 'http://www.baidu.com';
    request({
        host: '0.0.0.0',
        url,
        method: 'POST',
        json: true,
        headers: {
            'Content-type': 'application/json',
        },
        body: {
            version: "6.5.7"
        }
    }, function(error, response, body) {
            // console.log(error, body);
        if (!error && response.statusCode == 200) {
            // console.log(body);
            const citys = body.result.provinces;
            fs.writeFileSync('./file/city.json', JSON.stringify(body.result.provinces));
            let newCity = [];
            let cityMap = {};
            for (let i of citys) {
                newCity = newCity.concat(i.subAreas);
            }
            for (let value of newCity) {
                let currcitySpell = (tr(value.name)).toUpperCase().replace(/\s/g, '') || "use strict";
                let currcityFirsxtLetter = (tr(value.name)).substr(0, 1).toUpperCase();
                const p = {
                    cityCode: value.code,
                    cityName: value.name,
                    citySpell: currcitySpell,
                    cityFirstLetter: currcityFirsxtLetter
                };
                value.citySpell = currcitySpell;
                value.cityFirstLetter = currcityFirsxtLetter;
                cityMap[value.name] = currcitySpell;
            }
            fs.writeFileSync('./file/newCity.json', JSON.stringify(newCity));
            fs.writeFileSync('./file/cityMap.json', `window.CITYMAP=${JSON.stringify(cityMap)}`);
        }
    })
}

getData();
