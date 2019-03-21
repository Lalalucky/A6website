const price = function(value){
    const v = +value;
    if (v == 0) {
        return value = '￥' + v
    } else {
        return value = '￥' + v.toFixed(2);
    }
}
const unit = function(value){
    if (value == "月") {
        return value = '个月'
    } else {
        return value = value
    }
}

export default {
    price,unit
}
