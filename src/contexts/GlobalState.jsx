import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

export default function GlobalState() {
  const [page, setPage] = useState("HomePage");


  return {
    page,
    setPage,

  };
}
