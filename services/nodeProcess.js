const nodeProcess = (erorText, callBack) => {
    const args = process.argv.slice(2);
    if (args.length) {
        args.forEach((arg) => {
            console.log(callBack(arg));
        })
    } else {
        console.log(erorText)
    }
}

export default nodeProcess
