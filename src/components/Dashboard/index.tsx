import React, { useEffect, useLayoutEffect, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import Card from "@mui/material/Card";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import s from "./dashboard.module.scss";
import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CardItem from "../CardItem";

const MyFirstGrid = () => {
  const [layout, setLayout] = useState([
    {
      i: "0",
      x: 0,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 4,
      title: "Карточка 1",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      i: "1",
      x: 2,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 4,
      title: "Заголовок",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      i: "2",
      x: 4,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 4,
      title: "Тест",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      i: "3",
      x: 6,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 4,
      title: "Тест 1",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ]);

  const onRemoveItem = (i: any) => {
    console.log("removing", i);
    setLayout(layout.filter((t) => t.i !== i));
  };

  const addCard = () => {
    const catdId = layout.length.toString();
    const tempCard = {
      i: catdId,
      x: 0,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 4,
      title: `Карточка ${catdId}`,
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    };

    setLayout([tempCard, ...layout]);
  };

  const onLayoutChange = (oplayout: any) => {
    setLayout(
      oplayout.map((opItem: any) => {
        return {
          ...layout.find((item) => opItem.i == item.i),
          ...opItem
        };
      })
    );
  };

  return (
    <div>
      <Button onClick={addCard}>Добавить карточку</Button>
      <GridLayout
        className={s.layout}
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {layout.map((item) => (
          <Card
            className={s.item}
            key={item.i}
            // onMouseDown={onDrop}
          >
            <CardItem item={item} onRemoveItem={onRemoveItem} />
          </Card>
        ))}
      </GridLayout>
    </div>
  );
};

export default MyFirstGrid;
