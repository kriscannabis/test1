import Card from "@mui/material/Card";
import React, { useLayoutEffect, useRef, useState } from "react";
import s from "./carditem.module.scss";
import { Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

type CardItemType = {
  item: {
    i: number | string;
    x: number;
    y: number;
    w: number;
    h: number;
    title: string;
    body: string;
  };
  onRemoveItem: (i: any) => void;
};

const CardItem: React.FC<CardItemType> = ({ item, onRemoveItem }) => {
  const [editMode, setEditMode] = useState(false);

  const closeHandler = (e: any) => {
    onRemoveItem(item.i);
  };

  const editBtnHandler = () => {
    setEditMode(!editMode);
  };

  

  return (
    <div className={s.item}>
      <div className={s.title}>
        {editMode ? (
          <TextField
            onMouseDown={(e: any) => e.stopPropagation()}
            className={s.input}
            // id="standard-basic"
            label="Заголовок"
            variant="standard"
            value={item.title}
          />
        ) : (
          <Typography variant="h6">{item.title}</Typography>
        )}
        <span
          className="closebtn"
          onMouseDown={(e: any) => e.stopPropagation()}
          onClick={closeHandler}
        >
          <CloseIcon />
        </span>
      </div>
      <div className={s.body}>
        {editMode ? (
          <textarea
          onMouseDown={(e: any) => e.stopPropagation()}
          className={s.input}
          value={item.body}
          
        />
          // <TextField
          //   className={s.input}
          //   onMouseDown={(e: any) => e.stopPropagation()}
          //   // id="standard-multiline-static"
          //   label="Описание"
          //   multiline
          //   defaultValue="Default Value"
          //   variant="standard"
          //   value={item.body}
          //   minRows={4}
          //   maxRows={20}
          // />
        ) : (
          <Typography variant="body1">{item.body}</Typography>
        )}
      </div>

      <div className={s.editbtnContainer}>
        {editMode ? (
          <Button
            onMouseDown={(e: any) => e.stopPropagation()}
            onClick={editBtnHandler}
            className={s.editbtn}
          >
            <SaveIcon /> Сохранить
          </Button>
        ) : (
          <Button
            onMouseDown={(e: any) => e.stopPropagation()}
            onClick={editBtnHandler}
            className={s.editbtn}
          >
            <EditIcon /> Редактировать
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardItem;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

function useBeforeRender(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
