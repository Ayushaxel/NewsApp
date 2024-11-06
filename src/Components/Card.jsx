import React, { useEffect } from "react";
import { useContext } from "react";
import ItemContext from "../Context/ItemContext";
function Card() {
  const { data, setSearch,loading } = useContext(ItemContext);
  console.log(data)
  const handleClick=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  // useEffect(()=>getData(),[])
  return (
    <div className="bg-[#eee] w-full h-screen">
        <div className="flex  justify-center gap-x-5 py-5">
            <button className="bg-[#d76f30] px-3 text-white rounded-lg text-2xl py-1" onClick={handleClick} value={'Circkit'}>Circkit</button>
            <button className="bg-[#d76f30] px-3 text-white rounded-lg text-2xl py-1" onClick={handleClick} value={'Sports'}>Sports</button>
            <button className="bg-[#d76f30] px-3 text-white rounded-lg text-2xl py-1" onClick={handleClick} value={'Entertainment'}>Entertainment</button>
            <button className="bg-[#d76f30] px-3 text-white rounded-lg text-2xl py-1" onClick={handleClick} value={'Stocks Market'}>Stocks Market</button>
            <button className="bg-[#d76f30] px-3 text-white rounded-lg text-2xl py-1" onClick={handleClick} value={'Funny'}>Funny</button>
        </div>
      <div className="  flex justify-center gap-10 pt-3 flex-wrap ">
        {loading ? (
          <p className="text-3xl mt-5  ">Loading...</p>
        ) : (
          data.map((item,index) => (
            <div key={index} className="bg-white rounded-lg flex flex-col items-center shdaow-lg w-[400px] h-[400px] p-5">
              <div>
                <img
                  src={
                    item.urlToImage
                      ? item.urlToImage
                      : "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5609x3155+0+347/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F23%2Ff5%2F537c462a45fab4d918331c694376%2Fap24298583220177.jpg"
                  }
                  alt=""
                />
              </div>
              <h1 className=" text-2xl mt-2">{item.title}</h1>
              <p className=" overflow-hidden mt-2">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Card;
