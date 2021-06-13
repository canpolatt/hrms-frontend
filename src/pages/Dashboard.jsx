import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa"
import JobDashboardItemsService from "../services/JobDashboardItemsService";
// import { Link } from "react-router-dom";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState([]);
  const [jobAdvertisement, setJobAdvertisement] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [employer, setEmployer] = useState([]);
  useEffect(() => {
    // Sidebar
    let sidebarService = new JobDashboardItemsService();
    sidebarService
      .getJobTitles()
      .then((result) => setSidebar(result.data.data));

      //JobAdvertisement
    let jobAdvertisementService = new JobDashboardItemsService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisement(result.data.data));
    //Candidates 
    let candidateService = new JobDashboardItemsService();
    candidateService
     .getCandidates()
     .then((result) => setCandidate(result.data.data));
     
    //  Employers

    let employerService = new JobDashboardItemsService();
    employerService
     .getEmployers()
     .then((result) => setEmployer(result.data.data));
  }, []);


  return (
    <div className="dashboard">
      <div className="mainRow">
        <div className="sideBar-col">
          <div className="sideBar">
            <h2>İş Pozisyonları</h2>

            <ul>
              {sidebar.map((item) => {
                return (
                  <li key={item.id} className="nav-text">
                    <div>
                      <AiIcons.AiOutlinePlus />
                    </div>
                    <p>{item.jobTitle}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="cards-col">
        <h1>Son eklenen iş ilanları</h1>
        <hr/>
          <div className="row">
            {jobAdvertisement.slice(0, 4).map((item) => {
              return (
                // <Link key={item.id}>
                <div key={item.id} className="card">
                  <div className="card-body">
                    <span>🕐 Tam zamanlı</span>
                    <br />
                    <h2>{item.jobTitle.jobTitle}</h2>
                    <h3>{item.employer.companyName}</h3>
                    <p>{item.city.cityName}/TURKEY</p>
                  </div>
                </div>
                // </Link>
              );
            })}
          </div>
          <h1>Son eklenen adaylar</h1>
          <hr/>
          <div className="row">
          {candidate.slice(0, 4).map((item) => {
              return (
                // <Link key={item.id}>
                <div key={item.id} className="card">  
                  <div className="card-body">
                    <br/>
                    <h2>{item.candidate.firstName+" "+item.candidate.lastName}</h2>
                    <p>{item.coverLetter}</p>
                    <div>
                    <h3><AiIcons.AiFillMail/></h3>
                    <h3><AiIcons.AiFillGithub/></h3>
                    <h3><AiIcons.AiFillLinkedin/></h3>
                    </div>
                  </div>
                </div>
                // </Link>
              );
            })}
          </div>
          <h1>Son eklenen şirketler</h1>
          <hr/>
          <div className="row">
          {employer.slice(0, 4).map((item) => {
              return (
                <div key={item.id} className="card">  
                  <div className="card-body">
                    <div className="icon"><FaIcons.FaBuilding/></div>
                    <h2>{item.companyName}</h2>
                    <p>{item.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
