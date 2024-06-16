import {
  Box,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { grey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";

const List = () => {
  const url = "http://localhost:4000";

  const [list, setList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [shoeIdToDelete, setShoeIdToDelete] = useState(null);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/shoe/list`);
    if (response.data.success) {
      setList(response.data.data);
      toast.success("Data fetched successfully");
    } else {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleDelete = async () => {
    const response = await axios.post(`${url}/api/shoe/remove`, {
      id: shoeIdToDelete,
    });
    await fetchList();
    setOpenDialog(false);
    if (response.data.success) {
      toast.success("Shoe removed successfully");
    } else {
      toast.error("Error removing shoe");
    }
  };

  const handleDialogOpen = (shoeId) => {
    setShoeIdToDelete(shoeId);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Stack sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Shoe List
        </Typography>
        <Stack sx={{}}>
          {list.map((item) => (
            <Stack
              display={"flex"}
              spacing={2}
              direction={"row"}
              key={item._id}
              sx={{
                p: 2,
                border: "1px solid #ccc",
                borderRadius: 4,
                mt: 2,
                backgroundColor: grey[500],
              }}>
              <Box flex={1}>
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  style={{ width: 100, height: 100 }}
                />
              </Box>

              <Stack direction={"row"} display={"flex"} flex={4} spacing={6}>
                <Stack spacing={2} flex={1}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.category}
                  </Typography>
                  <Typography>Shoe Name: {item.name}</Typography>
                </Stack>
                <Stack flex={2}>
                  <Typography>Description: </Typography>
                  <Typography>{item.description}</Typography>
                </Stack>

                <Typography flex={1} variant="h5" sx={{ color: "orange" }}>
                  £ {item.price}
                </Typography>
                <DeleteIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDialogOpen(item._id)}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle sx={{ fontWeight: 600 }}>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this shoe?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleDialogClose}
            color="primary">
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleDelete} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default List;

// import { Box, Stack, Typography } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// import { grey } from "@mui/material/colors";
// import DeleteIcon from "@mui/icons-material/Delete";

// const List = () => {
//   const url = "http://localhost:4000";

//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/shoe/list`);
//     if (response.data.success) {
//       setList(response.data.data);
//       toast.success("Data fetched successfully");
//     } else {
//       toast.error("Error fetching data");
//     }
//   };
//   useEffect(() => {
//     fetchList();
//   }, []);

//   const handleDelete = async (shoeId) => {
//     console.log(shoeId);
//     const response = await axios.post(`${url}/api/shoe/remove`, { id: shoeId });
//     await fetchList();
//     if (response.data.success) {
//       toast.success("Shoe removed successfully");
//     } else {
//       toast.error("Error removing shoe");
//     }
//   };

//   return (
//     <div>
//       <Stack sx={{ p: 4 }}>
//         <Typography variant="h6" sx={{ fontWeight: 600 }}>
//           All Shoe List
//         </Typography>
//         <Stack sx={{}}>
//           {list.map((item) => (
//             <Stack
//               display={"flex"}
//               spacing={2}
//               direction={"row"}
//               key={item._id}
//               sx={{
//                 p: 2,
//                 border: "1px solid #ccc",
//                 borderRadius: 4,
//                 mt: 2,
//                 backgroundColor: grey[500],
//               }}>
//               <Box flex={1}>
//                 <img
//                   src={`${url}/images/${item.image}`}
//                   alt={item.name}
//                   style={{ width: 100, height: 100 }}
//                 />
//               </Box>

//               <Stack direction={"row"} display={"flex"} flex={4} spacing={6}>
//                 <Stack spacing={2} flex={1}>
//                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                     {item.category}
//                   </Typography>
//                   <Typography>Shoe Name: {item.name}</Typography>
//                 </Stack>
//                 <Stack flex={2}>
//                   <Typography>Description: </Typography>
//                   <Typography>{item.description}</Typography>
//                 </Stack>

//                 <Typography flex={1} variant="h5" sx={{ color: "orange" }}>
//                   £ {item.price}
//                 </Typography>
//                 <DeleteIcon
//                   sx={{ cursor: "pointer" }}
//                   onClick={() => handleDelete(item._id)}
//                 />
//               </Stack>
//             </Stack>
//           ))}
//         </Stack>
//       </Stack>
//     </div>
//   );
// };

// export default List;
