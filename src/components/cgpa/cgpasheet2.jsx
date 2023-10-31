import React from 'react'

const cgpasheet2 = (props) => {

    var semCredits = [20,20,21,19,22,18,24,16]
    var total = 0;
    var i = 0;
      for(let key in props.score){
        total+=(props.score[`${key}`])*semCredits[i]
        i+=1
      }


      console.log("Total is ",total);
      var denom = 0
    if(i==2){
      denom=40
    }
    if(i==3){
      denom=61
    }
    if(i==4){
      denom=80
    }
    if(i==5){
      denom=102
    }
    if(i==6){
      denom=120
    }
    if(i==7){
      denom=144
    }
    if(i==8){
      denom=160
    }
    console.log("denominator is ",denom);
    const totalcgpa = (total/denom).toFixed(2)

    const handleOnClose = (e) => {
        if(e.target.id === "container"  || e.target.id === "close" )
        props.click();
      };

  return (
    <div
          id="container"
            onClick={handleOnClose}
            className=" fixed bg-black bg-opacity-30 backdrop-blur-sm  inset-0 flex items-center justify-center "
          >
            <div className="bg-white p-2 relative rounded-xl w-64 h-52 flex flex-col items-center justify-center ">
              <div className="top text-center text-4xl font-bold text-black" >CGPA<br />
              </div>
              <div className="res m-7 text-center bg-green-700 text-5xl rounded-2xl p-2 text-white ">{totalcgpa}</div>
            <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" className="w-5 absolute top-2 right-2 cursor-pointer" alt="" onClick={handleOnClose} id="close" />
            </div>
          </div>
  )
}

export default cgpasheet2
