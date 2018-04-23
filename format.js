let Export = {}
/**
 * 格式化时间
 * @param {*} Data 
 * @param {*} FormatData 
 */
Export.formatDate = function (Data, FormatData) {
    if (/(y+)/.test(FormatData)) {
        FormatData = FormatData.replace(RegExp.$1, (Data.getFullYear() + '').substr(4 - RegExp.$1.length));
    };
    let o = {
        'M+': Data.getMonth() + 1,
        'd+': Data.getDate(),
        'h+': Data.getHours(),
        'm+': Data.getMinutes(),
        's+': Data.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(FormatData)) {
            let str = o[k] + '';
            FormatData = FormatData.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    };

    // 补齐左边的0
    function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
    return FormatData;
}



export default Export;