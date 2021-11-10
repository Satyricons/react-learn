import axios from "axios";

let instance = axios.create({
	baseURL: `http://localhost:8000/`,
	headers: {Authorization: localStorage.getItem('myToken')},
})

instance.interceptors.response.use(function (res) {
	// Делаем что угодно с поступившими данными
	console.log("Запрос")
	return res
}, function (error) {
	// Обрабатываем ошибку
	localStorage.clear()
	return Promise.reject(error);
})

export const getUserAuth = (email, password) => instance.post(`auth/login`, {email, password}).then(res => res.data)

export const setUserRegister = (email, password) => instance.post(`auth/register`, {email, password})

export const getUserMount = () => instance.get(`user`, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const getAllMessage = (clickId, isSave, list) => instance.post(`msg`, {clickId, isSave, list},
	{headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const getSearchUsers = (currentPage, searchUsers) => instance.post(`users`, {currentPage, searchUsers},
	{headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const getFollow = (currentPage) => instance.get(`follow?currentPage=${currentPage}`, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const getUserClickPage = (p) => instance.get(`users?currentPage=${p}`, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const setFollow = (id, follow) => instance.put(`users/${id}`, {follow}, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const setStatus = (id, status) => instance.put(`user/${id}`, {status}, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const addMessage = (id, message) => instance.put(`body/${id}`, {message}, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)

export const sendPhoto = (formData) => instance.post(`http://localhost:8000/ava`, formData, {headers: {Authorization: localStorage.getItem('myToken')}}).then(res => res.data)