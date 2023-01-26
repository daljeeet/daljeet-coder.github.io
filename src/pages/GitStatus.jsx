/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import GitHubCalendar from 'react-github-calendar';
const GitStatus = () => {
  // const [device, setDevice] = useState(new Date().getFullYear())
  // useEffect(()=>{
  //   if(window.screenX<="500px"){
  //     setDevice(new Date().getFullYear())
  //   }
  // },[])
  //   const selectLastHalfYear = contributions => {
  //     const currentYear = device
  //     const currentMonth = new Date().getMonth()
  //     const shownMonths = 8;
    
  //     return contributions.filter(day => {
  //       const date = new Date(day.date);
  //       const monthOfDay = date.getMonth();
    
    //     return (
    //       date.getFullYear() === currentYear &&
    //       monthOfDay > currentMonth - shownMonths &&
    //       monthOfDay <= currentMonth
    //     );
    //   });
    // };
  
  return (
    <div className="w-11/12 m-auto" >
      <div className="mx-auto md:block flex flex-col">
        {/* <h3 className="text-xl">My GitHub Stats </h3> */}
        <div className="flex flex-col md:flex-row">
          <div data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="m-auto border-2 border-black/50 bg-gradf/40 rounded-xl" >
          <img
            src="https://github-readme-stats.vercel.app/api?username=daljeet-coder&show_icons=true&theme=transparent&hide_border=true&locale=en"
            alt="daljeet-coder"
            />
            </div>
            <div data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="m-auto border-2 border-black/50 bg-gradf/40 rounded-xl my-10" >

          <img src="https://github-readme-streak-stats.herokuapp.com?user=daljeet-coder&theme=tokyonight_duo&hide_border=true&border_radius=0)](https://git.io/streak-stats" />
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="m-auto md:w-11/12 border-2 border-black/50 bg-gradf/40 rounded-xl mb-10" >
        <img
          className="m-auto"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=daljeet-coder&show_icons=true&theme=transparent&hide_border=true&locale=en&layout=compact"
          alt="daljeet-coder"
          />
          </div>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="m-auto border-black/50 bg-gradf/40 text-center border-black/40 rounded-xl my-10" >
          <GitHubCalendar style={{margin:"20px auto"}} username="daljeet-coder" color='green' hideColorLegend={true} blockSize={16} blockMargin={6} blockRadius='20'
          //  transformData={selectLastHalfYear}
            />
            </div>
      </div>
    </div>
  );
};

export default GitStatus;
