/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const GitStatus = () => {
  return (
    <div>
      <div className="mx-auto md:block flex flex-col md:w-11/12">
        {/* <h3 className="text-xl">My GitHub Stats </h3> */}
        <div className="flex flex-col md:flex-row">
          <div>

          <img
            src="https://github-readme-stats.vercel.app/api?username=daljeet-coder&show_icons=true&theme=transparent&hide_border=true&locale=en"
            alt="daljeet-coder"
            />
            </div>
            <div>

          <img src="https://github-readme-streak-stats.herokuapp.com?user=daljeet-coder&theme=tokyonight_duo&hide_border=true&border_radius=0)](https://git.io/streak-stats" />
            </div>
        </div>
        <div>

        <img
          className="m-auto w-1/2 "
          src="https://github-readme-stats.vercel.app/api/top-langs?username=daljeet-coder&show_icons=true&theme=transparent&hide_border=true&locale=en&layout=compact"
          alt="daljeet-coder"
          />
          </div>
      </div>
    </div>
  );
};

export default GitStatus;
