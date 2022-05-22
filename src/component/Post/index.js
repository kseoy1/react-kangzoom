import React, { useState } from "react";
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

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap : "24px"
  },
};

const Post = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

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
            <TextField label="제목" variant="filled" />
            <TextField label="내용" variant="filled" multiline />
          </form>
        </DialogContent>

        {/* 액션 */}
        <DialogActions>
          <Button onClick={toggle}>취소</Button>
          <Button variant="contained">확인</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
