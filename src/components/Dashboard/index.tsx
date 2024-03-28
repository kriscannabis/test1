import { useState } from "react";
import GridLayout from "react-grid-layout";
import Card from "@mui/material/Card";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import s from "./dashboard.module.scss";
import { Button } from "@mui/material";
import CardItem from "../CardItem";

export type ItemType = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  maxW: number;
  title: string;
  body: string;
};

const MyFirstGrid = () => {
  const [layout, setLayout] = useState<ItemType[]>([
    {
      i: "0",
      x: 0,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 6,
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
      maxW: 6,
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
      maxW: 6,
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
      maxW: 6,
      title: "Тест 1",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ]);

  const onRemoveItem = (i: string) => {
    setLayout(layout.filter((t) => t.i !== i));
  };

  const saveHandler = (item:ItemType )=>{
    console.log()
    setLayout([...layout.filter(card=>card.i != item.i), item])
  }

  const addCard = () => {
    const catdId = layout.length.toString();
    const tempCard = {
      i: catdId,
      x: 0,
      y: 0,
      w: 2,
      h: 8,
      minW: 2,
      maxW: 6,
      title: `Карточка ${catdId}`,
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    };

    setLayout([tempCard, ...layout]);
  };

  const onLayoutChange = (oplayout: any) => {
    setLayout(
      oplayout.map((opItem: any) => {
        return {
          ...layout.find((item) => opItem.i === item.i),
          ...opItem
        };
      })
    );
  };

  return (
    <div>
      <Button variant="contained" onClick={addCard}>Добавить карточку</Button>
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
            <CardItem 
              item={item} 
              saveHandler={saveHandler}
              onRemoveItem={onRemoveItem} 
            />
          </Card>
        ))}
      </GridLayout>
    </div>
  );
};

export default MyFirstGrid;
