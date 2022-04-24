import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllCourses = () => {
    return axios(`${apiUrl}/courses`)
}

//show function
export const showCurrentCourse = (courseId) => {
    return axios(`${apiUrl}/courses/${courseId}`)
}

//POST -> create function
export const createCourse = (user, newCourse) => {
    return axios({
        url:`${apiUrl}/courses`,
        method:'POST',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{course: newCourse}
    })
}
