/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import GitHubCalendar from 'react-github-calendar';
const GitStatus = () => {
  return (
    <div className="w-11/12 m-auto" >
      <div className="mx-auto md:block flex flex-col">
        {/* <h3 className="text-xl">My GitHub Stats </h3> */}
        <div className="flex flex-col md:flex-row">
          <div className="m-auto border-2 border-black/40 rounded-xl" >
          <img
            src="https://github-readme-stats.vercel.app/api?username=daljeet-coder&show_icons=true&theme=transparent&hide_border=true&locale=en"
            alt="daljeet-coder"
            />
            </div>
            <div className="m-auto border-2 border-black/40 rounded-xl my-10" >

          <img src="https://github-readme-streak-stats.herokuapp.com?user=daljeet-coder&theme=tokyonight_duo&hide_border=true&border_radius=0)](https://git.io/streak-stats" />
            </div>
        </div>
        <div className="m-auto border-2 border-black/40 rounded-xl mb-10" >
        <img
          className="m-auto"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=daljeet-coder&show_icons=true&theme=transparent&hide_border=true&locale=en&layout=compact"
          alt="daljeet-coder"
          />
          </div>
          <div className="m-auto border-2 text-center border-black/40 rounded-xl my-10" >
          <GitHubCalendar style={{margin:"20px auto"}} username="daljeet-coder" color='green' hideColorLegend={true} blockSize={16} blockMargin={6} blockRadius='20'/>
            </div>
      </div>
    </div>
  );
};

export default GitStatus;
