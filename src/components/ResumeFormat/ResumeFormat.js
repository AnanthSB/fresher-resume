import PropTypes from "prop-types";
import React from "react";
import styles from "./ResumeFormat.module.scss";

export default function ResumeFormat({
  showButton = false,
  contactNumber,
  emailId,
  city,
  portfolioLInk,
  keySkills = [],
  education = [],
  projects = [],
}) {
  const getkeySkillColumns = () => {
    const numCols = keySkills?.length / 4;
    const columnWidth = numCols < 4 ? "180px" : "auto";
    let result = "";

    for (let i = 0; i < numCols; i++) {
      result += `${columnWidth}${i < numCols - 1 ? "_" : ""}`;
    }
    return "grid-cols-[" + result + "]";
  };
  const handleDownload = (e) => {
    window.alert(e?.target);
  };
  return (
    <div className={`${styles.resumeContainer} pb-10`}>
      <div className={`${styles.header}`}>
        <h1 className="text-[32px] font-semibold">Ananth Shetty</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2
          className={`${styles.heading} my-[4px] h-[30px] text-[18px] tracking-[0.4px] w-full flex flex-col justify-around items-center bg-[#eee] rounded-[4px]`}
        >
          React Developer
        </h2>
        <div
          className={`flex w-full h-[35px] items-center justify-evenly ${styles.rowContainer}`}
        >
          <div className={`${styles.iconsContainer}`}>
            <span className="flex items-center justify-center icon-phone" />
            <span>{contactNumber || "9876543210"}</span>
          </div>
          <div className={`${styles.iconsContainer}`}>
            <span className="flex items-center justify-center icon-mail2" />
            <span>{emailId || "dummy@mail.com"}</span>
          </div>
          <div className={`${styles.iconsContainer}`}>
            <span className="flex items-center justify-center icon-location" />
            <span>{city || "Hyderabad"}</span>
          </div>
          {portfolioLInk && (
            <div className={`${styles.iconsContainer}`}>
              <span className="flex items-center justify-center icon-earth" />
              <span>{portfolioLInk}</span>
            </div>
          )}
        </div>
        {/* skills */}
        <div className={`w-full ${styles.rowContainer} my-2 pb-2 pl-2`}>
          <h2 className="my-1 font-bold text-black1 text-[22px]">Key Skills</h2>
          <div
            className={`max-h-[100px] w-full pl-3 grid 
            ${getkeySkillColumns()}`}
          >
            {keySkills?.map((skill) => {
              return (
                <span key={skill} className="text-sm font-semibold">
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
        {/* education */}
        <div
          className={`flex w-full flex-col ${styles.rowContainer} my-2 mt-2 pb-2 pl-2`}
        >
          <h2 className="my-1 font-bold text-black1 text-[22px]">Education</h2>
          <div className="flex flex-col flex-wrap max-h-[100px] w-full pl-3">
            {education?.map((item) => {
              return (
                <div
                  key={item?.passOutYear}
                  className="flex flex-col gap-1 text-sm font-semibold"
                >
                  <span>{item?.degree}</span>
                  <span>{item?.university}</span>
                  <span>{item?.passOutYear}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* certificates */}
        <div
          className={`flex w-full flex-col ${styles.rowContainer} my-2 mt-2 pb-2 pl-2`}
        >
          <h2 className="my-1 font-bold text-black1 text-[22px]">
            Certifications
          </h2>
          <div className="flex flex-col flex-wrap max-h-[100px] w-full pl-3">
            <div className="flex flex-col gap-1 text-sm font-semibold">
              <p className="font-bold ">
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </p>
              <p>
                <span className="font-bold">certificate id:</span>{" "}
                UC-7697ff96-801a-45f6-a13c-869f5423173b
              </p>
              <p>
                {" "}
                <span className="font-bold">url:</span>{" "}
                ude.my/UC-7697ff96-801a-45f6-a13c-869f5423173b
              </p>
              <p>Mar - 2022</p>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div
          className={`flex w-full flex-col ${styles.rowContainer} my-2 pb-2 pl-2`}
        >
          <h2 className="my-1 font-bold text-black1 text-[22px] mb-2">
            Projects
          </h2>
          <div className="flex flex-col w-full pl-3">
            {projects?.map((project) => {
              return (
                <div
                  key={project?.name}
                  className="flex flex-col gap-1 mb-2 text-sm font-semibold"
                >
                  <h2 className="text-[18px] underline mb-1">
                    {project?.name}:
                  </h2>
                  {project?.points?.map((point) => (
                    <p key={point}>
                      <span className="font-bold">&bull;</span>{" "}
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showButton && (
        <div className="flex items-center justify-end w-full">
          <button
            type="button"
            className={`rounded-[8px] p-[6px] ${styles.button}`}
            onClick={(e) => handleDownload(e)}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}

ResumeFormat.propTypes = {
  city: PropTypes.string,
  contactNumber: PropTypes.string,
  emailId: PropTypes.string,
  keySkills: PropTypes.array,
  portfolioLInk: PropTypes.string,
  education: PropTypes.array,
  projects: PropTypes.array,
  showButton: PropTypes.bool,
};
