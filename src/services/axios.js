import {config} from './config'

import axios from 'axios';

const instance = axios.create({
    baseURL: config.url
 });



 export default instance;