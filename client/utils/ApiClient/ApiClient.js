import axios from 'axios';
import RequestBuilder from './RequestBuilder';
import Logger from './../Logger/Logger';


class ApiClient
{
    static doApiCall(actionType, data = {}) {

        const action = RequestBuilder.buildCallAction(actionType, data);

        return action.then(response => {
                //-- check if was a success
                if (response) {
                    return response;
                } else {
                    //-- TODO: have a error mapper in place from the API response to the UI response
                    Logger.log('Api false success with the following data', response.data);
                    throw new Error(response.data.error);
                }
            })
            .catch(error => {
                //-- TODO: have a error mapper in place from the API response to the UI response
                Logger.log('Api exception', error);
                throw new Error(error);
            });
    }
}

export default ApiClient;