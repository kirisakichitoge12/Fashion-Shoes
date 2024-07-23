import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, List, ListItem, ListItemText, Select, MenuItem, TextField, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fff',
    maxWidth: 1180,
    boxShadow: 'none',
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
  },
  leftColumn: {
    flex: 7,
    margin: theme.spacing(2),
  },
  rightColumn: {
    flex: 4,
    margin: theme.spacing(2),
  },
  productDescription: {
    color: 'rgb(130, 134, 158)',
    marginTop: theme.spacing(2),
  },
  productDetails: {
    color: 'rgb(130, 134, 158)',
    marginTop: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: '50%',
  },
  table: {
    marginTop: theme.spacing(2),
  },
  seeMore: {
    color: '#00ccff',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

const ProductDescription = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.container}>
      <Box className={classes.leftColumn}>
        <Typography variant="h5" component="span">Mô tả sản phẩm</Typography>
        <Typography className={classes.productDescription}>
          MSI, được biết đến như một trong những thương hiệu hàng đầu trong lĩnh vực laptop gaming, tiếp tục chứng minh sự đổi mới và sáng tạo của mình với chiếc laptop MSI Cyborg 15 A12VE-412VN. Điểm độc đáo của sản phẩm này không chỉ nằm ở thiết kế ngoại hình bắt mắt mà còn ở hiệu năng mạnh mẽ mà nó mang lại.
        </Typography>
        <Typography variant="h6" component="span" className={classes.productDetails}>
          Kích thước 359.36 x 250.34 x 21.95~22.9 mm phù hợp trải nghiệm gaming
        </Typography>
        <Typography className={classes.productDetails}>
          Với kích thước 359.36 x 250.34 x 21.95~22.9 mm và trọng lượng chỉ 2 kg, MSI Cyborg 15 A12VE-412VN không thuộc dạng laptop siêu nhẹ, tuy nhiên, sự hy sinh về trọng lượng này là hoàn toàn đáng kể để có được trải nghiệm gaming chất lượng. Thiết kế của chiếc laptop này được chăm chút đặc biệt để tối ưu hóa trải nghiệm gaming, với các đường cắt và đèn LED RGB tạo nên vẻ đẹp độc đáo và thu hút
        </Typography>
        <img src={productImage} alt="Product" className={classes.image} />
      </Box>
      <Box className={classes.rightColumn}>
        <Typography variant="h5" component="span">Thông tin chi tiết</Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Jacob</TableCell>
                <TableCell>Mark</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jacob</TableCell>
                <TableCell>Jacob</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jacob</TableCell>
                <TableCell>@twitter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jacob</TableCell>
                <TableCell>@twitter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jacob</TableCell>
                <TableCell>@twitter</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.seeMore}>
          <Button onClick={handleOpen}>
            Xem thêm nội dung
            <ArrowDropDownIcon />
          </Button>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box>
          {/* Add your modal content here */}
        </Box>
      </Modal>
    </Box>
  );
};

const ProDetailNe = () => {
  const [largeImageSrc, setLargeImageSrc] = useState('https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-sapphire-white-royal-blue-gum-like-auth-510x510.jpg');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const changeLargeImage = (img) => {
    setLargeImageSrc(img.src);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: 'rgb(248, 248, 252)', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', color: 'rgb(167, 171, 195)' }}>
        <Typography variant="subtitle2">Trang chủ</Typography>
        <Typography variant="subtitle2" mx={1}>/</Typography>
        <Typography variant="subtitle2">Giày Nike</Typography>
        <Typography variant="subtitle2" mx={1}>/</Typography>
        <Typography variant="subtitle2"> Giày Nike Jordan 4 Sapphire White Royal Blue Gum Like Auth</Typography>
      </Box>

      <Grid container mt={4}>
        <Grid item lg={4}>
          <Card sx={{ boxShadow: 1 }}>
            <CardMedia
              component="img"
              image={largeImageSrc}
              alt="Large Image"
              id="largeImage"
              sx={{ cursor: 'pointer', maxHeight: '300px' }}
            />
            <Grid container spacing={1} mt={2}>
              {['https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-sapphire-white-royal-blue-gum-like-auth-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-white-blue-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-trang-xanh-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-white-royal-blue-gum-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-white-royal-blue-gum-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-trang-xanh-247x247.jpg'].map((src, index) => (
                <Grid item xs={2} key={index}>
                  <CardMedia
                    component="img"
                    image={src}
                    alt={`Small Image ${index + 1}`}
                    sx={{ cursor: 'pointer', minWidth: '50px' }}
                    onClick={(e) => changeLargeImage(e.currentTarget)}
                  />
                </Grid>
              ))}
            </Grid>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText primary="Mã sản phẩm: Đang cập nhập" />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Thương hiệu: Jordan 4' />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Màu sắc: Trắng, Xanh" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Kích thước: 36-41" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={8}>
          <Card sx={{ boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h5"> Giày Nike Jordan 4 Sapphire White Royal Blue Gum Like Auth</Typography>
              <Typography variant="body2" color="textSecondary">
                Thương hiệu <span style={{ color: '#00ccff' }}>Nike</span> | SKU: 230603065
              </Typography>
              <Typography variant="h4" color="primary" mt={2}>
                2.290.000₫
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                2.619.000₫
              </Typography>
              <Typography variant="body2" color="secondary">
                -12.562%
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={2}>
                KHUYẾN MÃI ĐÃ NHẬN
              </Typography>
              {Array(3).fill().map((_, index) => (
                <Box key={index} display="flex" alignItems="center" mt={2}>
                  <CardMedia
                    component="img"
                    image="https://shopfront-cdn.tekoapis.com/cart/gift-filled.png"
                    alt="Gift Icon"
                    sx={{ width: 25, height: 25 }}
                  />
                  <Typography variant="body2" color="textSecondary" ml={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
              ))}

              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Chọn Size
                  </Typography>
                  <Select
                    value={size}
                    onChange={handleSizeChange}
                    displayEmpty
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="" disabled>
                      Chọn size
                    </MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={37}>37</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                    <MenuItem value={39}>39</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={41}>41</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Chọn Số Lượng
                  </Typography>
                  <TextField
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    inputProps={{ min: 1 }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Thêm vào giỏ hàng
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const DetailNe = () => {
  return (
    <div>
      <ProductDescription />
      <ProDetailNe />
    </div>
  );
};

export default DetailNe;
