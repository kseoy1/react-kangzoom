import React from "react";
import { Divider, Paper, Typography } from "@mui/material";

const Card = ({
  data: { subject, content, create_date, image, like, view },
}) => {
  return (
    <Paper elevation={4} style={{ borderRadius: "8px" }}>
      <img
        src={image}
        alt={subject}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <div style={{ padding: "12px 18px 18px 18px" }}>
        {/* header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h6">
            {subject}
          </Typography>
          <Typography variant="body1">{create_date}</Typography>
        </div>
        <Divider />

        {/* content */}
        <Typography
          component="div"
          style={{ padding: "12px 0" }}
          variant="body2"
        >
          {content}
        </Typography>

        <Divider />
        {/* footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap : "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "12px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="tomato"
            >
              <path
                data-name="Path 424"
                d="M770.5 679.217a2.483 2.483 0 0 0-2.5 2.467 7.794 7.794 0 0 0 2.246 4.743 28.165 28.165 0 0 0 3.754 3.516 28.228 28.228 0 0 0 3.754-3.516 7.8 7.8 0 0 0 2.246-4.743 2.5 2.5 0 0 0-5 0 1 1 0 0 1-2 0 2.483 2.483 0 0 0-2.5-2.467m3.5-.341a4.507 4.507 0 0 0-8 2.808 9.711 9.711 0 0 0 2.727 6.044 32.3 32.3 0 0 0 4.659 4.278 1 1 0 0 0 1.228 0 32.351 32.351 0 0 0 4.659-4.278 9.711 9.711 0 0 0 2.727-6.044 4.507 4.507 0 0 0-8-2.808"
                transform="translate(-766.002 -677.217)"
              />
            </svg>
            <Typography variant="body2" style={{ marginLeft: "4px" }}>
              {like}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "12px",
            }}
          >
            <svg
              class="w-6 h-6"
              width="18px"
              height="18px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            <Typography variant="body2" style={{ marginLeft: "4px" }}>
              {like}
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Card;
