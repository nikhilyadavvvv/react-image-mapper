import React, { useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import areas from "./areas";
import image from "./museum_poster.png";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const URL = image;
  const MAP = {
    name: "my-map",
    areas: areas,
  };
  const [description, setDescription] = useState("demo description");
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [pointerVisibile, setPointerVisibile] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPointerVisibile(true);
    }, 500);
  }, [pointerVisibile]);

  return (
    <div style={{ position: "relative" }}>
      {pointerVisibile ? (
        <AnimatedCursor
          trailingSpeed={3}
          color="29, 78, 155"
          innerSize={10}
          outerSize={25}
        />
      ) : (
        <></>
      )}
      <div style={{ paddingLeft: 50, marginTop: 20 }}>
        <ImageMapper
        toggleHighlighted={true}
          src={URL}
          map={MAP}
          responsive
          parentWidth={window.innerWidth - 100}
          onClick={(event) => {
            console.log(event);
            setDescription(event.title);
            setDescriptionVisible(true);
          }}
        />
      </div>
      {descriptionVisible ? (
        <div
          onClick={() => {
            setDescriptionVisible(false);
            setPointerVisibile(false);
          }}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            marginTop: -20,
            top: 0,
            left: 0,
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#1d4e9b",
              padding: 20,
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.39)",
              borderRadius: 5,
              opacity: 0.9,
              position: "relative",
            }}
          >
            <span style={{ color: "white" }}>{description}</span>
            <div
              style={{
                width: 50,
                height: 50,
                backgroundColor: "white",
                borderRadius: 50,
                boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.2)",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                top: 0,
                right: 0,
                position: "absolute",
                marginTop: -30,
                marginRight: -30,
                color: "red",
              }}
            >
              x
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
