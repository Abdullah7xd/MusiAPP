import React, { useEffect, useState } from "react";
import app_config from "../config";

// const AddPlayer = ({refreshPlayerList, tournamentData}) => {
//   // console.log(tournamentData);
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user"))
//   );
//   const [detail, setDetail] = useState([]);
//   const url = app_config.apiUrl;

//   const fetchdata= async()=>{
//     const res = await fetch(`${url}/music/getall`)
//     console.log(res.status);
//     if (res.status === 201) {
//       const data = (await res.json()).result;

//       console.log(data);
//       setDetail(data);
//     }
//   }

//   // method: "POST",
//   // body: JSON.stringify(values),
//   // headers: {
//   //   "Content-Type": "application/json",
//   // },
//   console.log(res.status);
//   if (res.status===200)
// });







// const uploadImage = (e) => {
//   const file = e.target.files[0];
//   setSelImage(file.name);
//   const fd = new FormData();
//   fd.append("myfile", file);
//   fetch(url + "/util/uploadfile", {
//     method: "POST",
//     body: fd,
//   }).then((res) => {
//     if (res.status === 200) {
//       console.log("file uploaded");
//       toast.success("File Uploaded!!");
//     }
//   });
// }

// return (
//   <div>
//     <section className="py-5">
//       <div className="container-fluid">
//         <div className="row d-flex justify-content-center align-items-center">
//           <div className="">

//             <div className="card" style={{ borderRadius: 15 }}>
//               <div className="card-body p-5">
//               <h1 className="mb-4">Add new {tournamentData.game} Music</h1>
//                 <form onSubmit={playerForm.handleSubmit}>
//                   <div className="row align-items-center">
//                     <div className="col-md-6 mb-4">
//                       <label>Music Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         onChange={playerForm.handleChange}
//                         value={playerForm.values.name}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-4">
//                       <label htmlFor="upload-image" className="btn btn-dark"> <i class="fas fa-upload"></i> Upload Player Image</label>
//                       <input
//                       hidden
//                         className="form-control"
//                         type="file"
//                         id="upload-image"
//                         accept=".jpg, .jpeg, .png"
//                         maxFileSize="2000000"
//                         onChange={uploadImage}

//                         // 2mb
//                       />
//                     </div>
//                   </div>
//                   <div className="py-4">
//                     <button type="submit" className="btn btn-primary btn-lg">
//                       Add Player to {tournamentData.title}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// );
// };

const Musiclisting = () => {
  const [detail, setDetail] = useState([]);
  const url = app_config.apiUrl;

  const getMusicList = async () => {
    const res = await fetch(`${url}/music/getall`);
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setDetail(data);
    }
  };
  const displayMusic = () => {
    return detail.map((music) => (

      <div className="col-md-6">
        <div className="card my-3">
          {/* <img className="card-img-top" src={url+'/'+player.image} alt="" /> */}
          <div className="card-body">
            <h5 className="card-title">{music.title}</h5>
            <p className="card-text">{music.singer}</p>
            <p className="card-text">{music.lyrics}</p>
          </div>
        </div>
      </div>

    ));

  };

  useEffect(() => {
    getMusicList();
  }, []);



  return (
    <div>
      {/* <AddPlayer refreshPlayerList={getPlayerList} tournamentData={tournamentData} /> */}
      <div className="container">
        <div className="row">{displayMusic()}</div>
      </div>
    </div>
  );
};

export default Musiclisting;
