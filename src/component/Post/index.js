import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { formatBytes, write } from "../../util";
import { useRecoilState } from "recoil";
import { globalState } from "../../atom/common";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
};

const Post = () => {
  const [, setUpdate] = useRecoilState(globalState);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [fileInfos, setFileInfos] = useState({
    src: "",
    alt: "",
  });
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const fileUpload = (e) => {
    console.log(e.target.files);
    console.log(JSON.stringify(e.target.files[0]));

    setFileSize(formatBytes(e.target.files[0].size, 2));
    setFileInfos({
      src: URL.createObjectURL(e.target.files[0]),
      alt: e.target.files[0].name,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    return;
  };

  const Writing = () => {
    write(data);
    setUpdate({ noUseNumbering: new Date().getTime() });
    toggle();
  };

  useEffect(() => {
    return () => {
      setFileSize(null);
      setFileInfos({
        src: "",
        alt: "",
      });
    };
  }, [open]);

  return (
    <>
      <IconButton onClick={toggle}>
        <AddIcon fontSize="large" />
      </IconButton>

      <Dialog open={open} onClose={toggle} fullWidth maxWidth="md">
        {/* 헤더 */}
        <DialogTitle>글쓰기</DialogTitle>

        {/* 바디 */}
        <DialogContent>
          {/* 진짜 글에 대한 데이터 */}
          <form style={styles.form}>
            <TextField
              name="subject"
              onChange={handleChange}
              label="제목"
              variant="filled"
            />
            <TextField
              name="content"
              onChange={handleChange}
              label="내용"
              variant="filled"
              multiline
              rows={6}
            />
            <label>
              <input
                onChange={fileUpload}
                style={{ display: "none" }}
                type="file"
                accept="image/*"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "12px",
                  border: "2px dashed #165fc7",
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "24px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  ></path>
                </svg>
              </div>
            </label>
          </form>

          {fileInfos && (
            <img
              src={fileInfos.src}
              alt={fileInfos.alt}
              style={{ display: "block", margin: "16px auto" }}
            />
          )}
          <p>{fileSize ?? "파일을 올려주세요."}</p>
        </DialogContent>

        {/* 액션 */}
        <DialogActions>
          <Button onClick={toggle}>취소</Button>
          <Button variant="contained" onClick={Writing}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
