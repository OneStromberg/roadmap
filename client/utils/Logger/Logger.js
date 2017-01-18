class Logger {

    static _buildMessage(message, data) {
        return (data.length === 0) ? message : (message + ':' + JSON.stringify(data));
    }

    static log(message, data = '') {
        console.log(this._buildMessage(message, data));
    }
}

export default Logger;