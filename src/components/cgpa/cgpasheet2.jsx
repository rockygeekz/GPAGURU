import React from 'react'

const cgpasheet2 = (props) => {

    var sem1Credits = 20;
    var sem2Credits = 20;
    var sem3Credits = 21;
    var sem4Credits = 19;
    var sem5Credits = 22;
    var sem6Credits = 18;
    var sem7Credits = 24;
    var sem8Credits = 16;

    console.log(props);
    // console.log(props.score['sem1']);

    const total = ((props.score['sem1']*20)+(props.score['sem2']*20)+(props.score['sem3']*21)+(props.score['sem4']*19)+(props.score['sem5']*22)+(props.score['sem6']*18)+(props.score['sem7']*24)+(props.score['sem8']*16))
    console.log(total);

    if(props.score['sem1'] == 0){
        sem1Credits = 0;
    }
     if(props.score['sem2'] == 0){
        sem2Credits = 0;
    }
     if(props.score['sem3'] == 0){
        sem3Credits = 0;
    }
     if(props.score['sem4'] == 0){
        sem4Credits = 0;
    }
     if(props.score['sem5'] == 0){
        sem5Credits = 0;
    }
     if(props.score['sem6'] == 0){
        sem6Credits = 0;
    }
     if(props.score['sem7'] == 0){
        sem7Credits = 0;
    }
     if(props.score['sem8'] == 0){
        sem8Credits = 0;
    }

    var denom = (sem1Credits+sem2Credits+sem3Credits+sem4Credits+sem5Credits+sem6Credits+sem7Credits+sem8Credits)
    console.log(denom);
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
