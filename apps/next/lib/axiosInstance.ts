import axios from 'axios';
import { initialize } from '../rapini-generated-package'; // Adjust the import path to match your generated package

// Create and configure an Axios instance
const axiosInstance = axios.create({
  headers: {
    'X-Client-Id': process.env.FDAI_CLIENT_ID,
    'X-Client-Secret': process.env.FDAI_CLIENT_SECRET
  }
});

// Initialize your Rapini configuration with the custom Axios instance
const config = initialize(axiosInstance);

// Now you can use the `postUser` mutation or any other generated function
// The custom headers will be included in every request made by this instance