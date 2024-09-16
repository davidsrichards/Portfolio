import GlobalCount from "./GlobalCount/GlobalCount";
import { BsBriefcase } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
function Counts() {
  const [proj, setProj] = useState(0);
  const [client, setClient] = useState(0);
  const [years, setYears] = useState(0);
  const [award, setAward] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      if (proj <= 200 - 1) {
        const timerInterval = setInterval(() => {
          setProj((p) => p + 1);
          if (client < 120) {
            setClient((c) => c + 1);
          }
          if (years < 4) {
            setYears((c) => c + 1);
          }
          if (award < 10) {
            setAward((c) => c + 1);
          }
        }, 10);

        return () => {
          clearInterval(timerInterval);
        };
      }
    } else {
      setProj(0);
      setClient(0);
      setYears(0);
      setAward(0);
    }
  }, [inView, proj]);

  return (
    <div
      ref={ref}
      className="sm:p-12 p-2 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-4  gap-8 bg-secondary"
    >
      <GlobalCount
        image={<BsBriefcase />}
        count={proj}
        text={"Total Projects"}
      />
      <GlobalCount
        image={<CiFaceSmile />}
        count={client}
        text={"Happy Clients"}
      />
      <GlobalCount
        image={<FaRegCalendarAlt />}
        count={years}
        text={"Years of Experience"}
      />
      <GlobalCount image={<CiTrophy />} count={award} text={"Award Won"} />
    </div>
  );
}

export default Counts;
