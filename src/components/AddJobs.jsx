// AddJobs.js
// import { db } from "../../firebase"; // your firebase config
// import { collection, addDoc } from "firebase/firestore";
// import { dummyJobs } from "../../data/dummyJobs";

// const AddJobs = () => {
//   const handleUpload = async () => {
//     const jobsRef = collection(db, "jobs");
//     for (const job of dummyJobs) {
//       await addDoc(jobsRef, job);
//     }
//     alert("Jobs uploaded!");
//   };

//   return (
//     <div className="p-4">
//       <button
//         onClick={handleUpload}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Upload Dummy Jobs
//       </button>
//     </div>
//   );
// };

// export default AddJobs;
