import React, {useEffect, useState} from 'react';
import Navigation from "./Navigation";

const Cell = (props) => <div className="carousel__cell"><Navigation/>{props.children}</div>;

const Layout = props => {

  const [radius, setRadius] = useState(0);
  const [theta, setTheta] = useState(0);

  useEffect(() => {
      const carousel = document.querySelector('.carousel');
      const cells = carousel.querySelectorAll('.carousel__cell');
      const cellWidth = carousel.offsetWidth;
      const cellCount = cells.length;
      setTheta(360/cellCount);
      setRadius(Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount)));
      carousel.style.transform = 'translateZ(' + -radius + 'px)';
      for (let i = 0; i < cellCount; i++) {
        const cell = cells[i];
        cell.style.opacity = 1;
        const cellAngle = theta * i;
        cell.style.transform = 'rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
      }
    }, [radius, theta]
  );

  useEffect(() => rotateTo(props.selectedPage));

  const rotateTo = n => {
    const carousel = document.querySelector('.carousel');
    const angle = theta * n * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) rotateY(' + angle + 'deg)';
  };

  return (
    <div className="scene">
      <div className="carousel">
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
      </div>
    </div>
  );
};

export default Layout;
