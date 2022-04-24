import React from "react";
import SkillFunc from "../Components/Skill/SkillFunc";
import ProFunc from "../Components/Profile/ProFunc";
import HeadFunc from "../Components/Header/HeadFunc";
import ExpFunc from "../Components/Experience/ExpFunc";
import EduFunc from "../Components/Education/EduFunc";
export default function home() {
  return (
    <div>
      <HeadFunc />
      <ProFunc />
      <SkillFunc />
      <ExpFunc />
      <EduFunc />
    </div>
  );
}
