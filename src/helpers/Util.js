function percentualFormat(originValue, partValue, round = 2){
    return (parseFloat(Math.abs((partValue*100)/originValue).toFixed(round)) || '').toLocaleString();
}

function percentual(originValue, partValue){
    return (Math.abs((partValue*100)/originValue) || 0);
}

export {percentual, percentualFormat};