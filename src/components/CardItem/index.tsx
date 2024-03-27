import React, { useState } from "react";
import s from "./carditem.module.scss";
import { Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { ItemType } from "../Dashboard";

type CardItemType = {
  item: ItemType;
  onRemoveItem: (i: any) => void;
  saveHandler: (item: ItemType) => void;
};

const CardItem: React.FC<CardItemType> = ({
  item,
  onRemoveItem,
  saveHandler,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState<string>(item.title);
  const [textAreaValue, setTextAreaValue] = useState<string>(item.body);

  const closeHandler = () => {
    onRemoveItem(item.i);
  };

  const editBtnHandler = () => {
    setEditMode(!editMode);
    if (editMode) {
      console.log("save");
      saveHandler({ ...item, title: titleValue, body: textAreaValue });
    }
  };

  const titleOnChange = (e: any) => {
    setTitleValue(e.target.value);
  };

  const textAreaOnChange = (e: any) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className={s.item}>
      <div className={s.title}>
        {editMode ? (
          <TextField
            onMouseDown={(e: any) => e.stopPropagation()}
            className={s.input}
            onChange={titleOnChange}
            label="Заголовок"
            variant="standard"
            value={titleValue}
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
            value={textAreaValue}
            onChange={textAreaOnChange}
          />
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
