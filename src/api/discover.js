import axios from "axios";

export async function registerUser(userData) {
    const reqUrl = 'http://localhost:8080/api/auth/signup';
    const result = await axios.post(reqUrl,userData);
    return result.data;
}

export async function loginUser(userData) {
    const reqUrl = 'http://localhost:8080/api/auth/login';
    const result = await axios.post(reqUrl,userData);
    return result.data;
}

export async function uploadFile(formData) {
    const reqUrl = 'http://localhost:8080/api/public/excelParser';
    const result = await axios.post(reqUrl, formData);
    return result.data;
}