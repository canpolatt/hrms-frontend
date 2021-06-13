import axios from "axios";

export default class JobDashboardItemsService{

    getJobTitles(){
        return axios.get("http://localhost:4000/api/jobtitles/getall")
    }
    getJobAdvertisements(){
        return axios.get("http://localhost:4000/api/jobadvertisement/getAllSortedByNewestDate")
    }
    getCandidates(){
        return axios.get("http://localhost:4000/api/cvs/getall")
    }
    getEmployers(){
        return axios.get("http://localhost:4000/api/employers/getall")
    }
}