
import './App.css';

import React from 'react'

import FullName from './info/FullName';
import ProfilePhoto from './info/ProfilePhoto';
import Email from './info/Email';
import Education from './info/Education';
import { FaUserGraduate } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { AiOutlinePercentage } from "react-icons/ai";
import Experience from './Experience';
import Compétences from './Compétences';
import Adresse from './info/Adresse';
const App = () => {
  return (
    <div className="part">
    <div className="part1">
      <h2><RiContactsBookUploadFill/> Contact</h2>
      <ProfilePhoto/>
      <FullName/>
      <p> <AiOutlinePercentage/> 22 ans</p>
      <Email/>
      <Adresse/>
      <h2><FaUserGraduate/> Education</h2>
      <Education/>
    </div>
    <div className="part2">
      <h2>Parcours professionnel</h2>
      <Experience/>
      <h2>Compétences</h2>
      <Compétences/>
    </div>
    </div>
  )
}

export default App

