import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Verify = (props) => {
  const [res, setRes] = useState("");
  const { token } = useParams();
  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/verify/${token}`);
    if (res.statusText === "OK") window.location.href = "/";
  });
  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
};

export default Verify;
