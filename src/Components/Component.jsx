import React, { useEffect, useState } from "react";
import styles from "./Component.module.css";
import axios from "axios";
import Card from "../Card/Card";

const Component = () => {

  const [page , setPage] = useState(1);
   const [box, setBox] = useState({
    data: [],
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
  });
  const [loading, setLoading] = useState(false);

  let api_key = "pTa9jay42wAsBFkNsOrgyTRE9dgOdXWJQi1hqUvLfCs";

  useEffect(() => {
    fetchData(page);
  }, [page]);

  let fetchData = async (page) => {
    let res = await axios.get(
      `https://api.unsplash.com/photos/?page=${page}&per_page=28&client_id=${api_key}`
    );
    console.log(box.data);

    setBox({

      ...box ,
        data : [
          ...box.data,
          ...res.data
        ],
        // page : (box.page) + 1,
        box1 : (page )* 7,
        box2 : (page ) * 7 * 2,
        box3 : (page) * 7 * 3,
        box4 : (page ) * 7 * 4,

    }
    )
  };

  useEffect(() => {
    let handleScroll = () => {
      console.log(
        Math.ceil(window.scrollY + window.innerHeight),
        document.body.offsetHeight
      );

      if (Math.ceil(window.scrollY + window.innerHeight) >=document.body.offsetHeight) {
        console.log("updating page");
        console.log("page : " , page);

       setPage(prev => prev + 1);
       console.log(" page updated");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // let fetchData2 = async (page) => {
  //   let res = await axios.get(
  //     `https://api.unsplash.com/photos/?page=${page}&per_page=28&client_id=${api_key}`
  //   );
  //   console.log(box.data);

  //   setBox({
  //     ...box,
  //     data: [...box.data, ...res.data],
  //     box1: (box.page + 1) * 7,
  //     box2: (box.page + 1) * 7 * 2,
  //     box3: (box.page + 1) * 7 * 3,
  //     box4: (box.page + 1) * 7 * 4,
  //   });
  // };

  // useEffect(() => {
  //   fetchData2(box.page);
  // }, [loading]);

  const callApi = () => {
    // setPage(page + 1);
  };

  console.log("to return section");
  let newArr1 = box.data.slice(0,box.box1);
  let newArr2 =  box.data.slice(box.box1, box.box2);
  let newArr3 = box.data.slice(box.box2, box.box3);
  let newArr4 = box.data.slice(box.box3, box.box4)
  return (
    <div>
      <button onClick={callApi}>Call</button>

      <div className={styles.parent}>
        <div className={styles.box}>
          
          { 
       newArr1.map((ele, index) => {
            return <Card key={ele.id + " " + index} {...ele} />;
            // console.log(ele);
          })}
        </div>
        <div className={styles.box}>
          {newArr2.map((ele, index) => {
            // console.log(ele);
            return <Card key={ele.id + " " + index} {...ele} />;
          })}
        </div>
        <div className={styles.box}>
          {newArr3.map((ele, index) => {
            // console.log(ele);
            return <Card key={ele.id + " " + index} {...ele} />;
          })}
        </div>
        <div className={styles.box}>
          {newArr4.map((ele, index) => {
            // console.log(ele);
            return <Card key={ele.id + " " + index} {...ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Component;
