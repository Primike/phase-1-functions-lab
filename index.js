let headquarters = 42
function distanceFromHqInBlocks(x) {
    if (x>=headquarters) {
        return x-headquarters
    }
    else if (x<headquarters) {
       return headquarters-x
    }
}

function distanceFromHqInFeet(x) {
    if (x>=headquarters) {
        return (x-headquarters)*264
    }
    else if (x<headquarters) {
       return (headquarters-x)*264
    }
}

function distanceTravelledInFeet(x, y) {
    if (y>x) {
        return (y-x)*264
    }
    else if (x>y) {
        return (x-y)*264
    }
}

function calculatesFarePrice(x, y) {
    if (y>x) {
        if (((y-x)*264)<400) {
            return 0
        }
        else if (2000>((y-x)*264) & ((y-x)*264)>400) {
            return ((y-x)*264-400)*0.02
        }
        else if (2500>(y-x)*264 & (y-x)*264>2000 ) {
            return 25
        }
        else if ((y-x)*264>2500) {
            return 'cannot travel that far'
        }
    }
    else if (x>y) {
        if (((x-y)*264)<400) {
            return 0
        }
        else if (2000>((x-y)*264) & ((x-y)*264)>400) {
            return (((x-y)*264)-400)*0.02
        }
        else if (2500>(x-y)*264 & (x-y)*264>2000 ) {
            return 25
        }
        else if ((x-y)*264>2500) {
            return 'cannot travel that far'
        }
    }
}