import { useState } from "react";
import {
  ChevronRight,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  expandSidebar,
} from "../../store/reducers/sidebarSlice";
import { NavLink } from "react-router-dom";
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import BadgeIcon from '@mui/icons-material/Badge';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const [id, setindex] = useState(null);
  const [id2, setIndex2] = useState(null);

  const Menus = [
    {
      title: "Active Flows",
      src: PresentToAllIcon,
      Navigation: "/",
    },
    {
      title: "My Flows",
      src: BadgeIcon,
      Navigation: "/myflow",
    },
    {
      title: "Past Flows",
      src: ContentPasteSearchIcon,
      Navigation: "/pastflow",
    }
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          sidebar.expand ? "w-[16.055555vw]" : "w-[5vw]"
        } bg-[#F9F8FE] h-screen relative duration-300`}
      >
        <ChevronRight
          className={`absolute cursor-pointer rotate-0 -right-3 top-9 w-[2.083333vw] shadow-md ring-black bg-white
           border-2 rounded-full  ${sidebar.expand && "rotate-180"}`}
          onClick={() => {
            if (sidebar.expand) dispatch(collapseSidebar());
            else dispatch(expandSidebar());
          }}
        />
        <div className="flex items-center justify-center w-[100%] h-[20%]">
          <h1
            className={`text-black origin-left font-poppins font-semibold text-[30px] mt-[3.055555vh] mx-[2.63888vw] duration-200  ${
              !sidebar.expand && "scale-0"
            }`}
          >
            D.E. Shaw
          </h1>
        </div>
        <ul className="mt-[6.94444vh] h-[40%] flex flex-col items-center justify-center">
          {Menus.map((Menu, index) => (
            <>
              <NavLink to={Menu.Navigation}>
                <li
                  key={index}
                  className={`flex items-center justify-center rounded-md cursor-pointer w-[100%] text-gray-300 text-sm pt-[1.203703704vh] pb-[1.203703704vh] ${
                    sidebar.expand && "pl-[1.805555vw] pr-[1.1111111vw]"
                  } ${sidebar.expand ? "w-[16.9675vw]" : "w-[3vw] ml-[0.4vw]"}
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === id && "bg-light-white"} `}
                  onClick={() => {
                    if (id !== index) setindex(index);
                    else setindex(0);
                  }}
                >
                  <Menu.src
                    fontSize="medium"
                    style={{ color: `${id !== index ? "#000" : "#20dc6c"}` }}
                    className="mx-2"
                  />
                  <span
                    className={`${!sidebar.expand && "hidden"} ${
                      id === index ? "text-[#20dc6c]" : "text-[#000]"
                    } origin-left duration-200 text-[16px] whitespace-nowrap w-[50%] flex items-start justify-start`}
                  >
                    {Menu.title}
                  </span>
                </li>
              </NavLink>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
