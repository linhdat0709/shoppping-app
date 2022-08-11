import { useEffect, useRef, useState } from "react";
import { ImgType } from "../../ConstantType/ConstantType";
import {
  StyledSidebarItem,
  StyleSidebarItemTitle,
  StyleSidebarSlide,
} from "../Sidebar/Sidebar.style";

interface Props {
  img: ImgType[];
}

const useGetSizeOfElement = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<any>({});

  useEffect(() => {
    if (itemRef.current) {
      setSize(itemRef.current.getBoundingClientRect());
    }
  }, [itemRef]);

  return { itemRef, size };
};

const Slide = (props: Props) => {
  const { img } = props;

  const [index, setIndex] = useState<number>(0);

  const { itemRef, size } = useGetSizeOfElement();

  const timeoutRef = useRef<any>(null);

  const delay = 2500;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <StyleSidebarSlide
      ref={itemRef}
      style={{
        transform: `translate3d(${-index * 100}%, 0 , 0)`,
        display: "flex",
      }}
    >
      {img.map((item, index) => (
        <StyledSidebarItem key={index}>
          <div
            className="sidebarItemImg"
            key={index}
            style={{ width: size.width }}
          >
            <img src={item.url} alt="img" />
          </div>
          <StyleSidebarItemTitle>{item.ten}</StyleSidebarItemTitle>
        </StyledSidebarItem>
      ))}
    </StyleSidebarSlide>
  );
};

export default Slide;
