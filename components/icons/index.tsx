import { BsChat, BsCardList } from "react-icons/bs";

export function getIcons(name: string, size: number, color?: string) {
  switch (name) {
    case "chat":
      return <BsChat size={size} color={color} />;
    case "cardList":
      return <BsCardList size={size} color={color} />;
    default:
      console.log("Not implemented!");
      return;
  }
}
