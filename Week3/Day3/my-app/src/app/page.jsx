// import React from "react";
// import Navbar from "../../components/ui/Navbar";
// import Sidebar from "../../components/ui/Sidebar";

// const Page = () => {
//   return (
//     <div>
//       <p>Landing Page</p>
//     </div>
//   );
// };

// export default Page;


import React from "react";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";

const Page = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="pt-20 px-6">
          <p>Landing Page</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
