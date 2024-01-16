import React from "react";
import { FcAbout } from "react-icons/fc";
import HKImg from "../asstes/images/hk.png";

const AboutUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 bg-info p-2 rounded">
                    <h3>About Us <FcAbout/> </h3>
                </div>
             </div>
             <div className="row">
                <div className="col-md-6 ">

Hill & Knowlton (H&K) is a renowned multinational public relations agency based in New York City. The company, founded in 1927, has expanded its staff to 1,900 individuals and operates in 68 offices across 34 countries. H&K, a prominent figure in the public relations sector, acknowledges the pivotal significance of knowledge in their domain. In this industry, the effective dissemination and control of information are crucial for achieving project triumph.

Due to the project-oriented nature of public relations, H&K staff are consistently involved in exchanging significant quantities of information with coworkers, clients, and accessing external data. In response to these difficulties, H&K initiated a knowledge management project in 1999, recognising the constraints of their current system. Ted Graham, the worldwide knowledge management director of H&K, spearheaded this programme.

The hk.net Extranet has a user-friendly interface featuring on-screen folders that encompass sections for correspondence, administrative information, case studies, and a full H&K directory containing personnel biographies. The system offers tailored channels for individual clients, enhancing a personalised experience for consumers.


H&K's dedication to innovation is seen in the incorporation of micro-payments, referred to as "beenz," into the Extranet. This novel strategy provides incentives for individuals to contribute and access knowledge, promoting a culture of ongoing learning and collaboration. Furthermore, the corporation has actively adopted knowledge-sharing as an integral component of performance evaluations, hence strengthening its significance within the organisational culture.

Hill & Knowlton's proactive stance on knowledge management exemplifies their dedication to remaining at the forefront of the public relations business. This is achieved through promoting collaboration, conserving organisational memory, and improving the overall efficiency of their worldwide workforce.</div>
                <div className="col-md-6 "> <img src={HKImg} alt="HkImg" /></div>
             </div>
        </div>
       
    );
};

export default AboutUsPage;