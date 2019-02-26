deepEqual = function(x,y){
    if (typeof x == null && typeof y == null){
        return true;
    } else if (typeof x ==null || typeof y == null){
        return false;
    } else if (typeof x == typeof y){
        if (typeof x !== object){
            if (x===y){
                return true;
            } else {
                return false;
            }
        } else {
            if (Object.keys(x).length===Object.keys(y).length){
                for (attr in x){
                    let deq = deepEqual(x.attr,y.attr);
                    if (deq==false){
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}