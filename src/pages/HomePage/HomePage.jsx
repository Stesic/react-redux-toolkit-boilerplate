import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExample, selectExampleData, selectIsLoading } from "store/slices/exampleSlice";

const HomePage = () => {

  const exampleData = useSelector(selectExampleData)
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const fetchExampleData = async()=>{
     await dispatch(fetchExample("todos"))

  }
  console.log(exampleData)
  
  useEffect(()=>{
    fetchExampleData()
  },[])

  if(isLoading){
    return <p>loading...</p>
  }
  return <div>{exampleData.map(item=> <p key={item.id}>{item.title}</p>)}</div>;
};

export default HomePage;
