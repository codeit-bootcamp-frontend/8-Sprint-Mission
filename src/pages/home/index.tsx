import { Link } from "react-router-dom";
import bgPanda from "#assets/images/bg-panda.png";

export default function Home() {
  return (
    <div className="mt-[70px]">
      <div
        className="flex h-[540px] w-full items-start justify-center bg-my-sky-blue bg-[length:110%] bg-[50%_bottom] bg-no-repeat md:bg-[length:90%] lg:items-center lg:justify-start lg:bg-[length:60%] lg:bg-[75%_bottom] lg:pl-[20%]"
        style={{ backgroundImage: `url(${bgPanda})` }}
      >
        <div className="lg:items flex flex-col items-center gap-5 pt-12 text-[40px] font-bold text-gray-700 lg:items-start">
          <p className="text-center">
            일상의 모든 물건을&nbsp;
            <br className="md:hidden lg:block" />
            거래해 보세요
          </p>
          <Link to="/items">
            <button className="btn h-[48px] w-[357px] rounded-[40px] text-xl font-semibold lg:w-[300px]">
              구경하러 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
