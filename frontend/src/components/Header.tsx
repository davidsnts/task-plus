import { SquareUser } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-[#5A7ACD] h-12 flex">
      <div className="max-w-4xl w-full flex items-center justify-between text-white mx-4 sm:mx-auto">
        <div className="flex items-center">
          <p className="font-bold text-2xl">TASK</p>
          <span className="text-yellow-300 text-4xl font-bold w-12 h-12">
            +
          </span>
        </div>

        <div className="flex items-center gap-2">
          <SquareUser size={42} />
          <p className="font-bold flex gap-2">
            <span className="text-yellow-300">User</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
