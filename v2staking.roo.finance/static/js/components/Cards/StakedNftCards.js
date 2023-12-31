import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import placeHolder from "../../images/placeholder.png";
import { getJSON } from "../common/utils";
import { ToastContainer } from "react-toastify";

const StakedNftCards = ({ item, cardSelectHandle, selectedNfts }) => {
  const [selected, setSelected] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const selectorhandler = (id) => {
    if (selectedNfts.length > 40) {
      setSelected(false);
      cardSelectHandle(id);
    } else {
      setSelected(!selected);
      cardSelectHandle(id);
    }
  };

  useEffect(() => {
    if (item.token_uri) {
      const image = getJSON(item.token_uri);
      image.then((data) => {
        let cleanUri = data.image.replace("ipfs://", "https://roofinance.mypinata.cloud/ipfs/") + "?pinataGatewayToken=gbJG5vqDy1CBfGr5gsda5zYGK3tXowqyDUqCjgRNO9xM1Oyb33Rk4ng2mBML5VM0";
        setImageUri(cleanUri);
      });
    }
  });

  const cardSelectionHandler = () => {
    selectorhandler(item.token_id);
  };

  return (
    <>
    <ToastContainer/>
    <Box
      sx={{
        backgroundColor: "#00000069",
        borderRadius: "10px",
        boxShadow: "0 0 5px -1px #00000069",
        cursor: "pointer",
        height: "calc(100% - 25px)",
        marginBottom: "25px",
        overflow: "hidden",
        padding: "14px",
        position: "relative",
      }}
      onClick={cardSelectionHandler}
    >
      <Typography
        component={"img"}
        sx={{ height: "auto", width: "100%", borderRadius: "8px" }}
        // src={item.picture}
        src={imageUri ? imageUri : "/img/placeholder.png"}
        alt=""
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
          marginTop: "16px",
        }}
      >
        <Typography
          component={"h4"}
          sx={{ fontSize: "17px", fontWeight: 500, textAlign: "left" }}
        >
          {item.name}
        </Typography>
        <Typography
          component={"span"}
          sx={{ fontSize: "15px", fontWeight: 400 }}
        >
          #{item.token_id}
        </Typography>
      </Box>
      {selectedNfts.includes(item.token_id) && (
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "#00000069",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            left: "0",
            position: "absolute",
            top: "0",
            width: "100%",
            "& p": {
              backgroundColor: "#00000069",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "20px",
              padding: "1px 10px",
            },
          }}
        >
          <Typography component={"p"}>Selected</Typography>
        </Box>
      )}
    </Box>
    </>

  );
};

export default StakedNftCards;
