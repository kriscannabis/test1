import Card from "@mui/material/Card";
import React, { useLayoutEffect, useRef } from "react";
import s from "./carditem.module.scss";
import { Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


type CardItemType = {
  item: {
    i: number|string;
    x: number;
    y: number;
    w: number;
    h: number;
    title: string;
    body: string;    
  };
  onRemoveItem: (i:any)=>void;
};

const CardItem: React.FC<CardItemType> = ({ item, onRemoveItem }) => {
  const closebtnRef = useRef(null);
  
  const closeHandler = (e:any)=>{
    e.stopPropagation();
    onRemoveItem(item.i)
  }

  useLayoutEffect(()=>{
    console.log (closebtnRef)
    const closeCallback = (event:any) => {
      event.stopPropagation();
      console.log('Button clicked');
    }

    //@ts-ignore
    closebtnRef.current.addEventListener('click', closeCallback);
    //@ts-ignore
    return closebtnRef.current.removeEventListener('click', closeCallback)
  },[])

  return (
    <div className={s.item}>
      <div className={s.title}>
        <Typography variant="h6">{item.title}</Typography>
        <span
          className="non-draggable closebtn"
          ref={closebtnRef}
          // className="closebtn"
          style={{
            zIndex: 2,
            position: "absolute",
            right: 10,
            cursor: "pointer",
          }}
          onClick={closeHandler}
        >
          <CloseIcon />
        </span>
      </div>
      <div className={s.body}>
        <Typography variant="body1">{item.body}</Typography>
      </div>
    </div>
  );
};

export default CardItem;
