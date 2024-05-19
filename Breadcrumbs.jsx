import "./styles/Breadcrumbs.css";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import MemoryIcon from '@mui/icons-material/Memory';
import DangerousIcon from '@mui/icons-material/Dangerous';

const BreadCrumbsContainer = () => {
  return (
    <div className="h-[8.7vh] flex flex-row border-2 border-purple-400 px-10 gap-x-4">
      <div className=" w-1/4 flex items-center justify-center">
        <AddTaskIcon fontSize="large" style={{color:"#228B22"}} />
        <p className=" mx-2 h-[100%] py-1">
          <p className="text-xl h-[40%]">215k</p>
          <span className="text-[13px]">Completed</span>
        </p> 
      </div>
      <div className=" w-1/4 flex items-center justify-center">
      <MemoryIcon fontSize="large" style={{color:"#006400"}} />
      <p className=" mx-2 h-[100%] py-1">
        <p className="text-xl h-[40%]">215k</p>
        <span className="text-[13px]">Ongoing</span>
      </p> 
      </div>
      <div className=" w-1/4 flex items-center justify-center">
      <RunningWithErrorsIcon fontSize="large" style={{color:"#e6cc00"}} />
      <p className=" mx-2 h-[100%] py-1">
        <p className="text-xl h-[40%]">1.76m</p>
        <span className="text-[13px]">Unstable</span>
      </p> 
      </div>
      <div className=" w-1/4 item flex items-center justify-center">
      <DangerousIcon fontSize="large" style={{color:"	#FF7F7F"}} />
      <p className=" mx-2 h-[100%] py-1">
        <p className="text-xl h-[40%]">215k</p>
        <span className="text-[13px]">Failed</span>
      </p> 
      </div>
    </div>
  );
};

export default BreadCrumbsContainer;
