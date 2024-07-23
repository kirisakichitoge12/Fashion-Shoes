import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, List, ListItem, ListItemText, Select, MenuItem, TextField, Button } from '@mui/material';

const ProDetail = () => {
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
              {['https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-sapphire-white-royal-blue-gum-like-auth-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-white-blue-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-trang-xanh-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-white-royal-blue-gum-510x510.jpg', 'https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-white-royal-blue-gum-510x510.jpg','https://giaydino.com/wp-content/uploads/2024/07/giay-nike-jordan-4-trang-xanh-247x247.jpg'].map((src, index) => (
                <Grid item xs={2} key={index}>
                  <CardMedia
                    component="img"
                    image={src}
                    alt={`Small Image ${index + 1}`}
                    sx={{ cursor: 'pointer', minWidth: '50px'}}
                    onClick={(e) => changeLargeImage(e.currentTarget)}
                  />
                </Grid>
              ))}
            </Grid>
            <CardContent
            sx={{ cursor: 'pointer', maxHeight: '145px' }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Mã sản phẩm: Đang cập nhập" />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Thương hiệu: Jordan 4' />
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

        <Grid item lg={12}  mt={2}>
          <Card sx={{ boxShadow: 1 }}> 
            <Box p={2}>
              <Typography variant="h5" component="h5">
              Mua Giày Nike Jordan 4 Trắng Xanh ngay tại Giaydino.com
              </Typography>
              <Typography variant="body1" component="p">
              Việc mua sắm tại Giaydino.com không chỉ đơn giản mà còn đảm bảo về chất lượng và dịch vụ. Với các chính sách bảo hành và đổi trả linh hoạt, bạn có thể yên tâm khi chọn lựa những đôi Jordan 4 tại đây. Hãy trải nghiệm cảm giác thoải mái và phong cách cùng Giaydino.com ngay hôm nay!”
              </Typography>
              <Box mt={2}>
                <img src="https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-white-blue.jpg" alt="Mô tả hình ảnh" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="body1" component="p" align="center">
                Giày Nike Air Jordan 4 Sapphire White Blue
                </Typography>
              </Box>
              <Box mt={2}>
              <img src="https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-sapphire-trang-xanh.jpg" alt="Mô tả hình ảnh" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body1" component="p" align="center">
                Giày Nike Jordan 4 Sapphire White Royal Blue Gum
              </Typography>
            </Box>
            <Box mt={2}>
            <img src="https://giaydino.com/wp-content/uploads/2024/07/giay-nike-air-jordan-4-trang-xanh-sapphire-blue.jpg" alt="Mô tả hình ảnh" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="body1" component="p" align="center">
            Giày Nike Air Jordan 4 Sapphire White Blue
            </Typography>
          </Box>
            </Box>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ProDetail;
