// src/pages/custom/EditPriceDialog.jsx
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditPriceDialog = ({ open, handleClose, price, setPrice, courseId }) => {
  const [tempPrice, setTempPrice] = React.useState(price);

  React.useEffect(() => {
    setTempPrice(price);
  }, [price, open]);

  const handleSave = () => {
    setPrice(tempPrice);
    handleClose();
    console.log("Updated Price for Course ID:", courseId, "→", tempPrice);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="edit-course-price-dialog"
      PaperProps={{
        sx: {
          backgroundColor: "hsl(0, 0%, 14.9%)", // 🟣 Dark background
          color: "#fff",
          borderRadius: "16px",
          border: "1px solid rgba(220, 96, 255, 0.4)", // accent border
          boxShadow: "0 0 30px rgba(220, 96, 255, 0.2)", // subtle glow
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          color: "#dc60ff",
          fontWeight: 600,
          fontSize: "1.1rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(220, 96, 255, 0.2)",
        }}
      >
        Edit Price for Course #{courseId}
      </DialogTitle>

      <DialogContent
        sx={{
          mt: 2,
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          label="Course Price (₹)"
          type="number"
          fullWidth
          variant="outlined"
          value={tempPrice}
          onChange={(e) => setTempPrice(Number(e.target.value))}
          sx={{
            input: { color: "#fff" },
            label: { color: "#ccc" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#dc60ff70" },
              "&:hover fieldset": { borderColor: "#dc60ff" },
              "&.Mui-focused fieldset": { borderColor: "#dc60ff" },
            },
          }}
        />
      </DialogContent>

      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
          borderTop: "1px solid rgba(220, 96, 255, 0.2)",
          pt: 1,
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            color: "#fff",
            borderColor: "#555",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            backgroundColor: "#dc60ff",
            color: "#20002b",
            "&:hover": { backgroundColor: "#e47bff" },
            fontWeight: 600,
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPriceDialog;
